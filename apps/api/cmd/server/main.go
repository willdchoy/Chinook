package main

import (
	"fmt"
	"log"
	"os"
	"time"

	"ch-client-api/internal/platform/database"
	"ch-client-api/internal/platform/router"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// load env
	err := godotenv.Load()
	if err != nil {
		log.Fatal("main.go : Error loading .env file")
	}

	// init logging
	logPath := "/var/log/ch-client-api/"
	err = os.MkdirAll(logPath, 0755)
	if err != nil {
		log.Fatal(err)
	}

	logFilename := fmt.Sprintf("ch-client-api-%s.log", time.Now().Format("2006-01-02"))
	file, err := os.Create(logPath + logFilename)
	if err != nil {
		fmt.Print("Unable to write logger to ", err)
	}
	defer file.Close()
	gin.DefaultWriter = file

	// init db
	db, err := database.SetupDB()
	if err != nil {
		log.Fatal("main.go : Unable to start database", err)
	}
	defer db.Close()

	// init routes
	r := gin.Default()

	router.SetupRouter(r, db)

	tlsPem := "./certs/localhost+4.pem"
	tlsKey := "./certs/localhost+4-key.pem"

	r.RunTLS(":8000", tlsPem, tlsKey)
}
