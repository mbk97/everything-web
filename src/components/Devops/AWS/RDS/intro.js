// =============================================================================
// AWS RDS BASICS
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT RDS IS
// -----------------------------------------------------------------------------
/*
 * RDS is AWS managed relational database service.
 *
 * Common engines:
 * - PostgreSQL
 * - MySQL
 * - MariaDB
 *
 * Instead of managing the database host entirely yourself,
 * AWS manages major parts of the database platform layer.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHY IT MATTERS
// -----------------------------------------------------------------------------
/*
 * Benefits:
 * - backups
 * - patching support
 * - easier failover options
 * - less database host management
 *
 * This lets you focus more on application and data usage
 * than full database server administration.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - WHAT IT DOES NOT REMOVE
// -----------------------------------------------------------------------------
/*
 * RDS does not remove the need for:
 * - schema design
 * - query performance awareness
 * - connection management
 * - access control
 * - recovery planning
 *
 * Managed service does not mean zero responsibility.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - WHY THIS BELONGS IN YOUR DEVOPS PATH
// -----------------------------------------------------------------------------
/*
 * Many deployed apps eventually need a real database story.
 *
 * Learning RDS helps you move beyond:
 * "the app runs"
 * to
 * "the app runs with reliable managed data infrastructure."
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - IMPORTANT OPERATIONAL FEATURES
// -----------------------------------------------------------------------------
/*
 * Important RDS features often include:
 * - automated backups
 * - maintenance windows
 * - parameter groups
 * - option groups depending on engine
 * - Multi-AZ capability in some setups
 *
 * These are part of production database operations.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - NETWORKING AND ACCESS
// -----------------------------------------------------------------------------
/*
 * Databases should usually be much less exposed than app servers.
 *
 * Good pattern:
 * - app tier can reach database
 * - public internet cannot reach database directly
 *
 * This connects RDS learning back to VPC and security thinking.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * RDS is one of the clearest AWS services
 * for learning production-grade data hosting
 * without taking on every database host burden manually.
 */
