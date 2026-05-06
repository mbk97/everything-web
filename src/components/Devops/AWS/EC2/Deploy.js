// =============================================================================
// 🚀 EC2 NODE.JS DEPLOYMENT — COMPLETE CLEAN GUIDE (ZERO → PRODUCTION)
// =============================================================================


// -----------------------------------------------------------------------------
// 🧱 PHASE 1 — CREATE EC2 SERVER (AWS)
// -----------------------------------------------------------------------------

/*
1. AWS Console → EC2 → Launch Instance

- Name: node-server
- AMI: Amazon Linux 2023
- Instance: t3.micro
- Key Pair: create (.pem)

Network:
✔ Auto-assign public IP → ENABLED

Security Group:
✔ SSH (22) → My IP
✔ HTTP (80) → Anywhere
✔ Custom TCP (3000) → Anywhere

Launch instance
*/


// -----------------------------------------------------------------------------
// 🔌 PHASE 2 — CONNECT TO SERVER
// -----------------------------------------------------------------------------

/*
EC2 → Instance → Connect → EC2 Instance Connect

Verify:
whoami
pwd
*/


// -----------------------------------------------------------------------------
// ⚙️ PHASE 3 — INITIAL SERVER SETUP
// -----------------------------------------------------------------------------

/*
sudo yum update -y
sudo yum install -y nodejs git

Check:
node -v
npm -v
*/


// -----------------------------------------------------------------------------
// 📁 PHASE 4 — PROJECT SETUP (2 OPTIONS)
// -----------------------------------------------------------------------------

/*
OPTION A — QUICK TEST SERVER

mkdir app && cd app
nano app.js

Paste:

const http = require("http");

http.createServer((req, res) => {
  res.end("Hello From EC2 🚀");
}).listen(3000, "0.0.0.0");

Run:
node app.js
*/


/*
OPTION B — REAL PROJECT (RECOMMENDED)

# On your local machine
git init
git add .
git commit -m "init"
git remote add origin <repo-url>
git push -u origin main

# On EC2
cd ~
git clone <repo-url>
cd your-project
npm install
*/


// -----------------------------------------------------------------------------
// 🚀 PHASE 5 — RUN APP WITH PM2
// -----------------------------------------------------------------------------

/*
Install PM2:
npm install -g pm2

Run app:

JS app:
pm2 start app.js --name api

TypeScript app:
npm run build
pm2 start dist/index.js --name api

Useful:
pm2 logs api
pm2 list
pm2 restart api
*/


// -----------------------------------------------------------------------------
// 🔁 PHASE 6 — KEEP APP ALIVE
// -----------------------------------------------------------------------------

/*
pm2 save
pm2 startup

# run generated command
*/


// -----------------------------------------------------------------------------
// 🌍 PHASE 7 — ACCESS YOUR APP
// -----------------------------------------------------------------------------

/*
http://YOUR-IP:3000

Test:
curl localhost:3000
*/


// -----------------------------------------------------------------------------
// 🔐 PHASE 8 — ENV VARIABLES
// -----------------------------------------------------------------------------

/*
nano .env

Example:
PORT=3000
DB_URL=your_db
JWT_SECRET=secret
*/


// -----------------------------------------------------------------------------
// 🌐 PHASE 9 — NGINX (OPTIONAL - PRODUCTION)
// -----------------------------------------------------------------------------

/*
Install:
sudo yum install nginx -y

Config:
sudo nano /etc/nginx/conf.d/app.conf

server {
  listen 80;
  server_name _;

  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
  }
}

Restart:
sudo systemctl restart nginx

Access:
http://YOUR-IP
*/


// -----------------------------------------------------------------------------
// 🔄 PHASE 10 — UPDATE DEPLOYMENT
// -----------------------------------------------------------------------------

/*
cd your-project

git pull
npm install

# if TypeScript
npm run build

pm2 restart api
*/


// -----------------------------------------------------------------------------
// ⚠️ COMMON MISTAKES
// -----------------------------------------------------------------------------

