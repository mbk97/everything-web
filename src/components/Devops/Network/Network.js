// =============================================================================
// 🧠 DEVOPS NETWORKING FUNDAMENTALS 
// =============================================================================


// -----------------------------------------------------------------------------
// 🌐 WHAT NETWORKING REALLY IS (DEVOPS CONTEXT)
// -----------------------------------------------------------------------------
/*
 * Networking = how systems communicate
 *
 * In DevOps:
 *
 * Browser → Internet → Server → App → Database → Response
 *
 * If networking breaks → everything breaks
 */


// -----------------------------------------------------------------------------
// 🧩 YOUR CURRENT EC2 SETUP (REAL CONTEXT)
// -----------------------------------------------------------------------------
/*
 * From your setup:
 *
 * Public IP: 13.60.63.231
 * Private IP: 172.31.34.181
 *
 * Think:
 *
 * Public IP  → users access your app
 * Private IP → internal communication (DB, services)
 */


// -----------------------------------------------------------------------------
// 🔑 IP ADDRESSING (CRITICAL)
// -----------------------------------------------------------------------------
/*
 * TWO TYPES:
 *
 * 1. Public IP
 *    → accessible from internet
 *
 * 2. Private IP
 *    → used inside AWS network
 *
 * DevOps Rule:
 *
 * Public → frontend access
 * Private → backend/database communication
 */


// -----------------------------------------------------------------------------
// 🚪 PORTS (ENTRY POINTS INTO YOUR SERVER)
// -----------------------------------------------------------------------------
/*
 * A server runs multiple apps using ports
 *
 * COMMON PORTS:
 *
 * 22   → SSH
 * 80   → HTTP
 * 443  → HTTPS
 * 3000 → Node.js app
 *
 * Example:
 *
 * http://13.60.63.231:3000
 *
 * Means:
 * → go to server
 * → enter through port 3000
 */


// -----------------------------------------------------------------------------
// 🔥 SECURITY GROUP (FIREWALL)
// -----------------------------------------------------------------------------
/*
 * Controls:
 * → who can access your server
 * → which ports are open
 *
 * Example Rules:
 *
 * Allow:
 * - Port 22   (SSH)
 * - Port 80   (Web)
 * - Port 3000 (Node app)
 *
 * MOST COMMON ERROR:
 *
 * App not opening?
 * → Port not allowed in security group
 */


// -----------------------------------------------------------------------------
// 📡 FULL REQUEST FLOW (IMPORTANT)
// -----------------------------------------------------------------------------
/*
 * STEP-BY-STEP:
 *
 * 1. User enters:
 *    http://13.60.63.231:3000
 *
 * 2. Request goes through internet
 *
 * 3. AWS receives request
 *
 * 4. Security group checks:
 *    → Is port 3000 allowed?
 *
 * 5. If YES:
 *    → Forward to EC2
 *
 * 6. Node app receives request
 *
 * 7. Response sent back to browser
 */


// -----------------------------------------------------------------------------
// 🔁 REVERSE PROXY (NGINX)
// -----------------------------------------------------------------------------
/*
 * Problem:
 * Users accessing port 3000 directly is not ideal
 *
 * Solution:
 * Use Nginx
 *
 * Flow:
 *
 * Browser → Port 80 (Nginx)
 *             ↓
 *         Port 3000 (Node app)
 */


// -----------------------------------------------------------------------------
// ⚙️ WHY NGINX IS USED
// -----------------------------------------------------------------------------
/*
 * Nginx:
 *
 * ✔ hides backend ports
 * ✔ improves performance
 * ✔ enables HTTPS
 * ✔ can load balance traffic
 */


// -----------------------------------------------------------------------------
// 🌍 DNS (DOMAIN NAMES)
// -----------------------------------------------------------------------------
/*
 * Without DNS:
 * → http://13.60.63.231
 *
 * With DNS:
 * → http://yourdomain.com
 *
 * DNS converts:
 *
 * yourdomain.com → 13.60.63.231
 */


// -----------------------------------------------------------------------------
// 🔒 HTTPS (SECURITY)
// -----------------------------------------------------------------------------
/*
 * HTTP  → not secure
 * HTTPS → encrypted
 *
 * Tool:
 * Certbot + Nginx
 */


// -----------------------------------------------------------------------------
// 🧠 CLOUD NETWORKING (AWS THINKING)
// -----------------------------------------------------------------------------
/*
 * VPC (Virtual Private Cloud)
 * → your private network in AWS
 *
 * Subnet
 * → smaller network inside VPC
 *
 * Internet Gateway
 * → allows internet access
 *
 * Route Table
 * → controls traffic flow
 */


// -----------------------------------------------------------------------------
// 🧪 HANDS-ON LAB (YOUR CURRENT STAGE)
// -----------------------------------------------------------------------------

// STEP 1: Connect to EC2
/*
ssh -i key.pem ec2-user@13.60.63.231
*/


// STEP 2: Update system
/*
sudo yum update -y
*/


// STEP 3: Install Node.js
/*
sudo yum install nodejs -y
node -v
*/


// STEP 4: Create app
/*
nano app.js
*/


// STEP 5: Paste code
/*
const http = require("http");

http.createServer((req, res) => {
  res.end("Hello from EC2 🚀");
}).listen(3000);
*/


// STEP 6: Run app
/*
node app.js
*/


// STEP 7: Open browser
/*
http://13.60.63.231:3000
*/


// STEP 8: Fix if not working
/*
Check:
✔ Security group allows port 3000
✔ Node app is running
✔ Correct IP used
*/


// -----------------------------------------------------------------------------
// 🔁 ADD NGINX (REVERSE PROXY)
// -----------------------------------------------------------------------------

// Install Nginx
/*
sudo yum install nginx -y
sudo systemctl start nginx
*/


// Configure Nginx
/*
sudo nano /etc/nginx/nginx.conf
*/


// Example config
/*
server {
    listen 80;

    location / {
        proxy_pass http://localhost:3000;
    }
}
*/


// Restart Nginx
/*
sudo systemctl restart nginx
*/


// Access app
/*
http://13.60.63.231
*/


// -----------------------------------------------------------------------------
// 🧠 DEBUGGING (REAL DEVOPS SKILL)
// -----------------------------------------------------------------------------

// CASE 1: App not loading
/*
✔ Is Node running?
✔ Port 3000 open?
✔ Security group correct?
*/


// CASE 2: SSH fails
/*
✔ Port 22 open?
✔ Correct key.pem?
✔ Correct username?
*/


// CASE 3: Nginx fails
/*
✔ Is Nginx running?
✔ Config correct?
✔ Port 80 open?
*/


// -----------------------------------------------------------------------------
// 🧠 REAL PRODUCTION FLOW
// -----------------------------------------------------------------------------
/*
 * User
 *  ↓
 * Load Balancer
 *  ↓
 * Nginx
 *  ↓
 * Backend servers
 *  ↓
 * Database (private network)
 */


// -----------------------------------------------------------------------------
// ⚠️ COMMON BEGINNER MISTAKES
// -----------------------------------------------------------------------------
/*
 * ❌ Not opening ports
 * ❌ Wrong IP
 * ❌ Forgetting sudo
 * ❌ App not running
 * ❌ Editing wrong Nginx file
 */


// -----------------------------------------------------------------------------
// 🚀 FINAL DEVOPS MINDSET
// -----------------------------------------------------------------------------
/*
 * DevOps is NOT about tools
 *
 * It is about:
 *
 * ✔ understanding traffic flow
 * ✔ knowing where things break
 * ✔ fixing issues fast
 *
 * Always think:
 *
 * "Where is the request failing?"
 */