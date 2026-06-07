package main

import (
	"database/sql"
	"embed"
	"fmt"
	"log"

	database "ch-client-api/internal/platform/database"

	"github.com/go-faker/faker/v4"
	"github.com/joho/godotenv"
	goose "github.com/pressly/goose/v3"
)

const (
	baseMod       = 1
	maxArtistId   = 1000  * baseMod
	maxAccountId  = 10000 * baseMod
	maxAlbumId    = 600   * baseMod
	maxTrackId    = 8000  * baseMod
	maxPlaylistId = 1000  * baseMod
	maxGenreId    = 25
	minYear       = 1977 
	maxYear       = 2026
)

//go:embed sql/*.sql
var embedMigrations embed.FS

func SeedDB() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("main.go : Error loading .env file")
	}

	db, err := database.SetupDB()
	if err != nil {
		log.Fatal("main.go : Unable to start database", err)
	}
	defer db.Close()

	SeedMigrations(db)
	SeedData(db)
}

func SeedData(db *sql.DB) {
	fmt.Print("seedDB : Adding seed data...\n")
	AddAccounts(db)
	AddArtists(db)
	AddAlbums(db)
	AddPlaylists(db)
	AddTracks(db)
	AddTrackAlbum(db)
	AddTrackArtist(db)
	AddTrackGenre(db)
	AddTrackPlaylist(db)
	fmt.Print("seedDB : Seed complete!\n")
}

func SeedMigrations(db *sql.DB) {
	goose.SetBaseFS(embedMigrations)

	if err := goose.SetDialect("postgres"); err != nil {
		panic(err)
	}

	fmt.Print("seedDB : Starting migrations...\n")
	if err := goose.Up(db, "sql"); err != nil {
		panic(err)
	}
	fmt.Print("seedDB : Migrations complete!\n")
}

// account
type Account struct {
	Id           int
	CountryCode  int    `faker:"boundary_start=1,boundary_end=248"`
	PostalCode   int    `json:"postalCode"`
	FirstName    string `faker:"first_name"`
	LastName     string `faker:"last_name"`
	UserName     string `faker:"username"`
	Email        string `faker:"email"`
	Password     string `faker:"password"`
	AccountLevel int
	CreatedAt    string `faker:"date"`
}

func AddAccounts(db *sql.DB) {
	for i := range maxAccountId {
		a := Account{}
		err := faker.FakeData(&a)
		if err != nil {
			fmt.Println("error", err)
		}

		query := `
			INSERT INTO account
				(id, country_id, postal_code, email, username, first_name, last_name, password, account_level, created_at)
			VAlUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
			`
		_, err = db.Exec(query, i, a.PostalCode, a.CountryCode, a.Email, a.UserName, a.FirstName, a.LastName, a.Password, 2, a.CreatedAt)
		if err != nil {
			fmt.Print("AddAccounts() : Failed to import faker data...", err)
		}

		fmt.Print("account ", i, "\n")
	}
}

// artist
type Artist struct {
	Id          int
	CountryCode int    `faker:"boundary_start=1,boundary_end=248"`
	PostalCode  int    `json:"postalCode"`
	Name        string `faker:"sentence" validate:"max=100"`
	UserName    string `faker:"username"`
	Email       string `faker:"email"`
	Bio         string `faker:"paragraph"`
	AccountId   int    `faker:"boundary_start=1,boundary_end=2500"`
	CreatedAt   string `faker:"date"`
}

func AddArtists(db *sql.DB) {
	for i := range maxArtistId {
		a := Artist{}
		err := faker.FakeData(&a)
		if err != nil {
			fmt.Println("error", err)
		}

		query := `
			INSERT INTO artist 
				(id, country_id, postal_code, name, username, email, bio, account_id, created_at)
			VAlUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
			`
		_, err = db.Exec(query, i, a.CountryCode, a.PostalCode, a.Name, a.UserName, a.Email, a.Bio, 2, a.CreatedAt)
		if err != nil {
			fmt.Print("AddArtists() : Failed to import faker data...", err)
		}

		fmt.Print("artists ", i, "\n")
	}
}

// album
type Album struct {
	Id            int
	Title         string `faker:"sentence"`
	ArtistId      int    `faker:"boundary_start=1, boundary_end=750"`
	Year          int    `faker:"boundary_start=1967, boundary_end=2026"`
	CoverImageUrl string `faker:"sentence"`
	CreatedAt     string `faker:"date"`
}

func AddAlbums(db *sql.DB) {
	for i := range maxAlbumId {
		a := Album{}
		err := faker.FakeData(&a)
		if err != nil {
			fmt.Println(err)
		}

		query := `
			INSERT INTO album 
				(id, title, artist_id, year, cover_image_url, created_at)
			VAlUES ($1, $2, $3, $4, $5, $6)
			`
		_, err = db.Exec(query, i, &a.Title, &a.ArtistId, &a.Year, &a.CoverImageUrl, &a.CreatedAt)
		if err != nil {
			fmt.Print("AddAlbums() : Failed to import faker data...", err)
		}

		fmt.Print("album ", i, "\n")
	}
}

