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
    Name        = "ch-${var.env}-iam-role-terraform"
    env         = "${var.env}"
    aws_service = "iam/role"
    ch_service  = "terraform"
  }
}

data "aws_iam_policy_document" "terraform_policy" {
  statement {
    effect = "Allow"
    actions = [
      "s3:*",
      "iam:*",
      "ec2:*",
    ]
    resources = ["*"]
  }
}

resource "aws_iam_policy" "terraform_policy" {
  name   = "Terraform"
  policy = data.aws_iam_policy_document.terraform_policy.json

  tags = {
    Name        = "ch-${var.env}-iam-policy-terraform"
    env         = "${var.env}"
    aws_service = "iam/policy"
    ch_service  = "terraform"
  }
}

resource "aws_iam_role_policy_attachment" "terraform_attach" {
  role       = "Terraform"
  policy_arn = aws_iam_policy.terraform_policy.arn
}
