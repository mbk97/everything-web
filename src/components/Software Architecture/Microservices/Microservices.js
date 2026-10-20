// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE-SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// PHASE 8 → MICROSERVICES
//
// Goal:
//
// Learn when microservices are useful, how to choose service boundaries, and how
// to manage the data, communication, and operational complexity they introduce.
//
// Prerequisites: Distributed Systems and Message Queues
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Beginner thinks:
 *
 * "Microservices make an application scalable."
 *
 * Senior Engineer thinks:
 *
 * "Microservices let parts of a system and organization change independently."
 *
 * Architect thinks:
 *
 * "Is that independence valuable enough to pay for distributed-system
 * complexity?"
 */

// -----------------------------------------------------------------------------
// 🧱 START WITH THE MONOLITH
// -----------------------------------------------------------------------------

/*
 * A monolith is deployed as one application.
 *
 * Online Store
 *
 * ├── Users
 * ├── Catalog
 * ├── Orders
 * ├── Payments
 * └── Notifications
 *
 * A monolith is not automatically bad.
 *
 * Advantages:
 *
 * ✔ Simple local calls
 * ✔ Simple transactions
 * ✔ Easier local development
 * ✔ One deployment pipeline
 *
 * Problems appear when weak boundaries make every feature depend on everything.
 */

// -----------------------------------------------------------------------------
// 🧩 MODULAR MONOLITH
// -----------------------------------------------------------------------------

/*
 * A modular monolith keeps one deployment but creates strict internal boundaries.
 *
 * Application
 *
 * ├── Orders Module       → owns order rules
 * ├── Payments Module     → owns payment rules
 * ├── Inventory Module    → owns stock rules
 * └── Notifications Module→ owns delivery rules
 *
 * Modules communicate through defined interfaces.
 * They do not freely edit each other's tables or internal objects.
 *
 * This is often the best starting point because it creates good boundaries before
 * adding a network between them.
 */

// -----------------------------------------------------------------------------
// 📦 WHAT IS A MICROSERVICE?
// -----------------------------------------------------------------------------

/*
 * A microservice is an independently deployable service aligned to a business
 * capability and owned by a team.
 *
 * "Micro" does not mean a tiny number of lines.
 *
 * A useful service has:
 *
 * ✔ A clear business responsibility
 * ✔ A stable contract
 * ✔ Ownership of its data
 * ✔ Independent deployment
 * ✔ An operating team
 */

// -----------------------------------------------------------------------------
// ✂️ CHOOSE BUSINESS BOUNDARIES
// -----------------------------------------------------------------------------

/*
 * Weak split by technical layer:
 *
 * Controller Service
 * Validation Service
 * Database Service
 *
 * One business request crosses every service and none owns the outcome.
 *
 * Stronger split by business capability:
 *
 * Identity Service
 * Ordering Service
 * Payment Service
 * Inventory Service
 *
 * Ask:
 *
 * What language does the business use?
 * Which rules change together?
 * Which data must remain consistent together?
 * Which team owns the outcome?
 */

// -----------------------------------------------------------------------------
// 🗄️ DATABASE PER SERVICE
// -----------------------------------------------------------------------------

/*
 * Each service owns its data and controls access through a contract.
 *
 * Order Service   ──► Order Database
 * Payment Service ──► Payment Database
 *
 * Payment Service must not update Order Database directly.
 *
 * Benefits:
 *
 * ✔ Services can change storage independently
 * ✔ Ownership is clear
 * ✔ Internal schemas stay private
 *
 * Costs:
 *
 * ❌ Cross-service joins are difficult
 * ❌ Transactions no longer span one database easily
 * ❌ Some data may be eventually consistent
 */

// -----------------------------------------------------------------------------
// 🔄 SYNCHRONOUS COMMUNICATION
// -----------------------------------------------------------------------------

/*
 * Order Service ──HTTP/gRPC──► Payment Service
 *
 * Use synchronous calls when the caller needs an immediate answer.
 *
 * Risks:
 *
 * Payment is slow → Order is slow
 * Payment fails   → Order may fail
 * Long call chains multiply latency and failure probability
 *
 * Protect calls with deadlines, limited retries, circuit breakers, and clear
 * failure behavior.
 */

// -----------------------------------------------------------------------------
// 📨 ASYNCHRONOUS COMMUNICATION
// -----------------------------------------------------------------------------

/*
 * Order Service
 *      │ publishes OrderCreated
 *      ▼
 * Event Broker
 *      ├────► Inventory Consumer
 *      ├────► Notification Consumer
 *      └────► Analytics Consumer
 *
 * Benefits:
 *
 * ✔ Producer and consumers are separated in time
 * ✔ New consumers can be added
 * ✔ Traffic spikes can be buffered
 *
 * Costs:
 *
 * ❌ Eventual consistency
 * ❌ Duplicate and out-of-order delivery
 * ❌ Harder debugging
 */

// -----------------------------------------------------------------------------
// 🧾 THE DUAL-WRITE PROBLEM
// -----------------------------------------------------------------------------

/*
 * An Order Service needs to:
 *
 * 1. Save the order
 * 2. Publish OrderCreated
 *
 * Database succeeds + publish fails → order exists but nobody hears about it.
 * Publish succeeds + database fails → consumers act on an order that does not exist.
 *
 * Two independent writes cannot be assumed to succeed together.
 */

