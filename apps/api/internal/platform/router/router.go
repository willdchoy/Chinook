package router

import (
	"database/sql"
	"net/http"

	"ch-client-api/internal/catalog/playlist"

	"github.com/gin-gonic/gin"
)

func SetupRouter(db *sql.DB) *gin.Engine {
	r := gin.Default()
	r.SetTrustedProxies([]string{"127.0.0.1", "192.168.1.134", "localhost", "::1"})
	// r.Use(apperror.ErrorHandlerMiddle())
	// r.Use(globalheaders.GlobalHeadersMiddleware())

	v1 := r.Group(("/api/v1"))
	playlist.RegisterPlaylistRoutes(v1, db)
	registerHealth(v1)

	return r
}

// health
func registerHealth(rg *gin.RouterGroup) {
	health := rg.Group("/health")

	health.GET("", func(c *gin.Context) {
		c.Header("Cache-Control", "no-cache")

		c.JSON(http.StatusOK, gin.H{
			"status":  "success",
			"message": "pong",
		})
	})
}
