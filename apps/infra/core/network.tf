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
  name       = "ch-${var.env}-private-subnet-01"
  env        = var.env
  cidr_block = "10.0.1.0/24"
  vpc_id     = aws_vpc.ch_vpc_main.id
  ch_service = "ch-api"
}

resource "aws_internet_gateway" "ch_igw" {
  vpc_id = aws_vpc.ch_vpc_main.id

  tags = {
    Name = "ch-${var.env}-igw-01"
    env  = var.env
    aws_service : "igw",
    ch_service : "ch-api"
  }
}

resource "aws_route_table" "ch_public_rt" {
  vpc_id = aws_vpc.ch_vpc_main.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.ch_igw.id
  }

  tags = {
    Name = "ch-${var.env}-igw-01"
    env  = var.env
    aws_service : "igw",
    ch_service : "ch-api"
  }
}

resource "aws_route_table_association" "ch_public_subnet_1a" {
  subnet_id      = module.ch_subnet.id
  route_table_id = aws_route_table.ch_public_rt.id
}
