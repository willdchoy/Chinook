# Variables
BINARY_NAME=igw

.PHONY: build run test clean help

test:
	go test ./cmd/igw ./internal/...

build: test
	go build -o bin/$(BINARY_NAME) cmd/igw/main.go

run: build
	./bin/$(BINARY_NAME)

clean:
	go clean
	rm -rf bin/

help:
	@echo "Usage: make [target]"
	@sed -n 's/^##//p' Makefile
