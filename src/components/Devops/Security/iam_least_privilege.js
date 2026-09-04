// =============================================================================
// IAM AND LEAST PRIVILEGE
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT IAM DOES
// -----------------------------------------------------------------------------
/*
 * IAM stands for Identity and Access Management.
 *
 * It controls:
 * - who can access your cloud or systems
 * - what actions they can take
 * - which resources they can touch
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - LEAST PRIVILEGE
// -----------------------------------------------------------------------------
/*
 * Least privilege means:
 * give only the permissions needed,
 * and nothing extra.
 *
 * This reduces blast radius if:
 * - credentials leak
 * - a user makes a mistake
 * - a service is compromised
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - REAL-WORLD EXAMPLES
// -----------------------------------------------------------------------------
/*
 * Good least-privilege thinking:
 *
 * - frontend deploy pipeline can upload to one bucket only
 * - backend instance can read one secret only
 * - developer account can inspect resources but not delete production
 *
 * Bad pattern:
 * give everyone full admin because it is easier.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - COMMON MISTAKES
// -----------------------------------------------------------------------------
/*
 * Common mistakes:
 * - using root for daily work
 * - using wildcard permissions
 * - sharing one admin account across people
 * - not separating human access from machine access
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - WHY THIS MATTERS IN DEVOPS
// -----------------------------------------------------------------------------
/*
 * DevOps relies on automation.
 *
 * That means:
 * pipelines, servers, containers, and people all need credentials.
 *
 * If those permissions are too broad,
 * one small mistake can become a large incident.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - HUMAN ACCESS VS MACHINE ACCESS
// -----------------------------------------------------------------------------
/*
 * It helps to think separately about:
 *
 * - human access
 * - machine or workload access
 *
 * Humans need traceable personal access.
 * Services need narrowly scoped machine permissions.
 *
 * Mixing them carelessly increases risk.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - ROLE THINKING
// -----------------------------------------------------------------------------
/*
 * A good access pattern is often role-based.
 *
 * Example:
 * - read-only observer role
 * - deployment role
 * - break-glass admin role
 *
 * This is cleaner than giving broad permissions to everyone.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - REVIEW HABIT
// -----------------------------------------------------------------------------
/*
 * Permissions should be reviewed over time.
 *
 * Why?
 * because systems change,
 * people change roles,
 * and old access often gets forgotten.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Least privilege is one of the highest-value security habits you can build.
 *
 * It protects against both attackers and accidents.
 */
