// -----------------------------------------------------------------------------  
// ! PHASE 0 — UNDERSTANDING THE ARCHITECTURE  
// -----------------------------------------------------------------------------

/*
 * QUESTION 0: What are we building?
 *
 * ANSWER:
 *
 * Browser → CloudFront (CDN + HTTPS)
 *            ↓
 *        S3 (Static files)
 *            ↓
 *        React App
 *
 * 🎯 Key Point:
 * - S3 = storage
 * - CloudFront = delivery + HTTPS
 */


// -----------------------------------------------------------------------------  
// ! PHASE 1 — PREPARE YOUR REACT APP (CRITICAL)  
// -----------------------------------------------------------------------------

/*
 * QUESTION 1: How should you configure Vite?
 *
 * ANSWER:
 *
 * OPTION A — ROOT DEPLOYMENT (RECOMMENDED)
 *
 * export default defineConfig({
 *   plugins: [react()],
 *   base: '/'
 * })
 *
 * ---
 *
 * OPTION B — SUBPATH DEPLOYMENT
 *
 * export default defineConfig({
 *   plugins: [react()],
 *   base: '/react/'
 * })
 *
 * 🎯 Key Point:
 * Your base MUST match your S3 + CloudFront path.
 */


/*
 * QUESTION 2: How do you build your app?
 *
 * ANSWER:
 *
 * npm run build
 *
 * Output:
 *
 * dist/
 *   index.html
 *   assets/
 *
 * 🎯 Key Point:
 * Only deploy the build output.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 2 — CREATE S3 BUCKET  
// -----------------------------------------------------------------------------

/*
 * QUESTION 3: How do you create the bucket?
 *
 * ANSWER:
 *
 * - Type: General purpose
 * - Name: lowercase + unique
 * - Region: same as backend (optional but good)
 *
 * Example:
 * mbk-demo-bucket
 *
 * 🎯 Key Point:
 * Bucket name becomes part of your URL.
 */


/*
 * QUESTION 4: Public access settings?
 *
 * ANSWER:
 *
 * ❌ Uncheck: Block all public access
 * ✅ Confirm warning
 *
 * 🎯 Key Point:
 * Without this → site will not load.
 */


/*
 * QUESTION 5: Other settings?
 *
 * ANSWER:
 *
 * - Object ownership: ACLs disabled ✅
 * - Versioning: optional
 * - Encryption: default
 *
 * 🎯 Key Point:
 * Defaults are fine.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 3 — UPLOAD YOUR APP  
// -----------------------------------------------------------------------------

/*
 * QUESTION 6: What exactly do you upload?
 *
 * ANSWER:
 *
 * ❌ WRONG:
 * dist/
 *
 * ✅ CORRECT:
 * contents INSIDE dist/
 *
 * Example:
 * index.html
 * assets/
 *
 * 🎯 Key Point:
 * index.html must be directly accessible.
 */


/*
 * QUESTION 7: Where do you upload?
 *
 * ANSWER:
 *
 * S3 → Bucket → Objects → Upload
 *
 * 🎯 Key Point:
 * Files must be in correct path structure.
 */


/*
 * QUESTION 8: Subpath deployment structure?
 *
 * ANSWER:
 *
 * If using base: '/react/'
 *
 * Then:
 *
 * react/
 *   index.html
 *   assets/
 *
 * 🎯 Key Point:
 * Folder name MUST match base.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 4 — ENABLE STATIC HOSTING  
// -----------------------------------------------------------------------------

/*
 * QUESTION 9: How do you enable hosting?
 *
 * ANSWER:
 *
 * S3 → Properties → Static website hosting
 *
 * Enable:
 * - index document: index.html
 * - error document: index.html
 *
 * 🎯 Key Point:
 * Required for SPA routing.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 5 — BUCKET POLICY (PUBLIC ACCESS)  
// -----------------------------------------------------------------------------

/*
 * QUESTION 10: How do you make files public?
 *
 * ANSWER:
 *
 * Permissions → Bucket policy:
 *
 * {
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Effect": "Allow",
 *       "Principal": "*",
 *       "Action": "s3:GetObject",
 *       "Resource": "arn:aws:s3:::YOUR-BUCKET/*" "Resource": "arn:aws:s3:::mbk-web-app-bucket/*"
 *     }
 *   ]
 * }
 *
 * 🎯 Key Point:
 * Required for browser access.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 6 — TEST S3 DIRECTLY  
// -----------------------------------------------------------------------------

/*
 * QUESTION 11: How do you test S3?
 *
 * ANSWER:
 *
 * Use:
 *
 * http://bucket.s3-website-region.amazonaws.com
 *
 * OR (subpath):
 *
 * http://bucket-url/react/
 *
 * 🎯 Key Point:
 * Confirm S3 works BEFORE CloudFront.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 7 — CREATE CLOUDFRONT DISTRIBUTION  
// -----------------------------------------------------------------------------

/*
 * QUESTION 12: Why CloudFront?
 *
 * ANSWER:
 *
 * ✔ HTTPS
 * ✔ Global CDN
 * ✔ Faster delivery
 * ✔ Production ready
 */


