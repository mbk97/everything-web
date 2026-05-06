// -----------------------------------------------------------------------------  
// ! PHASE 1 — EC2 FUNDAMENTALS  
// -----------------------------------------------------------------------------

/*
 * QUESTION 1: What is Amazon EC2?
 *
 * ANSWER:
 * :contentReference[oaicite:0]{index=0} is a service that provides scalable virtual servers in the cloud.
 * It allows you to run applications without owning physical hardware.
 *
 * 🎯 Key Point:
 * It gives full control over OS, networking, and deployment.
 */


/*
 * QUESTION 2: What is an AMI?
 *
 * ANSWER:
 * An AMI (Amazon Machine Image) is a template used to launch EC2 instances.
 * It contains OS, software, and configurations.
 *
 * 🎯 Key Point:
 * Every EC2 instance is created from an AMI.
 */


/*
 * QUESTION 3: What is a Security Group?
 *
 * ANSWER:
 * A Security Group is a virtual firewall that controls inbound and outbound traffic.
 *
 * Example:
 * - Port 22 → SSH
 * - Port 80 → HTTP
 * - Port 443 → HTTPS
 *
 * 🎯 Key Point:
 * It is stateful (automatically allows return traffic).
 */


// -----------------------------------------------------------------------------  
// ! PHASE 2 — SERVER & DEPLOYMENT  
// -----------------------------------------------------------------------------

/*
 * QUESTION 4: How did you deploy your Node.js app on EC2?
 *
 * ANSWER:
 * 1. SSH into EC2
 * 2. Install Node.js
 * 3. Clone project from GitHub
 * 4. Run npm install
 * 5. Start app using :contentReference[oaicite:1]{index=1}
 * 6. Configure :contentReference[oaicite:2]{index=2} as reverse proxy
 *
 * 🎯 Key Point:
 * Production apps should not run with `node index.js` directly.
 */


/*
 * QUESTION 5: What is PM2 and why did you use it?
 *
 * ANSWER:
 * :contentReference[oaicite:3]{index=3} is a process manager for Node.js apps.
 *
 * It helps:
 * - Keep app running
 * - Restart on crash
 * - Manage logs
 *
 * 🎯 Key Point:
 * Ensures high availability of your app.
 */


/*
 * QUESTION 6: What is Nginx used for?
 *
 * ANSWER:
 * :contentReference[oaicite:4]{index=4} is used as a reverse proxy.
 *
 * It:
 * - Receives requests from users
 * - Forwards them to Node app
 * - Handles static files and SSL
 *
 * 🎯 Key Point:
 * It improves security and performance.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 3 — NETWORKING & DEBUGGING  
// -----------------------------------------------------------------------------

/*
 * QUESTION 7: What is the difference between public and private IP?
 *
 * ANSWER:
 * - Public IP → accessible from the internet
 * - Private IP → used internally within AWS network
 *
 * 🎯 Key Point:
 * Public IP can change unless you use Elastic IP.
 */


/*
 * QUESTION 8: Why was your app not accessible after deployment?
 *
 * ANSWER:
 * Possible reasons:
 * - Port not open in Security Group
 * - App not running
 * - Nginx misconfiguration
 * - Wrong port binding
 *
 * 🎯 Key Point:
 * Always check networking + server + app layers.
 */


/*
 * QUESTION 9: How do you debug a running server?
 *
 * ANSWER:
 * - Check running ports → ss -tulnp
 * - Check logs → pm2 logs
 * - Check Nginx config
 *
 * 🎯 Key Point:
 * Debugging is systematic, not guesswork.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 4 — SECURITY & HTTPS  
// -----------------------------------------------------------------------------

/*
 * QUESTION 10: What is HTTPS and why is it important?
 *
 * ANSWER:
 * HTTPS encrypts data between client and server.
 *
 * It prevents:
 * - Data interception
 * - Man-in-the-middle attacks
 *
 * 🎯 Key Point:
 * Required for production apps.
 */


