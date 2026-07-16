// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// PHASE 7 → MESSAGE QUEUES
//
// Goal:
//
// Learn why modern systems don't process everything immediately,
// how services communicate asynchronously,
// and why Message Queues are one of the most important building
// blocks of scalable distributed systems.
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Beginner thinks:
 *
 * "The user clicked the button,
 * so my server should do everything immediately."
 *
 * --------------------------------------------------
 *
 * Mid-level Engineer thinks:
 *
 * "I'll move some work into background jobs."
 *
 * --------------------------------------------------
 *
 * Senior Engineer thinks:
 *
 * "Does the user really need to wait
 * for all this work to finish?"
 *
 * --------------------------------------------------
 *
 * Architect thinks:
 *
 * "Can I separate the user's request
 * from background processing?"
 */

// -----------------------------------------------------------------------------
// 🌍 THE PROBLEM
// -----------------------------------------------------------------------------

/*
 * Imagine you're building an e-commerce application.
 *
 * User clicks:
 *
 * "Place Order"
 *
 * What happens?
 *
 * Save Order
 *
 * Reduce Inventory
 *
 * Charge Card
 *
 * Send Confirmation Email
 *
 * Generate Invoice
 *
 * Notify Warehouse
 *
 * Update Analytics
 *
 * Send SMS
 *
 * Log Activity
 */

/*
 * If everything happens
 * before responding...
 *
 * User clicks button
 *
 * Wait...
 *
 * Wait...
 *
 * Wait...
 *
 * Wait...
 *
 * Success
 *
 * Response Time
 *
 * 8 seconds.
 *
 * Terrible user experience.
 */

// -----------------------------------------------------------------------------
// ⚡ THE SOLUTION
// -----------------------------------------------------------------------------

/*
 * Only perform
 * what is immediately required.
 *
 * User clicks
 *
 * Place Order
 *
 * Save Order
 *
 * Return Success
 *
 * Everything else
 * happens later.
 */

/*
 * Browser
 *      │
 *      ▼
 * API Gateway
 *      │
 *      ▼
 * Order Service
 *      │
 *      ▼
 * Save Order
 *      │
 *      ▼
 * Queue Message
 *      │
 *      ▼
 * Return Success
 *
 * User doesn't wait.
 */

// -----------------------------------------------------------------------------
// 📦 WHAT IS A MESSAGE QUEUE?
// -----------------------------------------------------------------------------

/*
 * Definition
 *
 * A Message Queue
 * is a temporary storage area
 * where messages wait
 * until another service
 * processes them.
 */

/*
 * Think of a queue
 * at a bank.
 *
 * Customer
 *      │
 *      ▼
 * Take Ticket
 *      │
 *      ▼
 * Waiting Line
 *      │
 *      ▼
 * Cashier
 *
 * Customers don't fight
 * over one cashier.
 *
 * They wait
 * in order.
 *
 * A Message Queue
 * works the same way.
 */

// -----------------------------------------------------------------------------
// 📮 MESSAGE QUEUE ARCHITECTURE
// -----------------------------------------------------------------------------

/*
 * React
 *      │
 *      ▼
 * API Gateway
 *      │
 *      ▼
 * Order Service
 *      │
 *      ▼
 * Message Queue
 *      │
 *      ▼
 * Email Worker
 */

/*
 * Order Service
 * finishes quickly.
 *
 * Email Worker
 * sends emails later.
 */

// -----------------------------------------------------------------------------
// 📨 WHAT IS A MESSAGE?
// -----------------------------------------------------------------------------

/*
 * A message is simply data.
 
 * Example
 *
 * {
 *   orderId: 123,
 *   customerId: 45,
 *   email: "john@email.com",
 *   event: "OrderCreated"
 * }
 *
 * That's all.
 *
 * Just information
 * waiting
 * to be processed.
 */

// -----------------------------------------------------------------------------
// 👷 PRODUCER & CONSUMER
// -----------------------------------------------------------------------------

/*
 * Every queue
 * has two sides.
 *
 * Producer
 *
 * Creates messages.
 *
 * Consumer
 *
 * Processes messages.
 */

/*
 * Example
 *
 * Order Service
 *
 * produces message.
 *
 * Queue
 *
 * stores message.
 *
 * Email Service
 *
 * consumes message.
 */

