// =============================================================================
// 🐧 LINUX SHELL SCRIPTING, ENVIRONMENT, AND AUTOMATION
// =============================================================================


// -----------------------------------------------------------------------------
// ! WHY THIS MATTERS
// -----------------------------------------------------------------------------
/*
 * DevOps is not just running commands manually.
 *
 * It is:
 * - automating repeated work
 * - making deployments consistent
 * - reducing human error
 * - turning knowledge into scripts
 *
 * Linux becomes much more powerful
 * when you can script it confidently.
 */


// -----------------------------------------------------------------------------
// ! SHEBANG
// -----------------------------------------------------------------------------
/*
 * Example:
 * #!/bin/bash
 *
 * This tells Linux:
 * "Run this script using Bash"
 *
 * Without a correct shebang,
 * your script may run in the wrong shell
 * or fail unexpectedly.
 */


// -----------------------------------------------------------------------------
// ! MAKING A SCRIPT EXECUTABLE
// -----------------------------------------------------------------------------
/*
 * chmod +x deploy.sh
 * ./deploy.sh
 *
 * Without execute permission:
 * Permission denied
 *
 * Important:
 * script file + execute bit + valid shebang
 * usually all need to line up.
 */


// -----------------------------------------------------------------------------
// ! VARIABLES
// -----------------------------------------------------------------------------
/*
 * name="mubarak"
 * echo "$name"
 *
 * Notes:
 * - No spaces around =
 * - Quote variables when possible
 *
 * Example:
 * APP_NAME="news-api"
 * PORT=3000
 */


// -----------------------------------------------------------------------------
// ! POSITIONAL PARAMETERS
// -----------------------------------------------------------------------------
/*
 * $0 → script name
 * $1 → first argument
 * $2 → second argument
 * $# → number of args
 * $@ → all args
 *
 * Example:
 * ./deploy.sh production api
 *
 * Then:
 * $1 = production
 * $2 = api
 */


// -----------------------------------------------------------------------------
// ! EXIT CODES
// -----------------------------------------------------------------------------
/*
 * echo $? → last command exit code
 *
 * Convention:
 * 0 = success
 * non-zero = failure
 *
 * This is very important in:
 * - Bash scripts
 * - CI/CD pipelines
 * - cron jobs
 *
 * Linux automation depends heavily on exit codes.
 */


// -----------------------------------------------------------------------------
// ! SAFER SCRIPT DEFAULTS
// -----------------------------------------------------------------------------
/*
 * Common strong pattern:
 * set -euo pipefail
 *
 * Meaning:
 * -e → exit on command failure
 * -u → fail on undefined variables
 * pipefail → fail pipeline if any command fails
 *
 * This makes scripts safer and less silent.
 */


// -----------------------------------------------------------------------------
// ! CONDITIONS
// -----------------------------------------------------------------------------
/*
 * if [ -f ".env" ]; then
 *   echo "env file exists"
 * fi
 *
 * Common tests:
 * -f file      → file exists
 * -d dir       → directory exists
 * -z "$VAR"    → empty string
 * -n "$VAR"    → non-empty string
 *
 * DevOps use:
 * "If file exists, back it up before deploy"
 */


// -----------------------------------------------------------------------------
// ! LOOPS
// -----------------------------------------------------------------------------
/*
 * for app in api worker scheduler; do
 *   echo "$app"
 * done
 *
 * while read line; do
 *   echo "$line"
 * done < file.txt
 *
 * Great for:
 * - batch file processing
 * - repeated service checks
 * - reading host lists
 */


// -----------------------------------------------------------------------------
// ! FUNCTIONS
// -----------------------------------------------------------------------------
/*
 * log_info() {
 *   echo "[INFO] $1"
 * }
 *
 * restart_app() {
 *   systemctl restart myapp
 * }
 *
 * Functions make scripts cleaner,
 * easier to read,
 * and easier to reuse.
 */


