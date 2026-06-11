package main

import (
	"fmt"
	"log"
	"os"

	"ch-client-api/internal/platform/database"
	"ch-client-api/internal/platform/router"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
		
	// init logging
	apiLogDir := os.Getenv(("API_LOG_DIR"))
	file, err := os.Create(apiLogDir + "/ch-client-api.log")
	if err != nil {
		fmt.Print("Unable to write logger to", apiLogDir)
	}
	defer file.Close()
	gin.DefaultWriter = file

	// load env
	err = godotenv.Load()
	if err != nil {
		log.Fatal("main.go : Error loading .env file")
	}

	// init db
	db, err := database.SetupDB()
	if err != nil {
		log.Fatal("main.go : Unable to start database", err)
	}
	defer db.Close()


	// init routes
	r := router.SetupRouter(db)

	r.RunTLS(":8000", "./cmd/server/certs/localhost+4.pem", "./cmd/server/certs/localhost+4-key.pem")
}
