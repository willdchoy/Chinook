echo "\033[1;32mChinook - Stopping containers... \033[0m"
docker stop ch-api-web-1 ch-db-pg-1 grafana prometheus loki alloy ch-obsvr-loki
echo

echo "\033[1;32mChinook - Removing containers... \033[0m"
docker rm ch-api-web-1 ch-db-pg-1 grafana prometheus loki alloy ch-obsvr-loki
echo

echo "\033[1;32mChinook - Removing images... \033[0m"
docker image rm ch-api-web ch-db-pg ch-obsvr-loki ch-obsvr-alloy
echo