// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// PHASE 2 — NGINX LOAD BALANCING
//
// Topic:
// How NGINX Performs Load Balancing
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Junior Engineer
 * ----------------
 * "I deployed my API."
 *
 * Mid-level Engineer
 * ------------------
 * "I deployed multiple API servers."
 *
 * Senior Engineer
 * ----------------
 * "How do users know which server to connect to?"
 *
 * This is where NGINX comes in.
 *
 * NGINX doesn't make your application faster.
 *
 * It makes your APPLICATION SCALE.
 */

// -----------------------------------------------------------------------------
// 🌍 THE PROBLEM
// -----------------------------------------------------------------------------

/*
 * Imagine your banking application has only one API server.
 *
 *                Users
 *                  │
 *                  ▼
 *          api.bank.com
 *                  │
 *                  ▼
 *          Node.js Server
 *                  │
 *                  ▼
 *             SQL Database
 *
 * Everything works...
 *
 * Until traffic increases.
 */

/*
 * Salary Day
 *
 * 1 Million customers
 *
 *      │
 *      ▼
 * All requests hit ONE server.
 *
 * CPU = 100%
 *
 * Memory = 100%
 *
 * Requests queue.
 *
 * Login becomes slow.
 *
 * Payments timeout.
 *
 * Customers complain.
 */

/*
 * Buying a larger server helps...
 *
 * But only temporarily.
 *
 * Eventually,
 * that server reaches its limit too.
 */

// -----------------------------------------------------------------------------
// 🤔 THE QUESTION
// -----------------------------------------------------------------------------

/*
 * Instead of asking:
 *
 * "How do I make ONE server stronger?"
 *
 * Architects ask:
 *
 * "How do I spread the work across MANY servers?"
 */

// -----------------------------------------------------------------------------
// 🏗️ THE SOLUTION
// -----------------------------------------------------------------------------

/*
 * We place NGINX in front of our application.
 *
 *                Users
 *                  │
 *                  ▼
 *             api.bank.com
 *                  │
 *                  ▼
 *               NGINX
 *                  │
 *      ┌───────────┼───────────┐
 *      │           │           │
 *      ▼           ▼           ▼
 *   API 1       API 2       API 3
 *      │           │           │
 *      └───────────┼───────────┘
 *                  ▼
 *             SQL Database
 *
 * Users never know
 * which API server handled
 * their request.
 */

// -----------------------------------------------------------------------------
// 📦 WHAT IS NGINX?
// -----------------------------------------------------------------------------

/*
 * NGINX is one of the world's most popular:
 *
 * ✔ Web Server
 *
 * ✔ Reverse Proxy
 *
 * ✔ Load Balancer
 *
 * ✔ API Gateway
 *
 * In this lesson,
 * we're focusing on
 * its role as a Load Balancer.
 */

// -----------------------------------------------------------------------------
// 🧠 WHAT DOES NGINX ACTUALLY DO?
// -----------------------------------------------------------------------------

/*
 * Every request follows this path.
 *
 * Browser
 *      │
 *      ▼
 * HTTPS Request
 *      │
 *      ▼
 * NGINX
 *      │
 *      ▼
 * Chooses ONE backend server
 *      │
 *      ▼
 * Backend processes request
 *      │
 *      ▼
 * Response returned
 *
 * Notice something...
 *
 * NGINX never processes
 * your business logic.
 *
 * It simply decides
 * WHERE the request goes.
 */

// -----------------------------------------------------------------------------
// 🔁 HOW NGINX HANDLES A REQUEST
// -----------------------------------------------------------------------------

/*
 * Step 1
 *
 * Client sends request
 *
 *        │
 *        ▼
 *      NGINX
 *
 * Step 2
 *
 * Checks available servers.
 *
 * Step 3
 *
 * Applies a Load Balancing algorithm.
 *
 * Step 4
 *
 * Picks one server.
 *
 * Step 5
 *
 * Forwards request.
 *
 * Step 6
 *
 * Receives response.
 *
 * Step 7
 *
 * Sends response
 * back to client.
 */

// -----------------------------------------------------------------------------
// 🏗️ THE UPSTREAM POOL
// -----------------------------------------------------------------------------

/*
 * NGINX groups backend servers
 * into something called
 * an Upstream.
 *
 * Think of it as
 * a collection of servers
 * that all perform
 * the same job.
 *
 * Example
 *
 *              Upstream
 *      ┌────────────────────┐
 *      │                    │
 *      │  Server A          │
 *      │  Server B          │
 *      │  Server C          │
 *      │                    │
 *      └────────────────────┘
 *
 * When requests arrive,
 * NGINX selects
 * one server
 * from this pool.
 */

// -----------------------------------------------------------------------------
// ⚙️ HOW NGINX DECIDES
// -----------------------------------------------------------------------------

/*
 * NGINX supports
 * multiple algorithms.
 *
 * Each solves
 * a different problem.
 */

