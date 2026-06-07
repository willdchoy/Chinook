package album

import (
	"ch-client-api/internal/platform/api"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type AlbumHandler interface {
	ListAlbums(c *gin.Context)
	GetById(c *gin.Context)
}

type AlbumHandlerImpl struct {
	service AlbumService
}

func NewAlbumHandler(service AlbumService) AlbumHandler {
	return &AlbumHandlerImpl{service: service}
}

func (h *AlbumHandlerImpl) ListAlbums(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	albums := h.service.ListAlbums(c)
	api.OK(c, albums)
}

func (h *AlbumHandlerImpl) GetById(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")

	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		api.Fail(c, http.StatusBadRequest, "ALBUM_NOT_FOUND", "no album with ID")
		return
	}

	album := h.service.GetById(c, AlbumId(id))
	api.OK(c, album)
}
