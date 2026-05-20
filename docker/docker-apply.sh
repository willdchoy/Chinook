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

echo "\033[1;32mChinook - Destroying containers and images... \033[0m"
./docker-destroy.sh
echo
echo

echo "\033[1;32mChinook - Setting up core services (networking)... \033[0m"
./setup-network.sh
echo 

echo "\033[1;32mChinook - Starting docker registry... \033[0m"
docker compose -f docker-compose-regi.yml up -d
echo

echo "\033[1;32mChinook - Composing Obsvr containers... \033[0m"
docker compose -f docker-compose-obsvr.yml up -d
echo

echo "\033[1;32mChinook - Building and deploy images to docker registry... \033[0m"
make -C ./ch-base docker-build
make -C ../apps/api docker-build
make -C ../apps/db docker-build
echo

echo "\033[1;32mChinook - Composing web containers... \033[0m"
docker compose -f docker-compose-web.yml up -d
echo 

echo "\033[1;32mChinook - Seeding database... \033[0m"
make -C ../apps/db docker-seed
echo


exit 0