#!/bin/bash

cd init
terraform plan --var-file="./env/prod.tfvars"

cd ../core
terraform plan --var-file="./env/prod.tfvars"
