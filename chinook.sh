function drawChoppa() {
  echo
cat << "EOF"
                                         /\
                                        /  \
               -----------!----------- /    \
----------!----------  /=====\        /  /\  \
        |===\_________/__o___|   /\  /  /  \  \
       /_]    o o o o  ___  /   /  \/  /    \  \
\/\   <_]__[]_________<___>/   /    \ /      \  \
/  \      o             o     /      \        \  \
...................................................
EOF
  echo
  echo "\033[1;32mChinook - Get to the Choppa! \033[0m"
  echo          
}

# core/client --------------------------------------------------------

function createCoreServices() {
  echo "\033[1;32mChinook - Setting up core services (networking)... \033[0m"
  docker network create ch-web \
    --attachable \
    -d bridge \
    --subnet 172.18.0.0/24 || true

  docker network create ch-obsvr \
    --attachable \
    -d bridge \
    --subnet 172.18.1.0/24 || true
  echo 
}

function createDockerRegistry() {
  echo "\033[1;32mChinook - Starting docker registry... \033[0m"
  docker compose -f --remove-orphans ./docker/docker-compose-regi.yml up -d
  echo
}

function createClientImages() {
  echo "\033[1;32mChinook - Building and deploy images to docker registry... \033[0m"
  make -C ./docker/ch-base docker-build
  make -C ./apps/api docker-build
  make -C ./apps/db docker-build
  echo
}

function createClientContainers() {
  echo "\033[1;32mChinook - Composing web containers... \033[0m"
  docker compose -f ./docker/docker-compose-web.yml up -d
  echo 
}

function seedClient() {
  echo "\033[1;32mChinook - Seeding database... \033[0m"
  make -C ./apps/db docker-seed
  echo
}

function destroyClientContainers() {
  echo "\033[1;32mChinook - Stopping and removing containers... \033[0m"
  docker rm -f ch-api-web ch-db-pg ch-regi
  echo
}

function destroyClientImages() {
  echo "\033[1;32mChinook - Removing images... \033[0m"
  docker rmi localhost:5000/ch/base:latest localhost:5000/ch/api-web:latest localhost:5000/ch/db-pg:latest
  echo
}

function destroyCoreServices() {
  echo "\033[1;32mChinook - Destroying core services... \033[0m"
  docker network rm ch-web ch-obsvr
  echo
}

# obsvr --------------------------------------------------------

function createObsvrContainers() {
  echo "\033[1;32mChinook - Composing Obsvr containers... \033[0m"
  docker compose -f ./docker/docker-compose-obsvr.yml up -d
  echo
}

function destroyObsvrImages() {
  echo "\033[1;32mChinook - Removing images... \033[0m"
  docker rmi grafana/grafana:latest grafana/loki:latest prom/prometheus:latest
  echo
}

function destroyObsvrContainers() {
  echo "\033[1;32mChinook - Stopping and removing containers... \033[0m"
  docker rm -f -v ch-graf ch-loki ch-prom
  echo
}

# case handlers --------------------------------------------------------

function createClient() {
  createCoreServices
  createDockerRegistry
  createClientImages
  createClientContainers
  seedClient
}

function createObsvr() {
  createCoreServices
  destroyObsvrContainers
  createObsvrContainers
}

function createAll() {
  drawChoppa
  destroyAll
  createObsvrContainers
  createClient  
}

function destroyClient() {
  destroyClientContainers
  destroyClientImages
  destroyCoreServices
}

function destroyObsvr() {
  destroyObsvrContainers
}

function destroyAll() {
  destroyObsvr
  destroyClient
}

# handle init --------------------------------------------------------

error_message="\033[1;31mChinook - Argument of < all | destroy | client | obsvr > is required \033[0m"

if [ "$#" -eq 0 ]; then
  echo "${error_message}"
  exit 1
fi

case "$1" in
  all)
    createAll
    ;;
  destroy)
    destroyAll
    ;;
  client)
    createClient
    ;;
  obsvr)
    createObsvr
    ;;
  *)
    echo "${error_message}"
    exit 1
esac