/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


// !🔐 HASHING vs ENCRYPTION vs ENCODING
// Core concepts every senior engineer must understand (security + data handling)

// ==========================================================
// !🔹 1. PROBLEM WE ARE SOLVING
// ==========================================================

// We want to handle data securely and efficiently:

// - Protect passwords           → Hashing
// - Protect sensitive data      → Encryption
// - Transfer/store safely       → Encoding

// ==========================================================
// !🔹 2. HASHING (ONE-WAY TRANSFORMATION)
// ==========================================================

// ? What is Hashing?
// Hashing converts data into a fixed-length string that CANNOT be reversed.

// * 1 — Key Characteristics
// - One-way (irreversible)
// - Same input → same output
// - Small change → completely different output
// - Used mainly for password storage

// * 2 — Example

const password = "mypassword123";

// Using bcrypt (Node.js)
const bcrypt = require("bcrypt");

async function hashPassword() {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  console.log("Hashed Password:", hash);
}

// * 3 — Password Verification

async function verifyPassword(inputPassword, storedHash) {
  const isMatch = await bcrypt.compare(inputPassword, storedHash);
  console.log("Password Match:", isMatch);
}

// * 4 — Real Use Case
// - User signs up → password is hashed and stored
// - User logs in → input password is hashed again → compared

// * 5 — Common Algorithms
// - bcrypt  ✅ (recommended)
// - argon2  ✅ (strongest modern option)
// - sha256  ⚠️ (too fast → not ideal alone for passwords)

// ⚠️ IMPORTANT
// Hashing is NOT encryption
// You CANNOT get original data back

// ==========================================================
// !🔹 3. ENCRYPTION (TWO-WAY TRANSFORMATION)
// ==========================================================

// ? What is Encryption?
// Encryption converts data into unreadable format BUT can be reversed using a key.

// * 1 — Key Characteristics
// - Two-way (reversible)
// - Requires a key (secret key)
// - Used for sensitive data (e.g., bank details, tokens)

// * 2 — Types of Encryption

// Symmetric Encryption (same key for encrypt/decrypt)
const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

// * 3 — Real Use Case
// - Encrypt card details before storing
// - Decrypt when needed (secure environment)

// * 4 — Other Types
// - Asymmetric Encryption (public/private key)
//   Example: RSA (used in HTTPS, SSL/TLS)

// ⚠️ IMPORTANT
// If someone gets your key → your data is compromised

// ==========================================================
// !🔹 4. ENCODING (REVERSIBLE TRANSFORMATION)
// ==========================================================

// ? What is Encoding?
// Encoding transforms data into another format for transport/storage.
// It is NOT for security.

// * 1 — Key Characteristics
// - Reversible (no key needed)
// - Used for data transmission
// - NOT secure

// * 2 — Example (Base64)

const data = "Hello World";

// Encode
const encoded = Buffer.from(data).toString("base64");
console.log("Encoded:", encoded);

// Decode
const decoded = Buffer.from(encoded, "base64").toString("utf8");
console.log("Decoded:", decoded);

// * 3 — Real Use Case
// - Sending images in APIs
// - Embedding data in URLs
// - JWT structure (header.payload.signature)

// ⚠️ IMPORTANT
// Base64 is NOT encryption
// Anyone can decode it easily

// ==========================================================
// !🔹 5. QUICK COMPARISON (INTERVIEW GOLD)
// ==========================================================

// Hashing:
// - One-way
// - Used for passwords
// - Cannot be reversed

// Encryption:
// - Two-way
// - Used for sensitive data
// - Requires a key

// Encoding:
// - Reversible
// - Used for data formatting
// - No security

// ==========================================================
// !🔹 6. SENIOR-LEVEL INSIGHT
// ==========================================================

// ✔ Never store passwords with encryption → use hashing
// ✔ Never rely on encoding for security
// ✔ Always manage encryption keys securely (env variables, vaults)
// ✔ Combine hashing + salting for stronger security

// Example:
// bcrypt automatically adds salt → protects against rainbow table attacks

// ==========================================================
// !🔹 END
// ==========================================================