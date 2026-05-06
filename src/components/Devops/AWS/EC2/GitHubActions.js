// =============================================================================  
// 🧠 GITHUB ACTIONS MASTERY ROADMAP (MERN + DEVOPS PIPELINE)  
// =============================================================================  

// Uses: :contentReference[oaicite:0]{index=0}


// -----------------------------------------------------------------------------  
// ! PHASE 1 — FOUNDATION (UNDERSTAND CI/CD CONCEPTS)  
// -----------------------------------------------------------------------------

/*
 * TASK 1: Understand GitHub Actions == MUST DO
 *
 * GitHub Actions automates:
 *
 * push → test → build → deploy
 *
 * 🎯 Goal:
 * Replace manual deployment with automation
 */


/*
 * TASK 2: Create Your First Workflow == MUST DO
 *
 * Create file:
 *
 * .github/workflows/first.yml
 *
 * Add:
 *
 * name: First Workflow
 *
 * on:
 *   push:
 *     branches: [main]
 *
 * jobs:
 *   test:
 *     runs-on: ubuntu-latest
 *
 * 🎯 Goal:
 * Understand workflow structure
 */


/*
 * TASK 3: Run Your First Pipeline == MUST DO
 *
 * Add steps:
 *
 * steps:
 *   - uses: actions/checkout@v4
 *   - run: echo "Pipeline working"
 *
 * Push → check Actions tab
 *
 * 🎯 Goal:
 * See CI running live
 */


// -----------------------------------------------------------------------------  
// ! PHASE 2 — NODE + REACT CI (YOUR STACK)  
// -----------------------------------------------------------------------------

/*
 * TASK 4: Setup Node Environment == DONE LEVEL
 *
 * - uses: actions/setup-node@v4
 *   with:
 *     node-version: 18
 *
 * 🎯 Goal:
 * Prepare runner for JavaScript apps
 */


/*
 * TASK 5: Backend CI (API TESTING) == CRITICAL
 *
 * - run: cd backend && npm install
 * - run: cd backend && npm test
 *
 * 🎯 Goal:
 * Prevent broken backend deployments
 */


/*
 * TASK 6: Frontend CI (BUILD REACT/NEXT) == CRITICAL
 *
 * - run: cd frontend && npm install
 * - run: cd frontend && npm run build
 *
 * 🎯 Goal:
 * Ensure UI builds successfully
 */


// -----------------------------------------------------------------------------  
// ! PHASE 3 — PROJECT STRUCTURE (REAL WORLD)  
// -----------------------------------------------------------------------------

/*
 * TASK 7: Run Based on Changes == PRO MOVE
 *
 * on:
 *   push:
 *     paths:
 *       - "backend/**"
 *
 * 🎯 Goal:
 * Avoid unnecessary runs
 */


/*
 * TASK 8: Parallel Jobs == IMPORTANT
 *
 * jobs:
 *   backend:
 *   frontend:
 *
 * 🎯 Goal:
 * Speed up pipeline
 */


/*
 * TASK 9: Job Dependency == IMPORTANT
 *
 * deploy:
 *   needs: [backend, frontend]
 *
 * 🎯 Goal:
 * Deploy only after success
 */


// -----------------------------------------------------------------------------  
// ! PHASE 4 — SECRETS & SECURITY  
// -----------------------------------------------------------------------------

/*
 * TASK 10: Add Secrets == MUST DO
 *
 * Repo → Settings → Secrets → Actions
 *
 * Add:
 * SERVER_IP
 * SSH_KEY
 * DB_URL
 *
 * 🎯 Goal:
 * Secure credentials
 */


/*
 * TASK 11: Use Secrets == MUST DO
 *
 * Example:
 *
 * host: ${{ secrets.SERVER_IP }}
 *
 * 🎯 Goal:
 * Safe authentication
 */


// -----------------------------------------------------------------------------  
// ! PHASE 5 — EC2 AUTO DEPLOYMENT (YOUR LEVEL 🔥)  
// -----------------------------------------------------------------------------

/*
 * TASK 12: SSH into EC2 == CRITICAL
 *
 * Use:
 * appleboy/ssh-action
 *
 * 🎯 Goal:
 * Execute commands on server
 */


/*
 * TASK 13: Backend Auto Deploy == PRO LEVEL
 *
 * script:
 *
 * cd blog-website-api
 * git pull origin main
 * npm install
 * pm2 restart all
 *
 * 🎯 Goal:
 * Fully automate backend deployment
 */


