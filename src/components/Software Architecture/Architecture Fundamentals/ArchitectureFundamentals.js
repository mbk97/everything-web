// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE-SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// PHASE 1 → ARCHITECTURE FUNDAMENTALS
//
// Goal:
//
// Learn what software architecture actually is, how architects turn business
// requirements into system boundaries, and why every architecture is a tradeoff.
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Beginner thinks:
 *
 * "Which framework should I use?"
 *
 * Mid-level Engineer thinks:
 *
 * "How should I organize the code?"
 *
 * Senior Engineer thinks:
 *
 * "What will make this system difficult to change or operate?"
 *
 * Architect thinks:
 *
 * "Which decisions are expensive to reverse, and what tradeoffs do they create?"
 */

// -----------------------------------------------------------------------------
// 🏗️ WHAT IS SOFTWARE ARCHITECTURE?
// -----------------------------------------------------------------------------

/*
 * Software architecture is the high-level structure of a system.
 *
 * It describes:
 *
 * ✔ The major components
 * ✔ The responsibility of each component
 * ✔ How components communicate
 * ✔ Where data lives
 * ✔ How the system is deployed
 * ✔ The rules and constraints that guide change
 *
 * Example:
 *
 * Browser
 *    │
 *    ▼
 * API Server
 *    │
 *    ▼
 * Database
 *
 * This is already an architecture, even if it is small.
 */

// -----------------------------------------------------------------------------
// 🧩 ARCHITECTURE VS DETAILED DESIGN
// -----------------------------------------------------------------------------

/*
 * Architecture asks:
 *
 * "Should payments be a separate service?"
 * "Should communication be synchronous or asynchronous?"
 * "Which database owns transaction data?"
 *
 * Detailed design asks:
 *
 * "Which class validates a transfer?"
 * "What does this function return?"
 * "Which design pattern fits this module?"
 *
 * The boundary is not perfect.
 *
 * A decision becomes architectural when changing it later would be expensive,
 * risky, or affect many parts of the system.
 */

// -----------------------------------------------------------------------------
// 🎯 START WITH REQUIREMENTS, NOT TECHNOLOGY
// -----------------------------------------------------------------------------

/*
 * FUNCTIONAL REQUIREMENTS describe what the system must do.
 *
 * Banking example:
 *
 * ✔ A customer can sign in
 * ✔ A customer can view a balance
 * ✔ A customer can transfer money
 * ✔ The system sends a transfer notification
 *
 * NON-FUNCTIONAL REQUIREMENTS describe how well it must work.
 *
 * ✔ 99.99% availability
 * ✔ A balance request completes within 300 ms
 * ✔ A transfer is never applied twice
 * ✔ Every money movement is auditable
 * ✔ Customer data is encrypted
 *
 * Architecture is driven mainly by the difficult non-functional requirements.
 */

// -----------------------------------------------------------------------------
// 📏 CONSTRAINTS
// -----------------------------------------------------------------------------

/*
 * A constraint limits the available choices.
 *
 * Examples:
 *
 * Budget
 * Team size and experience
 * Delivery deadline
 * Existing systems
 * Government regulation
 * Required cloud provider
 * Data residency rules
 *
 * A design can be technically impressive and still be wrong if it ignores
 * the organization's real constraints.
 */

// -----------------------------------------------------------------------------
// 🧱 COMPONENTS AND RESPONSIBILITIES
// -----------------------------------------------------------------------------

/*
 * A component should have a clear responsibility.
 *
 * Authentication Service → verifies identity
 * Transfer Service       → moves money
 * Ledger                 → records money movement
 * Notification Service   → sends email, SMS, or push messages
 *
 * A useful test is:
 *
 * "Can I explain this component without using the word AND many times?"
 *
 * "It authenticates users AND sends emails AND creates reports"
 *
 * usually means the component owns too many responsibilities.
 */

// -----------------------------------------------------------------------------
// 🔗 COUPLING AND COHESION
// -----------------------------------------------------------------------------

/*
 * COHESION asks:
 *
 * "Do the things inside this component belong together?"
 *
 * COUPLING asks:
 *
 * "How strongly does this component depend on other components?"
 *
 * Healthy architecture aims for:
 *
 * ✔ High cohesion
 * ✔ Low coupling
 *
 * Low coupling does not mean zero communication.
 * It means a change in one component should not unnecessarily break many others.
 */

// -----------------------------------------------------------------------------
// 🧭 SYSTEM BOUNDARIES
// -----------------------------------------------------------------------------

/*
 * Boundaries decide:
 *
 * Who owns a business capability?
 * Who owns the data?
 * Which operations are allowed?
 * Which details remain private?
 *
 * Good boundary:
 *
 * Transfer Service owns transfer rules and exposes a small contract.
 *
 * Weak boundary:
 *
 * Every service reads and updates the Transfer Service database directly.
 *
 * If everyone can reach inside a component, the boundary is only a drawing.
 */

