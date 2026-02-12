cd init
tflocal init
tflocal apply --var-file="./env/dev.tfvars" --auto-approve

cd ../core
tflocal init
tflocal apply --var-file="./env/dev.tfvars" --auto-approve
