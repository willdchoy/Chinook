cd core
terraform destroy --var-file="./env/prod.tfvars" --auto-approve

cd ../init
terraform destroy --var-file="./env/prod.tfvars" --auto-approve
