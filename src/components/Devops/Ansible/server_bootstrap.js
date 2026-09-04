// =============================================================================
// SERVER BOOTSTRAP WITH ANSIBLE
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT BOOTSTRAP MEANS
// -----------------------------------------------------------------------------
/*
 * Bootstrapping a server means preparing a fresh machine
 * to become usable and secure for real work.
 *
 * Without automation,
 * this often becomes a manual checklist people forget pieces of.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - GOOD BOOTSTRAP TASKS
// -----------------------------------------------------------------------------
/*
 * Good bootstrap tasks:
 * - create non-root user
 * - install packages
 * - configure firewall
 * - copy SSH keys
 * - install Docker or Nginx
 * - configure time zone or base settings if needed
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - WHY THIS IS HIGH VALUE
// -----------------------------------------------------------------------------
/*
 * Goal:
 * one new server should be reproducible,
 * not a manual memory exercise.
 *
 * This reduces:
 * - setup inconsistency
 * - forgotten hardening steps
 * - onboarding friction
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - TYPICAL BOOTSTRAP ORDER
// -----------------------------------------------------------------------------
/*
 * A sensible order might be:
 * - update packages
 * - create admin user
 * - add SSH keys
 * - harden SSH or firewall
 * - install required runtime tools
 * - enable core services
 *
 * Order matters because early steps affect access and safety.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - WHY THIS BUILDS CONFIDENCE
// -----------------------------------------------------------------------------
/*
 * When bootstrap is automated,
 * a new server stops being a fragile manual event.
 *
 * It becomes:
 * - repeatable
 * - auditable
 * - easier to recover
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Server bootstrap automation is one of the fastest ways
 * to turn Linux knowledge into real operational maturity.
 */
