# syntax=docker/dockerfile:1

FROM localhost:5000/ch/base:latest

RUN apk add postgresql postgresql-contrib busybox-suid && \
  /etc/init.d/postgresql setup && \
  # handle permission issues with alpine
  # https://stackoverflow.com/questions/63707480/postgresql-fatal-could-not-create-lock-file-var-run-postgresql-s-pgsql-5432
  mkdir /run/postgresql && chown postgres: /run/postgresql && \
  chmod u+s /bin/su

WORKDIR /usr/src/app

COPY ./Makefile .
COPY ./alloy/config.alloy /etc/alloy/config.alloy
COPY ./init/init.sql /docker-entrypoint-initdb.d/init.sql
COPY ./init/postgresql_override.conf /etc/postgresql/postgresql_override.conf
COPY ./init/pg_hba_override.conf /etc/postgresql/pg_hba_override.conf

RUN mkdir -p /var/lib/alloy
RUN chown -R postgres:postgres /var/lib/alloy

EXPOSE 5432

USER postgres:postgres

CMD ["make", "start"]