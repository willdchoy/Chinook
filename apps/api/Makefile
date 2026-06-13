.PHONY: air-install air air-docker build seed start test

DB_LOCAL_CLIENT = localhost
DB_DOCKER_CLIENT = ch-client-db
BUILD_PATH = ./dist/api-go
air-install:
	go install github.com/air-verse/air@latest

air: air-install
	DB_HOST=$(DB_LOCAL_CLIENT) air

air-docker: air-install
	DB_HOST=$(DB_DOCKER_CLIENT) air

build:
	rm -f "${BUILD_PATH}"
	@START_TIME=$$(date +%s); \
	echo "Build started at $$(date)"; \
	go build -o "${BUILD_PATH}" ./cmd/server/main.go; \
	END_TIME=$$(date +%s); \
	DURATION=$$((END_TIME - START_TIME)); \
	echo "Build completed in $$DURATION seconds" | tee -a build.log

seed:
	DB_HOST=$(DB_LOCAL_CLIENT) go run ./migrations/main.go

start:
	DB_HOST=$(DB_DOCKER_CLIENT) go run /api.go

test:
	DB_HOST=$(DB_LOCAL_CLIENT) go test ./...
