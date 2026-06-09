package main

import (
	"database/sql"
	"embed"
	"fmt"
	"log"
	"math/rand"

	database "ch-client-api/internal/platform/database"

	"github.com/go-faker/faker/v4"
	"github.com/joho/godotenv"
	goose "github.com/pressly/goose/v3"
)

const (
	baseMod       = 1
	maxArtistId   = 1000   * baseMod
	maxAccountId  = 10   * maxArtistId * baseMod
	maxTrackId    = 8    * maxArtistId * baseMod
	maxPlaylistId = 4    * maxArtistId * baseMod
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
	fmt.Println("seedDB : Adding seed data...")
	AddAccounts(db)
	AddArtists(db)
	AddPlaylists(db)
	AddTracks(db)
	AddTrackPlaylist(db)
	AddTrackArtist(db)
	AddTrackGenre(db)
	fmt.Println("seedDB : Seed complete!")
}

func SeedMigrations(db *sql.DB) {
	goose.SetBaseFS(embedMigrations)

	if err := goose.SetDialect("postgres"); err != nil {
		panic(err)
	}

	fmt.Println("seedDB : Starting migrations...")
	if err := goose.Up(db, "sql"); err != nil {
		panic(err)
	}
	fmt.Println("seedDB : Migrations complete!")
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
	CreatedAt    string `faker:"timestamp"`
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

		fmt.Println("account ", i)
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
	CreatedAt   string `faker:"timestamp"`
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

		fmt.Println("artists ", i)
	}
}

// playlist
type Playlist struct {
	Id            int    `json:"id"`
	Title         string `faker:"sentence" validate:"max=100"`
	ArtistId      int    `faker:"boundary_start=1,boundary_end=2000"`
	Year          int    `faker:"boundary_start=1979,boundary_end=2026"`
	CoverImageUrl string `faker:"sentence" validate:"max=100"`
	IsPublic      bool   
	IsAlbum       bool   
	CreatedAt     string `faker:"timestamp"`
}

func AddPlaylists(db *sql.DB) {
	for i := range maxPlaylistId {
		p := Playlist{}
		p.IsAlbum = rand.Intn(2) == 1
		p.IsPublic = rand.Intn(2) == 1

		err := faker.FakeData(&p)
		if err != nil {
			fmt.Println(err)
		}

		query := `
			INSERT INTO playlist 
				(id, title, artist_id, year, cover_image_url, is_public, is_album, created_at)
			VAlUES ($1, $2, $3, $4, $5, $6, $7, $8)
			`
		_, err = db.Exec(query, i, &p.Title, &p.ArtistId, &p.Year, &p.CoverImageUrl, &p.IsPublic, &p.IsAlbum, &p.CreatedAt)
		if err != nil {
			fmt.Println("AddPlaylists() : Failed to import faker data...", err)
		}

		fmt.Println("playlist ", i)
	}
}

// track
type Tracks = []Track
type Track struct {
	Id            int
	Title         string `faker:"sentence" validate:"max=50"`
	TrackNumber   int    `faker:"boundary_start=1,boundary_end=17"`
	Duration      int    `faker:"boundary_start=120000,boundary_end=600000"`
	Composer      string `faker:"name" len:"3"` 
	CreatedAt     string `faker:"timestamp"`
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
				(id, title, track_number, duration, composer, created_at)
			VAlUES ($1, $2, $3, $4, $5, $6)
			`
		_, err = db.Exec(query, i, &t.Title, &t.TrackNumber, &t.Duration, &t.Composer, &t.CreatedAt)
		if err != nil {
			fmt.Println("AddTracks() : Failed to import faker data...", err)
		}

		fmt.Println("track ", i)
	}
}

// track_playlist
type TrackPlaylist struct {
	TrackId    int `faker:"boundary_start=1,boundary_end=8000"`
	PlaylistId int `faker:"boundary_start=1,boundary_end=1000"`
	PromoId    int
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
				(track_id, playlist_id, promo_id)
			VAlUES ($1, $2, $3)
			`
		_, err = db.Exec(query, &tp.TrackId, &tp.PlaylistId, &tp.PromoId)
		if err != nil {
			fmt.Println("AddTrackPlaylist : Failed to import faker data...", err)
		}

		fmt.Println("track_playlist ", i)
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
			fmt.Println("AddTrackArtist : Failed to import faker data...", err)
		}

		fmt.Println("track_artist ", i)
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
			fmt.Println("AddTrackGenre : Failed to import faker data...", err)
		}

		fmt.Println("track_genre ", i)
	}
}

func main() {
	SeedDB()
}
