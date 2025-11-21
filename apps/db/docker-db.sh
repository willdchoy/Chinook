#!/bin/bash
echo 'Stopping and removing Docker containers and matching images'

docker compose down
docker image rm postgres

echo 'Starting Docker development db container'
docker compose -f ./docker-compose.yaml up --watch