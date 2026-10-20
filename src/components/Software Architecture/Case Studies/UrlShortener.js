// -----------------------------------------------------------------------------
// 🧠 REAL-WORLD CASE STUDY 1 — DESIGN A URL SHORTENER
// -----------------------------------------------------------------------------
//
// Goal:
//
// Apply requirements, estimation, API design, databases, caching, partitioning,
// reliability, security, and observability to one complete system.
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🎯 REQUIREMENTS
// -----------------------------------------------------------------------------

/*
 * Functional:
 *
 * ✔ Create a short URL for a long URL
 * ✔ Redirect a short code to its destination
 * ✔ Allow an optional expiration date
 * ✔ Show basic visit analytics
 *
 * Non-functional:
 *
 * ✔ Redirects should be very fast
 * ✔ Short codes must be unique
 * ✔ Redirects should remain highly available
 * ✔ The system is read-heavy
 * ✔ Malicious links and abuse must be controlled
 *
 * Outside first version:
 *
 * Custom aliases, billing, and advanced analytics.
 */

// -----------------------------------------------------------------------------
// 🧮 CAPACITY ESTIMATE
// -----------------------------------------------------------------------------

/*
 * Assume:
 *
 * 10 million new links per month
 * 100 redirect reads for every link creation
 * Peak traffic is 5 times average
 * One stored mapping uses roughly 1 KB including indexes
 *
 * Writes per second:
 *
 * 10,000,000 / 30 / 86,400 ≈ 4 writes per second average
 *
 * Reads per second:
 *
 * About 400 reads per second average, 2,000 at peak
 *
 * Monthly storage:
 *
 * Roughly 10 GB before replication, backups, and analytics
 *
 * This first version does not require internet-scale complexity.
 */

// -----------------------------------------------------------------------------
// 🔌 API DESIGN
// -----------------------------------------------------------------------------

/*
 * Create:
 *
 * POST /links
 *
 * {
 *   "url": "https://example.com/a/very/long/path",
 *   "expiresAt": "2027-01-01T00:00:00Z"
 * }
 *
 * Response: 201 Created
 *
 * {
 *   "code": "aZ91Kx2",
 *   "shortUrl": "https://sho.rt/aZ91Kx2"
 * }
 *
 * Redirect:
 *
 * GET /aZ91Kx2
 *
 * Response: 302 Found with a Location header.
 *
 * Use 302 when destinations may change or visits must be measured at the service.
 * A 301 can be cached aggressively by browsers and intermediaries.
 */

// -----------------------------------------------------------------------------
// 🗄️ DATA MODEL
// -----------------------------------------------------------------------------

/*
 * Link
 *
 * code         string, primary key
 * destination  string
 * owner_id     nullable string
 * created_at   timestamp
 * expires_at   nullable timestamp
 * status       active | blocked | expired
 *
 * Access patterns:
 *
 * Redirect by code
 * Create a mapping
 * List an owner's links
 * Expire or block a mapping
 *
 * The primary read is a direct lookup by code, so index code.
 */

// -----------------------------------------------------------------------------
// 🔑 GENERATING SHORT CODES
// -----------------------------------------------------------------------------

/*
 * Option 1: random Base62 code
 *
 * Alphabet: a-z, A-Z, 0-9
 * Generate code → try insert → regenerate on unique-key collision
 *
 * ✔ Harder to predict
 * ✔ Independent API instances can generate codes
 * ❌ Collisions must be handled
 *
 * Option 2: encode a numeric sequence as Base62
 *
 * ✔ Naturally unique
 * ✔ Compact
 * ❌ Requires ID allocation and produces predictable codes
 *
 * For this design, choose random Base62 plus a database uniqueness constraint.
 * The database remains the final authority on uniqueness.
 */

// -----------------------------------------------------------------------------
// 🏗️ HIGH-LEVEL ARCHITECTURE
// -----------------------------------------------------------------------------

/*
 * Clients
 *    │
 *    ▼
 * CDN / Edge
 *    │
 *    ▼
 * Load Balancer
 *    │
 *    ├────► Link API 1 ──┐
 *    └────► Link API 2 ──┼────► Cache ──► Link Database
 *                        │
 *                        └────► Analytics Queue ──► Workers
 *
 * Link APIs are stateless.
 * Redirect and analytics work are separated so analytics cannot delay the user.
 */

// -----------------------------------------------------------------------------
// 🔁 REDIRECT FLOW
// -----------------------------------------------------------------------------

/*
 * 1. Client requests /aZ91Kx2
 * 2. Edge returns a safe cached redirect when available
 * 3. API checks Redis using the short code
 * 4. Cache hit returns the destination
 * 5. Cache miss reads the database
 * 6. API caches active mapping with a TTL
 * 7. API returns the redirect response
 * 8. API publishes a VisitRecorded event without blocking the redirect
 *
 * Missing, blocked, and expired codes return a clear 404 or 410 response.
 */

