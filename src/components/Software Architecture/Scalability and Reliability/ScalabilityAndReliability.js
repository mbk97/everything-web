// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE-SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// PHASE 2A → SCALABILITY AND RELIABILITY
//
// Goal:
//
// Learn how systems handle growth, survive failure, and remain useful when
// individual dependencies become slow or unavailable.
//
// Prerequisite: Architecture Fundamentals
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Beginner thinks:
 *
 * "How many users can my server handle?"
 *
 * Senior Engineer thinks:
 *
 * "Where is the bottleneck, what happens when it fails, and how do we recover?"
 *
 * Architect thinks:
 *
 * "Which parts must scale independently, and what level of failure can the
 * business tolerate?"
 */

// -----------------------------------------------------------------------------
// 📈 WHAT IS SCALABILITY?
// -----------------------------------------------------------------------------

/*
 * Scalability is a system's ability to handle more work without becoming
 * unacceptably slow or unreliable.
 *
 * Growth can mean:
 *
 * More users
 * More requests per second
 * More stored data
 * More background jobs
 * More regions
 * More engineers changing the system
 *
 * Scaling is not only adding servers. First identify what is limiting the system.
 */

// -----------------------------------------------------------------------------
// 📊 MEASURE THE WORK
// -----------------------------------------------------------------------------

/*
 * Latency     → Time taken to complete one request
 * Throughput  → Work completed per unit of time
 * Concurrency → Work in progress at the same time
 * Saturation  → How close a resource is to its limit
 * Error rate  → Percentage of operations that fail
 *
 * Average latency can hide pain.
 *
 * p50  = half of requests are faster than this value
 * p95  = 95% of requests are faster
 * p99  = the slowest 1% begins here
 *
 * Users often experience the tail, so architects watch percentiles.
 */

// -----------------------------------------------------------------------------
// ⬆️ VERTICAL SCALING
// -----------------------------------------------------------------------------

/*
 * Vertical scaling means making one machine stronger.
 *
 * 4 CPU / 8 GB RAM
 *          │
 *          ▼
 * 16 CPU / 64 GB RAM
 *
 * Advantages:
 *
 * ✔ Simple
 * ✔ Few application changes
 *
 * Limits:
 *
 * ❌ Hardware has a ceiling
 * ❌ Large machines cost more
 * ❌ One machine can still be one point of failure
 */

// -----------------------------------------------------------------------------
// ↔️ HORIZONTAL SCALING
// -----------------------------------------------------------------------------

/*
 * Horizontal scaling means adding more machines.
 *
 * Load Balancer
 *      │
 *      ├────► API 1
 *      ├────► API 2
 *      └────► API 3
 *
 * Advantages:
 *
 * ✔ Capacity can grow gradually
 * ✔ One failed instance need not stop the system
 *
 * Costs:
 *
 * ❌ Requests can reach different machines
 * ❌ Shared state becomes more difficult
 * ❌ Deployment and monitoring become more complex
 */

// -----------------------------------------------------------------------------
// 🧊 STATELESS APPLICATION SERVERS
// -----------------------------------------------------------------------------

/*
 * A stateless server does not depend on local memory for future requests.
 *
 * Bad:
 *
 * API 1 stores a user's login session in its own RAM.
 * The next request reaches API 2, which knows nothing about that session.
 *
 * Better:
 *
 * Load Balancer
 *      │
 *      ├────► API 1 ──┐
 *      └────► API 2 ──┼────► Shared Session Store
 *                     ┘
 *
 * Stateless servers are easier to add, remove, replace, and autoscale.
 */

// -----------------------------------------------------------------------------
// 🔎 FIND THE BOTTLENECK
// -----------------------------------------------------------------------------

/*
 * Adding API servers does not help if the database is saturated.
 * Adding a cache does not help a write-heavy workload.
 * Adding workers does not help if an external provider enforces a strict limit.
 *
 * Diagnose the limiting resource:
 *
 * CPU
 * Memory
 * Disk input/output
 * Network bandwidth
 * Database connections
 * Locks and contention
 * Downstream rate limits
 * Queue depth
 *
 * Measure before and after every scaling decision.
 */

// -----------------------------------------------------------------------------
// ❤️ AVAILABILITY AND RELIABILITY
// -----------------------------------------------------------------------------

/*
 * Availability asks:
 *
 * "Can the system accept requests right now?"
 *
 * Reliability asks:
 *
 * "Does the system continue producing correct results over time?"
 *
 * A server returning a wrong account balance is available but not reliable.
 *
 * Availability is often expressed as a percentage:
 *
 * 99.9%  allows about 43 minutes of downtime per month
 * 99.99% allows about 4 minutes of downtime per month
 *
 * Higher availability requires more redundancy, automation, testing, and cost.
 */

// -----------------------------------------------------------------------------
// 🪞 REDUNDANCY
// -----------------------------------------------------------------------------

/*
 * Redundancy means having another component able to take over.
 *
 * Load Balancer
 *      │
 *      ├────► Healthy API
 *      └────► Failed API ✖
 *
 * Database Primary
 *      │
 *      └────► Standby Replica
 *
 * Redundancy only works when failure is detected and traffic can be redirected.
 * An unused backup that cannot be restored is not a recovery strategy.
 */

// -----------------------------------------------------------------------------
// ⏱️ TIMEOUTS
// -----------------------------------------------------------------------------

