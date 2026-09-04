// =============================================================================
// PROMETHEUS AND GRAFANA
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT PROMETHEUS DOES
// -----------------------------------------------------------------------------
/*
 * Prometheus is a metrics collection and storage system.
 *
 * It gathers time-series data like:
 * - CPU usage
 * - memory usage
 * - request counts
 * - request latency
 * - error totals
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHAT GRAFANA DOES
// -----------------------------------------------------------------------------
/*
 * Grafana visualizes data.
 *
 * It turns metrics into:
 * - dashboards
 * - graphs
 * - panels
 * - alerts in some setups
 *
 * Think:
 *
 * Prometheus = stores metrics
 * Grafana = displays metrics beautifully and usefully
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - HOW PROMETHEUS COLLECTS DATA
// -----------------------------------------------------------------------------
/*
 * Prometheus often scrapes metrics endpoints.
 *
 * That means:
 * applications or exporters expose metrics
 * and Prometheus pulls them at intervals.
 *
 * Common sources:
 * - app metrics endpoint
 * - node exporter
 * - kube-state metrics
 * - container metrics
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - WHAT TO GRAPH FIRST
// -----------------------------------------------------------------------------
/*
 * Strong first dashboard signals:
 * - CPU
 * - memory
 * - request rate
 * - latency
 * - error rate
 * - pod restarts
 * - queue lag if relevant
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - WHY THIS STACK IS POPULAR
// -----------------------------------------------------------------------------
/*
 * Prometheus + Grafana is popular because:
 * - open source
 * - flexible
 * - strong Kubernetes integration
 * - good dashboard ecosystem
 *
 * It is one of the most common observability stacks
 * in cloud-native environments.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - METRICS VS LOGS
// -----------------------------------------------------------------------------
/*
 * Prometheus is not your full logging system.
 *
 * Metrics answer:
 * - how much
 * - how often
 * - how long
 *
 * Logs answer:
 * - what exactly happened
 *
 * You usually want both.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - KUBERNETES FIT
// -----------------------------------------------------------------------------
/*
 * In Kubernetes environments,
 * Prometheus and Grafana are especially useful for watching:
 * - pod health
 * - cluster resource usage
 * - application performance
 * - deployment behavior
 *
 * This is one reason they appear often in DevOps roadmaps.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - COMMON MISTAKES
// -----------------------------------------------------------------------------
/*
 * 1. Collecting too many metrics with no clear purpose
 *
 * 2. Building dashboards with no operational meaning
 *
 * 3. Forgetting alert design
 *
 * 4. Monitoring infrastructure only, not service behavior
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Prometheus helps you measure.
 * Grafana helps you see.
 *
 * Together, they form one of the strongest open-source foundations
 * for production visibility.
 */
