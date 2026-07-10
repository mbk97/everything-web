// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// PHASE 5 → DATABASES
//
// Goal:
//
// Understand how databases fit into modern large-scale systems,
// why they become bottlenecks,
// and how senior engineers think about choosing and scaling them.
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Beginner thinks:
 *
 * "I just need somewhere to save data."
 *
 * --------------------------------------------------
 *
 * Mid-level Engineer thinks:
 *
 * "Should I use MongoDB or PostgreSQL?"
 *
 * --------------------------------------------------
 *
 * Senior Engineer thinks:
 *
 * "What kind of data am I storing,
 * how will it be queried,
 * how consistent must it be,
 * and how will it scale?"
 */

// -----------------------------------------------------------------------------
// 🧱 WHAT IS A DATABASE?
// -----------------------------------------------------------------------------

/*
 * A database is where your system stores persistent data.
 *
 * Persistent means:
 *
 * The data still exists even after your server restarts.
 *
 * Example:
 *
 * User account
 * Bank transaction
 * Order history
 * Login session
 * Product inventory
 * Payment record
 */

// -----------------------------------------------------------------------------
// 🌍 SIMPLE APP FLOW
// -----------------------------------------------------------------------------

/*
 * React
 *      │
 *      ▼
 * Node.js API
 *      │
 *      ▼
 * Database
 *
 * Example:
 *
 * User logs in
 *
 * Node.js checks database
 *
 * Database returns user record
 */

// -----------------------------------------------------------------------------
// 🏦 BANKING EXAMPLE
// -----------------------------------------------------------------------------

/*
 * In banking, databases store:
 *
 * Customer profile
 * Account balance
 * Transaction history
 * Loan applications
 * Audit logs
 * Card information
 * Compliance records
 *
 * This data is critical.
 *
 * If it is wrong,
 * money can be lost.
 */

// -----------------------------------------------------------------------------
// 🧠 DATABASES ARE OFTEN THE BOTTLENECK
// -----------------------------------------------------------------------------

/*
 * You can scale app servers easily.
 *
 * App Server A
 * App Server B
 * App Server C
 * App Server D
 *
 * But they may all depend on ONE database.
 *
 * App Servers
 *      │
 *      ▼
 * One Database
 *
 * If the database is slow,
 * the whole system is slow.
 */

// -----------------------------------------------------------------------------
// 🧩 TWO MAJOR DATABASE FAMILIES
// -----------------------------------------------------------------------------

/*
 * 1. Relational Databases
 *
 * Examples:
 *
 * PostgreSQL
 * MySQL
 * SQL Server
 * Oracle
 *
 * ---------------------------------
 *
 * 2. NoSQL Databases
 *
 * Examples:
 *
 * MongoDB
 * Redis
 * Cassandra
 * DynamoDB
 * Elasticsearch
 */

// -----------------------------------------------------------------------------
// 🧱 RELATIONAL DATABASES
// -----------------------------------------------------------------------------

/*
 * Relational databases store data in tables.
 *
 * Example:
 *
 * Users Table
 *
 * id | name    | email
 * -------------------------
 * 1  | Mubarak | muba@email.com
 *
 * Accounts Table
 *
 * id | user_id | balance
 * -------------------------
 * 1  | 1       | 50000
 */

/*
 * Best for:
 *
 * ✔ Banking
 * ✔ Payments
 * ✔ Accounting
 * ✔ Orders
 * ✔ Inventory
 * ✔ Anything requiring strong consistency
 */

// -----------------------------------------------------------------------------
// 🍃 NoSQL DATABASES
// -----------------------------------------------------------------------------

/*
 * NoSQL databases are more flexible.
 *
 * Example MongoDB document:
 *
 * {
 *   id: 1,
 *   name: "Mubarak",
 *   accounts: [
 *     { balance: 50000, currency: "NGN" }
 *   ]
 * }
 */

/*
 * Best for:
 *
 * ✔ Flexible data
 * ✔ High-volume writes
 * ✔ Logs
 * ✔ Analytics
 * ✔ Feeds
 * ✔ Caching
 * ✔ Search
 */

// -----------------------------------------------------------------------------
// 🔐 ACID TRANSACTIONS
// -----------------------------------------------------------------------------

/*
 * ACID means:
 *
 * Atomicity
 * Consistency
 * Isolation
 * Durability
 *
 * This is extremely important
 * in financial systems.
 */

/*
 * Example:
 *
 * Transfer ₦10,000 from Account A to Account B.
 *
 * Step 1:
 * Debit Account A
 *
 * Step 2:
 * Credit Account B
 *
 * Both must succeed.
 *
 * If one fails,
 * everything must rollback.
 */

// -----------------------------------------------------------------------------
// 🏦 BANK TRANSFER EXAMPLE
// -----------------------------------------------------------------------------

/*
 * Bad system:
 *
 * Account A debited
 *
 * Network fails
 *
 * Account B not credited
 *
 * Customer loses money.
 */

