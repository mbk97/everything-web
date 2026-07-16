// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// PHASE 6 → DISTRIBUTED SYSTEMS
//
// Goal:
//
// Understand why modern companies no longer build one giant application,
// how independent services communicate,
// and why distributed systems are both powerful and difficult.
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Beginner thinks:
 *
 * "My application is one project."
 *
 * --------------------------------------------------
 *
 * Mid-level Engineer thinks:
 *
 * "I'll split my app into microservices."
 *
 * --------------------------------------------------
 *
 * Senior Engineer thinks:
 *
 * "How will those services communicate reliably?"
 *
 * --------------------------------------------------
 *
 * Architect thinks:
 *
 * "How do I build a system where hundreds of machines
 * behave like one application?"
 */

// -----------------------------------------------------------------------------
// 🌍 WHAT IS A DISTRIBUTED SYSTEM?
// -----------------------------------------------------------------------------

/*
 * Definition
 *
 * A Distributed System is a collection of multiple
 * independent computers working together
 * to appear as one system.
 */

/*
 * Example
 *
 * Instead of this
 *
 * React
 *      │
 * Node.js
 *      │
 * Database
 *
 * We now have...
 *
 * React
 *      │
 * API Gateway
 *      │
 * ├────────► User Service
 * ├────────► Payment Service
 * ├────────► Notification Service
 * ├────────► Report Service
 * └────────► Authentication Service
 *
 * Every service
 * runs on different machines.
 */

// -----------------------------------------------------------------------------
// 🤔 WHY NOT KEEP EVERYTHING TOGETHER?
// -----------------------------------------------------------------------------

/*
 * Imagine YouTube.
 *
 * Every second:
 *
 * Millions of uploads
 *
 * Millions of comments
 *
 * Millions of likes
 *
 * Millions of searches
 *
 * Millions of recommendations
 *
 * Would one server survive?
 *
 * No.
 */

/*
 * Modern companies split work.
 *
 * Search Team
 *
 * Recommendation Team
 *
 * Payments Team
 *
 * Authentication Team
 *
 * Notifications Team
 *
 * Every team owns
 * its own service.
 */

// -----------------------------------------------------------------------------
// 🏗️ WHAT MAKES A SYSTEM "DISTRIBUTED"?
// -----------------------------------------------------------------------------

/*
 * A distributed system has:
 *
 * ✔ Multiple servers
 *
 * ✔ Multiple services
 *
 * ✔ Independent deployments
 *
 * ✔ Independent databases
 *
 * ✔ Network communication
 *
 * ✔ Shared business goals
 */

// -----------------------------------------------------------------------------
// 🏦 BANKING EXAMPLE
// -----------------------------------------------------------------------------

/*
 * Customer transfers money.
 *
 * Does one service do everything?
 *
 * No.
 *
 * Transfer Service
 *
 * Customer Service
 *
 * Notification Service
 *
 * Fraud Detection
 *
 * Audit Service
 *
 * Ledger Service
 *
 * Core Banking
 *
 * All work together.
 */

// -----------------------------------------------------------------------------
// 🔁 HOW SERVICES COMMUNICATE
// -----------------------------------------------------------------------------

/*
 * Service A
 *      │
 *      ▼
 * Service B
 *
 * They communicate
 * over a network.
 *
 * Unlike function calls,
 * network calls can fail.
 */

/*
 * Example
 *
 * Payment Service
 *
 * requests
 *
 * User Service
 *
 * GET /users/1
 *
 * User Service responds
 *
 * JSON
 */

// -----------------------------------------------------------------------------
// 🌐 EVERYTHING IS NOW A NETWORK CALL
// -----------------------------------------------------------------------------

/*
 * Monolith
 *
 * PaymentService.getUser()
 *
 * Simple function call.
 */

/*
 * Distributed System
 *
 * HTTP Request
 *
 * Payment Service
 *
 *        │
 *        ▼
 *
 * User Service
 *
 * Request crosses
 * the network.
 *
 * This introduces:
 *
 * Latency
 *
 * Failures
 *
 * Timeouts
 */

// -----------------------------------------------------------------------------
// ⚠️ NETWORKS ARE UNRELIABLE
// -----------------------------------------------------------------------------

