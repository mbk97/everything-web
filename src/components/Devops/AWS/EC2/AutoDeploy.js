/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// =============================================================================
// 🚀 AUTO-DEPLOY FROM GITHUB → EC2 (PM2 + NODE.JS)
// =============================================================================


// -----------------------------------------------------------------------------
// ! PHASE 1 — UNDERSTAND THE PROBLEM
// -----------------------------------------------------------------------------

/*
 * Right now:
 *
 * ✔ Your code lives on GitHub
 * ✔ Your app runs on EC2
 *
 * ❌ But EC2 does NOT auto-update when you push code
 *
 * You currently have to do:
 *
 * git pull
 * npm install
 * pm2 restart
 *
 * 🎯 Goal:
 * Make this process automatic
 */


// -----------------------------------------------------------------------------
// ! PHASE 2 — SIMPLE MANUAL DEPLOY (YOU MUST MASTER THIS FIRST)
// -----------------------------------------------------------------------------

/*
 * TASK 1: SSH into EC2
 */

// ssh -i your-key.pem ec2-user@YOUR-IP


/*
 * TASK 2: Navigate to project
 */

// cd ~/blog-website-api


/*
 * TASK 3: Pull latest code
 */

// git pull origin master


/*
 * TASK 4: Install dependencies
 */

// npm install


/*
 * TASK 5: Rebuild TypeScript
 */

// npm run build


/*
 * TASK 6: Restart app
 */

// pm2 restart blog-api


/*
 * 🎯 Goal:
 * This is your "manual deploy pipeline"
 *
 * You must be comfortable with this before automation
 */


// -----------------------------------------------------------------------------
// ! PHASE 3 — CREATE ONE-COMMAND DEPLOY SCRIPT (SMART MOVE)
// -----------------------------------------------------------------------------

/*
 * TASK 7: Create deploy script
 */

// nano deploy.sh


/*
 * Paste this:
 */

// #!/bin/bash

// echo "🚀 Pulling latest code..."
// git pull origin master

// echo "📦 Installing dependencies..."
// npm install

// echo "⚙️ Building project..."
// npm run build

// echo "🔄 Restarting app..."
// pm2 restart blog-api

// echo "✅ Deployment complete!"


/*
 * Save and exit
 */


/*
 * TASK 8: Make script executable
 */

// chmod +x deploy.sh


/*
 * TASK 9: Run it
 */

// ./deploy.sh


/*
 * 🎯 Goal:
 * Deploy your app with ONE command
 */


// -----------------------------------------------------------------------------
// ! PHASE 4 — AUTO DEPLOY USING GITHUB WEBHOOK (REAL DEVOPS 🔥)
// -----------------------------------------------------------------------------

/*
 * IDEA:
 *
 * GitHub → sends webhook → EC2 → runs deploy script
 *
 * So every push = auto deploy
 */


// -----------------------------------------------------------------------------
// TASK 10: Install webhook listener
// -----------------------------------------------------------------------------

// npm install -g pm2


/*
 * Create a simple webhook server
 */

// nano webhook.js


/*
 * Paste this:
 */

const http = require("http");
const { exec } = require("child_process");

// const SECRET = "mysecret"; // match with GitHub

http.createServer((req, res) => {
  if (req.method === "POST") {
    console.log("📦 GitHub webhook received");

    exec("cd ~/blog-website-api && ./deploy.sh", (err, stdout, stderr) => {
      if (err) {
        console.error("❌ Deploy failed:", err);
        return;
      }
      console.log(stdout);
    });

    res.end("Deploy triggered");
  } else {
    res.end("OK");
  }
}).listen(9000, () => {
  console.log("🚀 Webhook server running on port 9000");
});


/*
 * TASK 11: Run webhook server with PM2
 */

// pm2 start webhook.js --name webhook


/*
 * 🎯 Goal:
 * Your server now listens for GitHub events
 */


// -----------------------------------------------------------------------------
// TASK 12: CONNECT GITHUB WEBHOOK
// -----------------------------------------------------------------------------

/*
 * Go to:
 * GitHub repo → Settings → Webhooks → Add webhook
 *
 * Payload URL:
 *
 * http://YOUR-IP:9000
 *
 * Content type:
 * application/json
 *
 * Secret:
 * mysecret
 *
 * Events:
 * Just the push event
 */


/*
 * 🎯 Result:
 *
 * git push → GitHub → EC2 → deploy.sh runs automatically
 */


// -----------------------------------------------------------------------------
// ! PHASE 5 — PRO LEVEL (BEST PRACTICE)
// -----------------------------------------------------------------------------

/*
 * Instead of webhook.js, use:
 *
 * ✔ GitHub Actions (CI/CD)
 * ✔ SSH deploy
 *
 * Example flow:
 *
 * Push → GitHub Actions → SSH → EC2 → deploy
 *
 * This is industry standard
 */


// -----------------------------------------------------------------------------
// ! BONUS — GITHUB ACTIONS (ADVANCED 🔥)
// -----------------------------------------------------------------------------

/*
 * .github/workflows/deploy.yml
 */

// name: Deploy to EC2

// on:
//   push:
//     branches: [ "master" ]

// jobs:
//   deploy:
//     runs-on: ubuntu-latest

//     steps:
//       - name: Deploy via SSH
//         uses: appleboy/ssh-action@v0.1.10
//         with:
//           host: YOUR-IP
//           username: ec2-user
//           key: ${{ secrets.EC2_SSH_KEY }}
//           script: |
//             cd ~/blog-website-api
//             git pull origin master
//             npm install
//             npm run build
//             pm2 restart blog-api


/*
 * 🎯 Result:
 *
 * Push code → GitHub → EC2 auto deploy
 */


// -----------------------------------------------------------------------------
// 🧠 FINAL MINDSET
// -----------------------------------------------------------------------------

/*
 * Level 1:
 * Manual deploy → git pull + pm2 restart
 *
 * Level 2:
 * Script deploy → ./deploy.sh
 *
 * Level 3:
 * Webhook auto deploy
 *
 * Level 4 (REAL DEVOPS):
 * GitHub Actions CI/CD
 *
 * 🚀 You are currently between Level 2 → Level 3
 *
 * That is VERY GOOD progress
 */