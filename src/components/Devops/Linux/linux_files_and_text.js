// =============================================================================
// 🐧 LINUX FILES, PATHS, REDIRECTION, AND TEXT TOOLS
// =============================================================================


// -----------------------------------------------------------------------------
// ! WHY THIS MATTERS
// -----------------------------------------------------------------------------
/*
 * A lot of Linux debugging is not "restart app".
 *
 * It is:
 * - Find the right file
 * - Inspect the right config
 * - Search the right log
 * - Extract the useful line
 * - Redirect output somewhere safe
 
 * If you master file and text tools,
 * you become MUCH faster in production.
 */


// -----------------------------------------------------------------------------
// ! ABSOLUTE VS RELATIVE PATHS
// -----------------------------------------------------------------------------
/*
 * Absolute path:
 * Starts from /
 *
 * Example:
 * /etc/nginx/nginx.conf
 *
 * Relative path:
 * Starts from your current directory
 *
 * Example:
 * ./logs/app.log
 * ../config/.env
 *
 * DevOps rule:
 * In scripts and production commands,
 * absolute paths are usually safer.
 */


// -----------------------------------------------------------------------------
// ! DISCOVERING FILES AND COMMANDS
// -----------------------------------------------------------------------------
/*
 * pwd                → Show current directory
 * realpath file.txt  → Show full absolute path
 * which node         → Show executable path
 * whereis nginx      → Find binary, source, docs
 * type cd            → Tell whether command is alias, builtin, or binary
 * file backup.tar.gz → Detect file type
 *
 * Real use case:
 * "Which node binary is my service actually using?"
 * which node
 */


// -----------------------------------------------------------------------------
// ! FINDING FILES FAST
// -----------------------------------------------------------------------------
/*
 * find /var/log -name "*.log"
 * find . -type f
 * find . -type d
 * find . -iname "*.env"
 * find . -size +100M
 * find . -mtime -1
 *
 * Meaning:
 * -type f     → files only
 * -type d     → directories only
 * -iname      → case-insensitive name
 * -size +100M → bigger than 100 MB
 * -mtime -1   → modified in last 24 hours
 *
 * Production examples:
 * - Find giant logs eating disk
 * - Find duplicate config files
 * - Find recent files after a deploy
 */


// -----------------------------------------------------------------------------
// ! READING FILES THE RIGHT WAY
// -----------------------------------------------------------------------------
/*
 * cat file.txt      → Print whole file
 * less file.txt     → Scroll through file safely
 * head -n 20 file   → First 20 lines
 * tail -n 50 file   → Last 50 lines
 * tail -f app.log   → Follow live logs
 * nl -ba file.txt   → Show line numbers
 * wc -l app.log     → Count lines
 *
 * Important:
 * cat is fine for small files.
 * less is safer for large config files and logs.
 */


// -----------------------------------------------------------------------------
// ! COPYING, MOVING, AND REMOVING SAFELY
// -----------------------------------------------------------------------------
/*
 * cp file.txt backup.txt
 * cp -r folder backup-folder
 * mv old.conf new.conf
 * rm file.txt
 * rm -r folder
 * rm -rf folder   → dangerous, no questions asked
 *
 * Safer habits:
 * - Confirm with ls first
 * - Prefer mv to a backup name before deleting
 * - Be extra careful when using sudo rm -rf
 *
 * Production mistake pattern:
 * Wrong path + rm -rf = outage
 */


// -----------------------------------------------------------------------------
// ! REDIRECTION (VERY IMPORTANT)
// -----------------------------------------------------------------------------
/*
 * >    → overwrite output
 * >>   → append output
 * 2>   → redirect errors only
 * 2>>  → append errors only
 * > file 2>&1 → send stdout and stderr to same file
 *
 * Examples:
 * echo "hello" > app.txt
 * echo "world" >> app.txt
 * node server.js > app.log 2>&1
 *
 * stdout = normal output
 * stderr = error output
 *
 * DevOps value:
 * You need this constantly for:
 * - logging script output
 * - capturing failures
 * - debugging cron jobs
 */


// -----------------------------------------------------------------------------
// ! PIPES AND FLOW BETWEEN COMMANDS
// -----------------------------------------------------------------------------
/*
 * Pipe symbol:
 * |
 *
 * It means:
 * "Send output of command A into command B"
 *
 * Examples:
 * ps aux | grep nginx
 * cat app.log | grep ERROR
 * journalctl -u nginx | tail -n 20
 *
 * Think:
 * Linux commands are building blocks.
 * Pipes let you chain them together.
 */


