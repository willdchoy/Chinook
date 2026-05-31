// TODO
// redirect http -> https

package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "postgres"
	dbname   = "chinook"
)

func setupDB() *sql.DB {
  var DB *sql.DB

  connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

  DB, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatalf("Error opening database connection: %v", err)
	}

  err = DB.Ping()
	if err != nil {
		log.Fatalf("Database is unreachable: %v", err)
	}

  return DB
}

func setupRouter(DB *sql.DB) *gin.Engine {
  r := gin.Default()
  
  // healthy
  r.GET("/healthy", func(c *gin.Context) {
    c.String(http.StatusOK, "ok\n")
  })

  // albumns
  r.GET("/albums", func (c *gin.Context) {
    var title string
    var albumid int
    var artistid int
    var coverurl sql.NullString

    err := DB.QueryRow("SELECT title, albumid, artistid, coverurl FROM album LIMIT 10").Scan(&title, &albumid, &artistid, &coverurl)
    if err == sql.ErrNoRows {
        log.Printf("Unable to retrieve albums")
    } else if err != nil {
        log.Print("/albums'")
        log.Fatal(err)
    }

    c.JSON(http.StatusOK, gin.H{
      "title": title,
      "album_id": albumid,
      "artist_id": artistid,
      "cover_url": coverurl,
    })
  })

  r.GET("/albums/:id", func (c *gin.Context) {
    var id = c.Param("id")
    var title string
    var albumid int

    err := DB.QueryRow("SELECT albumid, title FROM album WHERE albumid = $1", id).Scan(&albumid, &title)
    if err == sql.ErrNoRows {
        log.Printf("No album found with that albumid %s", id)
    } else if err != nil {
        log.Print("/albums/:id'")
        log.Fatal(err)
    }

    c.JSON(http.StatusOK, gin.H{
      "title": title,
      "album_id": albumid,
    })
  })

  return r
}

func main() {
  DB := setupDB()
  defer DB.Close()
  r := setupRouter(DB)
  r.RunTLS(":443", "./certs/localhost+3.pem", "./certs/localhost+3-key.pem")
}