// -----------------------------------------------------------------------------
// 🏛️ A SIMPLE LAYERED ARCHITECTURE
// -----------------------------------------------------------------------------

/*
 * Client Layer
 *      │
 *      ▼
 * API / Presentation Layer
 *      │
 *      ▼
 * Business Logic Layer
 *      │
 *      ▼
 * Data Access Layer
 *      │
 *      ▼
 * Database
 *
 * Each layer depends on a layer below it.
 *
 * Benefits:
 *
 * ✔ Easy to understand
 * ✔ Good starting point for many applications
 * ✔ Responsibilities are separated
 *
 * Risks:
 *
 * ❌ Layers can become very large
 * ❌ Simple changes may travel through every layer
 * ❌ Business boundaries may remain unclear
 */

// -----------------------------------------------------------------------------
// ⚖️ QUALITY ATTRIBUTES
// -----------------------------------------------------------------------------

/*
 * Quality attributes are the properties used to judge an architecture.
 *
 * Availability   → Is the system reachable?
 * Reliability    → Does it behave correctly over time?
 * Scalability    → Can it handle growth?
 * Performance    → How quickly does it respond?
 * Security       → Can data and operations be protected?
 * Maintainability→ Can engineers change it safely?
 * Observability  → Can operators understand its behavior?
 * Cost           → Can the organization afford it?
 *
 * These attributes compete.
 *
 * More replicas can improve availability but increase cost.
 * More synchronous checks can improve consistency but increase latency.
 * More services can improve team independence but increase operational work.
 */

// -----------------------------------------------------------------------------
// ⚠️ THERE IS NO PERFECT ARCHITECTURE
// -----------------------------------------------------------------------------

/*
 * Every important decision trades one benefit for another.
 *
 * SQL database
 *
 * ✔ Transactions and strong consistency
 * ❌ Horizontal scaling can be more difficult
 *
 * Microservices
 *
 * ✔ Independent ownership and deployment
 * ❌ Network failures and operational complexity
 *
 * Cache
 *
 * ✔ Faster reads
 * ❌ Stale data and invalidation complexity
 *
 * The architect's job is not to remove every disadvantage.
 * It is to choose disadvantages the business can safely accept.
 */

// -----------------------------------------------------------------------------
// 📝 ARCHITECTURE DECISION RECORDS
// -----------------------------------------------------------------------------

/*
 * Important decisions should be written down.
 *
 * A small Architecture Decision Record (ADR) contains:
 *
 * Title       → Use PostgreSQL for the ledger
 * Context     → Transfers require atomic updates and an audit trail
 * Decision    → Store ledger entries in PostgreSQL
 * Alternatives→ MongoDB, DynamoDB
 * Consequences→ Strong transactions; careful scaling is required
 * Status      → Accepted
 *
 * An ADR preserves why a choice was made after the people and context change.
 */

// -----------------------------------------------------------------------------
// 🏦 PUTTING IT TOGETHER
// -----------------------------------------------------------------------------

/*
 * Requirement:
 *
 * "A customer transfers money and receives a notification."
 *
 * Initial architecture:
 *
 * Mobile App
 *     │
 *     ▼
 * API Gateway
 *     │
 *     ▼
 * Transfer Service ─────► Ledger Database
 *     │
 *     ▼
 * Message Queue ────────► Notification Worker
 *
 * Decisions:
 *
 * ✔ The ledger uses strong transactions because money must be correct
 * ✔ Notification is asynchronous because the transfer need not wait for SMS
 * ✔ The gateway provides one controlled entry point
 * ✔ Components expose contracts instead of sharing internal code or tables
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * Do not begin with:
 *
 * "We should use Kubernetes and microservices."
 *
 * Begin with:
 *
 * "What problem are we solving?"
 * "What can fail?"
 * "What must never be wrong?"
 * "What scale do we actually expect?"
 * "Which decision will be hardest to reverse?"
 *
 * Architecture is reasoned decision-making under constraints.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 *
 * Write four functional and four non-functional requirements for an online shop.
 *
 * TASK 2
 *
 * Draw a three-layer architecture and label every responsibility.
 *
 * TASK 3
 *
 * Find one highly coupled dependency in an application you know.
 * Explain how you would reduce that coupling.
 *
 * TASK 4
 *
 * Write an ADR choosing SQL or NoSQL for a bank ledger.
 *
 * TASK 5
 *
 * Explain the tradeoff between a modular monolith and microservices.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * If you understand this lesson, you now know:
 *
 * ✔ Architecture describes components, boundaries, communication, and data
 * ✔ Requirements and constraints come before technology
 * ✔ Functional and non-functional requirements are different
 * ✔ High cohesion and low coupling make change safer
 * ✔ Quality attributes guide architecture decisions
 * ✔ Every architecture contains tradeoffs
 * ✔ ADRs preserve the reasons behind important choices
 *
 * BIG IDEA
 *
 * Architecture is not a collection of fashionable tools.
 * It is the set of important decisions that lets a system meet real goals.
 */
