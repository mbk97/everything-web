```js
// =============================================================================
// 🐳 DOCKER ON EC2 COMPLETE GUIDE (ZERO → PRODUCTION UNDERSTANDING)
// =============================================================================


// -----------------------------------------------------------------------------
// ! PHASE 1 — WHAT IS DOCKER?
// -----------------------------------------------------------------------------

/*
 * Docker is:
 *
 * ✔ A containerization platform
 * ✔ A packaging system for applications
 * ✔ A portable runtime environment
 *
 * Docker packages:
 *
 * - Your code
 * - Dependencies
 * - Node.js runtime
 * - Libraries
 * - Environment setup
 *
 * Into ONE unit called:
 *
 * 🐳 Docker Image
 *
 *
 * 🎯 Goal:
 * Understand Docker as "portable production environment"
 */


// -----------------------------------------------------------------------------
// ! PHASE 2 — WHAT IS A CONTAINER?
// -----------------------------------------------------------------------------

/*
 * Docker Image:
 *
 * Blueprint / template
 *
 *
 * Docker Container:
 *
 * Running version of the image
 *
 *
 * Think:
 *
 * Image → Recipe
 * Container → Cooked food
 *
 *
 * 🎯 Goal:
 * Understand image vs container
 */


// -----------------------------------------------------------------------------
// ! PHASE 3 — WHY DOCKER EXISTS
// -----------------------------------------------------------------------------

/*
 * Problem before Docker:
 *
 * ❌ Works on my machine
 * ❌ Different Node versions
 * ❌ Missing dependencies
 * ❌ Server setup inconsistency
 *
 *
 * Docker solves:
 *
 * ✔ Same environment everywhere
 * ✔ Consistent deployments
 * ✔ Easier scaling
 * ✔ Easier rollback
 *
 *
 * 🎯 Goal:
 * Understand WHY Docker became industry standard
 */


// -----------------------------------------------------------------------------
// ! PHASE 4 — REAL-WORLD ARCHITECTURE
// -----------------------------------------------------------------------------

/*
 * Modern production architecture:
 *
 * Browser
 *    ↓
 * NGINX
 *    ↓
 * Docker Container
 *    ↓
 * Node.js App
 *    ↓
 * MongoDB Atlas
 *
 *
 * 🎯 Goal:
 * Understand where Docker fits in production
 */


// -----------------------------------------------------------------------------
// ! PHASE 5 — INSTALL DOCKER ON EC2
// -----------------------------------------------------------------------------

/*
 * Amazon Linux:
 *
 * sudo yum update -y
 *
 * sudo yum install docker -y
 *
 *
 * Start Docker:
 *
 * sudo systemctl start docker
 *
 *
 * Enable on boot:
 *
 * sudo systemctl enable docker
 *
 *
 * Give current user Docker permissions:
 *
 * sudo usermod -aG docker ec2-user
 *
 *
 * Reconnect SSH after this.
 *
 *
 * 🎯 Goal:
 * Install Docker runtime on server
 */


// -----------------------------------------------------------------------------
// ! PHASE 6 — VERIFY DOCKER INSTALLATION
// -----------------------------------------------------------------------------

/*
 * Run:
 *
 * docker ps
 *
 *
 * If successful:
 *
 * ✔ Docker daemon is running
 * ✔ CLI can communicate with Docker Engine
 *
 *
 * 🎯 Goal:
 * Confirm Docker works
 */


// -----------------------------------------------------------------------------
// ! PHASE 7 — CREATE A DOCKERFILE
// -----------------------------------------------------------------------------

/*
 * Dockerfile = instructions for building image
 *
 *
 * Example:
 *
 * FROM node:20-alpine
 *
 * WORKDIR /app
 *
 * COPY package*.json ./
 *
 * RUN npm install
 *
 * COPY . .
 *
 * RUN npm run build
 *
 * EXPOSE 8080
 *
 * CMD ["node", "dist/index.js"]
 *
 *
 * Meaning:
 *
 * ✔ Install Node
 * ✔ Copy app files
 * ✔ Install dependencies
 * ✔ Build TypeScript
 * ✔ Run application
 *
 *
 * 🎯 Goal:
 * Teach Docker how to run your app
 */


// -----------------------------------------------------------------------------
// ! PHASE 8 — CREATE .dockerignore
// -----------------------------------------------------------------------------

/*
 * Prevent unnecessary files from entering image
 *
 *
 * Example:
 *
 * node_modules
 * .git
 * .env
 *
 *
 * Benefits:
 *
 * ✔ Smaller image
 * ✔ Faster builds
 * ✔ Better security
 *
 *
 * 🎯 Goal:
 * Optimize image creation
 */


// -----------------------------------------------------------------------------
// ! PHASE 9 — BUILD THE IMAGE
// -----------------------------------------------------------------------------

/*
 * Command:
 *
 * docker build -t blog-api .
 *
 *
 * Meaning:
 *
 * ✔ Build image from Dockerfile
 * ✔ Name image "blog-api"
 *
 *
 * Check images:
 *
 * docker images
 *
 *
 * 🎯 Goal:
 * Convert project → Docker image
 */


// -----------------------------------------------------------------------------
// ! PHASE 10 — RUN CONTAINER
// -----------------------------------------------------------------------------

/*
 * Command:
 *
 * docker run -d \
 * --env-file .env \
 * -p 8080:8080 \
 * --name blog-api-container \
 * blog-api
 *
 *
 * Meaning:
 *
 * ✔ Start container
 * ✔ Load environment variables
 * ✔ Expose port
 * ✔ Run in background
 *
 *
 * Port mapping:
 *
 * HOST_PORT:CONTAINER_PORT
 *
 *
 * Example:
 *
 * -p 8080:8080
 *
 * Means:
 *
 * EC2:8080 → Docker Container:8080
 *
 *
 * 🎯 Goal:
 * Start app inside Docker
 */


// -----------------------------------------------------------------------------
// ! PHASE 11 — WHY PORT MAPPING MATTERS
// -----------------------------------------------------------------------------

/*
 * Your app internally listens on:
 *
 * process.env.PORT
 *
 *
 * Example:
 *
 * Running on port 8080
 *
 *
 * Then container must expose:
 *
 * -p 8080:8080
 *
 *
 * If app listens on 5000:
 *
 * Use:
 *
 * -p 8080:5000
 *
 *
 * 🎯 Goal:
 * Understand Docker networking
 */


// -----------------------------------------------------------------------------
// ! PHASE 12 — CHECK RUNNING CONTAINERS
// -----------------------------------------------------------------------------

/*
 * Run:
 *
 * docker ps
 *
 *
 * Example output:
 *
 * 0.0.0.0:8080->8080/tcp
 *
 *
 * Meaning:
 *
 * EC2 port 8080 forwards to container port 8080
 *
 *
 * 🎯 Goal:
 * Verify container is running correctly
 */


// -----------------------------------------------------------------------------
// ! PHASE 13 — VIEW CONTAINER LOGS
// -----------------------------------------------------------------------------

/*
 * Command:
 *
 * docker logs -f blog-api-container
 *
 *
 * Your logs showed:
 *
 * Running on port 8080
 * mongoDB connected
 *
 *
 * Meaning:
 *
 * ✔ App started successfully
 * ✔ Environment variables loaded
 * ✔ MongoDB connected
 *
 *
 * 🎯 Goal:
 * Debug and monitor containers
 */


// -----------------------------------------------------------------------------
// ! PHASE 14 — HOW NGINX FITS INTO DOCKER
// -----------------------------------------------------------------------------

/*
 * Your setup:
 *
 * Browser
 *    ↓
 * HTTPS
 *    ↓
 * NGINX
 *    ↓
 * localhost:8080
 *    ↓
 * Docker Container
 *
 *
 * NGINX config:
 *
 * proxy_pass http://localhost:8080;
 *
 *
 * Meaning:
 *
 * NGINX forwards requests into Docker container
 *
 *
 * 🎯 Goal:
 * Connect Docker to production traffic
 */


// -----------------------------------------------------------------------------
// ! PHASE 15 — YOUR REAL PRODUCTION FLOW
// -----------------------------------------------------------------------------

/*
 * User opens:
 *
 * https://api.havenastays.net
 *
 *
 * Flow:
 *
 * Browser
 *    ↓
 * NGINX (SSL)
 *    ↓
 * Docker Container
 *    ↓
 * Node.js API
 *    ↓
 * MongoDB Atlas
 *
 *
 * 🎯 Goal:
 * Understand complete production architecture
 */


// -----------------------------------------------------------------------------
// ! PHASE 16 — AUTO RESTART CONTAINERS
// -----------------------------------------------------------------------------

/*
 * Production command:
 *
 * docker run -d \
 * --restart unless-stopped \
 * --env-file .env \
 * -p 8080:8080 \
 * --name blog-api-container \
 * blog-api
 *
 *
 * Meaning:
 *
 * ✔ Restart after EC2 reboot
 * ✔ Restart after Docker restart
 * ✔ Keep production app alive
 *
 *
 * 🎯 Goal:
 * Make deployment persistent
 */


// -----------------------------------------------------------------------------
// ! PHASE 17 — COMMON DOCKER COMMANDS
// -----------------------------------------------------------------------------

/*
 * View containers:
 *
 * docker ps
 *
 *
 * Stop container:
 *
 * docker stop blog-api-container
 *
 *
 * Remove container:
 *
 * docker rm blog-api-container
 *
 *
 * View logs:
 *
 * docker logs -f blog-api-container
 *
 *
 * Remove image:
 *
 * docker rmi blog-api
 *
 *
 * 🎯 Goal:
 * Learn production Docker management
 */


// -----------------------------------------------------------------------------
// ! PHASE 18 — COMMON ERRORS YOU ENCOUNTERED
// -----------------------------------------------------------------------------

/*
 * ❌ Docker daemon not running
 *
 * Meaning:
 * Docker Desktop / Docker service stopped
 *
 *
 * ❌ Port already in use
 *
 * Meaning:
 * Another app already uses 8080
 *
 *
 * ❌ Container name already exists
 *
 * Meaning:
 * Old container wasn't removed
 *
 *
 * ❌ MONGODB_URI undefined
 *
 * Meaning:
 * .env not passed into container
 *
 *
 * 🎯 Goal:
 * Learn real-world debugging
 */


// -----------------------------------------------------------------------------
// ! PHASE 19 — HOW TO DEPLOY A BRAND NEW DOCKERIZED APP
// -----------------------------------------------------------------------------

/*
 * Real deployment flow:
 *
 * 1. SSH into EC2
 *
 * 2. Clone project:
 *
 * git clone <repo>
 *
 *
 * 3. Enter project:
 *
 * cd project-name
 *
 *
 * 4. Build image:
 *
 * docker build -t app-name .
 *
 *
 * 5. Run container:
 *
 * docker run -d \
 * --restart unless-stopped \
 * --env-file .env \
 * -p 8080:8080 \
 * --name app-container \
 * app-name
 *
 *
 * 6. Configure NGINX:
 *
 * proxy_pass http://localhost:8080;
 *
 *
 * 7. Restart NGINX:
 *
 * sudo systemctl restart nginx
 *
 *
 * 🎯 Goal:
 * Deploy new Dockerized app from scratch
 */


// =============================================================================
// 🧠 MIGRATING EXISTING EC2 APP → DOCKER
// =============================================================================


// -----------------------------------------------------------------------------
// ! PHASE 20 — YOUR ORIGINAL SETUP
// -----------------------------------------------------------------------------

/*
 * Before Docker:
 *
 * Browser
 *    ↓
 * NGINX
 *    ↓
 * PM2
 *    ↓
 * Node.js App
 *
 *
 * PM2 managed Node process directly
 *
 *
 * 🎯 Goal:
 * Understand previous architecture
 */


// -----------------------------------------------------------------------------
// ! PHASE 21 — WHY MIGRATE TO DOCKER
// -----------------------------------------------------------------------------

/*
 * PM2 works fine, but Docker gives:
 *
 * ✔ Better consistency
 * ✔ Easier deployments
 * ✔ Easier scaling
 * ✔ Easier rollback
 * ✔ Better cloud-native architecture
 *
 *
 * 🎯 Goal:
 * Understand WHY migration matters
 */


// -----------------------------------------------------------------------------
// ! PHASE 22 — STOP EXISTING PM2 APP
// -----------------------------------------------------------------------------

/*
 * Check PM2:
 *
 * pm2 list
 *
 *
 * Stop app:
 *
 * pm2 stop all
 *
 *
 * Delete PM2 processes:
 *
 * pm2 delete all
 *
 *
 * Meaning:
 *
 * ✔ Free port 8080
 * ✔ Prevent port conflicts
 *
 *
 * 🎯 Goal:
 * Replace PM2 with Docker
 */


// -----------------------------------------------------------------------------
// ! PHASE 23 — REMOVE FAILED CONTAINERS
// -----------------------------------------------------------------------------

/*
 * You saw:
 *
 * container name already exists
 *
 *
 * Fix:
 *
 * docker rm blog-api-container
 *
 *
 * Meaning:
 *
 * ✔ Remove old failed container metadata
 *
 *
 * 🎯 Goal:
 * Clean deployment state
 */


// -----------------------------------------------------------------------------
// ! PHASE 24 — START DOCKERIZED VERSION
// -----------------------------------------------------------------------------

/*
 * Final successful command:
 *
 * docker run -d \
 * --restart unless-stopped \
 * --env-file .env \
 * -p 8080:8080 \
 * --name blog-api-container \
 * blog-api
 *
 *
 * Meaning:
 *
 * ✔ Docker now replaces PM2
 * ✔ NGINX still works unchanged
 * ✔ App is now containerized
 *
 *
 * 🎯 Goal:
 * Complete migration successfully
 */


// -----------------------------------------------------------------------------
// ! PHASE 25 — VERIFY MIGRATION
// -----------------------------------------------------------------------------

/*
 * You checked:
 *
 * docker ps
 *
 *
 * Logs:
 *
 * docker logs -f blog-api-container
 *
 *
 * Output:
 *
 * Running on port 8080
 * mongoDB connected
 *
 *
 * Meaning:
 *
 * ✔ Migration successful
 * ✔ Production app now runs inside Docker
 *
 *
 * 🎯 Goal:
 * Confirm successful production migration
 */


// -----------------------------------------------------------------------------
// ! PHASE 26 — IMAGE SIZE UNDERSTANDING
// -----------------------------------------------------------------------------

/*
 * Your image:
 *
 * ~1.27GB
 *
 *
 * This affects:
 *
 * ✔ Disk usage
 * ✔ Build speed
 * ✔ Deployment speed
 *
 *
 * NOT:
 *
 * ❌ Major AWS compute cost directly
 *
 *
 * Better optimization:
 *
 * FROM node:20-alpine
 *
 *
 * 🎯 Goal:
 * Understand Docker image optimization
 */


// -----------------------------------------------------------------------------
// ! PHASE 27 — FINAL PRODUCTION ARCHITECTURE
// -----------------------------------------------------------------------------

/*
 * FINAL SYSTEM:
 *
 * Browser
 *    ↓
 * HTTPS (443)
 *    ↓
 * NGINX
 *    ↓
 * Docker Container
 *    ↓
 * Node.js API
 *    ↓
 * MongoDB Atlas
 *
 *
 * This is:
 *
 * ✔ Modern production architecture
 * ✔ Cloud-native deployment
 * ✔ Real-world DevOps workflow
 *
 *
 * 🎯 Goal:
 * Understand enterprise deployment structure
 */


// -----------------------------------------------------------------------------
// 🧠 FINAL MINDSET
// -----------------------------------------------------------------------------

/*
 * NGINX = Traffic controller
 *
 * Docker = Application runtime
 *
 * Node.js = Business logic
 *
 * MongoDB Atlas = Database layer
 *
 *
 * If you understand this architecture:
 *
 * ✔ You can deploy production systems
 * ✔ You understand backend infrastructure
 * ✔ You can move into DevOps/cloud engineering
 * ✔ You can scale applications properly
 *
 *
 * This is:
 *
 * → Modern backend deployment
 * → Cloud engineering foundation
 * → Real production architecture
 */
```
