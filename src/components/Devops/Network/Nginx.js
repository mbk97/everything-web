// =============================================================================  
// 🧠 NGINX COMPLETE GUIDE (ZERO → PRODUCTION UNDERSTANDING)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! PHASE 1 — WHAT IS NGINX?  
// -----------------------------------------------------------------------------

/*
 * Nginx (pronounced "engine-x") is:
 *
 * ✔ A web server
 * ✔ A reverse proxy
 * ✔ A load balancer
 *
 * It sits BETWEEN:
 *
 * Browser ↔ Your backend (Node.js)
 *
 * 🎯 Goal:
 * Understand Nginx as the "gatekeeper" of your server
 */


// -----------------------------------------------------------------------------  
// ! PHASE 2 — WHY NGINX IS IMPORTANT  
// -----------------------------------------------------------------------------

/*
 * Without Nginx:
 *
 * Browser → Node (port 3000)
 *
 * Problems:
 * ❌ Exposes internal port
 * ❌ No HTTPS easily
 * ❌ Poor scalability
 *
 *
 * With Nginx:
 *
 * Browser → Nginx → Node
 *
 * Benefits:
 * ✔ Clean URLs (no :3000)
 * ✔ HTTPS support
 * ✔ Better performance
 * ✔ Security layer
 *
 * 🎯 Goal:
 * Move from development → production mindset
 */


// -----------------------------------------------------------------------------  
// ! PHASE 3 — WHAT NGINX DOES (CORE FUNCTIONS)  
// -----------------------------------------------------------------------------

/*
 * 1. Reverse Proxy
 *
 * Nginx forwards requests:
 *
 * User → Nginx → Node app
 *
 *
 * 2. Serve Static Files
 *
 * HTML, CSS, images served directly
 *
 *
 * 3. SSL Termination
 *
 * Handles HTTPS instead of Node
 *
 *
 * 4. Load Balancing
 *
 * Distributes traffic across multiple servers
 *
 *
 * 🎯 Goal:
 * Understand Nginx responsibilities
 */


// -----------------------------------------------------------------------------  
// ! PHASE 4 — HOW NGINX FITS YOUR EC2 SETUP  
// -----------------------------------------------------------------------------

/*
 * Your current setup:
 *
 * Browser → http://IP:3000 → Node (PM2)
 *
 *
 * Production setup:
 *
 * Browser → http://IP → Nginx → Node (3000)
 *
 *
 * HTTPS setup:
 *
 * Browser → https://domain → Nginx (SSL) → Node
 *
 *
 * 🎯 Goal:
 * Introduce Nginx into your architecture
 */


// -----------------------------------------------------------------------------  
// ! PHASE 5 — INSTALL NGINX ON EC2  
// -----------------------------------------------------------------------------

/*
 * Install:
 *
 * sudo yum install nginx -y
 *
 *
 * Start:
 *
 * sudo systemctl start nginx
 *
 *
 * Enable on boot:
 *
 * sudo systemctl enable nginx
 *
 *
 * 🎯 Goal:
 * Run Nginx server
 */


// -----------------------------------------------------------------------------  
// ! PHASE 6 — TEST NGINX  
// -----------------------------------------------------------------------------

/*
 * Open browser:
 *
 * http://your-public-ip
 *
 *
 * You should see:
 * "Welcome to nginx!"
 *
 *
 * 🎯 Goal:
 * Confirm Nginx is working
 */


// -----------------------------------------------------------------------------  
// ! PHASE 7 — REVERSE PROXY CONFIG (IMPORTANT)  
// -----------------------------------------------------------------------------

/*
 * Edit config:
 *
 * sudo nano /etc/nginx/nginx.conf
 *
 *
 * OR better:
 *
 * sudo nano /etc/nginx/conf.d/app.conf
 *
 *
 * Add:
 *
 * server {
 *     listen 80;
 *
 *     location / {
 *         proxy_pass http://localhost:3000;
 *         proxy_http_version 1.1;
 *         proxy_set_header Upgrade $http_upgrade;
 *         proxy_set_header Connection 'upgrade';
 *         proxy_set_header Host $host;
 *         proxy_cache_bypass $http_upgrade;
 *     }
 * }
 *
 *
 * Save and restart:
 *
 * sudo systemctl restart nginx
 *
 *
 * 🎯 Goal:
 * Route traffic from port 80 → Node (3000)
 */


