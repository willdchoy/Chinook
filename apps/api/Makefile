.PHONY: dev docker-build docker-clean docker-run start test

container = ch-api-web
image = ch/api-web:v1

dev:
	rc-service alloy start
	pnpm dev

docker-build: test
	docker build -t $(image) .

docker-clean:
	docker rm -f $(container)

docker-start: docker-clean
	 docker run --rm --name $(container) \
		-p 8000:8000 \
		-v /sys/fs/cgroup:/sys/fs/cgroup:rw \
		-v ./alloy/config.alloy:/etc/alloy/config.alloy:rw \
		-v /proc:/host/proc:ro \
		-v /sys:/host/sys:ro \
		-v /:/host/rootfs:ro \
		$(image)

docker-stop:
	docker stop $(container)
	
test:
	pnpm test