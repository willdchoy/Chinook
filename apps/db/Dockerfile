# syntax=docker/dockerfile:1
FROM ch/base:v1

ENV PGDATA=/var/lib/postgresql/17/data

EXPOSE 5432

RUN apk add postgresql postgresql-contrib busybox-suid && \
  /etc/init.d/postgresql setup && \
  # handle permission issues with alpine
  # https://stackoverflow.com/questions/63707480/postgresql-fatal-could-not-create-lock-file-var-run-postgresql-s-pgsql-5432
  mkdir /run/postgresql && chown postgres: /run/postgresql && \
  chmod u+s /bin/su

WORKDIR /usr/src/app

COPY ./Makefile .

USER postgres:postgres

CMD ["make", "start"]