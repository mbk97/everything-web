// =============================================================================  
// 🧠 GIT BASH FOR ENGINEERS (BEGINNER → EXPERT LEVEL)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! WHAT GIT BASH IS  
// -----------------------------------------------------------------------------
/*
 * Git Bash is a command-line interface (CLI) for using Git on Windows.
 *
 * It provides a Unix/Linux-like terminal environment.
 *
 * It allows you to:
 * - Run Git commands
 * - Navigate files using terminal
 * - Execute scripts and automation
 *
 * Think of Git Bash as:
 * - Your developer control panel
 * - A powerful alternative to GUI tools
 */


// -----------------------------------------------------------------------------  
// ? WHY GIT BASH MATTERS  
// -----------------------------------------------------------------------------
/*
 * Without Git Bash:
 * - You rely on GUI tools (limited control)
 * - Debugging becomes harder
 *
 * With Git Bash:
 * - Full Git power
 * - Faster workflows
 * - Better debugging
 *
 * Senior engineers prefer CLI over GUI.
 */


// -----------------------------------------------------------------------------  
// * TERMINAL BASICS (VERY IMPORTANT)  
// -----------------------------------------------------------------------------
/*
 * pwd              → show current directory
 * ls               → list files
 * cd folder-name   → enter folder
 * cd ..            → go back
 * mkdir project    → create folder
 * rm file.txt      → delete file
 * clear            → clear terminal
 *
 * 🧠 If you don’t understand terminal navigation,
 * Git will feel confusing.
 */


// -----------------------------------------------------------------------------  
// * GIT MENTAL MODEL (CRITICAL)  
// -----------------------------------------------------------------------------
/*
 * Git has 3 main areas:
 *
 * 1. Working Directory → your files
 * 2. Staging Area     → prepare changes
 * 3. Repository       → saved history
 *
 * FLOW:
 * edit → add → commit
 *
 * Master this = Git becomes easy
 */


// -----------------------------------------------------------------------------  
// ! INITIAL SETUP  
// -----------------------------------------------------------------------------
/*
git --version

git config --global user.name "Your Name"
git config --global user.email "your@email.com"

git config --list   # verify config
*/


// -----------------------------------------------------------------------------  
// ! STARTING A PROJECT  
// -----------------------------------------------------------------------------
/*
git init              # create new repository

git clone <url>       # copy existing repository
*/


// -----------------------------------------------------------------------------  
// ? TRACKING CHANGES  
// -----------------------------------------------------------------------------
/*
git status            # check current state

git add file.js       # stage one file
git add .             # stage all files

git commit -m "message"   # save snapshot
*/

/*
 * 🧠 RULE:
 * Commit = meaningful checkpoint
 *
 * BAD:
 * "update"
 *
 * GOOD:
 * "fix login validation bug"
 */


// -----------------------------------------------------------------------------  
// ! VIEWING HISTORY  
// -----------------------------------------------------------------------------
/*
git log               # full history

git log --oneline     # short history

git diff              # unstaged changes

git diff --staged     # staged changes
*/


// -----------------------------------------------------------------------------  
// 🌿 BRANCHING (CORE SKILL)  
// -----------------------------------------------------------------------------
/*
git branch                # list branches

git branch feature-login  # create branch

git checkout feature-login   # switch branch

git checkout -b feature-ui   # create + switch
*/

/*
 * WHY BRANCHES:
 * - Work safely
 * - Avoid breaking main code
 * - Enable teamwork
 *
 * main → production
 * feature/* → development
 */


// -----------------------------------------------------------------------------  
// 🔀 MERGING  
// -----------------------------------------------------------------------------
/*
git checkout main

git merge feature-login
*/

/*
 * Combines feature branch into main
 */


// -----------------------------------------------------------------------------  
// ⚠️ MERGE CONFLICT  
// -----------------------------------------------------------------------------
/*
<<<<<<< HEAD
console.log("main")
=======
console.log("feature")
>>>>>>> feature-login
*/

/*
 * Fix conflict manually
 */

/*
git add .
git commit -m "resolve conflict"
*/


// -----------------------------------------------------------------------------  
// 🌍 REMOTE REPOSITORIES  
// -----------------------------------------------------------------------------
/*
git remote -v

git remote add origin <url>

git push -u origin main

git pull origin main
*/

/*
 * push → send code
 * pull → get latest updates
 */


// -----------------------------------------------------------------------------  
// 🔄 DAILY WORKFLOW  
// -----------------------------------------------------------------------------
/*
git pull origin main

git checkout -b feature-payment

# write code

git add .
git commit -m "add payment integration"

git push origin feature-payment
*/

/*
 * Then:
 * → Create Pull Request (PR)
 * → Review
 * → Merge
 */


// -----------------------------------------------------------------------------  
// 🧼 UNDO & FIX  
// -----------------------------------------------------------------------------
/*
git restore file.js        # undo changes

git reset HEAD file.js     # unstage file

git reset --soft HEAD~1    # undo commit (keep changes)

git reset --hard HEAD~1    # delete commit completely
*/

/*
 * ⚠️ hard reset = dangerous
 */


