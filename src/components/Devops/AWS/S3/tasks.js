// -----------------------------------------------------------------------------  
// ! PHASE 1 — FUNDAMENTALS (MUST MASTER)  
// -----------------------------------------------------------------------------

/*
 * TASK 1: Basic React Deployment
 *
 * Do:
 * - Create S3 bucket
 * - Upload React build
 * - Enable static hosting
 * - Make bucket public
 *
 * Goal:
 * 👉 Your app loads via S3 URL
 *
 * 🎯 Skill:
 * Understand basic hosting flow
 */


/*
 * TASK 2: Break & Fix Permissions
 *
 * Do:
 * - Remove bucket policy
 * - Try accessing app
 * - Fix it again
 *
 * Goal:
 * 👉 Understand "Access Denied"
 *
 * 🎯 Skill:
 * Debug S3 permission issues
 */


/*
 * TASK 3: Upload Wrong Structure (ON PURPOSE)
 *
 * Do:
 * - Upload the "dist" folder itself
 *
 * Observe:
 * - App breaks
 *
 * Fix:
 * - Upload contents instead
 *
 * 🎯 Skill:
 * Understand S3 file structure
 */


// -----------------------------------------------------------------------------  
// ! PHASE 2 — PATH & BUILD UNDERSTANDING  
// -----------------------------------------------------------------------------

/*
 * TASK 4: Root vs Subpath Deployment
 *
 * Do:
 *
 * Case A:
 * - base: '/'
 * - Deploy at root
 *
 * Case B:
 * - base: '/react/'
 * - Deploy inside /react/
 *
 * Goal:
 * 👉 Make BOTH work
 *
 * 🎯 Skill:
 * Path management (very important)
 */


/*
 * TASK 5: Break CSS Loading
 *
 * Do:
 * - Set wrong base path
 *
 * Observe:
 * - App loads without styling
 *
 * Fix:
 * - Correct base
 *
 * 🎯 Skill:
 * Debug frontend deployment issues
 */


// -----------------------------------------------------------------------------  
// ! PHASE 3 — CLOUDFRONT INTEGRATION  
// -----------------------------------------------------------------------------

/*
 * TASK 6: Add CloudFront
 *
 * Do:
 * - Create distribution
 * - Connect to S3
 *
 * Goal:
 * 👉 App loads via HTTPS
 *
 * 🎯 Skill:
 * Understand S3 + CDN architecture
 */


/*
 * TASK 7: Break Origin (IMPORTANT)
 *
 * Do:
 * - Use wrong origin:
 *   s3.amazonaws.com
 *
 * Observe:
 * - App downloads instead of rendering
 *
 * Fix:
 * - Use website endpoint
 *
 * 🎯 Skill:
 * Understand S3 endpoints deeply
 */


/*
 * TASK 8: Origin Path Bug
 *
 * Do:
 * - Set origin path = /react
 * - Visit /react/
 *
 * Observe:
 * - 404 react/react/index.html
 *
 * Fix:
 * - Remove origin path
 *
 * 🎯 Skill:
 * Understand request path flow
 */


// -----------------------------------------------------------------------------  
// ! PHASE 4 — PRODUCTION DEBUGGING  
// -----------------------------------------------------------------------------

/*
 * TASK 9: Fix SPA Routing
 *
 * Do:
 * - Visit:
 *   /dashboard
 *
 * Observe:
 * - 404 error
 *
 * Fix:
 * - Add CloudFront error mapping
 *
 * 🎯 Skill:
 * Handle React Router in production
 */


/*
 * TASK 10: Cache Issue (VERY IMPORTANT)
 *
 * Do:
 * - Update your app
 * - Re-upload files
 *
 * Observe:
 * - Old version still shows
 *
 * Fix:
 * - Create invalidation /*
 *
 * 🎯 Skill:
 * Understand CDN caching
 */


/*
 * TASK 11: Break Default Root Object
 *
 * Do:
 * - Remove index.html from settings
 *
 * Observe:
 * - Blank page / error
 *
 * Fix:
 * - Set it back
 *
 * 🎯 Skill:
 * Debug CloudFront entry issues
 */


// -----------------------------------------------------------------------------  
// ! PHASE 5 — REAL-WORLD ARCHITECTURE  
// -----------------------------------------------------------------------------

/*
 * TASK 12: Multi-App Hosting
 *
 * Do:
 * - Deploy:
 *   /react/
 *   /admin/
 *   /landing/
 *
 * Goal:
 * 👉 All apps work in one bucket
 *
 * 🎯 Skill:
 * Structure scalable frontend hosting
 */


/*
 * TASK 13: Secure Upload System
 *
 * Do:
 * - Create backend endpoint
 * - Generate pre-signed URL
 * - Upload file from frontend
 *
 * Goal:
 * 👉 Upload without exposing bucket
 *
 * 🎯 Skill:
 * Real production file upload flow
 */


/*
 * TASK 14: Lifecycle Rule
 *
 * Do:
 * - Move files to Glacier after 30 days
 *
 * 🎯 Skill:
 * Cost optimization
 */


/*
 * TASK 15: Versioning
 *
 * Do:
 * - Enable versioning
 * - Upload multiple versions
 *
 * 🎯 Skill:
 * Rollback & file history
 */


// -----------------------------------------------------------------------------  
// ! PHASE 6 — ADVANCED (THIS MAKES YOU STAND OUT)  
// -----------------------------------------------------------------------------

/*
 * TASK 16: Custom Domain (PRO LEVEL)
 *
 * Do:
 * - Buy domain
 * - Connect to CloudFront
 * - Add SSL
 *
 * Goal:
 * 👉 https://yourdomain.com
 *
 * 🎯 Skill:
 * Production deployment
 */


/*
 * TASK 17: CI/CD Deployment
 *
 * Do:
 * - Use GitHub Actions
 * - Auto deploy to S3 on push
 *
 * 🎯 Skill:
 * DevOps automation
 */


/*
 * TASK 18: Logging & Monitoring
 *
 * Do:
 * - Enable S3 access logs
 * - Enable CloudFront logs
 *
 * 🎯 Skill:
 * Observability
 */


// -----------------------------------------------------------------------------  
// 🧠 FINAL CHALLENGE  
// -----------------------------------------------------------------------------

/*
 * TASK 19: FULL SYSTEM (REAL PROJECT)
 *
 * Build:
 *
 * - React app → S3
 * - CloudFront → HTTPS
 * - Node API → EC2
 * - Upload images → S3 (pre-signed URL)
 *
 * 🎯 Goal:
 * Full production architecture
 */


/*
 * TASK 20: DEBUG WITHOUT HELP
 *
 * Break things intentionally:
 *
 * - Wrong base
 * - Wrong policy
 * - Wrong origin
 *
 * Fix EVERYTHING yourself
 *
 * 🎯 Skill:
 * Real engineering confidence
 */