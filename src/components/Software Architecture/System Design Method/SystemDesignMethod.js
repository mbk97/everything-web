// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE-SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// PHASE 12 → SYSTEM DESIGN METHOD
//
// Goal:
//
// Learn a repeatable process for designing a system, communicating tradeoffs, and
// answering system-design interview questions without jumping randomly between
// technologies.
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Beginner thinks:
 *
 * "I need to mention load balancers, Redis, Kafka, and Kubernetes."
 *
 * Senior Engineer thinks:
 *
 * "Every component must solve a requirement or reduce a named risk."
 *
 * Architect thinks:
 *
 * "How do I make assumptions, priorities, tradeoffs, and failure behavior clear?"
 */

// -----------------------------------------------------------------------------
// 🗺️ THE DESIGN PROCESS
// -----------------------------------------------------------------------------

/*
 * 1. Clarify the problem and scope
 * 2. Define functional requirements
 * 3. Define non-functional requirements
 * 4. Estimate scale
 * 5. Design API and data models
 * 6. Draw the high-level architecture
 * 7. Walk through critical flows
 * 8. Find bottlenecks and failures
 * 9. Deep-dive into the hardest requirement
 * 10. Summarize tradeoffs and evolution
 *
 * The process is iterative. New information may change an earlier choice.
 */

// -----------------------------------------------------------------------------
// ❓ STEP 1 — CLARIFY SCOPE
// -----------------------------------------------------------------------------

/*
 * "Design a notification system" is incomplete.
 *
 * Ask:
 *
 * Which channels: email, SMS, push, in-app?
 * Transactional, marketing, or both?
 * Immediate or scheduled?
 * Does the user configure preferences?
 * Must delivery order be preserved?
 * Are delivery receipts required?
 * Which feature is outside today's scope?
 *
 * State reasonable assumptions when an answer is unavailable.
 */

// -----------------------------------------------------------------------------
// 🎯 STEP 2 — REQUIREMENTS
// -----------------------------------------------------------------------------

/*
 * Functional requirements:
 *
 * ✔ A service can request a notification
 * ✔ Users can choose channels and opt out of marketing
 * ✔ Workers deliver email, SMS, and push
 * ✔ Failed deliveries are retried
 * ✔ A sender can inspect delivery status
 *
 * Non-functional requirements:
 *
 * ✔ High availability for accepting requests
 * ✔ At-least-once processing
 * ✔ No duplicate visible notification where avoidable
 * ✔ Priority messages begin quickly
 * ✔ Provider failures do not stop other channels
 */

// -----------------------------------------------------------------------------
// 🧮 STEP 3 — ESTIMATE SCALE
// -----------------------------------------------------------------------------

/*
 * Example assumptions:
 *
 * 10 million notifications per day
 * Average = 10,000,000 / 86,400 ≈ 116 per second
 * Peak traffic = 10 × average ≈ 1,160 per second
 * Average message metadata = 2 KB
 * Daily metadata ≈ 20 GB before indexes and replication
 *
 * Estimates do not need false precision.
 * They reveal whether one database is enough, where batching helps, and which
 * limits deserve discussion.
 */

// -----------------------------------------------------------------------------
// 🔌 STEP 4 — API CONTRACT
// -----------------------------------------------------------------------------

/*
 * POST /notifications
 * Idempotency-Key: order-918-confirmation
 *
 * {
 *   "recipientId": "user-42",
 *   "template": "ORDER_CONFIRMED",
 *   "channels": ["email", "push"],
 *   "data": { "orderId": "order-918" },
 *   "priority": "high"
 * }
 *
 * Response:
 *
 * 202 Accepted
 *
 * {
 *   "notificationId": "notice-701",
 *   "status": "queued"
 * }
 *
 * GET /notifications/notice-701 returns delivery status.
 */

// -----------------------------------------------------------------------------
// 🗄️ STEP 5 — DATA MODEL
// -----------------------------------------------------------------------------

/*
 * Notification
 *
 * id
 * recipient_id
 * template_id
 * idempotency_key
 * priority
 * status
 * created_at
 *
 * DeliveryAttempt
 *
 * id
 * notification_id
 * channel
 * provider
 * attempt_number
 * status
 * provider_message_id
 * attempted_at
 *
 * UserPreference
 *
 * user_id
 * channel
 * category
 * enabled
 *
 * Design data around required access patterns, retention, and consistency.
 */

// -----------------------------------------------------------------------------
// 🏗️ STEP 6 — HIGH-LEVEL ARCHITECTURE
// -----------------------------------------------------------------------------

/*
 * Product Services
 *      │
 *      ▼
 * Notification API
 *      │
 *      ├────► Notification Database
 *      │
 *      ▼
 * Priority Queues
 *      ├────► Email Workers ──► Email Provider
 *      ├────► SMS Workers   ──► SMS Provider
 *      └────► Push Workers  ──► Push Provider
 *
 * Supporting components:
 *
 * Template Store
 * User Preference Store
 * Dead Letter Queue
 * Metrics, Logs, and Traces
 */