// -----------------------------------------------------------------------------  
// 🧳 STASH  
// -----------------------------------------------------------------------------
/*
git stash            # save work

git stash pop        # restore work
*/

/*
 * Useful when switching branches quickly
 */


// -----------------------------------------------------------------------------  
// 🏷️ TAGGING  
// -----------------------------------------------------------------------------
/*
git tag v1.0

git push origin v1.0
*/

/*
 * Used for releases and versioning
 */


// -----------------------------------------------------------------------------  
// 🔐 SSH SETUP  
// -----------------------------------------------------------------------------
/*
ssh-keygen -t ed25519

# add key to GitHub
*/

/*
 * Avoid entering password every time
 */


// -----------------------------------------------------------------------------  
// 🚫 .GITIGNORE  
// -----------------------------------------------------------------------------
/*
node_modules/
.env
dist/
build/
*/

/*
 * Prevents:
 * - secrets exposure
 * - unnecessary files
 */


// -----------------------------------------------------------------------------  
// 🧠 ADVANCED (EXPERT LEVEL)  
// -----------------------------------------------------------------------------
/*
git rebase main
*/

/*
 * Rebase:
 * - rewrites history
 * - keeps it clean
 *
 * merge  → messy history
 * rebase → clean history
 */


/*
git blame file.js
*/

/*
 * Shows who wrote each line
 */


/*
git bisect
*/

/*
 * Finds the commit that broke your app
 */


// -----------------------------------------------------------------------------  
// 🚨 COMMON MISTAKES  
// -----------------------------------------------------------------------------
/*
 * ❌ committing .env
 * ❌ working directly on main
 * ❌ vague commit messages
 * ❌ force push carelessly
 * ❌ not pulling before pushing
 */


// -----------------------------------------------------------------------------  
// 🧠 SENIOR-LEVEL MINDSET  
// -----------------------------------------------------------------------------
/*
 * Git is not about commands.
 *
 * It's about:
 * - History control
 * - Collaboration
 * - Traceability
 * - Safety
 *
 * When production breaks:
 * Git helps you:
 * - identify the issue
 * - find who changed it
 * - roll back safely
 */


// -----------------------------------------------------------------------------  
// 🚀 FINAL SUMMARY  
// -----------------------------------------------------------------------------
/*
 * Master these:
 *
 * ✔ add / commit / push
 * ✔ branching
 * ✔ merging
 * ✔ conflict resolution
 * ✔ undo/reset
 * ✔ reading history
 *
 * Expert level:
 * ✔ rebase
 * ✔ bisect
 * ✔ clean commit history
 * ✔ team workflows (PRs)
 */



// Technically, Git Bash does not exist for macOS because it is a specific tool designed to provide a Linux-like Bash environment for Windows users. Since macOS is built on Unix, it already has a powerful native terminal (Zsh or Bash) that can run Git commands directly. To get the equivalent functionality on your Mac, you simply need to install Git and use your native Terminal

// Unix is a proprietary, monolithic operating system (OS) developed in the 1960s for high-end, specialized servers. Linux is a free, open-source, unix-like OS created in 1991, designed for portability across all hardware types (PCs, servers, smartphones). While both share similar command-line structures, Unix is paid with strict hardware limits, whereas Linux is widely customizable and dominant in cloud computing


// * A bash script is just a file that contains a series of commands written for the Bash shell to execute automatically.


//? 🧠 REAL DEVOPS USE CASES WITH BASH SCRIPTS


/*

! 🚀 1. Auto Deploy Your App (Frontend / Backend)

Problem
You manually:
build
commit
push
SSH into server
restart app

That’s slow and error-prone.


? solution

#!/bin/bash

echo "🚀 Starting deployment..."

# build project
npm run build

# commit changes
git add .
git commit -m "auto deploy"
git push origin main

# connect to server and deploy
ssh user@your-server << 'ENDSSH'
cd /var/www/app
git pull origin main
npm install
pm2 restart all
ENDSSH

echo "✅ Deployment complete!"



* CORRECT BASH SCRIPT (FOR IIS FRONTEND DEPLOY)

#!/bin/bash
echo "🚀 Starting IIS frontend deployment..."

# 1. Build project
npm run build

# 2. Commit & push (optional but good practice)
git add .
git commit -m "deploy frontend"
git push origin main

# 3. Define paths
BUILD_DIR="./build"   # React → build
# BUILD_DIR="./out"   # Next.js static export

SERVER="user@your-server"
IIS_PATH="C:/inetpub/wwwroot/your-app"

# 4. Copy files to IIS server
echo "📦 Uploading files to IIS..."

scp -r $BUILD_DIR/* $SERVER:/c/inetpub/wwwroot/your-app/

# 5. Optional: Restart IIS (if needed)
ssh $SERVER << 'ENDSSH'
iisreset
ENDSSH

echo "✅ Deployment to IIS complete!"



// -----------------------------------------------------------------------------  
// ! WHAT IS SCP  
// -----------------------------------------------------------------------------
/*
 * SCP = Secure Copy
 *
 * It is used to:
 * - transfer files between machines
 * - over SSH (secure connection)
 *
 * Think:
 * SCP = "copy files to/from a remote server"
 */


