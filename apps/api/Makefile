.PHONY: dev air-install air air-docker build seed start test

db-local-client = localhost
db-docker-client = ch-client-db

air-install:
	go install github.com/air-verse/air@latest

air: air-install
	DB_HOST=$(db-local-client) air

air-docker: air-install
	DB_HOST=$(db-docker-client) air

build:
	DB_HOST=$(db-local-client) go build -o dist/api.go ./cmd/server/main.go

seed:
	DB_HOST=$(db-local-client) go run ./migrations/main.go

start:
	DB_HOST=$(db-docker-client) go run ./cmd/server/main.go

test:
	DB_HOST=$(db-local-client) go test ./...
