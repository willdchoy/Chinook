#!/bin/bash

cd init
tflocal plan --var-file="./env/dev.tfvars"

cd ../core
tflocal plan --var-file="./env/dev.tfvars"