// -----------------------------------------------------------------------------  
// ? YOUR COMMAND EXPLAINED  
// -----------------------------------------------------------------------------
/*
scp -r ./build/* user@$SERVER:/c/inetpub/wwwroot/your-app/
*/


// -----------------------------------------------------------------------------  
// ! BREAKDOWN (VERY IMPORTANT)  
// -----------------------------------------------------------------------------
/*
 * scp        → secure copy command
 *
 * -r         → recursive (copy folders + files inside)
 *
 * ./build/*  → source (your local files)
 *              "everything inside build folder"
 *
 * user@$SERVER → remote server login
 *
 * /c/inetpub/wwwroot/your-app/ → destination folder (on server)
 */


// -----------------------------------------------------------------------------  
// 🧠 WHAT THIS COMMAND DOES  
// -----------------------------------------------------------------------------
/*
 * 1. Takes your local build files
 * 2. Connects to remote server via SSH
 * 3. Copies files into IIS folder
 *
 * RESULT:
 * Your frontend is deployed to the server
 */


// -----------------------------------------------------------------------------  
// ! REAL DEVOPS USE CASE  
// -----------------------------------------------------------------------------
/*
 * After building a React app:
 *
npm run build
 *
 * Then deploy:
 *
scp -r build/* user@server:/var/www/app
 *
 * → your app is now live on the server
 */


// -----------------------------------------------------------------------------  
// 🔁 COPY DIRECTIONS  
// -----------------------------------------------------------------------------
/*
 * LOCAL → SERVER:
 *
scp file.txt user@server:/path
 *
 *
 * SERVER → LOCAL:
 *
scp user@server:/file.txt .
 */


// -----------------------------------------------------------------------------  
// ⚠️ IMPORTANT NOTES  
// -----------------------------------------------------------------------------
/*
 * ✔ Requires SSH access
 * ✔ Server must allow connection
 * ✔ Path must exist on server
 *
 * Windows IIS path:
 *
 * C:\inetpub\wwwroot\app
 * becomes:
 *
 * /c/inetpub/wwwroot/app
 */


// -----------------------------------------------------------------------------  
// 🚨 COMMON MISTAKES  
// -----------------------------------------------------------------------------
/*
 * ❌ forgetting -r for folders
 * ❌ wrong server IP or username
 * ❌ wrong path (/c/ vs C:\)
 * ❌ permission denied (SSH issue)
 */


// -----------------------------------------------------------------------------  
// 🧠 SENIOR-LEVEL INSIGHT  
// -----------------------------------------------------------------------------
/*
 * SCP is one of the simplest deployment tools
 *
 * But in large systems, it evolves into:
 * - rsync (more efficient)
 * - CI/CD pipelines
 *
 * Still, SCP is widely used for:
 * ✔ quick deployments
 * ✔ manual fixes
 * ✔ debugging production
 */


// -----------------------------------------------------------------------------  
// 🚀 FINAL SUMMARY  
// -----------------------------------------------------------------------------
/*
 * SCP = copy files securely over SSH
 *
 * Your command:
 *
 * scp -r ./build/* user@$SERVER:/c/inetpub/wwwroot/your-app/
 *
 * Means:
 *
 * "Copy my build files to the IIS server"
 


!🔄 2. Auto Backup Your Database

#!/bin/bash

DATE=$(date +%F)
BACKUP_FILE="backup_$DATE.sql"

echo "📦 Creating backup..."

mysqldump -u root -p your_db > $BACKUP_FILE

echo "☁️ Uploading backup..."

scp $BACKUP_FILE user@server:/backups/

echo "✅ Backup complete"



!🧹 3. Clean Project Before Build

#!/bin/bash

echo "🧹 Cleaning project..."

rm -rf node_modules
rm -rf .next
rm -rf dist

npm install

echo "✅ Clean install done"


!🔍 4. Health Check Script (Production Monitoring)

* You don’t know when your app is down

#!/bin/bash

URL="https://yourapp.com"

STATUS=$(curl -o /dev/null -s -w "%{http_code}" $URL)

if [ $STATUS -eq 200 ]; then
  echo "✅ App is running"
else
  echo "❌ App is down! Status: $STATUS"




! 🧠 What This Means (REAL DEVOPS THINKING)

Bash scripts help you:

Automate repetitive tasks
Reduce human error
Standardize workflows
Save time
Prepare for CI/CD (like GitHub Actions)


!⚡ Where This Fits in DevOps Stack

Bash is used with tools like:

Docker
Jenkins
GitHub Actions
Kubernetes



! 🚀 Senior Insight
At your level (React + Node + Flutter):

👉 Start with:

deploy scripts
git automation
project setup scripts

Then move to:

CI/CD pipelines
Docker
cloud deployments

*/



