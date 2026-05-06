// =============================================================================  
// 🧠 EC2 INSTANCES (DEEP DIVE FOR ENGINEERS)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! WHAT AN EC2 INSTANCE REALLY IS  
// -----------------------------------------------------------------------------
/*
 * EC2 = virtual computer running in AWS
 *
 * It behaves like:
 * ✔ a real Linux server
 * ✔ your Mac terminal (but remote)
 *
 * Your current terminal:
 *
 * [ec2-user@ip-172-31-34-181 ~]$
 *
 * → you are inside a real server
 */


/*
 * 🧠 Think:
 *
 * Laptop → local machine
 * EC2 → cloud machine
 */


// -----------------------------------------------------------------------------  
// ? BREAKING DOWN YOUR INSTANCE (FROM SCREENSHOT)  
// -----------------------------------------------------------------------------
/*
 * Instance Name:
 * MBK_FIRST_TEST_SERVER
 *
 * Instance ID:
 * i-0b7b864920b1fb8fb
 *
 * Public IP:
 * 13.60.63.231
 *
 * Private IP:
 * 172.31.34.181
 *
 * Instance Type:
 * t3.micro
 */


/*
 * 🧠 KEY UNDERSTANDING:
 *
 * Public IP  → internet access
 * Private IP → internal AWS communication
 */


// -----------------------------------------------------------------------------  
// ! INSTANCE TYPES (VERY IMPORTANT)  
// -----------------------------------------------------------------------------
/*
 * Example:
 * t3.micro (what you used)
 *
 * Meaning:
 *
 * t → general purpose
 * 3 → generation
 * micro → small size
 */


/*
 * TYPES:
 *
 * t3.micro   → small apps (free tier)
 * t3.medium  → moderate apps
 * c5.large   → CPU intensive
 * r5.large   → memory intensive
 */


/*
 * 🧠 RULE:
 * Choose instance type based on workload
 */


// -----------------------------------------------------------------------------  
// ! AMI (OPERATING SYSTEM)  
// -----------------------------------------------------------------------------
/*
 * AMI = template for your server
 *
 * You selected:
 * Amazon Linux 2023
 *
 * This determines:
 * - OS
 * - default username (ec2-user)
 */


/*
 * OTHER OPTIONS:
 *
 * Ubuntu → ubuntu user
 * Windows → Administrator
 */


/*
 * 🧠 If SSH fails → wrong username is common cause
 */


// -----------------------------------------------------------------------------  
// ! CONNECTING TO INSTANCE  
// -----------------------------------------------------------------------------
/*
 * You used:
 * EC2 Instance Connect (browser SSH)
 *
 * Alternative:
 *
ssh -i key.pem ec2-user@13.60.63.231
 */


/*
 * 🧠 What SSH does:
 *
 * → gives you remote terminal access
 * → you control server like your laptop
 */


// -----------------------------------------------------------------------------  
// ! SECURITY GROUP (FIREWALL)  
// -----------------------------------------------------------------------------
/*
 * From your screen:
 * Security group → launch-wizard-1
 *
 * Controls:
 * - who can access your server
 * - which ports are open
 */


/*
 * COMMON PORTS:
 *
 * 22 → SSH (already enabled)
 * 80 → HTTP (web apps)
 * 443 → HTTPS
 */


/*
 * 🧠 If your app doesn't open in browser:
 * → security group is the problem 90% of the time
 */


// -----------------------------------------------------------------------------  
// ! STORAGE (EBS VOLUME)  
// -----------------------------------------------------------------------------
/*
 * Your instance has:
 * ~8GB storage
 *
 * This is:
 * EBS (Elastic Block Storage)
 */


/*
 * Think:
 * EBS = hard disk of your server
 *
 * Stores:
 * - code
 * - logs
 * - installed packages
 */


// -----------------------------------------------------------------------------  
// ! INSTANCE LIFECYCLE (CRITICAL)  
// -----------------------------------------------------------------------------
/*
 * STATES:
 *
 * pending → starting
 * running → active (your current state)
 * stopped → powered off
 * terminated → deleted (irreversible ⚠️)
 */


/*
 * ⚠️ IMPORTANT:
 *
 * If you terminate:
 * → everything is lost
 */


// -----------------------------------------------------------------------------  
// 🔄 PUBLIC IP BEHAVIOR  
// -----------------------------------------------------------------------------
/*
 * Your Public IP:
 * 13.60.63.231
 *
 * If instance stops & starts:
 * → IP changes
 */


/*
 * SOLUTION:
 * Use Elastic IP (static IP)
 */


// -----------------------------------------------------------------------------  
// 🧠 WHAT YOU CAN DO INSIDE EC2 (REAL POWER)  
// -----------------------------------------------------------------------------
/*
 * You now have a Linux server
 *
 * You can:
 *
 * ✔ install Node.js
 * ✔ run backend APIs
 * ✔ host websites
 * ✔ run Docker containers
 * ✔ deploy fullstack apps
 */


/*
 * Example:
 *
sudo yum update -y
sudo yum install nodejs -y
node -v
 */

