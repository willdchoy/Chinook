package main

import (
	"log"

	"ch-client-api/internal/database"
	"ch-client-api/internal/router"

	"github.com/joho/godotenv"
)

func main() {
  err := godotenv.Load()
  if err != nil {
    log.Fatal("Error loading .env file")
  }

  db := database.SetupDB()
  defer db.Close()

  r := router.SetupRouter(db)
  r.RunTLS(":443", "./cmd/server/certs/localhost+3.pem", "./cmd/server/certs/localhost+3-key.pem")
}