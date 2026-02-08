// =============================================================================
// 🧠 ORDER BY & LIMIT (SORTING AND CONTROLLING RESULTS)
// =============================================================================

// -----------------------------------------------------------------------------
// ! HIGH-LEVEL CONCEPT
// -----------------------------------------------------------------------------
/*
 * ORDER BY controls the SORT order of rows.
 * LIMIT controls HOW MANY rows are returned.
 *
 * They are mostly used with SELECT.
 *
 * Execution order (important):
 * WHERE → ORDER BY → LIMIT
 */

// -----------------------------------------------------------------------------
// ? ORDER BY (DEFAULT BEHAVIOR)
// -----------------------------------------------------------------------------
/*
 * ORDER BY sorts results in ASCENDING order by default.
 */

// SELECT *
// FROM users
// ORDER BY created_at;

/*
 * Same as:
 * ORDER BY created_at ASC
 */

// -----------------------------------------------------------------------------
// * ORDER BY DESC (MOST COMMON)
// -----------------------------------------------------------------------------
/*
 * DESC = descending order (newest first).
 */

// SELECT *
// FROM users
// ORDER BY created_at DESC;

// -----------------------------------------------------------------------------
// ! ORDER BY MULTIPLE COLUMNS
// -----------------------------------------------------------------------------
/*
 * First column has priority.
 * Second column is used when first has ties.
 */

// SELECT *
// FROM users
// ORDER BY active DESC, created_at DESC;

// -----------------------------------------------------------------------------
// ? LIMIT (RESTRICT NUMBER OF ROWS)
// -----------------------------------------------------------------------------
/*
 * LIMIT controls how many rows are returned.
 */

// SELECT *
// FROM users
// LIMIT 10;

// -----------------------------------------------------------------------------
// * ORDER BY + LIMIT (REAL-WORLD USAGE)
// -----------------------------------------------------------------------------
/*
 * Get the latest 5 users.
 */

// SELECT *
// FROM users
// ORDER BY created_at DESC
// LIMIT 5;

// -----------------------------------------------------------------------------
// ! LIMIT WITH OFFSET (PAGINATION)
// -----------------------------------------------------------------------------
/*
 * OFFSET skips rows before returning results.
 */

// SELECT *
// FROM users
// ORDER BY created_at DESC
// LIMIT 10 OFFSET 0;   -- page 1

// SELECT *
// FROM users
// ORDER BY created_at DESC
// LIMIT 10 OFFSET 10;  -- page 2

// -----------------------------------------------------------------------------
// 🚨 ORDER BY WITHOUT LIMIT
// -----------------------------------------------------------------------------
/*
 * ORDER BY sorts ALL matching rows.
 * This can be expensive on large tables.
 */

// SELECT *
// FROM users
// WHERE active = true
// ORDER BY created_at DESC;

// -----------------------------------------------------------------------------
// 🧠 SAFE & COMMON PATTERNS
// -----------------------------------------------------------------------------
/*
 * Always combine ORDER BY with LIMIT for dashboards.
 */

// SELECT id, email
// FROM users
// WHERE active = true
// ORDER BY created_at DESC
// LIMIT 20;

// -----------------------------------------------------------------------------
// ❌ COMMON MISTAKES
// -----------------------------------------------------------------------------
/*
 * LIMIT without ORDER BY is unpredictable.
 * SQL does NOT guarantee row order.
 */

// ❌ BAD
// SELECT *
// FROM users
// LIMIT 5;

// ✅ GOOD
// SELECT *
// FROM users
// ORDER BY created_at DESC
// LIMIT 5;

// -----------------------------------------------------------------------------
// 🧪 MENTAL MODEL
// -----------------------------------------------------------------------------
/*
 * WHERE  → filters rows
 * ORDER BY → sorts rows
 * LIMIT → trims rows
 */