// =============================================================================  
// 🧠 COMMAND BREAKDOWN: sudo yum update -y  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! WHAT THIS COMMAND DOES  
// -----------------------------------------------------------------------------
/*
 * Updates all installed packages on your EC2 server
 *
 * Think:
 * → "Bring my system up to date"
 */


/*
 * RESULT:
 * ✔ latest security patches
 * ✔ bug fixes
 * ✔ updated software versions
 */


// -----------------------------------------------------------------------------  
// 🔍 BREAKING IT INTO PARTS  
// -----------------------------------------------------------------------------
/*
 * sudo
 * yum
 * update
 * -y
 */


// -----------------------------------------------------------------------------  
// ! sudo (SUPERUSER DO)  
// -----------------------------------------------------------------------------
/*
 * Runs the command as admin (root)
 *
 * WHY:
 * Updating system requires permission
 *
 * Without sudo:
 * ❌ Permission denied
 */


/*
 * 🧠 Think:
 * sudo = "do this as system administrator"
 */


// -----------------------------------------------------------------------------  
// ! yum (PACKAGE MANAGER)  
// -----------------------------------------------------------------------------
/*
 * yum = tool for managing software in Amazon Linux
 *
 * It is used to:
 * ✔ install packages
 * ✔ update packages
 * ✔ remove packages
 */


/*
 * Example:
 *
 * yum install nodejs
 * yum remove nginx
 */


/*
 * 🧠 Think:
 * yum = "App Store for your Linux server"
 */


// -----------------------------------------------------------------------------  
// ! update  
// -----------------------------------------------------------------------------
/*
 * Tells yum:
 * → update ALL installed packages
 *
 * This includes:
 * - system libraries
 * - installed tools
 * - security updates
 */


/*
 * Equivalent idea:
 * "Update all apps on your phone"
 */


// -----------------------------------------------------------------------------  
// ! -y (AUTO YES)  
// -----------------------------------------------------------------------------
/*
 * Automatically answers "yes" to prompts
 *
 * Without -y:
 *
 * yum will ask:
 * → "Do you want to continue? (y/n)"
 *
 * With -y:
 * → it skips the question
 */


/*
 * 🧠 Think:
 * -y = "just do it without asking me"
 */


// -----------------------------------------------------------------------------  
// ⚙️ WHAT HAPPENS INTERNALLY  
// -----------------------------------------------------------------------------
/*
 * 1. Connects to AWS package repositories
 * 2. Checks for updates
 * 3. Downloads newer versions
 * 4. Installs them
 * 5. Replaces old versions
 */


// -----------------------------------------------------------------------------  
// ⚠️ IMPORTANT NOTES  
// -----------------------------------------------------------------------------
/*
 * ✔ Safe to run on fresh EC2
 *
 * ⚠️ On production servers:
 * - updates can break things sometimes
 * - test before updating
 */


/*
 * 🧠 Best practice:
 *
 * Run this right after launching EC2
 */


// -----------------------------------------------------------------------------  
// 🚀 REAL DEVOPS USAGE  
// -----------------------------------------------------------------------------
/*
 * First thing engineers do after SSH:
 *
 * sudo yum update -y
 *
 * Then:
 * install tools (node, docker, nginx)
 */


/*
 * Example flow:
 *
 * sudo yum update -y
 * sudo yum install nodejs -y
 * sudo yum install git -y
 */


// -----------------------------------------------------------------------------  
// 🧠 SENIOR-LEVEL INSIGHT  
// -----------------------------------------------------------------------------
/*
 * Updating system ensures:
 *
 * ✔ security vulnerabilities patched
 * ✔ stable environment
 * ✔ compatibility with new software
 *
 * Ignoring updates:
 * ❌ security risks
 * ❌ outdated dependencies
 */


/*
 * 🧠 This is where DevOps begins
 */


// -----------------------------------------------------------------------------  
// 🚀 REAL DEPLOYMENT FLOW (IMPORTANT)  
// -----------------------------------------------------------------------------
/*
 * Your next real step:
 *
 * 1. Install Node.js
 * 2. Create simple server
 * 3. open port 3000
 * 4. access via browser
 *
 * RESULT:
 * → your app is live globally
 */


// -----------------------------------------------------------------------------  
// ⚠️ COMMON BEGINNER MISTAKES  
// -----------------------------------------------------------------------------
/*
 * ❌ not opening port (security group)
 * ❌ using wrong username
 * ❌ forgetting sudo
 * ❌ stopping instance and losing IP
 * ❌ not saving key.pem
 */


// -----------------------------------------------------------------------------  
// 🧠 SENIOR-LEVEL MINDSET  
// -----------------------------------------------------------------------------
/*
 * EC2 is not just a server.
 *
 * It is:
 * - your backend runtime
 * - your deployment environment
 * - your infrastructure unit
 *
 * Real thinking:
 *
 * "How do I design scalable systems using instances?"
 */


