package playlist

import (
	"database/sql"

	"github.com/gin-gonic/gin"
)

// playlist
func RegisterPlaylistsRoutes(rg *gin.RouterGroup, db *sql.DB) {
	repo := NewPlaylistRepository(db)
	service := NewPlaylistService(repo)
	handler := NewPlaylistHandler(service)

	playlist := rg.Group(("/playlists"))
	{
		playlist.GET("", handler.ListPlaylists)
		playlist.GET("/:id", handler.GetById)
	}
}
