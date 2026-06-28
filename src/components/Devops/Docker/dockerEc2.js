/* eslint-disable no-undef */
// =============================================================================  
// 🐳 DEPLOYING A NODE.JS APP TO EC2 USING DOCKER (ZERO → PRODUCTION FLOW)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! PHASE 1 — FINAL ARCHITECTURE  
// -----------------------------------------------------------------------------

/*
 * USER
 *   ↓
 * EC2 SERVER
 *   ↓
 * Docker Container
 *   ↓
 * Node.js App
 *
 *
 * OPTIONAL PRODUCTION SETUP:
 *
 * USER
 *   ↓
 * Nginx
 *   ↓
 * Docker Container
 *   ↓
 * Node.js App
 *
 * 🎯 Goal:
 * Understand deployment architecture
 */


// -----------------------------------------------------------------------------  
// ! PHASE 2 — WHY USE DOCKER FOR BACKEND DEPLOYMENT  
// -----------------------------------------------------------------------------

/*
 * Without Docker:
 *
 * ❌ install Node manually
 * ❌ environment inconsistencies
 * ❌ dependency issues
 * ❌ deployment differences
 *
 *
 * With Docker:
 *
 * ✔ same environment everywhere
 * ✔ easier deployment
 * ✔ cleaner infrastructure
 * ✔ reproducible builds
 *
 * 🎯 Goal:
 * Standardize backend deployment
 */


// -----------------------------------------------------------------------------  
// ! PHASE 3 — PREPARE YOUR NODE APP  
// -----------------------------------------------------------------------------

/*
 * Example backend:
 *
 * server.js
 * package.json
 *
 *
 * SIMPLE EXPRESS APP:
 */

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Docker EC2 Deployment Working");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

/*
 * 🎯 Goal:
 * Ensure backend runs locally first
 */


// -----------------------------------------------------------------------------  
// ! PHASE 4 — CREATE DOCKERFILE  
// -----------------------------------------------------------------------------

/*
 * In project root:
 *
 * Dockerfile
 *
 *
 * Example:
 */

// FROM node:20

// WORKDIR /app

// COPY package*.json ./

// RUN npm install

// COPY . .

// EXPOSE 5000

// CMD ["node", "server.js"]

/*
 * 🎯 Goal:
 * Define backend container environment
 */


// -----------------------------------------------------------------------------  
// ! PHASE 5 — BUILD DOCKER IMAGE LOCALLY  
// -----------------------------------------------------------------------------

/*
 * BUILD IMAGE:
 *
 * docker build -t node-backend .
 *
 *
 * RESULT:
 *
 * Docker image created
 *
 * 🎯 Goal:
 * Package backend into portable image
 */


// -----------------------------------------------------------------------------  
// ! PHASE 6 — RUN CONTAINER LOCALLY  
// -----------------------------------------------------------------------------

/*
 * RUN CONTAINER:
 *
 * docker run -p 5000:5000 node-backend || docker run --env-file .env -p 8080:5000 blog-api-docker
 *
 *
 * TEST:
 *
 * http://localhost:5000
 *
 *
 * RESULT:
 *
 * Backend runs inside Docker container
 *
 * 🎯 Goal:
 * Verify container works locally
 */


// -----------------------------------------------------------------------------  
// ! PHASE 7 — CREATE EC2 INSTANCE  
// -----------------------------------------------------------------------------

/*
 * AWS Console
 *   ↓
 * EC2
 *   ↓
 * Launch Instance
 *
 *
 * Choose:
 *
 * ✔ Amazon Linux
 * ✔ Ubuntu
 *
 *
 * Security Group:
 *
 * Allow:
 *
 * ✔ SSH (22)
 * ✔ HTTP (80)
 * ✔ HTTPS (443)
 * ✔ Custom TCP (5000) ← temporary testing
 *
 * 🎯 Goal:
 * Create backend server
 */


// -----------------------------------------------------------------------------  
// ! PHASE 8 — CONNECT TO EC2  
// -----------------------------------------------------------------------------

