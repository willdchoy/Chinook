cd init
terraform init
terraform apply --var-file="./env/prod.tfvars" --auto-approve

cd ../core
terraform init
terraform apply --var-file="./env/prod.tfvars" --auto-approve
