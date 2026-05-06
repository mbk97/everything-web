// =============================================================================  
// 🧠 DOMAIN + EC2 + SSL FULL SETUP (FROM SCRATCH)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! PHASE 1 — UNDERSTAND WHAT YOU’RE DOING  
// -----------------------------------------------------------------------------

/*
 * You currently have:
 *
 * ✔ EC2 server (Node app running on port 3000)
 * ✔ Domain: verifypay.ng
 *
 * Your goal:
 *
 * verifypay.ng  → EC2 IP → Nginx → Node app
 *
 * 🎯 Result:
 * https://verifypay.ng works
 */


// -----------------------------------------------------------------------------  
// ! PHASE 2 — GET YOUR EC2 PUBLIC IP  
// -----------------------------------------------------------------------------

/*
 * Go to:
 *
 * EC2 → Instances → Select your instance
 *
 * Copy:
 *
 * Public IPv4 address
 *
 * Example:
 * 16.171.27.31
 *
 * 🎯 This is your server identity
 */


// -----------------------------------------------------------------------------  
// ! PHASE 3 — CONNECT DOMAIN TO EC2 (CRITICAL STEP)  
// -----------------------------------------------------------------------------

/*
 * Go to your domain provider:
 *
 * TRUEHOST (where you bought verifypay.ng)
 *
 *
 * Find:
 * DNS Management / DNS Zone Editor
 *
 *
 * Add this record:
 *
 * Type: A
 * Name: @
 * Value: 16.171.27.31
 *
 *
 * ALSO add:
 *
 * Type: A
 * Name: www
 * Value: 16.171.27.31
 *
 *
 * 🎯 Meaning:
 * verifypay.ng → your EC2 server
 */


/*
 * IMPORTANT:
 *
 * DNS changes take:
 * 2 – 10 minutes (sometimes longer)
 */


// -----------------------------------------------------------------------------  
// ! PHASE 4 — VERIFY DOMAIN POINTS TO SERVER  
// -----------------------------------------------------------------------------

/*
 * Run:
 *
 * ping verifypay.ng
 *
 * OR:
 *
 * nslookup verifypay.ng
 *
 *
 * You should see:
 * 16.171.27.31
 *
 * 🎯 Confirms DNS is working
 */


// -----------------------------------------------------------------------------  
// ! PHASE 5 — CONFIGURE NGINX FOR DOMAIN  
// -----------------------------------------------------------------------------

/*
 * Open config:
 *
 * sudo nano /etc/nginx/conf.d/app.conf
 */


/*
 * Replace with:
 */

// server {
//     listen 80;
//     server_name verifypay.ng www.verifypay.ng;

//     location / {
//         proxy_pass http://localhost:3000;
//         proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection 'upgrade';
//         proxy_set_header Host $host;
//         proxy_cache_bypass $http_upgrade;
//     }
// }


/*
 * Save:
 *
 * CTRL + O → ENTER → CTRL + X
 */


/*
 * Restart nginx:
 */

// sudo nginx -t
// sudo systemctl restart nginx


/*
 * Test:
 *
 * http://verifypay.ng
 *
 * 🎯 Should show your Node app
 */


// -----------------------------------------------------------------------------  
// ! PHASE 6 — INSTALL SSL (HTTPS)  
// -----------------------------------------------------------------------------

/*
 * Now run:
 */

// sudo certbot --nginx


/*
 * When asked:
 *
 * Enter domain:
 *
 * verifypay.ng www.verifypay.ng
 */


/*
 * Certbot will:
 *
 * ✔ Verify domain
 * ✔ Generate certificate
 * ✔ Update nginx config
 * ✔ Enable HTTPS
 */


/*
 * You’ll see option:
 *
 * 1: No redirect
 * 2: Redirect HTTP → HTTPS
 *
 * Choose:
 *
 * 2
 */


/*
 * 🎯 Result:
 *
 * https://verifypay.ng works
 */


// -----------------------------------------------------------------------------  
// ! PHASE 7 — AUTO RENEWAL (VERY IMPORTANT)  
// -----------------------------------------------------------------------------

/*
 * Test renewal:
 */

// sudo certbot renew --dry-run


/*
 * 🎯 Certificates auto-renew every 90 days
 */


// -----------------------------------------------------------------------------  
// ! PHASE 8 — FINAL TEST  
// -----------------------------------------------------------------------------

/*
 * Open browser:
 *
 * https://verifypay.ng
 *
 * ✔ No "Not Secure"
 * ✔ Green lock icon
 *
 * 🎯 You are now production-ready
 */


// -----------------------------------------------------------------------------  
// 🧠 REAL-WORLD UNDERSTANDING  
// -----------------------------------------------------------------------------

/*
 * Flow now:
 *
 * User → https://verifypay.ng
 *        ↓
 * DNS → EC2 IP
 *        ↓
 * Nginx (port 80/443)
 *        ↓
 * Node app (port 3000)
 *
 * 🎯 This is EXACTLY how real systems work
 */