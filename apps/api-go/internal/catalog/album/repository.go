package album

import (
	"context"
	"database/sql"
	"encoding/json"
	"log"

	_ "github.com/lib/pq"
)

type AlbumRepository interface {
	ListAlbums(ctx context.Context) []Album
	GetById(ctx context.Context, albumid AlbumId) Album
}

type AlbumRepositoryImpl struct {
	db *sql.DB
}

func NewAlbumRepository(db *sql.DB) AlbumRepository {
	return &AlbumRepositoryImpl{db: db}
}

func (r *AlbumRepositoryImpl) ListAlbums(ctx context.Context) []Album {
	var albums = Albums{}
	
	query := `
		select * from albums
		limit 10
	`
	rows, err := r.db.Query(query)
	if err == sql.ErrNoRows {
		log.Println("Unable to retrieve albums", err)
		return albums
	} else if err != nil {
		log.Println("ListAlbums failed...", err)
		return albums
	}

	defer rows.Close()

	for rows.Next() {
		var album Album

		if err := rows.Scan(&album.Id, &album.Title,  &album.Artist.Id, &album.CoverImageUrl,
			&album.Artist.Id, &album.Artist.Name); err != nil {
			log.Print("ListAlbums : error scanning rows.Next()", err)
		}
		albums = append(albums, album)
	}

	return albums
}

func (r *AlbumRepositoryImpl) GetById(ctx context.Context, albumId AlbumId) Album {
	query := `
		SELECT json_build_object(
			'id', album.id,
			'title', album.title,
			'cover_image_url', album.cover_image_url,
			'year', album.year,
			'tracks', json_agg(
				json_build_object(
				'id', track.id,
				'title', track.title,
				'duration', track.duration,
				'composer', track.composer
				)
			),
			'artist', json_build_object(
				'id', artist.id,
				'name', artist.name
			)
		)
		FROM album
		LEFT JOIN track ON track.album_id = album.id
		LEFT JOIN artist ON artist.id = album.artist_id
		WHERE album.id = $1
		GROUP BY album.id, artist.id
	`

	var albumData []byte
	var album Album
	
	err := r.db.QueryRow(query, albumId).Scan(&albumData)
	
	if err == sql.ErrNoRows {
		log.Print("Unable to retrieve albums", err)
		return album
	} else if err != nil {
		log.Print("ListAlbums failed...", err)
		return album
	}

	if err := json.Unmarshal(albumData, &album); err != nil {
		log.Fatal(err)
	}

	return album
}
