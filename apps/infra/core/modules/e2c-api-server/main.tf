resource "aws_instance" "ch_ec2_api" {
  ami           = "ami-04752fceda1274920"
  instance_type = "t3.micro"
  subnet_id     = var.subnet_id

  tags = {
    Name        = "ch-${var.env}-ec2-api-01"
    env         = "${var.env}"
    aws_service = "ec2-instance"
    ch_service  = "ch-${var.env}-ec2-api"
  }
}
