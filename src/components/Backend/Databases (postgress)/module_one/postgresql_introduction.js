// =============================================================================
// 🧠 POSTGRESQL VS MYSQL VS SQLITE (DATABASE SYSTEMS)
// =============================================================================

// -----------------------------------------------------------------------------
// ! WHAT THIS COMPARISON IS ABOUT
// -----------------------------------------------------------------------------
/*
 * SQL is a query language, but it does not store data by itself.
 * A Database Management System (DBMS) implements SQL and handles:
 * - storage
 * - concurrency
 * - transactions
 * - durability
 *
 * PostgreSQL, MySQL, and SQLite are all SQL databases,
 * but they are built for VERY different workloads.
 */

// -----------------------------------------------------------------------------
// ? PRIMARY GOAL OF EACH DATABASE
// -----------------------------------------------------------------------------
/*
 * PostgreSQL:
 * - Correctness-first, enterprise-grade database
 * - Handles complex queries and high concurrency
 * - Designed for long-term scalability and data integrity
 *
 * MySQL:
 * - Simplicity and speed for common web workloads
 * - Optimized for CRUD-style applications
 * - Fewer advanced SQL features
 *
 * SQLite:
 * - Lightweight, embedded database
 * - Zero configuration
 * - Designed to live inside an application
 */

// -----------------------------------------------------------------------------
// * DEPLOYMENT MODEL (CORE DIFFERENCE)
// -----------------------------------------------------------------------------
/*
 * PostgreSQL:
 * - Client–server database
 * - Runs as a dedicated database server
 * - Clients connect over TCP or sockets
 *
 * MySQL:
 * - Client–server database
 * - Similar deployment to PostgreSQL
 *
 * SQLite:
 * - Embedded database
 * - No server process
 * - Database is a single file on disk
 */

// -----------------------------------------------------------------------------
// ! CONCURRENCY MODEL
// -----------------------------------------------------------------------------
/*
 * PostgreSQL:
 * - Uses MVCC (Multi-Version Concurrency Control)
 * - Readers never block writers
 * - Writers never block readers
 * - Excellent for high-traffic systems
 *
 * MySQL:
 * - Concurrency depends on storage engine (InnoDB)
 * - Row-level locking exists
 * - Less sophisticated MVCC behavior
 *
 * SQLite:
 * - Multiple readers allowed
 * - Only ONE writer at a time
 * - Becomes a bottleneck under concurrency
 */

// -----------------------------------------------------------------------------
// ? TRANSACTIONS & DATA INTEGRITY
// -----------------------------------------------------------------------------
/*
 * PostgreSQL:
 * - Fully ACID compliant
 * - Strict enforcement of constraints
 * - Very close to SQL standards
 *
 * MySQL:
 * - ACID support depends on engine
 * - Historically more relaxed with constraints
 *
 * SQLite:
 * - ACID compliant
 * - Safe, but limited by single-writer design
 */

// -----------------------------------------------------------------------------
// * QUERY CAPABILITIES
// -----------------------------------------------------------------------------
/*
 * PostgreSQL:
 * - Advanced joins
 * - Window functions
 * - CTEs (WITH queries)
 * - Powerful query planner
 *
 * MySQL:
 * - Supports basic joins and subqueries
 * - Fewer advanced analytical features
 *
 * SQLite:
 * - Basic SQL support
 * - Limited query optimization
 */

// -----------------------------------------------------------------------------
// ! JSON & MODERN DATA TYPES
// -----------------------------------------------------------------------------
/*
 * PostgreSQL:
 * - Native JSON and JSONB
 * - Indexable JSON fields
 * - Acts like a hybrid relational + document DB
 *
 * MySQL:
 * - JSON supported, limited indexing
 *
 * SQLite:
 * - No native JSON type
 * - JSON treated as plain text
 */

// -----------------------------------------------------------------------------
// ? TYPICAL USE CASES
// -----------------------------------------------------------------------------
/*
 * PostgreSQL:
 * - Fintech
 * - Banking systems
 * - SaaS platforms
 * - Analytics + transactional systems
 *
 * MySQL:
 * - CMS platforms
 * - Blogs
 * - Simple web applications
 *
 * SQLite:
 * - Mobile apps
 * - Desktop apps
 * - Prototypes
 * - Local caching
 */

