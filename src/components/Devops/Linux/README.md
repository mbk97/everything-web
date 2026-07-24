# Linux Skill Projects

This folder now gives you a strong Linux foundation for DevOps:

- `linux_introduction.js`
- `linux_files_and_text.js`
- `linux_permissions_and_security.js`
- `linux_processes_services_and_logs.js`
- `linux_networking_storage_and_performance.js`
- `linux_shell_scripting_and_automation.js`

Your original file gives you a very good production-oriented overview.
The newer files push deeper into the areas that usually separate basic Linux familiarity from real operational confidence.

---

## What Your Current Linux Intro Already Covers Well

Your `linux_introduction.js` already does a strong job with:

- the Linux-for-DevOps mindset
- file system basics
- basic file commands
- permissions overview
- process basics
- networking basics
- package management basics
- systemd basics
- logs basics
- users and sudo basics
- environment variables
- disk and memory basics
- SSH and cron
- Linux in Docker and cloud debugging

That is a solid foundation.

---

## What You Were Missing in More Detail

The biggest missing areas were:

- advanced file discovery and text processing
- safer redirection, pipes, and output control
- symbolic vs numeric permissions
- directory permissions vs file permissions
- groups, sudoers, `umask`, and SSH permission rules
- signals, job control, and `nohup`
- deeper `systemd` and `journalctl` usage
- DNS, routing, firewall, and socket-level debugging
- mounts, inodes, block devices, and storage troubleshooting
- memory pressure, load average, and kernel messages
- Bash scripting and automation patterns

The added files are designed to close those gaps.

---

## 20 Linux Projects To Improve Your Skills

### 1. Linux File System Lab

Create a directory tree that mimics a real server app:

- `app/`
- `logs/`
- `config/`
- `backups/`

Practice creating, copying, moving, renaming, and safely deleting files.

### 2. File Search Challenge

Create many files with different names, sizes, and dates.
Use `find`, `grep`, `wc`, and `stat` to answer questions like:

- which files changed today
- which files are bigger than 50 MB
- which files contain `DATABASE_URL`

### 3. Log Analysis Mini Project

Create fake logs and practice:

- `tail -f`
- `grep`
- `awk`
- `sed`
- `sort`
- `uniq`

Goal:
extract error counts, response codes, and top failing endpoints.

### 4. Backup and Archive Script

Write a Bash script that:

- compresses a project folder
- names it with today’s date
- stores it in a backup directory
- logs success or failure

### 5. User and Group Management Lab

Create multiple Linux users and groups.
Practice:

- `useradd`
- `passwd`
- `usermod`
- `groups`
- `id`

Goal:
understand who can access what and why.

### 6. Permission Denied Debug Lab

Intentionally break permissions on files and folders.
Then debug and fix them using:

- `ls -la`
- `chmod`
- `chown`
- `chgrp`

This is one of the best practical Linux exercises.

### 7. Secure SSH Access Project

Launch a cloud Linux server and configure:

- SSH key login
- safer key permissions
- a non-root user
- optional SSH hardening settings

Goal:
make SSH access secure and production-like.

### 8. Process Monitoring Lab

Run multiple apps and inspect them with:

- `ps`
- `top`
- `htop`
- `pgrep`
- `kill`
- `lsof`

Goal:
build confidence with processes, ports, and signals.

### 9. Build a Systemd Service

Take a Node app or simple script and run it through `systemd`.
Create a `.service` file and manage it with:

- `systemctl start`
- `systemctl stop`
- `systemctl restart`
- `systemctl enable`

### 10. Service Failure Debugging Project

Intentionally break a `systemd` service by using:

- a wrong working directory
- a wrong executable path
- missing environment variables

Then recover it using:

- `systemctl status`
- `journalctl -u`

### 11. Nginx Reverse Proxy on Linux

Install Nginx and proxy traffic to a local app.
Practice:

- config edits
- syntax testing
- service restarts
- log reading

This is one of the most real-world Linux + DevOps projects you can do.

### 12. DNS and Connectivity Debug Project

Pick a real or test domain and inspect it using:

- `dig`
- `nslookup`
- `ping`
- `curl`
- `ss`

Goal:
separate DNS problems from service problems.

### 13. Firewall and Port Access Lab

Use a Linux VM or server and practice:

- checking open ports
- blocking and unblocking traffic
- confirming service reachability

Goal:
understand why “app is running” does not always mean “app is reachable.”

### 14. Disk Space Incident Simulation

Create a scenario where logs or test files fill a directory.
Then debug using:

- `df -h`
- `df -i`
- `du -sh`
- `find`

Goal:
learn how disk issues cause outages.

### 15. Mounts and Storage Project

Attach or simulate another disk and practice:

- `lsblk`
- `blkid`
- `mount`
- `/etc/fstab`

Goal:
understand how Linux handles persistent storage.

### 16. Memory and Load Investigation Lab

Run processes that consume memory or CPU, then inspect with:

- `top`
- `htop`
- `free -m`
- `vmstat`
- `uptime`

Goal:
build instinct around system pressure.

### 17. Cron Automation Project

Create scheduled jobs for:

- backups
- cleanup
- health checks

Make sure output goes to log files so you can debug failures.

### 18. Health Check Automation Script

Write a script that:

- pings or curls a local service
- exits non-zero on failure
- writes a useful log line

Goal:
build the kind of script that fits into monitoring or CI/CD.

### 19. Linux Deploy Script Project

Write a deployment script for a small app that:

- pulls latest code
- installs dependencies
- builds if needed
- restarts the service
- checks health

This is a powerful Linux-to-DevOps bridge project.

### 20. Full Linux Incident Response Drill

Create a broken environment where:

- a service is down
- disk is almost full
- a port conflict exists
- permissions are wrong

Then solve it step by step using Linux only.

This is one of the best projects for building real confidence.

---

## Best 5 To Start With

If you want the highest learning value first, start with:

1. Permission Denied Debug Lab
2. Build a Systemd Service
3. Nginx Reverse Proxy on Linux
4. Disk Space Incident Simulation
5. Linux Deploy Script Project

These five will make you much stronger in real Linux troubleshooting.

---

## Suggested Learning Order

If you want a progression from beginner to more operational:

1. Linux File System Lab
2. File Search Challenge
3. Log Analysis Mini Project
4. User and Group Management Lab
5. Permission Denied Debug Lab
6. Process Monitoring Lab
7. Build a Systemd Service
8. Service Failure Debugging Project
9. Nginx Reverse Proxy on Linux
10. DNS and Connectivity Debug Project
11. Firewall and Port Access Lab
12. Disk Space Incident Simulation
13. Mounts and Storage Project
14. Memory and Load Investigation Lab
15. Backup and Archive Script
16. Cron Automation Project
17. Health Check Automation Script
18. Linux Deploy Script Project
19. Secure SSH Access Project
20. Full Linux Incident Response Drill

---

## Final Advice

The best way to improve in Linux is not by memorizing commands.

It is by repeatedly practicing:

- inspection
- debugging
- permissions
- logs
- services
- ports
- scripting
- recovery

If you complete even 8 to 10 of these projects seriously, your Linux confidence for DevOps work will rise a lot.
