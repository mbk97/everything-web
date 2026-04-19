// =============================================================================
// 🌐 NODE.JS – COMPLETE INTERVIEW MASTER GUIDE
// =============================================================================

// -----------------------------------------------------------------------------
// ! NODE.JS CORE MENTAL MODEL
// -----------------------------------------------------------------------------
/*
 * DEFINITION:
 * Node.js is a runtime environment that executes JavaScript outside the browser.
 * It is built on Chrome’s V8 engine.
 *
 * CORE PRINCIPLE:
 * Non-blocking, Event-Driven Architecture.
 *
 * WHAT THIS MEANS:
 * - JavaScript runs on a single thread.
 * - I/O operations are asynchronous.
 * - The event loop coordinates execution.
 *
 * HOW IT WORKS:
 * 1. Execute synchronous code.
 * 2. Delegate async tasks to background (libuv).
 * 3. Event loop processes completed callbacks.
 *
 * BENEFIT:
 * - High concurrency.
 * - Efficient handling of thousands of connections.
 */


// -----------------------------------------------------------------------------
// ! NODE ARCHITECTURE (UNDER THE HOOD)
// -----------------------------------------------------------------------------
/*
 * MAIN COMPONENTS:
 * - V8 Engine → Executes JavaScript.
 * - libuv → Handles async I/O operations.
 * - Event Loop → Manages execution flow.
 * - Thread Pool → Executes heavy operations (FS, crypto, DNS).
 *
 * IMPORTANT CLARIFICATION:
 * Node is single-threaded for JavaScript execution,
 * but internally uses background threads for async tasks.
 */


// -----------------------------------------------------------------------------
// ! EVENT LOOP (CRITICAL INTERVIEW TOPIC)
// -----------------------------------------------------------------------------
/*
 * DEFINITION:
 * The Event Loop manages asynchronous operations in Node.js.
 *
 * EXECUTION ORDER:
 * 1. Synchronous code
 * 2. Microtasks (Promises, process.nextTick)
 * 3. Macrotasks (setTimeout, setImmediate, I/O)
 *
 * EVENT LOOP PHASES:
 * 1. Timers
 * 2. Pending callbacks
 * 3. Idle/prepare
 * 4. Poll (I/O)
 * 5. Check (setImmediate)
 * 6. Close callbacks
 *
 * WHY IMPORTANT:
 * - Explains concurrency model.
 * - Key topic for mid/senior interviews.
 */


// -----------------------------------------------------------------------------
// ! BLOCKING VS NON-BLOCKING
// -----------------------------------------------------------------------------
/*
 * BLOCKING:
 * - Execution waits until operation completes.
 * - Example: fs.readFileSync()
 *
 * NON-BLOCKING:
 * - Execution continues while operation runs in background.
 * - Example: fs.readFile()
 *
 * NODE’S ADVANTAGE:
 * - Handles I/O efficiently.
 * - Prevents server freeze under load.
 */


// -----------------------------------------------------------------------------
// ! CALLBACKS, PROMISES, ASYNC/AWAIT
// -----------------------------------------------------------------------------
/*
 * CALLBACK:
 * - Function passed as argument.
 * - Can lead to callback hell.
 *
 * PROMISE:
 * - Represents future success or failure.
 * - Enables chaining.
 *
 * ASYNC/AWAIT:
 * - Cleaner syntax over Promises.
 * - Makes async code readable.
 *
 * BEST PRACTICE:
 * - Use async/await.
 * - Always wrap with try/catch.
 */


// -----------------------------------------------------------------------------
// ! STREAMS
// -----------------------------------------------------------------------------
/*
 * DEFINITION:
 * Streams process data in chunks instead of loading full data into memory.
 *
 * TYPES:
 * - Readable
 * - Writable
 * - Duplex
 * - Transform
 *
 * WHY IMPORTANT:
 * - Memory efficient.
 * - Ideal for large file handling.
 */


// =============================================================================
// 🚀 EXPRESS & API ARCHITECTURE
// =============================================================================

// -----------------------------------------------------------------------------
// ! EXPRESS REQUEST LIFECYCLE
// -----------------------------------------------------------------------------
/*
 * FLOW:
 * Client → Middleware → Route → Controller → Service → Database → Response
 *
 * MIDDLEWARE USE CASES:
 * - Authentication
 * - Logging
 * - Validation
 * - Error handling
 */


