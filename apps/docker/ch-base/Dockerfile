# syntax=docker/dockerfile:1

FROM alpine:3.22.4

RUN echo 'rc_need="!dev !net"' >> /etc/rc.conf && \
    apk update && \
    apk add make openrc alloy && \
    openrc default