/*
 * TASK 14: Frontend Auto Deploy == PRO LEVEL
 *
 * script:
 *
 * cd frontend
 * git pull
 * npm install
 * npm run build
 *
 * 🎯 Goal:
 * Keep UI updated automatically
 */


// -----------------------------------------------------------------------------  
// ! PHASE 6 — PERFORMANCE OPTIMIZATION  
// -----------------------------------------------------------------------------

/*
 * TASK 15: Cache Dependencies == MUST LEARN
 *
 * - uses: actions/cache@v4
 *
 * 🎯 Goal:
 * Speed up builds
 */


/*
 * TASK 16: Matrix Testing == ADVANCED
 *
 * strategy:
 *   matrix:
 *     node: [16, 18, 20]
 *
 * 🎯 Goal:
 * Test across environments
 */


// -----------------------------------------------------------------------------  
// ! PHASE 7 — PRODUCTION FLOW  
// -----------------------------------------------------------------------------

/*
 * TASK 17: Staging vs Production == IMPORTANT
 *
 * dev → staging
 * main → production
 *
 * 🎯 Goal:
 * Prevent breaking production
 */


/*
 * TASK 18: Manual Deployment == PRO LEVEL
 *
 * on:
 *   workflow_dispatch:
 *
 * 🎯 Goal:
 * Control production releases
 */


/*
 * TASK 19: Notifications == OPTIONAL
 *
 * Slack / Email integration
 *
 * 🎯 Goal:
 * Monitor pipeline
 */


// -----------------------------------------------------------------------------  
// ! PHASE 8 — ADVANCED DEVOPS  
// -----------------------------------------------------------------------------

/*
 * TASK 20: Docker Integration == NEXT LEVEL
 *
 * docker build
 * docker push
 *
 * 🎯 Goal:
 * Containerize app
 */


/*
 * TASK 21: Docker Deployment on EC2
 *
 * docker pull
 * docker run
 *
 * 🎯 Goal:
 * Modern deployment approach
 */


/*
 * TASK 22: Security Checks
 *
 * npm audit
 *
 * 🎯 Goal:
 * Detect vulnerabilities
 */


// -----------------------------------------------------------------------------  
// 🧠 BONUS TASKS  
// -----------------------------------------------------------------------------

/*
 * ✔ Auto rollback on failure
 * ✔ Blue-green deployment
 * ✔ Self-hosted runners (EC2)
 * ✔ Upload artifacts
 * ✔ AWS integrations (S3, ECS)
 */


// -----------------------------------------------------------------------------  
// 🧠 REAL WORKING EXAMPLE (FULL PIPELINE)  
// -----------------------------------------------------------------------------

/*
name: Full CI/CD Pipeline

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install backend deps
        run: cd backend && npm install

      - name: Test backend
        run: cd backend && npm test

      - name: Build frontend
        run: cd frontend && npm install && npm run build

  deploy:
    needs: build
    runs-on: ubuntu-latest

    steps:
      - name: Deploy to EC2
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.SERVER_IP }}
          username: ec2-user
          key: ${{ secrets.SSH_KEY }}

          script: |
            cd blog-website-api
            git pull origin main
            npm install
            pm2 restart all
*/


// -----------------------------------------------------------------------------  
// 🧠 FINAL MINDSET  
// -----------------------------------------------------------------------------

/*
 * If you complete this:
 *
 * ✔ You can build CI/CD pipelines
 * ✔ You can deploy automatically to EC2
 * ✔ You understand real DevOps workflows
 * ✔ You are production-ready
 *
 * This is:
 * → Mid-level DevOps Engineer level
 * → Strong fullstack engineer advantage
 */



/*
// =============================================================================
// 🧠 FRONTEND DEPLOYMENT (REACT + EC2 + GITHUB ACTIONS)
// =============================================================================


// -----------------------------------------------------------------------------
// ! PHASE 1 — PREP YOUR PROJECT (LOCAL MACHINE)
// -----------------------------------------------------------------------------

/*
 * TASK 1: Confirm React App Structure
 *
 * Run:
 *
 * ls
 *
 * You should see:
 * - package.json
 * - src/
 * - vite.config.js (or CRA setup)
 *
 * 🎯 Goal:
 * Ensure your React app is at root (no wrong folder paths)
 */


