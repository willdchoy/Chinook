#!/bin/bash

echo "Destroying dev..."

cd core
tflocal destroy --var-file="./env/dev.tfvars" --auto-approve

cd ../init
tflocal destroy --var-file="./env/dev.tfvars" --auto-approve

exit 0