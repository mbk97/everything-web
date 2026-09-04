// =============================================================================
// SECRETS MANAGEMENT
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT SECRETS ARE
// -----------------------------------------------------------------------------
/*
 * Secrets include:
 * - API keys
 * - database passwords
 * - private certificates
 * - access tokens
 * - signing keys
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHY SECRETS ARE RISKY
// -----------------------------------------------------------------------------
/*
 * If a secret leaks,
 * an attacker or unauthorized user may gain direct access
 * to important systems or data.
 *
 * This is why secret handling must be intentional.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - BASIC RULES
// -----------------------------------------------------------------------------
/*
 * Strong rules:
 * - do not commit secrets to Git
 * - do not hardcode secrets in source code
 * - rotate secrets when exposure is suspected
 * - limit who and what can read them
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - WHERE SECRETS USUALLY BELONG
// -----------------------------------------------------------------------------
/*
 * Better places for secrets:
 * - environment variables from secure systems
 * - cloud secret managers
 * - Kubernetes Secrets with proper RBAC
 * - CI/CD secret stores
 *
 * The key idea:
 * secret storage should be controlled and auditable.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - COMMON MISTAKES
// -----------------------------------------------------------------------------
/*
 * 1. Committing .env files
 *
 * 2. Sharing secrets in chat or screenshots
 *
 * 3. Reusing the same secret everywhere
 *
 * 4. Never rotating old credentials
 *
 * 5. Leaving secrets visible in logs
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - ROTATION THINKING
// -----------------------------------------------------------------------------
/*
 * Secret rotation means replacing credentials on purpose over time
 * or immediately after suspected exposure.
 *
 * Rotation reduces the damage window
 * if a secret has already leaked.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - CI/CD SECRETS
// -----------------------------------------------------------------------------
/*
 * Pipelines also need secrets:
 * - cloud credentials
 * - deployment tokens
 * - registry credentials
 *
 * Those should live in the CI/CD platform's secure secret storage,
 * not directly in the repo.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - SECRET MANAGER VALUE
// -----------------------------------------------------------------------------
/*
 * A proper secret manager helps with:
 * - centralized storage
 * - access control
 * - audit trails
 * - rotation workflows
 *
 * This is often the production-grade direction.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Secret management is not just "hide the password."
 * It is about controlled storage, controlled access, and safe rotation.
 */
