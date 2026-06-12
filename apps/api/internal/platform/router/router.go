package router

import (
	"database/sql"
	"net/http"

	"ch-client-api/internal/catalog/playlist"

	"github.com/gin-gonic/gin"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

func SetupRouter(db *sql.DB) *gin.Engine {
	
	// init
	r := gin.Default()

	// init otel
	go func() {
    metrics := http.NewServeMux()
    metrics.Handle("/metrics", promhttp.Handler())
    http.ListenAndServe(":9090", metrics)
  }()

	gin.DisableConsoleColor()
	r.SetTrustedProxies([]string{"127.0.0.1", "192.168.1.134", "localhost", "::1"})

	// handle routes
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
