// =============================================================================
// 🧠 NAMING CONVENTIONS (POSTGRESQL DATABASE DESIGN)
// =============================================================================

// -----------------------------------------------------------------------------
// ! HIGH-LEVEL CONCEPT
// -----------------------------------------------------------------------------
/*
 * Naming conventions define HOW database objects are named.
 *
 * Good naming:
 * - Makes SQL predictable
 * - Avoids quoting issues
 * - Scales across teams and services
 *
 * Bad naming:
 * - Forces double quotes
 * - Creates confusion
 * - Causes long-term maintenance pain
 */

// -----------------------------------------------------------------------------
// ? GOLDEN RULE (DO NOT BREAK THIS)
// -----------------------------------------------------------------------------
/*
 * ALWAYS use:
 * - lowercase
 * - snake_case
 *
 * PostgreSQL folds unquoted identifiers to lowercase.
 * Using CamelCase forces "QuotedIdentifiers" forever.
 */

// -----------------------------------------------------------------------------
// * DATABASE NAMING
// -----------------------------------------------------------------------------
/*
 * Databases are top-level containers.
 *
 * Use:
 * - lowercase
 * - snake_case
 * - descriptive names
 *
 * Examples:
 * - app_db
 * - auth_service_db
 * - analytics_db
 */

// -----------------------------------------------------------------------------
// ! SCHEMA NAMING
// -----------------------------------------------------------------------------
/*
 * Schemas are logical namespaces inside a database.
 *
 * Use:
 * - lowercase
 * - snake_case
 * - domain-based naming
 *
 * Examples:
 * - public
 * - auth
 * - billing
 * - analytics
 */

// -----------------------------------------------------------------------------
// ? TABLE NAMING (PLURAL NOUNS)
// -----------------------------------------------------------------------------
/*
 * Tables represent collections of records.
 *
 * Use:
 * - plural nouns
 * - snake_case
 *
 * Examples:
 * - users
 * - posts
 * - order_items
 * - user_sessions
 */

// -----------------------------------------------------------------------------
// * COLUMN NAMING (SINGULAR ATTRIBUTES)
// -----------------------------------------------------------------------------
/*
 * Columns represent a single attribute of a record.
 *
 * Use:
 * - snake_case
 * - descriptive names
 *
 * Examples:
 * - id
 * - email
 * - password_hash
 * - created_at
 * - updated_at
 * - deleted_at
 */

// -----------------------------------------------------------------------------
// ! PRIMARY KEY NAMING
// -----------------------------------------------------------------------------
/*
 * Primary keys should ALWAYS be named:
 * - id
 *
 * This keeps joins simple and predictable.
 *
 * Example:
 * - id BIGSERIAL PRIMARY KEY
 */

// -----------------------------------------------------------------------------
// ? FOREIGN KEY NAMING
// -----------------------------------------------------------------------------
/*
 * Foreign keys reference another table’s primary key.
 *
 * Format:
 * - <referenced_table>_id
 *
 * Examples:
 * - user_id
 * - post_id
 * - order_id
 */

// -----------------------------------------------------------------------------
// * CONSTRAINT NAMING
// -----------------------------------------------------------------------------
/*
 * Constraints SHOULD be explicitly named.
 *
 * Format:
 * - <table>_<column>_<constraint_type>
 *
 * Examples:
 * - users_email_unique
 * - posts_user_id_fkey
 * - orders_total_check
 */

// -----------------------------------------------------------------------------
// ! INDEX NAMING
// -----------------------------------------------------------------------------
/*
 * Indexes should always be named.
 *
 * Format:
 * - <table>_<column>_idx
 *
 * Examples:
 * - users_email_idx
 * - posts_created_at_idx
 */

// -----------------------------------------------------------------------------
// ? JOIN TABLE NAMING (MANY-TO-MANY)
// -----------------------------------------------------------------------------
/*
 * Join tables connect two entities.
 *
 * Rules:
 * - plural names
 * - alphabetical order
 *
 * Examples:
 * - posts_tags
 * - users_roles
 * - students_courses
 */

// -----------------------------------------------------------------------------
// * BOOLEAN COLUMN NAMING
// -----------------------------------------------------------------------------
/*
 * Boolean columns should read like yes/no questions.
 *
 * Use prefixes:
 * - is_
 * - has_
 * - can_
 *
 * Examples:
 * - is_active
 * - has_verified_email
 * - can_comment
 */

// -----------------------------------------------------------------------------
// ! TIMESTAMP COLUMN STANDARD
// -----------------------------------------------------------------------------
/*
 * Use a consistent timestamp vocabulary.
 *
 * Standard names:
 * - created_at
 * - updated_at
 * - deleted_at   (for soft deletes)
 */

// -----------------------------------------------------------------------------
// ? ENUM TYPE NAMING
// -----------------------------------------------------------------------------
/*
 * Enum types should be:
 * - singular
 * - snake_case
 *
 * Examples:
 * - order_status
 * - payment_method
 *
 * Enum values:
 * - pending
 * - completed
 * - failed
 */

// -----------------------------------------------------------------------------
// ! QUOTED IDENTIFIERS (AVOID COMPLETELY)
// -----------------------------------------------------------------------------
/*
 * If you ever need double quotes for identifiers,
 * the name is already wrong.
 *
 * Example of what to avoid:
 * - "UserEmail"
 *
 * This forces quoting forever and breaks tooling.
 */

// -----------------------------------------------------------------------------
// ? COMMON BEGINNER MISTAKES
// -----------------------------------------------------------------------------
/*
 * ❌ Using CamelCase identifiers
 * ❌ Singular table names
 * ❌ Inconsistent timestamp naming
 * ❌ Letting PostgreSQL auto-name constraints
 * ❌ Abbreviations that lose meaning
 */

// -----------------------------------------------------------------------------
// * ONE-LINE SENIOR SUMMARY
// -----------------------------------------------------------------------------
/*
 * PostgreSQL favors boring, predictable naming:
 * lowercase, snake_case, plural tables, and explicit constraints.
 */
