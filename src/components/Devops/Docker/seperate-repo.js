// =============================================================================
// 🏢 REAL-WORLD LARGE COMPANY FLOW (SEPARATE REPOS)
// =============================================================================


// -----------------------------------------------------------------------------
// ! WHAT YOU ARE ABOUT TO BUILD
// -----------------------------------------------------------------------------

/*
 * REAL-WORLD ENTERPRISE STRUCTURE:
 *
 *
 * GitHub Repositories:
 *
 * ✔ frontend-repo
 * ✔ backend-repo
 * ✔ infrastructure-repo (optional later)
 *
 *
 * Deployment Architecture:
 *
 * Browser
 *    ↓
 * NGINX
 *    ↓
 *
 * ┌────────────────────┐
 * │                    │
 * │ Frontend Container │
 * │                    │
 * └────────────────────┘
 *
 *          ↓ API CALLS
 *
 * ┌────────────────────┐
 * │                    │
 * │ Backend Container  │
 * │                    │
 * └────────────────────┘
 *
 *          ↓
 *
 * ┌────────────────────┐
 * │                    │
 * │ MongoDB Container  │
 * │                    │
 * └────────────────────┘
 *
 *
 * 🎯 GOAL:
 *
 * Learn:
 *
 * ✔ Independent repositories
 * ✔ Independent deployments
 * ✔ Service-based architecture
 * ✔ Real enterprise workflow
 */


// -----------------------------------------------------------------------------
// ! PHASE 1 — CREATE FRONTEND REPOSITORY
// -----------------------------------------------------------------------------

/*
 * Repository:
 *
 * havena-frontend
 *
 *
 * Contains:
 *
 * ✔ React app
 * ✔ Frontend Dockerfile
 * ✔ Frontend CI/CD
 *
 *
 * Example:
 *
 * havena-frontend/
 *
 * ├── src/
 * ├── public/
 * ├── Dockerfile
 * ├── package.json
 * └── .github/workflows/
 *
 *
 * 🎯 GOAL:
 *
 * Isolate frontend service
 */


// -----------------------------------------------------------------------------
// ! PHASE 2 — CREATE BACKEND REPOSITORY
// -----------------------------------------------------------------------------

/*
 * Repository:
 *
 * havena-backend
 *
 *
 * Contains:
 *
 * ✔ Node API
 * ✔ MongoDB logic
 * ✔ Backend Dockerfile
 * ✔ Backend CI/CD
 *
 *
 * Example:
 *
 * havena-backend/
 *
 * ├── controllers/
 * ├── routes/
 * ├── models/
 * ├── Dockerfile
 * ├── package.json
 * └── .github/workflows/
 *
 *
 * 🎯 GOAL:
 *
 * Isolate backend service
 */


// -----------------------------------------------------------------------------
// ! PHASE 3 — WHY LARGE COMPANIES DO THIS
// -----------------------------------------------------------------------------

/*
 * Benefits:
 *
 * ✔ Independent teams
 * ✔ Independent deployments
 * ✔ Better scaling
 * ✔ Better security
 * ✔ Cleaner ownership
 *
 *
 * Example:
 *
 * Frontend team:
 * touches ONLY frontend repo
 *
 *
 * Backend team:
 * touches ONLY backend repo
 *
 *
 * 🎯 GOAL:
 *
 * Understand enterprise engineering workflows
 */


// -----------------------------------------------------------------------------
// ! PHASE 4 — FRONTEND DOCKERFILE
// -----------------------------------------------------------------------------

/*
 * havena-frontend/Dockerfile
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
 * EXPOSE 5173
 *
 * CMD ["npm", "run", "dev", "--", "--host"]
 *
 *
 * 🎯 GOAL:
 *
 * Containerize frontend independently
 */


// -----------------------------------------------------------------------------
// ! PHASE 5 — BACKEND DOCKERFILE
// -----------------------------------------------------------------------------

/*
 * havena-backend/Dockerfile
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
 * EXPOSE 8080
 *
 * CMD ["npm", "start"]
 *
 *
 * 🎯 GOAL:
 *
 * Containerize backend independently
 */


