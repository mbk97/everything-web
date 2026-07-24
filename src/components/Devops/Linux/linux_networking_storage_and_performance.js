// =============================================================================
// 🐧 LINUX NETWORKING, STORAGE, MEMORY, AND PERFORMANCE
// =============================================================================


// -----------------------------------------------------------------------------
// ! WHY THIS MATTERS
// -----------------------------------------------------------------------------
/*
 * Many outages are not "code bugs".
 *
 * They are:
 * - DNS issues
 * - port issues
 * - firewall issues
 * - disk full
 * - memory exhaustion
 * - bad routing
 *
 * This is where Linux troubleshooting becomes real infrastructure work.
 */


// -----------------------------------------------------------------------------
// ! NETWORKING MENTAL MODEL
// -----------------------------------------------------------------------------
/*
 * For a service to work,
 * several things must line up:
 *
 * - interface exists
 * - machine has an IP
 * - port is listening
 * - firewall allows traffic
 * - DNS resolves correctly
 * - service responds correctly
 *
 * If one layer fails,
 * the app may appear "down".
 */


// -----------------------------------------------------------------------------
// ! INTERFACES AND IP ADDRESSES
// -----------------------------------------------------------------------------
/*
 * ip addr
 * ip a
 * hostname -I
 * ip link
 *
 * These help you answer:
 * - What IP does this machine have?
 * - Which interfaces exist?
 * - Is network interface up?
 */


// -----------------------------------------------------------------------------
// ! ROUTING
// -----------------------------------------------------------------------------
/*
 * ip route
 * route -n
 *
 * Routing tells Linux:
 * where to send packets.
 *
 * If internet or internal communication fails,
 * route issues may be involved.
 */


// -----------------------------------------------------------------------------
// ! DNS DEBUGGING
// -----------------------------------------------------------------------------
/*
 * dig api.example.com
 * nslookup api.example.com
 * host api.example.com
 *
 * These help you check:
 * - Does domain resolve?
 * - What IP does it resolve to?
 * - Is DNS returning stale or wrong values?
 *
 * Production habit:
 * Always separate "DNS problem" from "app problem".
 */


// -----------------------------------------------------------------------------
// ! CONNECTIVITY TESTING
// -----------------------------------------------------------------------------
/*
 * ping 8.8.8.8
 * ping google.com
 * curl http://localhost:3000
 * curl -I https://example.com
 * wget https://example.com/file.zip
 * traceroute example.com
 *
 * Good thinking:
 * - ping tests reachability
 * - curl tests application response
 * - traceroute helps inspect path
 */


// -----------------------------------------------------------------------------
// ! PORTS AND SOCKETS
// -----------------------------------------------------------------------------
/*
 * ss -tulnp
 * netstat -tulnp
 * lsof -i :80
 * lsof -i :3000
 * nc -zv localhost 3000
 *
 * These answer:
 * - Is anything listening?
 * - On which port?
 * - Which process owns that port?
 *
 * Very common issue:
 * App is healthy,
 * but not listening where you think.
 */


// -----------------------------------------------------------------------------
// ! FIREWALL AWARENESS
// -----------------------------------------------------------------------------
/*
 * Common tools:
 * ufw
 * iptables
 * firewalld
 *
 * Examples:
 * ufw status
 * firewall-cmd --list-all
 *
 * Important:
 * Cloud firewalls and Linux firewalls are different layers.
 *
 * Example:
 * AWS Security Group may allow traffic,
 * but local firewall may still block it.
 */


// -----------------------------------------------------------------------------
// ! COMMON NETWORK FAILURE FLOW
// -----------------------------------------------------------------------------
/*
 * App unreachable?
 *
 * 1. dig domain.com
 * 2. ping server IP
 * 3. ss -tulnp
 * 4. curl localhost:app-port
 * 5. check reverse proxy
 * 6. check firewall
 *
 * This prevents random guessing.
 */


// -----------------------------------------------------------------------------
// ! DISK AND STORAGE BASICS
// -----------------------------------------------------------------------------
/*
 * df -h
 * df -i
 * du -sh /var/log
 * du -sh *
 * lsblk
 * blkid
 *
 * df -h → filesystem usage
 * df -i → inode usage
 * du -sh → folder/file size
 * lsblk → block devices
 * blkid → device identifiers/filesystem metadata
 */


// -----------------------------------------------------------------------------
// ! MOUNTS AND FSTAB
// -----------------------------------------------------------------------------
/*
 * mount
 * mount | grep sdb
 * umount /mnt/data
 *
 * Important config:
 * /etc/fstab
 *
 * Why this matters:
 * Linux may mount extra disks, volumes, or network storage.
 * If mount config breaks,
 * boot or data access can break too.
 */


// -----------------------------------------------------------------------------
// ! MEMORY AND SWAP
// -----------------------------------------------------------------------------
/*
 * free -m
 * vmstat 1
 *
 * Memory matters because:
 * - low memory can slow system badly
 * - OOM killer may terminate processes
 * - swap can help or hurt depending on workload
 *
 * Example question:
 * "Did the app crash because memory ran out?"
 */


// -----------------------------------------------------------------------------
// ! CPU AND LOAD
// -----------------------------------------------------------------------------
/*
 * top
 * htop
 * uptime
 * vmstat 1
 *
 * uptime shows load average.
 *
 * Load average is NOT exactly the same as CPU percentage.
 * It represents how much work is waiting or running.
 *
 * High load can indicate:
 * - CPU saturation
 * - I/O wait
 * - blocked processes
 */


// -----------------------------------------------------------------------------
// ! KERNEL MESSAGES
// -----------------------------------------------------------------------------
/*
 * dmesg
 * dmesg | tail
 *
 * Use cases:
 * - disk errors
 * - kernel warnings
 * - OOM events
 * - device issues
 *
 * If the system itself is unstable,
 * dmesg becomes very important.
 */


// -----------------------------------------------------------------------------
// ! DISK-FULL INCIDENT
// -----------------------------------------------------------------------------
/*
 * Good flow:
 * 1. df -h
 * 2. df -i
 * 3. du -sh /var/log/*
 * 4. inspect large files
 * 5. rotate/compress/remove safely
 *
 * Why apps crash:
 * - cannot write logs
 * - cannot write temp files
 * - database cannot write data
 */


// -----------------------------------------------------------------------------
// ! MEMORY-LEAK INCIDENT
// -----------------------------------------------------------------------------
/*
 * Good flow:
 * 1. free -m
 * 2. top or htop
 * 3. identify growing process
 * 4. inspect logs
 * 5. restart if needed
 * 6. fix root cause later
 *
 * Linux helps you stabilize first,
 * then investigate deeper.
 */


// -----------------------------------------------------------------------------
// ! NETWORK + REVERSE PROXY INCIDENT
// -----------------------------------------------------------------------------
/*
 * Nginx returns 502?
 *
 * Check:
 * - backend process running?
 * - backend port listening?
 * - curl localhost:backend-port works?
 * - firewall okay?
 * - nginx upstream config correct?
 *
 * This is classic Linux + DevOps troubleshooting.
 */


// -----------------------------------------------------------------------------
// ! SENIOR-LEVEL SUMMARY
// -----------------------------------------------------------------------------
/*
 * Production Linux troubleshooting often comes down to:
 * - network
 * - disk
 * - memory
 * - load
 * - kernel signals
 *
 * Strong engineers do not only ask:
 * "Is the app code correct?"
 *
 * They ask:
 * "Is the machine itself healthy?"
 */
