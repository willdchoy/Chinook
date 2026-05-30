.PHONY: dev docker-build docker-clean docker-run start test

container = ch-client-api
registry_hostname=localhost:5000
image = "${registry_hostname}/ch/client-api:latest"

docker-build: test
	docker build -t $(image) .
	docker push $(image)
	docker image rm $(image)

docker-clean:
	docker rm -f $(container)

docker-run: docker-build
	 docker run --rm --name $(container) \
		-p 8000:8000 \
		-v /sys/fs/cgroup:/sys/fs/cgroup:rw \
		-v ./alloy/config.alloy:/etc/alloy/config.alloy:rw \
		-v /proc:/host/proc:ro \
		-v /sys:/host/sys:ro \
		-v /:/host/rootfs:ro \
		$(image)

docker-start: docker-run
	
docker-stop:
	docker stop $(container)

start:
	rc-service alloy stop
	rc-service alloy start
	pnpm dev

test: docker-clean
	pnpm test