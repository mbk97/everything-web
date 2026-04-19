/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/*
==========================================================
🧠 CODE QUALITY & CRAFT (MASTER FILE)
Clean Code • Testing • Code Review • Refactoring
Safe for Node.js / VS Code (no runtime errors)
==========================================================
*/


// ==========================================================
// 🔹 1. CLEAN CODE
// ==========================================================

/*
Goal:
Write code that is readable, maintainable, and scalable
*/


// ✅ Meaningful Naming

// ❌ Bad
const d = new Date();
const u = { name: "John" };

// ✅ Good
const currentDate = new Date();
const currentUser = { name: "John" };


// ✅ Small Functions

function processUser(user) {
  validateUser(user);
  persistUser(user);
  notifyUser(user);
  auditUserAction(user);
}


// Dummy helpers (safe placeholders)
function validateUser() {}
function persistUser() {}
function notifyUser() {}
function auditUserAction() {}


// ✅ Avoid Side Effects

let total = 0;

// ❌ Bad
function add(price) {
  total += price;
}

// ✅ Good
function calculateTotal(currentTotal, price) {
  return currentTotal + price;
}


// ✅ DRY vs WET

// ❌ Over-abstracted
function handle(type, data) {
  if (type === "a") {}
  if (type === "b") {}
}

// ✅ Clear
function handlePayment(data) {}
function handleTransfer(data) {}


// ==========================================================
// 🔹 2. TESTING
// ==========================================================

/*
Goal:
- Confidence in code
- Safe refactoring
- Prevent regressions
*/


// Unit Test Example (commented for safety)

/*
function sum(a, b) {
  return a + b;
}

test("adds numbers", () => {
  expect(sum(2, 3)).toBe(5);
});
*/


// Integration Example

async function getUserHandler(req, res) {
  const user = await fakeDb();
  res.json(user);
}


// React Test Example (commented)

/*
function Button({ onClick }) {
  return <button onClick={onClick}>Click</button>;
}
*/


// Fake DB
async function fakeDb() {
  return { id: 1, name: "User" };
}


// ==========================================================
// 🔹 3. CODE REVIEW (MASTER LEVEL)
// ==========================================================

/*
Goal:
- Catch issues early
- Improve code quality
- Ensure scalability & security
*/


// ==========================================================
// 🔸 Review Layers
// ==========================================================

/*
1. Correctness
2. Readability
3. Design
4. Scalability
5. Security
6. Performance
7. Testing
*/


// ==========================================================
// 🔸 Example: Correctness
// ==========================================================