/*
 * Visual
 *
 * Producer
 *      │
 *      ▼
 * Message Queue
 *      │
 *      ▼
 * Consumer
 */

// -----------------------------------------------------------------------------
// 🏦 BANKING EXAMPLE
// -----------------------------------------------------------------------------

/*
 * Customer transfers
 * ₦50,000.
 *
 * Should customer wait
 * while:
 *
 * Email is sent?
 *
 * SMS is sent?
 *
 * Audit updated?
 *
 * Analytics updated?
 *
 * Fraud system notified?
 *
 * No.
 */

/*
 * Better Architecture
 *
 * Transfer succeeds.
 *
 * TransferCompleted Event
 *
 * published.
 *
 * Queue receives message.
 *
 * Background workers
 * perform:
 *
 * Email
 *
 * SMS
 *
 * Analytics
 *
 * Audit
 *
 * Notifications
 */

// -----------------------------------------------------------------------------
// ⚡ SYNCHRONOUS VS ASYNCHRONOUS
// -----------------------------------------------------------------------------

/*
 * Synchronous
 *
 * Browser
 *      │
 *      ▼
 * Server
 *      │
 * waits...
 *      ▼
 * Email
 *      │
 * waits...
 *      ▼
 * SMS
 *      │
 * waits...
 *      ▼
 * Success
 *
 * Slow.
 */

/*
 * Asynchronous
 *
 * Browser
 *      │
 *      ▼
 * Server
 *      │
 * Save Order
 *      │
 * Queue Message
 *      │
 * Success
 *
 * Email later.
 *
 * SMS later.
 *
 * Analytics later.
 *
 * Much faster.
 */

// -----------------------------------------------------------------------------
// 🔥 WHY QUEUES IMPROVE SCALABILITY
// -----------------------------------------------------------------------------

/*
 * Imagine Black Friday.
 *
 * One million orders
 * arrive
 * in five minutes.
 */

/*
 * Without Queue
 *
 * Email Service
 * crashes.
 */

/*
 * With Queue
 *
 * One million messages
 * wait safely.
 *
 * Workers
 * process them
 * gradually.
 *
 * Nothing is lost.
 */

// -----------------------------------------------------------------------------
// 📈 MULTIPLE WORKERS
// -----------------------------------------------------------------------------

/*
 * Queue
 *      │
 *      ├────────► Worker 1
 *      ├────────► Worker 2
 *      ├────────► Worker 3
 *      ├────────► Worker 4
 *      └────────► Worker 5
 *
 * Need more speed?
 *
 * Add more workers.
 *
 * This is Horizontal Scaling.
 */

// -----------------------------------------------------------------------------
// 🛡️ RETRIES
// -----------------------------------------------------------------------------

/*
 * Suppose Email Service
 * crashes.
 */

/*
 * Queue
 * still contains
 * message.
 *
 * Worker fails.
 *
 * Queue retries later.
 */

/*
 * User
 * doesn't lose
 * the order.
 *
 * Email
 * eventually succeeds.
 */

// -----------------------------------------------------------------------------
// ☠️ DEAD LETTER QUEUE (DLQ)
// -----------------------------------------------------------------------------

/*
 * What if
 * processing fails
 * forever?
 */

/*
 * Example
 *
 * Invalid email address.
 *
 * Worker retries:
 *
 * Retry 1
 *
 * Retry 2
 *
 * Retry 3
 *
 * Still fails.
 */

/*
 * Queue moves message
 * into
 *
 * Dead Letter Queue
 *
 * Developers investigate later.
 *
 * Failed messages
 * don't block
 * the entire queue.
 */

// -----------------------------------------------------------------------------
// 📦 FIFO VS STANDARD QUEUES
// -----------------------------------------------------------------------------

/*
 * FIFO
 *
 * First In
 * First Out
 *
 * Order preserved.
 *
 * Message 1
 *
 * Message 2
 *
 * Message 3
 *
 * processed exactly
 * in that order.
 */

/*
 * Banking often
 * prefers FIFO.
 *
 * Because order matters.
 */

/*
 * Standard Queue
 *
 * Highest throughput.
 *
 * Order
 * may not
 * always be guaranteed.
 *
 * Better
 * for analytics
 * and logging.
 */

// -----------------------------------------------------------------------------
// 🧠 IDEMPOTENCY
// -----------------------------------------------------------------------------

