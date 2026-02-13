resource "aws_instance" "ch-api-server" {
  ami           = "ami-0c1fe732b5494dc14"
  instance_type = "t3.micro"

  tags = {
    Name = "ChApiServer"
  }
}