volume_name=$(docker inspect --format='{{.Mounts}}' ch-db-1 | awk -F' ' '{print $2}')

docker container stop ch-db-1
docker container rm ch-db-1
docker image rm postgres
docker volume rm "${volume_name}"