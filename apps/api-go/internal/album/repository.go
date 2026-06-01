package album

import (
	"context"
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

type AlbumRepository interface {
		GetAlbums(ctx context.Context) []Album
		GetById(ctx context.Context, albumid AlbumId) Album
}

type AlbumRepositoryImpl struct {
	db *sql.DB
}

func NewAlbumRepository(db *sql.DB) AlbumRepository {
	return &AlbumRepositoryImpl{db: db}
}

func (r *AlbumRepositoryImpl) GetAlbums(ctx context.Context) []Album {
	rows, err := r.db.Query("SELECT title, albumid, artistid, coverurl FROM album LIMIT 10")
	if err == sql.ErrNoRows {
    log.Printf("Unable to retrieve albums")
	}
	defer rows.Close()

	var albums = []Album{}
	for rows.Next() {
		var alb Album

		if err := rows.Scan(&alb.Title, &alb.AlbumId, &alb.ArtistId, &alb.CoverUrl); err != nil {
			log.Print("error in rows.Next()")
		}
		albums = append(albums, alb)
	}

	return albums
}

func (r *AlbumRepositoryImpl) GetById(ctx context.Context, albumId AlbumId) Album {
    var album = Album{}

    err := r.db.QueryRow("SELECT albumid, title, artistid, coverurl FROM album WHERE albumid = $1", albumId).Scan(&album.AlbumId, &album.Title, &album.ArtistId, &album.CoverUrl)
    if err == sql.ErrNoRows {
        log.Printf("No album found with that albumid %s", albumId)
    } else if err != nil {
        log.Print("GetById failed...")
        log.Fatal(err)
    }
		
		return album
}
