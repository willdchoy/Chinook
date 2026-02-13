#!/bin/bash

remove_terraform_dir () {
  rm -rf .terraform
}

remove_terraform_files () {

  if [ -f ".terraform.lock.hcl" ] ; then
    rm ".terraform.lock.hcl"
  fi
  if [ -f "terraform.tfstate.backup" ] ; then
    rm "terraform.tfstate.backup"
  fi
  if [ -f "terraform.tfstate" ] ; then
    rm "terraform.tfstate"
  fi
}

cd init
remove_terraform_dir
remove_terraform_files

cd ../core
remove_terraform_dir
remove_terraform_files