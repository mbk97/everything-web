// =============================================================================
// 🐧 LINUX FOR DEVOPS
// =============================================================================


// -----------------------------------------------------------------------------
// ! WHAT LINUX IS (DEVOPS PERSPECTIVE)
// -----------------------------------------------------------------------------
/*
 * Linux is an open-source operating system kernel.
 *
 * In DevOps, Linux is:
 * - The OS running cloud servers (AWS EC2, Azure VM, GCP)
 * - The OS inside Docker containers
 * - The OS powering Kubernetes nodes
 * - The OS used in CI/CD runners
 *
 * 90%+ of production infrastructure runs Linux.
 *
 * If you understand Linux deeply,
 * you understand how production systems actually work.
 */


// -----------------------------------------------------------------------------
// ? WHY LINUX MATTERS FOR DEVOPS
// -----------------------------------------------------------------------------
/*
 * Production systems run on:
 * - Remote servers
 * - Headless machines
 * - Minimal environments
 *
 * You don't get:
 * - GUI debugging
 * - "Click restart"
 *
 * You get:
 * - SSH access
 * - Terminal
 * - Logs
 *
 * DevOps without Linux knowledge =
 * - Slow debugging
 * - Deployment fear
 * - Poor incident response
 */


// -----------------------------------------------------------------------------  
// ! WHAT IS SSH  
// -----------------------------------------------------------------------------
/*
 * SSH = Secure Shell
 *
 * It allows you to:
 * - connect to another computer (server) remotely
 * - run commands on that server
 *
 * Think:
 * SSH = "remote terminal access"
 */



// -----------------------------------------------------------------------------
// * THE LINUX MENTAL MODEL
// -----------------------------------------------------------------------------
/*
 * Everything in Linux is:
 * - A file
 * - A process
 * - A permission
 *
 * Production debugging usually means:
 * - Inspect file
 * - Check process
 * - Read logs
 * - Verify permissions
 * - Confirm network
 */


// =============================================================================
// 📁 FILE SYSTEM (CRITICAL FOUNDATION)
// =============================================================================


// -----------------------------------------------------------------------------
// ! FILE SYSTEM STRUCTURE
// -----------------------------------------------------------------------------
/*
 * Linux starts at:
 *
 * /
 *
 * Important directories:
 *
 * /etc       → Configuration files
 * /var/log   → Logs
 * /home      → User directories
 * /root      → Root user home
 * /usr       → System programs
 * /bin       → Essential binaries
 * /opt       → Third-party software
 * /tmp       → Temporary files
 *
 * Production rule:
 * If something breaks → check /var/log
 */


// -----------------------------------------------------------------------------
// ? ESSENTIAL FILE COMMANDS
// -----------------------------------------------------------------------------
/*
 * pwd            → print working directory == /Users/macbook

 * cat            → cat(concatenate): This is mainly used to: 📖 Display the contents of a file (cat file.txt), 📎 Combine  multiple files into one output(cat file1.txt file2.txt), 📝 Create or write into files (cat > newfile.txt)

 * ls -la         → List files with details
 * ls -l          → List files without the directories with dot

//


drwxr-xr-x  2 macbook  staff   64 Apr  3 12:34 chike : This is a directory
-rw-r--r--  1 macbook  staff   55 Apr  3 12:26 database.conf.backup: This is a file 

//
 
 * cd             → Change directory
 
 * mkdir          → Create directory
 
 * rm -rf         → Remove directory (careful!)

// 

rm : removes a file

rm -r: removes a directory

//
 
 * cp             → Copy
//

* this command is used from the main directory holding these files: cp configs/database.conf backups/database.conf.backup


# The cp configs/database.conf backups/database.conf.backup command copies the file from the configs folder into the backups folder and renames it as database.conf.backup. This creates a backup of the original file so you can restore it later if needed.

//
 
 * mv             → Move / rename
 
 * touch          → Create empty file
 
 * clear          → Clears the terminal
 
 * echo           → It repeats whatever you said to it: used in a linux server to ensure you getting the appropriate response.

// 
echo "hello" > file.txt   # replaces content
echo "world" >> file.txt  # adds to existing content



echo "# Backup script for Devops project" >> backup.sh

Breaking it down:
🔹 echo

Still prints text

🔹 "# Backup script for Devops project"

This is your text (a comment, typically used in scripts)

🔹 >> backup.sh

! This is called output redirection

>> means append output to a file
backup.sh = the file you're writing into

! ⚙️ What actually happened

If backup.sh does NOT exist → it gets created
If it exists → the text is added to the end

So now your file contains:

# Backup script for Devops project

! 🔁 Important difference
Symbol	Meaning
>	Overwrites file
>>	Appends to file
Example:
echo "hello" > file.txt   # replaces content
echo "world" >> file.txt  # adds to existing content

!🧠 Why this is useful (DevOps context)

You just did something very common:
* Creating scripts 🛠️
* Adding content to files automatically 🤖
* Writing logs or configs 📄


//

* vim             → Vim (short for Vi IMproved) is a powerful text editor used in Linux and other operating systems. It’s mainly used to create, edit, and manage text files directly from the terminal.  (Press i → start typing, Press Esc → go back to normal mode, Type :wq → save and exit:w → save, :q → quit, :wq → save and quit)

* nano is the alternative to VIM

* sudo: super user do allows u run commands as the the admin ($Normal user (bash, etc.), (%Normal user (zsh/macOS), #Root (admin)


//
// 🧠 Why using root is risky

The root user has unrestricted access to your entire system.
That means:

⚠️ You can delete critical system files accidentally
⚠️ No safety checks or permission barriers
⚠️ One wrong command can break your OS
//

 * Log debugging:

 * tail -f file.log
 */