/*
 * SSH INTO SERVER:
 *
 * ssh -i your-key.pem ec2-user@your-public-ip
 *
 *
 * Ubuntu:
 *
 * ssh -i your-key.pem ubuntu@your-public-ip
 *
 * 🎯 Goal:
 * Access Linux server
 */


// -----------------------------------------------------------------------------  
// ! PHASE 9 — INSTALL DOCKER ON EC2  
// -----------------------------------------------------------------------------

/*
 * AMAZON LINUX:
 *
 * sudo yum update -y
 * sudo yum install docker -y
 *
 *
 * START DOCKER:
 *
 * sudo systemctl start docker
 * sudo systemctl enable docker
 *
 *
 * VERIFY:
 *
 * docker --version
 *
 * 🎯 Goal:
 * Setup Docker runtime on EC2
 */


// -----------------------------------------------------------------------------  
// ! PHASE 10 — ALLOW DOCKER WITHOUT SUDO (OPTIONAL)  
// -----------------------------------------------------------------------------

/*
 * sudo usermod -aG docker ec2-user
 *
 *
 * THEN:
 *
 * exit
 *
 * reconnect SSH
 *
 * 🎯 Goal:
 * Run Docker commands more easily
 */


// -----------------------------------------------------------------------------  
// ! PHASE 11 — GET APP CODE ON EC2  
// -----------------------------------------------------------------------------

/*
 * OPTION 1:
 * git clone repository
 *
 * git clone https://github.com/your-repo.git
 *
 *
 * OPTION 2:
 * SCP upload
 *
 * OPTION 3:
 * CI/CD later
 *
 * 🎯 Goal:
 * Move backend code to server
 */


// -----------------------------------------------------------------------------  
// ! PHASE 12 — BUILD DOCKER IMAGE ON EC2  
// -----------------------------------------------------------------------------

/*
 * INSIDE PROJECT:
 *
 * docker build -t node-backend .
 *
 *
 * RESULT:
 *
 * Backend image built on server
 *
 * 🎯 Goal:
 * Prepare deployable container
 */


// -----------------------------------------------------------------------------  
// ! PHASE 13 — RUN BACKEND CONTAINER ON EC2  
// -----------------------------------------------------------------------------

/*
 * docker run -d -p 5000:5000 node-backend
 *
 *
 * FLAGS:
 *
 * -d
 * → detached/background mode
 *
 *
 * -p
 * → port mapping
 *
 *
 * RESULT:
 *
 * Node backend running on EC2
 *
 * 🎯 Goal:
 * Deploy backend container
 */


// -----------------------------------------------------------------------------  
// ! PHASE 14 — TEST BACKEND  
// -----------------------------------------------------------------------------

/*
 * OPEN:
 *
 * http://your-ec2-ip:5000
 *
 *
 * RESULT:
 *
 * "Docker EC2 Deployment Working"
 *
 * 🎯 Goal:
 * Verify production deployment
 */


// -----------------------------------------------------------------------------  
// ! PHASE 15 — IMPORTANT DOCKER COMMANDS  
// -----------------------------------------------------------------------------

/*
 * VIEW RUNNING CONTAINERS:
 *
 * docker ps
 *
 *
 * VIEW ALL CONTAINERS:
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
 * VIEW LOGS:
 *
 * docker logs <container-id>
 *
 * 🎯 Goal:
 * Manage deployed containers
 */


// -----------------------------------------------------------------------------  
// ! PHASE 16 — REAL PRODUCTION PROBLEM  
// -----------------------------------------------------------------------------

/*
 * Current setup:
 *
 * http://ip-address:5000
 *
 *
 * Problems:
 *
 * ❌ ugly URL
 * ❌ no HTTPS
 * ❌ exposed backend port
 * ❌ not production-grade
 *
 * 🎯 Goal:
 * Understand limitations
 */


// -----------------------------------------------------------------------------  
// ! PHASE 17 — PRODUCTION ARCHITECTURE WITH NGINX  
// -----------------------------------------------------------------------------

