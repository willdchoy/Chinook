package album

import (
	"context"
	"database/sql"
	"log"
	"math/rand/v2"

	_ "github.com/lib/pq"
)

func createRandomYear() int {
	return rand.IntN(2026 - 1967) + 1967
}

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
	rows, err := r.db.Query("SELECT title, albumid, artistid, coverurl FROM album LIMIT 10")

	if err == sql.ErrNoRows {
		log.Print("Unable to retrieve albums", err)
	}
	defer rows.Close()

	var albums = []Album{}
	for rows.Next() {
		var album Album
		album.Year = createRandomYear()
		if err := rows.Scan(&album.Title, &album.Id, &album.ArtistId, &album.CoverUrl); err != nil {
			log.Print("error in rows.Next()", err)
		}

		albums = append(albums, album)
	}

	return albums
}

func (r *AlbumRepositoryImpl) GetById(ctx context.Context, albumId AlbumId) Album {
    var album = Album{}
		album.Year = createRandomYear()

    err := r.db.QueryRow("SELECT albumid, title, artistid, coverurl FROM album WHERE albumid = $1", albumId).Scan(&album.Id, &album.Title, &album.ArtistId, &album.CoverUrl)
    if err == sql.ErrNoRows {
      log.Printf("No album found with albumId %d", albumId)
    } else if err != nil {
			log.Fatal("GetById failed...", err)
    }

		return album
}
