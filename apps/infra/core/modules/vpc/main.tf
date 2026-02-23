resource "aws_vpc" "ch_vpc_main" {
  cidr_block       = "10.0.0.0/16"
  instance_tenancy = "default"

  tags = {
    Name        = "ch-prod-vpc-main"
    env         = "${var.env}"
    aws_service = "vpc"
    ch_service  = "ch-${var.env}-vpc"
  }
}

resource "aws_subnet" "ch_subnet_private_1" {
  vpc_id     = aws_vpc.ch_vpc_main.id
  cidr_block = "10.0.1.0/24"

  tags = {
    Name        = "ch-${var.env}-subnet-private-01"
    env         = "${var.env}"
    aws_service = "vpc-subnet"
    ch_service  = "ch-${var.env}-subnet-private"
  }
}
