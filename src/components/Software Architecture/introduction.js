// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// COURSE STRUCTURE
//
// Phase 1 → Architecture Fundamentals
// Phase 2 → Load Balancers
// Phase 3 → Caching
// Phase 4 → API Gateway
// Phase 5 → Databases
// Phase 6 → Distributed Systems
// Phase 7 → Messaging Queues
// Phase 8 → Microservices
// Phase 9 → Cloud Architecture
// Phase 10 → System Design Interviews
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 PHASE 2 — LOAD BALANCERS (THE FIRST STEP TO SCALING)
// -----------------------------------------------------------------------------

/*
 * MINDSET SHIFT
 *
 * Junior Engineer
 * ----------------
 * "My server is slow."
 *
 * Mid-level Engineer
 * ------------------
 * "I need a bigger server."
 *
 * Senior Engineer
 * ----------------
 * "Why is one server doing all the work?"
 *
 * Software Architects don't immediately buy bigger machines.
 *
 * They ask:
 *
 * "Can I distribute the workload?"
 */

// -----------------------------------------------------------------------------
// 🌍 THE PROBLEM
// -----------------------------------------------------------------------------

/*
 * Imagine you built a React application.
 *
 *                Users
 *                  │
 *                  ▼
 *              React App
 *                  │
 *                  ▼
 *            Node.js Server
 *                  │
 *                  ▼
 *              Database
 *
 * Works perfectly...
 *
 * Until users increase.
 */

 /*
  * Traffic Growth
  *
  * 100 users
  *      ↓
  * 1,000 users
  *      ↓
  * 10,000 users
  *      ↓
  * 100,000 users
  *
  * Suddenly...
  *
  * CPU = 100%
  * Memory = 100%
  * Response Time increases
  * Requests timeout
  * Server crashes
  */

/*
 * WHY?
 *
 * Because every request goes to ONE machine.
 *
 * One server
 *
 *      ↓
 *
 * Handles EVERYTHING
 *
 * Login
 * Dashboard
 * Reports
 * Payments
 * Notifications
 * API Calls
 */

// -----------------------------------------------------------------------------
// 🍽️ REAL WORLD EXAMPLE
// -----------------------------------------------------------------------------

/*
 * Imagine a restaurant.
 *
 * 100 customers
 *
 *          ↓
 *
 *      One waiter
 *
 * What happens?
 *
 * Customers wait.
 *
 * Food gets delayed.
 *
 * Some customers leave.
 *
 * The waiter isn't bad.
 *
 * There are simply too many customers.
 *
 * Servers work exactly the same way.
 */

// -----------------------------------------------------------------------------
// 🏗️ THE SOLUTION
// -----------------------------------------------------------------------------

/*
 * Instead of
 *
 * Users
 *   │
 *   ▼
 * Server
 *
 * We introduce another layer.
 *
 * Users
 *   │
 *   ▼
 * Load Balancer
 *   │
 *   ├────────► Server A
 *   │
 *   ├────────► Server B
 *   │
 *   ├────────► Server C
 *   │
 *   └────────► Server D
 *
 * Now no server handles all requests.
 */

// -----------------------------------------------------------------------------
// 📦 WHAT IS A LOAD BALANCER?
// -----------------------------------------------------------------------------

/*
 * Definition
 *
 * A Load Balancer is a server whose ONLY responsibility is
 * to distribute incoming requests across multiple servers.
 *
 * It DOES NOT:
 *
 * ❌ Authenticate users
 * ❌ Process payments
 * ❌ Execute business logic
 * ❌ Read databases
 *
 * It ONLY decides:
 *
 * "Which server should process this request?"
 */

// -----------------------------------------------------------------------------
// 🔁 REQUEST FLOW
// -----------------------------------------------------------------------------

/*
 * Browser
 *      │
 *      ▼
 * React
 *      │
 *      ▼
 * https://api.bank.com/login
 *      │
 *      ▼
 * Load Balancer
 *      │
 *      ├────► Server A
 *      │
 *      ├────► Server B
 *      │
 *      ├────► Server C
 *      │
 *      ▼
 * Response
 *
 * React NEVER knows which server handled the request.
 */

// -----------------------------------------------------------------------------
// ⚙️ LOAD BALANCING ALGORITHMS
// -----------------------------------------------------------------------------

/*
 * A Load Balancer must choose a server.
 *
 * How?
 *
 * Different algorithms exist.
 */

// -----------------------------------------------------------------------------
// 🔄 METHOD 1 — ROUND ROBIN
// -----------------------------------------------------------------------------

/*
 * Every server receives requests equally.
 *
 * Request 1 → Server A
 *
 * Request 2 → Server B
 *
 * Request 3 → Server C
 *
 * Request 4 → Server A
 *
 * Request 5 → Server B
 *
 * Request 6 → Server C
 */

/*
 * Advantages
 *
 * ✔ Very simple
 * ✔ Very fast
 * ✔ Easy to implement
 */

/*
 * Problems
 *
 * Suppose
 *
 * Server A
 *
 * Currently processing
 * 500 reports
 *
 * Server B
 *
 * Idle
 *
 * Round Robin STILL sends
 * the next request to Server A.
 *
 * It doesn't know which server
 * is actually busy.
 */

