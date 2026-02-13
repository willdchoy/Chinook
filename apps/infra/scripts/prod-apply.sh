#!/bin/bash

cd init
terraform apply --var-file="./env/prod.tfvars" --auto-approve

cd ../core
terraform apply --var-file="./env/prod.tfvars" --auto-approve
