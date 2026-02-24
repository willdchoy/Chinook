module "ch_s3_gpb" {
  source     = "./modules/storage/s3"
  env        = var.env
  name       = "ch-${var.env}-s3-api-01"
  ch_service = "api"
}
