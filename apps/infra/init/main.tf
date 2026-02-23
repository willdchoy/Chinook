terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_iam_role" "Terraform" {
  name = "Terraform"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        AWS = "${var.principle_arn}"
      }
    }]
  })

  tags = {
    name        = "ch-${var.env}-role-terraform"
    env         = "${var.env}"
    aws_service = "iam"
    ch_service  = "ch-${var.env}-terraform"
  }
}

data "aws_iam_policy_document" "terraform_policy" {
  statement {
    effect = "Allow"
    actions = [
      "s3:*",
      "iam:*",
      "ec2:*",
      "vpc:*"
    ]
    resources = ["*"]
  }
}

resource "aws_iam_policy" "terraform_policy" {
  name   = "Terraform"
  policy = data.aws_iam_policy_document.terraform_policy.json
}

resource "aws_iam_role_policy_attachment" "terraform_attach" {
  role       = "Terraform"
  policy_arn = aws_iam_policy.terraform_policy.arn
}