// -----------------------------------------------------------------------------  
// ! PHASE 8 — RESULT AFTER CONFIG  
// -----------------------------------------------------------------------------

/*
 * Now instead of:
 *
 * http://IP:3000
 *
 *
 * You use:
 *
 * http://IP
 *
 *
 * 🎯 Goal:
 * Clean, production-ready URL
 */


// -----------------------------------------------------------------------------  
// ! PHASE 9 — NGINX + HTTPS (SSL INTEGRATION)  
// -----------------------------------------------------------------------------

/*
 * Install Certbot:
 *
 * sudo yum install certbot python3-certbot-nginx -y
 *
 *
 * Run:
 *
 * sudo certbot --nginx
 *
 *
 * Result:
 *
 * https://your-domain works
 *
 *
 * 🎯 Goal:
 * Enable secure HTTPS
 */


// -----------------------------------------------------------------------------  
// ! PHASE 10 — WHY NOT USE NODE FOR EVERYTHING?  
// -----------------------------------------------------------------------------

/*
 * Node.js alone:
 *
 * ❌ Not optimized for static files
 * ❌ Harder SSL setup
 * ❌ No load balancing
 *
 *
 * Nginx + Node:
 *
 * ✔ Fast static serving
 * ✔ Easy SSL
 * ✔ Scalable
 * ✔ Industry standard
 *
 *
 * 🎯 Goal:
 * Understand separation of concerns
 */


// -----------------------------------------------------------------------------  
// ! PHASE 11 — REAL-WORLD ARCHITECTURE  
// -----------------------------------------------------------------------------

/*
 * Production flow:
 *
 * User (Browser)
 *       ↓ HTTPS (443)
 *    Nginx (SSL + routing)
 *       ↓ HTTP (3000)
 *    Node (PM2)
 *
 *
 * 🎯 Goal:
 * Understand modern backend architecture
 */


// -----------------------------------------------------------------------------  
// ! PHASE 12 — COMMON MISTAKES  
// -----------------------------------------------------------------------------

/*
 * ❌ Forgetting to restart Nginx
 * ❌ Wrong proxy_pass URL
 * ❌ Not opening port 80/443
 * ❌ Running Node directly on port 80
 *
 * 🎯 Avoid debugging headaches
 */


// -----------------------------------------------------------------------------  
// ! PHASE 13 — SECURITY BENEFITS  
// -----------------------------------------------------------------------------

/*
 * Nginx helps:
 *
 * ✔ Hide backend ports
 * ✔ Prevent direct server exposure
 * ✔ Handle HTTPS encryption
 * ✔ Limit traffic (rate limiting)
 *
 * 🎯 Goal:
 * Add security layer
 */


// -----------------------------------------------------------------------------  
// 🧠 FINAL MINDSET  
// -----------------------------------------------------------------------------

/*
 * Nginx = Entry point of your server
 * Node = Application logic
 *
 * If you understand Nginx:
 *
 * ✔ You can deploy real production apps
 * ✔ You can scale systems
 * ✔ You understand backend architecture
 *
 * This is:
 * → Core DevOps knowledge
 * → Backend engineering foundation
 */


// =============================================================================  
// 🧠 CERTBOT + SSL PROCESS EXPLAINED (WHAT JUST HAPPENED)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! PHASE 1 — WHAT YOU JUST RAN  
// -----------------------------------------------------------------------------

/*
 * Command:
 *
 * sudo certbot --nginx
 *
 * Meaning:
 *
 * ✔ Install SSL certificate automatically
 * ✔ Configure Nginx for HTTPS
 * ✔ Handle renewal for you
 *
 * 🎯 Goal:
 * Turn your HTTP server → HTTPS (secure)
 */


// -----------------------------------------------------------------------------  
// ! PHASE 2 — PACKAGE INSTALLATION LINE  
// -----------------------------------------------------------------------------

/*
 * python3-pyrfc3339-1.1-16.amzn2023.noarch
 *
 * This is:
 *
 * ✔ A dependency installed by certbot
 * ✔ Used for date/time formatting (certificate validation)
 *
 * 🎯 You don’t need to worry about it — it’s normal
 */


// -----------------------------------------------------------------------------  
// ! PHASE 3 — CERTBOT STARTED  
// -----------------------------------------------------------------------------

