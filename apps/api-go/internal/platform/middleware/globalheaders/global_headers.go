package globalheaders

import "github.com/gin-gonic/gin"

func GlobalHeadersMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Content-Type", "application/json; charset=UTF-8")
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Cross-Origin-Opener-Policy", "same-origin")
		c.Header("Cross-Origin-Embedder-Policy", "require-corp")
		c.Header("Cross-Origin-Resource-Policy", "same-site")
		c.Header("Referrer-Policy", "strict-origin-when-cross-origin")
		c.Header("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")
		c.Header("X-Robots-Tag", "noindex, nofollow")
		c.Header("X-DNS-Prefetch-Control", "off")
		c.Header("X-Frame-Options", "DENY")
		c.Header("X-XSS-Protection", "0")
		c.Header("X-Content-Type-Options", "nosniff")
		c.Header("Permissions-Policy", "geolocation=(), camera=(), microphone=()")
		c.Header("X-Server-Version", "1.0.0")
		c.Header("Access-Control-Allow-Origin", "*")
		
		c.Next()
	}
}
