// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE-SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// PHASE 11 → OBSERVABILITY AND OPERATIONS
//
// Goal:
//
// Learn how logs, metrics, traces, health checks, SLOs, and alerts reveal what a
// production system is doing and help engineers respond safely.
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Beginner thinks:
 *
 * "If something fails, I will add a console log."
 *
 * Senior Engineer thinks:
 *
 * "Production must explain its behavior without me reproducing every failure."
 *
 * Architect thinks:
 *
 * "What signals prove that users are receiving a reliable service?"
 */

// -----------------------------------------------------------------------------
// 🔭 MONITORING VS OBSERVABILITY
// -----------------------------------------------------------------------------

/*
 * Monitoring checks known conditions.
 *
 * "Is CPU above 90%?"
 * "Is the API returning too many errors?"
 *
 * Observability helps investigate questions that were not predicted.
 *
 * "Why are only card payments from one region slow after this deployment?"
 *
 * Good observability connects system behavior to user impact.
 */

// -----------------------------------------------------------------------------
// 📊 THE THREE CORE SIGNAL TYPES
// -----------------------------------------------------------------------------

/*
 * Metrics → numeric measurements over time
 * Logs    → discrete records of events
 * Traces  → the path of one request across components
 *
 * They complement each other:
 *
 * Metric says: payment errors increased.
 * Trace says: latency is inside Fraud Service.
 * Log says: the provider rejected the request because a credential expired.
 */

// -----------------------------------------------------------------------------
// 📈 METRICS
// -----------------------------------------------------------------------------

/*
 * Useful service metrics:
 *
 * Request rate
 * Error rate
 * Latency percentiles
 * Saturation
 * Active connections
 * Queue depth and oldest-message age
 * Cache hit ratio
 * Database connection usage
 *
 * RED method for request-driven services:
 *
 * Rate, Errors, Duration
 *
 * USE method for resources:
 *
 * Utilization, Saturation, Errors
 */

// -----------------------------------------------------------------------------
// 🧾 STRUCTURED LOGS
// -----------------------------------------------------------------------------

/*
 * Weak log:
 *
 * "Something went wrong"
 *
 * Useful structured event:
 *
 * {
 *   "level": "error",
 *   "event": "payment_provider_timeout",
 *   "requestId": "req-812",
 *   "service": "payment-service",
 *   "provider": "provider-a",
 *   "durationMs": 2010
 * }
 *
 * Use stable field names and machine-readable events.
 * Do not log passwords, tokens, card numbers, or unnecessary personal data.
 */

// -----------------------------------------------------------------------------
// 🧵 DISTRIBUTED TRACING
// -----------------------------------------------------------------------------

/*
 * One user request may cross many services.
 *
 * API Gateway           40 ms
 *      │
 * Order Service         80 ms
 *      │
 * Payment Service      900 ms
 *      │
 * Payment Provider     760 ms
 *
 * A trace contains spans for each operation and carries trace context between
 * services. It exposes critical paths, retries, fan-out, and slow dependencies.
 */

// -----------------------------------------------------------------------------
// 🔗 CORRELATION
// -----------------------------------------------------------------------------

/*
 * Propagate identifiers across boundaries:
 *
 * Request ID     → one request at the entry point
 * Trace ID       → one distributed execution path
 * User-safe ID   → resource such as orderId or transferId
 * Deployment info→ version, environment, region
 *
 * Queue producers should include trace context or a causation ID so asynchronous
 * work can be connected to the request or event that created it.
 */

// -----------------------------------------------------------------------------
// ❤️ HEALTH, READINESS, AND LIVENESS
// -----------------------------------------------------------------------------

/*
 * Liveness asks:
 *
 * "Is this process stuck and should it be restarted?"
 *
 * Readiness asks:
 *
 * "Can this instance receive traffic now?"
 *
 * A starting service may be alive but not ready.
 * A service draining connections during deployment may be alive but not ready.
 *
 * Avoid making liveness depend on every downstream service. One database outage
 * should not trigger a restart storm across all application instances.
 */

// -----------------------------------------------------------------------------
// 🎯 SERVICE LEVEL OBJECTIVES
// -----------------------------------------------------------------------------

