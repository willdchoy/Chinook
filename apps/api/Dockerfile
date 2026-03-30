# syntax=docker/dockerfile:1

ARG NODE_VERSION=25.8.2
ARG PNPM_VERSION=10.6.2

FROM node:25.8.2-alpine

RUN apk update 
RUN apk add openrc
RUN apk add nodejs npm

RUN openrc default

RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

COPY . .

RUN wget https://github.com/prometheus/node_exporter/releases/download/v1.10.2/node_exporter-1.10.2.linux-amd64.tar.gz
RUN tar xvfz node_exporter-1.10.2.linux-amd64.tar.gz
RUN cp node_exporter-1.10.2.linux-amd64/node_exporter /usr/local/bin/
RUN cat <<EOF > /etc/init.d/node_exporter
#!/sbin/openrc-run
name="node_exporter"
command="/usr/local/bin/node_exporter"
pidfile="/run/${name}.pid"
command_background="yes"

depend() {
    after network
}
EOF

RUN chmod +x /etc/init.d/node_exporter
RUN chmod +x /usr/local/bin/node_exporter

# -----------------------------1

EXPOSE 8000 9100 80 

CMD ["./init.sh"]
