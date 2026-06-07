package album

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
		select
			album.title, album.id, album.artist_id, album.cover_image_url,
			artist.id, artist.name
		from album
		join artist
			on artist.id = album.artist_id
		limit 10
	`
	rows, err := r.db.Query(query)
	if err == sql.ErrNoRows {
		log.Print("Unable to retrieve albums", err)
		return albums
	} else if err != nil {
		log.Print("ListAlbums failed...", err)
		return albums
	}

	defer rows.Close()

	for rows.Next() {
		var album Album
		album.Year = createRandomYear()

		if err := rows.Scan(&album.Title, &album.Id, &album.Artist.Id, &album.CoverImageUrl, &album.Artist.Id, &album.Artist.Name); err != nil {
			log.Print("error in rows.Next()", err)
		}
		albums = append(albums, album)
	}

	return albums
}

func (r *AlbumRepositoryImpl) GetById(ctx context.Context, albumId AlbumId) Album {
	var album = Album{}
	album.Year = createRandomYear()
	query := `
			select
				album.id, album.title, album.artist_id, album.year, album.cover_image_url,
				artist.name
			from album
			join artist
				on artist.id = album.artist_id
			where album.id = $1
		`
	err := r.db.QueryRow(query, albumId).Scan(&album.Id, &album.Title, &album.Artist.Id, &album.Year, &album.CoverImageUrl, &album.Artist.Name,)
	if err == sql.ErrNoRows {
		log.Printf("No album found with albumId %d", albumId)
	} else if err != nil {
		log.Print("GetById failed...", err)
	}

	return album
}
