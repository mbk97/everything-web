// # =============================================================================

// # 🧠 EC2 + NGINX + DOMAIN + VERCEL + DNS MASTERY

// # =============================================================================

// ```txt
// This section teaches:
// ✔ How frontend and backend communicate
// ✔ What nginx actually does
// ✔ How domains work
// ✔ What DNS is
// ✔ Why subdomains exist
// ✔ How Vercel and EC2 work together
// ✔ How production systems are structured
// ✔ How requests travel across the internet
// ```

// ---

// # -----------------------------------------------------------------------------

// # ! PHASE 1 — UNDERSTANDING THE INTERNET FLOW

// # -----------------------------------------------------------------------------

/*

* TASK 1: Understand What Happens When Someone Opens Your Website
  */

/*

* Imagine a user types:
*
* [https://havenastays.net](https://havenastays.net)
*
* What actually happens?
*
* STEP 1:
* Browser asks DNS:
*
* "Which server owns this domain?"
*
* STEP 2:
* DNS returns an IP address
*
* Example:
* 76.xx.xx.xx
*
* STEP 3:
* Browser sends request to that server
*
* STEP 4:
* Server responds with frontend files
*
* STEP 5:
* React app loads in browser
*
* 🎯 GOAL:
* Understand the internet is:
*
* Domain → DNS → Server → Response
  */

// ---

// # -----------------------------------------------------------------------------

// # ! PHASE 2 — WHAT DNS ACTUALLY IS

// # -----------------------------------------------------------------------------

/*

* TASK 2: Understand DNS
  */

/*

* DNS = Domain Name System
*
* DNS translates:
*
* havenastays.net
*
* into:
*
* 13.62.231.131
*
* Just like:
*
* "John"
* → phone number
*
* DNS records tell the internet:
*
* "Where should traffic go?"
*
* 🎯 GOAL:
* Understand DNS is internet navigation
  */

// ---

// # -----------------------------------------------------------------------------

// # ! PHASE 3 — UNDERSTANDING DNS RECORDS

// # -----------------------------------------------------------------------------

/*

* TASK 3: Learn DNS Record Types
  */

/*

* A RECORD
*
* Connects domain → IP address
*
* Example:
*
* api.havenastays.net
* → 13.62.231.131
*
* Meaning:
*
* "Send traffic to this EC2 server"
  */

/*

* CNAME RECORD
*
* Connects domain → another domain
*
* Example:
*
* [www.havenastays.net](http://www.havenastays.net)
* → cname.vercel-dns.com
*
* Meaning:
*
* "Forward traffic to Vercel infrastructure"
  */

/*

* YOUR CURRENT SETUP
*
* A Record:
*
* api → EC2
*
* CNAME:
*
* www → Vercel
*
* 🎯 GOAL:
* Understand frontend and backend can live on different infrastructures
  */

// ---

// # -----------------------------------------------------------------------------

// # ! PHASE 4 — UNDERSTANDING FRONTEND VS BACKEND HOSTING

// # -----------------------------------------------------------------------------

/*

* TASK 4: Understand Why Frontend & Backend Are Separate
  */

/*

* YOUR FRONTEND
*
* Hosted on:
* Vercel
*
* Purpose:
* Serve React/Next.js files
*
* Example:
*
* havenastays.net
  */

/*

* YOUR BACKEND
*
* Hosted on:
* EC2
*
* Purpose:
* Run Node.js API
*
* Example:
*
* api.havenastays.net
  */

/*

* WHY SEPARATE THEM?
*
* ✔ Easier scaling
* ✔ Better architecture
* ✔ Easier deployment
* ✔ Cleaner infrastructure
* ✔ Mobile apps can use same API
*
* 🎯 GOAL:
* Understand modern systems separate frontend & backend
  */


// # -----------------------------------------------------------------------------

// # ! PHASE 5 — WHAT A SUBDOMAIN IS

// # -----------------------------------------------------------------------------

/*

* TASK 5: Understand Subdomains
  */

/*

* Main Domain:
*
* havenastays.net
*
* Subdomains:
*
* api.havenastays.net
* admin.havenastays.net
* docs.havenastays.net
*
* They all belong to:
*
* havenastays.net
  */

/*

* WHY USE api. ?
*
* Because:
*
* frontend and backend are different systems
*
* Example:
*
* Frontend:
* havenastays.net
*
* Backend:
* api.havenastays.net
*
* 🎯 GOAL:
* Understand subdomains organize infrastructure
  */

// ---

// # -----------------------------------------------------------------------------

// # ! PHASE 6 — WHAT NGINX ACTUALLY DOES

// # -----------------------------------------------------------------------------

/*

* TASK 6: Understand nginx
  */

/*

* Your Node.js app runs on:
*
* localhost:8080
*
* But users do NOT access:
*
* :8080
*
* Instead:
*
* nginx listens on:
*
* port 80
  */

/*

* REQUEST FLOW
*
* Browser
* ↓
* nginx (:80)
* ↓
* Node.js (:8080)
*
* nginx forwards traffic
  */

/*

* THIS IS CALLED:
*
* Reverse Proxy
  */

