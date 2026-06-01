package album

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type AlbumHandler interface {
	GetAlbums(c *gin.Context)
	GetById(c *gin.Context)
}

type AlbumHandlerImpl struct {
	service AlbumService
}

func NewAlbumHandler(service AlbumService) AlbumHandler {
	return &AlbumHandlerImpl{service: service}
}

func (h *AlbumHandlerImpl) GetAlbums(c *gin.Context) {
	albums := h.service.GetAlbums(c)
	
	c.Header("Access-Control-Allow-Origin", "*")
	c.JSON(http.StatusOK, albums)
}

func (h *AlbumHandlerImpl) GetById(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID format"})
		return
	}
	
	album := h.service.GetById(c, AlbumId(id))
	c.Header("Access-Control-Allow-Origin", "*")
	c.JSON(http.StatusOK, album)
}