/*
 * TASK 2: Test Build Locally
 *
 * Run:
 *
 * npm install
 * npm run build
 *
 * Then:
 *
 * ls
 *
 * You should see:
 * dist/
 *
 * 🎯 Goal:
 * Confirm your app builds before automation
 */


// -----------------------------------------------------------------------------
// ! PHASE 2 — PREP EC2 SERVER
// -----------------------------------------------------------------------------

/*
 * TASK 3: Connect to EC2
 *
 * ssh -i your-key.pem ec2-user@YOUR_IP
 *
 * 🎯 Goal:
 * Access your production server
 */


/*
 * TASK 4: Install Nginx
 *
 * sudo yum install nginx -y
 * sudo systemctl start nginx
 *
 * 🎯 Goal:
 * Prepare server to serve frontend
 */


/*
 * TASK 5: Setup Web Directory
 *
 * sudo mkdir -p /var/www/react
 *
 * 🎯 Goal:
 * Create deployment folder
 */


/*
 * TASK 6: Fix Permissions (CRITICAL)
 *
 * sudo chown -R ec2-user:ec2-user /var/www
 * sudo chmod -R 755 /var/www
 *
 * 🎯 Goal:
 * Allow GitHub Actions to upload files
 */


// -----------------------------------------------------------------------------
// ! PHASE 3 — SSH SETUP (CI/CD ACCESS)
// -----------------------------------------------------------------------------

/*
 * TASK 7: Generate SSH Key (LOCAL MACHINE)
 *
 * ssh-keygen -t rsa -b 4096 -C "github-actions"
 *
 * Files created:
 * - id_rsa (PRIVATE)
 * - id_rsa.pub (PUBLIC)
 *
 * 🎯 Goal:
 * Enable GitHub → EC2 connection
 */


/*
 * TASK 8: Add PUBLIC Key to EC2
 *
 * cat id_rsa.pub
 *
 * Then on EC2:
 *
 * nano ~/.ssh/authorized_keys
 *
 * Paste key
 *
 * 🎯 Goal:
 * Allow GitHub to access server
 */


/*
 * TASK 9: Add PRIVATE Key to GitHub
 *
 * cat id_rsa
 *
 * Go to:
 * Settings → Secrets → Actions
 *
 * Add:
 * SSH_KEY = (paste full key)
 * SERVER_IP = your EC2 IP
 *
 * 🎯 Goal:
 * Secure authentication for deployment
 */


// -----------------------------------------------------------------------------
// ! PHASE 4 — GITHUB ACTIONS (AUTOMATION)
// -----------------------------------------------------------------------------

/*
 * TASK 10: Create Workflow File
 *
 * Path:
 *
 * .github/workflows/frontend.yml
 *
 * 🎯 Goal:
 * Define CI/CD pipeline
 */


/*
 * TASK 11: Add Workflow Code
 *
 * name: Frontend CI
 *
 * on:
 *   push:
 *     branches: [master]
 *
 * jobs:
 *   frontend:
 *     runs-on: ubuntu-latest
 *
 *     steps:
 *       - uses: actions/checkout@v4
 *
 *       - name: Setup Node
 *         uses: actions/setup-node@v4
 *         with:
 *           node-version: 18
 *
 *       - name: Install dependencies
 *         run: npm install
 *
 *       - name: Build project
 *         run: npm run build
 *
 *       - name: Upload to EC2
 *         uses: appleboy/scp-action@v0.1.7
 *         with:
 *           host: ${{ secrets.SERVER_IP }}
 *           username: ec2-user
 *           key: ${{ secrets.SSH_KEY }}
 *           source: "dist/*"
 *           target: "/var/www/react"
 *
 *       - name: Restart Nginx
 *         uses: appleboy/ssh-action@v1
 *         with:
 *           host: ${{ secrets.SERVER_IP }}
 *           username: ec2-user
 *           key: ${{ secrets.SSH_KEY }}
 *           script: |
 *             sudo systemctl restart nginx
 *
 * 🎯 Goal:
 * Automate build + deployment
 */


// -----------------------------------------------------------------------------
// ! PHASE 5 — DEPLOYMENT FLOW
// -----------------------------------------------------------------------------

/*
 * TASK 12: Trigger Deployment
 *
 * git add .
 * git commit -m "deploy"
 * git push origin master
 *
 * 🎯 Goal:
 * Start CI/CD pipeline
 */


