// =============================================================================
// 🧠 TABLES vs ROWS (RELATIONAL DATABASE BASICS)
// =============================================================================

// -----------------------------------------------------------------------------
// ! HIGH-LEVEL CONCEPT
// -----------------------------------------------------------------------------
/*
 * TABLES and ROWS are not interchangeable.
 *
 * - A TABLE defines STRUCTURE
 * - A ROW represents DATA
 *
 * Think:
 * Table → blueprint
 * Row   → actual record
 */

// -----------------------------------------------------------------------------
// ? TABLE (STRUCTURAL CONTAINER)
// -----------------------------------------------------------------------------
/*
 * A TABLE is a collection of rows and columns.
 *
 * It defines:
 * - Column names
 * - Data types
 * - Constraints
 * - Relationships
 *
 * Tables exist even when they contain ZERO rows.
 */

// -----------------------------------------------------------------------------
// * WHAT A TABLE CONTAINS
// -----------------------------------------------------------------------------
/*
 * A table defines:
 * - Columns (id, name, email)
 * - Data types (INT, TEXT, TIMESTAMP)
 * - Constraints (PRIMARY KEY, UNIQUE, NOT NULL)
 * - Indexes
 *
 * Example:
 * users(id, name, email)
 */

// -----------------------------------------------------------------------------
// ! ROW (SINGLE RECORD)
// -----------------------------------------------------------------------------
/*
 * A ROW is a single instance of data in a table.
 *
 * Each row:
 * - Matches the table structure
 * - Represents one real-world entity
 * - Is uniquely identified (usually by a primary key)
 */

// -----------------------------------------------------------------------------
// ? ROW EXAMPLE
// -----------------------------------------------------------------------------
/*
 * Table: users
 *
 * Row:
 * (1, 'Mubarak', 'mubarak@email.com')
 *
 * Multiple rows = multiple users
 */

// -----------------------------------------------------------------------------
// * TABLE vs ROW (KEY DIFFERENCES)
// -----------------------------------------------------------------------------
/*
 * TABLE:
 * - Defines schema
 * - Holds many rows
 * - Exists without data
 * - Changed using ALTER TABLE
 *
 * ROW:
 * - Actual data
 * - Inserted into tables
 * - Cannot exist without a table
 * - Changed using UPDATE
 */

// -----------------------------------------------------------------------------
// ! SQL OPERATIONS MAPPING
// -----------------------------------------------------------------------------
/*
 * TABLE-level operations:
 * - CREATE TABLE
 * - DROP TABLE
 * - ALTER TABLE
 *
 * ROW-level operations:
 * - INSERT
 * - UPDATE
 * - DELETE
 * - SELECT
 */

// -----------------------------------------------------------------------------
// ? PERFORMANCE & DESIGN IMPLICATIONS
// -----------------------------------------------------------------------------
/*
 * Tables:
 * - Affect schema design
 * - Impact indexing & relationships
 *
 * Rows:
 * - Affect storage size
 * - Impact query performance
 * - Managed by MVCC (in PostgreSQL)
 */

// -----------------------------------------------------------------------------
// * COMMON BEGINNER CONFUSIONS
// -----------------------------------------------------------------------------
/*
 * ❌ "Table and row are the same"
 * ❌ "Deleting a row deletes the table"
 * ❌ "A table must have data"
 *
 * ✅ Correct:
 * - Tables define structure
 * - Rows hold data
 * - Tables can exist empty
 */

// -----------------------------------------------------------------------------
// ! REAL-WORLD ANALOGY
// -----------------------------------------------------------------------------
/*
 * Spreadsheet:
 * - Sheet     → Table
 * - Single line → Row
 *
 * Database:
 * - Table     → Class definition
 * - Row       → Object instance
 */

// -----------------------------------------------------------------------------
// ? ONE-LINE SENIOR SUMMARY
// -----------------------------------------------------------------------------
/*
 * A TABLE defines the structure and rules of data,
 * while a ROW represents one concrete record
 * that follows that structure.
 */
