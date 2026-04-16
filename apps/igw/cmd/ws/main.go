package main

import (
	"ch/igw/cmd/proxy"
	"log"
	"net/http"
)

func main() {
	proxy := proxy.CreateProxy()

	log.Print("Starting webserver on port 9000")
	log.Fatal(http.ListenAndServe(":9000", proxy))
}
