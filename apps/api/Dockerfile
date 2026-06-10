# syntax=docker/dockerfile:1

FROM golang:tip-alpine3.23

RUN apk add make curl

EXPOSE 8000

WORKDIR /usr/src/app

COPY . .

CMD ["make", "start"]