.PHONY: docker-build docker-clean docker-run start

container = ch-db-pg
registry_hostname=localhost:5000
image = "${registry_hostname}/ch/db-pg:latest"

docker-build: docker-clean
	docker build -t $(image) .
	docker push $(image)
	docker image rm $(image)

docker-clean: 
	docker rm -f $(container)

docker-seed:
	docker exec "$(container)" sh -c "psql -p 5432 -h localhost -U postgres < /docker-entrypoint-initdb.d/init.sql"

docker-start: docker-build
	 docker run --rm -d --name $(container) \
	  -e POSTGRES_USER=postgres \
  	-e POSTGRES_PASSWORD=postgres \
		-p 5432:5432 \
		-v /sys/fs/cgroup:/sys/fs/cgroup:rw \
		-v /proc:/host/proc:ro \
		-v /sys:/host/sys:ro \
		-v /:/host/rootfs:ro \
		$(image)

docker-stop:
	docker stop $(container)

psql:
	psql -p 5432 -h localhost -U postgres

start:
	pg_ctl start -D /var/lib/postgresql/17/data -o "-c config_file=/etc/postgresql/postgresql_override.conf"
	/usr/bin/alloy run --storage.path=/var/lib/alloy/data /etc/alloy/config.alloy