// -----------------------------------------------------------------------------
// ! COMMAND SUBSTITUTION
// -----------------------------------------------------------------------------
/*
 * DATE=$(date +%F)
 * CURRENT_USER=$(whoami)
 * APP_PID=$(pgrep -f "node server.js")
 *
 * This lets you capture command output
 * into variables for later logic.
 */


// -----------------------------------------------------------------------------
// ! READING ENV FILES
// -----------------------------------------------------------------------------
/*
 * source .env
 *
 * But careful:
 * Not every .env file is safe to source directly.
 *
 * Important understanding:
 * .env files are just text files.
 * Linux does not "auto-load" them magically.
 *
 * Your app, service manager, or script
 * decides how env vars get loaded.
 */


// -----------------------------------------------------------------------------
// ! SCRIPT LOGGING
// -----------------------------------------------------------------------------
/*
 * echo "[INFO] Starting deploy"
 * echo "[ERROR] Build failed" >&2
 *
 * Redirecting script output:
 * ./deploy.sh > deploy.log 2>&1
 *
 * Good scripts are observable.
 * You should be able to tell what step failed.
 */


// -----------------------------------------------------------------------------
// ! EXAMPLE DEPLOY FLOW SCRIPT
// -----------------------------------------------------------------------------
/*
 * #!/bin/bash
 * set -euo pipefail
 *
 * cd /var/www/news-api
 * git pull origin main
 * npm install
 * npm run build
 * systemctl restart news-api
 *
 * This is exactly the type of Linux automation
 * that moves you into DevOps thinking.
 */


// -----------------------------------------------------------------------------
// ! EXAMPLE BACKUP SCRIPT
// -----------------------------------------------------------------------------
/*
 * #!/bin/bash
 * set -euo pipefail
 *
 * DATE=$(date +%F)
 * tar -czf "/backups/app-$DATE.tar.gz" /var/www/app
 *
 * Useful for:
 * - app backups
 * - config backups
 * - database export packaging
 */


// -----------------------------------------------------------------------------
// ! EXAMPLE HEALTH-CHECK SCRIPT
// -----------------------------------------------------------------------------
/*
 * #!/bin/bash
 *
 * if curl -fsS http://localhost:3000/health; then
 *   echo "app healthy"
 * else
 *   echo "app unhealthy" >&2
 *   exit 1
 * fi
 *
 * Very common in monitoring and deployment validation.
 */


// -----------------------------------------------------------------------------
// ! CRON DEEPER THAN THE BASICS
// -----------------------------------------------------------------------------
/*
 * crontab -e
 *
 * Example:
 * 0 2 * * * /home/ubuntu/backup.sh
 *
 * Cron fields:
 * minute hour day month weekday
 *
 * Common problems:
 * - wrong PATH
 * - script not executable
 * - output not logged
 * - relative paths fail
 *
 * Cron runs in a smaller environment than your interactive shell.
 */


// -----------------------------------------------------------------------------
// ! SYSTEMD TIMERS (ADVANCED AWARENESS)
// -----------------------------------------------------------------------------
/*
 * systemd timers are a more modern alternative to cron in many environments.
 *
 * Why they matter:
 * - better integration with services
 * - easier logging through journalctl
 * - more predictable service-style behavior
 *
 * Beginner takeaway:
 * Know that cron is not the only scheduler.
 */


// -----------------------------------------------------------------------------
// ! AUTOMATION PHILOSOPHY
// -----------------------------------------------------------------------------
/*
 * Good automation should be:
 * - repeatable
 * - safe
 * - observable
 * - easy to rerun
 * - explicit about failure
 *
 * Great DevOps engineers do not rely on memory.
 * They turn operating steps into scripts.
 */


// -----------------------------------------------------------------------------
// ! SENIOR-LEVEL SUMMARY
// -----------------------------------------------------------------------------
/*
 * Linux scripting is where knowledge becomes leverage.
 *
 * Once you can script:
 * - backup jobs
 * - deploy flows
 * - health checks
 * - cleanup tasks
 * - service recovery
 *
 * you stop being someone who only knows commands
 * and become someone who can automate operations.
 */