/*
❌ Running .ts directly
❌ Forgetting npm run build
❌ Port not open in security group
❌ Wrong PM2 entry file
❌ Not checking logs

✔ Always use:
pm2 logs api
*/


// -----------------------------------------------------------------------------
// 🧠 FINAL FLOW
// -----------------------------------------------------------------------------

/*
LOCAL → GitHub → EC2 → Node → PM2 → (Nginx) → Browser

You now understand:
✔ Server provisioning
✔ Backend deployment
✔ Process management
✔ Reverse proxy
✔ Production workflow
*/ 



// =============================================================================
// 🚀 EC2 FULL-STACK DEPLOYMENT — SINGLE INSTANCE (FRONTEND + BACKEND)
// =============================================================================


// -----------------------------------------------------------------------------
// 🧱 PHASE 1 — CREATE EC2 SERVER (AWS)
// -----------------------------------------------------------------------------

/*
✔ Create EC2 instance (Amazon Linux 2023, t3.micro)

✔ Security Group:
   - SSH (22)
   - HTTP (80)
   - Custom TCP (3000 or 8080)

❌ Forgetting to open port 80 → frontend won’t load
*/


// -----------------------------------------------------------------------------
// 🔌 PHASE 2 — CONNECT TO SERVER
// -----------------------------------------------------------------------------

/*
✔ Use:
ssh -i ~/Downloads/key.pem ec2-user@YOUR-IP

❌ Wrong key path (/~/Downloads) → will fail
❌ Using sudo with ssh/scp → breaks key access
*/


// -----------------------------------------------------------------------------
// ⚙️ PHASE 3 — INITIAL SERVER SETUP
// -----------------------------------------------------------------------------

/*
✔ Install dependencies:
sudo yum update -y
sudo yum install -y nodejs git nginx

✔ Start nginx:
sudo systemctl start nginx
sudo systemctl enable nginx
*/


// -----------------------------------------------------------------------------
// 📁 PHASE 4 — SETUP BACKEND (NODE API)
// -----------------------------------------------------------------------------

/*
✔ Clone repo:
cd ~
git clone <repo>
cd backend
npm install

✔ If TypeScript:
npm run build

✔ Start with PM2:
pm2 start dist/index.js --name api

✔ Verify:
pm2 list

❌ Backend not running → /api will return 500
❌ Wrong port → mismatch with Nginx
*/


// -----------------------------------------------------------------------------
// 🔁 PHASE 5 — KEEP BACKEND ALIVE
// -----------------------------------------------------------------------------

/*
✔ Persist:
pm2 save
pm2 startup
*/


// -----------------------------------------------------------------------------
// 📁 PHASE 6 — BUILD FRONTEND (LOCAL)
// -----------------------------------------------------------------------------

/*
⚛️ React:
npm run build → dist/ or build/

🅰️ Angular:
ng build --configuration production

✔ Output (IMPORTANT):
dist/your-app/browser/

❌ Uploading entire dist/* blindly → causes wrong folder structure
*/


// -----------------------------------------------------------------------------
// 📦 PHASE 7 — UPLOAD FRONTEND
// -----------------------------------------------------------------------------

/*
✔ Correct:
scp -i ~/Downloads/key.pem -r dist/your-app/browser/* ec2-user@IP:/home/ec2-user/frontend

❌ Wrong:
scp -i /~/Downloads/key.pem ❌
scp with sudo ❌

❌ Uploading dist/* → leads to:
/var/www/frontend/browser/index.html (WRONG)
*/


// -----------------------------------------------------------------------------
// 📁 PHASE 8 — MOVE FILES TO NGINX ROOT
// -----------------------------------------------------------------------------

/*
✔ Create correct directory:
sudo mkdir -p /var/www/frontend

✔ Copy files:
sudo cp -r ~/frontend/* /var/www/frontend

✔ Verify:
ls /var/www/frontend

✔ You MUST see:
index.html
main-*.js

❌ If you see:
browser/ ❌ → wrong structure → causes 403
*/


// -----------------------------------------------------------------------------
// 🔐 PHASE 9 — FIX PERMISSIONS (CRITICAL)
// -----------------------------------------------------------------------------