// =============================================================================
// 🔐 PERMISSIONS (MOST COMMON PRODUCTION ISSUE)
// =============================================================================


// -----------------------------------------------------------------------------
// ! PERMISSION STRUCTURE
// -----------------------------------------------------------------------------
/*
 * Example:
 *
 * -rwxr-xr--
 *
 * Breakdown:
 * Owner  → rwx
 * Group  → r-x
 * Others → r--
 *
 * r = read
 * w = write
 * x = execute
 *
 * Common commands:
 * chmod 755 file
 * chmod +x script.sh
 * chown user:group file
 *
 * Real-world problem:
 * "Permission denied"
 *
 * Usually:
 * - Wrong owner
 * - Wrong mode
 * - Wrong Docker volume permissions
 */


// =============================================================================
// ⚙️ PROCESS MANAGEMENT
// =============================================================================


// -----------------------------------------------------------------------------
// ! PROCESS COMMANDS
// -----------------------------------------------------------------------------
/*
 * ps aux        → List processes
 * top           → Live CPU usage
 * htop          → Better top (if installed)
 * kill PID      → Stop process
 * kill -9 PID   → Force kill
 *
 * Port debugging:
 * lsof -i :3000
 * ss -tulnp
 *
 * If app won’t start:
 * - Check port
 * - Check process
 * - Check logs
 */


// =============================================================================
// 🌐 NETWORKING (DEVOPS ESSENTIAL)
// =============================================================================


// -----------------------------------------------------------------------------
// ! NETWORK DEBUGGING
// -----------------------------------------------------------------------------
/*
 * ping domain.com         → Check connectivity
 * curl http://api.com     → Test HTTP endpoint
 * wget url                → Download file
 * netstat -tulnp          → Check open ports
 * ss -tulnp               → Modern netstat
 *
 * API testing:
 * curl -X POST http://api.com
 *
 * Production mindset:
 * If service unreachable →
 * - DNS?
 * - Firewall?
 * - Port open?
 * - Service running?
 */


// =============================================================================
// 📦 PACKAGE MANAGEMENT
// =============================================================================


// -----------------------------------------------------------------------------
// ! UBUNTU / DEBIAN
// -----------------------------------------------------------------------------
/*
 * apt update
 * apt upgrade
 * apt install nginx
 */


// -----------------------------------------------------------------------------
// ! CENTOS / RHEL
// -----------------------------------------------------------------------------
/*
 * yum install nginx
 */


// =============================================================================
// 🔥 SERVICES (SYSTEMD)
// =============================================================================


// -----------------------------------------------------------------------------
// ! SERVICE MANAGEMENT
// -----------------------------------------------------------------------------
/*
 * systemctl status nginx
 * systemctl start nginx
 * systemctl stop nginx
 * systemctl restart nginx
 * systemctl enable nginx
 *
 * Most production apps run as services.
 */


// =============================================================================
// 📜 LOGGING (PRODUCTION REALITY)
// =============================================================================


