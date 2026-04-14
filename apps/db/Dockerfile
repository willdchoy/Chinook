FROM postgres:latest

ENV POSTGRES_USER: admin
ENV POSTGRES_PASSWORD: admin
ENV POSTGRES_DB: chinook


RUN apt update
RUN apt install wget -y

RUN mkdir -p /etc/apt/keyrings
RUN wget -O /etc/apt/keyrings/grafana.asc https://apt.grafana.com/gpg-full.key
RUN chmod 644 /etc/apt/keyrings/grafana.asc
RUN echo "deb [signed-by=/etc/apt/keyrings/grafana.asc] https://apt.grafana.com stable main" | tee /etc/apt/sources.list.d/grafana.list

RUN apt update
RUN apt install gpg -y
RUN apt install alloy -y
RUN apt install openrc -y

COPY . .

# CMD ["./scripts/init.sh"]