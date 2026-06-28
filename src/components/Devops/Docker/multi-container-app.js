// =============================================================================
// 🐳 TASK 14 — BUILD A MULTI-CONTAINER PRODUCTION APP
// =============================================================================


// -----------------------------------------------------------------------------
// ! WHAT YOU ARE ABOUT TO BUILD
// -----------------------------------------------------------------------------

/*
 * REAL-WORLD ARCHITECTURE:
 *
 *
 * Browser
 *    ↓
 * NGINX
 *    ↓
 *
 * ┌───────────────────────────┐
 * │                           │
 * │      FRONTEND             │
 * │      (React App)          │
 * │                           │
 * └───────────────────────────┘
 *
 *                ↓ API REQUESTS
 *
 * ┌───────────────────────────┐
 * │                           │
 * │       BACKEND API         │
 * │     (Node + Express)      │
 * │                           │
 * └───────────────────────────┘
 *
 *                ↓
 *
 * ┌───────────────────────────┐
 * │                           │
 * │        MONGODB            │
 * │                           │
 * └───────────────────────────┘
 *
 *
 * 🎯 GOAL:
 *
 * Understand:
 *
 * ✔ Service-based architecture
 * ✔ Multi-container networking
 * ✔ Reverse proxy architecture
 * ✔ Frontend ↔ Backend communication
 * ✔ Docker Compose
 * ✔ Real production systems
 */


// -----------------------------------------------------------------------------
// ! PHASE 1 — CREATE PROJECT STRUCTURE
// -----------------------------------------------------------------------------

/*
 * Create:
 *
 * multi-container-app/
 *
 * Inside:
 *
 * frontend/
 * backend/
 * nginx/
 * docker-compose.yml
 *
 *
 * Structure:
 *
 * multi-container-app/
 *
 * ├── frontend/
 * ├── backend/
 * ├── nginx/
 * └── docker-compose.yml
 *
 *
 * 🎯 GOAL:
 * Organize microservice-style architecture
 */


// -----------------------------------------------------------------------------
// ! PHASE 2 — BUILD FRONTEND APP
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Create React app
 *
 *
 * Example:
 *
 * npm create vite@latest frontend
 *
 *
 * OR:
 *
 * npx create-react-app frontend
 *
 *
 * Add:
 *
 * ✔ Home page
 * ✔ Fetch data from backend
 *
 *
 * Example:
 *
 * fetch("http://localhost/api")
 *
 *
 * 🎯 GOAL:
 *
 * Learn frontend service containerization
 */


// -----------------------------------------------------------------------------
// ! PHASE 3 — BUILD BACKEND APP
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Create Express API
 *
 *
 * Example routes:
 *
 * GET /api
 *
 * POST /api/users
 *
 *
 * Connect MongoDB using Mongoose
 *
 *
 * Example:
 *
 * mongoose.connect(process.env.MONGO_URI)
 *
 *
 * 🎯 GOAL:
 *
 * Learn backend service isolation
 */


// -----------------------------------------------------------------------------
// ! PHASE 4 — CREATE FRONTEND DOCKERFILE
// -----------------------------------------------------------------------------

/*
 * frontend/Dockerfile
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
 * EXPOSE 5173
 *
 * CMD ["npm", "run", "dev", "--", "--host"]
 *
 *
 * 🎯 GOAL:
 *
 * Containerize frontend application
 */


// -----------------------------------------------------------------------------
// ! PHASE 5 — CREATE BACKEND DOCKERFILE
// -----------------------------------------------------------------------------

/*
 * backend/Dockerfile
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
 * EXPOSE 8080
 *
 * CMD ["npm", "start"]
 *
 *
 * 🎯 GOAL:
 *
 * Containerize backend API
 */


// -----------------------------------------------------------------------------
// ! PHASE 6 — CREATE NGINX CONFIG
// -----------------------------------------------------------------------------

/*
 * nginx/default.conf
 *
 * Example:
 *
 * server {
 *
 *     listen 80;
 *
 *
 *     # FRONTEND
 *     location / {
 *
 *         proxy_pass http://frontend:5173;
 *     }
 *
 *
 *     # BACKEND API
 *     location /api/ {
 *
 *         proxy_pass http://backend:8080/;
 *
 *         proxy_http_version 1.1;
 *
 *         proxy_set_header Upgrade $http_upgrade;
 *
 *         proxy_set_header Connection 'upgrade';
 *
 *         proxy_set_header Host $host;
 *
 *         proxy_cache_bypass $http_upgrade;
 *     }
 * }
 *
 *
 * IMPORTANT:
 *
 * frontend
 * backend
 *
 * are Docker service names.
 *
 *
 * 🎯 GOAL:
 *
 * Learn internal Docker networking
 */


// -----------------------------------------------------------------------------
// ! PHASE 7 — CREATE docker-compose.yml
// -----------------------------------------------------------------------------

/*
 * ROOT FILE:
 *
 * docker-compose.yml
 *
 *
 * Example:
 *
 * version: '3.9'
 *
 * services:
 *
 *   frontend:
 *     build: ./frontend
 *
 *   backend:
 *     build: ./backend
 *
 *     environment:
 *       MONGO_URI: mongodb://mongo:27017/appdb
 *
 *     depends_on:
 *       - mongo
 *
 *
 *   mongo:
 *     image: mongo
 *
 *     volumes:
 *       - mongo-data:/data/db
 *
 *
 *   nginx:
 *     image: nginx:latest
 *
 *     ports:
 *       - "80:80"
 *
 *     volumes:
 *       - ./nginx/default.conf:/etc/nginx/conf.d/default.conf
 *
 *     depends_on:
 *       - frontend
 *       - backend
 *
 *
 * volumes:
 *   mongo-data:
 *
 *
 * 🎯 GOAL:
 *
 * Learn multi-container orchestration
 */


