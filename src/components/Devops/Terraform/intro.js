// =============================================================================
// TERRAFORM COMPLETE GUIDE (ZERO -> REAL INFRASTRUCTURE AS CODE)
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT TERRAFORM IS
// -----------------------------------------------------------------------------
/*
 * Terraform is an Infrastructure as Code tool.
 *
 * That means:
 * instead of manually clicking around cloud consoles,
 * you describe infrastructure in files.
 *
 * Then Terraform:
 * - reads the desired state
 * - compares it to reality
 * - shows a plan
 * - applies the change
 *
 * Think:
 *
 * manual AWS setup -> error-prone
 * Terraform -> repeatable infrastructure
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHY TERRAFORM MATTERS
// -----------------------------------------------------------------------------
/*
 * Manual cloud setup creates problems:
 *
 * - forgotten settings
 * - inconsistent environments
 * - undocumented infrastructure
 * - hard-to-review changes
 * - "works in one account but not another"
 *
 * Terraform solves these by making infrastructure:
 * - version controlled
 * - reviewable
 * - reproducible
 * - easier to audit
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - INFRASTRUCTURE AS CODE MINDSET
// -----------------------------------------------------------------------------
/*
 * Infrastructure is no longer just:
 * - EC2 clicks
 * - security group clicks
 * - bucket clicks
 *
 * It becomes:
 * - code in files
 * - commit history
 * - pull request reviews
 * - safer change tracking
 *
 * This is a major professional DevOps step.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - WHAT TERRAFORM CAN MANAGE
// -----------------------------------------------------------------------------
/*
 * Terraform can manage many types of infrastructure:
 *
 * - EC2
 * - S3
 * - CloudFront
 * - Route53
 * - IAM
 * - VPC
 * - RDS
 * - Kubernetes resources
 * - many non-AWS services too
 *
 * It is not limited to one cloud.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - HCL
// -----------------------------------------------------------------------------
/*
 * Terraform files are often written in HCL:
 * HashiCorp Configuration Language
 *
 * File extension:
 * .tf
 *
 * Example idea:
 *
 * resource "aws_s3_bucket" "frontend" {
 *   bucket = "my-frontend-bucket"
 * }
 *
 * This means:
 * create an S3 bucket resource with that name.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - CORE TERRAFORM FLOW
// -----------------------------------------------------------------------------
/*
 * Basic workflow:
 *
 * 1. write .tf files
 * 2. terraform init
 * 3. terraform plan
 * 4. terraform apply
 * 5. terraform destroy (when intentionally removing)
 *
 * These commands define the normal lifecycle.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - WHAT TERRAFORM INIT DOES
// -----------------------------------------------------------------------------
/*
 * terraform init:
 * - downloads providers
 * - prepares the working directory
 * - sets up backend configuration if defined
 *
 * You usually run this first in a new Terraform project.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - WHAT TERRAFORM PLAN DOES
// -----------------------------------------------------------------------------
/*
 * terraform plan:
 * - compares desired infrastructure to current state
 * - shows what will be created, changed, or destroyed
 *
 * This is one of Terraform's biggest strengths:
 * you can preview change before applying it.
 */

// -----------------------------------------------------------------------------
// ! PHASE 9 - WHAT TERRAFORM APPLY DOES
// -----------------------------------------------------------------------------
/*
 * terraform apply:
 * - performs the changes in the plan
 *
 * Important:
 * this affects real infrastructure.
 *
 * That means:
 * - real servers
 * - real DNS
 * - real buckets
 * - sometimes real cost
 */

// -----------------------------------------------------------------------------
// ! PHASE 10 - WHAT TERRAFORM DESTROY DOES
// -----------------------------------------------------------------------------
/*
 * terraform destroy removes managed infrastructure.
 *
 * This is powerful and dangerous.
 *
 * Good for:
 * - temporary labs
 * - short-lived environments
 *
 * Dangerous for:
 * - shared production resources
 * - anything not carefully reviewed
 */

// -----------------------------------------------------------------------------
// ! PHASE 11 - WHY TERRAFORM FITS YOUR CURRENT DEVOPS PATH
// -----------------------------------------------------------------------------
/*
 * You already have manual knowledge of:
 * - EC2
 * - S3
 * - CloudFront
 * - IAM
 * - DNS
 *
 * Terraform helps turn that manual knowledge
 * into real automation skill.
 *
 * That is why Terraform is such a strong next step for you.
 */

// -----------------------------------------------------------------------------
// ! PHASE 12 - COMMON BEGINNER MISTAKES
// -----------------------------------------------------------------------------
/*
 * 1. Applying without reading the plan
 *
 * 2. Treating state casually
 *
 * 3. Mixing manual console edits with Terraform-managed resources
 *
 * 4. Putting everything in one huge file
 *
 * 5. Learning commands without understanding dependencies
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Terraform is one of the clearest bridges
 * from "I can deploy cloud resources"
 * to
 * "I can manage infrastructure professionally and repeatedly."
 */
