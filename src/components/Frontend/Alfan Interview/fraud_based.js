// =============================================================================
// 🔐 FRAUD & IMPERSONATION MITIGATION STRATEGY
// =============================================================================

// -----------------------------------------------------------------------------
// ! THREAT MODELING
// -----------------------------------------------------------------------------
/*
 * First step in fraud prevention is understanding:
 *
 * - Who are the attackers?
 * - What assets are valuable?
 * - Where are entry points?
 
 
 * In financial systems:
 * - Identity
 * - Transactions
 * - Account permissions
 */

// -----------------------------------------------------------------------------
// ! AUTHENTICATION HARDENING
// -----------------------------------------------------------------------------
/*
 * Strong password hashing (bcrypt)
 * Enforce password complexity
 * Multi-Factor Authentication (MFA)
 * Rate limiting login attempts
 * Account lockout after repeated failures


 * TRADE-OFF:
 * - More friction for users
 * - Higher security posture
 */

// -----------------------------------------------------------------------------
// ! SESSION & TOKEN SECURITY
// -----------------------------------------------------------------------------
/*
 * Use short-lived JWTs
 * Refresh token rotation
 * Store tokens in httpOnly cookies
 * Invalidate tokens on logout
 *
 * Prevent:
 * - Token replay attacks
 * - Token theft via XSS
 */

// -----------------------------------------------------------------------------
// ! ROLE-BASED ACCESS CONTROL (RBAC)
// -----------------------------------------------------------------------------
/*
 * Never trust frontend role checks.
 * Always validate permissions server-side.
 *
 * Principle of Least Privilege:
 * - Users get minimum access required.
 */
// -----------------------------------------------------------------------------
// ! ROLE-BASED ACCESS CONTROL (RBAC)
// -----------------------------------------------------------------------------
/*
 * Never trust frontend role checks.
 * Always validate permissions server-side.
 *
 * Principle of Least Privilege:
 * - Users get minimum access required.
 */

// -----------------------------------------------------------------------------
// ! IMPERSONATION PREVENTION
// -----------------------------------------------------------------------------
/*
 * Avoid exposing user IDs in predictable ways.
 * Validate user identity before sensitive actions.
 * Use audit logs to track:
 *   - Who did what
 *   - When
 *   - From where (IP/device fingerprint)
 *
 * Consider step-up authentication:
 * - Require re-authentication for sensitive actions.
 */