// -----------------------------------------------------------------------------
// * ONE-LINE COMPARISON SUMMARY
// -----------------------------------------------------------------------------
/*
 * PostgreSQL prioritizes correctness and scalability,
 * MySQL prioritizes simplicity and speed,
 * SQLite prioritizes convenience and zero setup.
 */

// =============================================================================
// 🧠 POSTGRESQL ARCHITECTURE OVERVIEW
// =============================================================================

// -----------------------------------------------------------------------------
// ! HIGH-LEVEL ARCHITECTURAL STYLE
// -----------------------------------------------------------------------------
/*
 * PostgreSQL uses a CLIENT–SERVER, MULTI-PROCESS architecture.
 *
 * This means:
 * - One main server process
 * - One backend process per client connection
 * - Shared memory for coordination
 */

// -----------------------------------------------------------------------------
// ? POSTMASTER (MAIN SERVER PROCESS)
// -----------------------------------------------------------------------------
/*
 * The Postmaster:
 * - Starts when PostgreSQL boots
 * - Listens for incoming client connections
 * - Spawns a new backend process per connection
 *
 * Think of it as the database traffic controller.
 */

// -----------------------------------------------------------------------------
// * BACKEND PROCESSES (ONE PER CLIENT)
// -----------------------------------------------------------------------------
/*
 * Each client connection gets:
 * - Its own operating system process
 * - Its own memory context
 *
 * Benefits:
 * - Fault isolation
 * - One bad query cannot crash the entire database
 */

// -----------------------------------------------------------------------------
// ! SHARED MEMORY
// -----------------------------------------------------------------------------
/*
 * All backend processes communicate via shared memory.
 *
 * Shared memory contains:
 * - Shared Buffers (cached table/index data)
 * - WAL buffers (transaction logs)
 * - Lock tables
 *
 * This is the most performance-critical area of PostgreSQL.
 */

// -----------------------------------------------------------------------------
// ? WRITE-AHEAD LOGGING (WAL)
// -----------------------------------------------------------------------------
/*
 * Every data change:
 * 1. Is written to WAL first
 * 2. Then applied to data files
 *
 * Why this matters:
 * - Crash recovery
 * - Replication
 * - Point-in-time restore
 */

// -----------------------------------------------------------------------------
// * MVCC (MULTI-VERSION CONCURRENCY CONTROL)
// -----------------------------------------------------------------------------
/*
 * PostgreSQL does NOT overwrite rows on update.
 *
 * Instead:
 * - A new version of the row is created
 * - Old versions remain for active readers
 *
 * Result:
 * - Reads do not block writes
 * - Writes do not block reads
 */

// -----------------------------------------------------------------------------
// ! AUTOVACUUM & BACKGROUND WORKERS
// -----------------------------------------------------------------------------
/*
 * Because old row versions exist, cleanup is required.
 *
 * Background processes:
 * - Autovacuum: removes dead rows
 * - Checkpointer: flushes memory to disk
 * - WAL Writer: writes logs
 * - Stats Collector: query planning data
 */

// -----------------------------------------------------------------------------
// ? WHY POSTGRESQL SCALES WELL
// -----------------------------------------------------------------------------
/*
 * - Strict SQL compliance
 * - MVCC for concurrency
 * - WAL for durability
 * - Advanced query planner
 * - Extensible architecture
 */

// -----------------------------------------------------------------------------
// * COMMON INTERVIEW TRAPS
// -----------------------------------------------------------------------------
/*
 * ❌ "PostgreSQL is slow"
 * ❌ "PostgreSQL is just MySQL with more features"
 * ❌ "PostgreSQL locks rows heavily"
 *
 * ✅ Correct:
 * - PostgreSQL optimizes for correctness and concurrency
 * - MVCC avoids read/write blocking
 * - Performance shines under complex workloads
 */

// -----------------------------------------------------------------------------
// ! ONE-LINE SENIOR SUMMARY
// -----------------------------------------------------------------------------
/*
 * PostgreSQL is a correctness-first, multi-process database
 * designed for high concurrency, complex queries,
 * and long-term system reliability.
 */
