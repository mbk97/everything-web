// =============================================================================
// 🧠 DATABASES vs SCHEMAS (POSTGRESQL & RELATIONAL DATABASES)
// =============================================================================

// -----------------------------------------------------------------------------
// ! HIGH-LEVEL CONCEPT
// -----------------------------------------------------------------------------
/*
 * DATABASES and SCHEMAS solve different problems.
 *
 * - A DATABASE is a physical + logical boundary
 * - A SCHEMA is a logical namespace inside a database
 *
 * Think:
 * Database  → building
 * Schema    → rooms inside the building
 */

// -----------------------------------------------------------------------------
// ? DATABASE (TOP-LEVEL CONTAINER)
// -----------------------------------------------------------------------------
/*
 * A DATABASE is the highest level of separation.
 *
 * Characteristics:
 * - Own data files
 * - Own system catalog
 * - Own connections
 * - Own users and permissions
 *
 * You MUST connect to a database before accessing anything inside it.
 */

// -----------------------------------------------------------------------------
// * WHAT A DATABASE CONTAINS
// -----------------------------------------------------------------------------
/*
 * Inside a database you can have:
 * - Schemas
 * - Tables
 * - Views
 * - Indexes
 * - Functions
 * - Triggers
 *
 * BUT:
 * - Objects in different databases CANNOT see each other directly
 */

// -----------------------------------------------------------------------------
// ! SCHEMA (NAMESPACE / LOGICAL GROUPING)
// -----------------------------------------------------------------------------
/*
 * A SCHEMA is a logical container inside a database.
 *
 * Purpose:
 * - Organize database objects
 * - Avoid naming conflicts
 * - Control access at a finer level
 *
 * Schemas do NOT store data separately from the database.
 */

// -----------------------------------------------------------------------------
// ? WHY SCHEMAS EXIST
// -----------------------------------------------------------------------------
/*
 * Without schemas:
 * - Every table name must be globally unique
 * - Large applications become messy
 *
 * With schemas:
 * - Same table name can exist in different schemas
 * - Logical separation without full isolation
 */

// -----------------------------------------------------------------------------
// * PRACTICAL EXAMPLE
// -----------------------------------------------------------------------------
/*
 * Database: company_db
 *
 * Schemas:
 * - auth
 * - sales
 * - hr
 *
 * Tables:
 * auth.users
 * sales.users
 *
 * Same table name, different responsibility, same database.
 */

// -----------------------------------------------------------------------------
// ! DATABASE vs SCHEMA (KEY DIFFERENCES)
// -----------------------------------------------------------------------------
/*
 * DATABASE:
 * - Hard isolation
 * - Separate connections
 * - Separate backups
 * - Strong security boundary
 *
 * SCHEMA:
 * - Soft isolation
 * - Shared connections
 * - Shared transactions
 * - Organizational + permission boundary
 */

// -----------------------------------------------------------------------------
// ? WHEN TO USE MULTIPLE DATABASES
// -----------------------------------------------------------------------------
/*
 * Use multiple databases when:
 * - You need strong isolation
 * - Different environments (dev / staging / prod)
 * - Multi-tenant systems with strict separation
 * - Independent backup / restore policies
 */

// -----------------------------------------------------------------------------
// * WHEN TO USE SCHEMAS
// -----------------------------------------------------------------------------
/*
 * Use schemas when:
 * - One application, multiple domains
 * - Clean separation of responsibilities
 * - Shared data but controlled access
 * - Easier maintenance and querying
 */

// -----------------------------------------------------------------------------
// ! COMMON REAL-WORLD SETUP
// -----------------------------------------------------------------------------
/*
 * app_db
 * ├── public        → shared tables
 * ├── auth          → authentication & roles
 * ├── billing       → payments & invoices
 * ├── analytics     → reporting & metrics
 *
 * This is the most common production pattern.
 */

// -----------------------------------------------------------------------------
// ? COMMON INTERVIEW CONFUSION
// -----------------------------------------------------------------------------
/*
 * ❌ "Schemas and databases are the same"
 * ❌ "Schemas give full isolation"
 *
 * ✅ Correct:
 * - Databases provide isolation
 * - Schemas provide organization and namespacing
 */

// -----------------------------------------------------------------------------
// * ONE-LINE SENIOR SUMMARY
// -----------------------------------------------------------------------------
/*
 * A DATABASE is a hard boundary for isolation and ownership,
 * while a SCHEMA is a logical namespace used to organize
 * and manage objects within the same database.
 */
