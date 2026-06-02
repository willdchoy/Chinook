package router

import (
	"ch-client-api/internal/album"
	"ch-client-api/internal/middleware/apperror"
	"database/sql"

	"github.com/gin-gonic/gin"
)

func SetupRouter(db *sql.DB) *gin.Engine {
  r := gin.Default()
  r.SetTrustedProxies([]string{"127.0.0.1", "192.168.1.134", "localhost", "::1"})
  r.Use(apperror.ErrorHandler())

  v1 := r.Group(("/api/v1"))
  registerAlbums(v1, db)

  return r
}

func registerAlbums(rg *gin.RouterGroup, db *sql.DB) {
  repo    := album.NewAlbumRepository(db)
  service := album.NewAlbumService(repo)
  handler := album.NewAlbumHandler(service)

  albums := rg.Group(("/albums"))
  {
    albums.GET("/", handler.ListAlbums)
    albums.GET("/:id", handler.GetById)
  }
}
