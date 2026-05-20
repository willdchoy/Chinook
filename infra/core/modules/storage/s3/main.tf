resource "aws_s3_bucket" "s3_bucket" {
  bucket = var.name

  tags = {
    Name       = var.name
    env        = "${var.env}"
    ch_service = var.ch_service
  }
}