/*
 * This is the biggest lesson
 * beginners don't realize.
 *
 * Networks fail.
 *
 * Servers fail.
 *
 * Routers fail.
 *
 * Internet fails.
 *
 * Databases fail.
 *
 * Cloud regions fail.
 */

/*
 * Example
 *
 * React
 *      │
 *      ▼
 * API Gateway
 *      │
 *      ▼
 * Payment Service
 *      │
 *      ▼
 * Notification Service
 *
 * What if
 * Notification Service
 * is offline?
 *
 * Should payment fail?
 *
 * Usually...
 *
 * NO.
 *
 * Payment succeeds.
 *
 * Notification retries later.
 */

// -----------------------------------------------------------------------------
// 🧠 THE FALLACIES OF DISTRIBUTED COMPUTING
// -----------------------------------------------------------------------------

/*
 * Many beginners assume:
 *
 * "The network always works."
 *
 * Wrong.
 *
 * Architects know:
 *
 * The network is unreliable.
 */

/*
 * The famous fallacies:
 *
 * ❌ The network is reliable
 *
 * ❌ Latency is zero
 *
 * ❌ Bandwidth is infinite
 *
 * ❌ The network is secure
 *
 * ❌ Topology never changes
 *
 * ❌ Transport cost is zero
 *
 * ❌ There is one administrator
 *
 * ❌ The network is homogeneous
 *
 * Every one of these assumptions
 * is false.
 */

// -----------------------------------------------------------------------------
// ⏱️ LATENCY
// -----------------------------------------------------------------------------

/*
 * Local Function Call
 *
 * 0.000001 seconds
 */

/*
 * Network Request
 *
 * 50ms
 *
 * 100ms
 *
 * 500ms
 *
 * 2 seconds
 *
 * Maybe timeout.
 */

/*
 * One request
 * isn't expensive.
 *
 * 100 requests
 * become expensive.
 */

// -----------------------------------------------------------------------------
// 📦 COUPLING
// -----------------------------------------------------------------------------

/*
 * Bad Architecture
 *
 * Payment Service
 *
 * cannot work
 *
 * unless
 *
 * Notification Service
 *
 * is alive.
 */

/*
 * Better Architecture
 *
 * Payment completes.
 *
 * Notification
 * happens later.
 *
 * Loose Coupling.
 */

// -----------------------------------------------------------------------------
// 🔄 SYNCHRONOUS COMMUNICATION
// -----------------------------------------------------------------------------

/*
 * Synchronous means:
 *
 * Wait for response.
 *
 * React
 *      │
 *      ▼
 * Payment Service
 *      │
 * waits...
 *      ▼
 * User Service
 *      │
 *      ▼
 * Response
 *
 * Payment cannot continue
 * until User Service responds.
 */

// -----------------------------------------------------------------------------
// ⚡ ASYNCHRONOUS COMMUNICATION
// -----------------------------------------------------------------------------

/*
 * Asynchronous means:
 *
 * Don't wait.
 *
 * Payment completes.
 *
 * Event created.
 *
 * Notification processes later.
 *
 * Faster.
 *
 * More resilient.
 */

// -----------------------------------------------------------------------------
// 📨 EVENT-DRIVEN SYSTEMS
// -----------------------------------------------------------------------------

/*
 * Payment succeeds.
 *
 * Instead of calling
 * Notification directly...
 *
 * Payment publishes event.
 *
 * "PaymentCompleted"
 *
 * Other services listen.
 */

/*
 * Payment Service
 *      │
 *      ▼
 * Event Bus
 *      │
 *      ├────────► Notification
 *      ├────────► Audit
 *      ├────────► Analytics
 *      └────────► Fraud Detection
 *
 * Payment Service
 * doesn't know
 * who receives it.
 */

// -----------------------------------------------------------------------------
// 🧠 EVENTUAL CONSISTENCY
// -----------------------------------------------------------------------------

/*
 * Distributed systems
 * rarely update
 * everything instantly.
 */

/*
 * Payment succeeds.
 *
 * Notification arrives
 * 2 seconds later.
 *
 * Analytics updated
 * 5 seconds later.
 *
 * Audit updated
 * 3 seconds later.
 *
 * Eventually
 * everyone agrees.
 *
 * This is called
 * Eventual Consistency.
 */

