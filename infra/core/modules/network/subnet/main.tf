resource "aws_subnet" "ch_subnet" {
  vpc_id     = var.vpc_id
  cidr_block = var.cidr_block

  tags = {
    Name       = var.name
    env        = "${var.env}"
    ch_service = var.ch_service
  }
}
