// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// PHASE 3 — CACHING (THE SECRET TO FAST APPLICATIONS)
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Junior Engineer
 * ----------------
 * "The database is slow."
 *
 * Mid-level Engineer
 * ------------------
 * "Let's optimize the SQL query."
 *
 * Senior Engineer
 * ----------------
 * "Why are we querying the database
 * if the data hasn't changed?"
 *
 * Architects don't just make
 * databases faster.
 *
 * They eliminate unnecessary
 * database requests.
 *
 * That's the purpose of Caching.
 */

// -----------------------------------------------------------------------------
// 🌍 THE PROBLEM
// -----------------------------------------------------------------------------

/*
 * Imagine you've built
 * an Online Banking Application.
 *
 *                Users
 *                  │
 *                  ▼
 *             React App
 *                  │
 *                  ▼
 *              API Server
 *                  │
 *                  ▼
 *              SQL Database
 *
 * Everything works.
 */

/*
 * Then traffic increases.
 *
 * 10 users
 *      │
 *      ▼
 * Database handles it.
 *
 * 100 users
 *      │
 *      ▼
 * Still fine.
 *
 * 10,000 users
 *      │
 *      ▼
 * Every request
 * hits the database.
 *
 * Database CPU increases.
 *
 * Disk reads increase.
 *
 * Response times become slower.
 *
 * Users begin to notice delays.
 */

// -----------------------------------------------------------------------------
// 🤔 THE QUESTION
// -----------------------------------------------------------------------------

/*
 * Imagine
 * one million users
 * request today's
 * USD exchange rate.
 *
 * Does the database really need
 * to answer the same question
 * one million times?
 *
 * No.
 *
 * The answer
 * is identical.
 */

// -----------------------------------------------------------------------------
// 🍽️ REAL WORLD EXAMPLE
// -----------------------------------------------------------------------------

/*
 * Imagine a waiter
 * working in a restaurant.
 *
 * Customer 1 asks:
 *
 * "What's today's special?"
 *
 * Waiter walks
 * into the kitchen.
 *
 * Returns.
 *
 * Answers.
 *
 * Customer 2 asks
 * the exact same question.
 *
 * Waiter walks
 * back into the kitchen.
 *
 * Again.
 *
 * Customer 3...
 *
 * Same thing.
 *
 * That's inefficient.
 */

/*
 * A smart waiter
 * memorizes today's special.
 *
 * Future customers
 * get the answer instantly.
 *
 * That memory
 * is exactly what
 * a Cache is.
 */

// -----------------------------------------------------------------------------
// 🏗️ THE SOLUTION
// -----------------------------------------------------------------------------

/*
 * We introduce
 * a Cache.
 *
 * Before
 *
 * Users
 *      │
 *      ▼
 * API
 *      │
 *      ▼
 * Database
 *
 * After
 *
 * Users
 *      │
 *      ▼
 * API
 *      │
 *      ▼
 * Cache
 *      │
 *      ▼
 * Database
 */

// -----------------------------------------------------------------------------
// 📦 WHAT IS A CACHE?
// -----------------------------------------------------------------------------

/*
 * Definition
 *
 * A Cache is
 * temporary storage
 * for frequently used data.
 *
 * Instead of
 * repeatedly reading
 * from a slow database,
 * applications first ask:
 *
 * "Do I already have
 * this information?"
 */

// -----------------------------------------------------------------------------
// ⚡ WHY CACHE IS FAST
// -----------------------------------------------------------------------------

/*
 * Database
 *
 * Reads from disk.
 *
 * Performs indexing.
 *
 * Performs query planning.
 *
 * Returns rows.
 *
 * Cache
 *
 * Reads directly
 * from memory (RAM).
 *
 * RAM is dramatically
 * faster than disk.
 *
 * That's why
 * cache responses
 * are usually measured
 * in milliseconds
 * or even microseconds.
 */

// -----------------------------------------------------------------------------
// 🔁 REQUEST FLOW
// -----------------------------------------------------------------------------

/*
 * User
 *      │
 *      ▼
 * API Request
 *      │
 *      ▼
 * Cache
 *      │
 *
 * Data exists?
 *
 *      │
 *  ┌───┴────┐
 *  │        │
 * YES      NO
 *  │        │
 *  ▼        ▼
 * Return   Database
 * Data       │
 *            ▼
 *       Save to Cache
 *            │
 *            ▼
 *       Return Data
 */

