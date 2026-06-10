.PHONY: dev air-install air seed start test

air-install:
	go install github.com/air-verse/air@latest

air: air-install
	DB_HOST=localhost air

seed:
	DB_HOST=localhost go run ./migrations/main.go

start:
	DB_HOST=ch-client-db go run ./cmd/server/main.go

test:
	go test ./...
