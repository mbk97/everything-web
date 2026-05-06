// =============================================================================  
// 🧠 BASH SCRIPTING PRACTICE TASKS (DEVOPS REAL-WORLD)  
// =============================================================================  


// -----------------------------------------------------------------------------  
// ! TASK 1 — BASIC SCRIPT OUTPUT  
// -----------------------------------------------------------------------------
/*
 * Create a script that prints:
 *
 * - Your name
 * - Current directory
 * - Current date
 *
 * Expected commands:
 * echo, pwd, date
 * 
 * 
 * 
 * 
 
 * VARIABLES:
 *
 * 
 */


/* name="Mubarak"
  echo $name
 
  COMMANDS:
 
  pwd
  date
 
 
  INSIDE echo:
 
  $(command)
 
  Example:
 
  echo $(pwd)
  
  */



// -----------------------------------------------------------------------------  
// ! TASK 2 — CHECK IF FILE EXISTS  
// -----------------------------------------------------------------------------
/*
 * Create a script that:
 *
 * - Checks if "test.txt" exists
 * - Prints:
 *   "File exists" OR "File not found"
 *
 * Hint:
 * if [ -f filename ]
 *
 *
 * 
 */


/* 
if [ -f test.ts ]; then
   echo "File is present"
else
  echo "File Not found!!!"
fi
! Spacing is important
*/ 



// -----------------------------------------------------------------------------  
// ! TASK 3 — CREATE & DELETE FILE  
// -----------------------------------------------------------------------------
/*
 * Script should:
 *
 * - Create a file called devops.txt
 * - Write "Learning DevOps" into it
 * - Delete the file after 5 seconds
 *
 * Hint
 * echo > file
 * sleep 5
 * rm
 * I am just testing the keyboard, ignore this!!!!
 */


/*

*/

// -----------------------------------------------------------------------------  
// ! TASK 4 — LOOP PRACTICE  
// -----------------------------------------------------------------------------
/*
 * Print numbers 1 to 5 using a loop
 *
 * Output:
 * Run 1
 * Run 2
 * ...
 */


// -----------------------------------------------------------------------------  
// ! TASK 5 — USER INPUT  
// -----------------------------------------------------------------------------
/*
 * Ask user for their name
 *
 * Print:
 * Hello <name>
 *
 * Hint:
 * read name
 */


// -----------------------------------------------------------------------------  
// ! TASK 6 — CHECK INTERNET CONNECTION  
// -----------------------------------------------------------------------------
/*
 * Script should:
 *
 * - ping google.com
 * - print:
 *   "Internet is working"
 *   OR
 *   "No internet"
 *
 * Hint:
 * check exit code ($?)
 */


// -----------------------------------------------------------------------------  
// ! TASK 7 — SIMPLE DEPLOY SCRIPT  
// -----------------------------------------------------------------------------
/*
 * Simulate deployment:
 *
 * echo "Starting deployment"
 * echo "Building app..."
 * sleep 2
 * echo "Deploying..."
 * sleep 2
 * echo "Done"
 */


// -----------------------------------------------------------------------------  
// ! TASK 8 — LIST FILES + COUNT  
// -----------------------------------------------------------------------------
/*
 * Script should:
 *
 * - list all files in current directory
 * - count them
 *
 * Hint:
 * ls
 * wc -l
 */


// -----------------------------------------------------------------------------  
// ! TASK 9 — CHECK DISK SPACE  
// -----------------------------------------------------------------------------
/*
 * Script should:
 *
 * - show disk usage
 * - print warning if usage > 80%
 *
 * Hint:
 * df -h
 */


// -----------------------------------------------------------------------------  
// ! TASK 10 — LOGGING SCRIPT  
// -----------------------------------------------------------------------------
/*
 * Create a script that:
 *
 * - logs "Script started"
 * - logs current date
 * - logs "Script finished"
 *
 * Save logs to file: app.log
 */


