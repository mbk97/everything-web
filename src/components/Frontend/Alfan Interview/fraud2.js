// -----------------------------------------------------------------------------
// ! BRUTE FORCE ATTACK PREVENTION
// -----------------------------------------------------------------------------
/*
 * A brute force attack occurs when an attacker repeatedly
 * attempts different credential combinations to gain access.
 *
 * Protect authentication endpoints:
 * - Login routes
 * - OTP verification endpoints
 * - Password reset flows
 *
 * Implement rate limiting:
 * - Restrict login attempts per IP or account.
 *
 * Apply temporary account lockout:
 * - Lock account after multiple failed attempts.
 *
 * Use exponential backoff:
 * - Increase delay after consecutive failures.
 *
 * Trigger CAPTCHA after suspicious retries.
 *
 * Enforce Multi-Factor Authentication (MFA):
 * - Prevent access even if password is compromised.
 *
 * Monitor abnormal login patterns and trigger alerts.
 *
 * Balance:
 * - Strong protection
 * - Minimal user friction.
 */

// -----------------------------------------------------------------------------
// ! REPLAY ATTACK PREVENTION
// -----------------------------------------------------------------------------
/*
 * A replay attack occurs when a valid request or token
 * is captured and maliciously reused.
 *
 * Enforce HTTPS:
 * - Encrypt all client-server communication.
 *
 * Use short-lived access tokens:
 * - Limit window of misuse.
 *
 * Implement refresh token rotation:
 * - Invalidate old refresh tokens after use.
 *
 * Use nonces (one-time request identifiers):
 * - Ensure each request is unique.
 *
 * Apply idempotency keys for sensitive endpoints:
 * - Prevent duplicate transaction execution.
 *
 * Validate timestamps:
 * - Reject stale or delayed requests.
 *
 * In payment systems:
 * - Duplicate processing must be impossible.
 */

// -----------------------------------------------------------------------------
// ! PRIVILEGE ESCALATION PREVENTION
// -----------------------------------------------------------------------------
/*
 * Privilege escalation occurs when a user gains
 * higher access rights than intended.
 *
 * Never rely on frontend role validation.
 *
 * Enforce authorization checks server-side.
 *
 * Apply Principle of Least Privilege:
 * - Users receive only required permissions.
 *
 * Implement structured RBAC:
 * - Roles mapped to explicit permissions.
 *
 * Use authorization middleware:
 * - Validate permissions on every protected route.
 *
 * Log permission changes:
 * - Track elevation events for auditing.
 *
 * Conduct periodic role reviews:
 * - Remove unnecessary elevated access.
 *
 * Rule:
 * - Authentication verifies identity.
 * - Authorization verifies permission.
 */

// -----------------------------------------------------------------------------
// ! FRAUD DETECTION SYSTEM DESIGN
// -----------------------------------------------------------------------------
/*
 * Objective:
 * - Detect suspicious behavior before financial damage occurs.
 *
 * Collect behavioral data:
 * - Login attempts
 * - Transaction frequency
 * - IP address changes
 * - Device fingerprints
 *
 * Implement rules engine:
 * - Flag repeated failed logins
 * - Detect unusual transaction spikes
 * - Identify sudden geographic changes
 *
 * Introduce risk scoring:
 * - Assign risk level to user actions.
 *
 * Trigger step-up verification:
 * - Require OTP or MFA for high-risk actions.
 *
 * Maintain detailed audit logs:
 * - Ensure traceability and compliance.
 *
 * Alert internal security team:
 * - Enable rapid response.
 *
 * Advanced strategy:
 * - Behavioral baselining
 * - Real-time anomaly detection
 * - Machine learning scoring (after rule-based maturity).
 *
 * Trade-off:
 * - Aggressive detection may block valid users.
 * - Weak detection increases fraud exposure.
 *
 * Security must balance accuracy and usability.
 */

// -----------------------------------------------------------------------------
// ! LIVE INTERVIEW SUMMARY
// -----------------------------------------------------------------------------
/*
 * I approach fraud mitigation in layers.
 *
 * For brute force:
 * - Rate limiting, account lockout, and MFA.
 *
 * For replay attacks:
 * - HTTPS, short-lived tokens, nonces, and idempotency keys.
 *
 * For privilege escalation:
 * - Strict backend authorization and least-privilege access.
 *
 * For fraud detection:
 * - Behavioral monitoring, risk scoring, and step-up verification.
 *
 * In financial systems:
 * - Identity integrity and transaction safety
 *   are prioritized over convenience.
 */