/*
✔ Fix ownership:
sudo chown -R nginx:nginx /var/www/frontend: change owner to nginx user

✔ Fix permissions:
sudo chmod -R 755 /var/www/frontend : change permissions to allow nginx to read files

✔ Allow directory traversal:
sudo chmod o+x /var
sudo chmod o+x /var/www

❌ Missing this → 403 Forbidden
*/


// -----------------------------------------------------------------------------
// 🌐 PHASE 10 — CONFIGURE NGINX
// -----------------------------------------------------------------------------

/*
sudo nano /etc/nginx/conf.d/app.conf


✔ Correct config:

server {
    listen 80;
    server_name _;

    root /var/www/frontend;
    index index.html;

    # FRONTEND
    location / {
        try_files $uri $uri/ /index.html;
    }

    # BACKEND
    location /api/ {
        proxy_pass http://localhost:8080/;
    }
}


❌ Missing trailing slash:
location /api { proxy_pass http://localhost:8080; }

→ causes:
 /api/blog → backend receives /api/blog ❌
*/


// -----------------------------------------------------------------------------
// 🔁 PHASE 11 — RESTART NGINX
// -----------------------------------------------------------------------------

/*
✔ Restart:
sudo systemctl restart nginx

✔ Test config:
sudo nginx -t

❌ Forgetting restart → changes won’t apply
*/


// -----------------------------------------------------------------------------
// 🌍 PHASE 12 — ACCESS YOUR APP
// -----------------------------------------------------------------------------

/*
✔ Frontend:
http://YOUR-IP

✔ Backend:
http://YOUR-IP/api/blog

✔ Test backend directly:
curl localhost:8080/blog

❌ 500 on / → frontend issue
❌ 500 on /api → backend issue
❌ 403 → permissions or missing index.html
*/


// -----------------------------------------------------------------------------
// 🔄 PHASE 13 — UPDATE DEPLOYMENT
// -----------------------------------------------------------------------------

/*
✔ Backend:
git pull
npm install
npm run build
pm2 restart api

✔ Frontend:
npm run build
scp dist/... → EC2
sudo cp → /var/www/frontend
sudo systemctl restart nginx
*/


// -----------------------------------------------------------------------------
// ⚠️ REAL MISTAKES YOU JUST AVOIDED
// -----------------------------------------------------------------------------

/*
❌ Wrong SCP path (~ issue)
❌ Using sudo with scp
❌ Wrong Nginx root folder
❌ Angular build inside /browser folder
❌ Missing permissions → 403
❌ Wrong proxy_pass → 500
❌ Not separating frontend vs backend debugging

✔ Always debug in this order:
1. Frontend (/)
2. Backend (curl localhost)
3. Nginx logs
*/


// -----------------------------------------------------------------------------
// 🧠 FINAL ARCHITECTURE
// -----------------------------------------------------------------------------

/*
Browser
   ↓
Nginx (Port 80)
   ↓
Frontend (Angular/React static files)
   ↓
/api → Node backend (PM2)

✔ Clean
✔ Scalable starter setup
✔ No CORS issues
*/

// =============================================================================
// 🚀 DEPLOY REACT APP ON EXISTING EC2 (NGINX + SAME SERVER)
// =============================================================================


// -----------------------------------------------------------------------------
// ! PHASE 1 — UNDERSTAND YOUR CURRENT SETUP
// -----------------------------------------------------------------------------

/*
 * You already have:
 *
 * ✔ Nginx running
 * ✔ Angular app working
 * ✔ Backend running on port 8080
 *
 *
 * 🎯 Goal:
 *
 * Add React app WITHOUT breaking Angular app
 */


// -----------------------------------------------------------------------------
// ! PHASE 2 — BUILD YOUR REACT APP (LOCAL MACHINE)
// -----------------------------------------------------------------------------

