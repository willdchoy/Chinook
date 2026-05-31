// TODO
// redirect http -> https

package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func setupRouter() *gin.Engine {
  r := gin.Default()
  
  r.GET("/healthy", func(c *gin.Context) {
    c.String(http.StatusOK, "ok\n")
  })

  return r
}

func main() {
  r := setupRouter()
  r.RunTLS(":443", "./cmd/server/certs/localhost+3.pem", "./cmd/server/certs/localhost+3-key.pem")
}