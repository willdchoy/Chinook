resource "aws_vpc" "ch_vpc_main" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name        = "ch-${var.env}-vpc-main"
    env         = var.env
    aws_service = "vpc"
    ch_service  = "network"
  }
}

module "ch_subnet" {
  source     = "./modules/network/subnet"
  name       = "ch-${var.env}-subnet-01"
  env        = var.env
  cidr_block = "10.0.1.0/24"
  vpc_id     = aws_vpc.ch_vpc_main.id
  ch_service = "api"
}
