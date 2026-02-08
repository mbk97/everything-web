// =============================================================================
// 🧠 PRIMARY KEYS (DATABASE FUNDAMENTALS)
// =============================================================================

// -----------------------------------------------------------------------------
// ! HIGH-LEVEL CONCEPT
// -----------------------------------------------------------------------------
/*
 * A PRIMARY KEY uniquely identifies EACH row in a table.
 *
 * It enforces:
 * - Uniqueness
 * - Non-nullability
 * - Row identity
 *
 * Think of it as:
 * → The table’s fingerprint
 */

// -----------------------------------------------------------------------------
// ? WHAT A PRIMARY KEY ACTUALLY IS
// -----------------------------------------------------------------------------
/*
 * A PRIMARY KEY is a constraint.
 *
 * Under the hood, it is:
 * - UNIQUE
 * - NOT NULL
 * - Backed by an index
 *
 * Every table SHOULD have one.
 */

// -----------------------------------------------------------------------------
// * WHY PRIMARY KEYS EXIST
// -----------------------------------------------------------------------------
/*
 * Without a primary key:
 * - Rows cannot be reliably identified
 * - Updates and deletes become dangerous
 * - Relationships break
 *
 * Databases are built around row identity.
 */

// -----------------------------------------------------------------------------
// ! SIMPLE PRIMARY KEY EXAMPLE
// -----------------------------------------------------------------------------
/*
 * CREATE TABLE users (
 *   id SERIAL PRIMARY KEY,
 *   email TEXT NOT NULL,
 *   name TEXT
 * );
 *
 * id:
 * - Automatically generated
 * - Unique
 * - Never NULL
 */

// -----------------------------------------------------------------------------
// ? PRIMARY KEY RULES (VERY IMPORTANT)
// -----------------------------------------------------------------------------
/*
 * A table can have:
 * - ✅ ONLY ONE primary key
 *
 * A primary key can be:
 * - A single column
 * - Multiple columns (composite key)
 */

// -----------------------------------------------------------------------------
// * COMPOSITE PRIMARY KEY
// -----------------------------------------------------------------------------
/*
 * Used when uniqueness depends on multiple columns.
 *
 * Example:
 * - A student can enroll in a course only once
 */

/*
 * CREATE TABLE enrollments (
 *   student_id INT,
 *   course_id INT,
 *   enrolled_at TIMESTAMP,
 *   PRIMARY KEY (student_id, course_id)
 * );
 *
 * The combination must be unique.
 */

// -----------------------------------------------------------------------------
// ! PRIMARY KEY vs UNIQUE
// -----------------------------------------------------------------------------
/*
 * PRIMARY KEY:
 * - Unique
 * - NOT NULL
 * - One per table
 *
 * UNIQUE:
 * - Unique
 * - NULL allowed (usually)
 * - Many per table
 */

// -----------------------------------------------------------------------------
// ? PRIMARY KEY vs ROW POSITION
// -----------------------------------------------------------------------------
/*
 * Row order does NOT matter.
 *
 * You must NEVER rely on:
 * - Insert order
 * - Physical row position
 *
 * Only the primary key guarantees identity.
 */

// -----------------------------------------------------------------------------
// * AUTO-INCREMENT PRIMARY KEYS
// -----------------------------------------------------------------------------
/*
 * Common patterns:
 * - SERIAL (older PostgreSQL)
 * - BIGSERIAL
 * - IDENTITY (modern PostgreSQL)
 */

/*
 * CREATE TABLE orders (
 *   id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 *   amount NUMERIC NOT NULL
 * );
 */

// -----------------------------------------------------------------------------
// ! SHOULD PRIMARY KEYS CHANGE?
// -----------------------------------------------------------------------------
/*
 * ❌ NO.
 *
 * A primary key should be:
 * - Stable
 * - Immutable
 * - Meaningless to business logic
 *
 * IDs are identifiers, not data.
 */

// -----------------------------------------------------------------------------
// ? NATURAL KEY vs SURROGATE KEY
// -----------------------------------------------------------------------------
/*
 * Natural Key:
 * - Real-world data (email, SSN)
 * - Can change
 * - Risky
 *
 * Surrogate Key:
 * - Artificial (id)
 * - Never changes
 * - Preferred
 */

// -----------------------------------------------------------------------------
// * FOREIGN KEYS DEPEND ON PRIMARY KEYS
// -----------------------------------------------------------------------------
/*
 * Foreign keys reference:
 * - PRIMARY KEYS
 * - or UNIQUE columns
 *
 * Without primary keys:
 * - Referential integrity breaks
 */

// -----------------------------------------------------------------------------
// ! PERFORMANCE IMPLICATIONS
// -----------------------------------------------------------------------------
/*
 * PRIMARY KEY automatically creates an index.
 *
 * Benefits:
 * - Fast lookups
 * - Fast joins
 * - Efficient updates
 *
 * Poor PK design hurts performance.
 */

// -----------------------------------------------------------------------------
// ? COMMON BEGINNER MISTAKES
// -----------------------------------------------------------------------------
/*
 * ❌ No primary key at all
 * ❌ Using mutable data (email) as PK
 * ❌ Overloading PK with business meaning
 * ❌ Assuming UNIQUE = PRIMARY KEY
 */

// -----------------------------------------------------------------------------
// * ONE-LINE SENIOR SUMMARY
// -----------------------------------------------------------------------------
/*
 * A primary key is the immutable identity of a row —
 * without it, a table is structurally incomplete.
 */