/*
 * QUESTION 11: How do you enable HTTPS on EC2?
 *
 * ANSWER:
 * Use :contentReference[oaicite:5]{index=5}:
 *
 * - Install certbot
 * - Generate SSL certificate
 * - Configure Nginx
 *
 * 🎯 Key Point:
 * Free and widely used in production.
 */


/*
 * QUESTION 12: How do you secure an EC2 instance?
 *
 * ANSWER:
 * - Restrict ports in Security Group
 * - Use SSH keys (no passwords)
 * - Disable root login
 *
 * 🎯 Key Point:
 * Follow least privilege principle.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 5 — ARCHITECTURE & SCALING  
// -----------------------------------------------------------------------------

/*
 * QUESTION 13: What happens if your EC2 instance goes down?
 *
 * ANSWER:
 * Your application becomes unavailable.
 *
 * 🎯 Key Point:
 * Single EC2 = single point of failure.
 */


/*
 * QUESTION 14: How do you make your app highly available?
 *
 * ANSWER:
 * - Use multiple EC2 instances
 * - Add Load Balancer
 * - Enable Auto Scaling
 *
 * 🎯 Key Point:
 * Avoid downtime.
 */


/*
 * QUESTION 15: What is a Load Balancer?
 *
 * ANSWER:
 * :contentReference[oaicite:6]{index=6} distributes traffic across multiple servers.
 *
 * 🎯 Key Point:
 * Improves performance and reliability.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 6 — STORAGE & FRONTEND ARCHITECTURE  
// -----------------------------------------------------------------------------

/*
 * QUESTION 16: Why use S3 instead of EC2 for frontend?
 *
 * ANSWER:
 * :contentReference[oaicite:7]{index=7} is optimized for static files.
 *
 * Benefits:
 * - Cheaper
 * - Scalable
 * - Easy to host React apps
 *
 * 🎯 Key Point:
 * EC2 is for backend, S3 is for frontend.
 */


/*
 * QUESTION 17: How do you improve global performance?
 *
 * ANSWER:
 * Use :contentReference[oaicite:8]{index=8}.
 *
 * It caches content closer to users worldwide.
 *
 * 🎯 Key Point:
 * Reduces latency.
 */


// -----------------------------------------------------------------------------  
// ! PHASE 7 — DEVOPS & AUTOMATION  
// -----------------------------------------------------------------------------

/*
 * QUESTION 18: How do you automate deployment?
 *
 * ANSWER:
 * Use :contentReference[oaicite:9]{index=9}:
 *
 * - Trigger on push
 * - SSH into EC2
 * - Run deploy script
 *
 * 🎯 Key Point:
 * Eliminates manual deployment.
 */


/*
 * QUESTION 19: What is CI/CD?
 *
 * ANSWER:
 * Continuous Integration / Continuous Deployment
 *
 * - CI → test & build code
 * - CD → deploy automatically
 *
 * 🎯 Key Point:
 * Faster and safer releases.
 */


// -----------------------------------------------------------------------------  
// 🧠 BONUS — REAL INTERVIEW SCENARIOS  
// -----------------------------------------------------------------------------

/*
 * QUESTION 20: Users cannot access your app. What do you check?
 *
 * ANSWER:
 * 1. App running? (PM2)
 * 2. Port open?
 * 3. Nginx config
 * 4. Security group
 * 5. DNS
 *
 * 🎯 Key Point:
 * Always troubleshoot layer by layer.
 */


/*
 * QUESTION 21: Your app crashes after deployment. What do you do?
 *
 * ANSWER:
 * - Check logs
 * - Rollback previous version
 * - Fix and redeploy
 *
 * 🎯 Key Point:
 * Always have rollback strategy.
 */


// -----------------------------------------------------------------------------  
// 🧠 FINAL MINDSET  
// -----------------------------------------------------------------------------
/*
 * If you master these:
 *
 * You can:
 * ✔ explain your EC2 work confidently
 * ✔ pass cloud/devops interviews
 * ✔ debug production issues
 *
 * This is:
 * → Mid-level backend/devops readiness
 *
 * NEXT STEP:
 * Practice answering OUT LOUD (critical)
 */