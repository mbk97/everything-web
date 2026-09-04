// =============================================================================
// ROUTE53 RECORDS, ROUTING, AND FAILOVER
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - COMMON DNS RECORD TYPES
// -----------------------------------------------------------------------------
/*
 * Common records:
 * - A
 * - AAAA
 * - CNAME
 * - MX
 * - TXT
 *
 * These are foundational DNS building blocks.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHAT THEY GENERALLY MEAN
// -----------------------------------------------------------------------------
/*
 * A:
 * points a name to an IPv4 address
 *
 * AAAA:
 * points a name to an IPv6 address
 *
 * CNAME:
 * creates an alias from one name to another name
 *
 * MX:
 * used for mail routing
 *
 * TXT:
 * often used for verification or policy data
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - ROUTING POLICIES
// -----------------------------------------------------------------------------
/*
 * Useful routing policies:
 * - simple
 * - weighted
 * - latency-based
 * - failover
 *
 * This is where DNS becomes operationally powerful.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - FAILOVER THINKING
// -----------------------------------------------------------------------------
/*
 * Failover routing means:
 * if one target is unhealthy,
 * DNS can direct users to another target.
 *
 * This can improve resilience,
 * though failover design still needs careful testing.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - WHY THIS MATTERS
// -----------------------------------------------------------------------------
/*
 * Good DNS design can support:
 * - safer migrations
 * - traffic shifting
 * - active/passive reliability patterns
 *
 * That is why Route53 belongs in a serious DevOps roadmap.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - TTL AND CUTOVER BEHAVIOR
// -----------------------------------------------------------------------------
/*
 * DNS changes are affected by caching and TTL.
 *
 * That means:
 * - some users may see old destinations briefly
 * - cutovers need planning
 *
 * This is important during blue/green style traffic moves.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - ALIAS RECORD THINKING
// -----------------------------------------------------------------------------
/*
 * In AWS, alias-style routing is often used
 * for services like ALB and CloudFront.
 *
 * This fits cloud resources more naturally
 * than raw IP thinking in many cases.
 */