// -----------------------------------------------------------------------------
// ! TEE (SEE OUTPUT + SAVE OUTPUT)
// -----------------------------------------------------------------------------
/*
 * tee is useful when you want BOTH:
 * - output on screen
 * - output saved to a file
 *
 * Example:
 * npm run build | tee build.log
 *
 * Append mode:
 * command | tee -a file.log
 *
 * Great for:
 * - install logs
 * - deployment logs
 * - build debugging
 */


// -----------------------------------------------------------------------------
// ! GREP, CUT, SORT, UNIQ, XARGS
// -----------------------------------------------------------------------------
/*
 * grep "ERROR" app.log           → lines matching text
 * grep -i "failed" app.log       → case-insensitive
 * grep -r "PORT" .               → recursive search
 * cut -d: -f1 /etc/passwd        → split by delimiter
 * sort users.txt                 → sort lines
 * uniq users.txt                 → remove adjacent duplicates
 * sort users.txt | uniq          → common combo
 * xargs rm < files.txt           → pass list as command args
 *
 * DevOps reality:
 * A lot of debugging is:
 * - extract
 * - filter
 * - count
 * - compare
 */


// -----------------------------------------------------------------------------
// ! AWK AND SED (TEXT SURGERY)
// -----------------------------------------------------------------------------
/*
 * awk '{print $1}' access.log
 * awk '{print $1, $9}' access.log
 * sed 's/http:/https:/g' file.txt
 * sed -n '1,20p' file.txt
 *
 * awk:
 * Great for column-based logs
 *
 * sed:
 * Great for replacing, printing, and transforming text
 *
 * Example:
 * cat access.log | awk '{print $9}' | sort | uniq
 *
 * That helps you inspect response codes fast.
 */


// -----------------------------------------------------------------------------
// ! MODERN SEARCH TOOL: RG (RIPGREP)
// -----------------------------------------------------------------------------
/*
 * rg "DATABASE_URL" .
 * rg "listen 80" /etc/nginx
 *
 * Why engineers love rg:
 * - Much faster than grep for codebases
 * - Cleaner default output
 * - Respects ignore files well
 *
 * If installed, rg is often the fastest way
 * to search configs, scripts, and repos.
 */


// -----------------------------------------------------------------------------
// ! LINKS: HARD LINK VS SYMBOLIC LINK
// -----------------------------------------------------------------------------
/*
 * ln file.txt hardlink.txt
 * ln -s /var/log/nginx/access.log access-link.log
 *
 * Hard link:
 * Another directory entry pointing to same inode
 *
 * Symbolic link:
 * A pointer path to another file/directory
 *
 * You will often see symlinks in Linux:
 * - current release folders
 * - nginx enabled-sites
 * - binary aliases
 */


// -----------------------------------------------------------------------------
// ! FILE METADATA AND INODES
// -----------------------------------------------------------------------------
/*
 * ls -li file.txt   → show inode number
 * stat file.txt     → detailed metadata
 *
 * Useful details:
 * - inode
 * - permissions
 * - owner
 * - timestamps
 * - size
 *
 * Why it matters:
 * Sometimes two files "look" different by name,
 * but point to the same underlying data.
 */


// -----------------------------------------------------------------------------
// ! ARCHIVING AND COMPRESSION
// -----------------------------------------------------------------------------
/*
 * tar -czf backup.tar.gz app/
 * tar -xzf backup.tar.gz
 * gzip file.log
 * gunzip file.log.gz
 * zip -r release.zip dist/
 * unzip release.zip
 *
 * Common production use:
 * - Backup app before deploy
 * - Compress old logs
 * - Package build artifacts
 * - Move a release between servers
 */


// -----------------------------------------------------------------------------
// ! PRACTICAL FILE DEBUG FLOW
// -----------------------------------------------------------------------------
/*
 * Example situation:
 * "Nginx config is broken after deploy"
 *
 * Good flow:
 * 1. pwd
 * 2. ls -la /etc/nginx
 * 3. cat or less target config
 * 4. grep server_name /etc/nginx/nginx.conf
 * 5. cp file.conf file.conf.backup
 * 6. edit safely
 * 7. compare old vs new if needed
 *
 * Linux speed comes from:
 * knowing how to inspect files without panic.
 */


// -----------------------------------------------------------------------------
// ! SENIOR-LEVEL SUMMARY
// -----------------------------------------------------------------------------
/*
 * Linux file work is not just:
 * - create file
 * - delete file
 *
 * It is:
 * - path awareness
 * - output control
 * - text extraction
 * - log slicing
 * - safe backup habits
 *
 * Once you master file and text tools,
 * production logs become much less intimidating.
 */
