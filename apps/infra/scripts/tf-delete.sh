#!/bin/bash

remove_terraform_dir () {
  rm -rf .terraform
}

remove_terraform_files () {
  files=(
    ".terraform.lock.hcl" 
    "terraform.tfstate.backup" 
    "terraform.tfstate"
  )

  for f in "${files[@]}"; do
    if [[ -f "$f" ]]; then
      rm -f "$f"
    fi
  done
}

cd init
remove_terraform_dir
remove_terraform_files

cd ../core
remove_terraform_dir
remove_terraform_files

exit 0
