// =============================================================================
// INCIDENT DEBUGGING FLOW
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT AN INCIDENT REALLY IS
// -----------------------------------------------------------------------------
/*
 * An incident is a production event that affects reliability,
 * availability, performance, or security.
 *
 * Examples:
 * - site is down
 * - API latency is high
 * - deployment broke traffic
 * - disk is full
 * - database connections are exhausted
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - THE RIGHT MINDSET
// -----------------------------------------------------------------------------
/*
 * Good operators do not panic and start changing random things.
 *
 * They:
 * - confirm symptoms
 * - gather evidence
 * - isolate the layer
 * - mitigate quickly
 * - investigate root cause after stability returns
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - A STRONG INCIDENT FLOW
// -----------------------------------------------------------------------------
/*
 * Good incident flow:
 *
 * 1. confirm the symptom
 * 2. check alerts and dashboards
 * 3. inspect logs
 * 4. isolate the failing layer
 * 5. mitigate first
 * 6. fix root cause after stability returns
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - LAYERED THINKING
// -----------------------------------------------------------------------------
/*
 * Common layers to inspect:
 * - DNS
 * - load balancer / ingress
 * - application
 * - database
 * - queue or cache
 * - operating system / container runtime
 *
 * Good debugging is usually about finding
 * which layer is currently broken.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - MITIGATION VS ROOT CAUSE
// -----------------------------------------------------------------------------
/*
 * Important distinction:
 *
 * Mitigation:
 * restore service quickly
 *
 * Root cause analysis:
 * understand why it happened deeply
 *
 * During an outage,
 * mitigation usually comes first.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - COMMON MITIGATION EXAMPLES
// -----------------------------------------------------------------------------
/*
 * Examples:
 * - rollback a bad deployment
 * - restart a failed service
 * - scale replicas
 * - fail over to healthy targets
 * - free disk space
 *
 * These may not solve the deeper cause,
 * but they reduce user pain.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - EVIDENCE SOURCES
// -----------------------------------------------------------------------------
/*
 * During incident debugging, look at:
 * - dashboards
 * - logs
 * - alerts
 * - deployment history
 * - infra change history
 * - system or container events
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - POST-INCIDENT VALUE
// -----------------------------------------------------------------------------
/*
 * A strong team learns after the incident by asking:
 * - what failed
 * - why detection took time
 * - what made recovery slow
 * - what should be automated next time
 *
 * That is how operations maturity grows.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Operations skill is not just finding bugs.
 * It is restoring service calmly, quickly,
 * and learning enough to reduce future repeat incidents.
 */
