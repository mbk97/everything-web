// =============================================================================
// ALB TARGET GROUPS AND LISTENERS
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - LISTENERS
// -----------------------------------------------------------------------------
/*
 * A listener waits for traffic on a port,
 * commonly 80 or 443.
 *
 * Example:
 * - listener on 80 for HTTP
 * - listener on 443 for HTTPS
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - RULES
// -----------------------------------------------------------------------------
/*
 * Listener rules decide where traffic goes.
 *
 * They can route based on:
 * - host
 * - path
 * - default action
 *
 * This makes ALB smarter than a simple port forwarder.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - TARGET GROUPS
// -----------------------------------------------------------------------------
/*
 * A target group is the set of backend destinations
 * that receive traffic.
 *
 * Examples:
 * - web EC2 instances
 * - API instances
 * - ECS tasks
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - HEALTH CHECKS
// -----------------------------------------------------------------------------
/*
 * Target groups use health checks
 * to determine whether a backend should receive traffic.
 *
 * If targets are unhealthy,
 * the load balancer cannot save the application.
 *
 * It can only avoid routing to unhealthy backends
 * if healthy ones exist.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - TARGET TYPES
// -----------------------------------------------------------------------------
/*
 * Target groups can represent different backend styles.
 *
 * Common examples:
 * - instances
 * - IPs
 * - containers behind orchestrators
 *
 * This flexibility is why ALB works with multiple deployment models.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - COMMON TROUBLE AREAS
// -----------------------------------------------------------------------------
/*
 * Common ALB problems:
 * - wrong health check path
 * - wrong target port
 * - security group mismatch
 * - app returns unhealthy status
 *
 * Load balancer debugging is often about tracing those assumptions.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Listener receives traffic.
 * Rule makes routing decisions.
 * Target group defines the backends.
 *
 * Those three pieces are the heart of ALB behavior.
 */