// =============================================================================  
// 🧠 DEVOPS WITH BASH SCRIPTS (IIS FRONTEND DEPLOYMENT)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! HOW IIS FRONTEND DEPLOYMENT WORKS  
// -----------------------------------------------------------------------------
/*
 * IIS does NOT run Node apps like PM2.
 *
 * Instead:
 * - You build your frontend
 * - You upload static files
 * - IIS serves them
 *
 * FLOW:
 *
 * npm run build → generate /build or /out
 * → copy to IIS folder (C:\inetpub\wwwroot\app)
 * → IIS serves files
 */


// -----------------------------------------------------------------------------  
// ! BASIC IIS DEPLOY SCRIPT (FRONTEND)  
// -----------------------------------------------------------------------------
/*
#!/bin/bash

echo "🚀 Starting IIS frontend deployment..."

# 1. Build project
npm run build

# 2. Push code (optional)
git add .
git commit -m "deploy frontend"
git push origin main

# 3. Variables
BUILD_DIR="./build"        # React
# BUILD_DIR="./out"        # Next.js export

SERVER="user@your-server"
IIS_PATH="/c/inetpub/wwwroot/your-app"

# 4. Upload build files
scp -r $BUILD_DIR/* $SERVER:$IIS_PATH

# 5. Restart IIS (optional)
ssh $SERVER << 'ENDSSH'
iisreset
ENDSSH

echo "✅ Deployment complete!"
*/


// -----------------------------------------------------------------------------  
// ⚠️ IMPORTANT DIFFERENCE FROM LINUX DEPLOYMENT  
// -----------------------------------------------------------------------------
/*
 * REMOVE THESE (not needed for IIS):
 *
 * ❌ npm install
 * ❌ pm2 restart
 *
 * WHY:
 * IIS only serves static files
 */


/*
 * WINDOWS PATH CONVERSION:
 *
 * C:\inetpub\wwwroot\app
 * becomes:
 * /c/inetpub/wwwroot/app
 */


// -----------------------------------------------------------------------------  
// ! NEXT.JS SPECIAL CASE  
// -----------------------------------------------------------------------------
/*
 * Next.js must be exported as static files:
 *
npm run build
npm run export
 *
 * Then deploy:
 * ./out/
 */


// -----------------------------------------------------------------------------  
// 🧼 CLEAN DEPLOY (BEST PRACTICE)  
// -----------------------------------------------------------------------------
/*
#!/bin/bash

echo "🧹 Cleaning old files..."

ssh user@your-server << 'ENDSSH'
rm -rf /c/inetpub/wwwroot/your-app/*
ENDSSH

echo "📦 Uploading new build..."

scp -r ./build/* user@your-server:/c/inetpub/wwwroot/your-app/

echo "✅ Clean deployment done!"
*/


// -----------------------------------------------------------------------------  
// 📦 BACKUP BEFORE DEPLOY (PRO LEVEL)  
// -----------------------------------------------------------------------------
/*
#!/bin/bash

echo "📦 Backing up current version..."

ssh user@your-server << 'ENDSSH'
cp -r /c/inetpub/wwwroot/your-app /c/inetpub/wwwroot/backup
ENDSSH

echo "🚀 Deploying new version..."

scp -r ./build/* user@your-server:/c/inetpub/wwwroot/your-app/

echo "✅ Backup + deploy complete!"
*/


// -----------------------------------------------------------------------------  
// 🏷️ VERSIONED DEPLOYMENT  
// -----------------------------------------------------------------------------
/*
#!/bin/bash

DATE=$(date +%F-%H-%M)

echo "🚀 Deploying version $DATE..."

npm run build

scp -r ./build/* user@your-server:/c/inetpub/wwwroot/your-app/

echo "✅ Version $DATE deployed"
*/


// -----------------------------------------------------------------------------  
// 🌍 ENVIRONMENT SWITCH (STAGING / PROD)  
// -----------------------------------------------------------------------------
/*
#!/bin/bash

if [ "$1" == "prod" ]; then
  SERVER="prod-server"
else
  SERVER="staging-server"
fi

echo "🚀 Deploying to $SERVER..."

npm run build

scp -r ./build/* user@$SERVER:/c/inetpub/wwwroot/your-app/

echo "✅ Deployment complete!"
*/


// -----------------------------------------------------------------------------  
// 🔍 HEALTH CHECK SCRIPT  
// -----------------------------------------------------------------------------
/*
#!/bin/bash

URL="https://yourapp.com"

STATUS=$(curl -o /dev/null -s -w "%{http_code}" $URL)

if [ $STATUS -eq 200 ]; then
  echo "✅ App is running"
else
  echo "❌ App is down! Status: $STATUS"
fi
*/


// -----------------------------------------------------------------------------  
// 🧠 COMMON IIS DEPLOYMENT MISTAKES  
// -----------------------------------------------------------------------------
/*
 * ❌ Forgetting React Router basename
 * ❌ No web.config for SPA routing
 * ❌ Uploading node_modules
 * ❌ Not clearing old files
 * ❌ Wrong file paths (/c/ vs C:\)
 */