// -----------------------------------------------------------------------------
// 🎯 CACHE HIT
// -----------------------------------------------------------------------------

/*
 * Cache already
 * contains
 * the requested data.
 *
 * Example
 *
 * User requests:
 *
 * Exchange Rate
 *
 * Cache says:
 *
 * "I already have it."
 *
 * Response returned
 * immediately.
 *
 * Database is never touched.
 */

// -----------------------------------------------------------------------------
// ❌ CACHE MISS
// -----------------------------------------------------------------------------

/*
 * Cache does NOT
 * contain the data.
 *
 * API asks
 * the database.
 *
 * Database returns data.
 *
 * API stores
 * that data
 * inside the cache.
 *
 * Future requests
 * become much faster.
 */

// -----------------------------------------------------------------------------
// 🧠 CACHE HIT VS CACHE MISS
// -----------------------------------------------------------------------------

/*
 * Cache Hit
 *
 * User
 *      │
 *      ▼
 * Cache
 *      │
 *      ▼
 * Response
 *
 * Database
 *
 * Never contacted.
 */

/*
 * Cache Miss
 *
 * User
 *      │
 *      ▼
 * Cache
 *      │
 *      ▼
 * Database
 *      │
 *      ▼
 * Cache
 *      │
 *      ▼
 * User
 */

// -----------------------------------------------------------------------------
// 🧱 WHAT SHOULD BE CACHED?
// -----------------------------------------------------------------------------

/*
 * Excellent candidates
 * include:
 *
 * ✔ Exchange Rates
 *
 * ✔ User Profiles
 *
 * ✔ Product Catalogs
 *
 * ✔ Country Lists
 *
 * ✔ Configuration Settings
 *
 * ✔ Frequently Viewed Reports
 *
 * ✔ Dashboard Statistics
 *
 * ✔ Frequently Used API Responses
 */

/*
 * Poor candidates
 * include:
 *
 * ❌ OTP Codes
 *
 * ❌ Live Account Balances
 *
 * ❌ Payment Transactions
 *
 * ❌ Sensitive Temporary Data
 *
 * Because these
 * change constantly.
 */

// -----------------------------------------------------------------------------
// ⏰ CACHE EXPIRATION (TTL)
// -----------------------------------------------------------------------------

/*
 * Cached data
 * should not
 * live forever.
 *
 * Example
 *
 * Exchange Rate
 *
 * Cached
 * for
 * 5 minutes.
 *
 * After
 * 5 minutes
 * it expires.
 *
 * Next request
 * gets fresh data.
 */

/*
 * TTL
 *
 * Means:
 *
 * Time To Live.
 */

// -----------------------------------------------------------------------------
// 🔄 CACHE INVALIDATION
// -----------------------------------------------------------------------------

/*
 * Suppose
 * a customer
 * updates
 * their profile.
 *
 * Database
 * gets updated.
 *
 * But Cache
 * still has
 * the old profile.
 *
 * Problem.
 */

/*
 * Solution
 *
 * Remove
 * the cached copy.
 *
 * Next request
 * loads
 * fresh data.
 *
 * This process
 * is called
 * Cache Invalidation.
 *
 * One of the hardest
 * problems
 * in software engineering
 * is deciding
 * exactly when
 * cached data
 * should expire.
 */

// -----------------------------------------------------------------------------
// 📍 WHERE DOES THE CACHE LIVE?
// -----------------------------------------------------------------------------

/*
 * There are
 * multiple levels
 * of caching.
 *
 * Browser Cache
 *      │
 *      ▼
 * CDN Cache
 *      │
 *      ▼
 * API Cache
 *      │
 *      ▼
 * Redis
 *      │
 *      ▼
 * Database
 *
 * Modern applications
 * often use
 * several caches
 * together.
 */

// -----------------------------------------------------------------------------
// 🚀 REDIS
// -----------------------------------------------------------------------------