// -----------------------------------------------------------------------------
// 📤 TRANSACTIONAL OUTBOX
// -----------------------------------------------------------------------------

/*
 * Store the business change and outgoing event in one local transaction.
 *
 * Order Database Transaction
 *
 * ├── INSERT order
 * └── INSERT outbox_event
 *
 * Outbox Publisher
 *      │ reads unpublished events
 *      ▼
 * Message Broker
 *
 * The publisher marks events as sent after publication.
 * Consumers still need idempotency because delivery may happen more than once.
 */

// -----------------------------------------------------------------------------
// 🔁 SAGA PATTERN
// -----------------------------------------------------------------------------

/*
 * A saga coordinates a business process across local transactions.
 *
 * Create Order
 *      │
 * Reserve Inventory
 *      │
 * Charge Payment
 *      │
 * Confirm Order
 *
 * If payment fails:
 *
 * Release Inventory
 * Cancel Order
 *
 * These are compensating actions, not database rollback.
 * A compensation must be designed for every completed step that may need reversal.
 */

// -----------------------------------------------------------------------------
// 🧭 SERVICE DISCOVERY AND CONFIGURATION
// -----------------------------------------------------------------------------

/*
 * Instances move, restart, and scale.
 * Callers should not hardcode machine addresses.
 *
 * Service discovery maps a logical name to healthy instances.
 *
 * payment-service
 *      │
 *      ├────► 10.0.2.8
 *      └────► 10.0.3.4
 *
 * Configuration should be externalized and validated.
 * Secrets belong in a secret manager, never source control or plain config files.
 */

// -----------------------------------------------------------------------------
// 🔭 OPERATING MICROSERVICES
// -----------------------------------------------------------------------------

/*
 * Every service needs:
 *
 * Build and deployment automation
 * Health and readiness checks
 * Metrics, logs, and distributed traces
 * Ownership and on-call responsibility
 * Resource limits
 * Backward-compatible contracts
 * Security patches
 * Dependency inventory
 *
 * Ten services are not ten folders.
 * They are ten production systems to operate.
 */

// -----------------------------------------------------------------------------
// 🧪 TESTING STRATEGY
// -----------------------------------------------------------------------------

/*
 * Unit tests          → business rules inside a service
 * Component tests     → service plus its owned dependencies
 * Contract tests      → provider and consumer agree on messages
 * Integration tests   → selected real infrastructure boundaries
 * End-to-end tests    → a small set of critical user journeys
 * Production checks   → health, synthetic requests, and monitoring
 *
 * Relying only on slow end-to-end tests makes independent delivery difficult.
 */

// -----------------------------------------------------------------------------
// 🪜 SAFE MIGRATION: STRANGLER PATTERN
// -----------------------------------------------------------------------------

/*
 * Do not rewrite the whole monolith at once.
 *
 * Client
 *    │
 *    ▼
 * Router
 *    ├────► New Payment Service
 *    └────► Existing Monolith
 *
 * Extract one well-understood capability.
 * Redirect its traffic.
 * Measure it.
 * Remove the old path only after confidence is earned.
 */

// -----------------------------------------------------------------------------
// ⚠️ WHEN NOT TO USE MICROSERVICES
// -----------------------------------------------------------------------------

/*
 * Avoid premature microservices when:
 *
 * The product is still discovering its business model
 * One small team owns everything
 * Boundaries are unclear
 * Deployment automation is weak
 * Monitoring is weak
 * The expected scale is modest
 *
 * A modular monolith is often faster to build and safer to operate.
 * Extract services when independent change, scale, security, or ownership creates
 * a real benefit.
 */

// -----------------------------------------------------------------------------
// 🏦 BANKING EXAMPLE
// -----------------------------------------------------------------------------

/*
 * API Gateway
 *      │
 *      ├────► Identity Service ──► Identity Database
 *      ├────► Transfer Service ──► Transfer Database + Outbox
 *      └────► Reporting Service ─► Reporting Store
 *                         │
 * TransferCompleted Event│
 *                         ▼
 *                    Event Broker
 *                         ├────► Notification Service
 *                         ├────► Audit Service
 *                         └────► Analytics Service
 *
 * Each boundary exists for an explicit business and operational reason.
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * Ask:
 *
 * Does this service own a business outcome?
 * Can it own its data?
 * Must it deploy or scale independently?
 * Can a team operate it?
 * What happens when it is unavailable?
 *
 * Microservices are an organizational and operational architecture, not merely a
 * way to rearrange code.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 * Split an online shop into business capabilities and justify each boundary.
 *
 * TASK 2
 * Explain why two services should not share writable database tables.
 *
 * TASK 3
 * Draw the transactional outbox flow.
 *
 * TASK 4
 * Design saga compensations for order, inventory, and payment.
 *
 * TASK 5
 * List signals that a modular monolith should remain a monolith.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * ✔ A modular monolith is a strong default
 * ✔ Microservices align independent deployment with business capabilities
 * ✔ Service boundaries and data ownership matter more than service size
 * ✔ Network communication introduces latency and failure
 * ✔ The outbox solves reliable publication after a local transaction
 * ✔ Sagas coordinate multi-service workflows with compensations
 * ✔ Operational maturity is a prerequisite, not an optional extra
 *
 * BIG IDEA
 *
 * Use microservices when their independence is worth their complexity.
 */