// playlist
type Playlist struct {
	Id            int
	Title         string `faker:"sentence" validate:"max=50"`
	Year          int    `faker:"boundary_start=1967, boundary_end=2026"`
	CreatedAt     string `faker:"date"`
}

func AddPlaylists(db *sql.DB) {
	for i := range maxPlaylistId {
		p := Playlist{}
		err := faker.FakeData(&p)
		if err != nil {
			fmt.Println(err)
		}

		query := `
			INSERT INTO playlist 
				(id, title, year, created_at)
			VAlUES ($1, $2, $3, $4)
			`
		_, err = db.Exec(query, i, &p.Title, &p.Year, &p.CreatedAt)
		if err != nil {
			fmt.Print("AddPlaylists() : Failed to import faker data...", err)
		}

		fmt.Print("playlist ", i, "\n")
	}
}

// track
type Track struct {
	Id              int
	Title           string `faker:"sentence" validate:"max=50"`
	TrackNumber     int    `faker:"boundary_start=1,boundary_end=17"`
	AlbumId         int    `faker:"boundary_start=1,boundary_end=275"`
	DurationSeconds int    `faker:"boundary_start=130,boundary_end=550"`
	Year            int    `faker:"boundary_start=1967,boundary_end=2026"`
	CreatedAt       string `faker:"date"`
}

func AddTracks(db *sql.DB) {
	for i := range maxTrackId {
		t := Track{}
		err := faker.FakeData(&t)
		if err != nil {
			fmt.Println(err)
		}

		query := `
			INSERT INTO track
				(id, title, track_number, album_id, duration_seconds, year, created_at)
			VAlUES ($1, $2, $3, $4, $5, $6, $7)
			`
		_, err = db.Exec(query, i, &t.Title, &t.TrackNumber, &t.AlbumId, &t.DurationSeconds, &t.Year, &t.CreatedAt)
		if err != nil {
			fmt.Print("AddTracks() : Failed to import faker data...", err)
		}

		fmt.Print("track ", i, "\n")
	}
}

// track_album
type TrackAlbum struct {
	TrackId int `faker:"boundary_start=1,boundary_end=6200"`
	AlbumId int `faker:"boundary_start=1,boundary_end=250"`
	PromoId int
}

func AddTrackAlbum(db *sql.DB) {
	for i := range maxTrackId {
		ta := TrackAlbum{}
		err := faker.FakeData(&ta)
		if err != nil {
			fmt.Println(err)
		}

		query := `
			INSERT INTO track_album
				(track_id, album_id, promo_id)
			VAlUES ($1, $2, $3)
			`
		_, err = db.Exec(query, &ta.TrackId, &ta.AlbumId, &ta.PromoId)
		if err != nil {
			fmt.Print("AddTrackAlbum : Failed to import faker data...", err)
		}

		fmt.Print("track_album ", i, "\n")
	}
}

// track_artist
type TrackArtist struct {
	TrackId  int `faker:"boundary_start=1,boundary_end=7500"`
	ArtistId int `faker:"boundary_start=1,boundary_end=250"`
	PromoId  int
}

func AddTrackArtist(db *sql.DB) {
	for i := range maxTrackId {
		ta := TrackArtist{}
		err := faker.FakeData(&ta)
		if err != nil {
			fmt.Println(err)
		}

		query := `
			INSERT INTO track_artist
				(track_id, artist_id, promo_id)
			VAlUES ($1, $2, $3)
			`
		_, err = db.Exec(query, &ta.TrackId, &ta.ArtistId, &ta.PromoId)
		if err != nil {
			fmt.Print("AddTrackArtist : Failed to import faker data...", err)
		}

		fmt.Print("track_artist ", i, "\n")
	}
}

// track_genre
type TrackGenre struct {
	TrackId  int `faker:"boundary_start=1,boundary_end=7500"`
	GenreId int `faker:"boundary_start=1,boundary_end=25"`
}

func AddTrackGenre(db *sql.DB) {
	for i := range maxTrackId {
		tg := TrackGenre{}
		err := faker.FakeData(&tg)
		if err != nil {
			fmt.Println(err)
		}

		query := `
			INSERT INTO track_genre
				(track_id, genre_id)
			VAlUES ($1, $2)
			`
		_, err = db.Exec(query, &tg.TrackId, &tg.GenreId)
		if err != nil {
			fmt.Print("AddTrackGenre : Failed to import faker data...", err)
		}

		fmt.Print("track_genre ", i, "\n")
	}
}

// track_playlist
type TrackPlaylist struct {
	TrackId    int `faker:"boundary_start=1,boundary_end=7500"`
	PlaylistId int `faker:"boundary_start=1,boundary_end=1000"`
}

func AddTrackPlaylist(db *sql.DB) {
	for i := range maxTrackId {
		tp := TrackPlaylist{}
		err := faker.FakeData(&tp)
		if err != nil {
			fmt.Println(err)
		}

		query := `
			INSERT INTO track_playlist
				(track_id, playlist_id)
			VAlUES ($1, $2)
			`
		_, err = db.Exec(query, &tp.TrackId, &tp.PlaylistId)
		if err != nil {
			fmt.Print("AddTrackPlaylist : Failed to import faker data...", err)
		}

		fmt.Print("track_playlist ", i, "\n")
	}
}

func main() {
	SeedDB()
}