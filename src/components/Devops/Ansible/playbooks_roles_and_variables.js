// =============================================================================
// ANSIBLE PLAYBOOKS, ROLES, AND VARIABLES
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - PLAYBOOKS
// -----------------------------------------------------------------------------
/*
 * A playbook is an ordered set of automation tasks.
 *
 * Example playbook goals:
 * - install Nginx
 * - copy config file
 * - restart service
 * - verify service is running
 *
 * This is how Ansible moves from one-off commands
 * into repeatable automation.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - ROLES
// -----------------------------------------------------------------------------
/*
 * A role is a reusable Ansible structure.
 *
 * Roles help organize automation by responsibility.
 *
 * Example roles:
 * - nginx
 * - docker
 * - users
 * - app deploy
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - VARIABLES
// -----------------------------------------------------------------------------
/*
 * Variables let the same automation behave differently
 * across environments.
 *
 * Example differences:
 * - domain name
 * - package versions
 * - service ports
 * - environment names
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - WHY THIS MATTERS
// -----------------------------------------------------------------------------
/*
 * Good use case:
 * one role for Nginx,
 * reused across dev, staging, and production.
 *
 * This keeps your automation flexible without rewriting everything.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - HANDLERS AND ORDER
// -----------------------------------------------------------------------------
/*
 * In real playbooks,
 * order matters.
 *
 * Example:
 * - install package
 * - write config
 * - restart service only if config changed
 *
 * This is where handlers become useful.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - IDEMPOTENT DESIGN
// -----------------------------------------------------------------------------
/*
 * Good playbooks should be safe to run repeatedly.
 *
 * That means they should describe desired state,
 * not just blast commands blindly.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - WHY ROLES SCALE BETTER
// -----------------------------------------------------------------------------
/*
 * Roles help when automation gets bigger.
 *
 * They make it easier to:
 * - share tasks
 * - test pieces
 * - reuse logic across projects
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Playbooks describe the workflow.
 * Roles organize reuse.
 * Variables adapt behavior per environment.
 *
 * That trio is the core of maintainable Ansible automation.
 */
