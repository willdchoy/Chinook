resource "aws_s3_bucket" "ch_s3_api_server" {
  bucket = "ch-${var.env}-s3-api-01"

  tags = {
    Name        = "ch-${var.env}-s3-api-01"
    env         = "${var.env}"
    aws_service = "s3-bucket"
    ch_service  = "ch-${var.env}-s3-api"
  }

}
