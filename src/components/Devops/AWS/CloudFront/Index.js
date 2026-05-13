/*
|--------------------------------------------------------------------------
| WHAT IS CLOUDFRONT?
|--------------------------------------------------------------------------
|
| CloudFront is AWS’s CDN (Content Delivery Network).
|
| A CDN stores copies of your app across global servers called:
|
| Edge Locations
|
| Instead of every user loading your React app directly from S3,
| CloudFront serves files from the nearest edge location.
|
|
| FLOW:
|
| User
|   ↓
| CloudFront Edge Server
|   ↓
| S3 Bucket (Origin)
|
|
| BENEFITS:
|
| ✅ Faster app loading
| ✅ HTTPS support
| ✅ Global caching
| ✅ Better performance
| ✅ Reduced latency
| ✅ Improved security
|
*/


/*
|--------------------------------------------------------------------------
| WHY WE PUT CLOUDFRONT IN FRONT OF S3
|--------------------------------------------------------------------------
|
| S3 is great for storing files.
|
| But S3 alone:
|
| ❌ is not optimized as a global CDN
| ❌ is slower for distant users
| ❌ has limited frontend optimization
|
|
| CloudFront improves this by:
|
| ✅ caching JS/CSS/images globally
| ✅ serving files closer to users
| ✅ compressing responses
| ✅ handling HTTPS automatically
|
*/


/*
|--------------------------------------------------------------------------
| IMPORTANT TERM — ORIGIN
|--------------------------------------------------------------------------
|
| In CloudFront:
|
| "Origin" = where original files live
|
|
| Example:
|
| React Build Files
|   ↓
| S3 Bucket
|
|
| Therefore:
|
| S3 = Origin
|
*/


/*
|--------------------------------------------------------------------------
| STEP 1 — BUILD YOUR REACT APP
|--------------------------------------------------------------------------
|
| Vite:
|
| npm run build
|
|
| This creates:
|
| dist/
|
|
| VERY IMPORTANT:
|
| Upload CONTENTS of dist/
|
| NOT:
| ❌ dist/
|
| BUT:
| ✅ files INSIDE dist/
|
|
| WRONG:
|
| S3
|   ↓
| dist/
|   ↓
| index.html
|
|
| CORRECT:
|
| S3
|   ↓
| index.html
| assets/
|
*/


/*
|--------------------------------------------------------------------------
| STEP 2 — CREATE S3 BUCKET
|--------------------------------------------------------------------------
|
| Create bucket:
|
| Example:
|
| react-animation
|
|
| Keep:
|
| Block Public Access = OFF
|
| for now (learning setup)
|
*/


/*
|--------------------------------------------------------------------------
| STEP 3 — ENABLE STATIC WEBSITE HOSTING
|--------------------------------------------------------------------------
|
| S3 Bucket
|   ↓
| Properties
|   ↓
| Static Website Hosting
|   ↓
| Enable
|
|
| Set:
|
| Index document:
| index.html
|
|
| AWS now generates:
|
| http://bucket-name.s3-website-region.amazonaws.com
|
|
| THIS IS CALLED:
|
| Website Endpoint
|
*/


/*
|--------------------------------------------------------------------------
| STEP 4 — MAKE BUCKET PUBLIC
|--------------------------------------------------------------------------
|
| Without bucket policy:
|
| ❌ Access Denied
|
|
| Add bucket policy:
|
| {
|   "Version":"2012-10-17",
|   "Statement":[{
|      "Effect":"Allow",
|      "Principal":"*",
|      "Action":["s3:GetObject"],
|      "Resource":["arn:aws:s3:::YOUR_BUCKET/*"]
|   }]
| }
|
*/


/*
|--------------------------------------------------------------------------
| STEP 5 — TEST S3 WEBSITE FIRST
|--------------------------------------------------------------------------
|
| Open:
|
| Website Endpoint URL
|
|
| Ensure:
|
| ✅ React app loads
| ✅ CSS works
| ✅ JS works
| ✅ Images work
|
|
| NEVER move to CloudFront before S3 works correctly.
|
*/


/*
|--------------------------------------------------------------------------
| STEP 6 — CREATE CLOUDFRONT DISTRIBUTION
|--------------------------------------------------------------------------
|
| AWS Console
|   ↓
| CloudFront
|   ↓
| Create Distribution
|
*/


/*
|--------------------------------------------------------------------------
| STEP 7 — CHOOSE ORIGIN TYPE
|--------------------------------------------------------------------------
|
| Choose:
|
| Amazon S3
|
|
| Then select your bucket.
|
*/