// -----------------------------------------------------------------------------  
// 🧠 SENIOR-LEVEL MINDSET  
// -----------------------------------------------------------------------------
/*
 * IIS deployment is NOT backend deployment.
 *
 * You are:
 * ✔ serving static files
 * ✔ not running Node server
 *
 * Think:
 * "build → copy → serve"
 *
 * Not:
 * "build → run server"
 */


// -----------------------------------------------------------------------------  
// 🚀 FINAL SUMMARY  
// -----------------------------------------------------------------------------
/*
 * Master these:
 *
 * ✔ build frontend properly
 * ✔ understand IIS folder structure
 * ✔ use scp for deployment
 * ✔ clean old files before deploy
 * ✔ handle Next.js export if needed
 *
 * Pro level:
 *
 * ✔ backup before deploy
 * ✔ environment-based deployment
 * ✔ versioned releases
 * ✔ health monitoring
 */




// =============================================================================  
// ? 🧠 IIS FRONTEND DEPLOYMENT USING BASH SCRIPT (STEP-BY-STEP)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! WHAT THIS SETUP DOES  
// -----------------------------------------------------------------------------
/*
 * This setup allows you to:
 *
 * 1. Build your frontend locally
 * 2. Connect to your IIS server via SSH
 * 3. Upload build files automatically
 * 4. Restart IIS
 *
 * RESULT:
 * One command → full deployment 🚀
 */


// -----------------------------------------------------------------------------  
// ! STEP 1 — CREATE DEPLOY SCRIPT  
// -----------------------------------------------------------------------------
/*
 * In your project root (same level as package.json):
 *
 * Create file:
 *
 * deploy.sh
 */


/*
#!/bin/bash

echo "🚀 Starting IIS frontend deployment..."

# Build project
npm run build

# Push code (optional)
git add .
git commit -m "deploy frontend"
git push origin main

# Variables
BUILD_DIR="./build"        # React
# BUILD_DIR="./out"        # Next.js export

SERVER="your-username@your-server-ip"
IIS_PATH="/c/inetpub/wwwroot/your-app"

# Upload files
scp -r $BUILD_DIR/* $SERVER:$IIS_PATH

# Restart IIS
ssh $SERVER << 'ENDSSH'
iisreset
ENDSSH

echo "✅ Deployment complete!"
*/


// -----------------------------------------------------------------------------  
// ! STEP 2 — MAKE SCRIPT EXECUTABLE  
// -----------------------------------------------------------------------------
/*
chmod +x deploy.sh
*/

// -----------------------------------------------------------------------------  
// ! WHAT THIS DOES → chmod +x deploy.sh  
// -----------------------------------------------------------------------------
/*
 * chmod = change mode (permissions)
 *
 * +x = add execute permission
 *
 * deploy.sh = your script file
 *
 * FULL MEANING:
 * → "Make this file executable"
 */


// -----------------------------------------------------------------------------  
// ? WHY YOU NEED IT  
// -----------------------------------------------------------------------------
/*
 * By default, files are NOT executable.
 *
 * So this will FAIL:
 *
 * ./deploy.sh
 *
 * Because the system says:
 * "you don't have permission to run this file"
 *
 * After running:
 *
 * chmod +x deploy.sh
 *
 * Now this works:
 *
 * ./deploy.sh
 */


// -----------------------------------------------------------------------------  
// * BEFORE VS AFTER  
// -----------------------------------------------------------------------------
/*
 * BEFORE:
 *
 * -rw-r--r--  deploy.sh
 *
 * (no execute permission)
 *
 *
 * AFTER:
 *
 * -rwxr-xr-x  deploy.sh
 *
 * (now executable)
 */


// -----------------------------------------------------------------------------  
// ! WHAT THE PERMISSIONS MEAN  
// -----------------------------------------------------------------------------
/*
 * rwx r-x r-x
 *
 * owner  → can read, write, execute
 * group  → can read, execute
 * others → can read, execute
 *
 * x = execute permission
 */


// -----------------------------------------------------------------------------  
// ? HOW TO CHECK PERMISSIONS  
// -----------------------------------------------------------------------------
/*
ls -l deploy.sh
*/


// -----------------------------------------------------------------------------  
// ! DO YOU ALWAYS NEED IT?  
// -----------------------------------------------------------------------------
/*
 * NO — depends how you run the script
 *
 * If you run:
 *
 * bash deploy.sh
 *
 * ❌ You DON'T need chmod
 *
 *
 * If you run:
 *
 * ./deploy.sh
 *
 * ✅ You MUST run chmod +x first
 */


// -----------------------------------------------------------------------------  
// 🧠 REAL DEV USAGE  
// -----------------------------------------------------------------------------
/*
 * Developers use chmod +x when:
 *
 * ✔ creating reusable scripts
 * ✔ running scripts like commands
 * ✔ deploying scripts in servers
 * ✔ using CI/CD pipelines
 */


// -----------------------------------------------------------------------------  
// ⚠️ COMMON MISTAKE  
// -----------------------------------------------------------------------------
/*
 * Running:
 *
 * ./deploy.sh
 *
 * without:
 *
 * chmod +x deploy.sh
 *
 * → results in "Permission denied"
 */


