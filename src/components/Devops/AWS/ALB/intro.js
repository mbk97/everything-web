// =============================================================================
// AWS APPLICATION LOAD BALANCER
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT AN ALB IS
// -----------------------------------------------------------------------------
/*
 * ALB stands for Application Load Balancer.
 *
 * It distributes HTTP and HTTPS traffic
 * across multiple application targets.
 *
 * Targets might be:
 * - EC2 instances
 * - containers
 * - services
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHY IT MATTERS
// -----------------------------------------------------------------------------
/*
 * An ALB helps with:
 * - high availability
 * - health checks
 * - SSL termination
 * - path and host routing
 *
 * This makes it much more than "just another network hop."
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - PRODUCTION VALUE
// -----------------------------------------------------------------------------
/*
 * Without a load balancer,
 * scaling and zero-downtime patterns are harder.
 *
 * With an ALB,
 * traffic can be distributed and unhealthy targets avoided.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - HOW IT FITS YOUR STACK
// -----------------------------------------------------------------------------
/*
 * Common flow:
 *
 * Browser
 *   -> Route53
 *   -> ALB
 *   -> EC2 or ECS targets
 *   -> app
 *
 * This is a common production architecture pattern.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - HEALTH AND TRAFFIC CONTROL
// -----------------------------------------------------------------------------
/*
 * A big part of ALB value is traffic control.
 *
 * It can:
 * - avoid unhealthy targets
 * - terminate SSL
 * - route different hosts and paths cleanly
 *
 * This improves both resilience and architecture cleanliness.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - WHY SINGLE-SERVER SETUPS GROW INTO THIS
// -----------------------------------------------------------------------------
/*
 * Many teams start with:
 * - one EC2 instance
 * - one Nginx setup
 *
 * As scale and reliability needs grow,
 * load balancers become much more important.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * ALB is one of the key AWS services
 * that turns single-server deployments
 * into more reliable distributed delivery.
 */