/*
 * Distributed systems
 * retry messages.
 *
 * Sometimes
 * the same message
 * arrives twice.
 */

/*
 * Example
 *
 * TransferCompleted
 *
 * processed twice.
 *
 * Customer receives
 * two deposits.
 *
 * Disaster.
 */

/*
 * Good systems
 * are idempotent.
 *
 * Meaning:
 *
 * Processing
 * the same message
 * multiple times
 * produces
 * the same result.
 */

// -----------------------------------------------------------------------------
// 🌍 COMMON MESSAGE QUEUES
// -----------------------------------------------------------------------------

/*
 * Enterprise tools
 *
 * RabbitMQ
 *
 * Apache Kafka
 *
 * Amazon SQS
 *
 * Azure Service Bus
 *
 * Google Pub/Sub
 *
 * Redis Streams
 *
 * NATS
 */

// -----------------------------------------------------------------------------
// 🏦 COMPLETE BANKING FLOW
// -----------------------------------------------------------------------------

/*
 * Customer
 * transfers ₦100,000
 *
 * React
 *      │
 *      ▼
 * API Gateway
 *      │
 *      ▼
 * Transfer Service
 *      │
 * Debit Account
 *      │
 * Credit Account
 *      │
 * Publish Event
 *      │
 *      ▼
 * Message Queue
 *      │
 *      ├────────► Email Worker
 *      ├────────► SMS Worker
 *      ├────────► Audit Worker
 *      ├────────► Analytics Worker
 *      └────────► Fraud Worker
 *
 * Customer
 * receives success
 * immediately.
 */

// -----------------------------------------------------------------------------
// 🧠 MESSAGE QUEUE VS API CALL
// -----------------------------------------------------------------------------

/*
 * API Call
 *
 * "Do this now."
 *
 * Caller waits.
 */

/*
 * Queue
 *
 * "Do this later."
 *
 * Caller continues immediately.
 */

// -----------------------------------------------------------------------------
// ⚠️ WHEN NOT TO USE A QUEUE
// -----------------------------------------------------------------------------

/*
 * Don't use a queue
 * when the user
 * needs an immediate answer.
 *
 * Login
 *
 * OTP Verification
 *
 * Balance Check
 *
 * Authentication
 *
 * These should remain synchronous.
 */

/*
 * Good Queue Use Cases
 *
 * Emails
 *
 * SMS
 *
 * Reports
 *
 * Image Processing
 *
 * Notifications
 *
 * Video Encoding
 *
 * Analytics
 *
 * Audit Logging
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * Beginners ask:
 *
 * "Can my server do everything?"
 *
 * Architects ask:
 *
 * "What actually needs
 * to happen
 * before
 * I respond
 * to the user?"
 *
 * The fastest system
 * is often
 * the one
 * that does
 * LESS work
 * during the request.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 *
 * Explain
 * Producer
 * Consumer
 * and Queue.
 */

/*
 * TASK 2
 *
 * Why shouldn't
 * sending emails
 * happen
 * inside
 * your HTTP request?
 */

/*
 * TASK 3
 *
 * Explain
 * FIFO
 * vs
 * Standard Queue.
 */

/*
 * TASK 4
 *
 * Why are retries
 * important?
 */

/*
 * TASK 5
 *
 * Draw this architecture.
 *
 * React
 *      │
 * API Gateway
 *      │
 * Order Service
 *      │
 * Message Queue
 *      │
 * Email Worker
 * SMS Worker
 * Audit Worker
 * Analytics Worker
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * If you understand this lesson,
 * you now know:
 *
 * ✔ What a Message Queue is
 *
 * ✔ Producer
 *
 * ✔ Consumer
 *
 * ✔ Messages
 *
 * ✔ Background Processing
 *
 * ✔ Horizontal Scaling
 *
 * ✔ Retries
 *
 * ✔ Dead Letter Queue
 *
 * ✔ FIFO
 *
 * ✔ Standard Queue
 *
 * ✔ Idempotency
 *
 * ✔ Why queues make
 * modern systems
 * faster
 * and more reliable.
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
 * Microservices
 *      │
 * Message Queue
 *      │
 * Workers
 *      │
 * Databases
 *
 * This architecture powers
 * banking systems,
 * Uber,
 * Amazon,
 * Netflix,
 * Stripe,
 * PayPal,
 * and virtually every
 * large-scale distributed platform.
 */