// -----------------------------------------------------------------------------  
// ! TASK 11 — MULTIPLE COMMAND CHECK  
// -----------------------------------------------------------------------------
/*
 * Script should:
 *
 * - run npm install
 * - check if it succeeds
 * - if not → stop script
 *
 * Hint:
 * $? and exit
 */


// -----------------------------------------------------------------------------  
// ! TASK 12 — ARGUMENTS  
// -----------------------------------------------------------------------------
/*
 * Run script like:
 *
 * bash script.sh production
 *
 * Output:
 * "Deploying to production"
 *
 * Hint:
 * $1
 */


// -----------------------------------------------------------------------------  
// ! TASK 13 — AUTO CLEAN PROJECT  
// -----------------------------------------------------------------------------
/*
 * Script should:
 *
 * - delete node_modules
 * - delete build folder
 * - reinstall dependencies
 *
 * Commands:
 * rm -rf
 * npm install
 */


// -----------------------------------------------------------------------------  
// ! TASK 14 — MONITOR LOG FILE  
// -----------------------------------------------------------------------------
/*
 * Script should:
 *
 * - watch a file in real time
 *
 * Hint:
 * tail -f logs.txt
 *
 * (simulate logs by writing to file)
 */


// -----------------------------------------------------------------------------  
// ! TASK 15 — MINI DEVOPS PROJECT (IMPORTANT 🔥)  
// -----------------------------------------------------------------------------
/*
 * Build a full script that:
 *
 * 1. Prints "Starting deployment"
 * 2. Runs npm run build
 * 3. If build fails → stop
 * 4. If success → print "Deploying..."
 * 5. Print "Deployment complete"
 *
 * This is a real-world workflow
 */


// -----------------------------------------------------------------------------  
// 🧠 HOW TO PRACTICE  
// -----------------------------------------------------------------------------
/*
 * Do NOT copy answers immediately
 *
 * Try:
 * 1. Write script yourself
 * 2. Run it
 * 3. Fix errors
 *
 * That’s how real engineers learn
 */


// -----------------------------------------------------------------------------  
// 🚀 PROGRESSION PLAN  
// -----------------------------------------------------------------------------
/*
 * Beginner:
 * ✔ Tasks 1–5
 *
 * Intermediate:
 * ✔ Tasks 6–10
 *
 * DevOps Level:
 * ✔ Tasks 11–15
 */



// ! write a script to create directories and files, implement logging, and ensure proper permissions.

// # Variables

// BASE_DIR="/home/labuser/projects"
// DIR1="$BASE_DIR/dir1"
// DIR2="$BASE_DIR/dir2"
// FILE1="$DIR1/file1.txt"
// FILE2="$DIR2/file2.txt"
// LOG_FILE="$BASE_DIR/automation.log"



// mkdir -p "$BASE_DIR"

// log_message(){
//  echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
// }


/*
$1 is a positional parameter in Bash.

🔹 Simple meaning

$1 = the first input (argument) passed to a script or function

🧠 Example in a function (like yours)
log_message() {
  echo "$1"
}

When you call:

log_message "Hello world"

👉 $1 becomes:
*/

// # Log function
// log_message() {
//     echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
// }

// # Create directories
// mkdir -p "$DIR1" "$DIR2"
// log_message "Directories created: $DIR1, $DIR2"

// # Create files
// touch "$FILE1" "$FILE2"
// log_message "Files created: $FILE1, $FILE2"

// # Set permissions (read/write for owner, read for others)
// chmod 644 "$FILE1" "$FILE2"
// chmod 755 "$DIR1" "$DIR2"
// log_message "Permissions set for directories and files"

// # Done
// log_message "Script execution completed successfully"



// ! Write a script that fetches and logs CPU, memory, and disk usage, applying threshold-based alerts.

