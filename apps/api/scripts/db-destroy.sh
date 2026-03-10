volume_name=$(docker inspect --format='{{.Mounts}}' db-ch-db-1 | awk -F' ' '{print $2}')

docker container stop db-ch-db-1
docker container rm db-ch-db-1
docker image rm postgres
docker volume rm "${volume_name}"