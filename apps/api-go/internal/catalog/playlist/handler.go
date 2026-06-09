package playlist

import (
	"ch-client-api/internal/platform/api"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type PlaylistHandler interface {
	ListPlaylists(c *gin.Context)
	GetById(c *gin.Context)
}

type PlaylistHandlerImpl struct {
	service PlaylistService
}

func NewPlaylistHandler(service PlaylistService) PlaylistHandler {
	return &PlaylistHandlerImpl{service: service}
}

func (h *PlaylistHandlerImpl) ListPlaylists(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	playlist := h.service.ListPlaylists(c)
	api.OK(c, playlist)
}

func (h *PlaylistHandlerImpl) GetById(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")

	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		api.Fail(c, http.StatusBadRequest, "PLAYLIST_NOT_FOUND", "no playlist with ID")
		return
	}

	playlist := h.service.GetById(c, PlaylistId(id))
	api.OK(c, playlist)
}