// -----------------------------------------------------------------------------
// 🛡️ IDENTITY IN DISTRIBUTED SYSTEMS
// -----------------------------------------------------------------------------

/*
 * User logs in.
 *
 * Authentication Service
 *
 * creates JWT.
 *
 * Every service
 * trusts the token.
 *
 * User Service
 *
 * Payment Service
 *
 * Notification Service
 *
 * don't ask
 * Authentication Service
 * every request.
 */

// -----------------------------------------------------------------------------
// 🏦 COMPLETE BANKING FLOW
// -----------------------------------------------------------------------------

/*
 * Customer presses
 * "Transfer ₦50,000"
 *
 * React
 *      │
 *      ▼
 * API Gateway
 *      │
 *      ▼
 * Transfer Service
 *      │
 *      ├────────► User Service
 *      ├────────► Ledger Service
 *      ├────────► Fraud Detection
 *      ├────────► Core Banking
 *      └────────► Event Bus
 *                         │
 *                         ├────► Notification
 *                         ├────► Analytics
 *                         └────► Audit
 *
 * Notice...
 *
 * One click
 * triggered
 * many independent services.
 */

// -----------------------------------------------------------------------------
// ⚠️ DISTRIBUTED SYSTEM CHALLENGES
// -----------------------------------------------------------------------------

/*
 * Harder debugging
 *
 * Network failures
 *
 * Timeouts
 *
 * Data consistency
 *
 * Retry logic
 *
 * Service discovery
 *
 * Monitoring
 *
 * Version compatibility
 *
 * Security
 *
 * Observability
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * Beginners think:
 *
 * "How do I write this API?"
 *
 * Architects think:
 *
 * "What happens
 * if this service
 * is unavailable?"
 *
 * Every architecture decision
 * should assume
 * something
 * will eventually fail.
 */

// -----------------------------------------------------------------------------
// 🔥 REAL-WORLD EXAMPLES
// -----------------------------------------------------------------------------

/*
 * Uber
 *
 * Driver Service
 *
 * Rider Service
 *
 * Pricing Service
 *
 * Maps Service
 *
 * Payment Service
 *
 * Notification Service
 */

/*
 * Netflix
 *
 * Authentication
 *
 * Recommendations
 *
 * Streaming
 *
 * Search
 *
 * Billing
 *
 * Viewing History
 */

/*
 * Banking
 *
 * Customer Service
 *
 * Core Banking
 *
 * Ledger
 *
 * Cards
 *
 * Loans
 *
 * Fraud Detection
 *
 * Notifications
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 *
 * Explain why
 * a distributed system
 * is more difficult
 * than a monolith.
 */

/*
 * TASK 2
 *
 * Explain
 * the difference between
 * synchronous
 * and asynchronous communication.
 */

/*
 * TASK 3
 *
 * Why shouldn't
 * Payment Service
 * fail
 * because
 * Notification Service
 * is unavailable?
 */

/*
 * TASK 4
 *
 * Draw this architecture.
 *
 * React
 *      │
 * API Gateway
 *      │
 * Payment Service
 *      │
 * Event Bus
 *      │
 * Notification
 * Analytics
 * Audit
 */

/*
 * TASK 5
 *
 * Research:
 *
 * CAP Theorem
 *
 * This will be
 * our next lesson.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * If you understand this lesson,
 * you now know:
 *
 * ✔ What a Distributed System is
 *
 * ✔ Why companies use them
 *
 * ✔ Network communication
 *
 * ✔ Synchronous calls
 *
 * ✔ Asynchronous calls
 *
 * ✔ Event-driven architecture
 *
 * ✔ Eventual consistency
 *
 * ✔ Loose coupling
 *
 * ✔ Network failures
 *
 * ✔ Why distributed systems
 * are fundamentally harder
 * than monoliths.
 *
 * BIG PICTURE
 *
 * Browser
 *      │
 * React
 *      │
 * Load Balancer
 *      │
 * API Gateway
 *      │
 * Multiple Independent Services
 *      │
 * Event Bus
 *      │
 * Databases
 *
 * This architecture powers
 * modern banking,
 * Netflix,
 * Uber,
 * Amazon,
 * and virtually every
 * large-scale cloud platform.
 */