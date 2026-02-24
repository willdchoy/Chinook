module "ch_ec2" {
  source     = "./modules/e2c"
  env        = var.env
  name       = "ch-${var.env}-ec2-api-01"
  subnet_id  = module.ch_subnet.id
  ch_service = "api"
}