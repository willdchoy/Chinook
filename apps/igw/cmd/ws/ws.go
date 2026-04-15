package main

import (
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
)

func main() {
	target, err := url.Parse("https://localhost:8000")

	if err != nil {
		log.Print("unable to parse target.", err)
	}

	proxy := httputil.NewSingleHostReverseProxy(target)

	log.Print("Starting webserver on port 9000")
	log.Fatal(http.ListenAndServe(":9000", proxy))
}
