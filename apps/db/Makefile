.PHONY: docker-build docker-clean docker-run start

container = ch-db-pg
image = ch/db-pg:v1

docker-build: docker-clean
	docker build -t $(image) .

docker-clean: 
	docker rm -f $(container)

docker-start: docker-build
	 docker run -d --rm --name $(container) \
		-p 5432:5432 \
		-v ./init/init.sql:/docker-entrypoint-initdb.d/init.sql \
  	-v ./init/postgresql.conf:/etc/postgresql/postgresql.conf \
		-v /sys/fs/cgroup:/sys/fs/cgroup:rw \
		-v ./alloy/config.alloy:/etc/alloy/config.alloy:rw \
		-v /proc:/host/proc:ro \
		-v /sys:/host/sys:ro \
		-v /:/host/rootfs:ro \
		$(image)

docker-stop:
	docker stop $(container)

start:
	postgres
