// # =============================================================================
// # 🚀 COMPLETE GITHUB ACTIONS + DOCKER + EC2 CI/CD WORKFLOW
// # =============================================================================

// # -----------------------------------------------------------------------------
// # ! WHAT THIS DOES
// # -----------------------------------------------------------------------------

// # Push code to GitHub
// #        ↓
// # GitHub Actions triggers automatically
// #        ↓
// # SSH into EC2
// #        ↓
// # Pull latest code
// #        ↓
// # Stop old Docker container
// #        ↓
// # Build new Docker image
// #        ↓
// # Start new Docker container
// #
// # RESULT:
// # Automatic deployment to production


// # -----------------------------------------------------------------------------
// # ! FILE LOCATION
// # -----------------------------------------------------------------------------

// # Create this file inside:
// #
// # .github/workflows/deploy.yml


// # -----------------------------------------------------------------------------
// # ! COMPLETE deploy.yml FILE
// # -----------------------------------------------------------------------------

// name: Deploy Docker App To EC2

// on:
//   push:
//     branches:
//       - master


// jobs:
//   deploy:
//     runs-on: ubuntu-latest

//     steps:

//       # =========================================================================
//       # 📥 STEP 1 — CHECKOUT REPOSITORY
//       # =========================================================================

//       - name: Checkout Code
//         uses: actions/checkout@v4


//       # =========================================================================
//       # 🔐 STEP 2 — SSH INTO EC2 AND DEPLOY
//       # =========================================================================

//       - name: Deploy To EC2 Server
//         uses: appleboy/ssh-action@master

//         with:

//           # 🌐 EC2 PUBLIC IP OR DOMAIN
//           host: ${{ secrets.EC2_HOST }}

//           # 👤 EC2 USER
//           username: ${{ secrets.EC2_USER }}

//           # 🔑 PRIVATE SSH KEY
//           key: ${{ secrets.EC2_SSH_KEY }}

//           # =========================================================================
//           # 🚀 DEPLOYMENT SCRIPT
//           # =========================================================================

//           script: |

//             echo "========================================="
//             echo "🚀 STARTING DEPLOYMENT"
//             echo "========================================="


//             # ================================================================
//             # 📂 ENTER PROJECT DIRECTORY
//             # ================================================================

//             cd ~/blog-website-api


//             # ================================================================
//             # 📥 PULL LATEST CODE
//             # ================================================================

//             echo "📥 Pulling latest code..."

//             git pull origin master


//             # ================================================================
//             # 🛑 STOP OLD CONTAINER
//             # ================================================================

//             echo "🛑 Stopping old container..."

//             sudo docker stop blog-api-container || true


//             # ================================================================
//             # ❌ REMOVE OLD CONTAINER
//             # ================================================================

//             echo "❌ Removing old container..."

//             sudo docker rm blog-api-container || true


//             # ================================================================
//             # 🧹 OPTIONAL: REMOVE UNUSED IMAGES
//             # ================================================================

//             echo "🧹 Cleaning old Docker images..."

//             sudo docker image prune -f


//             # ================================================================
//             # 🔨 BUILD NEW DOCKER IMAGE
//             # ================================================================

//             echo "🔨 Building new Docker image..."

//             sudo docker build -t blog-api .


//             # ================================================================
//             # 🚀 START NEW CONTAINER
//             # ================================================================

//             echo "🚀 Starting new Docker container..."

//             sudo docker run -d \
//               --restart unless-stopped \
//               --env-file .env \
//               -p 8080:8080 \
//               --name blog-api-container \
//               blog-api


//             # ================================================================
//             # 📋 SHOW RUNNING CONTAINERS
//             # ================================================================

//             echo "📋 Running containers..."

//             sudo docker ps


//             # ================================================================
//             # 📜 SHOW CONTAINER LOGS
//             # ================================================================

//             echo "📜 Container logs..."

//             sudo docker logs blog-api-container


//             echo "========================================="
//             echo "✅ DEPLOYMENT COMPLETED"
//             echo "========================================="



// # =============================================================================
// # 🔐 REQUIRED GITHUB SECRETS
// # =============================================================================

// # Go to:
// #
// # GitHub Repo
// #    ↓
// # Settings
// #    ↓
// # Secrets and variables
// #    ↓
// # Actions
// #
// # Add these:


// # =========================================================================
// # EC2_HOST
// # =========================================================================

// # Example:
// #
// # 16.171.xxx.xxx
// #
// # OR:
// #
// # api.havenastays.net


// # =========================================================================
// # EC2_USER
// # =========================================================================

// # Example:
// #
// # ec2-user


// # =========================================================================
// # EC2_SSH_KEY
// # =========================================================================

// # Paste contents of:
// #
// # ~/.ssh/id_rsa
// #
// # Your PRIVATE SSH KEY


// # =============================================================================
// # 🧠 WHAT HAPPENS AFTER THIS?
// # =============================================================================

// # Every time you run:
// #
// # git push origin master
// #
// #
// # GitHub Actions automatically:
// #
// # ✔ Connects to EC2
// # ✔ Pulls latest code
// # ✔ Stops old container
// # ✔ Builds new Docker image
// # ✔ Starts new container
// # ✔ Keeps NGINX working
// #
// #
// # Your production deployment becomes FULLY AUTOMATED.


// # =============================================================================
// # 🧠 FINAL PRODUCTION ARCHITECTURE
// # =============================================================================

// # Developer
// #     ↓
// # GitHub Push
// #     ↓
// # GitHub Actions
// #     ↓
// # EC2
// #     ↓
// # Docker Container
// #     ↓
// # NGINX
// #     ↓
// # Node.js API
// #     ↓
// # MongoDB Atlas
// #
// #
// # This is:
// #
// # ✔ Modern CI/CD
// # ✔ Real-world DevOps
// # ✔ Cloud-native deployment
// # ✔ Production-grade infrastructure