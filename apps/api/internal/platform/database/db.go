package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"strconv"

	_ "github.com/lib/pq"
)

func SetupDB() (*sql.DB, error) {
	var db *sql.DB

	host := os.Getenv(("DB_HOST"))
	port, err := strconv.Atoi(os.Getenv(("DB_PORT")))
	user := os.Getenv(("DB_USER"))
	password := os.Getenv(("DB_PASSWORD"))
	dbname := os.Getenv(("DB_DATABASE"))

	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatalf("Error opening database connection: %v", err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatalf("Database is unreachable: %v", err)
	}

	return db, nil
}
