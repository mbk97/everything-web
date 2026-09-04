// =============================================================================
// AWS CLOUDWATCH BASICS
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT CLOUDWATCH IS
// -----------------------------------------------------------------------------
/*
 * CloudWatch is AWS's monitoring and observability service.
 *
 * It helps you work with:
 * - metrics
 * - logs
 * - alarms
 * - dashboards
 * - events
 *
 * If you use AWS heavily,
 * CloudWatch is one of the most important services to know.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - METRICS
// -----------------------------------------------------------------------------
/*
 * CloudWatch metrics are numerical signals over time.
 *
 * Examples:
 * - EC2 CPU utilization
 * - ALB request count
 * - ECS CPU and memory
 * - RDS connection count
 *
 * Metrics help you see trends and thresholds.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - LOGS
// -----------------------------------------------------------------------------
/*
 * CloudWatch Logs stores log streams from AWS resources and applications.
 *
 * Examples:
 * - application logs
 * - system logs
 * - Lambda logs
 * - load balancer logs via integration patterns
 *
 * Logs help with incident investigation and debugging.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - ALARMS
// -----------------------------------------------------------------------------
/*
 * CloudWatch alarms trigger when a metric crosses a threshold.
 *
 * Example alarm ideas:
 * - EC2 CPU too high
 * - disk too full
 * - app error rate rising
 * - unhealthy load balancer targets
 *
 * Alarms let you move from passive dashboards
 * to active detection.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - DASHBOARDS
// -----------------------------------------------------------------------------
/*
 * Dashboards give one visual place to watch important signals.
 *
 * Good dashboard sections might include:
 * - traffic
 * - latency
 * - error rate
 * - CPU and memory
 * - load balancer health
 *
 * The point is fast situational awareness.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - A GOOD BEGINNER CLOUDWATCH STACK
// -----------------------------------------------------------------------------
/*
 * For one AWS-hosted app,
 * a strong first setup is:
 *
 * - EC2 metrics
 * - app logs into CloudWatch Logs
 * - CPU alarm
 * - memory or disk alarm if available through agent
 * - dashboard for key app signals
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - WHAT CLOUDWATCH DOES NOT AUTOMATICALLY SOLVE
// -----------------------------------------------------------------------------
/*
 * CloudWatch is powerful,
 * but it does not automatically create good monitoring for you.
 *
 * You still need to decide:
 * - which metrics matter
 * - which logs matter
 * - what should page a human
 * - what is only dashboard information
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - COMMON MISTAKES
// -----------------------------------------------------------------------------
/*
 * 1. Alerting on too many weak signals
 *
 * 2. Sending logs but never reviewing format quality
 *
 * 3. Building dashboards that look nice but do not help debugging
 *
 * 4. Monitoring infrastructure only, not user-facing symptoms
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * CloudWatch is often the first serious observability platform
 * for AWS-heavy teams.
 *
 * If you learn metrics, logs, alarms, and dashboards well here,
 * you gain real operational skill.
 */