/*
|--------------------------------------------------------------------------
| STEP 8 — IMPORTANT AWS WARNING
|--------------------------------------------------------------------------
|
| AWS may show:
|
| "This S3 bucket has static website hosting enabled..."
|
|
| AWS gives TWO choices:
|
| OPTION A:
| Use S3 Website Endpoint
|
| OPTION B:
| Use Private S3 + OAC
|
|
| FOR LEARNING:
|
| Choose:
|
| ✅ Use Website Endpoint
|
|
| WHY?
|
| Easier to understand:
|
| ✅ SPA routing
| ✅ React behavior
| ✅ index.html flow
| ✅ CDN caching
|
*/


/*
|--------------------------------------------------------------------------
| STEP 9 — DISABLE PRIVATE BUCKET ACCESS
|--------------------------------------------------------------------------
|
| Because website endpoints are public:
|
| Turn OFF:
|
| "Allow private S3 bucket access to CloudFront"
|
|
| WHY?
|
| Website endpoints do not support OAC/OAI.
|
*/


/*
|--------------------------------------------------------------------------
| STEP 10 — VIEWER PROTOCOL POLICY
|--------------------------------------------------------------------------
|
| Choose:
|
| Redirect HTTP to HTTPS
|
|
| WHY?
|
| Users automatically get secure HTTPS access.
|
*/


/*
|--------------------------------------------------------------------------
| STEP 11 — DEFAULT ROOT OBJECT
|--------------------------------------------------------------------------
|
| VERY IMPORTANT.
|
| In CloudFront settings:
|
| Set:
|
| index.html
|
|
| WHY?
|
| Without this:
|
| Visiting:
|
| https://your-cloudfront-url/
|
| may fail.
|
*/


/*
|--------------------------------------------------------------------------
| STEP 12 — CREATE DISTRIBUTION
|--------------------------------------------------------------------------
|
| Click:
|
| Create Distribution
|
|
| CloudFront now enters:
|
| Deploying
|
|
| WHY IT TAKES TIME:
|
| CloudFront is deploying configuration globally to:
|
| Edge Locations worldwide.
|
|
| Typical wait:
|
| 5–15 minutes
|
*/


/*
|--------------------------------------------------------------------------
| STEP 13 — TEST CLOUDFRONT URL
|--------------------------------------------------------------------------
|
| AWS generates:
|
| https://xxxxx.cloudfront.net
|
|
| Test:
|
| ✅ React app loads
| ✅ HTTPS works
| ✅ CSS loads
| ✅ JS loads
|
*/


/*
|--------------------------------------------------------------------------
| STEP 14 — FIX REACT ROUTER PROBLEM
|--------------------------------------------------------------------------
|
| React Router handles routes in browser.
|
|
| Example:
|
| /dashboard
|
|
| CloudFront mistakenly searches for:
|
| /dashboard/index.html
|
|
| Result:
|
| ❌ 404
|
|
| FIX:
|
| CloudFront
|   ↓
| Error Pages
|
|
| Create:
|
| 403 → /index.html → 200
|
| AND:
|
| 404 → /index.html → 200
|
|
| WHY?
|
| Any unknown route should return:
|
| index.html
|
| Then React Router takes over.
|
*/


/*
|--------------------------------------------------------------------------
| STEP 15 — UNDERSTAND CACHING
|--------------------------------------------------------------------------
|
| CloudFront caches files globally.
|
|
| After redeploying:
|
| Users may still see OLD app version.
|
|
| WHY?
|
| Edge servers still have cached files.
|
*/


/*
|--------------------------------------------------------------------------
| STEP 16 — INVALIDATE CACHE
|--------------------------------------------------------------------------
|
| CloudFront
|   ↓
| Invalidations
|   ↓
| Create Invalidation
|
|
| Path:
|
| /*
|
|
| WHY?
|
| Forces CloudFront to fetch fresh files.
|
*/


/*
|--------------------------------------------------------------------------
| STEP 17 — FINAL ARCHITECTURE
|--------------------------------------------------------------------------
|
| Users Worldwide
|   ↓
| CloudFront CDN
|   ↓
| S3 Website Endpoint
|   ↓
| React Build Files
|
*/


/*
|--------------------------------------------------------------------------
| COMMON BEGINNER MISTAKES
|--------------------------------------------------------------------------
|
| ❌ Uploading dist folder itself
| ❌ Forgetting index.html
| ❌ Wrong bucket policy
| ❌ Wrong endpoint
| ❌ Forgetting invalidation
| ❌ No SPA routing fix
| ❌ Wrong Vite base path
| ❌ Testing CloudFront before deployment finishes
|
*/


/*
|--------------------------------------------------------------------------
| WHAT YOU ACTUALLY LEARNED
|--------------------------------------------------------------------------
|
| CloudFront is not:
|
| "just hosting"
|
|
| It is:
|
| ✅ a CDN
| ✅ a global cache
| ✅ an HTTPS layer
| ✅ a performance layer
| ✅ an optimization layer
|
|
| REAL PRODUCTION FLOW:
|
| React App
|   ↓
| S3
|   ↓
| CloudFront
|   ↓
| Users
|
*/