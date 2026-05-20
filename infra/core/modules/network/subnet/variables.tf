variable "env" { type = string }
variable "ch_service" { type = string }
variable "name" { type = string }
variable "cidr_block" { type = string }
variable "vpc_id" {
  type    = string
  default = null
}
