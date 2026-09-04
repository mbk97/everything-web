// =============================================================================
// ANSIBLE FOR NGINX AND APP DEPLOYMENT
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHY ANSIBLE FITS DEPLOYMENT
// -----------------------------------------------------------------------------
/*
 * Many app deployments are really a sequence of server tasks.
 *
 * Example:
 * - update code
 * - install dependencies
 * - write environment file
 * - restart process manager
 * - update reverse proxy
 * - verify app health
 *
 * Ansible is good at automating that flow.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - COMMON AUTOMATION FLOW
// -----------------------------------------------------------------------------
/*
 * Common automation flow:
 * - copy app files or pull repo
 * - write env file
 * - write Nginx config
 * - restart services
 * - verify health endpoint
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - WHY THIS IS BETTER THAN RANDOM SSH
// -----------------------------------------------------------------------------
/*
 * Benefits:
 * - repeatability
 * - less human error
 * - easier recovery
 * - easier team sharing
 *
 * This connects Linux operations to repeatable deployment.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - WHAT A REAL DEPLOY PLAYBOOK CAN HANDLE
// -----------------------------------------------------------------------------
/*
 * A real deploy workflow may include:
 * - creating release directory
 * - syncing application code
 * - installing dependencies
 * - updating environment config
 * - reloading process manager
 * - reloading Nginx
 * - checking health endpoint
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - ROLLBACK THINKING
// -----------------------------------------------------------------------------
/*
 * Good deployment automation also thinks about failure.
 *
 * Example questions:
 * - can we restart the previous version
 * - can we restore the old config
 * - how do we verify success automatically
 *
 * This is where Ansible becomes more than convenience.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Ansible helps you promote deployment steps
 * from personal memory into shared automation.
 *
 * That is a core DevOps improvement.
 */
