// =============================================================================
// AWS VPC NETWORKING AND DEBUGGING
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - DEBUGGING MINDSET
// -----------------------------------------------------------------------------
/*
 * When AWS networking fails,
 * the app may be healthy but unreachable.
 *
 * That means you must debug the path,
 * not only the process.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - KEY QUESTIONS
// -----------------------------------------------------------------------------
/*
 * Questions to ask:
 * - is the instance in a public or private subnet
 * - does the route table allow the path
 * - is the security group too strict
 * - is the NACL blocking traffic
 * - does the instance have the expected IP behavior
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - SECURITY GROUP VS NACL
// -----------------------------------------------------------------------------
/*
 * Security groups:
 * - attached to instances or resources
 * - stateful
 *
 * Network ACLs:
 * - attached to subnets
 * - stateless
 *
 * Both can affect traffic,
 * but they operate differently.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - COMMON OUTAGE PATTERN
// -----------------------------------------------------------------------------
/*
 * Common outage pattern:
 * app is healthy,
 * but network path is wrong.
 *
 * Examples:
 * - port not open
 * - instance in wrong subnet
 * - no internet route
 * - DNS points to wrong target
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - A GOOD DEBUG FLOW
// -----------------------------------------------------------------------------
/*
 * Good AWS network debugging flow:
 *
 * 1. confirm app is running locally
 * 2. confirm instance port is listening
 * 3. inspect security group rules
 * 4. inspect subnet and route table
 * 5. inspect internet gateway or NAT path
 * 6. inspect NACL if needed
 * 7. verify DNS target if domain is involved
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * AWS network debugging is often about following the packet path.
 *
 * If you can reason through subnet, route, security group, and DNS,
 * you can solve many "the app is down" mysteries.
 */
