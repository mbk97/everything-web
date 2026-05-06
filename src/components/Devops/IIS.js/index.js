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