#!/bin/bash

cd core
terraform apply --var-file="./env/prod.tfvars" --auto-approve

exit 0