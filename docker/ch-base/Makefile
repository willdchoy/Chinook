.PHONY: build

registry_hostname=localhost:5000
image = "${registry_hostname}/ch/base:latest"

docker-build:
	docker build -t $(image) .
	docker push $(image)
	docker image rm $(image)