// -----------------------------------------------------------------------------
// 🔄 METHOD 1 — ROUND ROBIN
// -----------------------------------------------------------------------------

/*
 * This is the default.
 *
 * Request 1
 *      ▼
 * Server A
 *
 * Request 2
 *      ▼
 * Server B
 *
 * Request 3
 *      ▼
 * Server C
 *
 * Request 4
 *      ▼
 * Server A
 *
 * Request 5
 *      ▼
 * Server B
 */

/*
 * Advantages
 *
 * ✔ Simple
 *
 * ✔ Fast
 *
 * ✔ Equal distribution
 */

/*
 * Weakness
 *
 * NGINX doesn't know
 * whether Server A
 * is already overloaded.
 *
 * It simply rotates.
 */

// -----------------------------------------------------------------------------
// ⚖️ METHOD 2 — LEAST CONNECTIONS
// -----------------------------------------------------------------------------

/*
 * Instead of rotating,
 * NGINX asks:
 *
 * Which server
 * currently has
 * the fewest
 * active users?
 *
 * Example
 *
 * Server A
 * 250 connections
 *
 * Server B
 * 18 connections
 *
 * Server C
 * 90 connections
 *
 * New request?
 *
 * Goes to Server B.
 */

/*
 * Why?
 *
 * Because Server B
 * is the least busy.
 */

/*
 * Best for:
 *
 * ✔ Banking APIs
 *
 * ✔ File uploads
 *
 * ✔ Long-running reports
 *
 * ✔ Payment systems
 */

// -----------------------------------------------------------------------------
// 💪 METHOD 3 — WEIGHTED LOAD BALANCING
// -----------------------------------------------------------------------------

/*
 * Imagine
 * your servers
 * aren't identical.
 *
 * Server A
 *
 * 64 CPUs
 *
 * 256 GB RAM
 *
 * Weight = 10
 *
 * Server B
 *
 * 8 CPUs
 *
 * 16 GB RAM
 *
 * Weight = 2
 *
 * NGINX gives
 * more requests
 * to the stronger server.
 */

/*
 * Bigger server
 *
 * More traffic.
 *
 * Smaller server
 *
 * Less traffic.
 */

// -----------------------------------------------------------------------------
// 📍 METHOD 4 — IP HASH
// -----------------------------------------------------------------------------

/*
 * Sometimes users
 * must always
 * reach the same server.
 *
 * Example
 *
 * Customer logs in.
 *
 * Session stored
 * on Server B.
 *
 * Next request?
 *
 * Must return
 * to Server B.
 *
 * NGINX hashes
 * the client's IP
 * so the same user
 * consistently reaches
 * the same backend.
 */

/*
 * Useful for
 *
 * ✔ Shopping carts
 *
 * ✔ Login sessions
 *
 * ✔ Legacy applications
 */

// -----------------------------------------------------------------------------
// ❤️ HEALTH CHECKS
// -----------------------------------------------------------------------------

/*
 * Imagine Server B crashes.
 *
 *                Users
 *                  │
 *                  ▼
 *               NGINX
 *                  │
 *        ┌─────────┼─────────┐
 *        ▼         ▼         ▼
 *     Server A   Server B❌  Server C
 *
 * Without health checks,
 * users receive errors.
 */

/*
 * Instead,
 * NGINX watches
 * every server.
 *
 * Healthy?
 *
 * ✔ Keep sending traffic.
 *
 * Unhealthy?
 *
 * ❌ Remove from rotation.
 */

/*
 * Once the server
 * becomes healthy again,
 * NGINX starts
 * sending traffic
 * back to it.
 */

// -----------------------------------------------------------------------------
// 🔒 SSL TERMINATION
// -----------------------------------------------------------------------------

/*
 * HTTPS encryption
 * is expensive.
 *
 * Instead of every server
 * decrypting HTTPS...
 *
 * Browser
 *      │
 * HTTPS
 *      ▼
 * NGINX
 *      │
 * HTTP
 *      ▼
 * Backend Servers
 *
 * NGINX handles
 * encryption once.
 *
 * Backend servers
 * focus only
 * on business logic.
 */

// -----------------------------------------------------------------------------
// 🚀 KEEPALIVE CONNECTIONS
// -----------------------------------------------------------------------------

/*
 * Opening TCP connections
 * repeatedly
 * is expensive.
 *
 * Without Keepalive
 *
 * Open connection
 * Close connection
 *
 * Open connection
 * Close connection
 *
 * Open connection
 * Close connection
 */

/*
 * With Keepalive
 *
 * Open connection
 *
 * Reuse connection
 *
 * Reuse connection
 *
 * Reuse connection
 *
 * Less overhead.
 *
 * Better performance.
 */

// -----------------------------------------------------------------------------
// 📦 RESPONSE BUFFERING
// -----------------------------------------------------------------------------

