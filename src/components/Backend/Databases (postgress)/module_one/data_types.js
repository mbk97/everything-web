// =============================================================================
// 🧠 DATA TYPES (POSTGRESQL & RELATIONAL DATABASES)
// =============================================================================

// -----------------------------------------------------------------------------
// ! HIGH-LEVEL CONCEPT
// -----------------------------------------------------------------------------
/*
 * A DATA TYPE defines:
 * - What kind of data a column can store
 * - How much space it uses
 * - What operations are allowed on it
 *
 * Data types are about:
 * - Correctness
 * - Performance
 * - Data integrity
 */

// -----------------------------------------------------------------------------
// ? WHY DATA TYPES MATTER
// -----------------------------------------------------------------------------
/*
 * Choosing the right data type:
 * - Prevents invalid data
 * - Improves query performance
 * - Reduces storage usage
 * - Makes intent clear to developers
 *
 * Bad data types = bugs, slow queries, wasted space
 */

// -----------------------------------------------------------------------------
// * COMMON DATA TYPE CATEGORIES
// -----------------------------------------------------------------------------
/*
 * PostgreSQL groups data types into:
 * - Numeric
 * - Character (Text)
 * - Date & Time
 * - Boolean
 * - UUID
 * - JSON
 * - Arrays
 * - Enumerated (ENUM)
 */

// -----------------------------------------------------------------------------
// ! NUMERIC DATA TYPES
// -----------------------------------------------------------------------------
/*
 * Used for numbers and calculations.
 *
 * Common ones:
 * - SMALLINT   → small numbers
 * - INTEGER    → most common whole numbers
 * - BIGINT     → very large numbers
 * - DECIMAL / NUMERIC → exact values (money)
 * - REAL / DOUBLE PRECISION → floating point
 *
 * Rule of thumb:
 * - Use INTEGER for IDs
 * - Use NUMERIC for money
 * - Avoid floats for financial data
 */

// -----------------------------------------------------------------------------
// ? TEXT / CHARACTER DATA TYPES
// -----------------------------------------------------------------------------
/*
 * Used for strings.
 *
 * Common ones:
 * - TEXT        → unlimited length (most used)
 * - VARCHAR(n)  → limited length
 * - CHAR(n)     → fixed length
 *
 * PostgreSQL note:
 * - TEXT and VARCHAR perform the same
 * - Length limits are usually business rules, not DB rules
 */

// -----------------------------------------------------------------------------
// * DATE & TIME DATA TYPES
// -----------------------------------------------------------------------------
/*
 * Used for time-based data.
 *
 * Common ones:
 * - DATE        → calendar date
 * - TIME        → time only
 * - TIMESTAMP   → date + time (no timezone)
 * - TIMESTAMPTZ → date + time WITH timezone
 *
 * Best practice:
 * - Always use TIMESTAMPTZ for real-world events
 */

// -----------------------------------------------------------------------------
// ! BOOLEAN DATA TYPE
// -----------------------------------------------------------------------------
/*
 * Stores true/false values.
 *
 * BOOLEAN:
 * - true
 * - false
 * - null
 *
 * Avoid using:
 * - 'Y' / 'N'
 * - 0 / 1
 *
 * BOOLEAN improves clarity and correctness.
 */

// -----------------------------------------------------------------------------
// ? UUID DATA TYPE
// -----------------------------------------------------------------------------
/*
 * Used for globally unique identifiers.
 *
 * UUID:
 * - Not sequential
 * - Hard to guess
 * - Good for distributed systems
 *
 * Trade-off:
 * - Larger than integers
 * - Slightly slower indexing
 */

// -----------------------------------------------------------------------------
// * JSON & JSONB DATA TYPES
// -----------------------------------------------------------------------------
/*
 * Used for semi-structured data.
 *
 * JSON:
 * - Stored as text
 *
 * JSONB:
 * - Binary format
 * - Faster queries
 * - Indexable
 *
 * Best practice:
 * - Use JSONB unless you have a strong reason not to
 */

// -----------------------------------------------------------------------------
// ! ARRAY DATA TYPES
// -----------------------------------------------------------------------------
/*
 * PostgreSQL allows arrays as column types.
 *
 * Example:
 * - TEXT[]
 * - INTEGER[]
 *
 * Use cases:
 * - Tags
 * - Roles
 *
 * Caution:
 * - Arrays can complicate querying
 * - Often better modeled as separate tables
 */

// -----------------------------------------------------------------------------
// ? ENUM (ENUMERATED TYPES)
// -----------------------------------------------------------------------------
/*
 * ENUM defines a fixed set of allowed values.
 *
 * Example:
 * status ENUM('pending', 'active', 'suspended')
 *
 * Pros:
 * - Strong data validation
 * - Clear intent
 *
 * Cons:
 * - Harder to change later
 */

// -----------------------------------------------------------------------------
// * COMMON DATA TYPE MISTAKES
// -----------------------------------------------------------------------------
/*
 * ❌ Using TEXT for everything
 * ❌ Using FLOAT for money
 * ❌ Storing dates as strings
 * ❌ Overusing VARCHAR length limits
 *
 * ✅ Correct:
 * - Use precise types
 * - Let the database enforce correctness
 */

// -----------------------------------------------------------------------------
// ! SQL EXAMPLE
// -----------------------------------------------------------------------------
/*
 * CREATE TABLE users (
 *   id UUID PRIMARY KEY,
 *   email TEXT NOT NULL,
 *   age INTEGER,
 *   balance NUMERIC(10,2),
 *   is_active BOOLEAN DEFAULT true,
 *   created_at TIMESTAMPTZ DEFAULT now()
 * );
 */

// -----------------------------------------------------------------------------
// ? ONE-LINE SENIOR SUMMARY
// -----------------------------------------------------------------------------
/*
 * Data types define the shape, safety, and performance
 * of your data — choosing the right type is a design decision,
 * not just a syntax choice.
 */
