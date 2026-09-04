// =============================================================================
// TERRAFORM VARIABLES, OUTPUTS, AND MODULES
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - VARIABLES
// -----------------------------------------------------------------------------
/*
 * Variables let you pass values into Terraform configuration.
 *
 * Why variables matter:
 * - reduce hardcoding
 * - support multiple environments
 * - make code more reusable
 *
 * Common variable examples:
 * - region
 * - instance type
 * - bucket name
 * - domain name
 */

/*
 * Example idea:
 *
 * variable "instance_type" {
 *   type    = string
 *   default = "t3.micro"
 * }
 *
 * Then use it in a resource:
 *
 * instance_type = var.instance_type
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHY VARIABLES HELP
// -----------------------------------------------------------------------------
/*
 * Without variables,
 * you repeat values all over the code.
 *
 * Problems:
 * - harder changes
 * - poor reuse
 * - environment confusion
 *
 * Variables turn infrastructure code
 * into something more flexible and maintainable.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - OUTPUTS
// -----------------------------------------------------------------------------
/*
 * Outputs publish useful results after Terraform apply.
 *
 * Common examples:
 * - EC2 public IP
 * - S3 bucket name
 * - CloudFront domain
 * - load balancer DNS name
 */

/*
 * Example idea:
 *
 * output "public_ip" {
 *   value = aws_instance.web.public_ip
 * }
 *
 * This makes the result easy to see and reuse.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - WHY OUTPUTS MATTER
// -----------------------------------------------------------------------------
/*
 * Outputs are useful because infrastructure creates values
 * you often need later.
 *
 * Example:
 * create EC2
 * -> need its public IP
 *
 * create CloudFront
 * -> need its distribution domain
 *
 * create load balancer
 * -> need its DNS name
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - MODULES
// -----------------------------------------------------------------------------
/*
 * A module is a reusable package of Terraform configuration.
 *
 * Think:
 * instead of rewriting the same EC2 + security group logic,
 * create a reusable module.
 *
 * Good module examples:
 * - VPC module
 * - EC2 module
 * - S3 module
 * - app deployment module
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - MODULE MENTAL MODEL
// -----------------------------------------------------------------------------
/*
 * Variable = input
 * Resource = infrastructure being created
 * Output   = result exposed after creation
 * Module   = reusable building block containing all of that
 *
 * This is the clean mental model to remember.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - WHY MODULES MATTER IN REAL PROJECTS
// -----------------------------------------------------------------------------
/*
 * In small labs, one folder may be enough.
 *
 * In larger environments,
 * modules help with:
 * - reuse
 * - consistency
 * - clearer structure
 * - less duplication
 *
 * Example:
 * same EC2 app pattern for dev, staging, and prod.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - COMMON MISTAKES
// -----------------------------------------------------------------------------
/*
 * 1. Hardcoding values instead of using variables
 *
 * 2. Creating outputs for everything instead of useful things
 *
 * 3. Building modules too early before understanding the basics
 *
 * 4. Making giant modules that do too many unrelated things
 */

// -----------------------------------------------------------------------------
// ! PHASE 9 - PRACTICAL LEARNING ADVICE
// -----------------------------------------------------------------------------
/*
 * Learn in this order:
 *
 * 1. write simple resources
 * 2. add variables
 * 3. add outputs
 * 4. refactor repetition into modules
 *
 * That path is much easier than trying to master modules first.
 */
