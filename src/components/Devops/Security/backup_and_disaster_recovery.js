// =============================================================================
// BACKUP AND DISASTER RECOVERY
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHY BACKUPS MATTER
// -----------------------------------------------------------------------------
/*
 * Systems fail.
 * Disks fail.
 * People delete the wrong thing.
 * Deployments go badly.
 *
 * Backup strategy is part of professional operations,
 * not an optional extra.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - BACKUPS ARE NOT THE WHOLE STORY
// -----------------------------------------------------------------------------
/*
 * Backups are not enough by themselves.
 * You must also test restore.
 *
 * A backup that cannot be restored reliably
 * is not a strong backup strategy.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - WHAT GOOD RECOVERY PLANNING INCLUDES
// -----------------------------------------------------------------------------
/*
 * Strong recovery planning includes:
 * - backup frequency
 * - retention policy
 * - restore steps
 * - recovery time target
 * - recovery point target
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - RTO AND RPO
// -----------------------------------------------------------------------------
/*
 * RTO:
 * Recovery Time Objective
 * -> how fast service should be restored
 *
 * RPO:
 * Recovery Point Objective
 * -> how much data loss is acceptable
 *
 * These shape your backup design.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - PRACTICAL DEVOPS VALUE
// -----------------------------------------------------------------------------
/*
 * A lot of people learn deployment.
 * Fewer people learn recovery.
 *
 * But recovery skill is what makes production work trustworthy.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - TYPES OF BACKUPS
// -----------------------------------------------------------------------------
/*
 * Backups may include:
 * - database snapshots
 * - filesystem archives
 * - object storage copies
 * - infrastructure definitions
 *
 * Different systems need different recovery approaches.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - TESTING RESTORE
// -----------------------------------------------------------------------------
/*
 * A strong restore test asks:
 * - can we recover the data
 * - can we recover it in time
 * - do the documented steps actually work
 *
 * This is where many weak backup plans get exposed.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - DISASTER SCENARIOS
// -----------------------------------------------------------------------------
/*
 * Recovery planning should consider scenarios like:
 * - accidental deletion
 * - bad deployment
 * - region or availability outage
 * - credential compromise
 *
 * Thinking through failure ahead of time is a big maturity step.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Strong operations is not only about keeping systems up.
 * It is also about recovering safely when they do go down.
 */
