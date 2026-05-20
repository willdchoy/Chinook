# syntax=docker/dockerfile:1

FROM localhost:5000/ch/base:latest

ARG NODE_VERSION=25.8.2
ARG PNPM_VERSION=10.6.2

EXPOSE 8000

RUN apk add nodejs npm curl

RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

COPY ./alloy/config.alloy /etc/alloy/config.alloy
COPY . .

CMD ["make", "start"]