package main

import (
	"log"
	"net/http"
)

func main() {
	port := ":8080"
	log.Print("webserver running on port ", port)

	http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		host := req.Host
		path := req.URL.Path
		qs := req.URL.Query()

		log.Printf("incoming request: %s %s %s", host, path, qs)
	})

	http.ListenAndServe(port, nil)
}
