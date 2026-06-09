package playlist

import (
	"context"
	"database/sql"
	"encoding/json"
	"log"

	_ "github.com/lib/pq"
)

type PlaylistRepository interface {
	ListPlaylists(ctx context.Context) Playlists
	GetById(ctx context.Context, playlistId PlaylistId) Playlist
}

type PlaylistRepositoryImpl struct {
	db *sql.DB
}

func NewPlaylistRepository(db *sql.DB) PlaylistRepository {
	return &PlaylistRepositoryImpl{db: db}
}

func (r *PlaylistRepositoryImpl) ListPlaylists(ctx context.Context) []Playlist {
	var playlists = Playlists{}
	
	query := `
		select * from playlist
		limit 10
	`
	rows, err := r.db.Query(query)
	if err == sql.ErrNoRows {
		log.Println("Unable to retrieve playlists", err)
		return playlists
	} else if err != nil {
		log.Println("ListPlaylists failed...", err)
		return playlists
	}

	defer rows.Close()

	for rows.Next() {
		var playlist Playlist

		if err := rows.Scan(&playlist.Id, &playlist.Title,  &playlist.Artist.Id, &playlist.CoverImageUrl,
			&playlist.Artist.Id, &playlist.Artist.Name); err != nil {
			log.Print("ListPlaylists : error scanning rows.Next()", err)
		}
		playlists = append(playlists, playlist)
	}

	return playlists
}

func (r *PlaylistRepositoryImpl) GetById(ctx context.Context, playlistId PlaylistId) Playlist {
	query := `
		SELECT json_build_object(
			'id', p.id,
			'title', p.title,
			'cover_image_url', p.cover_image_url,
			'year', p.year,
			'tracks', json_agg(
				json_build_object(
				'id', t.id,
				'title', t.title,
				'duration', t.duration,
				'composer', t.composer
				)
			),
			'artist', json_build_object(
				'id', a.id,
				'name', a.name
			)
		)
		FROM track_playlist tp
		JOIN playlist p ON p.id = tp.playlist_id
		JOIN artist a ON a.id = p.artist_id
		JOIN track t ON t.id = tp.track_id
		WHERE tp.playlist_id = $1
		GROUP BY p.id, p.title, p.cover_image_url, p.year, a.id, a.name;
	`

	var playlistData []byte
	var playlist Playlist
	
	err := r.db.QueryRow(query, playlistId).Scan(&playlistData)
	
	if err == sql.ErrNoRows {
		log.Print("Unable to retrieve playlists", err)
		return playlist
	} else if err != nil {
		log.Print("GetById failed...", err)
		return playlist
	}

	if err := json.Unmarshal(playlistData, &playlist); err != nil {
		log.Fatal(err)
	}

	return playlist
}