/*
 * Saving debug log to:
 * /var/log/letsencrypt/letsencrypt.log
 *
 * Meaning:
 *
 * ✔ Certbot logs everything it does
 * ✔ Useful for debugging if something fails
 *
 * 🎯 Real DevOps systems always log actions
 */


// -----------------------------------------------------------------------------  
// ! PHASE 4 — EMAIL PROMPT  
// -----------------------------------------------------------------------------

/*
 * Enter email address:
 *
 * You entered:
 * oyindamola850@gmail.com
 *
 * Meaning:
 *
 * ✔ Used for:
 *   - Certificate expiration warnings
 *   - Security alerts
 *
 * 🎯 Important for production monitoring
 */


// -----------------------------------------------------------------------------  
// ! PHASE 5 — TERMS OF SERVICE  
// -----------------------------------------------------------------------------

/*
 * You saw:
 *
 * Do you agree? (Y/N)
 *
 * You typed:
 * Y
 *
 * Meaning:
 *
 * ✔ You accepted Let's Encrypt terms
 * ✔ Required before issuing certificate
 *
 * 🎯 Legal requirement for certificate authority
 */


// -----------------------------------------------------------------------------  
// ! PHASE 6 — EFF EMAIL PERMISSION  
// -----------------------------------------------------------------------------

/*
 * Question:
 *
 * Share your email with EFF?
 *
 * You typed:
 * Y
 *
 * Meaning:
 *
 * ✔ Optional
 * ✔ Only for newsletters / updates
 *
 * 🎯 Not required for SSL
 */


// -----------------------------------------------------------------------------  
// ! PHASE 7 — ACCOUNT REGISTRATION  
// -----------------------------------------------------------------------------

/*
 * Output:
 *
 * Account registered.
 *
 * Meaning:
 *
 * ✔ Certbot created an account with Let's Encrypt
 * ✔ Your server is now recognized by the CA
 *
 * 🎯 Required for issuing certificates
 */


// -----------------------------------------------------------------------------  
// ! PHASE 8 — DOMAIN INPUT (VERY IMPORTANT)  
// -----------------------------------------------------------------------------

/*
 * Prompt:
 *
 * Enter the domain name(s)
 *
 * This is where things get CRITICAL
 *
 *
 * ✔ You MUST enter a DOMAIN:
 *
 * example:
 * myapp.com
 *
 *
 * ❌ You CANNOT use:
 *
 * 16.171.27.31  (your EC2 IP)
 *
 *
 * 🎯 Reason:
 * SSL certificates are issued ONLY for domain names
 */





// =============================================================================  
// 🧠 CERTBOT + SSL PROCESS EXPLAINED (WHAT JUST HAPPENED)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! PHASE 1 — WHAT YOU JUST RAN  
// -----------------------------------------------------------------------------

/*
 * Command:
 *
 * sudo certbot --nginx
 *
 * Meaning:
 *
 * ✔ Install SSL certificate automatically
 * ✔ Configure Nginx for HTTPS
 * ✔ Handle renewal for you
 *
 * 🎯 Goal:
 * Turn your HTTP server → HTTPS (secure)
 */


// -----------------------------------------------------------------------------  
// ! PHASE 2 — PACKAGE INSTALLATION LINE  
// -----------------------------------------------------------------------------

/*
 * python3-pyrfc3339-1.1-16.amzn2023.noarch
 *
 * This is:
 *
 * ✔ A dependency installed by certbot
 * ✔ Used for date/time formatting (certificate validation)
 *
 * 🎯 You don’t need to worry about it — it’s normal
 */


// -----------------------------------------------------------------------------  
// ! PHASE 3 — CERTBOT STARTED  
// -----------------------------------------------------------------------------

/*
 * Saving debug log to:
 * /var/log/letsencrypt/letsencrypt.log
 *
 * Meaning:
 *
 * ✔ Certbot logs everything it does
 * ✔ Useful for debugging if something fails
 *
 * 🎯 Real DevOps systems always log actions
 */


// -----------------------------------------------------------------------------  
// ! PHASE 4 — EMAIL PROMPT  
// -----------------------------------------------------------------------------

/*
 * Enter email address:
 *
 * You entered:
 * oyindamola850@gmail.com
 *
 * Meaning:
 *
 * ✔ Used for:
 *   - Certificate expiration warnings
 *   - Security alerts
 *
 * 🎯 Important for production monitoring
 */


// -----------------------------------------------------------------------------  
// ! PHASE 5 — TERMS OF SERVICE  
// -----------------------------------------------------------------------------