/*
 * Example user-centered SLO:
 *
 * "99.95% of valid transfer requests complete successfully within two seconds
 * over a rolling 30-day period."
 *
 * This combines:
 *
 * Correctness
 * Availability
 * Latency
 * Time window
 *
 * Dashboards and alerts should prioritize SLO risk over isolated infrastructure
 * numbers that may have no user impact.
 */

// -----------------------------------------------------------------------------
// 🚨 ACTIONABLE ALERTS
// -----------------------------------------------------------------------------

/*
 * A good alert means a human must act soon.
 *
 * It includes:
 *
 * What user journey is affected
 * Severity
 * Current evidence
 * Owning team
 * Runbook
 * Relevant dashboard and traces
 *
 * Weak alert:
 *
 * "CPU reached 81% for one minute."
 *
 * Strong alert:
 *
 * "Transfer API is consuming its monthly error budget 10x too quickly."
 *
 * Too many low-value alerts teach responders to ignore all alerts.
 */

// -----------------------------------------------------------------------------
// 🖥️ DASHBOARDS
// -----------------------------------------------------------------------------

/*
 * A service dashboard should answer:
 *
 * Are users succeeding?
 * Is performance within the SLO?
 * Which endpoint, dependency, region, or version changed?
 * Is capacity approaching a limit?
 * Are asynchronous jobs keeping up?
 *
 * Start with business and service health, then drill into infrastructure details.
 */

// -----------------------------------------------------------------------------
// 🏷️ CARDINALITY AND COST
// -----------------------------------------------------------------------------

/*
 * Metric labels create a new time series for every unique combination.
 *
 * Safe labels:
 *
 * route, status_code, region, service
 *
 * Dangerous labels:
 *
 * user_id, request_id, full_url, email
 *
 * High-cardinality fields belong in logs or traces, not ordinary metric labels.
 * Retention, sampling, and useful field selection keep observability affordable.
 */

// -----------------------------------------------------------------------------
// 🚀 DEPLOYMENT OBSERVABILITY
// -----------------------------------------------------------------------------

/*
 * Every signal should identify the running version.
 *
 * Before deployment → error rate 0.1%
 * Canary v2         → error rate 4.8%
 * Stable v1         → error rate 0.1%
 *
 * This makes rollback evidence clear.
 *
 * Track:
 *
 * Deployment start and end
 * Version
 * Feature flags
 * Schema migrations
 * Configuration changes
 */

// -----------------------------------------------------------------------------
// 🏦 TRANSFER INVESTIGATION
// -----------------------------------------------------------------------------

/*
 * Symptom:
 *
 * Customers report slow transfers.
 *
 * Investigation:
 *
 * 1. SLO dashboard shows p99 latency increased in one region
 * 2. Traces show the Fraud Service span consumes most time
 * 3. Logs show repeated timeout and retry events
 * 4. Deployment marker shows Fraud Service v18 launched ten minutes earlier
 * 5. Rollback restores normal latency
 *
 * Correlated signals turn guessing into a short evidence trail.
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * Ask before launch:
 *
 * How will we know users are succeeding?
 * How will we find one failed request?
 * Which dependencies contribute latency?
 * What alert requires action?
 * Who owns the response?
 * How will a deployment be connected to a regression?
 *
 * Operability is a feature of the architecture.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 * Define RED metrics for an order API.
 *
 * TASK 2
 * Design a safe structured log for a failed payment.
 *
 * TASK 3
 * Draw a trace across gateway, order, inventory, and payment services.
 *
 * TASK 4
 * Write one user-centered SLO and one actionable alert.
 *
 * TASK 5
 * Explain why requestId is a poor metric label but a useful log field.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * ✔ Metrics show trends, logs explain events, and traces show request paths
 * ✔ Correlation joins signals across synchronous and asynchronous work
 * ✔ Readiness and liveness answer different operational questions
 * ✔ SLOs connect engineering signals to user expectations
 * ✔ Alerts must be actionable and owned
 * ✔ Version and deployment markers speed regression analysis
 * ✔ Cardinality and retention make observability a cost decision
 *
 * BIG IDEA
 *
 * If a team cannot explain a production failure, the system is not yet operable.
 */
