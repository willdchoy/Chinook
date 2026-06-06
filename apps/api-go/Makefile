.PHONY: dev docker-build docker-clean docker-run air start test

container = ch-client-api
registry_hostname=localhost:5000
image = "${registry_hostname}/ch/client-api:latest"

docker-build:
	docker build -t $(image) .
	docker push $(image)
	docker image rm $(image)

docker-clean:
	docker rm -f $(container)

docker-run: docker-build
	 docker run --rm --name $(container) \
		-p 8000:8000 \
		--network ch-client-network
		$(image)

docker-start: docker-run
	
docker-stop:
	docker stop $(container)

air:
	export PATH="$PATH:$(go env GOPATH)/bin"
	cd cmd/server && air

start:
# 	rc-service alloy stop
# 	rc-service alloy start
# 	go fmt
	go run ./cmd/server/main.go

test:
	go test ./...