/*

* WHY USE nginx?
*
* ✔ Security
* ✔ SSL support
* ✔ Performance
* ✔ Domain routing
* ✔ Load balancing
* ✔ Hides internal ports
*
* 🎯 GOAL:
* Understand nginx is the public gateway to your app
  */

// ---

// # -----------------------------------------------------------------------------

// # ! PHASE 7 — UNDERSTANDING YOUR NGINX CONFIG

// # -----------------------------------------------------------------------------

/*

* TASK 7: Read nginx Like English
  */

/*

* YOUR CONFIG:
*
* server {
* listen 80;
*
* server_name api.havenastays.net;
*
* location / {
* ```
     proxy_pass http://localhost:8080;
  ```
* }
* }
  */

/*

* WHAT THIS MEANS
*
* listen 80
*
* → accept browser traffic
  */

/*

* server_name api.havenastays.net
*
* → only respond to this domain
  */

/*

* proxy_pass [http://localhost:8080](http://localhost:8080)
*
* → forward traffic to Node.js app
  */

/*

* 🎯 GOAL:
* Learn to mentally translate nginx configs
  */

// ---

// # -----------------------------------------------------------------------------

// # ! PHASE 8 — WHY "Cannot GET /" HAPPENED

// # -----------------------------------------------------------------------------

/*

* TASK 8: Understand Express Routing
  */

/*

* You opened:
*
* [http://api.havenastays.net](http://api.havenastays.net)
*
* Express responded:
*
* Cannot GET /
  */

/*

* WHY?
*
* Because your app has no route:
*
* app.get("/")
  */

/*

* Example:
*
* app.get("/", (req, res) => {
* res.send("API Running");
* })
  */

/*

* THIS WAS IMPORTANT
*
* Because:
*
* It proved:
*
* ✔ DNS works
* ✔ nginx works
* ✔ EC2 works
* ✔ Reverse proxy works
*
* 🎯 GOAL:
* Learn to debug from symptoms
  */

// ---

// # -----------------------------------------------------------------------------

// # ! PHASE 9 — UNDERSTANDING PM2

// # -----------------------------------------------------------------------------

/*

* TASK 9: Why PM2 Exists
  */

/*

* If you run:
*
* node app.js
*
* and close terminal:
*
* app dies
  */

/*

* PM2 solves this
*
* pm2 start app.js
  */

/*

* PM2:
*
* ✔ keeps app alive
* ✔ auto restarts crashes
* ✔ runs in background
* ✔ survives reboots
*
* 🎯 GOAL:
* Understand production process management
  */

// ---

// # -----------------------------------------------------------------------------

// # ! PHASE 10 — SECURITY GROUPS EXPLAINED

// # -----------------------------------------------------------------------------

/*

* TASK 10: Understand EC2 Firewall
  */

/*

* Security Group =
* AWS firewall
  */

/*

* Example:
*
* Port 80
* → allow browser traffic
*
* Port 443
* → allow HTTPS
*
* Port 22
* → allow SSH
  */

/*

* WITHOUT OPEN PORTS:
*
* server works internally
* but internet cannot reach it
*
* 🎯 GOAL:
* Understand cloud networking basics
  */

// ---

// # -----------------------------------------------------------------------------

// # ! PHASE 11 — HTTPS & SSL EXPLAINED

// # -----------------------------------------------------------------------------

/*

* TASK 11: Understand SSL
  */

/*

* HTTP:
*
* insecure
  */

/*

* HTTPS:
*
* encrypted
  */

/*

* certbot installs SSL certificates
*
* sudo certbot --nginx
  */

/*

* RESULT:
*
* http://
* becomes:
*
* https://
  */

/*

* WHY IMPORTANT?
*
* ✔ security
* ✔ browser trust
* ✔ production standard
* ✔ required for cookies/auth
*
* 🎯 GOAL:
* Understand modern web security
  */

// ---

// # -----------------------------------------------------------------------------

// # ! PHASE 12 — YOUR COMPLETE ARCHITECTURE

// # -----------------------------------------------------------------------------

/*

* TASK 12: Understand Your Real Infrastructure
  */

/*

* FINAL FLOW
*
* USER
* ↓
* havenastays.net
* ↓
* Vercel
* ↓
* React Frontend
* ↓
* API Requests
* ↓
* api.havenastays.net
* ↓
* DNS
* ↓
* EC2
* ↓
* nginx
* ↓
* localhost:8080
* ↓
* Node.js API
* ↓
* MongoDB
  */

/*

* 🎯 GOAL:
* Understand fullstack production architecture
  */

// ---

// # -----------------------------------------------------------------------------

// # ! PHASE 13 — WHAT YOU ACTUALLY LEARNED

// # -----------------------------------------------------------------------------

/*

* You now understand:
*
* ✔ DNS
* ✔ Domains
* ✔ Subdomains
* ✔ nginx
* ✔ Reverse proxy
* ✔ EC2
* ✔ PM2
* ✔ Vercel deployment
* ✔ Production architecture
* ✔ Cloud networking
* ✔ HTTPS
* ✔ Real deployment flow
  */

/*

* THIS IS NO LONGER:
*
* "tutorial knowledge"
*
* This is:
*
* ✔ real infrastructure engineering
* ✔ junior DevOps knowledge
* ✔ backend deployment engineering
* ✔ production system understanding
  */
