variable "account_id" {}
variable "principle_arn" {}
variable "env" {}

variable "region" {
  default = "us-east-1"
}

variable "zone1" {
  default = "us-east-1a"
}

variable "zone2" {
  default = "us-east-1b"
}

variable "pub_key" {
  default = "YOUR_KEY"
}

variable "ch_api" {
  default = "ch-api"
}