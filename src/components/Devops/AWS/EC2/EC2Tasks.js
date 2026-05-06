// =============================================================================  
// 🧠 EC2 MASTERY ROADMAP (MERN + ENTRY DEVOPS)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! PHASE 1 — FOUNDATION (UNDERSTAND YOUR SERVER)  
// -----------------------------------------------------------------------------

/*
 * TASK 1: Launch & Connect to EC2  == DONE
 *
 * ✔ Launch Amazon Linux instance
 * ✔ Connect via EC2 Instance Connect
 * ✔ Run:
 *
 * whoami
 * pwd
 * ls
 *
 * 🎯 Goal:
 * Understand you are inside a real Linux machine
 */


/*
 * TASK 2: Update & Install Basic Tools == DONE
 *
 * Run:
 *
 * sudo yum update -y
 * sudo yum install git -y
 *
 * 🎯 Goal:
 * Understand package management (yum)
 */


/*
 * TASK 3: File System Mastery == DONE
 *
 * Practice:
 *
 * mkdir app
 * cd app
 * touch index.js
 * nano index.js
 *
 * 🎯 Goal:
 * Navigate Linux like a pro
 */


// -----------------------------------------------------------------------------  
// ! PHASE 2 — BACKEND DEPLOYMENT (CORE MERN SKILL)  
// -----------------------------------------------------------------------------

/*
 * TASK 4: Install Node.js == DONE
 *
 * sudo yum install nodejs -y
 * node -v
 *
 * 🎯 Goal:
 * Prepare server for backend apps
 */


/*
 * TASK 5: Run a Simple Node Server == DONE
 *
 * Create app.js and run:
 *
 * node app.js
 *
 * 🎯 Goal:
 * Understand server execution on EC2
 */


/*
 * TASK 6: Open Port (CRITICAL) == DONE
 *
 * Go to:
 * EC2 → Security Group → Inbound rules
 *
 * Add:
 * Port: 3000
 * Source: Anywhere
 *
 * 🎯 Goal:
 * Understand networking + firewall
 */


/*
 * TASK 7: Access App via Browser == DONE
 *
 * http://your-public-ip:3000
 *
 * 🎯 Goal:
 * Connect frontend user → backend server
 */


// -----------------------------------------------------------------------------  
// ! PHASE 3 — REAL MERN DEPLOYMENT  
// -----------------------------------------------------------------------------

/*
 * TASK 8: Clone Your MERN Backend == DONE
 *
 * git clone <your-repo>
 * cd project
 * npm install
 *
 * 🎯 Goal:
 * Deploy real-world backend
 */


/*
 * TASK 9: Run Backend with PM2 == DONE
 *
 * npm install -g pm2
 * pm2 start app.js
 * pm2 save
 *
 * 🎯 Goal:
 * Keep app running (even after crash)
 */


/*
 * TASK 10: Environment Variables == DONE
 *
 * nano .env
 *
 * Add:
 * PORT=3000
 * DB_URL=your-db
 *
 * 🎯 Goal:
 * Secure config management
 */


// -----------------------------------------------------------------------------  
// ! PHASE 4 — FRONTEND DEPLOYMENT  
// -----------------------------------------------------------------------------

/*
 * TASK 11: Deploy React App == Done
 *
 * npm run build
 *
 * Then:
 * Serve with:
 *
 * npx serve -s build
 *
 * 🎯 Goal:
 * Understand frontend hosting
 */


/*
 * TASK 12: Use Nginx (PRO LEVEL STEP) == DONE
 *
 * sudo yum install nginx -y
 *
 * Configure reverse proxy:
 *
 * frontend → port 80
 * backend → port 3000
 *
 * 🎯 Goal:
 * Production-level setup
 */


// -----------------------------------------------------------------------------  
// ! PHASE 5 — NETWORKING & DOMAIN  
// -----------------------------------------------------------------------------

/*
 * TASK 13: Connect Domain Name
 *
 * Buy domain (Namecheap, GoDaddy)
 *
 * Point:
 * A record → your EC2 IP
 *
 * 🎯 Goal:
 * Replace IP with real domain
 */


/*
 * TASK 14: Enable HTTPS (SSL)
 *
 * Install:
 * certbot
 *
 * Enable HTTPS
 *
 * 🎯 Goal:
 * Secure your app (real-world requirement)
 */


// -----------------------------------------------------------------------------  
// ! PHASE 6 — DEVOPS FOUNDATION  
// -----------------------------------------------------------------------------

/*
 * TASK 15: Automate Deployment (YOUR LEVEL 🔥) == Done
 *
 * Create bash script:
 *
 * git pull
 * npm install
 * pm2 restart
 *
 * 🎯 Goal:
 * Move into DevOps automation
 */


// -----------------------------------------------------------------------------  
// 🧠 BONUS TASKS (ADVANCED BUT IMPORTANT)  
// -----------------------------------------------------------------------------

/*
 * ✔ Setup Docker on EC2
 * ✔ Use GitHub Actions for CI/CD == Done
 * ✔ Setup Load Balancer (ELB)
 * ✔ Use S3 for frontend hosting
 * ✔ Setup CloudWatch logs
 */


// -----------------------------------------------------------------------------  
// 🧠 FINAL MINDSET  
// -----------------------------------------------------------------------------
/*
 * If you complete this:
 *
 * You can:
 * ✔ deploy fullstack apps
 * ✔ manage servers
 * ✔ debug production issues
 * ✔ automate workflows
 *
 * This is:
 * → Junior DevOps Engineer level
 * → Strong MERN backend engineer
 */