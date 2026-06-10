.PHONY: dev air-install air seed start test

container = ch-client-api
registry_hostname=localhost:5000
image = "${registry_hostname}/ch/client-api:latest"

air-install:
	go install github.com/air-verse/air@latest

air: air-install
	DB_HOST=localhost air

seed:
	go run ./migrations/main.go

start:
	DB_HOST=ch-client-db go run ./cmd/server/main.go

test:
	go test ./...