// -----------------------------------------------------------------------------
// ! PRODUCTION PROJECT STRUCTURE
// -----------------------------------------------------------------------------
/*
 * STRUCTURE:
 * - routes/
 * - controllers/
 * - services/
 * - middlewares/
 * - models/
 * - config/
 * - utils/
 *
 * PRINCIPLE:
 * - Separation of concerns.
 * - Keep business logic out of routes.
 */


// -----------------------------------------------------------------------------
// ! REST API BEST PRACTICES
// -----------------------------------------------------------------------------
/*
 * REST PRINCIPLES:
 * - Stateless.
 * - Resource-based URLs.
 * - Proper HTTP methods.
 *
 * BEST PRACTICES:
 * - Use correct status codes.
 * - Implement pagination.
 * - Version your API.
 * - Centralize error handling.
 */


// =============================================================================
// 🔐 SECURITY & AUTHENTICATION
// =============================================================================

// -----------------------------------------------------------------------------
// ! PASSWORD SECURITY
// -----------------------------------------------------------------------------
/*
 * RULE:
 * - Never store plain text passwords.
 *
 * USE:
 * - bcrypt for hashing.
 * - Automatic salting.
 */


// -----------------------------------------------------------------------------
// ! JWT STRUCTURE
// -----------------------------------------------------------------------------
/*
 * FORMAT:
 * Header.Payload.Signature
 *
 * CHARACTERISTICS:
 * - Digitally signed.
 * - Stateless.
 *
 * BEST PRACTICES:
 * - Set expiration time.
 * - Store secret securely.
 * - Validate in protected routes.
 *
 * TRADE-OFF: 
 * - Scalable.
 * - Hard to revoke immediately.
 */


// -----------------------------------------------------------------------------
// ! COMMON SECURITY RISKS
// -----------------------------------------------------------------------------
/*
 * SQL INJECTION:
 * - Use parameterized queries or ORM.
 *
 * XSS:
 * - Sanitize inputs.
 *
 * CSRF:
 * - Use tokens or same-site cookies.
 *
 * RATE LIMITING:
 * - Prevent brute-force attacks.
 */


// =============================================================================
// ⚙️ PERFORMANCE & SCALING
// =============================================================================

// -----------------------------------------------------------------------------
// ! CLUSTERING
// -----------------------------------------------------------------------------
/*
 * PURPOSE:
 * - Utilize multiple CPU cores.
 *
 * WHY:
 * - Node runs on single JS thread.
 * - Clustering improves throughput.
 */


// -----------------------------------------------------------------------------
// ! SCALING STRATEGY
// -----------------------------------------------------------------------------
/*
 * VERTICAL SCALING:
 * - Increase server resources.
 *
 * HORIZONTAL SCALING:
 * - Add more server instances.
 *
 * TOOLS:
 * - Load balancer.
 * - PM2.
 * - Docker.
 * - Kubernetes.
 */


// -----------------------------------------------------------------------------
// ! CACHING
// -----------------------------------------------------------------------------
/*
 * PURPOSE:
 * - Reduce database load.
 * - Improve response time.
 *
 * TOOL:
 * - Redis.
 *
 * STRATEGY:
 * - Cache frequently accessed data.
 * - Use TTL (expiration).
 */


// =============================================================================
// 🗄 DATABASE FUNDAMENTALS
// =============================================================================

// -----------------------------------------------------------------------------
// ! TRANSACTIONS
// -----------------------------------------------------------------------------
/*
 * PURPOSE:
 * - Ensure atomic operations.
 *
 * ACID:
 * - Atomicity
 * - Consistency
 * - Isolation
 * - Durability
 */


// =============================================================================
// 🧠 DEBUGGING & PRODUCTION ENGINEERING
// =============================================================================

// -----------------------------------------------------------------------------
// ! MEMORY LEAKS
// -----------------------------------------------------------------------------
/*
 * COMMON CAUSES:
 * - Unremoved event listeners.
 * - Global variables.
 * - Large closures.
 *
 * SOLUTION:
 * - Profiling tools.
 * - Heap monitoring.
 */


// -----------------------------------------------------------------------------
// ! CRASH HANDLING
// -----------------------------------------------------------------------------
/*
 * HANDLE:
 * - uncaughtException
 * - unhandledRejection
 *
 * USE:
 * - Process managers (PM2).
 * - Graceful shutdown.
 */


// =============================================================================
// 🚀 SYSTEM DESIGN THINKING
// =============================================================================