/*
 * TASK 13: Monitor Deployment
 *
 * Go to:
 * GitHub → Actions tab
 *
 * Watch:
 * - install
 * - build
 * - upload
 * - restart nginx
 *
 * 🎯 Goal:
 * Debug and verify pipeline
 */


// -----------------------------------------------------------------------------
// ! PHASE 6 — VERIFY LIVE APP
// -----------------------------------------------------------------------------

/*
 * TASK 14: Open Browser
 *
 * http://YOUR_EC2_IP
 *
 * 🎯 Goal:
 * Confirm deployment success
 */


// -----------------------------------------------------------------------------
// 🧠 COMMON ERRORS (AND FIXES)
// -----------------------------------------------------------------------------

/*
 * ERROR: ssh: no key found
 * FIX: Re-add PRIVATE key with BEGIN/END lines
 */


/*
 * ERROR: Permission denied (upload)
 * FIX:
 *
 * sudo chown -R ec2-user:ec2-user /var/www
 */


/*
 * ERROR: dist not found
 * FIX: Ensure npm run build works locally
 */


/*
 * ERROR: blank page
 * FIX: Check Nginx root path matches /var/www/react
 */


// -----------------------------------------------------------------------------
// 🧠 FINAL MINDSET
// -----------------------------------------------------------------------------

/*
 * You now understand:
 *
 * ✔ CI (build on GitHub)
 * ✔ CD (deploy to EC2)
 * ✔ SSH authentication
 * ✔ Linux permissions
 * ✔ Nginx serving frontend
 *
 * This is:
 * → Real-world deployment workflow
 * → Entry DevOps engineer level
 
*/


// =============================================================================
// 🧠 FRONTEND DEPLOYMENT CHECKLIST (REACT + EC2 + GITHUB ACTIONS)
// =============================================================================


// -----------------------------------------------------------------------------
// ! PHASE 1 — LOCAL PRE-CHECK (BEFORE PUSH)
// -----------------------------------------------------------------------------

/*
 * STEP 1: Confirm project structure
 *
 * Run:
 *
 * ls
 *
 * Expect:
 * - package.json
 * - src/
 * - vite.config.js
 *
 * 🎯 Goal:
 * Ensure you're in the correct project root
 */


/*
 * STEP 2: Test build locally
 *
 * Run:
 *
 * npm install
 * npm run build
 *
 * Then:
 *
 * ls dist
 *
 * 🎯 Goal:
 * Ensure build works before CI/CD
 */


// -----------------------------------------------------------------------------
// ! PHASE 2 — EC2 SERVER CHECK
// -----------------------------------------------------------------------------

/*
 * STEP 3: Connect to EC2
 *
 * ssh -i key.pem ec2-user@YOUR_IP
 */


/*
 * STEP 4: Confirm deployment folder
 *
 * ls /var/www/react
 *
 * 🎯 Expect:
 * index.html
 * assets/
 */


/*
 * STEP 5: Fix permissions (if needed)
 *
 * sudo chown -R ec2-user:ec2-user /var/www
 * sudo chmod -R 755 /var/www
 *
 * 🎯 Goal:
 * Ensure GitHub can upload files
 */


/*
 * STEP 6: Check Nginx config
 *
 * sudo nano /etc/nginx/conf.d/app.conf
 *
 * Must contain:
 *
 * server {
 *   listen 80;
 *   root /var/www/react;
 *   index index.html;
 *
 *   location / {
 *     try_files $uri /index.html;
 *   }
 * }
 *
 * 🎯 Goal:
 * Ensure correct serving path
 */


// -----------------------------------------------------------------------------
// ! PHASE 3 — GITHUB SETUP CHECK
// -----------------------------------------------------------------------------

/*
 * STEP 7: Confirm GitHub Secrets
 *
 * Settings → Secrets → Actions
 *
 * Must exist:
 * - SSH_KEY
 * - SERVER_IP
 *
 * 🎯 Goal:
 * Allow secure EC2 access
 */


// -----------------------------------------------------------------------------
// ! PHASE 4 — WORKFLOW VALIDATION
// -----------------------------------------------------------------------------

/*
 * STEP 8: Confirm workflow file
 *
 * Path:
 * .github/workflows/frontend.yml
 *
 * Critical lines:
 *
 * source: "dist/**"
 * target: "/var/www/react"
 * strip_components: 1
 * overwrite: true
 *
 * 🎯 Goal:
 * Ensure correct file structure deployment
 */


// -----------------------------------------------------------------------------
// ! PHASE 5 — DEPLOYMENT
// -----------------------------------------------------------------------------

