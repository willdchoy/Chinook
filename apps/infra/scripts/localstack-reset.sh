#!/bin/bash

CONTAINER_NAME="localstack-main"

if [ -n "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
  docker stop $CONTAINER_NAME
fi