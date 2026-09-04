// =============================================================================
// TERRAFORM AWS BUILD: EC2, S3, CLOUDFRONT, ROUTE53
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHY THIS IS A GREAT PRACTICE PROJECT
// -----------------------------------------------------------------------------
/*
 * This project is powerful because it combines tools you already know:
 *
 * - EC2 for backend
 * - S3 for frontend storage
 * - CloudFront for CDN and HTTPS delivery
 * - Route53 for DNS
 *
 * Terraform lets you define the whole stack in code.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - HIGH-LEVEL ARCHITECTURE
// -----------------------------------------------------------------------------
/*
 * Browser
 *   -> Route53 domain
 *   -> CloudFront
 *   -> S3 frontend
 *
 * Browser or frontend API requests
 *   -> Route53 domain or subdomain
 *   -> EC2 backend
 *
 * This is a realistic full-stack DevOps pattern.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - WHAT EC2 DOES HERE
// -----------------------------------------------------------------------------
/*
 * EC2 hosts the backend or API.
 *
 * Terraform can manage:
 * - instance creation
 * - instance type
 * - security groups
 * - key pair reference
 * - IAM role attachment
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - WHAT S3 DOES HERE
// -----------------------------------------------------------------------------
/*
 * S3 stores the frontend build files.
 *
 * Terraform can manage:
 * - bucket creation
 * - bucket policy
 * - versioning
 * - public/private access strategy
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - WHAT CLOUDFRONT DOES HERE
// -----------------------------------------------------------------------------
/*
 * CloudFront sits in front of S3.
 *
 * It helps with:
 * - global caching
 * - HTTPS delivery
 * - better frontend performance
 * - cleaner domain setup
 *
 * Terraform can manage:
 * - distribution
 * - origin settings
 * - cache behavior
 * - aliases
 * - certificate references
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - WHAT ROUTE53 DOES HERE
// -----------------------------------------------------------------------------
/*
 * Route53 handles DNS.
 *
 * It lets your users access:
 * - app.example.com
 * - api.example.com
 *
 * instead of:
 * - random cloudfront.net URLs
 * - raw public IPs
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - INFRASTRUCTURE DEPENDENCIES
// -----------------------------------------------------------------------------
/*
 * One reason Terraform is helpful here:
 * these resources depend on one another.
 *
 * Example dependencies:
 * - Route53 alias depends on CloudFront
 * - CloudFront origin depends on S3
 * - backend DNS depends on EC2 or ALB target
 *
 * Terraform helps track this dependency graph.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - WHAT YOU SHOULD PRACTICE IN THIS PROJECT
// -----------------------------------------------------------------------------
/*
 * Practice these carefully:
 *
 * - security groups
 * - IAM roles
 * - bucket policies
 * - DNS records
 * - outputs for public URLs and IPs
 * - variable-driven environment settings
 */

// -----------------------------------------------------------------------------
// ! PHASE 9 - WHY THIS PROJECT BUILDS REAL SKILL
// -----------------------------------------------------------------------------
/*
 * This project teaches more than syntax.
 *
 * It teaches:
 * - system composition
 * - resource relationships
 * - environment repeatability
 * - safer rebuilds from scratch
 *
 * That is the real value of Terraform.
 */

// -----------------------------------------------------------------------------
// ! PHASE 10 - COMMON MISTAKES
// -----------------------------------------------------------------------------
/*
 * 1. Hardcoding values with no variables
 *
 * 2. Mixing manual AWS changes after apply
 *
 * 3. Ignoring HTTPS and certificate dependencies
 *
 * 4. Forgetting least-privilege IAM thinking
 *
 * 5. Not exposing useful outputs after creation
 */
