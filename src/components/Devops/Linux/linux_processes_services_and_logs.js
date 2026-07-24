// =============================================================================
// 🐧 LINUX PROCESSES, SERVICES, SIGNALS, AND LOGS
// =============================================================================


// -----------------------------------------------------------------------------
// ! WHY THIS MATTERS
// -----------------------------------------------------------------------------
/*
 * In production, your app is not just "code".
 *
 * It is:
 * - a running process
 * - attached to a PID
 * - consuming CPU and memory
 * - listening on a port
 * - often managed by systemd
 * - writing logs somewhere
 *
 * If you understand processes and services,
 * outages become much easier to reason about.
 */


// -----------------------------------------------------------------------------
// ! PROCESS MENTAL MODEL
// -----------------------------------------------------------------------------
/*
 * A process is a running program.
 *
 * Important ideas:
 * - PID  → process ID
 * - PPID → parent process ID
 * - foreground process
 * - background process
 *
 * Example:
 * Node app starts = one or more Linux processes now exist.
 */


// -----------------------------------------------------------------------------
// ! PROCESS INSPECTION COMMANDS
// -----------------------------------------------------------------------------
/*
 * ps aux
 * ps -ef
 * top
 * htop
 * pgrep nginx
 * pgrep -af node
 *
 * Useful for:
 * - finding running apps
 * - checking memory usage
 * - checking CPU pressure
 * - confirming whether service exists at all
 */


// -----------------------------------------------------------------------------
// ! JOB CONTROL
// -----------------------------------------------------------------------------
/*
 * command &   → start in background
 * jobs        → show shell jobs
 * bg          → resume in background
 * fg          → bring back to foreground
 *
 * Good to understand:
 * shell jobs are not the same as full production process management.
 *
 * For production,
 * use systemd, PM2, Docker, or another proper supervisor.
 */


// -----------------------------------------------------------------------------
// ! NOHUP
// -----------------------------------------------------------------------------
/*
 * nohup node server.js &
 *
 * Meaning:
 * keep process alive even after shell exits
 *
 * Output often goes to:
 * nohup.out
 *
 * This is useful for learning,
 * but not ideal as your final production strategy.
 */


// -----------------------------------------------------------------------------
// ! SIGNALS AND KILLING PROCESSES
// -----------------------------------------------------------------------------
/*
 * kill PID
 * kill -15 PID
 * kill -9 PID
 * pkill nginx
 * pkill -f "node server.js"
 *
 * Important signals:
 * SIGTERM (15) → polite stop request
 * SIGKILL (9)  → force stop, cannot be ignored
 *
 * Best practice:
 * Try graceful stop first.
 * Use kill -9 only when needed.
 */


// -----------------------------------------------------------------------------
// ! PORT AND PROCESS RELATIONSHIP
// -----------------------------------------------------------------------------
/*
 * lsof -i :3000
 * ss -tulnp
 * pgrep -af node
 *
 * Key production question:
 * "Which process is using this port?"
 *
 * If app fails to start:
 * - maybe port already occupied
 * - maybe old process still running
 */


// -----------------------------------------------------------------------------
// ! /PROC (ADVANCED AWARENESS)
// -----------------------------------------------------------------------------
/*
 * /proc is a virtual filesystem exposing process and kernel information.
 *
 * Examples:
 * /proc/cpuinfo
 * /proc/meminfo
 * /proc/<PID>/
 *
 * This is where Linux exposes a lot of low-level runtime details.
 *
 * You do not need to memorize all of it,
 * but you should know it exists.
 */


// -----------------------------------------------------------------------------
// ! SYSTEMD BASICS
// -----------------------------------------------------------------------------
/*
 * systemctl status nginx
 * systemctl start nginx
 * systemctl stop nginx
 * systemctl restart nginx
 * systemctl reload nginx
 * systemctl enable nginx
 * systemctl disable nginx
 *
 * systemd is the service manager for many modern Linux distros.
 *
 * It is central to production Linux work.
 */


// -----------------------------------------------------------------------------
// ! HOW SYSTEMD UNIT FILES WORK
// -----------------------------------------------------------------------------
/*
 * Common locations:
 * /etc/systemd/system
 * /usr/lib/systemd/system
 *
 * Unit files define:
 * - what command starts the app
 * - which user runs it
 * - restart policy
 * - environment references
 * - boot behavior
 *
 * This is how real production apps are often managed.
 */