/*
 * REAL PRODUCTION FLOW:
 *
 * USER
 *   ↓ HTTPS (443)
 * Nginx
 *   ↓ HTTP
 * Docker Container
 *   ↓
 * Node App
 *
 *
 * WHY?
 *
 * ✔ HTTPS support
 * ✔ reverse proxy
 * ✔ better security
 * ✔ cleaner URLs
 *
 * 🎯 Goal:
 * Industry-standard deployment
 */


// -----------------------------------------------------------------------------  
// ! PHASE 18 — INSTALL NGINX ON EC2  
// -----------------------------------------------------------------------------

/*
 * AMAZON LINUX:
 *
 * sudo yum install nginx -y
 *
 *
 * START:
 *
 * sudo systemctl start nginx
 * sudo systemctl enable nginx
 *
 * 🎯 Goal:
 * Setup reverse proxy
 */


// -----------------------------------------------------------------------------  
// ! PHASE 19 — CONFIGURE NGINX REVERSE PROXY  
// -----------------------------------------------------------------------------

/*
 * NGINX CONFIG:
 *
 * sudo nano /etc/nginx/nginx.conf
 *
 *
 * Example:
 */

// server {
//     listen 80;

//     server_name api.yourdomain.com;

//     location / {
//         proxy_pass http://localhost:5000;
//     }
// }

/*
 * RESTART:
 *
 * sudo systemctl restart nginx
 *
 *
 * RESULT:
 *
 * api.yourdomain.com
 *        ↓
 * Nginx
 *        ↓
 * Docker Container
 *
 * 🎯 Goal:
 * Professional backend routing
 */


// -----------------------------------------------------------------------------  
// ! PHASE 20 — ENABLE HTTPS  
// -----------------------------------------------------------------------------

/*
 * INSTALL CERTBOT:
 *
 * sudo yum install -y certbot python3-certbot-nginx
 *
 *
 * GENERATE SSL:
 *
 * sudo certbot --nginx
 *
 *
 * RESULT:
 *
 * https://api.yourdomain.com
 *
 * 🎯 Goal:
 * Secure production backend
 */


// -----------------------------------------------------------------------------  
// ! PHASE 21 — FINAL PRODUCTION FLOW  
// -----------------------------------------------------------------------------

/*
 * USER
 *   ↓
 * https://api.yourdomain.com
 *   ↓
 * Nginx (SSL)
 *   ↓
 * Docker Container
 *   ↓
 * Node.js API
 *
 * 🎯 Goal:
 * Production-ready backend deployment
 */


// -----------------------------------------------------------------------------  
// ! PHASE 22 — CI/CD NEXT STEP  
// -----------------------------------------------------------------------------

/*
 * Future improvement:
 *
 * git push
 *    ↓
 * GitHub Actions
 *    ↓
 * Docker build
 *    ↓
 * Deploy to EC2 automatically
 *
 * 🎯 Goal:
 * Full deployment automation
 */


// -----------------------------------------------------------------------------  
// ! PHASE 23 — COMMON BEGINNER MISTAKES  
// -----------------------------------------------------------------------------

/*
 * ❌ Forgetting EC2 security group ports
 * ❌ Wrong Docker port mapping
 * ❌ Not exposing app port
 * ❌ Not running container in detached mode
 * ❌ Forgetting HTTPS
 * ❌ Using raw IP in production
 *
 * 🎯 Avoid these early
 */


// -----------------------------------------------------------------------------  
// 🧠 FINAL MINDSET  
// -----------------------------------------------------------------------------

/*
 * Docker deployment teaches:
 *
 * ✔ Linux servers
 * ✔ containers
 * ✔ backend hosting
 * ✔ reverse proxy
 * ✔ HTTPS
 * ✔ production architecture
 *
 *
 * THIS is where:
 *
 * frontend engineering
 * →
 * full infrastructure engineering
 *
 * begins.
 */