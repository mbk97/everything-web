// =============================================================================
// 🐳 DEVOPS + DOCKER HANDS-ON TASK ROADMAP
// =============================================================================


// -----------------------------------------------------------------------------
// ! TASK 1 — INSTALL DOCKER LOCALLY (Done)
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Install Docker Desktop on your machine
 *
 *
 * Practice:
 *
 * ✔ docker --version
 * ✔ docker ps
 * ✔ docker images
 *
 *
 * 🎯 GOAL:
 *
 * Understand Docker installation and daemon management
 */


// -----------------------------------------------------------------------------
// ! TASK 2 — RUN YOUR FIRST CONTAINER (Done)
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Run nginx container locally
 *
 *
 * Command:
 *
 * docker run -d -p 8080:80 nginx
 *
 *
 * Then open:
 *
 * http://localhost:8080
 *
 *
 * 🎯 GOAL:
 *
 * Understand:
 * ✔ Containers
 * ✔ Port mapping
 * ✔ Detached mode
 * ✔ Public access
 */


// -----------------------------------------------------------------------------
// ! TASK 3 — BUILD YOUR FIRST CUSTOM IMAGE (Done)
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Create a simple Node.js app
 * Dockerize it
 *
 *
 * Practice:
 *
 * ✔ Create Dockerfile
 * ✔ docker build
 * ✔ docker run
 *
 *
 * 🎯 GOAL:
 *
 * Learn how Docker packages applications
 */


// -----------------------------------------------------------------------------
// ! TASK 4 — UNDERSTAND DOCKER PORTS (Done)
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Run same app on:
 *
 * -p 3000:8080
 *
 * Then:
 *
 * -p 5000:8080
 *
 *
 * 🎯 GOAL:
 *
 * Understand:
 * ✔ HOST_PORT
 * ✔ CONTAINER_PORT
 * ✔ Docker networking
 */


// -----------------------------------------------------------------------------
// ! TASK 5 — USE ENVIRONMENT VARIABLES (done)
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Create .env file
 * Pass env variables into container
 *
 *
 * Practice:
 *
 * docker run --env-file .env app-name
 *
 *
 * 🎯 GOAL:
 *
 * Learn configuration management
 */


// -----------------------------------------------------------------------------
// ! TASK 6 — DEBUG A BROKEN CONTAINER (done)
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Intentionally break:
 *
 * ✔ MongoDB URI
 * ✔ PORT
 * ✔ Missing package
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
 * Learn real-world troubleshooting
 */


// -----------------------------------------------------------------------------
// ! TASK 7 — DEPLOY NODE APP TO EC2 (Done)
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Deploy your Node.js app on EC2 WITHOUT Docker first
 *
 *
 * Practice:
 *
 * ✔ Install Node
 * ✔ Run PM2
 * ✔ Open security groups
 *
 *
 * 🎯 GOAL:
 *
 * Understand traditional deployment before Docker
 */


// -----------------------------------------------------------------------------
// ! TASK 8 — INSTALL NGINX ON EC2 (Done)
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Install NGINX
 * Reverse proxy Node app
 *
 *
 * Practice:
 *
 * ✔ nginx.conf
 * ✔ proxy_pass
 * ✔ restart nginx
 *
 *
 * 🎯 GOAL:
 *
 * Understand production reverse proxy architecture
 */


// -----------------------------------------------------------------------------
// ! TASK 9 — ADD HTTPS USING CERTBOT (Done)
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Configure SSL on your EC2 app
 *
 *
 * Practice:
 *
 * ✔ Domain setup
 * ✔ Certbot
 * ✔ HTTPS verification
 *
 *
 * 🎯 GOAL:
 *
 * Learn production-grade HTTPS setup
 */


// -----------------------------------------------------------------------------
// ! TASK 10 — CONTAINERIZE YOUR EXISTING EC2 APP
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Replace PM2 deployment with Docker
 *
 *
 * Practice:
 *
 * ✔ docker build
 * ✔ docker run
 * ✔ remove PM2
 *
 *
 * 🎯 GOAL:
 *
 * Learn migration from traditional → containerized architecture
 */


// -----------------------------------------------------------------------------
// ! TASK 11 — CONNECT NGINX TO DOCKER (Done)
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Make NGINX proxy traffic into Docker container
 *
 *
 * Example:
 *
 * proxy_pass http://localhost:8080;
 *
 *
 * 🎯 GOAL:
 *
 * Understand:
 * ✔ Docker + NGINX integration
 * ✔ Production routing
 */


// -----------------------------------------------------------------------------
// ! TASK 12 — AUTO-RESTART CONTAINERS
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Use:
 *
 * --restart unless-stopped
 *
 *
 * Reboot EC2
 * Confirm container auto-starts
 *
 *
 * 🎯 GOAL:
 *
 * Learn resilient production deployments
 */


// -----------------------------------------------------------------------------
// ! TASK 13 — USE DOCKER VOLUMES
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Run MongoDB in Docker using volume
 *
 *
 * Practice:
 *
 * docker volume create mongo-data
 *
 *
 * 🎯 GOAL:
 *
 * Learn persistent storage management
 */


// -----------------------------------------------------------------------------
// ! TASK 14 — BUILD MULTI-CONTAINER APP
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Create architecture:
 *
 * Frontend
 * Backend
 * MongoDB
 * NGINX
 *
 *
 * 🎯 GOAL:
 *
 * Understand service-based architecture
 */


