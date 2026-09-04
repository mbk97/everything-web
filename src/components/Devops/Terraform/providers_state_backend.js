// =============================================================================
// TERRAFORM PROVIDERS, STATE, AND BACKENDS
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - PROVIDERS
// -----------------------------------------------------------------------------
/*
 * A provider is how Terraform talks to an external platform.
 *
 * Example providers:
 * - AWS
 * - Azure
 * - Google Cloud
 * - GitHub
 * - Kubernetes
 *
 * If Terraform manages AWS resources,
 * it uses the AWS provider.
 */

/*
 * Example idea:
 *
 * provider "aws" {
 *   region = "eu-north-1"
 * }
 *
 * Meaning:
 * use AWS in that region for resource creation.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - STATE
// -----------------------------------------------------------------------------
/*
 * State is one of the most important Terraform concepts.
 *
 * Terraform needs a record of what it manages.
 * That record is called state.
 *
 * State helps Terraform know:
 * - what resources already exist
 * - what attributes they have
 * - what needs to change
 */

/*
 * Without state,
 * Terraform would not reliably know
 * the relationship between your code
 * and the real infrastructure.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - WHY STATE MATTERS SO MUCH
// -----------------------------------------------------------------------------
/*
 * If state is lost or corrupted,
 * operations become risky.
 *
 * Terraform may:
 * - think resources do not exist
 * - try to recreate them
 * - fail in confusing ways
 *
 * This is why state is a production asset,
 * not just a temporary file.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - LOCAL STATE VS REMOTE STATE
// -----------------------------------------------------------------------------
/*
 * Local state:
 * - stored on one machine
 * - often in terraform.tfstate
 *
 * Remote state:
 * - stored in shared remote storage
 * - better for teams and CI/CD
 *
 * For small experiments, local state is okay.
 * For real shared work, remote state is much safer.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - BACKENDS
// -----------------------------------------------------------------------------
/*
 * A backend tells Terraform where and how to store state.
 *
 * Example backend goals:
 * - shared state
 * - safer collaboration
 * - locking
 *
 * On AWS, a very common backend setup is:
 * - S3 for state file storage
 * - DynamoDB for state locking
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - STATE LOCKING
// -----------------------------------------------------------------------------
/*
 * Why locking matters:
 *
 * Imagine two people apply Terraform at the same time.
 * That can cause conflicts or broken state updates.
 *
 * Locking helps prevent concurrent writes.
 *
 * This becomes especially important in teams and CI/CD pipelines.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - DRIFT
// -----------------------------------------------------------------------------
/*
 * Drift means:
 * reality no longer matches the Terraform code and state expectations.
 *
 * Example:
 * Terraform created a security group,
 * then someone manually changed it in AWS console.
 *
 * Result:
 * the infrastructure has drifted.
 *
 * Terraform will often show this during planning.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - SAFE RULES FOR STATE
// -----------------------------------------------------------------------------
/*
 * Strong rules:
 *
 * - do not lose state
 * - do not casually hand-edit state
 * - do not store sensitive state carelessly
 * - use remote state in team environments
 * - avoid random manual console changes
 */

// -----------------------------------------------------------------------------
// ! PHASE 9 - STATE COMMANDS
// -----------------------------------------------------------------------------
/*
 * Useful commands include:
 *
 * terraform state list
 * terraform state show <resource>
 *
 * These help inspect what Terraform thinks it manages.
 *
 * But:
 * state-related commands should be used carefully.
 */

// -----------------------------------------------------------------------------
// ! PHASE 10 - WHY THIS TOPIC IS SO IMPORTANT
// -----------------------------------------------------------------------------
/*
 * Many beginners learn:
 * - resource blocks
 * - variables
 * - outputs
 *
 * But real Terraform confidence comes from understanding:
 * - providers
 * - state
 * - backends
 * - locking
 * - drift
 *
 * This is the operational core of Terraform.
 */
