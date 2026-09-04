// =============================================================================
// TERRAFORM REMOTE STATE AND WORKSPACES
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - REMOTE STATE
// -----------------------------------------------------------------------------
/*
 * Remote state means storing Terraform state in a shared remote location
 * instead of only on your local machine.
 *
 * Why this matters:
 * - teams can collaborate
 * - CI/CD can use the same source of truth
 * - local machine loss is less dangerous
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHY LOCAL-ONLY STATE BECOMES A PROBLEM
// -----------------------------------------------------------------------------
/*
 * Local-only state is risky when:
 * - more than one person works on infrastructure
 * - CI/CD needs to run Terraform
 * - laptops get lost or replaced
 *
 * In real DevOps work,
 * remote state is often the safer default.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - COMMON AWS REMOTE STATE DESIGN
// -----------------------------------------------------------------------------
/*
 * Common AWS pattern:
 *
 * - S3 bucket stores terraform state
 * - DynamoDB handles locking
 *
 * This gives:
 * - shared state
 * - safer collaboration
 * - reduced concurrent write problems
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - WORKSPACES
// -----------------------------------------------------------------------------
/*
 * Workspaces let Terraform keep separate state instances
 * for different environments using the same configuration.
 *
 * Example environments:
 * - dev
 * - staging
 * - production
 */

/*
 * This can be useful for:
 * - learning
 * - simple environment separation
 * - small shared configurations
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - PRACTICAL WORKSPACE IDEA
// -----------------------------------------------------------------------------
/*
 * Example thought process:
 *
 * same Terraform code
 * different workspace
 * different state
 * different resource naming or variables
 *
 * That can help separate environments,
 * but it requires discipline.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - IMPORTANT CAUTION ABOUT WORKSPACES
// -----------------------------------------------------------------------------
/*
 * Workspaces are useful,
 * but they are not always the best structure for large systems.
 *
 * Why?
 *
 * Because dev, staging, and prod often need meaningful differences:
 * - network ranges
 * - instance counts
 * - security rules
 * - scaling behavior
 *
 * In bigger systems,
 * separate folders, modules, or stacks may be clearer.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - SAFE TEAM PRACTICES
// -----------------------------------------------------------------------------
/*
 * Strong practices:
 * - use remote state
 * - use locking
 * - know which workspace you are in
 * - avoid applying blindly
 * - name resources clearly by environment
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - COMMON MISTAKES
// -----------------------------------------------------------------------------
/*
 * 1. Applying in the wrong workspace
 *
 * 2. Forgetting environment-specific naming
 *
 * 3. Assuming workspaces solve all environment design needs
 *
 * 4. Using local state for shared production work
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Remote state is about safe collaboration.
 * Workspaces are about environment separation.
 *
 * Both are useful,
 * but both need careful operational discipline.
 */
