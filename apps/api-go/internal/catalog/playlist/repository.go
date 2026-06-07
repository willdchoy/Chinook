package playlist

import (
	"context"
	"database/sql"
	"log"
	"math/rand/v2"

	_ "github.com/lib/pq"
)

func createRandomYear() int {
	return rand.IntN(2026-1967) + 1967
}

type PlaylistRepository interface {
	ListPlaylists(ctx context.Context) []Playlist
	GetById(ctx context.Context, albumid PlaylistId) Playlist
}

type PlaylistRepositoryImpl struct {
	db *sql.DB
}

func NewPlaylistRepository(db *sql.DB) PlaylistRepository {
	return &PlaylistRepositoryImpl{db: db}
}

func (r *PlaylistRepositoryImpl) ListPlaylists(ctx context.Context) []Playlist {
	return []Playlist{}

	// query := `
	// 	select
	// 		album.title, album.albumid, album.artistid, album.coverurl,
	// 		artist.artistid, artist.name
	// 	from album
	// 	join artist
	// 		on artist.artistid = album.artistid
	// 	limit 10
	// `
	// rows, err := r.db.Query(query)
	// if err == sql.ErrNoRows {
	// 	log.Print("Unable to retrieve albums", err)
	// 	return albums
	// } else if err != nil {
	// 	log.Print("ListPlaylists failed...", err)
	// 	return albums
	// }

	// defer rows.Close()

	// for rows.Next() {
	// 	var playlist Playlist
	// 	playlist.Year = createRandomYear()

	// 	if err := rows.Scan(&playlist.Title, &playlist.Id, &playlist.Artist.Id, &playlist.CoverUrl, &playlist.Artist.Id, &playlist.Artist.Name); err != nil {
	// 		log.Print("error in rows.Next()", err)
	// 	}

	// 	playlists = append(playlists, playlist)
	// }

	// return playlists
}

func (r *PlaylistRepositoryImpl) GetById(ctx context.Context, playlistId PlaylistId) Playlist {
	var playlist = Playlist{}
	playlist.Year = createRandomYear()
	query := `
			select 
				pl.playlistid, pl.name
			from playlist as pl
			join playlisttrack as plt
				on plt.playlistid = pl.playlistid
			join track
				on track.trackid = plt.trackid
			join album
				on album.albumid = track.albumid
			join artist
				on artist.artistid = album.artistid
			join genre
				on track.genreid = genre.genreid
			where pl.playlistid = $1
		`
	err := r.db.QueryRow(query, playlistId).Scan(&playlist.Id)
	if err == sql.ErrNoRows {
		log.Printf("No playlist found with playlistId %d", playlistId)
	} else if err != nil {
		log.Print("GetById failed...", err)
	}

	return playlist
}