// -----------------------------------------------------------------------------
// ⚡ CACHE STRATEGY
// -----------------------------------------------------------------------------

/*
 * Use cache-aside:
 *
 * Cache hit  → return destination
 * Cache miss → read database, fill cache, return destination
 *
 * Popular links receive most traffic, so caching produces a high hit ratio.
 *
 * On destination update or abuse block:
 *
 * 1. Update database
 * 2. Invalidate the cache entry
 *
 * Use a bounded TTL as a second safety net against stale redirects.
 */

// -----------------------------------------------------------------------------
// 🗂️ DATABASE GROWTH
// -----------------------------------------------------------------------------

/*
 * Begin with one relational or key-value database that meets the estimated load.
 * Add read replicas if database reads outgrow caching and the primary.
 *
 * At much larger scale, partition by a stable hash of code:
 *
 * hash(code) % number_of_partitions
 *
 * Avoid partitioning by creation date because all new writes would target the
 * newest partition.
 *
 * Partition only after measurements show it is needed.
 */

// -----------------------------------------------------------------------------
// 📊 ANALYTICS
// -----------------------------------------------------------------------------

/*
 * Redirect API publishes:
 *
 * {
 *   "code": "aZ91Kx2",
 *   "timestamp": "...",
 *   "country": "NG",
 *   "referrerDomain": "example.org"
 * }
 *
 * Workers aggregate visits by code, date, country, and referrer.
 *
 * Do not place the growing analytics stream in the critical redirect database.
 * Minimize or anonymize personal data according to product and legal requirements.
 */

// -----------------------------------------------------------------------------
// ❤️ FAILURE BEHAVIOR
// -----------------------------------------------------------------------------

/*
 * API instance fails       → load balancer removes it
 * Cache fails              → controlled database fallback with strict limits
 * Database fails           → cached popular links may continue temporarily
 * Analytics queue fails    → redirect still works; buffer or drop by policy
 * One availability zone fails → traffic moves to healthy zone capacity
 *
 * Prevent a cache outage from overwhelming the database with:
 *
 * Rate limits
 * Request coalescing
 * Circuit breakers
 * Gradual cache recovery
 */

// -----------------------------------------------------------------------------
// 🛡️ SECURITY AND ABUSE
// -----------------------------------------------------------------------------

/*
 * Attackers may use short links for phishing, malware, or denial of service.
 *
 * Controls:
 *
 * Rate-limit creation by identity and network
 * Validate supported URL schemes
 * Reject internal/private destinations where server-side fetching is involved
 * Scan reported or suspicious destinations
 * Maintain blocked status with fast cache invalidation
 * Protect administrative actions with strong authorization and audit logs
 * Limit destination and request sizes
 */

// -----------------------------------------------------------------------------
// 🔭 OBSERVABILITY
// -----------------------------------------------------------------------------

/*
 * Measure:
 *
 * Redirect request rate
 * p50, p95, and p99 redirect latency
 * Redirect error rate
 * Cache hit ratio
 * Database latency and connection usage
 * Link-creation collision rate
 * Analytics queue age
 * Blocked-link activity
 *
 * Suggested SLO:
 *
 * 99.95% of valid redirects complete within 150 ms each month.
 */

// -----------------------------------------------------------------------------
// ⚖️ IMPORTANT TRADEOFFS
// -----------------------------------------------------------------------------

/*
 * 301 vs 302
 *
 * Better client caching vs more server control and analytics visibility
 *
 * Random vs sequential codes
 *
 * Lower predictability vs simpler uniqueness
 *
 * Immediate vs asynchronous analytics
 *
 * Stronger analytics guarantees vs faster, more reliable redirects
 *
 * Long vs short cache TTL
 *
 * Lower database load vs slower destination and block updates
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 * Recalculate the design for 100 times more redirect traffic.
 *
 * TASK 2
 * Explain code collision handling from request to database.
 *
 * TASK 3
 * Design cache invalidation for an urgently blocked link.
 *
 * TASK 4
 * Decide what the service does when cache and database fail separately.
 *
 * TASK 5
 * Add custom aliases without allowing two users to claim the same alias.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * This design uses:
 *
 * ✔ Requirements and estimates to avoid premature complexity
 * ✔ A stable API and indexed mapping model
 * ✔ Unique Base62 codes
 * ✔ Stateless services behind a load balancer
 * ✔ Cache-aside for the read-heavy redirect path
 * ✔ Asynchronous analytics
 * ✔ Explicit failure, abuse, and observability controls
 *
 * BIG IDEA
 *
 * Start with the smallest design that meets the numbers, then show exactly how it
 * evolves when measurements reveal a bottleneck.
 */
