echo "\033[1;32mChinook - Stopping and removing containers... \033[0m"
docker rm -f ch-api-web ch-db-pg ch-regi ch-graf ch-loki ch-prom 
echo

echo "\033[1;32mChinook - Removing images... \033[0m"
docker image rm localhost:5000/ch/base:latest localhost:5000/ch/api-web:latest localhost:5000/ch/db-pg:latest
echo

echo "\033[1;32mChinook - Destroying core services... \033[0m"
docker network rm ch-web ch-obsvr

exit 0