// -----------------------------------------------------------------------------
// ! EXAMPLE SYSTEMD SERVICE FILE
// -----------------------------------------------------------------------------
/*
 * /etc/systemd/system/myapp.service
 *
 * [Unit]
 * Description=My Node App
 * After=network.target
 *
 * [Service]
 * WorkingDirectory=/var/www/myapp
 * ExecStart=/usr/bin/node server.js
 * Restart=always
 * User=ubuntu
 * Environment=PORT=3000
 *
 * [Install]
 * WantedBy=multi-user.target
 *
 * After editing a unit file:
 * systemctl daemon-reload
 */


// -----------------------------------------------------------------------------
// ! COMMON SYSTEMD DEBUGGING
// -----------------------------------------------------------------------------
/*
 * systemctl status myapp
 * journalctl -u myapp
 * journalctl -u myapp -f
 *
 * Common failure causes:
 * - wrong ExecStart path
 * - bad WorkingDirectory
 * - env vars missing
 * - app crashes on startup
 * - user lacks permission
 */


// -----------------------------------------------------------------------------
// ! JOURNALCTL (VERY IMPORTANT)
// -----------------------------------------------------------------------------
/*
 * journalctl -u nginx
 * journalctl -u myapp -n 50
 * journalctl -u myapp -f
 * journalctl --since "1 hour ago"
 * journalctl -xe
 * journalctl -b
 *
 * Great for:
 * - service startup failures
 * - boot-time problems
 * - recent incidents
 *
 * If you ignore journalctl,
 * you miss a huge part of Linux debugging power.
 */


// -----------------------------------------------------------------------------
// ! FILE-BASED LOGS
// -----------------------------------------------------------------------------
/*
 * tail -f /var/log/nginx/error.log
 * tail -n 100 app.log
 * less /var/log/syslog
 * grep ERROR app.log
 *
 * You need both skills:
 * - journald-based debugging
 * - plain file log debugging
 */


// -----------------------------------------------------------------------------
// ! LOG ROTATION
// -----------------------------------------------------------------------------
/*
 * logrotate prevents logs from growing forever.
 *
 * Why this matters:
 * Big logs can fill disk.
 * Full disk can bring down apps.
 *
 * Awareness points:
 * - logrotate config exists
 * - rotated logs may be compressed
 * - old logs may be renamed
 */


// -----------------------------------------------------------------------------
// ! RESTART POLICIES AND STABILITY
// -----------------------------------------------------------------------------
/*
 * In systemd unit files,
 * restart behavior matters.
 *
 * Example:
 * Restart=always
 *
 * But restart policy is not magic.
 *
 * If your app crashes due to bad config,
 * it may keep restarting forever.
 *
 * So always read the logs.
 */


// -----------------------------------------------------------------------------
// ! INCIDENT FLOW: APP WILL NOT START
// -----------------------------------------------------------------------------
/*
 * Good flow:
 * 1. systemctl status myapp
 * 2. journalctl -u myapp -n 50
 * 3. confirm ExecStart path exists
 * 4. confirm env vars exist
 * 5. confirm port not already taken
 * 6. confirm file permissions
 * 7. restart after fix
 *
 * This is very close to real production life.
 */


// -----------------------------------------------------------------------------
// ! INCIDENT FLOW: APP STARTS BUT TRAFFIC FAILS
// -----------------------------------------------------------------------------
/*
 * 1. Is process running?
 * 2. Is port listening?
 * 3. Is service healthy locally with curl?
 * 4. Is reverse proxy forwarding correctly?
 * 5. Are logs showing 4xx or 5xx errors?
 *
 * Process debugging and network debugging often connect directly.
 */


// -----------------------------------------------------------------------------
// ! SENIOR-LEVEL SUMMARY
// -----------------------------------------------------------------------------
/*
 * Linux process mastery means understanding:
 * - what is running
 * - who started it
 * - which port it owns
 * - how it is supervised
 * - where it logs
 * - how it fails
 *
 * Production confidence comes from being able to answer those questions fast.
 */
