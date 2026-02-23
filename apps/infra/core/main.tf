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

module "ch_vpc_main" {
  source = "./modules/vpc"
  env    = var.env
}

module "ch_ec2_api-server" {
  source    = "./modules/e2c-api-server"
  env       = var.env
  subnet_id = module.ch_vpc_main.subnet_id
}

module "ch_s3_bucket" {
  source = "./modules/s3"
  bucket = var.s3_bucket
  env    = var.env
}