/*
 * Suppose
 * your API finishes
 * generating a report
 * in one second.
 *
 * But the client
 * has slow internet.
 *
 * Without buffering
 *
 * API waits.
 *
 * With buffering
 *
 * API sends response
 * to NGINX.
 *
 * NGINX stores it.
 *
 * Client downloads
 * at its own speed.
 *
 * API becomes available
 * much sooner.
 */

// -----------------------------------------------------------------------------
// 🏦 REAL BANKING EXAMPLE
// -----------------------------------------------------------------------------

/*
 * Wema Bank
 *
 * Salary Day
 *
 * One Million customers
 * open the mobile app.
 *
 * Every login request
 * arrives here.
 *
 *                 Users
 *                   │
 *                   ▼
 *            login.wemabank.com
 *                   │
 *                   ▼
 *                 NGINX
 *         ┌─────────┼─────────┐
 *         ▼         ▼         ▼
 *      Auth 1    Auth 2    Auth 3
 *         │         │         │
 *         └─────────┼─────────┘
 *                   ▼
 *              User Database
 *
 * Instead of
 * one authentication server
 * processing
 * one million logins,
 * each server
 * processes
 * only part
 * of the workload.
 */

// -----------------------------------------------------------------------------
// 🧠 WHY NGINX IS SO FAST
// -----------------------------------------------------------------------------

/*
 * NGINX uses
 * an Event-Driven,
 * Non-Blocking Architecture.
 *
 * Instead of creating
 * one thread
 * per request...
 *
 * It uses
 * a small number
 * of worker processes
 * that manage
 * thousands of connections
 * asynchronously.
 *
 * This makes NGINX
 * extremely memory-efficient
 * and capable of handling
 * very high traffic.
 */

// -----------------------------------------------------------------------------
// 🏛️ NGINX REQUEST LIFECYCLE
// -----------------------------------------------------------------------------

/*
 * Client
 *      │
 *      ▼
 * HTTPS Request
 *      │
 *      ▼
 * NGINX receives request
 *      │
 *      ▼
 * Checks available servers
 *      │
 *      ▼
 * Applies balancing algorithm
 *      │
 *      ▼
 * Chooses backend server
 *      │
 *      ▼
 * Backend processes request
 *      │
 *      ▼
 * Response returned
 *      │
 *      ▼
 * NGINX sends response
 *      │
 *      ▼
 * Client
 */

// -----------------------------------------------------------------------------
// 🔥 WHERE NGINX IS USED
// -----------------------------------------------------------------------------

/*
 * Companies using NGINX
 * or NGINX-based infrastructure include:
 *
 * ✔ Netflix
 *
 * ✔ Airbnb
 *
 * ✔ Dropbox
 *
 * ✔ GitHub
 *
 * ✔ Cloudflare
 *
 * ✔ Financial institutions
 *
 * ✔ Government systems
 *
 * ✔ E-commerce platforms
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * Beginners ask:
 *
 * "Which API server
 * handled this request?"
 *
 * Architects ask:
 *
 * "Why should users
 * care which server
 * handled it?"
 *
 * The goal
 * is for servers
 * to become interchangeable.
 *
 * If one server fails,
 * another immediately
 * continues serving traffic.
 *
 * That is resilience.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 *
 * Draw the architecture:
 *
 * Browser
 *      │
 * HTTPS
 *      │
 * NGINX
 *      │
 * API Gateway
 *      │
 * Authentication Service
 *      │
 * Database
 */

/*
 * TASK 2
 *
 * Explain why
 * Round Robin
 * may overload
 * a busy server.
 */

/*
 * TASK 3
 *
 * Explain why
 * Least Connections
 * is often better
 * for banking applications.
 */

/*
 * TASK 4
 *
 * Describe
 * what an Upstream Pool is
 * and why NGINX uses it.
 */

/*
 * TASK 5
 *
 * Explain
 * why SSL Termination
 * improves backend
 * server performance.
 */

/*
 * TASK 6
 *
 * Sketch how
 * your current React application
 * at Wema Bank
 * could sit behind
 * an NGINX Load Balancer,
 * including multiple API servers,
 * an API Gateway,
 * and a database.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * If you understand this lesson,
 * you now know:
 *
 * ✔ What NGINX is
 *
 * ✔ Why it sits in front of applications
 *
 * ✔ How it receives every client request
 *
 * ✔ What an Upstream Pool is
 *
 * ✔ Round Robin
 *
 * ✔ Least Connections
 *
 * ✔ Weighted Load Balancing
 *
 * ✔ IP Hash
 *
 * ✔ Health Checks
 *
 * ✔ SSL Termination
 *
 * ✔ Keepalive Connections
 *
 * ✔ Response Buffering
 *
 * ✔ Why NGINX is so fast
 *
 * ✔ How modern enterprise systems
 *   distribute traffic across servers
 *
 * NGINX is more than a web server.
 *
 * It is one of the foundational building
 * blocks of modern scalable systems and
 * is a core technology behind many
 * high-traffic platforms around the world.
 */