/*
 * Go to your React project:
 *
 * cd your-react-app
 *
 * Install dependencies:
 * npm install
 *
 * Build:
 * npm run build
 *
 *
 * ✔ Output:
 *
 * dist/ (Vite)
 * OR
 * build/ (Create React App)
 *
 *
 * ❌ Do NOT upload source code
 * ❌ Only upload build output
 */


// -----------------------------------------------------------------------------
// ! PHASE 3 — UPLOAD REACT BUILD TO EC2
// -----------------------------------------------------------------------------

/*
 * From your LOCAL machine:
 *
 * (For Vite)
 * scp -i ~/Downloads/key.pem -r dist/* ec2-user@YOUR-IP:/home/ec2-user/react-app
 *
 * (For CRA)
 * scp -i ~/Downloads/key.pem -r build/* ec2-user@YOUR-IP:/home/ec2-user/react-app
 *
 *
 * ✔ This copies static files to EC2
 *
 * ❌ Avoid:
 * - Wrong key path
 * - Using sudo with scp
 */


// -----------------------------------------------------------------------------
// ! PHASE 4 — MOVE FILES TO NGINX DIRECTORY
// -----------------------------------------------------------------------------

/*
 * On EC2:
 *
 * sudo mkdir -p /var/www/react
 * sudo cp -r ~/react-app/* /var/www/react
 *
 *
 * ✔ Verify:
 * ls /var/www/react
 *
 * You MUST see:
 * index.html
 *
 *
 * ❌ If index.html missing → React won’t load
 */


// -----------------------------------------------------------------------------
// ! PHASE 5 — FIX PERMISSIONS (IMPORTANT)
// -----------------------------------------------------------------------------

/*
 * sudo chown -R nginx:nginx /var/www/react
 * sudo chmod -R 755 /var/www/react
 *
 * sudo chmod o+x /var
 * sudo chmod o+x /var/www
 *
 *
 * ❌ Missing this → 403 Forbidden
 */


// -----------------------------------------------------------------------------
// ! PHASE 6 — CONFIGURE NGINX (MULTIPLE APPS)
// -----------------------------------------------------------------------------

/*
 * You now have TWO frontend apps:
 *
 * Angular → /
 * React → /react
 *
 *
 * Edit config:
 *
 * sudo nano /etc/nginx/conf.d/app.conf
 */


// -----------------------------------------------------------------------------
// 🔥 UPDATED CONFIG
// -----------------------------------------------------------------------------

/*
server {
    listen 80;
    server_name _;

    # 🔥 ANGULAR (MAIN APP)
    root /var/www/frontend;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 🔥 REACT APP
    location /react/ {
        root /var/www;
        try_files $uri $uri/ /react/index.html;
    }

    # 🔥 BACKEND API
    location /api/ {
        proxy_pass http://localhost:8080/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
*/


// -----------------------------------------------------------------------------
// ! PHASE 7 — RESTART NGINX
// -----------------------------------------------------------------------------

/*
 * sudo systemctl restart nginx
 */


// -----------------------------------------------------------------------------
// ! PHASE 8 — ACCESS YOUR APPS
// -----------------------------------------------------------------------------

/*
 * Angular:
 * http://YOUR-IP
 *
 * React:
 * http://YOUR-IP/react
 *
 * Backend:
 * http://YOUR-IP/api/blog
 */


// -----------------------------------------------------------------------------
// ! PHASE 9 — DEBUGGING (IF SOMETHING BREAKS)
// -----------------------------------------------------------------------------

/*
 * If React shows blank page:
 *
 * ✔ Check:
 * ls /var/www/react
 *
 *
 * If 403:
 * ✔ Fix permissions
 *
 *
 * If 404 on refresh:
 * ✔ Missing try_files rule
 *
 *
 * Logs:
 * sudo tail -f /var/log/nginx/error.log
 */


// -----------------------------------------------------------------------------
// ! PHASE 10 — UPDATE DEPLOYMENT
// -----------------------------------------------------------------------------

/*
 * Local:
 * npm run build
 *
 * Upload again:
 * scp dist/* → EC2
 *
 * EC2:
 * sudo cp → /var/www/react
 * sudo systemctl restart nginx
 */