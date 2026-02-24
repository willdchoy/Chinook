resource "aws_instance" "ch_ec2" {
  ami           = "ami-04752fceda1274920"
  instance_type = "t3.micro"
  subnet_id     = var.subnet_id

  tags = {
    Name        = var.name
    env         = "${var.env}"
    aws_service = "ec2/instance"
    ch_service  = var.ch_service
  }
}