/*
 * The world's most popular
 * cache server
 * is Redis.
 *
 * Redis stores
 * everything
 * in memory.
 *
 * That's why
 * reads
 * are extremely fast.
 *
 * Many enterprise systems
 * use Redis
 * between
 * their API
 * and Database.
 */

// -----------------------------------------------------------------------------
// 🏦 REAL BANKING EXAMPLE
// -----------------------------------------------------------------------------

/*
 * Customer opens
 * the banking app.
 *
 * Dashboard requests:
 *
 * Current Exchange Rate.
 *
 *                User
 *                  │
 *                  ▼
 *             API Server
 *                  │
 *                  ▼
 *               Redis
 *                  │
 *            ┌─────┴─────┐
 *            │           │
 *        Found?        Not Found
 *            │           │
 *            ▼           ▼
 *      Return Rate    Database
 *                         │
 *                         ▼
 *                    Store in Redis
 *                         │
 *                         ▼
 *                    Return Result
 *
 * Thousands of users
 * requesting
 * the same rate
 * barely touch
 * the database.
 */

// -----------------------------------------------------------------------------
// 📈 PERFORMANCE IMPROVEMENT
// -----------------------------------------------------------------------------

/*
 * Without Cache
 *
 * Every request
 * reaches
 * the database.
 *
 * Database CPU
 * increases.
 *
 * Disk activity
 * increases.
 *
 * Response time
 * becomes slower.
 */

/*
 * With Cache
 *
 * Most requests
 * never reach
 * the database.
 *
 * Database load
 * drops dramatically.
 *
 * Response times
 * become much faster.
 */

// -----------------------------------------------------------------------------
// 🧠 CACHE ASIDE PATTERN
// -----------------------------------------------------------------------------

/*
 * The most common
 * caching strategy.
 *
 * Step 1
 *
 * Check Cache.
 *
 * Step 2
 *
 * If missing,
 * query Database.
 *
 * Step 3
 *
 * Store result
 * in Cache.
 *
 * Step 4
 *
 * Return response.
 *
 * This pattern
 * is called
 * Cache Aside.
 */

// -----------------------------------------------------------------------------
// 🔥 POPULAR CACHING SOLUTIONS
// -----------------------------------------------------------------------------

/*
 * Enterprise systems
 * commonly use:
 *
 * ✔ Redis
 *
 * ✔ Memcached
 *
 * ✔ Cloudflare Cache
 *
 * ✔ Azure Cache for Redis
 *
 * ✔ Amazon ElastiCache
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * Beginners ask:
 *
 * "How can I optimize
 * this SQL query?"
 *
 * Architects ask:
 *
 * "Should this query
 * happen at all?"
 *
 * The fastest
 * database query
 * is the one
 * you never execute.
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
 * React
 *      │
 * API
 *      │
 * Redis Cache
 *      │
 * SQL Database
 */

/*
 * TASK 2
 *
 * Explain
 * the difference
 * between
 * Cache Hit
 * and
 * Cache Miss.
 */

/*
 * TASK 3
 *
 * Explain
 * why Redis
 * is faster
 * than a database.
 */

/*
 * TASK 4
 *
 * Give five examples
 * of data
 * that should
 * be cached
 * in a banking system.
 */

/*
 * TASK 5
 *
 * Explain
 * what TTL means
 * and why
 * it is important.
 */

/*
 * TASK 6
 *
 * Sketch how
 * your current React
 * application at Wema Bank
 * could use Redis
 * between
 * the API layer
 * and SQL Server
 * to reduce
 * database load.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * If you understand this lesson,
 * you now know:
 *
 * ✔ What Caching is
 *
 * ✔ Why databases become overloaded
 *
 * ✔ Why RAM is faster than disk
 *
 * ✔ Cache Hit
 *
 * ✔ Cache Miss
 *
 * ✔ TTL (Time To Live)
 *
 * ✔ Cache Invalidation
 *
 * ✔ Cache Aside Pattern
 *
 * ✔ Redis
 *
 * ✔ What data should
 *   and shouldn't be cached
 *
 * ✔ How caching dramatically
 *   improves performance
 *   and scalability.
 *
 * Caching is one of the biggest
 * performance optimizations
 * in modern software architecture.
 *
 * Before scaling your database,
 * always ask:
 *
 * "Can I avoid this query
 * with a cache?"
 */