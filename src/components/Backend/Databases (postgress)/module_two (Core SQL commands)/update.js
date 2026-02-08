// =============================================================================
// 🧠 UPDATE (MODIFY EXISTING DATA IN A TABLE)
// =============================================================================

// -----------------------------------------------------------------------------
// ! HIGH-LEVEL CONCEPT
// -----------------------------------------------------------------------------
/*
 * UPDATE is used to MODIFY existing rows in a table.
 *
 * It does NOT create new rows.
 * It changes values in columns of rows that already exist.
 *
 * ⚠️ Without a WHERE clause, UPDATE affects ALL rows.
 */

// -----------------------------------------------------------------------------
// ? BASIC UPDATE
// -----------------------------------------------------------------------------
/*
 * Update ONE column in a table.
 * Always use a WHERE clause.
 */

//! UPDATE users
//! SET full_name = 'Mubarak Muhammed'
//! WHERE id = 'b8c8e6f3-2b8d-4d6e-9a9f-0e5f3b7f3a21';

// -----------------------------------------------------------------------------
// * UPDATE MULTIPLE COLUMNS
// -----------------------------------------------------------------------------
/*
 * You can update more than one column at once.
 * Separate column assignments with commas.
 */

// UPDATE users
// SET
//   email = 'oyindamola850@gmail.com',
//   phone = '09035448029'
// WHERE id = 'b8c8e6f3-2b8d-4d6e-9a9f-0e5f3b7f3a21';

// -----------------------------------------------------------------------------
// ! UPDATE USING A UUID (VERY IMPORTANT)
// -----------------------------------------------------------------------------
/*
 * UUIDs must be wrapped in quotes.
 * They uniquely identify a row.
 */

//! UPDATE users
//! SET email = 'newemail@gmail.com'
//! WHERE id = 'uuid-goes-here';

// -----------------------------------------------------------------------------
// ? UPDATE WITH A CONDITION
// -----------------------------------------------------------------------------
/*
 * Update rows that match a condition.
 */

// UPDATE users
// SET phone = '08000000000'
// WHERE email LIKE '%@gmail.com';

// -----------------------------------------------------------------------------
// * UPDATE AND RETURN THE UPDATED ROW
// -----------------------------------------------------------------------------
/*
 * RETURNING is extremely useful.
 * It shows what was changed.
 */

// UPDATE users
// SET full_name = 'Mubarak M.'
// WHERE email = 'oyindamola850@gmail.com'
// RETURNING id, full_name, updated_at;

// -----------------------------------------------------------------------------
// ! UPDATE ALL ROWS (DANGEROUS)
// -----------------------------------------------------------------------------
/*
 * This updates EVERY row in the table.
 * Only do this intentionally.
 */

//! UPDATE users
//! SET active = false;

// -----------------------------------------------------------------------------
// 🧪 SAFE PRACTICE PATTERN
// -----------------------------------------------------------------------------
/*
 * 1. Run SELECT first
 * 2. Confirm rows
 * 3. Run UPDATE with same WHERE
 */

// SELECT *
// FROM users
// WHERE email = 'oyindamola850@gmail.com';

// UPDATE users
// SET phone = '09035448029'
// WHERE email = 'oyindamola850@gmail.com';
