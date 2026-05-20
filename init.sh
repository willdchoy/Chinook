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

function destoryContainers() {
  echo "\033[1;32mChinook - Stopping and removing containers... \033[0m"
  docker rm -f ch-api-web ch-db-pg ch-regi ch-graf ch-loki ch-prom
  echo
}

function removeImages() {
  echo "\033[1;32mChinook - Removing images... \033[0m"
  docker image rm localhost:5000/ch/base:latest localhost:5000/ch/api-web:latest localhost:5000/ch/db-pg:latest
  echo
}

function destroyCoreServices() {
  echo "\033[1;32mChinook - Destroying core services... \033[0m"
  docker network rm ch-web ch-obsvr
  echo
}

function setupCoreServices() {
  echo "\033[1;32mChinook - Setting up core services (networking)... \033[0m"
  docker network create ch-web \
    --attachable \
    -d bridge \
    --subnet 172.18.0.0/24

  docker network create ch-obsvr \
    --attachable \
    -d bridge \
    --subnet 172.18.1.0/24
  echo 
}

function createDockerRegistry() {
  echo "\033[1;32mChinook - Starting docker registry... \033[0m"
  docker compose -f ./docker/docker-compose-regi.yml up -d
  echo
}

function createObsvrContainers() {
  echo "\033[1;32mChinook - Composing Obsvr containers... \033[0m"
  docker compose -f ./docker/docker-compose-obsvr.yml up -d
  echo
}

function buildImages() {
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

function seedDB() {
  echo "\033[1;32mChinook - Seeding database... \033[0m"
  make -C ./apps/db docker-seed
  echo
}

drawChoppa
destoryContainers
removeImages
destroyCoreServices
setupCoreServices
createDockerRegistry
createObsvrContainers
buildImages
createClientContainers
seedDB
