echo "\033[1;32mChinook - Stopping containers... \033[0m"
docker stop ch-api-web-1 ch-db-pg-1 grafana prometheus loki alloy
echo

echo "\033[1;32mChinook - Removing containers... \033[0m"
docker rm ch-api-web-1 ch-db-pg-1 grafana prometheus loki alloy
echo

echo "\033[1;32mChinook - Removing images... \033[0m"
docker image rm ch-api-web
echo