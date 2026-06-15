#!/bin/sh

.PHONY: air-install air air-docker build seed start test

DB_LOCAL_CLIENT = localhost
DB_DOCKER_CLIENT = ch-client-db
BUILD_DIR = ./bin
BUILD_FILE = main-linux.go
FILE_PATH = ${BUILD_DIR}/${BUILD_FILE}

air-install:
	go install github.com/air-verse/air@latest

air: air-install
	rm -rf ./log
	DB_HOST=$(DB_LOCAL_CLIENT) air

air-docker: air-install
	DB_HOST=$(DB_DOCKER_CLIENT) air

remove-build:
	@echo "Removing build at ${BUILD_DIR}..."; \
	rm -rf ${BUILD_DIR}; \

copy-app-files:
	@echo "Copying bin files.."; \
	mkdir "${BUILD_DIR}"; \
	cp ./.env "${BUILD_DIR}"/.env; \
	cp -r ./certs "${BUILD_DIR}"; \
	cp Makefile "${BUILD_DIR}"

build-osx: remove-build copy-app-files
	@START_TIME=$$(date +%s); \
	echo "Build started at $$(date)"...; \
	go build -o "${FILE_PATH}" ./cmd/server/main.go; \
	END_TIME=$$(date +%s); \
	DURATION=$$((END_TIME - START_TIME)); \
	echo "Build completed in $$DURATION seconds"

build-linux: remove-build copy-app-files
	@START_TIME=$$(date +%s); \
	echo "Build started at $$(date)"...; \
	GOOS=linux GOARCH=arm64 go build -o "${FILE_PATH}" ./cmd/server/main.go; \
	END_TIME=$$(date +%s); \
	DURATION=$$((END_TIME - START_TIME)); \
	echo "Build completed in $$DURATION seconds"

seed:
	DB_HOST=$(DB_LOCAL_CLIENT) go run ./migrations/main.go

start:
	DB_HOST=$(DB_DOCKER_CLIENT) ./main-linux.go

test:
	DB_HOST=$(DB_LOCAL_CLIENT) go test ./...
