// =============================================================================
// LOGGING AND ALERTING
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - LOGGING
// -----------------------------------------------------------------------------
/*
 * Logs are timestamped records of events.
 *
 * They help answer:
 * - what happened
 * - when it happened
 * - which request or service failed
 * - which error occurred
 * - which part of the code or infrastructure was involved
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - GOOD LOGGING HABITS
// -----------------------------------------------------------------------------
/*
 * Good logs should be:
 * - clear
 * - structured
 * - timestamped
 * - searchable
 *
 * Helpful fields often include:
 * - request ID
 * - endpoint
 * - status code
 * - error message
 * - user or tenant ID when appropriate
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - WHY STRUCTURED LOGS HELP
// -----------------------------------------------------------------------------
/*
 * Structured logs are easier to query and analyze.
 *
 * Instead of vague text,
 * they store consistent fields.
 *
 * This helps when incidents happen
 * and you need fast filtering.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - ALERTING PHILOSOPHY
// -----------------------------------------------------------------------------
/*
 * Alerting should focus on conditions that matter.
 *
 * The best alerts usually point to:
 * - user-facing failures
 * - degraded performance
 * - serious infrastructure risk
 *
 * Alerting rule:
 * alert on symptoms users feel,
 * not only on infrastructure values.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - STRONGER ALERT EXAMPLES
// -----------------------------------------------------------------------------
/*
 * Better alert examples:
 * - 5xx spike
 * - response latency increase
 * - unhealthy targets
 * - queue backlog growing dangerously
 *
 * Not enough by itself:
 * - CPU > 70%
 *
 * Infrastructure alerts are useful,
 * but they should not be your only thinking.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - ALERT FATIGUE
// -----------------------------------------------------------------------------
/*
 * Too many low-value alerts create alert fatigue.
 *
 * What happens then?
 * - people ignore alarms
 * - real incidents are missed
 * - trust in monitoring decreases
 *
 * This is why alert quality matters so much.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - LOGGING AND ALERTING WORK TOGETHER
// -----------------------------------------------------------------------------
/*
 * A good alert says:
 * "Something is wrong."
 *
 * Good logs help answer:
 * "What exactly is wrong?"
 *
 * That combination is what makes incident response effective.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - COMMON MISTAKES
// -----------------------------------------------------------------------------
/*
 * 1. Logging too little
 *
 * 2. Logging huge noisy data with no structure
 *
 * 3. Alerting on every minor fluctuation
 *
 * 4. Not linking alerts to dashboards or logs
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Logs are your evidence.
 * Alerts are your early warning.
 *
 * If both are designed well,
 * debugging becomes much faster and calmer.
 */
