// =============================================================================
// AWS VPC BASICS
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT A VPC IS
// -----------------------------------------------------------------------------
/*
 * VPC stands for Virtual Private Cloud.
 *
 * It is your private network inside AWS.
 *
 * Think:
 * before EC2 can communicate,
 * it needs to live inside a network design.
 *
 * VPC is that network design layer.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHY VPC MATTERS
// -----------------------------------------------------------------------------
/*
 * Many AWS beginners learn EC2 first,
 * but networking confusion usually starts when questions like these appear:
 *
 * - why is this server public or private
 * - why can this instance not reach the internet
 * - why can users not reach this app
 * - why can backend talk to database but browser cannot
 *
 * VPC explains those answers.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - CORE PIECES
// -----------------------------------------------------------------------------
/*
 * Core VPC pieces:
 * - CIDR block
 * - subnets
 * - route tables
 * - internet gateway
 * - NAT gateway
 * - security groups
 * - network ACLs
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - CIDR BLOCK
// -----------------------------------------------------------------------------
/*
 * CIDR block defines the IP address range for the VPC.
 *
 * Example:
 * 10.0.0.0/16
 *
 * This is the private address space available inside the VPC.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - SUBNETS
// -----------------------------------------------------------------------------
/*
 * Subnets divide the VPC into smaller network sections.
 *
 * Very common pattern:
 * - public subnet
 * - private subnet
 *
 * Public subnet:
 * instances may have internet-facing access
 *
 * Private subnet:
 * instances are kept away from direct public access
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - ROUTE TABLES
// -----------------------------------------------------------------------------
/*
 * Route tables decide where traffic goes.
 *
 * Example:
 * if destination is the internet,
 * send traffic through the internet gateway.
 *
 * If routing is wrong,
 * connectivity breaks even if the instance is healthy.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - INTERNET GATEWAY
// -----------------------------------------------------------------------------
/*
 * Internet gateway lets public traffic flow between your VPC and the internet.
 *
 * Without it,
 * public access patterns will not work as expected.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - NAT GATEWAY
// -----------------------------------------------------------------------------
/*
 * NAT gateway is commonly used so private subnet instances
 * can reach the internet outward
 * without being directly reachable from the public internet.
 *
 * Example use:
 * private backend server downloads updates
 * but is not exposed publicly.
 */

// -----------------------------------------------------------------------------
// ! PHASE 9 - WHY THIS FITS DEVOPS
// -----------------------------------------------------------------------------
/*
 * If EC2 networking feels mysterious,
 * VPC is usually the missing layer.
 *
 * Strong DevOps engineers eventually need to understand:
 * - network boundaries
 * - public vs private design
 * - least exposure architecture
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * VPC is the network foundation beneath much of AWS.
 *
 * If EC2 is the server,
 * VPC is the world that server lives in.
 */
