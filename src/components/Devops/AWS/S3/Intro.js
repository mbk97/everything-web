// -----------------------------------------------------------------------------  
// ! PHASE 6 — AMAZON S3 (STORAGE & FRONTEND ARCHITECTURE)  
// -----------------------------------------------------------------------------

/*
 * QUESTION 1: What is Amazon S3?
 *
 * ANSWER:
 * :contentReference[oaicite:1]{index=1} S3 (Simple Storage Service) is an object storage service used to store and retrieve files from the cloud.
 *
 * It allows you to store:
 * - Images
 * - Videos
 * - Documents
 * - Static websites
 *
 * 🎯 Key Point:
 * S3 is NOT a server — it is storage.
 */


/*
 * QUESTION 2: What is a Bucket in S3?
 *
 * ANSWER:
 * A bucket is a container used to store objects (files).
 *
 * Example:
 * - my-react-app
 * - user-uploads
 *
 * Rules:
 * - Must be globally unique
 * - Created in a specific region
 *
 * 🎯 Key Point:
 * Bucket = top-level storage container.
 */


/*
 * QUESTION 3: What is an Object in S3?
 *
 * ANSWER:
 * An object is a file stored inside a bucket.
 *
 * Example:
 * - index.html
 * - profile.png
 * - videos/intro.mp4
 *
 * Each object contains:
 * - Data (file)
 * - Metadata
 * - Key (path)
 *
 * 🎯 Key Point:
 * Everything in S3 is an object.
 */


/*
 * QUESTION 4: What is a Key in S3?
 *
 * ANSWER:
 * A key is the unique identifier (path) of an object inside a bucket.
 *
 * Example:
 * images/profile.jpg
 *
 * Note:
 * S3 does NOT have real folders — just keys with "/" structure.
 *
 * 🎯 Key Point:
 * Folder structure is an illusion.
 */


/*
 * QUESTION 5: How does S3 work?
 *
 * ANSWER:
 * Flow:
 *
 * 1. Client sends request
 * 2. S3 receives request
 * 3. S3 returns file
 *
 * OR:
 *
 * 1. App uploads file to S3
 * 2. S3 stores it
 * 3. Users access via URL
 *
 * 🎯 Key Point:
 * Files are accessed via HTTP/HTTPS.
 */


/*
 * QUESTION 6: Why use S3 for React frontend?
 *
 * ANSWER:
 * S3 is optimized for static files.
 *
 * Benefits:
 * - Cheap
 * - Highly scalable
 * - No server management
 *
 * 🎯 Key Point:
 * Use S3 instead of EC2 for static apps.
 */


/*
 * QUESTION 7: How do you host a React app on S3?
 *
 * ANSWER:
 * Steps:
 *
 * 1. Build app:
 *    npm run build
 *
 * 2. Create S3 bucket
 *
 * 3. Upload build/ folder
 *
 * 4. Enable static website hosting
 *
 * 5. Set:
 *    - index.html
 *    - error.html → index.html
 *
 * 6. Make bucket public
 *
 * 🎯 Key Point:
 * S3 can act as a static web server.
 */


/*
 * QUESTION 8: What is Bucket Policy?
 *
 * ANSWER:
 * A bucket policy defines permissions for accessing your bucket.
 *
 * Example (public read):
 *
 * {
 *   "Effect": "Allow",
 *   "Principal": "*",
 *   "Action": "s3:GetObject",
 *   "Resource": "arn:aws:s3:::my-bucket/*"
 * }
 *
 * 🎯 Key Point:
 * Controls public access to files.
 */


/*
 * QUESTION 9: What is IAM in S3?
 *
 * ANSWER:
 * :contentReference[oaicite:2]{index=2} is used to control access to S3 resources.
 *
 * It allows:
 * - Users
 * - Roles
 * - Permissions
 *
 * 🎯 Key Point:
 * Use IAM for secure access control.
 */


/*
 * QUESTION 10: What is a Pre-Signed URL?
 *
 * ANSWER:
 * A pre-signed URL allows temporary access to a private S3 object.
 *
 * Use case:
 * - Secure file uploads
 * - Secure downloads
 *
 * Flow:
 * - Backend generates URL
 * - Client uploads directly to S3
 *
 * 🎯 Key Point:
 * Avoid exposing your bucket publicly.
 */


/*
 * QUESTION 11: What are S3 Storage Classes?
 *
 * ANSWER:
 * Storage classes define cost and access frequency.
 *
 * Types:
 * - Standard → frequent access
 * - Intelligent-Tiering → automatic optimization
 * - Glacier → archive storage
 *
 * 🎯 Key Point:
 * Choose based on usage to save cost.
 */


/*
 * QUESTION 12: What is CloudFront with S3?
 *
 * ANSWER:
 * :contentReference[oaicite:3]{index=3} is a CDN that caches S3 content globally.
 *
 * Benefits:
 * - Faster loading
 * - Reduced latency
 *
 * 🎯 Key Point:
 * Always use CloudFront in production.
 */


/*
 * QUESTION 13: What is Versioning in S3?
 *
 * ANSWER:
 * Versioning keeps multiple versions of an object.
 *
 * Example:
 * - index.html v1
 * - index.html v2
 *
 * 🎯 Key Point:
 * Helps prevent accidental deletion.
 */


/*
 * QUESTION 14: What is Lifecycle Policy?
 *
 * ANSWER:
 * Lifecycle rules automatically move or delete files.
 *
 * Example:
 * - Move to Glacier after 30 days
 *
 * 🎯 Key Point:
 * Helps reduce storage cost.
 */


/*
 * QUESTION 15: What are common S3 mistakes?
 *
 * ANSWER:
 * - Making bucket fully public
 * - Forgetting CORS configuration
 * - Wrong permissions
 * - Uploading wrong build files
 *
 * 🎯 Key Point:
 * Security + configuration matter.
 */


// -----------------------------------------------------------------------------  
// 🧠 BONUS — REAL INTERVIEW SCENARIOS  
// -----------------------------------------------------------------------------

/*
 * QUESTION 16: Why is your React app not loading from S3?
 *
 * ANSWER:
 * Possible reasons:
 * - index.html not set
 * - Bucket not public
 * - Wrong file uploaded
 *
 * 🎯 Key Point:
 * Check hosting + permissions.
 */


/*
 * QUESTION 17: Users cannot upload files to S3. Why?
 *
 * ANSWER:
 * Possible reasons:
 * - Missing IAM permission
 * - No pre-signed URL
 * - CORS not configured
 *
 * 🎯 Key Point:
 * File uploads require proper security setup.
 */


// -----------------------------------------------------------------------------  
// 🧠 FINAL MINDSET  
// -----------------------------------------------------------------------------
/*
 * If you master S3:
 *
 * You can:
 * ✔ Host frontend apps professionally
 * ✔ Store user files securely
 * ✔ Build scalable architectures
 *
 * This is:
 * → Production-ready cloud knowledge
 *
 * NEXT STEP:
 * Combine S3 + EC2 + CloudFront
 */