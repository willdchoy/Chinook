package playlist

import (
	"database/sql"

	"github.com/gin-gonic/gin"
)

// albums
func RegisterPlaylistRoutes(rg *gin.RouterGroup, db *sql.DB) {
	repo := NewPlaylistRepository(db)
	service := NewPlaylistService(repo)
	handler := NewPlaylistHandler(service)

	playlists := rg.Group(("/playlists"))
	{
		playlists.GET("", handler.ListPlaylists)
		playlists.GET("/:id", handler.GetById)
	}
}
