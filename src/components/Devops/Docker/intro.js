// =============================================================================  
// 🐳 DOCKER COMPLETE GUIDE (ZERO → PRODUCTION UNDERSTANDING)  
// =============================================================================  

// Based on the structured learning style you requested :contentReference[oaicite:0]{index=0}


// -----------------------------------------------------------------------------  
// ! PHASE 1 — WHAT IS DOCKER?  
// -----------------------------------------------------------------------------

/*
 * Docker is a containerization platform.
 *
 * It packages:
 *
 * ✔ your application
 * ✔ dependencies
 * ✔ runtime
 * ✔ operating system libraries
 *
 * into a single portable unit called:
 *
 * → Container
 *
 * 🎯 Goal:
 * Run applications consistently everywhere
 */


// -----------------------------------------------------------------------------  
// ! PHASE 2 — THE PROBLEM DOCKER SOLVES  
// -----------------------------------------------------------------------------

/*
 * Before Docker:
 *
 * ❌ Works on my machine
 * ❌ Different Node versions
 * ❌ Missing dependencies
 * ❌ OS incompatibility
 * ❌ Deployment inconsistencies
 *
 * Example:
 *
 * Developer machine:
 * Node 20
 *
 * Production server:
 * Node 16
 *
 * RESULT:
 * App crashes
 *
 * 🎯 Goal:
 * Eliminate environment inconsistency
 */


// -----------------------------------------------------------------------------  
// ! PHASE 3 — WHAT IS A CONTAINER?  
// -----------------------------------------------------------------------------

/*
 * A container is:
 *
 * → isolated environment
 *
 * Think of it like:
 *
 * mini-computer for your app
 *
 * It contains:
 *
 * ✔ app code
 * ✔ dependencies
 * ✔ runtime
 * ✔ libraries
 *
 * BUT shares the host OS kernel
 *
 * 🎯 Result:
 * Lightweight virtualization
 */


// -----------------------------------------------------------------------------  
// ! PHASE 4 — DOCKER VS VIRTUAL MACHINE  
// -----------------------------------------------------------------------------

/*
 * Virtual Machine:
 *
 * App
 * Guest OS
 * Hypervisor
 * Host OS
 *
 * Heavy ❌
 *
 *
 * Docker:
 *
 * App
 * Container
 * Docker Engine
 * Host OS
 *
 * Lightweight ✅
 *
 * 🎯 Goal:
 * Faster deployments + less resource usage
 */


// -----------------------------------------------------------------------------  
// ! PHASE 5 — IMPORTANT DOCKER TERMS  
// -----------------------------------------------------------------------------

/*
 * IMAGE
 * -----
 * Blueprint/template for container
 *
 *
 * CONTAINER
 * ---------
 * Running instance of an image
 *
 *
 * DOCKERFILE
 * ----------
 * Instructions for building image
 *
 *
 * DOCKER HUB
 * ----------
 * Registry for Docker images
 *
 *
 * 🎯 Goal:
 * Understand Docker vocabulary
 */


// -----------------------------------------------------------------------------  
// ! PHASE 6 — INSTALLING DOCKER  
// -----------------------------------------------------------------------------

/*
 * MAC:
 * → Install Docker Desktop
 *
 *
 * UBUNTU:
 *
 * sudo apt update
 * sudo apt install docker.io -y
 *
 *
 * AMAZON LINUX:
 *
 * sudo yum install docker -y
 *
 *
 * START DOCKER:
 *
 * sudo systemctl start docker
 * sudo systemctl enable docker
 *
 *
 * CHECK VERSION:
 *
 * docker --version
 *
 * 🎯 Goal:
 * Setup Docker environment
 */


// -----------------------------------------------------------------------------  
// ! PHASE 7 — YOUR FIRST DOCKER COMMAND  
// -----------------------------------------------------------------------------

/*
 * RUN HELLO WORLD:
 *
 * docker run hello-world
 *
 *
 * What happens:
 *
 * 1. Docker checks local image
 * 2. Downloads image if missing
 * 3. Creates container
 * 4. Runs container
 *
 * 🎯 Goal:
 * Understand Docker lifecycle
 */


// -----------------------------------------------------------------------------  
// ! PHASE 8 — DOCKER IMAGE FLOW  
// -----------------------------------------------------------------------------

/*
 * SOURCE CODE
 *      ↓
 * Dockerfile
 *      ↓
 * Docker Image
 *      ↓
 * Docker Container
 *
 * 🎯 Goal:
 * Understand image creation flow
 */


// -----------------------------------------------------------------------------  
// ! PHASE 9 — WHAT IS A DOCKERFILE?  
// -----------------------------------------------------------------------------

/*
 * Dockerfile = recipe for your app environment
 *
 * Example:
 */

// FROM node:20

// WORKDIR /app

// COPY package*.json ./

// RUN npm install

// COPY . .

// RUN npm run build

// CMD ["npm", "run", "dev"]

/*
 * 🎯 Goal:
 * Automate environment setup
 */


// -----------------------------------------------------------------------------  
// ! PHASE 10 — IMPORTANT DOCKERFILE COMMANDS  
// -----------------------------------------------------------------------------

/*
 * FROM
 * ----
 * Base image
 *
 *
 * WORKDIR
 * -------
 * Working directory inside container
 *
 *
 * COPY
 * ----
 * Copy files into container
 *
 *
 * RUN
 * ---
 * Execute commands during build
 *
 *
 * CMD
 * ---
 * Startup command
 *
 *
 * EXPOSE
 * ------
 * Document container port
 *
 * 🎯 Goal:
 * Understand Dockerfile structure
 */


// -----------------------------------------------------------------------------  
// ! PHASE 11 — BUILDING A DOCKER IMAGE  
// -----------------------------------------------------------------------------

