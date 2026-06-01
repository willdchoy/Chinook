package router

import (
	"ch-client-api/internal/album"
	"database/sql"

	"github.com/gin-gonic/gin"
)

func SetupRouter(db *sql.DB) *gin.Engine {
  repo := album.NewAlbumRepository(db)
  service := album.NewAlbumService(repo)
  handler := album.NewAlbumHandler(service)
  
  r := gin.Default()
  r.GET("/albums", handler.GetAlbums)
  r.GET("/albums/:id", handler.GetById)

  return r
}