// -----------------------------------------------------------------------------  
// 🧠 SENIOR-LEVEL INSIGHT  
// -----------------------------------------------------------------------------
/*
 * chmod +x turns your script into a "real tool"
 *
 * Instead of:
 *
 * bash deploy.sh
 *
 * You can run:
 *
 * ./deploy.sh
 *
 * Cleaner. Faster. Standard in production.
 */


// -----------------------------------------------------------------------------  
// 🚀 SUMMARY  
// -----------------------------------------------------------------------------
/*
 * chmod +x deploy.sh
 *
 * = give execute permission
 * = allow script to run like a command
 *
 * Needed for:
 * ✔ ./deploy.sh
 *
 * Not needed for:
 * ✔ bash deploy.sh
 */


/*
 * Run script:
 *
./deploy.sh
*/


// -----------------------------------------------------------------------------  
// ! STEP 3 — PREPARE IIS SERVER  
// -----------------------------------------------------------------------------
/*
 * On your Windows Server:
 *
 * Go to:
 * C:\inetpub\wwwroot\
 *
 * Create folder:
 * your-app
 *
 * FINAL PATH:
 * C:\inetpub\wwwroot\your-app
 */


// -----------------------------------------------------------------------------  
// ! STEP 4 — ENABLE SSH ON IIS SERVER  
// -----------------------------------------------------------------------------
/*
 * Run PowerShell as Administrator:
 *
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0

Start-Service sshd
Set-Service -Name sshd -StartupType 'Automatic'
*/


// -----------------------------------------------------------------------------  
// ! STEP 5 — GENERATE SSH KEY (LOCAL MACHINE)  
// -----------------------------------------------------------------------------
/*
ssh-keygen -t ed25519
*/


// -----------------------------------------------------------------------------  
// ! STEP 6 — ADD SSH KEY TO SERVER  
// -----------------------------------------------------------------------------
/*
 * Copy public key:
 *
cat ~/.ssh/id_ed25519.pub
 *
 * Paste into:
 *
C:\Users\YourUser\.ssh\authorized_keys
*/


// -----------------------------------------------------------------------------  
// ! STEP 7 — TEST SSH CONNECTION  
// -----------------------------------------------------------------------------
/*
ssh your-username@your-server-ip
*/


/*
 * If login works without password → SUCCESS ✅
 */


// -----------------------------------------------------------------------------  
// ! STEP 8 — TEST FILE TRANSFER  
// -----------------------------------------------------------------------------
/*
scp -r build/* your-username@your-server-ip:/c/inetpub/wwwroot/your-app/
*/


/*
 * Verify files exist in:
 * C:\inetpub\wwwroot\your-app
 */


// -----------------------------------------------------------------------------  
// ! STEP 9 — RUN FULL DEPLOYMENT  
// -----------------------------------------------------------------------------
/*
./deploy.sh
*/


// -----------------------------------------------------------------------------  
// ! STEP 10 — VERIFY DEPLOYMENT  
// -----------------------------------------------------------------------------
/*
 * Open browser:
 *
http://your-server-ip/
 *
 * OR
 *
http://your-domain.com/
 */


// -----------------------------------------------------------------------------  
// ⚠️ REACT ROUTING FIX (VERY IMPORTANT)  
// -----------------------------------------------------------------------------
/*
 * If routes like /login or /dashboard fail:
 *
 * Create web.config in IIS folder:
 */


/*
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="React Router" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
*/


// -----------------------------------------------------------------------------  
// ⚠️ IMPORTANT RULES  
// -----------------------------------------------------------------------------
/*
 * ✔ IIS serves static files only
 * ✔ Do NOT use pm2 or node server
 * ✔ Do NOT upload node_modules
 * ✔ Always deploy build/ or out/
 *
 * PATH FORMAT:
 *
 * Windows → C:\inetpub\wwwroot\app
 * Git Bash → /c/inetpub/wwwroot/app
 */


// -----------------------------------------------------------------------------  
// 🚨 COMMON ERRORS  
// -----------------------------------------------------------------------------
/*
 * ❌ Permission denied → SSH key not added correctly
 * ❌ scp fails → wrong path format
 * ❌ blank page → build not correct
 * ❌ 404 on refresh → missing web.config
 */


// -----------------------------------------------------------------------------  
// 🧠 SENIOR-LEVEL UNDERSTANDING  
// -----------------------------------------------------------------------------
/*
 * This is NOT backend deployment.
 *
 * You are:
 * ✔ building frontend
 * ✔ copying static files
 * ✔ letting IIS serve them
 *
 * Think:
 * build → transfer → serve
 *
 * NOT:
 * build → run server
 */


// -----------------------------------------------------------------------------  
// 🚀 NEXT LEVEL  
// -----------------------------------------------------------------------------
/*
 * After this works:
 *
 * ✔ Move to CI/CD (GitHub Actions / Azure Pipelines)
 * ✔ Add backup before deploy
 * ✔ Add environment configs
 * ✔ Add zero-downtime deployment
 */



// ! #!/bin/bash : shebang It tells the system: “Run this script using Bash”



