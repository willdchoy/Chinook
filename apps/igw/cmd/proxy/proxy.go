package proxy

import (
	"log"
	"net/http/httputil"
	"net/url"
)

func CreateProxy() *httputil.ReverseProxy {
	target, err := url.Parse("https://localhost:8000")

	if err != nil {
		log.Print("Unable to parse target.", err)
		return nil
	}

	proxy := httputil.NewSingleHostReverseProxy(target)
	return proxy
}
