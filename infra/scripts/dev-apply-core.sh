#!/bin/bash

cd core
tflocal apply --var-file="./env/dev.tfvars" --auto-approve

exit 0