/*
 * STEP 9: Push code
 *
 * git add .
 * git commit -m "deploy"
 * git push origin master
 *
 * 🎯 Goal:
 * Trigger CI/CD
 */


/*
 * STEP 10: Monitor pipeline
 *
 * GitHub → Actions tab
 *
 * Watch:
 * ✔ Install dependencies
 * ✔ Build project
 * ✔ Upload to EC2
 * ✔ Restart Nginx
 */


// -----------------------------------------------------------------------------
// ! PHASE 6 — VERIFY DEPLOYMENT
// -----------------------------------------------------------------------------

/*
 * STEP 11: Verify files updated on EC2
 *
 * ssh into EC2:
 *
 * ls -lt /var/www/react
 *
 * 🎯 Latest files should match deployment time
 */


/*
 * STEP 12: Test locally on server
 *
 * curl http://localhost
 *
 * 🎯 Should return HTML
 */


/*
 * STEP 13: Open browser
 *
 * http://YOUR_IP
 *
 * 🎯 Confirm UI updates
 */


/*
 * STEP 14: Hard refresh (IMPORTANT)
 *
 * Mac:
 * CMD + SHIFT + R
 *
 * 🎯 Avoid cached version
 */


// -----------------------------------------------------------------------------
// ! PHASE 7 — QUICK TROUBLESHOOTING
// -----------------------------------------------------------------------------

/*
 * ISSUE: 403 Forbidden
 * FIX:
 * - Check index.html exists
 * - Check nginx root
 */


/*
 * ISSUE: Changes not showing
 * FIX:
 * - Check /var/www/react updated
 * - Hard refresh browser
 */


/*
 * ISSUE: dist folder inside react
 * FIX:
 * - Ensure strip_components: 1
 */


/*
 * ISSUE: Upload fails
 * FIX:
 * - Check permissions
 * - Check SSH key
 */


// -----------------------------------------------------------------------------
// 🧠 FINAL MINDSET
// -----------------------------------------------------------------------------

/*
 * Deployment flow:
 *
 * Code → GitHub → Build → Upload → Nginx → Browser
 *
 * If something breaks:
 * Check each step in order
 *
 * NEVER guess — always verify
 */

// =============================================================================
// 🧠 BACKEND DEPLOYMENT (NODE.JS + EC2 + PM2 + GITHUB ACTIONS)
// =============================================================================


// -----------------------------------------------------------------------------
// ! PHASE 1 — PREP YOUR PROJECT (LOCAL MACHINE)
// -----------------------------------------------------------------------------

/*
 * TASK 1: Confirm Backend Structure
 *
 * Run:
 *
 * ls
 *
 * You should see:
 * - package.json
 * - app.js / server.js
 * - routes/
 * - controllers/
 *
 * 🎯 Goal:
 * Ensure your backend is structured correctly
 */


/*
 * TASK 2: Test Backend Locally
 *
 * Run:
 *
 * npm install
 * npm start   OR   node app.js
 *
 * 🎯 Goal:
 * Confirm backend works before deployment
 */


// -----------------------------------------------------------------------------
// ! PHASE 2 — PREP EC2 SERVER
// -----------------------------------------------------------------------------

/*
 * TASK 3: Connect to EC2
 *
 * ssh -i your-key.pem ec2-user@YOUR_IP
 *
 * 🎯 Goal:
 * Access your server
 */


/*
 * TASK 4: Install Node.js
 *
 * sudo yum install nodejs -y
 * node -v
 *
 * 🎯 Goal:
 * Prepare server for backend execution
 */


/*
 * TASK 5: Install PM2 (IMPORTANT)
 *
 * sudo npm install -g pm2
 *
 * 🎯 Goal:
 * Keep your backend running forever
 */


/*
 * TASK 6: Clone Your Backend Repo
 *
 * git clone https://github.com/YOUR_USERNAME/YOUR_BACKEND_REPO.git
 * cd YOUR_BACKEND_REPO
 *
 * 🎯 Goal:
 * Get your backend code on EC2
 */


/*
 * TASK 7: Install Dependencies
 *
 * npm install
 *
 * 🎯 Goal:
 * Prepare backend to run
 */


/*
 * TASK 8: Start App with PM2
 *
 * pm2 start app.js
 * pm2 save
 *
 * 🎯 Goal:
 * Keep server alive even after crashes
 */


