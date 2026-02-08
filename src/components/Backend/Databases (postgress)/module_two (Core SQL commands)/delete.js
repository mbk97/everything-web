// =============================================================================
// 🧠 DELETE (REMOVE DATA FROM A TABLE)
// =============================================================================

// -----------------------------------------------------------------------------
// ! HIGH-LEVEL CONCEPT
// -----------------------------------------------------------------------------
/*
 * DELETE is used to REMOVE existing rows from a table.
 *
 * It does NOT remove columns or the table itself.
 * Once deleted, data is gone (unless wrapped in a transaction).
 *
 * ⚠️ Without a WHERE clause, DELETE removes ALL rows.
 */

// -----------------------------------------------------------------------------
// ? BASIC DELETE
// -----------------------------------------------------------------------------
/*
 * Delete ONE row from a table.
 * Always use a WHERE clause.
 */

//! DELETE FROM users
//! WHERE id = '88d1aeb1-415a-4413-b94e-8775191573aa';

// -----------------------------------------------------------------------------
// * DELETE USING A UUID
// -----------------------------------------------------------------------------
/*
 * UUIDs must be wrapped in quotes.
 * This guarantees you delete exactly one row.
 */

// DELETE FROM users
// WHERE id = 'uuid-goes-here';

// -----------------------------------------------------------------------------
// ! DELETE USING A CONDITION
// -----------------------------------------------------------------------------
/*
 * Delete rows that match a condition.
 */

// DELETE FROM users
// WHERE email LIKE '%@gmail.com';

// -----------------------------------------------------------------------------
// ? DELETE AND RETURN THE DELETED ROW
// -----------------------------------------------------------------------------
/*
 * RETURNING shows what was removed.
 * Extremely useful for verification.
 */

// DELETE FROM users
// WHERE email = 'oyindamola850@gmail.com'
// RETURNING id, email, name;

// -----------------------------------------------------------------------------
// ! DELETE ALL ROWS (EXTREMELY DANGEROUS)
// -----------------------------------------------------------------------------
/*
 * This removes EVERY row in the table.
 * The table structure remains.
 */

//! DELETE FROM users;

// -----------------------------------------------------------------------------
// 🧪 SAFE PRACTICE PATTERN
// -----------------------------------------------------------------------------
/*
 * 1. Run SELECT first
 * 2. Confirm rows
 * 3. Run DELETE with same WHERE
 */

// SELECT *
// FROM users
// WHERE email = 'oyindamola850@gmail.com';

// DELETE FROM users
// WHERE email = 'oyindamola850@gmail.com';
