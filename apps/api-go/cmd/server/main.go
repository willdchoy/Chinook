package main

import (
	"log"

	"ch-client-api/internal/platform/database"
	"ch-client-api/internal/platform/router"

	"github.com/joho/godotenv"
)

func main() {
  err := godotenv.Load()
  if err != nil {
    log.Fatal("main.go : Error loading .env file")
  }

  db, err := database.SetupDB()
  if err != nil {
    log.Fatal("main.go : Unable to start database", err)
  }
  defer db.Close()

  r := router.SetupRouter(db)
  r.RunTLS(":8000", "./cmd/server/certs/localhost+4.pem", "./cmd/server/certs/localhost+4-key.pem")
}