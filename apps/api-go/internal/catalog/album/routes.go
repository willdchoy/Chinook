package album

import (
	"database/sql"

	"github.com/gin-gonic/gin"
)

// albums
func RegisterAlbumsRoutes(rg *gin.RouterGroup, db *sql.DB) {
  repo    := NewAlbumRepository(db)
  service := NewAlbumService(repo)
  handler := NewAlbumHandler(service)

  albums := rg.Group(("/albums"))
  {
    albums.GET("", handler.ListAlbums)
    albums.GET("/:id", handler.GetById)
  }
}