// -----------------------------------------------------------------------------
// ! TASK 15 — LEARN DOCKER COMPOSE
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Create docker-compose.yml
 *
 *
 * Run:
 *
 * docker compose up -d
 *
 *
 * 🎯 GOAL:
 *
 * Learn orchestration of multiple services
 */


// -----------------------------------------------------------------------------
// ! TASK 16 — PUSH IMAGE TO DOCKER HUB
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Create Docker Hub account
 *
 *
 * Practice:
 *
 * ✔ docker login
 * ✔ docker push
 * ✔ docker pull
 *
 *
 * 🎯 GOAL:
 *
 * Learn container registries
 */


// -----------------------------------------------------------------------------
// ! TASK 17 — BUILD CI/CD PIPELINE
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Create GitHub Actions workflow
 *
 *
 * Automate:
 *
 * ✔ git pull
 * ✔ docker build
 * ✔ docker run
 *
 *
 * 🎯 GOAL:
 *
 * Learn deployment automation
 */


// -----------------------------------------------------------------------------
// ! TASK 18 — CREATE deploy.sh SCRIPT
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Create reusable deployment script
 *
 *
 * Example:
 *
 * ./deploy.sh
 *
 *
 * 🎯 GOAL:
 *
 * Learn infrastructure scripting
 */


// -----------------------------------------------------------------------------
// ! TASK 19 — MONITOR DOCKER CONTAINERS
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Use:
 *
 * docker stats
 *
 *
 * Monitor:
 *
 * ✔ CPU
 * ✔ RAM
 * ✔ Restart loops
 *
 *
 * 🎯 GOAL:
 *
 * Learn operational monitoring
 */


// -----------------------------------------------------------------------------
// ! TASK 20 — OPTIMIZE IMAGE SIZE
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Reduce image:
 *
 * 1GB → under 300MB
 *
 *
 * Practice:
 *
 * ✔ Alpine images
 * ✔ Multi-stage builds
 * ✔ .dockerignore
 *
 *
 * 🎯 GOAL:
 *
 * Learn production optimization
 */


// -----------------------------------------------------------------------------
// ! TASK 21 — CREATE BLUE/GREEN DEPLOYMENT
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Run:
 *
 * OLD app → port 8080
 * NEW app → port 5000
 *
 *
 * Switch NGINX between them
 *
 *
 * 🎯 GOAL:
 *
 * Learn zero-downtime deployment strategy
 */


// -----------------------------------------------------------------------------
// ! TASK 22 — SETUP LOAD BALANCING
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Run multiple Node containers
 *
 *
 * Example:
 *
 * app1 → 8081
 * app2 → 8082
 *
 *
 * Configure NGINX load balancing
 *
 *
 * 🎯 GOAL:
 *
 * Learn horizontal scaling
 */


// -----------------------------------------------------------------------------
// ! TASK 23 — DEPLOY FULLSTACK APP
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Deploy:
 *
 * ✔ React frontend
 * ✔ Node backend
 * ✔ MongoDB
 * ✔ NGINX
 *
 *
 * 🎯 GOAL:
 *
 * Build real-world production system
 */


// -----------------------------------------------------------------------------
// ! TASK 24 — USE AWS ECR
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Push Docker image to AWS ECR
 *
 *
 * Practice:
 *
 * ✔ ECR authentication
 * ✔ Push image
 * ✔ Pull image
 *
 *
 * 🎯 GOAL:
 *
 * Learn cloud-native container registry
 */


// -----------------------------------------------------------------------------
// ! TASK 25 — LEARN KUBERNETES BASICS
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Deploy your Docker app to Kubernetes
 *
 *
 * Learn:
 *
 * ✔ Pods
 * ✔ Deployments
 * ✔ Services
 * ✔ Ingress
 *
 *
 * 🎯 GOAL:
 *
 * Move from containers → orchestration
 */


// -----------------------------------------------------------------------------
// ! TASK 26 — HANDLE REAL INCIDENTS
// -----------------------------------------------------------------------------

/*
 * TASK:
 *
 * Simulate:
 *
 * ✔ Container crash
 * ✔ High CPU
 * ✔ Full disk
 * ✔ Expired SSL
 * ✔ Broken deployment
 *
 *
 * Recover system.
 *
 *
 * 🎯 GOAL:
 *
 * Build real operational confidence
 */


// -----------------------------------------------------------------------------
// ! TASK 27 — CREATE COMPLETE PRODUCTION STACK
// -----------------------------------------------------------------------------

/*
 * FINAL PROJECT:
 *
 * GitHub
 *    ↓
 * GitHub Actions
 *    ↓
 * EC2
 *    ↓
 * Docker
 *    ↓
 * NGINX
 *    ↓
 * Node.js API
 *    ↓
 * MongoDB
 *
 *
 * Include:
 *
 * ✔ HTTPS
 * ✔ CI/CD
 * ✔ Monitoring
 * ✔ Docker Compose
 * ✔ Automatic deployment
 *
 *
 * 🎯 GOAL:
 *
 * Build production-grade DevOps architecture
 */


// -----------------------------------------------------------------------------
// 🧠 FINAL MINDSET
// -----------------------------------------------------------------------------

/*
 * If you complete these tasks:
 *
 * ✔ You will understand Docker deeply
 * ✔ You will understand deployment engineering
 * ✔ You will understand cloud infrastructure
 * ✔ You will understand production systems
 * ✔ You will be able to handle real DevOps responsibilities
 *
 *
 * These are REAL industry skills.
 */