// -----------------------------------------------------------------------------
// 🔁 STEP 7 — WALK THE CRITICAL FLOW
// -----------------------------------------------------------------------------

/*
 * 1. Order Service sends an idempotent request
 * 2. Notification API authenticates and validates it
 * 3. API stores notification state
 * 4. API publishes channel jobs reliably using an outbox
 * 5. Worker checks the latest user preference
 * 6. Worker renders the approved template
 * 7. Worker calls the provider with a timeout
 * 8. Worker records delivery status
 * 9. Temporary failures retry with backoff and jitter
 * 10. Exhausted messages move to a dead letter queue
 */

// -----------------------------------------------------------------------------
// ⚠️ STEP 8 — FAILURE ANALYSIS
// -----------------------------------------------------------------------------

/*
 * API instance fails
 *
 * → Load balancer sends new requests to healthy instances
 *
 * Queue grows rapidly
 *
 * → Autoscale workers, apply producer limits, watch oldest-message age
 *
 * Email provider fails
 *
 * → Circuit breaker, delayed retry, secondary provider for critical messages
 *
 * Worker crashes after sending but before acknowledging
 *
 * → Message is redelivered; use provider idempotency or deduplication
 *
 * Database fails
 *
 * → Multi-zone failover and tested recovery; do not accept work you cannot track
 */

// -----------------------------------------------------------------------------
// 🔬 STEP 9 — DEEP DIVE
// -----------------------------------------------------------------------------

/*
 * Choose the hardest requirement and explore it.
 *
 * Example: visible duplicate prevention
 *
 * Sources of duplicates:
 *
 * Client retries
 * Queue redelivery
 * Worker timeout after provider success
 * Provider webhook redelivery
 *
 * Controls:
 *
 * API idempotency keys
 * Unique constraints
 * Idempotent consumers
 * Provider idempotency keys
 * Deduplicated webhooks
 *
 * Be honest: exactly-once delivery across independent systems is usually an
 * application effect created with idempotency, not a magical transport guarantee.
 */

// -----------------------------------------------------------------------------
// ⚖️ STEP 10 — TRADEOFFS
// -----------------------------------------------------------------------------

/*
 * Queue instead of direct provider call
 *
 * ✔ Absorbs spikes and isolates provider latency
 * ❌ Delivery becomes asynchronous
 *
 * One provider instead of several
 *
 * ✔ Simpler routing and operations
 * ❌ Larger provider outage risk
 *
 * Relational delivery store
 *
 * ✔ Strong updates and flexible investigation
 * ❌ Requires partitioning or archival at very large scale
 *
 * Strong answers name both the gain and the cost.
 */

// -----------------------------------------------------------------------------
// 🗣️ COMMUNICATION DURING A DESIGN
// -----------------------------------------------------------------------------

/*
 * Announce assumptions.
 * Prioritize two or three difficult requirements.
 * Draw the simplest end-to-end flow first.
 * Label data ownership and trust boundaries.
 * Explain why each component exists.
 * Discuss failure before adding more features.
 * Invite a deep dive into the riskiest area.
 *
 * A clear simple design is stronger than an unexplained complex diagram.
 */

// -----------------------------------------------------------------------------
// 🚫 COMMON MISTAKES
// -----------------------------------------------------------------------------

/*
 * ❌ Choosing technology before requirements
 * ❌ Assuming every system has billions of users
 * ❌ Ignoring writes while optimizing reads
 * ❌ Drawing components without request and data flow
 * ❌ Claiming "Kafka solves it" without delivery semantics
 * ❌ Forgetting timeouts, retries, security, and observability
 * ❌ Saying "exactly once" without explaining idempotency
 * ❌ Giving no tradeoffs
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * A design is a chain of reasoning:
 *
 * Requirement
 *      │
 *      ▼
 * Constraint
 *      │
 *      ▼
 * Decision
 *      │
 *      ▼
 * Tradeoff
 *      │
 *      ▼
 * Evidence and measurement
 *
 * If a component cannot be connected to this chain, it probably does not belong.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 * Design a URL shortener using all ten steps.
 *
 * TASK 2
 * Estimate peak reads, writes, and storage for your assumptions.
 *
 * TASK 3
 * Walk one write flow and one read flow through the architecture.
 *
 * TASK 4
 * Identify five failures and give a bounded recovery behavior for each.
 *
 * TASK 5
 * End with three explicit tradeoffs and a plan for future growth.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * ✔ Scope and requirements come first
 * ✔ Small estimates guide large architecture decisions
 * ✔ APIs and data models make the design concrete
 * ✔ Critical flows reveal missing components and unclear ownership
 * ✔ Failure analysis matters as much as the happy path
 * ✔ A deep dive proves understanding of the hardest requirement
 * ✔ Tradeoffs make decisions honest
 *
 * BIG IDEA
 *
 * Good system design is not memorizing diagrams. It is a repeatable method for
 * turning uncertain requirements into explainable decisions.
 */