// -----------------------------------------------------------------------------
// ! PHASE 3 — ENVIRONMENT VARIABLES
// -----------------------------------------------------------------------------

/*
 * TASK 9: Create .env File
 *
 * nano .env
 *
 * Example:
 *
 * PORT=3000
 * DB_URL=your_database_url
 * JWT_SECRET=your_secret
 *
 * 🎯 Goal:
 * Secure backend configuration
 */


// -----------------------------------------------------------------------------
// ! PHASE 4 — SSH SETUP (REUSE FROM FRONTEND)
// -----------------------------------------------------------------------------

/*
 * TASK 10: Ensure SSH is already configured
 *
 * ✔ PUBLIC key in EC2 (~/.ssh/authorized_keys)
 * ✔ PRIVATE key in GitHub Secrets
 *
 * 🎯 Goal:
 * Allow GitHub Actions to connect to EC2
 */


// -----------------------------------------------------------------------------
// ! PHASE 5 — GITHUB ACTIONS (BACKEND CI/CD)
// -----------------------------------------------------------------------------

/*
 * TASK 11: Create Workflow File
 *
 * Path:
 *
 * .github/workflows/backend.yml
 *
 * 🎯 Goal:
 * Automate backend deployment
 */


/*
 * TASK 12: Add Workflow Code
 *
 * name: Backend CI
 *
 * on:
 *   push:
 *     branches: [master]
 *
 * jobs:
 *   backend:
 *     runs-on: ubuntu-latest
 *
 *     steps:
 *       - uses: actions/checkout@v4
 *
 *       - name: Setup Node
 *         uses: actions/setup-node@v4
 *         with:
 *           node-version: 18
 *
 *       - name: Install dependencies
 *         run: npm install
 *
 *       - name: Run tests (optional)
 *         run: npm test
 *
 *       - name: Deploy to EC2
 *         uses: appleboy/ssh-action@v1
 *         with:
 *           host: ${{ secrets.SERVER_IP }}
 *           username: ec2-user
 *           key: ${{ secrets.SSH_KEY }}
 *           script: |
 *             cd YOUR_BACKEND_REPO
 *             git pull origin master
 *             npm install
 *             pm2 reload all
 *
 * 🎯 Goal:
 * Pull latest code + restart server
 */


// -----------------------------------------------------------------------------
// ! PHASE 6 — DEPLOYMENT FLOW
// -----------------------------------------------------------------------------

/*
 * TASK 13: Trigger Deployment
 *
 * git add .
 * git commit -m "deploy backend"
 * git push origin master
 *
 * 🎯 Goal:
 * Start CI/CD pipeline
 */


/*
 * TASK 14: Monitor Deployment
 *
 * Go to:
 * GitHub → Actions tab
 *
 * 🎯 Goal:
 * Ensure all steps pass
 */


// -----------------------------------------------------------------------------
// ! PHASE 7 — VERIFY BACKEND
// -----------------------------------------------------------------------------

/*
 * TASK 15: Check Running App
 *
 * pm2 list
 *
 * 🎯 Goal:
 * Confirm backend is active
 */


/*
 * TASK 16: Check Logs
 *
 * pm2 logs
 *
 * 🎯 Goal:
 * Debug errors if any
 */


/*
 * TASK 17: Test API
 *
 * http://YOUR_EC2_IP:3000
 *
 * 🎯 Goal:
 * Confirm backend is reachable
 */


// -----------------------------------------------------------------------------
// 🧠 COMMON ERRORS (AND FIXES)
// -----------------------------------------------------------------------------

/*
 * ERROR: Permission denied (ssh)
 * FIX: Check SSH_KEY and authorized_keys
 */


/*
 * ERROR: App crashes
 * FIX:
 * pm2 logs
 */


/*
 * ERROR: Port not accessible
 * FIX:
 * Open port in EC2 security group (3000)
 */


/*
 * ERROR: Changes not reflected
 * FIX:
 * pm2 reload all
 */


/*
 * ERROR: .env not working
 * FIX:
 * Ensure file exists on EC2
 */


// -----------------------------------------------------------------------------
// 🧠 FINAL MINDSET
// -----------------------------------------------------------------------------

/*
 * You now understand:
 *
 * ✔ Backend deployment
 * ✔ PM2 process management
 * ✔ CI/CD automation
 * ✔ Server-side updates
 *
 * This is:
 * → Real MERN deployment workflow
 * → Entry → Mid DevOps level
 */