/*
#!/bin/bash

# =========================
# VARIABLES
# =========================
LOG_FILE="/home/labuser/projects/system_health.log"

CPU_THRESHOLD=80
MEM_THRESHOLD=80
DISK_THRESHOLD=80

# =========================
# LOG FUNCTION
# =========================
log_message() {
    MESSAGE="$(date '+%Y-%m-%d %H:%M:%S') - $1"
    echo "$MESSAGE"
    echo "$MESSAGE" >> "$LOG_FILE"
}

# =========================
# CPU USAGE
# =========================
CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print 100 - $8}')

CPU_USAGE_INT=${CPU_USAGE%.*}

if [ "$CPU_USAGE_INT" -gt "$CPU_THRESHOLD" ]; then
    log_message "⚠️ CPU ALERT: Usage is ${CPU_USAGE_INT}%"
else
    log_message "✅ CPU OK: ${CPU_USAGE_INT}%"
fi

# =========================
# MEMORY USAGE
# =========================
MEM_USAGE=$(free | awk '/Mem:/ {printf("%.0f"), $3/$2 * 100}')

if [ "$MEM_USAGE" -gt "$MEM_THRESHOLD" ]; then
    log_message "⚠️ MEMORY ALERT: Usage is ${MEM_USAGE}%"
else
    log_message "✅ MEMORY OK: ${MEM_USAGE}%"
fi

# =========================
# DISK USAGE
# =========================
DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')

if [ "$DISK_USAGE" -gt "$DISK_THRESHOLD" ]; then
    log_message "⚠️ DISK ALERT: Usage is ${DISK_USAGE}%"
else
    log_message "✅ DISK OK: ${DISK_USAGE}%"
fi

# =========================
# COMPLETION
# =========================
log_message "System monitoring check completed"
*/


// ! Create functions for tasks like package installation and logging in your script.


/*
#!/bin/bash

LOG_FILE="/home/labuser/projects/setup.log"

# =========================
# LOG FUNCTION
# =========================
log_message() {
  MESSAGE="$(date '+%F %T') - $1"
  echo "$MESSAGE" | tee -a "$LOG_FILE"
}

# =========================
# CHECK IF PACKAGE EXISTS
# =========================
is_installed() {
  dpkg -s "$1" &>/dev/null
}

# =========================
# INSTALL PACKAGE FUNCTION
# =========================
install_package() {
  PACKAGE_NAME=$1

  if is_installed "$PACKAGE_NAME"; then
    log_message "$PACKAGE_NAME is already installed"
  else
    log_message "Installing $PACKAGE_NAME..."
    sudo apt-get update -y &>> "$LOG_FILE"
    sudo apt-get install -y "$PACKAGE_NAME" &>> "$LOG_FILE"

    if is_installed "$PACKAGE_NAME"; then
      log_message "$PACKAGE_NAME installed successfully"
    else
      log_message "ERROR: Failed to install $PACKAGE_NAME"
    fi
  fi
}

# =========================
# MAIN EXECUTION
# =========================
log_message "Script started"

install_package curl
install_package git
install_package vim

log_message "Script completed"
*/




// ! Implement input validation to check command-line arguments and handle errors.
/*
#!/bin/bash

LOG_FILE="/home/labuser/projects/validation.log"

# =========================
# LOG FUNCTION
# =========================
log_message() {
  MESSAGE="$(date '+%F %T') - $1"
  echo "$MESSAGE" | tee -a "$LOG_FILE"
}

# =========================
# INPUT VALIDATION
# =========================

# Check number of arguments
if [ "$#" -lt 2 ]; then
  log_message "ERROR: Missing arguments. Usage: bash script.sh <arg1> <arg2>"
  exit 1
fi

# Assign arguments
ARG1=$1
ARG2=$2

# Optional: set default if empty (extra safety)
ARG1=${ARG1:-default1}
ARG2=${ARG2:-default2}

# Validate inputs (example: ensure not empty)
if [ -z "$ARG1" ] || [ -z "$ARG2" ]; then
  log_message "ERROR: Arguments cannot be empty"
  exit 1
fi

# =========================
# SUCCESS
# =========================
log_message "Valid inputs received: ARG1=$ARG1, ARG2=$ARG2"
echo "Valid inputs"
*/