// -----------------------------------------------------------------------------
// ! PHASE 6 — FRONTEND CI/CD
// -----------------------------------------------------------------------------

/*
 * Frontend GitHub Actions:
 *
 * Trigger:
 *
 * frontend repo push
 *
 *
 * Deployment:
 *
 * ✔ rebuild frontend image
 * ✔ restart frontend container
 *
 *
 * Backend untouched.
 *
 *
 * 🎯 GOAL:
 *
 * Independent frontend deployments
 */


// -----------------------------------------------------------------------------
// ! PHASE 7 — BACKEND CI/CD
// -----------------------------------------------------------------------------

/*
 * Backend GitHub Actions:
 *
 * Trigger:
 *
 * backend repo push
 *
 *
 * Deployment:
 *
 * ✔ rebuild backend image
 * ✔ restart backend container
 *
 *
 * Frontend untouched.
 *
 *
 * 🎯 GOAL:
 *
 * Independent backend deployments
 */


// -----------------------------------------------------------------------------
// ! PHASE 8 — EC2 SERVER STRUCTURE
// -----------------------------------------------------------------------------

/*
 * EC2:
 *
 * /home/ec2-user/
 *
 * ├── havena-frontend/
 * ├── havena-backend/
 * └── nginx/
 *
 *
 * 🎯 GOAL:
 *
 * Organize production services cleanly
 */


// -----------------------------------------------------------------------------
// ! PHASE 9 — FRONTEND DEPLOYMENT
// -----------------------------------------------------------------------------

/*
 * Frontend deployment flow:
 *
 * GitHub Push
 *      ↓
 * GitHub Actions
 *      ↓
 * SSH into EC2
 *      ↓
 * cd havena-frontend
 *      ↓
 * git pull
 *      ↓
 * docker build
 *      ↓
 * restart frontend container
 *
 *
 * 🎯 GOAL:
 *
 * Automate frontend deployment
 */


// -----------------------------------------------------------------------------
// ! PHASE 10 — BACKEND DEPLOYMENT
// -----------------------------------------------------------------------------

/*
 * Backend deployment flow:
 *
 * GitHub Push
 *      ↓
 * GitHub Actions
 *      ↓
 * SSH into EC2
 *      ↓
 * cd havena-backend
 *      ↓
 * git pull
 *      ↓
 * docker build
 *      ↓
 * restart backend container
 *
 *
 * 🎯 GOAL:
 *
 * Automate backend deployment
 */


// -----------------------------------------------------------------------------
// ! PHASE 11 — RUN CONTAINERS SEPARATELY
// -----------------------------------------------------------------------------

/*
 * Frontend:
 *
 * docker run -d \
 * -p 3000:5173 \
 * --name frontend-container \
 * havena-frontend
 *
 *
 * Backend:
 *
 * docker run -d \
 * -p 8080:8080 \
 * --name backend-container \
 * havena-backend
 *
 *
 * MongoDB:
 *
 * docker run -d \
 * -p 27017:27017 \
 * --name mongo-container \
 * mongo
 *
 *
 * 🎯 GOAL:
 *
 * Learn service isolation
 */


// -----------------------------------------------------------------------------
// ! PHASE 12 — NGINX CONFIGURATION
// -----------------------------------------------------------------------------

/*
 * NGINX routes traffic:
 *
 * Frontend:
 *
 * location / {
 *     proxy_pass http://localhost:3000;
 * }
 *
 *
 * Backend:
 *
 * location /api/ {
 *     proxy_pass http://localhost:8080/;
 * }
 *
 *
 * 🎯 GOAL:
 *
 * Connect distributed services
 */


// -----------------------------------------------------------------------------
// ! PHASE 13 — HOW SERVICES COMMUNICATE
// -----------------------------------------------------------------------------

/*
 * Browser requests:
 *
 * https://havenastays.net
 *      ↓
 * NGINX
 *      ↓
 * Frontend Container
 *
 *
 * Frontend requests:
 *
 * /api/blog
 *
 *
 * NGINX routes:
 *
 * Backend Container
 *
 *
 * Backend connects:
 *
 * MongoDB
 *
 *
 * 🎯 GOAL:
 *
 * Understand distributed request flow
 */


