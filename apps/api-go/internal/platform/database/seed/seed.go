package database

import (
	"database/sql"
	"embed"
	"fmt"

	"github.com/go-faker/faker/v4"
	goose "github.com/pressly/goose/v3"
)

const (
	maxNumListeners = 1000
)

func SeedDB(db *sql.DB) {
	SeedMigrations(db)
	SeedTestData(db)
}

//go:embed migrations/*.sql
var embedMigrations embed.FS

func SeedMigrations(db *sql.DB) {
    goose.SetBaseFS(embedMigrations)

    if err := goose.SetDialect("postgres"); err != nil {
        panic(err)
    }

		fmt.Print("seedDB : Starting migrations...\n")
    if err := goose.Up(db, "migrations"); err != nil {
        panic(err)
    }
		fmt.Print("seedDB : Migrations complete!\n")
}

func SeedTestData(db *sql.DB) {
		fmt.Print("seedDB : Adding test data...\n")
		AddListeners(db)
		fmt.Print("seedDB : Test data complete!\n")
}

// Listener
type Listener struct {
	Id  					     int
	CountryCode 			 int 				   
	Email              string            `faker:"email"`
	Password           string            `faker:"password"`
	UserName           string            `faker:"username"`
	FirstName          string            `faker:"first_name"`
	LastName           string            `faker:"last_name"`
	AccountLevel       int               
	CreatedAt          string            `faker:"date"`
}

func AddListeners(db *sql.DB) {
	for i := range maxNumListeners {
		l := Listener{}
		err := faker.FakeData(&l)
		if err != nil {
			fmt.Println(err)
		}

		fmt.Print(l.FirstName," ", l.LastName, "\n")

		query := `
			INSERT INTO listener 
				(id, country_id, email, username, first_name, last_name, password, account_level, created_at)
			VAlUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
			`
		result, err := db.Exec(query, i, 1, l.Email, l.UserName, l.FirstName, l.LastName, l.Password, 2, l.CreatedAt)
		if err != nil {
			fmt.Print("Example_withTags() ; failed to import faker data...", err)
		}

		fmt.Print(result, i)
		}
}