// -----------------------------------------------------------------------------
// ! MONOLITH VS MICROSERVICES
// -----------------------------------------------------------------------------
/*
 * MONOLITH:
 * - Single codebase.
 * - Simpler deployment.
 *
 * MICROSERVICES:
 * - Independent services.
 * - Better scalability.
 * - More operational complexity.
 */


// -----------------------------------------------------------------------------
// ! EVENT-DRIVEN ARCHITECTURE
// -----------------------------------------------------------------------------
/*
 * CONCEPT:
 * - Services communicate via events.
 *
 * BENEFITS:
 * - Loose coupling.
 * - Scalability.
 */


// =============================================================================
// 🎯 SENIOR ENGINEERING MINDSET
// =============================================================================
/*
 * Always discuss:
 * - Trade-offs.
 * - Scalability.
 * - Security.
 * - Maintainability.
 *
 * Example:
 * "JWT improves scalability but complicates token revocation."
 */


// =============================================================================
// 🏆 FINAL MASTER SUMMARY
// =============================================================================
/*
 * Node.js:
 * - Asynchronous, event-driven runtime.
 *
 * Express:
 * - Structured middleware-based API framework.
 *
 * Security:
 * - Hash passwords.
 * - Validate input.
 * - Protect routes.
 *
 * Scaling:
 * - Cluster processes.
 * - Use caching.
 * - Deploy behind load balancer.
 *
 * Strong backend engineers:
 * - Understand internals deeply.
 * - Communicate trade-offs clearly.
 * - Design for production scale.
 */


// =============================================================================
// 🌐 NODE.JS – COMPLETE INTERVIEW MASTER GUIDE
// =============================================================================


// -----------------------------------------------------------------------------
// ! NODE.JS CORE MENTAL MODEL
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * Node.js is optimized for I/O-heavy, high-concurrency applications.
 * It is not designed for CPU-heavy workloads.
 * Understanding this shows architectural maturity.
 *
 * DEFINITION:
 * Node.js is a single-threaded, event-driven runtime built on V8.
 *
 * WHAT TO SAY IN THE INTERVIEW:
 * "Node.js runs JavaScript on a single thread, but it handles
 * concurrency using non-blocking I/O. The event loop delegates
 * heavy I/O operations to libuv and processes callbacks efficiently.
 * That’s why it scales well for APIs but not CPU-intensive tasks."
 */


// -----------------------------------------------------------------------------
// ! EVENT LOOP (CRITICAL TOPIC)
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * This is one of the most important mid-to-senior Node questions.
 *
 * EVENT LOOP PHASES:
 * 1. Timers
 * 2. Pending callbacks
 * 3. Idle/prepare
 * 4. Poll (I/O)
 * 5. Check (setImmediate)
 * 6. Close callbacks
 *
 * MICRO VS MACROTASKS:
 * - Microtasks → Promises, process.nextTick
 * - Macrotasks → setTimeout, setImmediate
 *
 * WHAT TO SAY:
 * "Node executes synchronous code first.
 * Then microtasks like Promises.
 * Then it moves through the event loop phases.
 * Understanding this helps prevent blocking code
 * that can freeze the server under load."
 */


// -----------------------------------------------------------------------------
// ! WHAT HAPPENS WHEN A REQUEST HITS YOUR SERVER
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * This tests your system awareness beyond coding.
 *
 * FLOW:
 * DNS → TCP → TLS → Express middleware → Controller → Service → DB → Response
 *
 * WHAT TO SAY:
 * "When a request hits my server, it goes through DNS resolution,
 * establishes a TCP and TLS connection, reaches Express middleware,
 * passes authentication and validation layers,
 * hits the controller and service layer,
 * performs database operations,
 * and returns a structured response."
 *
 * This shows architecture-level thinking.
 */


// -----------------------------------------------------------------------------
// ! IDEMPOTENT PAYMENT PROCESSING
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * Critical for fintech. Duplicate transactions must never happen.
 *
 * IMPLEMENTATION:
 * - Client sends Idempotency-Key header.
 * - Store key + response.
 * - Enforce unique constraint.
 *
 * WHAT TO SAY:
 * "To prevent duplicate payments, I’d implement idempotency keys.
 * Each transaction request carries a unique key stored in the database.
 * If the same key is reused, the backend returns the stored result
 * instead of reprocessing the transaction."
 */


