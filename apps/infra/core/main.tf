terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"

  assume_role {
    role_arn     = "arn:aws:iam::${var.account_id}:role/Terraform"
    session_name = "Terraform"
  }
}

module "s3_bucket" {
  source = "./modules/s3"
  bucket = "${var.s3_bucket}"
}

module "ec2_api-server" {
  source = "./modules/e2c-api-server"
}