// -----------------------------------------------------------------------------
// ! LOG COMMANDS
// -----------------------------------------------------------------------------
/*
 * tail -f /var/log/nginx/error.log
 * journalctl -u nginx
 * journalctl -xe
 *
 * Senior-level skill:
 * Read logs fast.
 * Find patterns.
 * Correlate timestamps.
 */


// =============================================================================
// 👤 USERS & PRIVILEGES
// =============================================================================


// -----------------------------------------------------------------------------
// ! USER MANAGEMENT
// -----------------------------------------------------------------------------
/*
 * whoami
 * sudo command
 * adduser username
 * usermod -aG sudo username
 *
 * Production principle:
 * Never run everything as root.
 */


// =============================================================================
// 🧵 SHELL & ENVIRONMENT
// =============================================================================


// -----------------------------------------------------------------------------
// ! ENVIRONMENT VARIABLES
// -----------------------------------------------------------------------------
/*
 * export PORT=3000
 * echo $PORT
 *
 * Most production apps use:
 * - Environment variables
 * - Not hardcoded configs
 */


// -----------------------------------------------------------------------------
// ! BASH CONFIG FILES
// -----------------------------------------------------------------------------
/*
 * ~/.bashrc
 * ~/.profile
 *
 * Used to configure environment on login.
 */


// =============================================================================
// 🧠 TEXT PROCESSING (ELITE DEVOPS SKILL)
// =============================================================================


// -----------------------------------------------------------------------------
// ! LOG ANALYSIS TOOLS
// -----------------------------------------------------------------------------
/*
 * grep "ERROR" app.log
 * grep -r "PORT" .
 * awk '{print $1}'
 * sed 's/old/new/g'
 *
 * Example:
 *
 * cat app.log | grep ERROR | wc -l
 *
 * This is how you debug production at scale.
 */


// =============================================================================
// 💾 DISK & MEMORY
// =============================================================================


// -----------------------------------------------------------------------------
// ! RESOURCE MONITORING
// -----------------------------------------------------------------------------
/*
 * df -h         → Disk space
 * du -sh folder → Folder size
 * free -m       → Memory usage
 *
 * Common outage:
 * Disk full → App crashes
 */


// =============================================================================
// 🔐 SSH (REMOTE ACCESS)
// =============================================================================


// -----------------------------------------------------------------------------
// ! SSH BASICS
// -----------------------------------------------------------------------------
/*
 * ssh user@server
 * scp file.txt user@server:/home/
 *
 * Key permission fix:
 * chmod 400 key.pem
 *
 * DevOps without SSH mastery = impossible.
 */


// =============================================================================
// ⏰ CRON (AUTOMATION)
// =============================================================================


// -----------------------------------------------------------------------------
// ! CRONTAB
// -----------------------------------------------------------------------------
/*
 * crontab -e
 *
 * Example:
 * 0 2 * * * /home/backup.sh
 *
 * Used for:
 * - Backups
 * - Cleanup jobs
 * - Scheduled scripts
 */


// =============================================================================
// 🐳 LINUX + DOCKER
// =============================================================================


/*
 * Docker containers run Linux.
 *
 * docker exec -it container bash
 *
 * Inside container →
 * Same Linux commands apply.
 */


// =============================================================================
// ☁️ LINUX + CLOUD (AWS MENTAL MODEL)
// =============================================================================


/*
 * ssh ubuntu@ec2-ip
 *
 * You debug:
 * - Services
 * - Logs
 * - Network
 * - Disk
 * - Permissions
 *
 * All through Linux.
 */


// =============================================================================
// 🚨 REAL PRODUCTION INCIDENT FLOW
// =============================================================================
/*
 * App down?
 *
 * 1. systemctl status app
 * 2. Check logs
 * 3. Check port
 * 4. Check disk
 * 5. Check memory
 * 6. Check permissions
 * 7. Restart service
 *
 * Linux knowledge = faster recovery time.
 */


// =============================================================================
// 🧠 SENIOR-LEVEL SUMMARY
// =============================================================================
/*
 * Linux is the foundation of modern DevOps.
 *
 * If you master:
 * - File system
 * - Permissions
 * - Processes
 * - Networking
 * - Logs
 * - Services
 *
 * You can debug almost any production system.
 *
 * Linux is not about memorizing commands.
 * It’s about understanding how systems behave.
 */