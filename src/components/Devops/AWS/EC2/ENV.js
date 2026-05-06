// =============================================================================
// 🚀 FRONTEND vs BACKEND ENV VARIABLES — COMPLETE GUIDE
// =============================================================================


// -----------------------------------------------------------------------------
// ! PHASE 1 — UNDERSTAND THE CORE DIFFERENCE
// -----------------------------------------------------------------------------

/*
 * BACKEND (Node.js, IIS, APIs)
 *
 * ✔ Runs as a PROCESS on a server
 * ✔ Always "alive" (PM2, IIS, Docker)
 * ✔ Can read environment variables at runtime
 *
 *
 * FRONTEND (React / Angular)
 *
 * ✔ Built into static files (HTML, JS, CSS)
 * ✔ Served by Nginx (no process running)
 * ✔ Runs in the browser (user's device)
 *
 *
 * 🎯 KEY DIFFERENCE:
 *
 * Backend = Runtime environment
 * Frontend = Build-time environment
 */


// -----------------------------------------------------------------------------
// ! PHASE 2 — HOW BACKEND ENV VARIABLES WORK
// -----------------------------------------------------------------------------

/*
 * Example (.env):
 *
 * PORT=3000
 * DB_URL=mongodb://...
 * JWT_SECRET=mysecret
 *
 *
 * When backend starts:
 *
 * node app.js
 *
 * OR:
 *
 * pm2 start app.js
 *
 *
 * ✔ Node reads .env at runtime
 * ✔ Variables stay on server (secure)
 * ✔ Can change without rebuilding app
 *
 *
 * 🎯 RESULT:
 *
 * Backend can safely use secrets
 */


// -----------------------------------------------------------------------------
// ! PHASE 3 — HOW FRONTEND ENV VARIABLES WORK
// -----------------------------------------------------------------------------

/*
 * React example:
 *
 * REACT_APP_API_URL=https://api.myapp.com
 *
 *
 * Angular example:
 *
 * environment.ts
 *
 * export const environment = {
 *   apiUrl: 'https://api.myapp.com'
 * };
 *
 *
 * Then you run:
 *
 * npm run build
 * OR
 * ng build
 *
 *
 * ✔ Variables are injected during build
 * ✔ They become part of JavaScript bundle
 *
 *
 * Example output (compiled JS):
 *
 * const apiUrl = "https://api.myapp.com";
 *
 *
 * 🎯 RESULT:
 *
 * Frontend env is STATIC after build
 */


// -----------------------------------------------------------------------------
// ! PHASE 4 — WHY .ENV DOES NOT WORK ON FRONTEND SERVERS
// -----------------------------------------------------------------------------

/*
 * You tried:
 *
 * nano .env
 *
 * Expecting:
 * Nginx → reads .env ❌
 *
 *
 * Reality:
 *
 * ✔ Nginx only serves files
 * ✔ It does NOT execute JavaScript
 * ✔ It does NOT read .env
 *
 *
 * 🎯 KEY POINT:
 *
 * There is NO runtime environment for frontend
 */


// -----------------------------------------------------------------------------
// ! PHASE 5 — SECURITY MODEL (VERY IMPORTANT)
// -----------------------------------------------------------------------------

/*
 * Backend:
 *
 * ✔ Hidden from users
 * ✔ Can store secrets safely
 *
 *
 * Frontend:
 *
 * ❌ Runs in browser
 * ❌ Anyone can inspect code
 *
 *
 * Example:
 *
 * Open DevTools → Sources → your JS files
 *
 * You will see:
 *
 * const apiUrl = "https://api.myapp.com";
 *
 *
 * ❌ NEVER PUT:
 *
 * - Database passwords
 * - JWT secrets
 * - Private API keys
 *
 *
 * 🎯 RULE:
 *
 * Frontend env = PUBLIC ONLY
 */


// -----------------------------------------------------------------------------
// ! PHASE 6 — HOW YOUR CURRENT ARCHITECTURE HANDLES ENV
// -----------------------------------------------------------------------------

/*
 * Your setup:
 *
 * Browser
 *   ↓
 * Nginx (serves frontend)
 *   ↓
 * /api → Node backend (PM2)
 *
 *
 * ✔ Frontend uses:
 *
 * fetch("/api/blog")
 *
 *
 * ✔ Backend uses:
 *
 * process.env.DB_URL
 * process.env.JWT_SECRET
 *
 *
 * 🎯 RESULT:
 *
 * Frontend stays simple
 * Backend handles sensitive logic
 */


// -----------------------------------------------------------------------------
// ! PHASE 7 — COMMON MISTAKES (YOU MUST AVOID)
// -----------------------------------------------------------------------------

/*
 * ❌ Trying to use .env with Nginx
 * ❌ Expecting frontend to "read env at runtime"
 * ❌ Putting secrets in frontend
 * ❌ Using full backend URL instead of /api
 *
 *
 * ✔ Correct approach:
 *
 * Frontend:
 * fetch("/api/...")
 *
 * Backend:
 * process.env.SECRET
 */


// -----------------------------------------------------------------------------
// ! PHASE 8 — WHEN FRONTEND ENV IS ACTUALLY USED
// -----------------------------------------------------------------------------

/*
 * Valid use cases:
 *
 * ✔ API base URL
 * ✔ Feature flags
 * ✔ Public config values
 *
 *
 * Example:
 *
 * apiUrl = "/api"
 *
 *
 * 🎯 Best practice (what you’re doing now):
 *
 * Use relative path → Nginx handles routing
 */


// -----------------------------------------------------------------------------
// ! PHASE 9 — ADVANCED (RUNTIME ENV FOR FRONTEND)
// -----------------------------------------------------------------------------

/*
 * If you REALLY need runtime env:
 *
 * Option 1:
 * Generate env.js file dynamically
 *
 * Option 2:
 * Use Docker + env injection
 *
 * Option 3:
 * Nginx template replacement
 *
 *
 * ❗ This is advanced DevOps — not needed yet
 */


// -----------------------------------------------------------------------------
// 🧠 FINAL UNDERSTANDING
// -----------------------------------------------------------------------------

/*
 * BACKEND:
 *
 * ✔ Runs continuously
 * ✔ Uses .env at runtime
 * ✔ Secure
 *
 *
 * FRONTEND:
 *
 * ✔ Built once
 * ✔ Static files
 * ✔ Env baked into build
 *
 *
 * 🎯 FINAL RULE:
 *
 * Backend = Dynamic + Secure
 * Frontend = Static + Public
 */