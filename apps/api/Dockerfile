# syntax=docker/dockerfile:1

ARG NODE_VERSION=25.8.2
ARG PNPM_VERSION=10.6.2

FROM node:${NODE_VERSION}-alpine

# Must run before apk add openrc?
RUN echo 'rc_need="!dev !net"' >> /etc/rc.conf

RUN apk update 
RUN apk add openrc alloy nodejs npm

RUN openrc default

RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

COPY . .

CMD ["./scripts/init.sh"]