/*
 * Good system:
 *
 * Begin transaction
 *
 * Debit Account A
 *
 * Credit Account B
 *
 * Commit transaction
 *
 * If anything fails:
 *
 * Rollback transaction
 */

// -----------------------------------------------------------------------------
// ⚡ DATABASE INDEXES
// -----------------------------------------------------------------------------

/*
 * An index helps the database find data faster.
 *
 * Without index:
 *
 * Database scans every row.
 *
 * With index:
 *
 * Database jumps directly
 * to matching records.
 */

/*
 * Example:
 *
 * Find user by email.
 *
 * SELECT * FROM users
 * WHERE email = 'mubarak@email.com';
 *
 * If email is indexed,
 * this query is much faster.
 */

// -----------------------------------------------------------------------------
// ⚠️ INDEX TRADEOFF
// -----------------------------------------------------------------------------

/*
 * Indexes make reads faster.
 *
 * But they make writes slightly slower.
 *
 * Why?
 *
 * Because every insert/update
 * must also update the index.
 *
 * Senior engineers don't add indexes randomly.
 *
 * They index based on query patterns.
 */

// -----------------------------------------------------------------------------
// 📈 SCALING DATABASE READS
// -----------------------------------------------------------------------------

/*
 * Problem:
 *
 * Too many users reading data.
 *
 * Solution:
 *
 * Read Replicas.
 *
 * Main Database
 *      │
 *      ├────► Read Replica 1
 *      ├────► Read Replica 2
 *      └────► Read Replica 3
 *
 * Writes go to main database.
 *
 * Reads can go to replicas.
 */

// -----------------------------------------------------------------------------
// 🧠 READ REPLICA EXAMPLE
// -----------------------------------------------------------------------------

/*
 * Banking dashboard:
 *
 * User opens transaction history.
 *
 * This is mostly read-only.
 *
 * It can come from a replica.
 *
 * But money transfer:
 *
 * Must write to primary database.
 */

// -----------------------------------------------------------------------------
// ✂️ SHARDING
// -----------------------------------------------------------------------------

/*
 * Sharding means splitting one large database
 * into smaller databases.
 *
 * Example:
 *
 * Users A - F → Database 1
 *
 * Users G - M → Database 2
 *
 * Users N - Z → Database 3
 */

/*
 * Why?
 *
 * One database has become too large.
 *
 * So we split the data.
 */

// -----------------------------------------------------------------------------
// 🏦 BANKING SHARDING EXAMPLE
// -----------------------------------------------------------------------------

/*
 * Customers can be split by:
 *
 * Region
 * Account type
 * Customer ID range
 * Country
 *
 * Example:
 *
 * Nigeria customers → DB 1
 *
 * Ghana customers → DB 2
 *
 * Kenya customers → DB 3
 */

// -----------------------------------------------------------------------------
// ⚖️ CONSISTENCY VS AVAILABILITY
// -----------------------------------------------------------------------------

/*
 * Sometimes architecture requires tradeoffs.
 *
 * Strong consistency:
 *
 * Everyone sees the latest data immediately.
 *
 * ---------------------------------
 *
 * Eventual consistency:
 *
 * Data becomes consistent after a short delay.
 */

/*
 * Banking balance:
 *
 * Needs strong consistency.
 *
 * Social media likes:
 *
 * Can be eventually consistent.
 */

// -----------------------------------------------------------------------------
// 🔥 DATABASE CHOICE MINDSET
// -----------------------------------------------------------------------------

/*
 * Don't ask:
 *
 * "Which database is best?"
 *
 * Ask:
 *
 * "What problem am I solving?"
 *
 * Need strict transactions?
 *
 * PostgreSQL / MySQL / SQL Server
 *
 * Need flexible documents?
 *
 * MongoDB
 *
 * Need caching?
 *
 * Redis
 *
 * Need full-text search?
 *
 * Elasticsearch
 *
 * Need massive distributed writes?
 *
 * Cassandra / DynamoDB
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * If you understand this lesson,
 * you now know:
 *
 * ✔ What databases do
 *
 * ✔ Why databases become bottlenecks
 *
 * ✔ Relational vs NoSQL
 *
 * ✔ ACID transactions
 *
 * ✔ Indexes
 *
 * ✔ Read replicas
 *
 * ✔ Sharding
 *
 * ✔ Strong consistency
 *
 * ✔ Eventual consistency
 *
 * Architect mindset:
 *
 * Data design is system design.
 *
 * Bad database decisions
 * can destroy good application code.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 *
 * Explain why banking systems usually prefer
 * relational databases for core transactions.
 */

/*
 * TASK 2
 *
 * Design a simple database model for:
 *
 * Users
 * Accounts
 * Transactions
 */

/*
 * TASK 3
 *
 * Explain why Redis is not a replacement
 * for your main banking database.
 */

/*
 * TASK 4
 *
 * Explain when MongoDB may be better
 * than PostgreSQL.
 */

/*
 * TASK 5
 *
 * Draw this architecture:
 *
 * React
 *      │
 * API Gateway
 *      │
 * User Service
 *      │
 * Primary Database
 *      │
 * Read Replicas
 */