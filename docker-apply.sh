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
echo "\033[1;32mChinook - Get to the Chopper! \033[0m"
echo
./docker-destroy.sh
echo "\033[1;32mChinook - Composing containers... \033[0m"
docker compose up -d