/*
 * QUESTION 13: How do you configure origin?
 *
 * ANSWER:
 *
 * Origin type: Amazon S3
 *
 * IMPORTANT:
 *
 * ✅ Use:
 * bucket.s3-website.eu-north-1.amazonaws.com
 *
 * ❌ NOT:
 * bucket.s3.amazonaws.com
 *
 * 🎯 Key Point:
 * Must use WEBSITE endpoint.
 */


/*
 * QUESTION 14: Origin path?
 *
 * ANSWER:
 *
 * ❌ Leave EMPTY
 *
 * 🎯 Key Point:
 * Avoid:
 * react/react/index.html error
 */


/*
 * QUESTION 15: Protocol policy?
 *
 * ANSWER:
 *
 * Origin protocol:
 * ✅ HTTP only
 *
 * 🎯 Key Point:
 * S3 website endpoint doesn’t support HTTPS.
 */


/*
 * QUESTION 16: Cache settings?
 *
 * ANSWER:
 *
 * ✅ Use recommended
 *
 * 🎯 Key Point:
 * Defaults are fine.
 */


/*
 * QUESTION 17: Security (WAF)?
 *
 * ANSWER:
 *
 * Skip for now
 */


// -----------------------------------------------------------------------------  
// ! PHASE 8 — IMPORTANT CLOUDFRONT SETTINGS (CRITICAL FIXES)  
// -----------------------------------------------------------------------------

/*
 * QUESTION 18: Default root object?
 *
 * ANSWER:
 *
 * Set:
 *
 * index.html
 *
 * 🎯 Key Point:
 * Prevents blank page at root.
 */


/*
 * QUESTION 19: Fix SPA routing (VERY IMPORTANT)
 *
 * ANSWER:
 *
 * Go to:
 * Error pages → Add custom error
 *
 * Add:
 *
 * 404 → /index.html → 200
 *
 * 🎯 Key Point:
 * Fixes React Router refresh issues.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 9 — DEPLOYMENT  
// -----------------------------------------------------------------------------

/*
 * QUESTION 20: When is it ready?
 *
 * ANSWER:
 *
 * CloudFront → Status:
 *
 * ❌ Deploying → wait
 * ✅ Deployed → ready
 *
 * 🎯 Key Point:
 * Takes ~5–15 minutes.
 */


/*
 * QUESTION 21: What is your live URL?
 *
 * ANSWER:
 *
 * https://<distribution-id>.cloudfront.net
 *
 * Example:
 *
 * https://d1nny6kd4fmvni.cloudfront.net
 */


/*
 * QUESTION 22: What URL should you use?
 *
 * ANSWER:
 *
 * If base: '/'
 * 👉 https://domain/
 *
 * If base: '/react/'
 * 👉 https://domain/react/
 *
 * 🎯 Key Point:
 * MUST match base config.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 10 — INVALIDATION (VERY IMPORTANT IN REAL WORLD)  
// -----------------------------------------------------------------------------

/*
 * QUESTION 23: Why do updates not show?
 *
 * ANSWER:
 *
 * CloudFront caches files.
 */


/*
 * QUESTION 24: How do you fix it?
 *
 * ANSWER:
 *
 * Go to:
 * Invalidations → Create invalidation
 *
 * Add:
 *
 * /*
 *
 * 🎯 Key Point:
 * Clears cache globally.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 11 — COMMON REAL-WORLD ERRORS  
// -----------------------------------------------------------------------------

/*
 * ERROR 1: File downloads instead of opening
 *
 * Cause:
 * ❌ Using wrong S3 endpoint
 *
 * Fix:
 * ✅ Use website endpoint
 */


/*
 * ERROR 2: CSS/JS not loading
 *
 * Cause:
 * ❌ Wrong base path
 *
 * Fix:
 * ✅ Match base + folder
 */


/*
 * ERROR 3: 404 react/react/index.html
 *
 * Cause:
 * ❌ Origin path set incorrectly
 *
 * Fix:
 * ✅ Remove origin path
 */


/*
 * ERROR 4: Blank page
 *
 * Fix:
 * ✅ Set default root object
 */


/*
 * ERROR 5: Routing breaks on refresh
 *
 * Fix:
 * ✅ Add 404 → index.html mapping
 */


// -----------------------------------------------------------------------------  
// ! PHASE 12 — FINAL ARCHITECTURE  
// -----------------------------------------------------------------------------

/*
 * Browser → CloudFront (HTTPS + CDN)
 *            ↓
 *        S3 (static files)
 *
 * ✔ Fast
 * ✔ Secure
 * ✔ Scalable
 */


// -----------------------------------------------------------------------------  
// 🧠 FINAL MINDSET  
// -----------------------------------------------------------------------------

/*
 * If you understand this:
 *
 * You can:
 * ✔ Deploy React apps professionally
 * ✔ Debug production issues
 * ✔ Use CDN architecture
 *
 * This is:
 * → Mid-level frontend + cloud skill
 *
 * NEXT STEP:
 * ✔ Custom domain (Route53)
 * ✔ CI/CD (GitHub Actions)
 * ✔ Multi-env deployments
 */