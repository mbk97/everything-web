// =============================================================================
// 🧠 WHERE (FILTER ROWS SAFELY AND PRECISELY)
// =============================================================================

// -----------------------------------------------------------------------------
// ! HIGH-LEVEL CONCEPT
// -----------------------------------------------------------------------------
/*
 * WHERE is used to FILTER rows.
 *
 * It tells SQL:
 * "Only act on rows that meet this condition."
 *
 * Used with:
 * - SELECT
 * - UPDATE
 * - DELETE
 *
 * ⚠️ Without WHERE, ALL rows are affected.
 */

// -----------------------------------------------------------------------------
// ? BASIC WHERE
// -----------------------------------------------------------------------------
/*
 * Match rows using a column value.
 */

// SELECT *
// FROM users
// WHERE email = 'oyindamola850@gmail.com';

// -----------------------------------------------------------------------------
// * WHERE WITH PRIMARY KEY
// -----------------------------------------------------------------------------
/*
 * Primary keys return ONE row.
 * This is the safest WHERE condition.
 */

// SELECT *
// FROM users
// WHERE id = '88d1aeb1-415a-4413-b94e-8775191573aa';

// -----------------------------------------------------------------------------
// ! WHERE WITH MULTIPLE CONDITIONS
// -----------------------------------------------------------------------------
/*
 * Combine conditions using AND / OR.
 */

// SELECT *
// FROM users
// WHERE email = 'oyindamola850@gmail.com'
//   AND phone_number = '09035448029';

// SELECT *
// FROM users
// WHERE email = 'oyindamola850@gmail.com'
//   OR phone_number = '09035448029';

// -----------------------------------------------------------------------------
// ? WHERE WITH COMPARISON OPERATORS
// -----------------------------------------------------------------------------
/*
 * =   equal
 * !=  not equal
 * >   greater than
 * <   less than
 * >=  greater than or equal
 * <=  less than or equal
 */

// SELECT *
// FROM users
// WHERE created_at >= '2025-01-01';

// -----------------------------------------------------------------------------
// * WHERE WITH LIKE (PATTERN MATCHING)
// -----------------------------------------------------------------------------
/*
 * %  = any number of characters
 * _  = exactly one character
 */

// SELECT *
// FROM users
// WHERE email LIKE '%@gmail.com';

// -----------------------------------------------------------------------------
// ! WHERE WITH IN
// -----------------------------------------------------------------------------
/*
 * Match against multiple values.
 */

// SELECT *
// FROM users
// WHERE email IN (
//   'oyindamola850@gmail.com',
//   'mubarakolalekanmuhammed@gmail.com'
// );

// -----------------------------------------------------------------------------
// ? WHERE WITH BETWEEN
// -----------------------------------------------------------------------------
/*
 * Match values within a range (inclusive).
 */

// SELECT *
// FROM users
// WHERE created_at BETWEEN '2025-01-01' AND '2025-12-31';

// -----------------------------------------------------------------------------
// * WHERE WITH NULL (VERY IMPORTANT)
// -----------------------------------------------------------------------------
/*
 * NULL is NOT equal to anything.
 * Use IS NULL / IS NOT NULL.
 */

// SELECT *
// FROM users
// WHERE phone_number IS NULL;

// SELECT *
// FROM users
// WHERE phone_number IS NOT NULL;

// -----------------------------------------------------------------------------
// ! WHERE WITH BOOLEAN VALUES
// -----------------------------------------------------------------------------
/*
 * PostgreSQL uses TRUE / FALSE.
 */

// SELECT *
// FROM users
// WHERE active = true;

// -----------------------------------------------------------------------------
// 🧪 SAFE PRACTICE PATTERN
// -----------------------------------------------------------------------------
/*
 * Always preview rows before UPDATE or DELETE.
 */

// SELECT *
// FROM users
// WHERE email = 'oyindamola850@gmail.com';

// UPDATE users
// SET name = 'Updated Name'
// WHERE email = 'oyindamola850@gmail.com';
