// =============================================================================
// 🧠 NULL vs NOT NULL (DATABASE FUNDAMENTALS)
// =============================================================================

// -----------------------------------------------------------------------------
// ! HIGH-LEVEL CONCEPT
// -----------------------------------------------------------------------------
/*
 * NULL is NOT a value.
 *
 * NULL means:
 * - Unknown
 * - Missing
 * - Not provided
 *
 * NOT NULL means:
 * - A value MUST exist
 * - The database enforces presence
 */

// -----------------------------------------------------------------------------
// ? WHAT NULL ACTUALLY MEANS
// -----------------------------------------------------------------------------
/*
 * NULL does NOT mean:
 * ❌ empty string ('')
 * ❌ zero (0)
 * ❌ false
 *
 * NULL means:
 * - "We do not know the value"
 * - "The value does not exist"
 */

// -----------------------------------------------------------------------------
// * NOT NULL CONSTRAINT
// -----------------------------------------------------------------------------
/*
 * NOT NULL is a constraint applied to a column.
 *
 * It guarantees:
 * - Every row has a value for that column
 * - No NULLs are allowed
 *
 * This is a DATA INTEGRITY rule.
 */

// -----------------------------------------------------------------------------
// ! COLUMN DEFINITION EXAMPLE
// -----------------------------------------------------------------------------
/*
 * CREATE TABLE users (
 *   id SERIAL PRIMARY KEY,
 *   email TEXT NOT NULL,
 *   phone TEXT,
 *   age INTEGER
 * );
 *
 * email → MUST exist
 * phone → optional
 * age   → optional
 */

// -----------------------------------------------------------------------------
// ? NULL IN QUERIES (IMPORTANT)
// -----------------------------------------------------------------------------
/*
 * NULL behaves differently in comparisons.
 *
 * ❌ This does NOT work:
 *   WHERE age = NULL
 *
 * ✅ Correct:
 *   WHERE age IS NULL
 *   WHERE age IS NOT NULL
 */

// -----------------------------------------------------------------------------
// * THREE-VALUED LOGIC
// -----------------------------------------------------------------------------
/*
 * SQL uses 3-valued logic:
 * - TRUE
 * - FALSE
 * - UNKNOWN
 *
 * Any comparison with NULL results in UNKNOWN.
 *
 * Example:
 *   NULL = 5  → UNKNOWN
 *   NULL = NULL → UNKNOWN
 */

// -----------------------------------------------------------------------------
// ! DEFAULT vs NULL
// -----------------------------------------------------------------------------
/*
 * DEFAULT is applied ONLY when:
 * - A column is omitted during INSERT
 *
 * If you explicitly insert NULL:
 * - DEFAULT is ignored
 *
 * DEFAULT does NOT replace NOT NULL.
 */

// -----------------------------------------------------------------------------
// ? DEFAULT EXAMPLE
// -----------------------------------------------------------------------------
/*
 * CREATE TABLE orders (
 *   status TEXT NOT NULL DEFAULT 'pending'
 * );
 *
 * INSERT INTO orders DEFAULT VALUES;        → status = 'pending'
 * INSERT INTO orders (status) VALUES (NULL); → ❌ ERROR
 */

// -----------------------------------------------------------------------------
// * NULL AND AGGREGATE FUNCTIONS
// -----------------------------------------------------------------------------
/*
 * Aggregates IGNORE NULLs:
 * - COUNT(column)
 * - SUM(column)
 * - AVG(column)
 *
 * COUNT(*) counts rows regardless of NULLs.
 */

// -----------------------------------------------------------------------------
// ! NULL VS EMPTY VALUES
// -----------------------------------------------------------------------------
/*
 * TEXT:
 * - NULL  → unknown
 * - ''    → known empty string
 *
 * NUMERIC:
 * - NULL → unknown
 * - 0    → known zero
 *
 * BOOLEAN:
 * - NULL → unknown
 * - false → known false
 */

// -----------------------------------------------------------------------------
// ? WHEN TO ALLOW NULL
// -----------------------------------------------------------------------------
/*
 * Allow NULL when:
 * - Data is optional
 * - Value may be unknown at creation time
 * - Field is filled later in a workflow
 */

// -----------------------------------------------------------------------------
// * WHEN TO USE NOT NULL
// -----------------------------------------------------------------------------
/*
 * Use NOT NULL when:
 * - Column is required for correctness
 * - Business logic depends on it
 * - It should always exist (email, created_at)
 */

// -----------------------------------------------------------------------------
// ! COMMON BEGINNER MISTAKES
// -----------------------------------------------------------------------------
/*
 * ❌ Using NULL instead of meaningful defaults
 * ❌ Comparing NULL with =
 * ❌ Allowing NULL where data is required
 * ❌ Using NULL as a "false" value
 */

// -----------------------------------------------------------------------------
// ? ONE-LINE SENIOR SUMMARY
// -----------------------------------------------------------------------------
/*
 * NULL represents missing or unknown data,
 * while NOT NULL enforces certainty —
 * choosing correctly is a core data integrity decision.
 */