// =============================================================================  
// 🧠 BASH SCRIPTING FOR DEVOPS ENGINEERS (CORE → ADVANCED)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! WHAT BASH IS  
// -----------------------------------------------------------------------------
/*
 * Bash is a command-line shell used to interact with the system.
 *
 * It allows:
 * - Running commands
 * - Automating tasks
 * - Managing servers
 *
 * Bash is heavily used in DevOps, Linux servers, and CI/CD pipelines.
 */


// -----------------------------------------------------------------------------  
// ? WHY BASH MATTERS IN DEVOPS  
// -----------------------------------------------------------------------------
/*
 * Without Bash:
 * - Tasks are manual
 * - Deployments are slow
 * - Debugging is harder
 *
 * With Bash:
 * - Automate everything
 * - Deploy faster
 * - Monitor systems
 *
 * Bash = automation backbone
 */


// -----------------------------------------------------------------------------  
// * TERMINAL BASICS (MUST KNOW)  
// -----------------------------------------------------------------------------
/*
pwd              # show current directory

ls               # list files
ls -la           # list all (including hidden)

cd folder        # enter folder
cd ..            # go back

mkdir app        # create folder
rm file.txt      # delete file
rm -rf folder    # delete folder (danger ⚠️)

cp file1 file2   # copy file
mv file1 file2   # move/rename
*/


// -----------------------------------------------------------------------------  
// ! FILE CONTENT & LOGS  
// -----------------------------------------------------------------------------
/*
cat file.txt        # print content

less file.txt       # scrollable view

head file.txt       # first lines
tail file.txt       # last lines

tail -f logs.txt    # live logs (VERY IMPORTANT 🔥)
*/


// -----------------------------------------------------------------------------  
// ! SYSTEM INFORMATION (SERVER DEBUGGING)  
// -----------------------------------------------------------------------------
/*
whoami              # current user

hostname            # server name

date                # current date/time

uptime              # how long server is running

df -h               # disk usage

free -h             # memory usage

top                 # running processes
*/


// -----------------------------------------------------------------------------  
// ! PERMISSIONS (CRITICAL)  
// -----------------------------------------------------------------------------
/*
chmod +x script.sh     # make executable

chmod 777 file.txt     # full access (danger ⚠️)

chown user file.txt    # change owner
*/


// -----------------------------------------------------------------------------  
// ! NETWORKING (DEVOPS CORE)  
// -----------------------------------------------------------------------------
/*
ping google.com            # test connection

curl https://api.com       # call API

wget https://file.com      # download file

scp file user@server:/path # send file to server

ssh user@server            # connect to server
*/


// -----------------------------------------------------------------------------  
// ! PROCESS MANAGEMENT  
// -----------------------------------------------------------------------------
/*
ps aux              # list processes

kill PID            # stop process

kill -9 PID         # force stop

pkill node          # kill all node processes
*/


// -----------------------------------------------------------------------------  
// ! ENVIRONMENT VARIABLES  
// -----------------------------------------------------------------------------
/*
export API_KEY=12345

echo $API_KEY
*/


// -----------------------------------------------------------------------------  
// ! BASIC SCRIPT STRUCTURE  
// -----------------------------------------------------------------------------
/*
#!/bin/bash

echo "Starting script..."

name="Mubarak"

echo "Hello $name"
*/


// -----------------------------------------------------------------------------  
// ! CONDITIONS (VERY COMMON)  
// -----------------------------------------------------------------------------
/*
if [ -f file.txt ]; then
  echo "File exists"
else
  echo "File not found"
fi
*/


// -----------------------------------------------------------------------------  
// ! LOOPS (AUTOMATION)  
// -----------------------------------------------------------------------------
/*
for i in 1 2 3
do
  echo "Run $i"
done
*/


// -----------------------------------------------------------------------------  
// ! FUNCTIONS (REUSABLE LOGIC)  
// -----------------------------------------------------------------------------
/*

* A function is just a named block of code that you can run whenever you want instead of rewriting the same logic again and again. Save this logic under a name, and call it anytime.

deploy() {
  echo "Deploying app..."
}

deploy
*/


// -----------------------------------------------------------------------------  
// ! ERROR HANDLING (VERY IMPORTANT)  
// -----------------------------------------------------------------------------
/*
if [ $? -ne 0 ]; then
  echo "Error occurred"
  exit 1
fi
*/


// -----------------------------------------------------------------------------  
// ! INPUT & ARGUMENTS  
// -----------------------------------------------------------------------------
/*
echo "Script name: $0"

echo "First argument: $1"
echo "Second argument: $2"

# Example:
# bash script.sh prod
*/


// -----------------------------------------------------------------------------  
// ! LOGGING  
// -----------------------------------------------------------------------------
/*
echo "Starting deployment..." >> log.txt

echo "Error occurred" >> error.log
*/


// -----------------------------------------------------------------------------  
// ! REAL DEVOPS SCRIPT (DEPLOYMENT)  
// -----------------------------------------------------------------------------
/*
#!/bin/bash

echo "🚀 Starting deployment..."

npm install
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed"
  exit 1
fi

scp -r build/* user@server:/var/www/app

ssh user@server "systemctl restart nginx"

echo "✅ Deployment complete!"
*/