// -----------------------------------------------------------------------------  
// 🚀 NEXT STEP (FOR YOU SPECIFICALLY)  
// -----------------------------------------------------------------------------
/*
 * Inside your current terminal, run:
 *
 * STEP 1:

sudo yum update -y
sudo yum install nodejs -y
node -v


/*
 * STEP 2: Create server

nano app.js
const http = require("http");

http.createServer((req, res) => {
  res.end("Hello from EC2 🚀");
}).listen(3000);


node app.js


/*
 * STEP 3:
 * Go to AWS → Security Group
 * → Add inbound rule:
 *
 * Port: 3000
 * Source: Anywhere
 *
 * STEP 4:
 *
 * Open browser:
 * http://13.60.63.231:3000
 *
 * 🎉 Your app is LIVE
 

 * 
 */


// =============================================================================  
// 🧠 PM2 MASTERY (KEEP YOUR NODE SERVER ALIVE)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! PHASE 1 — UNDERSTAND PM2  
// -----------------------------------------------------------------------------

/*
 * TASK 1: What is PM2?
 *
 * PM2 is a process manager for Node.js apps
 *
 * It helps you:
 * ✔ Keep app running in background
 * ✔ Restart app if it crashes
 * ✔ Run app after server reboot
 *
 * 🎯 Goal:
 * Understand why PM2 is needed in production
 */


// -----------------------------------------------------------------------------  
// ! PHASE 2 — INSTALLATION  
// -----------------------------------------------------------------------------

/*
 * TASK 2: Install PM2 globally
 *
 * Run:
 *
 * npm install -g pm2
 *
 * 🎯 Goal:
 * Make PM2 available anywhere on your server
 */


// -----------------------------------------------------------------------------  
// ! PHASE 3 — RUN YOUR APP  
// -----------------------------------------------------------------------------

/*
 * TASK 3: Start your Node app with PM2
 *
 * pm2 start app.js
 *
 * OR (recommended):
 *
 * pm2 start app.js --name my-app
 *
 * 🎯 Goal:
 * Run your app in the background (no terminal needed)
 */


// -----------------------------------------------------------------------------  
// ! PHASE 4 — MONITORING  
// -----------------------------------------------------------------------------

/*
 * TASK 4: Check running apps
 *
 * pm2 list
 *
 * 🎯 Goal:
 * See all running processes
 */


/*
 * TASK 5: View logs
 *
 * pm2 logs
 *
 * 🎯 Goal:
 * Debug your app in real-time
 */


/*
 * TASK 6: Monitor performance
 *
 * pm2 monit
 *
 * 🎯 Goal:
 * See CPU and memory usage
 */


// -----------------------------------------------------------------------------  
// ! PHASE 5 — CONTROL YOUR APP  
// -----------------------------------------------------------------------------

/*
 * TASK 7: Restart app
 *
 * pm2 restart app.js
 *
 * 🎯 Goal:
 * Apply updates without killing server
 */


/*
 * TASK 8: Stop app
 *
 * pm2 stop app.js
 *
 * 🎯 Goal:
 * Pause your application
 */


/*
 * TASK 9: Delete app from PM2
 *
 * pm2 delete app.js
 *
 * 🎯 Goal:
 * Completely remove process from PM2
 */


// -----------------------------------------------------------------------------  
// ! PHASE 6 — AUTO START (VERY IMPORTANT)  
// -----------------------------------------------------------------------------

/*
 * TASK 10: Save current processes
 *
 * pm2 save
 *
 * 🎯 Goal:
 * Store running apps for reboot recovery
 */


/*
 * TASK 11: Enable startup on reboot
 *
 * pm2 startup
 *
 * Then run the command it gives you
 *
 * 🎯 Goal:
 * Automatically restart app when EC2 restarts
 */


// -----------------------------------------------------------------------------  
// ! PHASE 7 — ADVANCED USAGE  
// -----------------------------------------------------------------------------

/*
 * TASK 12: Restart all apps
 *
 * pm2 restart all
 *
 * 🎯 Goal:
 * Manage multiple services easily
 */


/*
 * TASK 13: Run multiple apps
 *
 * pm2 start app1.js --name api
 * pm2 start app2.js --name worker
 *
 * 🎯 Goal:
 * Manage microservices on one server
 */


/*
 * TASK 14: Cluster mode (performance boost)
 *
 * pm2 start app.js -i max
 *
 * 🎯 Goal:
 * Use all CPU cores for better performance
 */


// -----------------------------------------------------------------------------  
// 🧠 BONUS — COMMON WORKFLOW  
// -----------------------------------------------------------------------------

/*
 * When deploying updates:
 *
 * git pull
 * npm install
 * pm2 restart app.js
 *
 * 🎯 Goal:
 * Simple DevOps deployment flow
 */


// -----------------------------------------------------------------------------  
// 🧠 FINAL MINDSET  
// -----------------------------------------------------------------------------
/*
 * If you understand PM2:
 *
 * ✔ Your app never goes down easily
 * ✔ You can debug production logs
 * ✔ You can scale your app
 *
 * This is:
 * → Entry-level DevOps skill
 * → Production-ready backend mindset
 */