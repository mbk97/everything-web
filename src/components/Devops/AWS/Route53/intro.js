// =============================================================================
// AWS ROUTE53 BASICS
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT ROUTE53 IS
// -----------------------------------------------------------------------------
/*
 * Route53 is AWS's DNS service.
 *
 * It manages how domain names point to resources.
 *
 * Example:
 * app.example.com -> CloudFront
 * api.example.com -> load balancer
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHY DNS MATTERS
// -----------------------------------------------------------------------------
/*
 * DNS controls where users go before your app ever runs.
 *
 * If DNS is wrong:
 * - users may hit the wrong target
 * - users may hit nothing
 * - traffic may still go to an old system
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - IMPORTANT PIECES
// -----------------------------------------------------------------------------
/*
 * Important pieces:
 * - hosted zones
 * - record sets
 * - routing policies
 * - health checks
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - HOSTED ZONES
// -----------------------------------------------------------------------------
/*
 * A hosted zone is where DNS records for a domain live.
 *
 * Think:
 * hosted zone = DNS control area for your domain
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - ROUTING VALUE
// -----------------------------------------------------------------------------
/*
 * Route53 can do more than basic pointing.
 *
 * It can support:
 * - weighted routing
 * - latency-based routing
 * - failover routing
 *
 * This makes DNS part of reliability strategy,
 * not just a static setup task.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - REGISTRAR VS DNS HOSTING
// -----------------------------------------------------------------------------
/*
 * Your domain registrar and your DNS host are not always the same thing.
 *
 * Example:
 * - domain bought in one place
 * - DNS records managed in Route53
 *
 * That distinction matters during setup and debugging.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - TTL THINKING
// -----------------------------------------------------------------------------
/*
 * TTL controls how long DNS answers may be cached.
 *
 * Lower TTL can help faster changes,
 * but DNS is never truly instant everywhere.
 *
 * This matters during migrations and incident response.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Route53 is the front door signpost for AWS-hosted systems.
 *
 * If networking tells traffic how to move,
 * DNS tells users where to begin.
 */