// -----------------------------------------------------------------------------  
// ! DEBUGGING TIPS  
// -----------------------------------------------------------------------------
/*
set -x    # print commands while running

set -e    # exit immediately if error occurs
*/


// -----------------------------------------------------------------------------  
// 🚨 COMMON MISTAKES  
// -----------------------------------------------------------------------------
/*
 * ❌ forgetting echo
 * ❌ wrong file paths
 * ❌ permission denied (missing chmod)
 * ❌ using rm -rf wrongly
 * ❌ not checking errors ($?)
 */


// -----------------------------------------------------------------------------  
// 🧠 SENIOR-LEVEL MINDSET  
// -----------------------------------------------------------------------------
/*
 * Bash is not about commands.
 *
 * It's about:
 * - Automation
 * - Efficiency
 * - Reliability
 *
 * Good engineers:
 * - automate repetitive tasks
 * - log everything
 * - handle errors properly
 */


// -----------------------------------------------------------------------------  
// 🚀 FINAL SUMMARY  
// -----------------------------------------------------------------------------
/*
 * Master these:
 *
 * ✔ navigation (cd, ls, rm)
 * ✔ file handling (cat, tail -f)
 * ✔ ssh & scp
 * ✔ permissions (chmod)
 * ✔ scripting basics (if, loop, functions)
 * ✔ error handling
 *
 * Expert level:
 *
 * ✔ deployment scripts
 * ✔ CI/CD integration
 * ✔ monitoring & logging
 * ✔ automation pipelines
 */


// -----------------------------------------------------------------------------  
// ! WHY `echo` IS IMPORTANT IN BASH  
// -----------------------------------------------------------------------------
/*
 * echo = print output to the terminal
 *
 * It is used to:
 * - display messages
 * - debug scripts
 * - show variable values
 * - log events
 */


// -----------------------------------------------------------------------------  
// ? WITHOUT ECHO (COMMON MISTAKE)  
// -----------------------------------------------------------------------------
/*
 * Example:
 *
 * Hello Devops
 *
 * ❌ Bash tries to RUN "Hello" as a command
 * → command not found error
 */


// -----------------------------------------------------------------------------  
// ? WITH ECHO (CORRECT WAY)  
// -----------------------------------------------------------------------------
/*
 * echo "Hello Devops"
 *
 * ✔ Bash prints the text
 * ✔ No error
 */


// -----------------------------------------------------------------------------  
// ! DEBUGGING WITH ECHO (VERY IMPORTANT)  
// -----------------------------------------------------------------------------
/*
 * echo helps you see what is happening inside your script
 *
 * Example:
 *
echo "Starting deployment..."
npm run build
echo "Build finished"
 *
 * Without echo → you don’t know where it failed
 */


// -----------------------------------------------------------------------------  
// ! PRINTING VARIABLES  
// -----------------------------------------------------------------------------
/*
name="Mubarak"

echo "Hello $name"
 *
 * ✔ shows actual value
 *
 * Without echo → variable is useless
 */


// -----------------------------------------------------------------------------  
// ! LOGGING (REAL DEVOPS USAGE)  
// -----------------------------------------------------------------------------
/*
echo "App started" >> app.log
echo "Error occurred" >> error.log
 *
 * ✔ helps track production issues
 */


// -----------------------------------------------------------------------------  
// ! DEBUGGING ERRORS  
// -----------------------------------------------------------------------------
/*
echo "Step 1"
echo "Step 2"
echo "Step 3"
 *
 * If script stops at Step 2 →
 * you know exactly where the issue is
 */


// -----------------------------------------------------------------------------  
// ! SCRIPT FEEDBACK (USER EXPERIENCE)  
// -----------------------------------------------------------------------------
/*
echo "🚀 Deploying..."
echo "✅ Done"
 *
 * ✔ makes scripts readable and professional
 *
 * Without echo → script feels "silent" and confusing
 */


// -----------------------------------------------------------------------------  
// 🚨 WHY FORGETTING ECHO IS A PROBLEM  
// -----------------------------------------------------------------------------
/*
 * ❌ causes "command not found"
 * ❌ makes debugging hard
 * ❌ hides script progress
 * ❌ makes logs impossible
 */


// -----------------------------------------------------------------------------  
// 🧠 SENIOR-LEVEL INSIGHT  
// -----------------------------------------------------------------------------
/*
 * echo is not just for printing.
 *
 * It is your:
 * - debugger
 * - logger
 * - feedback system
 *
 * Good engineers use echo to:
 * ✔ track execution flow
 * ✔ debug faster
 * ✔ understand failures quickly
 */


// -----------------------------------------------------------------------------  
// 🚀 FINAL SUMMARY  
// -----------------------------------------------------------------------------
/*
 * echo is used to:
 *
 * ✔ print messages
 * ✔ debug scripts
 * ✔ show variables
 * ✔ log events
 *
 * Without echo:
 * ❌ errors increase
 * ❌ debugging becomes hard
 * ❌ scripts become unclear
 */