// -----------------------------------------------------------------------------
// ! PHASE 14 — WHAT HAPPENS WHEN FRONTEND CHANGES
// -----------------------------------------------------------------------------

/*
 * Frontend repo updated
 *
 *
 * ONLY:
 *
 * ✔ frontend image rebuilt
 * ✔ frontend container restarted
 *
 *
 * Backend:
 *
 * ✔ stays online
 *
 *
 * 🎯 GOAL:
 *
 * Learn isolated deployments
 */


// -----------------------------------------------------------------------------
// ! PHASE 15 — WHAT HAPPENS WHEN BACKEND CHANGES
// -----------------------------------------------------------------------------

/*
 * Backend repo updated
 *
 *
 * ONLY:
 *
 * ✔ backend image rebuilt
 * ✔ backend container restarted
 *
 *
 * Frontend:
 *
 * ✔ untouched
 *
 *
 * 🎯 GOAL:
 *
 * Learn service independence
 */


// -----------------------------------------------------------------------------
// ! PHASE 16 — WHY THIS IS POWERFUL
// -----------------------------------------------------------------------------

/*
 * Benefits:
 *
 * ✔ Smaller deployments
 * ✔ Faster CI/CD
 * ✔ Better scalability
 * ✔ Easier debugging
 * ✔ Independent scaling
 *
 *
 * Example:
 *
 * Backend under heavy traffic?
 *
 * Scale backend ONLY.
 *
 *
 * 🎯 GOAL:
 *
 * Think like infrastructure engineer
 */


// -----------------------------------------------------------------------------
// ! PHASE 17 — OPTIONAL NEXT STEP (DOCKER COMPOSE)
// -----------------------------------------------------------------------------

/*
 * Even with separate repos:
 *
 * You can STILL use:
 *
 * docker compose
 *
 *
 * Usually:
 *
 * infrastructure repo
 *
 * contains:
 *
 * docker-compose.yml
 *
 *
 * That repo orchestrates:
 *
 * ✔ frontend container
 * ✔ backend container
 * ✔ mongo container
 * ✔ nginx container
 *
 *
 * 🎯 GOAL:
 *
 * Separate infrastructure from application code
 */


// -----------------------------------------------------------------------------
// ! PHASE 18 — REAL-WORLD ENTERPRISE PATTERN
// -----------------------------------------------------------------------------

/*
 * Large companies often have:
 *
 * auth-service repo
 * payment-service repo
 * notification-service repo
 * frontend repo
 *
 *
 * Each:
 *
 * ✔ independent CI/CD
 * ✔ independent scaling
 * ✔ independent ownership
 *
 *
 * DevOps manages:
 *
 * infrastructure connecting everything.
 *
 *
 * 🎯 GOAL:
 *
 * Understand enterprise microservice architecture
 */


// -----------------------------------------------------------------------------
// ! PHASE 19 — WHAT YOU SHOULD BUILD FIRST
// -----------------------------------------------------------------------------

/*
 * STEP 1:
 *
 * Create:
 *
 * havena-frontend
 *
 *
 * STEP 2:
 *
 * Create:
 *
 * havena-backend
 *
 *
 * STEP 3:
 *
 * Dockerize both separately
 *
 *
 * STEP 4:
 *
 * Deploy both on EC2
 *
 *
 * STEP 5:
 *
 * Configure NGINX
 *
 *
 * STEP 6:
 *
 * Add independent CI/CD
 *
 *
 * 🎯 GOAL:
 *
 * Build real enterprise deployment flow
 */


// -----------------------------------------------------------------------------
// 🧠 FINAL MINDSET
// -----------------------------------------------------------------------------

/*
 * Small projects:
 *
 * often use:
 *
 * ✔ monorepo
 *
 *
 * Large systems:
 *
 * often evolve into:
 *
 * ✔ multiple repositories
 * ✔ independent services
 * ✔ independent deployments
 *
 *
 * This is:
 *
 * → modern DevOps
 * → microservice architecture
 * → enterprise infrastructure engineering
 */