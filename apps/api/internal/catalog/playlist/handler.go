package playlist

import (
	"ch-client-api/internal/platform/api"
	"fmt"
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
		api.Fail(c, http.StatusBadRequest, "PlaylistInvalidID", "Invalid type for ID. Should be an integer.")
		return
	}

	playlist := h.service.GetById(c, PlaylistId(id))
	if playlist.Id == 0 {
		api.Fail(c, http.StatusOK, "PlaylistNotFound", fmt.Sprintf("Unable to find playlist %d", id))
		return
	}

	api.OK(c, playlist)
}
