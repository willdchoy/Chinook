.PHONY: air-install air air-docker build seed start test

DB_LOCAL_CLIENT = localhost
DB_DOCKER_CLIENT = ch-client-db
BUILD_DIR = ./dist
BUILD_FILE = api.go
FILE_PATH = ${BUILD_DIR}/${BUILD_FILE}

air-install:
	go install github.com/air-verse/air@latest

air: air-install
	rm -rf ./log
	DB_HOST=$(DB_LOCAL_CLIENT) air

air-docker: air-install
	DB_HOST=$(DB_DOCKER_CLIENT) air

build:
	@echo "Removing build at ${BUILD_DIR}..."; \
	rm -rf ${BUILD_DIR}; \

	@echo "Copying dist files.."; \
	mkdir ${BUILD_DIR}; \
	mkdir ${BUILD_DIR}/log; \
	cp ./.env ${BUILD_DIR}/.env; \
	cp -r ./certs ${BUILD_DIR}; \

	@START_TIME=$$(date +%s); \
	echo "Build started at $$(date)"...; \
	go build -o "${FILE_PATH}" ./cmd/server/main.go; \
	END_TIME=$$(date +%s); \
	DURATION=$$((END_TIME - START_TIME)); \
	echo "Build completed in $$DURATION seconds" | tee -a build.log

go: build start
	echo "Build complete!"

seed:
	DB_HOST=$(DB_LOCAL_CLIENT) go run ./migrations/main.go

start:
	${FILE_PATH}

test:
	DB_HOST=$(DB_LOCAL_CLIENT) go test ./...
