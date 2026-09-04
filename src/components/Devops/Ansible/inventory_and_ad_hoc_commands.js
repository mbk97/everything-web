// =============================================================================
// ANSIBLE INVENTORY AND AD HOC COMMANDS
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - INVENTORY
// -----------------------------------------------------------------------------
/*
 * Inventory tells Ansible which hosts exist.
 *
 * It may define:
 * - server IPs or hostnames
 * - groups like web, api, db
 * - connection details
 *
 * Think:
 * inventory = Ansible's address book
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHY GROUPS MATTER
// -----------------------------------------------------------------------------
/*
 * Groups are powerful because they let you target sets of servers.
 *
 * Example:
 * - web servers
 * - backend servers
 * - database servers
 *
 * This helps automation stay organized.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - AD HOC COMMANDS
// -----------------------------------------------------------------------------
/*
 * Ad hoc commands are quick one-off operations.
 *
 * Examples:
 * - ping all hosts
 * - install package
 * - restart service
 * - check uptime
 *
 * They are useful before you move into full playbooks.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - WHEN AD HOC IS GOOD
// -----------------------------------------------------------------------------
/*
 * Good uses:
 * - quick checks
 * - simple one-time operations
 * - verifying SSH and connectivity
 *
 * Less ideal:
 * - complex repeatable deployment logic
 *
 * That is where playbooks become better.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - STATIC VS DYNAMIC INVENTORY
// -----------------------------------------------------------------------------
/*
 * Inventory can be:
 * - static
 * - dynamic
 *
 * Static inventory:
 * you list hosts manually
 *
 * Dynamic inventory:
 * hosts are discovered from cloud or external systems
 *
 * Dynamic inventory becomes more valuable as infrastructure grows.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - PRACTICAL CHECKS
// -----------------------------------------------------------------------------
/*
 * A strong first use of Ansible is often:
 * - confirm SSH access
 * - confirm host grouping
 * - run safe read-only checks
 *
 * That builds trust before larger automation changes.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Inventory defines who Ansible can talk to.
 * Ad hoc commands give fast operational control.
 *
 * Together, they are the entry point into Ansible usage.
 */
