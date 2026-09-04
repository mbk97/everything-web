// =============================================================================
// SSH HARDENING
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHY SSH HARDENING MATTERS
// -----------------------------------------------------------------------------
/*
 * SSH is often the front door to production servers.
 *
 * If SSH is weakly managed,
 * attackers or mistakes can gain direct server access.
 *
 * That makes SSH one of the highest-value hardening areas.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - SAFER PRACTICES
// -----------------------------------------------------------------------------
/*
 * Safer SSH practices:
 * - use key-based login
 * - avoid root login
 * - restrict open port 22 access
 * - review authorized_keys carefully
 * - remove unused keys promptly
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - WHY KEYS ARE BETTER
// -----------------------------------------------------------------------------
/*
 * Key-based authentication is generally safer than password login.
 *
 * Benefits:
 * - stronger authentication
 * - reduced brute-force exposure
 * - easier controlled access patterns
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - ROOT LOGIN RISK
// -----------------------------------------------------------------------------
/*
 * Direct root login is risky because:
 * - it bypasses safer user separation
 * - actions become harder to attribute cleanly
 * - one mistake has maximum power
 *
 * Better pattern:
 * - login as normal user
 * - use sudo where needed
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - NETWORK RESTRICTION
// -----------------------------------------------------------------------------
/*
 * SSH exposure should also be limited at the network layer.
 *
 * Example:
 * only allow SSH from trusted office IPs,
 * VPN ranges,
 * or specific admin networks.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - KEY HYGIENE
// -----------------------------------------------------------------------------
/*
 * Strong SSH security also includes good key hygiene:
 * - protect private keys
 * - use passphrases where appropriate
 * - remove old keys
 * - avoid sharing one key across many people
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - FILE PERMISSIONS
// -----------------------------------------------------------------------------
/*
 * SSH is strict about file permissions for good reason.
 *
 * Overly open permissions on:
 * - private keys
 * - .ssh directory
 * - authorized_keys
 *
 * can cause both failures and security risk.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - A BETTER ACCESS MODEL
// -----------------------------------------------------------------------------
/*
 * As systems grow,
 * safer access patterns may include:
 * - VPN access
 * - bastion hosts
 * - short-lived credentials
 *
 * The goal is controlled administrative entry.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * SSH is not just a convenience tool.
 * It is privileged production access.
 *
 * Treat it with the seriousness of a security boundary.
 */