// -----------------------------------------------------------------------------
// ⚖️ METHOD 2 — LEAST CONNECTIONS
// -----------------------------------------------------------------------------

/*
 * Instead of rotating equally,
 * the Load Balancer checks:
 *
 * Server A
 * 120 active users
 *
 * Server B
 * 12 active users
 *
 * Server C
 * 38 active users
 *
 * Which server gets the next request?
 *
 * Server B
 *
 * Because it has the fewest
 * active connections.
 */

/*
 * Advantages
 *
 * ✔ Better for long-running requests
 * ✔ Keeps workload balanced
 * ✔ Prevents overloaded servers
 */

// -----------------------------------------------------------------------------
// 💪 METHOD 3 — WEIGHTED ROUND ROBIN
// -----------------------------------------------------------------------------

/*
 * Not every server has the same power.
 *
 * Example
 *
 * Server A
 * 64 CPU
 * 256GB RAM
 *
 * Weight = 10
 *
 * Server B
 * 8 CPU
 * 16GB RAM
 *
 * Weight = 2
 *
 * Since Server A is stronger,
 * it receives more requests.
 */

/*
 * Real companies use this frequently.
 */

// -----------------------------------------------------------------------------
// ❤️ HEALTH CHECKS
// -----------------------------------------------------------------------------

/*
 * Imagine Server B crashes.
 *
 * Without Health Checks
 *
 * Users
 *      │
 *      ▼
 * Load Balancer
 *      │
 *      ▼
 * Server B ❌
 *
 * Users receive errors.
 */

/*
 * Instead,
 * every few seconds
 * the Load Balancer asks:
 *
 * "Are you alive?"
 *
 * Healthy Server
 *
 * 200 OK
 *
 * Dead Server
 *
 * No response
 *
 * Immediately removed
 * from the rotation.
 */

/*
 * This is one reason
 * modern applications achieve
 * High Availability.
 */

// -----------------------------------------------------------------------------
// 📈 HORIZONTAL SCALING
// -----------------------------------------------------------------------------

/*
 * Earlier we learned
 * Horizontal Scaling.
 *
 * Now let's connect the dots.
 *
 * Before
 *
 * Users
 *      │
 *      ▼
 * Server
 *
 * After
 *
 * Users
 *      │
 *      ▼
 * Load Balancer
 *      │
 *      ├────► Server A
 *      ├────► Server B
 *      ├────► Server C
 *      ├────► Server D
 *      └────► Server E
 *
 * Need more capacity?
 *
 * Add another server.
 *
 * No frontend changes.
 * No API changes.
 */

// -----------------------------------------------------------------------------
// 🏦 REAL BANKING EXAMPLE
// -----------------------------------------------------------------------------

/*
 * Salary Day
 *
 * 500,000 customers
 * log into Wema Bank.
 *
 * Without Load Balancer
 *
 * Authentication Server
 *
 * CPU = 100%
 *
 * Login fails.
 */

/*
 * With Load Balancer
 *
 * 500,000 Requests
 *          │
 *          ▼
 *     Load Balancer
 *          │
 *          ├────► Auth Server 1
 *          ├────► Auth Server 2
 *          ├────► Auth Server 3
 *          └────► Auth Server 4
 *
 * Every authentication server
 * handles only part
 * of the traffic.
 */

// -----------------------------------------------------------------------------
// 🔥 COMMON LOAD BALANCERS
// -----------------------------------------------------------------------------

/*
 * Enterprise systems commonly use:
 *
 * ✔ NGINX
 *
 * ✔ HAProxy
 *
 * ✔ AWS Elastic Load Balancer
 *
 * ✔ Azure Load Balancer
 *
 * ✔ Google Cloud Load Balancing
 *
 * ✔ F5 BIG-IP
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * Beginners ask:
 *
 * "How do I optimize this code?"
 *
 * Architects ask:
 *
 * "Why is one server handling everything?"
 *
 * Performance problems
 * are often solved
 * with Architecture,
 * not code.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 *
 * Draw the architecture below:
 *
 * Browser
 *      │
 * React
 *      │
 * Load Balancer
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
 * may not be ideal
 * for long-running requests.
 */

/*
 * TASK 3
 *
 * Explain when
 * Least Connections
 * should be preferred.
 */

/*
 * TASK 4
 *
 * Research how NGINX
 * performs Load Balancing.
 */

/*
 * TASK 5
 *
 * Sketch how your
 * current React application
 * at Wema Bank
 * could sit behind
 * a Load Balancer.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * If you understand this lesson,
 * you now know:
 *
 * ✔ Why servers become overloaded
 *
 * ✔ Why adding CPU isn't always the answer
 *
 * ✔ What a Load Balancer is
 *
 * ✔ How requests are distributed
 *
 * ✔ Round Robin
 *
 * ✔ Least Connections
 *
 * ✔ Weighted Round Robin
 *
 * ✔ Health Checks
 *
 * ✔ Horizontal Scaling
 *
 * This is one of the foundational concepts
 * behind every modern large-scale system.
 */