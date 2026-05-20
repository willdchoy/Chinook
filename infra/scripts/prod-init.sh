#!/bin/bash

cd init
terraform init

cd ../core
terraform init

exit 0