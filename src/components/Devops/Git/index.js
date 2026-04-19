// =============================================================================  
// 🧠 GIT FOR ENGINEERS (PRO → EXPERT LEVEL)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! WHAT GIT IS  
// -----------------------------------------------------------------------------
/*
 * Git is a distributed version control system.
 *
 * It tracks changes in files over time.
 *
 * It allows:
 * - Version history
 * - Collaboration
 * - Safe experimentation (branches)
 *
 * Think of Git as:
 * - A timeline of your project
 * - A safety net for mistakes
 * - A collaboration engine
 */


// -----------------------------------------------------------------------------  
// ? WHY GIT MATTERS (REAL WORLD)  
// -----------------------------------------------------------------------------
/*
 * Without Git:
 * - You overwrite code
 * - You lose history
 * - Teamwork becomes chaos
 *
 * With Git:
 * - Every change is tracked
 * - You can revert anytime
 * - Teams work in parallel safely
 *
 * Every serious company uses Git platforms like:
 * - GitHub
 * - GitLab
 * - Bitbucket
 */


// -----------------------------------------------------------------------------  
// * GIT MENTAL MODEL (CRITICAL)  
// -----------------------------------------------------------------------------
/*
 * Git has 3 main areas:
 *
 * 1. Working Directory → Your actual files
 * 2. Staging Area     → Where you prepare changes
 * 3. Repository       → Where history is stored
 *
 * FLOW:
 * edit → add → commit
 *
 * If you understand this flow,
 * Git becomes EASY.
 */


// -----------------------------------------------------------------------------  
// ! INITIAL SETUP  
// -----------------------------------------------------------------------------
/*
git --version

git config --global user.name "Your Name"
git config --global user.email "your@email.com"
*/


// -----------------------------------------------------------------------------  
// ! STARTING A PROJECT  
// -----------------------------------------------------------------------------
/*
git init              # create new repo

git clone <url>       # copy existing repo
*/


// -----------------------------------------------------------------------------  
// ? TRACKING CHANGES
// -----------------------------------------------------------------------------
/*
git status            # shows current state

git add file.txt      # stage one file
git add .             # stage everything

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

git log --oneline     # compact view

git diff              # see changes not staged

git diff --staged     # see staged changes
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
 * feature/* → new features
 */


// -----------------------------------------------------------------------------  
// 🔀 MERGING  
// -----------------------------------------------------------------------------
/*
git checkout main

git merge feature-login
*/

/*
 * This combines feature into main
 *
 * If conflict happens:
 * Git will ask you to fix it manually
 */


// -----------------------------------------------------------------------------  
// ⚠️ MERGE CONFLICT (IMPORTANT)  
// -----------------------------------------------------------------------------
/*
<<<<<<< HEAD
console.log("main")
=======
console.log("feature")
>>>>>>> feature-login
*/

/*
 * You must choose or combine them
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
 * push → send code to server
 * pull → get latest updates
 */


// -----------------------------------------------------------------------------  
// 🔄 DAILY WORKFLOW (REAL DEV FLOW)  
// -----------------------------------------------------------------------------
/*
git pull origin main

git checkout -b feature-payment

# code your feature

git add .
git commit -m "add payment integration"

git push origin feature-payment
*/

/*
 * Then:
 * → Create Pull Request (PR)
 * → Team reviews
 * → Merge to main
 */


// -----------------------------------------------------------------------------  
// 🧼 CLEANUP & UNDO (VERY IMPORTANT)  
// -----------------------------------------------------------------------------
/*
git restore file.txt        # undo changes

git reset HEAD file.txt    # unstage file

git reset --soft HEAD~1    # undo commit (keep changes)

git reset --hard HEAD~1    # delete commit completely
*/

/*
 * ⚠️ hard reset = dangerous
 */


// -----------------------------------------------------------------------------  
// 🧳 STASH (UNDERRATED SKILL)  
// -----------------------------------------------------------------------------
/*
git stash            # save work temporarily

git stash pop        # bring it back
*/

/*
 * Useful when:
 * You need to switch branches quickly
 */


// -----------------------------------------------------------------------------  
// 🏷️ TAGGING (RELEASES)  
// -----------------------------------------------------------------------------
/*
git tag v1.0

git push origin v1.0
*/

/*
 * Used for:
 * - Releases
 * - Versioning
 */


// -----------------------------------------------------------------------------  
// 🧠 ADVANCED (WHAT MAKES YOU EXPERT)  
// -----------------------------------------------------------------------------
/*
git rebase main
*/

/*
 * Rebase rewrites history
 * Keeps history clean
 *
 * vs merge:
 * merge  → messy history
 * rebase → linear history
 */


// -----------------------------------------------------------------------------  
// 🔍 DEBUGGING WITH GIT  
// -----------------------------------------------------------------------------
/*
git blame file.js
*/

/*
 * Shows:
 * who wrote each line
 */

/*
git bisect
*/

/*
 * Finds the commit that broke your app
 */


// -----------------------------------------------------------------------------  
// 🚫 .GITIGNORE (CRITICAL IN REAL PROJECTS)  
// -----------------------------------------------------------------------------
/*
node_modules/
.env
dist/
*/

/*
 * Prevents:
 * - secrets leak
 * - unnecessary files
 */


// -----------------------------------------------------------------------------  
// 🔐 SSH SETUP (PRODUCTION LEVEL)  
// -----------------------------------------------------------------------------
/*
ssh-keygen -t ed25519

# add key to GitHub
*/

/*
 * Avoid typing password every time
 */


// -----------------------------------------------------------------------------  
// 🚨 COMMON MISTAKES  
// -----------------------------------------------------------------------------
/*
 * ❌ committing .env
 * ❌ working directly on main
 * ❌ vague commit messages
 * ❌ force push without care
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
 * - Collaboration safety
 * - Code traceability
 * - Reproducibility
 *
 * If production breaks:
 * Git helps you:
 *
 * - Find when it broke
 * - Who changed it
 * - Roll back safely
 */


// -----------------------------------------------------------------------------  
// 🚀 FINAL SUMMARY  
// -----------------------------------------------------------------------------
/*
 * Master these to become VERY strong:
 *
 * ✔ add / commit / push
 * ✔ branching strategy
 * ✔ merge vs rebase
 * ✔ conflict resolution
 * ✔ undo/reset safely
 * ✔ reading history (log, blame)
 *
 * Expert level:
 * ✔ bisect
 * ✔ rebase mastery
 * ✔ clean commit history
 * ✔ team workflows (PRs)
 */