// =============================================================================  
// 🧠 AWS FOR ENGINEERS (BEGINNER → SOLID FOUNDATION)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! WHAT AWS IS  
// -----------------------------------------------------------------------------
/*
 * AWS (Amazon Web Services) is a cloud computing platform.
 *
 * Instead of:
 * ❌ buying physical servers
 * ❌ managing hardware
 *
 * You:
 * ✔ rent servers
 * ✔ deploy apps online
 * ✔ scale anytime
 *
 * Think:
 * AWS = "internet data center you control"
 */


// -----------------------------------------------------------------------------  
// ? WHY AWS MATTERS  
// -----------------------------------------------------------------------------
/*
 * Without AWS:
 * - Expensive hardware
 * - Manual scaling
 * - Slow deployment
 *
 * With AWS:
 * - Deploy apps in minutes
 * - Pay only for what you use
 * - Scale globally
 *
 * Real companies using AWS:
 * Netflix, Uber, Airbnb
 */


// -----------------------------------------------------------------------------  
// 🧠 CLOUD COMPUTING (CORE IDEA)  
// -----------------------------------------------------------------------------
/*
 * Cloud = using remote servers over the internet
 *
 * Instead of:
 * Your laptop → runs everything ❌
 *
 * You use:
 * AWS servers → run your app ✔
 *
 * Types of Cloud:
 *
 * 1. IaaS → Infrastructure (EC2)
 * 2. PaaS → Platform (Elastic Beanstalk)
 * 3. SaaS → Software (Gmail, Dropbox)
 */


// -----------------------------------------------------------------------------  
// ! AWS GLOBAL INFRASTRUCTURE  
// -----------------------------------------------------------------------------
/*
 * AWS has:
 *
 * ✔ Regions → locations (e.g. eu-north-1)
 * ✔ Availability Zones → data centers inside region
 *
 * Example:
 * Europe (Stockholm)
 * → multiple data centers
 *
 * WHY:
 * - high availability
 * - fault tolerance
 */


/*
 * RULE:
 * Always pick region close to users
 */


// -----------------------------------------------------------------------------  
// * CORE AWS SERVICES (MUST KNOW)  
// -----------------------------------------------------------------------------
/*
 * 1. EC2 (Elastic Compute Cloud)
 *    → virtual servers (your backend runs here)
 *
 * 2. S3 (Simple Storage Service)
 *    → store files (images, videos, backups)
 *
 * 3. RDS (Relational Database Service)
 *    → managed databases (MySQL, PostgreSQL)
 *
 * 4. IAM (Identity Access Management)
 *    → control access (users, permissions)
 *
 * 5. VPC (Virtual Private Cloud)
 *    → network configuration
 */


/*
 * 🧠 Think:
 *
 * EC2 → server
 * S3  → storage
 * RDS → database
 * IAM → security
 * VPC → network
 */


// -----------------------------------------------------------------------------  
// ! EC2 (MOST IMPORTANT FOR YOU RIGHT NOW)  
// -----------------------------------------------------------------------------
/*
 * EC2 = virtual machine in the cloud
 *
 * You can:
 * - install Node.js
 * - run backend APIs
 * - host apps
 *
 * Your screen shows:
 * "Launch Instance"
 *
 * That means:
 * → create a server
 */


/*
 * EC2 FLOW:
 *
 * 1. Choose OS (Amazon Linux, Ubuntu)
 * 2. Choose instance type (t3.micro)
 * 3. Configure security (ports)
 * 4. Launch server
 */


/*
 * RESULT:
 * → you get a public IP
 * → you SSH into server
 */


// -----------------------------------------------------------------------------  
// 🔐 IAM (VERY IMPORTANT)  
// -----------------------------------------------------------------------------
/*
 * IAM controls:
 * - who can access AWS
 * - what they can do
 *
 * Types:
 *
 * ✔ Root user → full control (danger ⚠️)
 * ✔ IAM user → limited access (safe)
 */


