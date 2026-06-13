package main

import (
	"fmt"
	"log"
	"os"

	"ch-client-api/internal/platform/database"
	"ch-client-api/internal/platform/router"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"go.opentelemetry.io/contrib/instrumentation/github.com/gin-gonic/gin/otelgin"
)

func main() {
	// load env
	err := godotenv.Load()
	if err != nil {
		log.Fatal("main.go : Error loading .env file")
	}

	// init logging
	logPath := "log"
	err = os.MkdirAll(logPath, 0755)
	if err != nil {
		log.Fatal(err)
	}
	file, err := os.Create(logPath + "/ch-client-api.log")
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
	r := gin.New()
	r.Use(otelgin.Middleware("ch-client-api"))
	router.SetupRouter(r, db)

	tlsPem := "./certs/localhost+4.pem"
	tlsKey := "./certs/localhost+4-key.pem"

	r.RunTLS(":8000", tlsPem, tlsKey)
}