// -----------------------------------------------------------------------------
// ! PHASE 8 — UNDERSTAND SERVICE COMMUNICATION
// -----------------------------------------------------------------------------

/*
 * Docker Compose automatically creates:
 *
 * Internal network
 *
 *
 * Meaning:
 *
 * frontend can talk to:
 *
 * http://backend:8080
 *
 *
 * backend can talk to:
 *
 * mongodb://mongo:27017
 *
 *
 * WITHOUT exposing services publicly.
 *
 *
 * 🎯 GOAL:
 *
 * Understand container networking
 */


// -----------------------------------------------------------------------------
// ! PHASE 9 — START ENTIRE SYSTEM
// -----------------------------------------------------------------------------

/*
 * Run:
 *
 * docker compose up -d
 *
 *
 * Meaning:
 *
 * ✔ Build frontend
 * ✔ Build backend
 * ✔ Start MongoDB
 * ✔ Start NGINX
 * ✔ Connect all services
 *
 *
 * 🎯 GOAL:
 *
 * Learn orchestration
 */


// -----------------------------------------------------------------------------
// ! PHASE 10 — VERIFY CONTAINERS
// -----------------------------------------------------------------------------

/*
 * Run:
 *
 * docker ps
 *
 *
 * Expected:
 *
 * ✔ frontend container
 * ✔ backend container
 * ✔ mongo container
 * ✔ nginx container
 *
 *
 * 🎯 GOAL:
 *
 * Verify distributed architecture
 */


// -----------------------------------------------------------------------------
// ! PHASE 11 — TEST APPLICATION
// -----------------------------------------------------------------------------

/*
 * Open:
 *
 * http://localhost
 *
 *
 * Flow:
 *
 * Browser
 *    ↓
 * NGINX
 *    ↓
 * Frontend
 *
 *
 * Frontend fetches:
 *
 * /api
 *
 *
 * NGINX routes:
 *
 * backend container
 *
 *
 * Backend talks to:
 *
 * MongoDB container
 *
 *
 * 🎯 GOAL:
 *
 * Understand end-to-end request flow
 */


// -----------------------------------------------------------------------------
// ! PHASE 12 — ADD PERSISTENT STORAGE
// -----------------------------------------------------------------------------

/*
 * MongoDB uses:
 *
 * volumes:
 *   - mongo-data:/data/db
 *
 *
 * Meaning:
 *
 * MongoDB data survives:
 *
 * ✔ Container restart
 * ✔ Docker restart
 *
 *
 * 🎯 GOAL:
 *
 * Learn persistence
 */


// -----------------------------------------------------------------------------
// ! PHASE 13 — DEBUGGING PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASKS:
 *
 * ✔ Stop backend container
 * ✔ Break MongoDB URI
 * ✔ Break NGINX config
 * ✔ Remove frontend dependency
 *
 *
 * Then debug using:
 *
 * docker logs
 * docker exec
 * docker inspect
 *
 *
 * 🎯 GOAL:
 *
 * Build operational troubleshooting skills
 */


// -----------------------------------------------------------------------------
// ! PHASE 14 — DEPLOY TO EC2
// -----------------------------------------------------------------------------

/*
 * Move project to EC2:
 *
 * git clone repo
 *
 *
 * Run:
 *
 * docker compose up -d
 *
 *
 * Configure:
 *
 * ✔ Domain
 * ✔ NGINX
 * ✔ SSL
 *
 *
 * 🎯 GOAL:
 *
 * Deploy distributed architecture to production
 */


// -----------------------------------------------------------------------------
// ! PHASE 15 — REAL-WORLD CONCEPTS YOU LEARN
// -----------------------------------------------------------------------------

/*
 * By completing this project, you learn:
 *
 * ✔ Microservices architecture
 * ✔ Container orchestration
 * ✔ Docker networking
 * ✔ Service discovery
 * ✔ Reverse proxying
 * ✔ Persistent storage
 * ✔ Infrastructure isolation
 * ✔ Multi-service deployment
 *
 *
 * 🎯 GOAL:
 *
 * Think like DevOps engineer
 */


// -----------------------------------------------------------------------------
// ! PHASE 16 — ADVANCED IMPROVEMENTS
// -----------------------------------------------------------------------------

/*
 * After basic setup:
 *
 * Add:
 *
 * ✔ Redis
 * ✔ RabbitMQ
 * ✔ Monitoring
 * ✔ CI/CD
 * ✔ HTTPS
 * ✔ Load balancing
 *
 *
 * 🎯 GOAL:
 *
 * Move toward enterprise architecture
 */


// -----------------------------------------------------------------------------
// 🧠 FINAL MINDSET
// -----------------------------------------------------------------------------

/*
 * Single-container apps teach:
 *
 * "How Docker works"
 *
 *
 * Multi-container apps teach:
 *
 * "How modern systems work"
 *
 *
 * This project introduces:
 *
 * ✔ Service architecture
 * ✔ Infrastructure communication
 * ✔ Real-world deployment patterns
 *
 *
 * This is one of the MOST important Docker exercises.
 */