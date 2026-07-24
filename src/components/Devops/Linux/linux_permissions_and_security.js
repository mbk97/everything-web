// =============================================================================
// 🐧 LINUX PERMISSIONS, USERS, GROUPS, AND SECURITY
// =============================================================================


// -----------------------------------------------------------------------------
// ! WHY THIS MATTERS
// -----------------------------------------------------------------------------
/*
 * One of the most common production errors is:
 * "Permission denied"
 *
 * That can come from:
 * - wrong file owner
 * - wrong group
 * - wrong execute bit
 * - wrong SSH key permissions
 * - root-only directory access
 *
 * Strong Linux engineers do not just read permissions.
 * They understand WHY access fails.
 */


// -----------------------------------------------------------------------------
// ! THE PERMISSION MODEL
// -----------------------------------------------------------------------------
/*
 * Linux permission model usually means:
 * - Owner
 * - Group
 * - Others
 *
 * Example:
 * -rwxr-x---
 *
 * Breakdown:
 * Owner  → rwx
 * Group  → r-x
 * Others → ---
 *
 * r = read
 * w = write
 * x = execute
 */


// -----------------------------------------------------------------------------
// ! FILE PERMISSIONS VS DIRECTORY PERMISSIONS
// -----------------------------------------------------------------------------
/*
 * File permissions:
 * r → can read file contents
 * w → can modify file contents
 * x → can run file as program/script
 *
 * Directory permissions:
 * r → can list names inside directory
 * w → can create/delete/rename entries inside directory
 * x → can enter directory (cd into it)
 *
 * Important:
 * Directory permissions behave differently from file permissions.
 * This confuses many beginners in production.
 */


// -----------------------------------------------------------------------------
// ! NUMERIC CHMOD
// -----------------------------------------------------------------------------
/*
 * Numeric values:
 * r = 4
 * w = 2
 * x = 1
 *
 * Examples:
 * chmod 755 script.sh
 * chmod 644 .env.example
 * chmod 600 .env
 * chmod 400 key.pem
 *
 * Meaning:
 * 7 = rwx
 * 6 = rw-
 * 5 = r-x
 * 4 = r--
 */


// -----------------------------------------------------------------------------
// ! SYMBOLIC CHMOD
// -----------------------------------------------------------------------------
/*
 * chmod +x deploy.sh
 * chmod u+x deploy.sh
 * chmod g-w file.txt
 * chmod o-r secret.txt
 *
 * Symbols:
 * u = user
 * g = group
 * o = others
 * a = all
 *
 * This is useful when you want to change
 * only one part of a permission set.
 */


// -----------------------------------------------------------------------------
// ! CHOWN AND CHGRP
// -----------------------------------------------------------------------------
/*
 * chown mubarak app.log
 * chown mubarak:devops app.log
 * chgrp nginx /var/www/html
 * chown -R ubuntu:ubuntu project/
 *
 * chown changes:
 * - owner
 * - optionally group
 *
 * chgrp changes:
 * - group only
 *
 * Many deployments fail because files were created
 * by root but the app runs as another user.
 */


// -----------------------------------------------------------------------------
// ! CHECKING WHO YOU REALLY ARE
// -----------------------------------------------------------------------------
/*
 * whoami
 * id
 * groups
 *
 * Useful output:
 * - username
 * - uid
 * - gid
 * - supplementary groups
 *
 * Production lesson:
 * "I ran the command" is not enough.
 * WHICH user ran it matters.
 */


// -----------------------------------------------------------------------------
// ! IMPORTANT SYSTEM FILES
// -----------------------------------------------------------------------------
/*
 * /etc/passwd → user account definitions
 * /etc/group  → group definitions
 * /etc/shadow → password hashes (restricted)
 * /etc/sudoers → sudo policy
 *
 * You do not edit these carelessly.
 * You understand what they are
 * because Linux user management depends on them.
 */


// -----------------------------------------------------------------------------
// ! USER AND GROUP MANAGEMENT
// -----------------------------------------------------------------------------
/*
 * useradd username
 * adduser username
 * passwd username
 * usermod -aG sudo username
 * usermod -aG wheel username
 * groupadd devops
 *
 * Note:
 * sudo group is common on Ubuntu/Debian
 * wheel group is common on RHEL/CentOS/Amazon Linux
 *
 * Always know your distro conventions.
 */