// -----------------------------------------------------------------------------
// ! RACE CONDITIONS
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * Race conditions can corrupt balances.
 *
 * SOLUTIONS:
 * - Database transactions
 * - Row-level locking
 * - Atomic operations
 *
 * WHAT TO SAY:
 * "To prevent race conditions, especially in financial systems,
 * I rely on database-level atomic transactions and row locking.
 * Business logic alone is not enough."
 */


// -----------------------------------------------------------------------------
// ! REPLAY ATTACK PREVENTION
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * Replay attacks reuse valid requests maliciously.
 *
 * DEFENSE:
 * - HTTPS
 * - Nonce
 * - Timestamp validation
 * - Short-lived tokens
 *
 * WHAT TO SAY:
 * "To prevent replay attacks, I’d enforce HTTPS,
 * use short-lived tokens,
 * validate timestamps,
 * and ensure payment endpoints use idempotency keys."
 */


// -----------------------------------------------------------------------------
// ! AUTHENTICATION VS AUTHORIZATION VS ACCOUNTING
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * Fraud-heavy systems require all three.
 *
 * AAA:
 * - Authentication → Who you are
 * - Authorization → What you can do
 * - Accounting → What you did
 *
 * WHAT TO SAY:
 * "Authentication verifies identity.
 * Authorization checks permissions.
 * Accounting logs actions for auditing.
 * In fintech systems, all three are essential."
 */


// -----------------------------------------------------------------------------
// ! PASSWORD RESET FLOW
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * Password reset endpoints are high-risk attack vectors.
 *
 * SAFE FLOW:
 * - Generate crypto.randomBytes token
 * - Hash before storing
 * - Expire token
 * - Invalidate after use
 *
 * WHAT TO SAY:
 * "I generate a secure random token,
 * hash it before storing in the database,
 * set a short expiration,
 * and invalidate it after successful use."
 */


// -----------------------------------------------------------------------------
// ! ERROR HANDLING IN PRODUCTION
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * Never expose stack traces.
 *
 * STRATEGY:
 * - Centralized error middleware
 * - Structured logging
 * - Sanitized client response
 *
 * WHAT TO SAY:
 * "In production, I log detailed errors internally
 * but return sanitized messages to users.
 * I centralize error handling middleware
 * to ensure consistency."
 */


// -----------------------------------------------------------------------------
// ! PRIVILEGE ESCALATION PREVENTION
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * Most common backend vulnerability.
 *
 * SOLUTION:
 * - Always scope queries by authenticated user.
 *
 * WHAT TO SAY:
 * "I never trust client-provided IDs.
 * I always scope queries using req.user.id
 * to prevent horizontal privilege escalation."
 */


// -----------------------------------------------------------------------------
// ! SQL VS NOSQL (FINTECH CONTEXT)
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * Financial systems require ACID compliance. Atomicity, Consistency, Isolation, and Durability—that guarantee reliable processing of transactions, ensuring data integrity even during errors or power failures.
 *
 * WHAT TO SAY:
 * "For financial transactions, I prefer SQL databases
 * because of ACID guarantees.
 * NoSQL is useful for flexible logging or analytics."
 */


// -----------------------------------------------------------------------------
// ! RATE LIMITING
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * Prevent brute force and API abuse.
 *
 * WHAT TO SAY:
 * "I implement rate limiting on sensitive endpoints
 * like login and password reset,
 * often using Redis for distributed systems."
 */


// -----------------------------------------------------------------------------
// ! SCALING STRATEGY
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * Horizontal scaling is sustainable.
 *
 * WHAT TO SAY:
 * "To scale Node applications, I’d deploy multiple instances
 * behind a load balancer.
 * The app must remain stateless to support this."
 */


// -----------------------------------------------------------------------------
// ! FRAUD DETECTION ARCHITECTURE
// -----------------------------------------------------------------------------
/*
 * EXECUTIVE NOTE:
 * Fraud detection is layered.
 *
 * DESIGN:
 * - Data collection
 * - Rule engine
 * - Risk scoring
 * - Step-up authentication
 *
 * WHAT TO SAY:
 * "I design fraud systems in layers —
 * logging behavior,
 * applying anomaly rules,
 * assigning risk scores,
 * and triggering MFA when risk is high."
 */


// =============================================================================
// 🎯 HOW TO SOUND SENIOR
// =============================================================================
/*
 * Always mention:
 * - Trade-offs
 * - Security implications
 * - Scalability
 * - Maintainability
 *
 * Example:
 * "JWT improves scalability but complicates revocation,
 * so I combine short expiration with refresh rotation."
 */