/*
 * You saw:
 *
 * Do you agree? (Y/N)
 *
 * You typed:
 * Y
 *
 * Meaning:
 *
 * ✔ You accepted Let's Encrypt terms
 * ✔ Required before issuing certificate
 *
 * 🎯 Legal requirement for certificate authority
 */


// -----------------------------------------------------------------------------  
// ! PHASE 6 — EFF EMAIL PERMISSION  
// -----------------------------------------------------------------------------

/*
 * Question:
 *
 * Share your email with EFF?
 *
 * You typed:
 * Y
 *
 * Meaning:
 *
 * ✔ Optional
 * ✔ Only for newsletters / updates
 *
 * 🎯 Not required for SSL
 */


// -----------------------------------------------------------------------------  
// ! PHASE 7 — ACCOUNT REGISTRATION  
// -----------------------------------------------------------------------------

/*
 * Output:
 *
 * Account registered.
 *
 * Meaning:
 *
 * ✔ Certbot created an account with Let's Encrypt
 * ✔ Your server is now recognized by the CA
 *
 * 🎯 Required for issuing certificates
 */


// -----------------------------------------------------------------------------  
// ! PHASE 8 — DOMAIN INPUT (VERY IMPORTANT)  
// -----------------------------------------------------------------------------

/*
 * Prompt:
 *
 * Enter the domain name(s)
 *
 * This is where things get CRITICAL
 *
 *
 * ✔ You MUST enter a DOMAIN:
 *
 * example:
 * myapp.com
 *
 *
 * ❌ You CANNOT use:
 *
 * 16.171.27.31  (your EC2 IP)
 *
 *
 * 🎯 Reason:
 * SSL certificates are issued ONLY for domain names
 * 
 * sudo tail -f /var/log/nginx/error.log
 */


// server {

//     # 👂 Listen on port 80 (HTTP)
//     listen 80;

//     # 🌐 Accept requests from any domain or IP
//     server_name _;


//     # =========================================================================
//     # 🔥 DEFAULT FRONTEND (ANGULAR APP)
//     # =========================================================================

//     # 📁 Default directory for root requests (/)
//     root /var/www/frontend;

//     # 📄 Default file to serve
//     index index.html;


//     # =========================================================================
//     # 🔁 FIX: HANDLE /react (NO TRAILING SLASH)
//     # =========================================================================

//     # 🎯 Exact match for "/react" ONLY
//     location = /react {

//         # 🔄 Redirect to "/react/" (important for correct routing)
//         # 301 = permanent redirect
//         return 301 /react/;
//     }


//     # =========================================================================
//     # ⚛️ REACT APPLICATION
//     # =========================================================================

//     # 🎯 Matches anything starting with "/react/"
//     location /react/ {

//         # 📁 Base directory
//         # Nginx maps:
//         # /react → /var/www/react
//         root /var/www;

//         # 🔁 Try to serve:
//         # 1. Exact file (e.g., main.js)
//         # 2. Folder (if exists)
//         # 3. Fallback to React's index.html
//         #
//         # This is REQUIRED for React routing (SPA)
//         try_files $uri $uri/ /react/index.html;
//     }


//     # =========================================================================
//     # 🔌 BACKEND API (NODE.JS)
//     # =========================================================================

//     # 🎯 Matches "/api/*"
//     location /api/ {

//         # 🔁 Forward request to backend running on port 8080
//         # Example:
//         # /api/blog → http://localhost:8080/blog
//         proxy_pass http://localhost:8080/;

//         # 🔧 Use HTTP/1.1 for better connection handling
//         proxy_http_version 1.1;

//         # 🔄 Allow WebSocket upgrades (if needed)
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection 'upgrade';

//         # 🌐 Preserve original host (important for backend logic)
//         proxy_set_header Host $host;

//         # 🚫 Disable caching for upgraded connections
//         proxy_cache_bypass $http_upgrade;
//     }


//     # =========================================================================
//     # 🌐 ANGULAR (CATCH-ALL ROUTE)
//     # =========================================================================

//     # 🎯 Matches EVERYTHING else
//     location / {

//         # 🔁 Try:
//         # 1. Real file
//         # 2. Folder
//         # 3. Fallback to Angular index.html
//         #
//         # Required for Angular routing (SPA)
//         try_files $uri $uri/ /index.html;
//     }
// }