// -----------------------------------------------------------------------------
// ! UMASK (DEFAULT PERMISSION CONTROL)
// -----------------------------------------------------------------------------
/*
 * umask
 * umask 022
 * umask 027
 *
 * umask affects default permissions for NEW files and directories.
 *
 * Rough idea:
 * Lower openness = safer defaults
 *
 * In team environments,
 * bad umask settings can create files
 * that other services cannot read.
 */


// -----------------------------------------------------------------------------
// ! SPECIAL PERMISSION BITS
// -----------------------------------------------------------------------------
/*
 * Sticky bit:
 * chmod +t /shared-folder
 *
 * Common on:
 * /tmp
 *
 * Meaning:
 * Users can create files there,
 * but cannot delete each other's files casually.
 *
 * setuid:
 * chmod u+s file
 *
 * setgid:
 * chmod g+s dir
 *
 * These are more advanced and must be used carefully.
 */


// -----------------------------------------------------------------------------
// ! SUDO AND LEAST PRIVILEGE
// -----------------------------------------------------------------------------
/*
 * sudo command
 * sudo -u nginx command
 * visudo
 *
 * Best practice:
 * - Use sudo only when required
 * - Do not stay root for no reason
 * - Give the smallest required privilege
 *
 * Root can do almost anything.
 * That power is useful,
 * but also dangerous.
 */


// -----------------------------------------------------------------------------
// ! SSH KEY SECURITY
// -----------------------------------------------------------------------------
/*
 * chmod 400 key.pem
 * chmod 700 ~/.ssh
 * chmod 600 ~/.ssh/id_rsa
 * chmod 600 ~/.ssh/authorized_keys
 *
 * SSH is strict about permissions.
 *
 * If permissions are too open:
 * - SSH may reject the key
 * - access may fail
 *
 * This is a VERY common cloud-server issue.
 */


// -----------------------------------------------------------------------------
// ! SSH HARDENING BASICS
// -----------------------------------------------------------------------------
/*
 * Production security ideas:
 * - Prefer SSH keys over passwords
 * - Disable root login where appropriate
 * - Limit who can SSH
 * - Rotate keys when needed
 * - Remove unused users quickly
 *
 * Example config area:
 * /etc/ssh/sshd_config
 *
 * Common settings you should understand:
 * PermitRootLogin
 * PasswordAuthentication
 * PubkeyAuthentication
 */


// -----------------------------------------------------------------------------
// ! SECRETS AND FILE SAFETY
// -----------------------------------------------------------------------------
/*
 * Sensitive files:
 * - .env
 * - private keys
 * - service credentials
 * - backup dumps
 *
 * Safer patterns:
 * chmod 600 .env
 * chown appuser:appgroup .env
 *
 * Never leave secrets readable by everyone.
 */


// -----------------------------------------------------------------------------
// ! SELINUX / APPARMOR AWARENESS
// -----------------------------------------------------------------------------
/*
 * Even when normal permissions look correct,
 * security layers may still block access.
 *
 * Examples:
 * - SELinux
 * - AppArmor
 *
 * Beginner lesson:
 * If owner and chmod look correct
 * but access STILL fails,
 * there may be another security layer involved.
 */


// -----------------------------------------------------------------------------
// ! COMMON PRODUCTION PERMISSION INCIDENTS
// -----------------------------------------------------------------------------
/*
 * 1. Node app cannot read .env
 * - wrong owner
 * - wrong chmod
 *
 * 2. Nginx cannot serve file
 * - parent directory lacks execute permission
 * - wrong file ownership
 *
 * 3. Deploy script will not run
 * - missing execute bit
 * - wrong shebang
 *
 * 4. SSH key rejected
 * - key file too open
 *
 * 5. Docker mounted volume fails
 * - host permissions do not match container user
 */


// -----------------------------------------------------------------------------
// ! DEBUG FLOW FOR "PERMISSION DENIED"
// -----------------------------------------------------------------------------
/*
 * Good flow:
 * 1. whoami
 * 2. id
 * 3. ls -la target-file
 * 4. ls -ld parent-directory
 * 5. check owner/group
 * 6. check execute bit on directories
 * 7. fix with chmod/chown carefully
 *
 * This is one of the most useful Linux incident flows to master.
 */


// -----------------------------------------------------------------------------
// ! SENIOR-LEVEL SUMMARY
// -----------------------------------------------------------------------------
/*
 * Linux security starts with:
 * - ownership
 * - permissions
 * - groups
 * - sudo discipline
 * - safe SSH access
 *
 * Good engineers do not solve everything with chmod 777.
 *
 * They solve access problems by understanding
 * the permission model properly.
 */
