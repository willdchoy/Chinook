docker network create ch-web \
--attachable \
-d bridge \
--subnet 172.18.0.0/24

docker network create ch-obsvr \
--attachable \
-d bridge \
--subnet 172.18.1.0/24

exit 0