async function getUsersHandler(req, res) {
  try {
    const users = await fakeDb();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
}


// ==========================================================
// 🔸 Example: Readability
// ==========================================================

const users = [
  { isActive: true, isVerified: true, email: "a@test.com" },
];

// ❌ Bad
const bad = users.filter(u => u.isActive && u.isVerified).map(x => x.email);

// ✅ Good
const activeUsers = users
  .filter(user => user.isActive && user.isVerified)
  .map(user => user.email);


// ==========================================================
// 🔸 Example: Performance
// ==========================================================

async function processSequential(items) {
  for (let i = 0; i < items.length; i++) {
    await fakeProcess(items[i]);
  }
}

async function processParallel(items) {
  await Promise.all(items.map(fakeProcess));
}

async function fakeProcess(item) {
  return item;
}


// ==========================================================
// 🔸 Example: Security
// ==========================================================

// ❌ Vulnerable
function unsafeQuery(id) {
  return `SELECT * FROM users WHERE id = ${id}`;
}

// ✅ Safe
function safeQuery(id) {
  return {
    query: "SELECT * FROM users WHERE id = ?",
    values: [id],
  };
}


// ==========================================================
// 🔸 HOW TO GIVE GREAT FEEDBACK (FULL)
// ==========================================================

/*
Use this structure:

1. Observation
2. Impact
3. Suggestion
4. Collaboration
*/


// ❌ Bad Feedback
"this is wrong"
"fix this"

// ✅ Good Feedback Example

/*
"I noticed we're filtering users in memory.
This could become slow as data grows.
We could move this logic to the database query.
What do you think?"
*/


// ==========================================================
// 🔸 TYPES OF FEEDBACK
// ==========================================================

// Clarifying
/*
"Can you explain why we chose this approach?"
*/

// Improvement
/*
"We could extract this into a reusable function."
*/

// Risk
/*
"This may cause race conditions."  A race condition occurs when the behavior of a program depends on the relative timing or ordering of concurrent operations (threads, processes, or async tasks), and that timing is unpredictable. 


The Core Problem
Two or more operations "race" to access or modify shared state, and the final result depends on which one wins — producing incorrect or inconsistent outcomes.


let balance = 100;

*  Two async operations run "simultaneously"
async function withdraw(amount) {
  const current = await getBalance(); // reads 100
  await setBalance(current - amount); // writes back
}

withdraw(30); // reads 100, writes 70
withdraw(50); // also reads 100 (before first write!), writes 50

*  Final balance: 50 — but should be 20!


! Common Scenarios
Scenario	Example
Check-then-act	Check if file exists, then create it — another process creates it in between
Read-modify-write	Two threads increment a counter simultaneously
Async callbacks	Multiple requests update the same state without coordination
UI updates	Two API calls racing to update the same component state


! How to Prevent Them 
Locks / Mutexes — only one operation accesses the resource at a time
Atomic operations — read + write as a single indivisible operation
Immutable state — avoid shared mutable state entirely
Message passing — communicate by passing data, not sharing it (e.g., Go channels)
Transaction isolation — database transactions with proper isolation levels
useReducer / state machines — in React, batch state updates atomically


 * Race conditions are dangerous because they're non-deterministic — they may only manifest under specific timing conditions, making them hard to reproduce and debug. They often work fine in development but fail under load in production.

*/

// Edge Case
/*
"What happens if input is null?"
*/

// Testing
/*
"Can we add a test for this?"
*/


// ==========================================================
// 🔸 Tone Matters
// ==========================================================

// ❌ "This is bad"
// ✅ "This works, but we can improve it by..."


// ==========================================================
// 🔸 When to Be Direct
// ==========================================================

/*
"This must be fixed before merging — it introduces a security risk."
*/


// ==========================================================
// 🔹 4. REFACTORING
// ==========================================================

/*
Goal:
Improve structure without changing behavior
Reduce tech debt
*/


// ❌ Before

async function loginBad(req, res) {
  const user = await findUser(req.email);

  if (!user) return res.status(404).send("Not found");

  if (req.password !== user.password) {
    return res.status(401).send("Invalid");
  }

  res.send(user);
}


// ✅ After

async function loginController(req, res) {
  const user = await findUser(req.email);
  if (!user) return handleNotFound(res);

  const valid = verifyPassword(req.password, user.password);
  if (!valid) return handleUnauthorized(res);

  return sendSuccess(res, user);
}


// Helpers

async function findUser() {
  return { password: "123" };
}

function verifyPassword(input, stored) {
  return input === stored;
}

function handleNotFound(res) {
  return res.status(404).send("Not found");
}

function handleUnauthorized(res) {
  return res.status(401).send("Invalid");
}

function sendSuccess(res, data) {
  return res.send(data);
}


// ==========================================================
// 🌿 Strangler Pattern
// ==========================================================

function paymentHandler(req, res) {
  const useNew = true;

  if (useNew) return newHandler(req, res);
  return oldHandler(req, res);
}

function newHandler() {
  return "new system";
}

function oldHandler() {
  return "old system";
}


// ==========================================================
// 🔥 FINAL TAKEAWAY
// ==========================================================

/*
Clean Code → Communication
Testing → Confidence
Code Review → Protection
Refactoring → Evolution

Senior Engineers:
- Think long-term
- Optimize for teams
- Build scalable systems
*/