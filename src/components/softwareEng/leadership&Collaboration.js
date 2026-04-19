/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

/*
==========================================================
🧠 LEADERSHIP & COLLABORATION (MASTER FILE)
Technical Leadership • Communication • Ownership • Incidents
Safe for Node.js / VS Code
==========================================================
*/


// ==========================================================
// 🔹 1. TECHNICAL LEADERSHIP
// ==========================================================

/*
Goal:
- Guide architecture decisions
- Improve team standards
- Mentor engineers
- Ensure scalable systems
*/


// ----------------------------------------------------------
// 🧠 1. Driving Architecture Decisions
// ----------------------------------------------------------

/*
Problem:
Unstructured code leads to duplication, bugs, and poor scalability
*/


// ❌ Bad (no structure, scattered logic)
function fetchUsersBad() {
    fetch("/api/users").then(res => res.json());
  }
  
  
  // ✅ Good (structured architecture)
  
  // API layer
  async function getUsers() {
    return Promise.resolve([{ id: 1, name: "User" }]);
  }
  
  // Hook-like pattern (Node-safe simulation)
  async function useUsers() {
    const users = await getUsers();
    return users;
  }
  
  
  /*
  Senior Insight:
  You define patterns that others follow — not just write code
  */
  
  
  // ----------------------------------------------------------
  // 🧠 2. Writing RFCs / Design Docs
  // ----------------------------------------------------------
  
  /*
  Before coding → think, document, align
  */
  
  
  /*
  Example RFC:
  
  Title: Centralized API Layer
  
  Problem:
  Multiple components call APIs directly → duplication
  
  Solution:
  Introduce reusable API services
  
  Benefits:
  - Reusability
  - Easier testing
  - Cleaner architecture
  
  Risks:
  - Initial refactor effort
  
  Rollout:
  - Start small
  - Expand gradually
  */
  
  
  // ----------------------------------------------------------
  // 🧠 3. Mentoring Engineers
  // ----------------------------------------------------------
  
  /*
  Goal:
  Teach thinking, not just solutions
  */
  
  
  // Example
  
  function doubleValues(data) {
    return data.map(d => d * 2);
  }
  
  /*
  Mentorship feedback:
  "This works — what happens if data is null or undefined?"
  */
  
  
  // ----------------------------------------------------------
  // 🧠 4. Raising the Bar
  // ----------------------------------------------------------
  
  /*
  You improve:
  - Code quality
  - Testing culture
  - Review standards
  - Architecture consistency
  */
  
  
  // ==========================================================
  // 🔹 2. COMMUNICATION
  // ==========================================================
  
  /*
  Goal:
  Make complex things simple for everyone
  */
  
  
  // ----------------------------------------------------------
  // 🧠 1. Translating Technical → Non-Technical
  // ----------------------------------------------------------
  
  /*
  ❌ Bad:
  "We refactored state management"
  
  ✅ Good:
  "We improved how data flows in the app, making it faster and reducing bugs"
  */
  
  
  // ----------------------------------------------------------
  // 🧠 2. Writing Clear Tickets
  // ----------------------------------------------------------
  
  /*
  ❌ Bad:
  "Fix login issue"
  
  ✅ Good:
  
  Issue:
  Users cannot log in with special characters
  
  Steps:
  1. Enter email
  2. Enter password with special characters
  3. Submit
  
  Expected:
  Login should succeed
  
  Impact:
  Affects multiple users
  */
  
  
  // ----------------------------------------------------------
  // 🧠 3. Post-Mortem Communication
  // ----------------------------------------------------------
  
  /*
  ❌ Blaming:
  "Developer forgot validation"
  
  ✅ Blameless:
  "The system lacked input validation checks"
  */
  
  
  // ==========================================================
  // 🔹 3. PROJECT OWNERSHIP
  // ==========================================================
  
  /*
  Goal:
  Deliver outcomes — not just code
  */
  
  
  // ----------------------------------------------------------
  // 🧠 1. Estimation
  // ----------------------------------------------------------
  
  /*
  ❌ Bad:
  "This will take 2 days"
  
  ✅ Good:
  "This will take 3–5 days depending on API readiness"
  */
  
  
  // ----------------------------------------------------------
  // 🧠 2. Scope Management
  // ----------------------------------------------------------
  
  /*
  Client:
  "Add notifications"
  
  You:
  "We can include that, but it will extend the timeline by 2 days.
  Should we include it now or later?"
  */
  
  
  // ----------------------------------------------------------
  // 🧠 3. Risk Management
  // ----------------------------------------------------------
  
  async function fetchDataSafe() {
    try {
      return await fakeApi();
    } catch (error) {
      return []; // fallback
    }
  }
  
  async function fakeApi() {
    return ["data"];
  }
  
  
  /*
  Risks to always consider:
  - API failures
  - Invalid data
  - Performance issues
  */
  
  
  // ----------------------------------------------------------
  // 🧠 4. End-to-End Ownership
  // ----------------------------------------------------------
  
  /*
  You own:
  - Backend logic
  - Frontend experience
  - Edge cases
  - Deployment readiness
  */
  
  
  // ==========================================================
  // 🔹 4. INCIDENT RESPONSE
  // ==========================================================
  
  /*
  Goal:
  Handle failures calmly and effectively
  */
  
  
  // ----------------------------------------------------------
  // 🚨 1. Incident Flow
  // ----------------------------------------------------------
  
  /*
  1. Identify issue
  2. Contain impact
  3. Fix root cause
  4. Monitor system
  */
  
  
  // ----------------------------------------------------------
  // 🧠 2. Communication During Incident
  // ----------------------------------------------------------
  
  /*
  ❌ Bad:
  "System is down"
  
  ✅ Good:
  "We are experiencing delays in payment processing.
  The team is investigating and will provide updates every 15 minutes."
  */
  
  
  // ----------------------------------------------------------
  // 🧠 3. Blameless Post-Mortem
  // ----------------------------------------------------------
  
  /*
  Incident:
  Payment failures for 30 minutes
  
  Root Cause:
  Unhandled API timeout
  
  Impact:
  20% of transactions failed
  
  What Went Well:
  Fast detection
  
  What Didn’t:
  No retry mechanism
  
  Action Items:
  - Add retry logic
  - Improve monitoring
  */
  
  
  // ----------------------------------------------------------
  // 🧠 4. Follow-Up Actions (VERY IMPORTANT)
  // ----------------------------------------------------------
  
  async function fetchWithRetry(fn, retries = 3) {
    try {
      return await fn();
    } catch (err) {
      if (retries === 0) throw err;
      return fetchWithRetry(fn, retries - 1);
    }
  }
  
  
  /*
  Improvements after incidents:
  - Add logging
  - Add alerts
  - Add retries
  - Improve system resilience
  */
  
  
  // ==========================================================
  // 🔥 FINAL TAKEAWAY
  // ==========================================================
  
  /*
  Technical Leadership → Guide systems
  Communication → Align people
  Ownership → Deliver outcomes
  Incident Response → Handle failure
  
  Senior Engineers:
  - Think beyond code
  - Lead people and systems
  - Optimize for long-term success
  */
  
  
  // ==========================================================
  // 🚀 FINAL MINDSET SHIFT
  // ==========================================================
  
  /*
  From:
  "I write code"
  
  To:
  "I lead systems, teams, and outcomes"
  */