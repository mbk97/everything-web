// =============================================================================
// MONITORING AND OBSERVABILITY
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHY MONITORING MATTERS
// -----------------------------------------------------------------------------
/*
 * Shipping software is only half the job.
 *
 * After deployment, you need to know:
 * - is the app healthy
 * - are users getting errors
 * - is the server overloaded
 * - is latency increasing
 * - is disk filling up
 *
 * If you cannot answer those quickly,
 * operating production becomes stressful and slow.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - OBSERVABILITY VS MONITORING
// -----------------------------------------------------------------------------
/*
 * Monitoring usually means:
 * tracking known signals and alerting on them
 *
 * Observability is broader:
 * it is your ability to understand what is happening inside the system
 * even when the problem is new or unexpected.
 *
 * Simple way to think about it:
 *
 * Monitoring asks:
 * "Is a known thing failing?"
 *
 * Observability asks:
 * "Can I investigate why the system is behaving strangely?"
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - THE THREE MAIN SIGNAL TYPES
// -----------------------------------------------------------------------------
/*
 * Strong production visibility usually includes:
 *
 * 1. Metrics
 *    -> numbers over time
 *
 * 2. Logs
 *    -> detailed event records
 *
 * 3. Traces
 *    -> request flow across services
 *
 * In many beginner-to-mid DevOps setups,
 * metrics and logs are the first big priority.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - WHAT METRICS HELP YOU SEE
// -----------------------------------------------------------------------------
/*
 * Metrics help answer:
 * - how busy is the system
 * - how much CPU is being used
 * - how much memory is being used
 * - how many requests per second are arriving
 * - how many requests are failing
 * - how long requests take
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - WHAT LOGS HELP YOU SEE
// -----------------------------------------------------------------------------
/*
 * Logs help answer:
 * - what exactly happened
 * - which request failed
 * - which user or endpoint was involved
 * - which exception occurred
 * - when the event happened
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - GOLDEN SIGNAL THINKING
// -----------------------------------------------------------------------------
/*
 * A useful production mindset is to watch key service signals like:
 *
 * - latency
 * - traffic
 * - errors
 * - saturation
 *
 * These help you understand
 * both user impact and infrastructure health.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - ALERTING PHILOSOPHY
// -----------------------------------------------------------------------------
/*
 * Good alerts should be:
 * - meaningful
 * - actionable
 * - low-noise
 *
 * Bad alerts are:
 * - constant
 * - vague
 * - ignored by the team
 *
 * Example of weak alert:
 * CPU > 70% for one minute
 *
 * Example of stronger alert:
 * 5xx error rate above threshold for 10 minutes
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - PRODUCTION REALITY
// -----------------------------------------------------------------------------
/*
 * The goal is not to collect every possible graph.
 *
 * The goal is to answer:
 * - Are users affected?
 * - Which layer is failing?
 * - How severe is it?
 * - What changed?
 */

// -----------------------------------------------------------------------------
// ! PHASE 9 - WHY THIS MATTERS IN DEVOPS
// -----------------------------------------------------------------------------
/*
 * Monitoring closes the DevOps loop.
 *
 * Plan
 * -> Build
 * -> Deploy
 * -> Monitor
 * -> Improve
 *
 * Without monitoring,
 * deployment is incomplete.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Monitoring is how you stop guessing.
 * Observability is how you investigate deeply.
 *
 * Together, they turn production operations
 * from reactive panic into informed engineering.
 */
