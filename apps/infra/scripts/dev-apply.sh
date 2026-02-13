#!/bin/bash

cd init
tflocal apply --var-file="./env/dev.tfvars" --auto-approve

cd ../core
tflocal apply --var-file="./env/dev.tfvars" --auto-approve