/*
 * Every network request needs a deadline.
 *
 * Without a timeout:
 *
 * API waits forever
 * Connections remain occupied
 * Requests accumulate
 * The entire system becomes saturated
 *
 * A timeout says:
 *
 * "After this duration, stop waiting and choose a recovery path."
 *
 * The caller's timeout must include the time used by all downstream calls.
 */

// -----------------------------------------------------------------------------
// 🔁 RETRIES, BACKOFF, AND JITTER
// -----------------------------------------------------------------------------

/*
 * Some failures are temporary, so retrying can help.
 *
 * Attempt 1 → fail
 * Wait 100 ms
 * Attempt 2 → fail
 * Wait 200 ms
 * Attempt 3 → success
 *
 * Exponential backoff increases the delay after each failure.
 * Jitter adds randomness so thousands of clients do not retry together.
 *
 * Retry only when:
 *
 * ✔ The failure may be temporary
 * ✔ The operation is idempotent or has an idempotency key
 * ✔ A retry budget limits additional load
 *
 * Blind retries can turn a small failure into a retry storm.
 */

// -----------------------------------------------------------------------------
// 🔌 CIRCUIT BREAKER
// -----------------------------------------------------------------------------

/*
 * A circuit breaker stops calls to a dependency that is repeatedly failing.
 *
 * CLOSED    → Requests flow normally
 * OPEN      → Calls fail fast; the dependency gets time to recover
 * HALF-OPEN → A few test requests check recovery
 *
 * Payment API ──► Circuit Breaker ──► Fraud Service
 *
 * When Fraud Service is unhealthy, failing fast protects threads, connections,
 * and the rest of the system.
 */

// -----------------------------------------------------------------------------
// 🚢 BULKHEADS
// -----------------------------------------------------------------------------

/*
 * Ships use compartments so one leak does not sink the entire vessel.
 *
 * Software bulkheads isolate resources.
 *
 * Transfer request pool     → reserved capacity
 * Report request pool       → separate capacity
 * Notification worker pool  → separate capacity
 *
 * A huge report should not consume every connection needed for money transfers.
 */

// -----------------------------------------------------------------------------
// 🪶 GRACEFUL DEGRADATION
// -----------------------------------------------------------------------------

/*
 * When a non-critical dependency fails, keep the core journey useful.
 *
 * Recommendation service fails → show popular products
 * Analytics fails              → buffer events for later
 * Avatar service fails         → show a placeholder
 * Notification fails           → queue it for retry
 *
 * Do not degrade correctness for critical operations.
 * A bank must not invent an account balance because the ledger is unavailable.
 */

// -----------------------------------------------------------------------------
// 🎯 SLI, SLO, AND ERROR BUDGET
// -----------------------------------------------------------------------------

/*
 * SLI → the measured indicator, such as successful request percentage
 * SLO → the target, such as 99.95% successful requests per month
 * SLA → a formal promise with business consequences
 *
 * Error budget = 100% - SLO
 *
 * For a 99.95% SLO, the system may fail 0.05% of requests within the period.
 *
 * The error budget makes reliability a concrete product decision instead of
 * an endless demand for "zero failures."
 */

// -----------------------------------------------------------------------------
// 🏦 COMPLETE BANKING EXAMPLE
// -----------------------------------------------------------------------------

/*
 * Mobile Clients
 *      │
 *      ▼
 * Load Balancer
 *      │
 *      ├────► Stateless Transfer API 1
 *      └────► Stateless Transfer API 2
 *                    │
 *                    ├────► Primary Ledger Database
 *                    │            │
 *                    │            └────► Standby Replica
 *                    │
 *                    └────► Message Queue ──► Notification Workers
 *
 * Protection:
 *
 * ✔ Health checks remove unhealthy API instances
 * ✔ Timeouts prevent endless waits
 * ✔ Idempotency keys make safe transfer retries possible
 * ✔ Bulkheads protect transfers from reporting traffic
 * ✔ Queues absorb notification spikes
 * ✔ A standby database supports recovery
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * Ask:
 *
 * What is the expected traffic pattern?
 * Which component reaches its limit first?
 * Is the workload read-heavy, write-heavy, or bursty?
 * Which failures may be hidden from the user?
 * What data can be stale, and what data must be correct?
 * How will the system recover?
 *
 * Scale the bottleneck and design for the failures you can realistically expect.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 * Explain vertical and horizontal scaling with one tradeoff for each.
 *
 * TASK 2
 * Redesign a stateful API so any instance can serve any request.
 *
 * TASK 3
 * Add timeouts, bounded retries, and a circuit breaker to a service call.
 *
 * TASK 4
 * Choose which features of an online shop can degrade during an outage.
 *
 * TASK 5
 * Define one SLI and SLO for a money-transfer API.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * ✔ Scalability begins with measurement and bottleneck discovery
 * ✔ Vertical scaling strengthens one machine
 * ✔ Horizontal scaling adds machines and works best with stateless services
 * ✔ Redundancy, detection, and failover improve availability
 * ✔ Timeouts, careful retries, circuit breakers, and bulkheads contain failures
 * ✔ Graceful degradation preserves non-critical user journeys
 * ✔ SLOs define how reliable the system actually needs to be
 *
 * BIG IDEA
 *
 * A scalable system handles more success.
 * A reliable system also handles failure.
 */
