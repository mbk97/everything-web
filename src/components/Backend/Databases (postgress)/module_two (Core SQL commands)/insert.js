// =============================================================================
// 🧠 INSERT (ADD NEW DATA)
// =============================================================================

// -----------------------------------------------------------------------------
// ! HIGH-LEVEL CONCEPT
// -----------------------------------------------------------------------------
/*
 * INSERT adds new rows into a table.
 *
 * Each INSERT creates ONE or MORE rows.
 */

// -----------------------------------------------------------------------------
// ? INSERT SINGLE ROW
// -----------------------------------------------------------------------------
/*
 * Always specify column names.
 */

//! INSERT INTO users (email)
//! VALUES("test@example.com");

// -----------------------------------------------------------------------------
// * INSERT AND RETURN DATA
// -----------------------------------------------------------------------------
/*
 * RETURNING is PostgreSQL-specific and very powerful.
 */

//! INSERT INTO users (email)
//! VALUES("admin@example.com");
//! RETURNING *;

// -----------------------------------------------------------------------------
// ! INSERT MULTIPLE ROWS
// -----------------------------------------------------------------------------
/*
 * Insert more than one row at once.
 */

//! INSERT INTO users (email)
//! VALUES
//!   ('a@example.com'),
// !  ('b@example.com'),
// !  ('c@example.com');

// change existing column data

// ALTER TABLE users
// ALTER COLUMN phone_number
// TYPE TEXT
// USING phone_number::TEXT;