/*
 * RULE:
 * NEVER use root for daily work
 *
 * Use IAM user instead
 */


// -----------------------------------------------------------------------------  
// 🌐 S3 (FILE STORAGE)  
// -----------------------------------------------------------------------------
/*
 * S3 = cloud storage bucket
 *
 * You can:
 * - store images
 * - host frontend
 * - backup data
 *
 * Think:
 * S3 = "Google Drive for developers"
 */


// -----------------------------------------------------------------------------  
// 🧠 HOW EVERYTHING CONNECTS  
// -----------------------------------------------------------------------------
/*
 * Example (Your Stack):
 *
 * React App → S3 (frontend)
 *
 * Node API → EC2 (backend)
 *
 * Database → RDS
 *
 * Access control → IAM
 */


/*
 * FLOW:
 *
 * User → frontend (S3)
 * → API request → EC2
 * → DB query → RDS
 * → response → user
 */


// -----------------------------------------------------------------------------  
// 🚀 DEPLOYMENT FLOW (REAL DEVOPS THINKING)  
// -----------------------------------------------------------------------------
/*
 * WITHOUT AWS:
 * - runs only on your laptop ❌
 *
 * WITH AWS:
 *
 * 1. Build app
 * 2. Upload to server (EC2 or S3)
 * 3. Make it public
 *
 * RESULT:
 * → app is live on internet
 */


// -----------------------------------------------------------------------------  
// 🔑 SSH (CONNECT TO SERVER)  
// -----------------------------------------------------------------------------
/*
 * After launching EC2:
 *
 * You connect using SSH:
 *
ssh -i key.pem ec2-user@your-ip
 *
 * This gives you:
 * → remote terminal
 */


/*
 * 🧠 Think:
 * SSH = remote control for your server
 */


// -----------------------------------------------------------------------------  
// ⚠️ SECURITY GROUP (FIREWALL)  
// -----------------------------------------------------------------------------
/*
 * Controls:
 * - who can access your server
 * - which ports are open
 *
 * Common ports:
 *
 * 22 → SSH
 * 80 → HTTP
 * 443 → HTTPS
 */


/*
 * If your app is not accessible:
 * → check security group first
 */


// -----------------------------------------------------------------------------  
// 🧠 COMMON BEGINNER MISTAKES  
// -----------------------------------------------------------------------------
/*
 * ❌ using root user
 * ❌ not opening ports (security group)
 * ❌ forgetting SSH key
 * ❌ wrong region
 * ❌ deleting instance accidentally
 */


// -----------------------------------------------------------------------------  
// 🧠 SENIOR-LEVEL MINDSET  
// -----------------------------------------------------------------------------
/*
 * AWS is not about clicking buttons.
 *
 * It's about:
 * - infrastructure design
 * - scalability
 * - security
 * - automation
 *
 * Think:
 *
 * "How does my system run in the cloud?"
 */


// -----------------------------------------------------------------------------  
// 🚀 YOUR NEXT STEP (VERY IMPORTANT)  
// -----------------------------------------------------------------------------
/*
 * Since you already opened EC2 screen:
 *
 * DO THIS:
 *
 * 1. Launch instance (Amazon Linux)
 * 2. Download key pair
 * 3. SSH into server
 * 4. Install Node.js
 * 5. Run simple app
 *
 * → this is your first real cloud deployment
 */


// -----------------------------------------------------------------------------  
// 🚀 FINAL SUMMARY  
// -----------------------------------------------------------------------------
/*
 * AWS basics:
 *
 * ✔ EC2 → server
 * ✔ S3 → storage
 * ✔ RDS → database
 * ✔ IAM → access control
 * ✔ VPC → networking
 *
 * Master this first:
 *
 * ✔ launching EC2
 * ✔ SSH connection
 * ✔ deploying simple app
 *
 * Next level:
 *
 * ✔ CI/CD
 * ✔ Docker
 * ✔ Load balancer
 * ✔ Scaling
 */