/*
 * BUILD IMAGE:
 *
 * docker build -t my-react-app .
 *
 *
 * -t = tag/name
 *
 * RESULT:
 * Docker image created
 *
 * 🎯 Goal:
 * Convert app into image
 */


// -----------------------------------------------------------------------------  
// ! PHASE 12 — RUNNING A CONTAINER  
// -----------------------------------------------------------------------------

/*
 * RUN CONTAINER:
 *
 * docker run -p 3000:3000 my-react-app
 *
 *
 * PORT MAPPING:
 *
 * host:container
 *
 * 3000:3000
 *
 * Means:
 *
 * local machine port 3000
 * →
 * container port 3000
 *
 * 🎯 Goal:
 * Access containerized app
 */


// -----------------------------------------------------------------------------  
// ! PHASE 13 — USEFUL DOCKER COMMANDS  
// -----------------------------------------------------------------------------

/*
 * LIST RUNNING CONTAINERS:
 *
 * docker ps
 *
 *
 * LIST ALL CONTAINERS:
 *
 * docker ps -a
 *
 *
 * STOP CONTAINER:
 *
 * docker stop <container-id>
 *
 *
 * REMOVE CONTAINER:
 *
 * docker rm <container-id>
 *
 *
 * REMOVE IMAGE:
 *
 * docker rmi <image-id>
 *
 * 🎯 Goal:
 * Manage containers properly
 */


// -----------------------------------------------------------------------------  
// ! PHASE 14 — DOCKER FOR REACT APPS  
// -----------------------------------------------------------------------------

/*
 * React apps can run in:
 *
 * ✔ development mode
 * ✔ production mode
 *
 *
 * Production setup usually:
 *
 * React Build
 *      ↓
 * Nginx
 *      ↓
 * Docker Container
 *
 * 🎯 Goal:
 * Production-ready frontend deployment
 */


// -----------------------------------------------------------------------------  
// ! PHASE 15 — DOCKER FOR NODE BACKENDS  
// -----------------------------------------------------------------------------

/*
 * Backend container usually contains:
 *
 * ✔ Node.js
 * ✔ Express app
 * ✔ Dependencies
 *
 *
 * Example:
 *
 * docker run -p 5000:5000 backend-api
 *
 * 🎯 Goal:
 * Containerized backend deployment
 */


// -----------------------------------------------------------------------------  
// ! PHASE 16 — WHAT IS DOCKER HUB?  
// -----------------------------------------------------------------------------

/*
 * Docker Hub = GitHub for Docker images
 *
 * Examples:
 *
 * node
 * nginx
 * mongo
 * postgres
 * redis
 *
 *
 * PULL IMAGE:
 *
 * docker pull nginx
 *
 * 🎯 Goal:
 * Use prebuilt images
 */


// -----------------------------------------------------------------------------  
// ! PHASE 17 — REAL PRODUCTION FLOW  
// -----------------------------------------------------------------------------

/*
 * GITHUB
 *    ↓
 * CI/CD
 *    ↓
 * Docker Build
 *    ↓
 * Docker Image
 *    ↓
 * EC2 / ECS / Kubernetes
 *
 * 🎯 Goal:
 * Modern deployment architecture
 */


// -----------------------------------------------------------------------------  
// ! PHASE 18 — WHY DOCKER IS IMPORTANT  
// -----------------------------------------------------------------------------

/*
 * Docker is used everywhere because:
 *
 * ✔ consistent environments
 * ✔ easier deployments
 * ✔ scalability
 * ✔ microservices support
 * ✔ cloud-native development
 * ✔ easier onboarding
 *
 * 🎯 Goal:
 * Production standardization
 */


// -----------------------------------------------------------------------------  
// ! PHASE 19 — COMMON BEGINNER MISTAKES  
// -----------------------------------------------------------------------------

/*
 * ❌ Forgetting port mapping
 * ❌ Wrong WORKDIR
 * ❌ Not copying package.json first
 * ❌ Huge Docker images
 * ❌ Using development builds in production
 *
 * 🎯 Avoid these early
 */


// -----------------------------------------------------------------------------  
// ! PHASE 20 — DOCKER + AWS  
// -----------------------------------------------------------------------------

/*
 * Docker works with:
 *
 * ✔ EC2
 * ✔ ECS
 * ✔ EKS
 * ✔ Lambda containers
 *
 *
 * Common production flow:
 *
 * Docker
 *    ↓
 * Push image
 *    ↓
 * AWS deployment
 *
 * 🎯 Goal:
 * Cloud-native deployments
 */


// -----------------------------------------------------------------------------  
// ! PHASE 21 — DOCKER + CI/CD  
// -----------------------------------------------------------------------------

/*
 * GitHub Actions can:
 *
 * ✔ build Docker images
 * ✔ run tests
 * ✔ push images
 * ✔ deploy automatically
 *
 *
 * Example:
 *
 * git push
 *    ↓
 * GitHub Actions
 *    ↓
 * Docker build
 *    ↓
 * Deploy
 *
 * 🎯 Goal:
 * Fully automated deployments
 */


// -----------------------------------------------------------------------------  
// 🧠 FINAL MINDSET  
// -----------------------------------------------------------------------------

/*
 * Docker is:
 *
 * → not just a tool
 *
 * It is:
 *
 * ✔ deployment standard
 * ✔ DevOps foundation
 * ✔ cloud engineering essential
 *
 *
 * If you understand Docker:
 *
 * ✔ deployments become easier
 * ✔ environments become predictable
 * ✔ cloud workflows make sense
 * ✔ CI/CD becomes more powerful
 *
 *
 * Docker changes how modern software is built.
 */