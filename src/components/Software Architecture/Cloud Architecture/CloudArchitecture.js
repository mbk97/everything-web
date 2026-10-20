// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE-SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// PHASE 9 → CLOUD ARCHITECTURE
//
// Goal:
//
// Learn how cloud regions, availability zones, compute, networking, managed data,
// recovery, automation, and cost fit into one production architecture.
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Beginner thinks:
 *
 * "The cloud is somebody else's computer."
 *
 * Senior Engineer thinks:
 *
 * "The cloud provides programmable infrastructure and managed services."
 *
 * Architect thinks:
 *
 * "How do I use those services without losing control of reliability, security,
 * portability, or cost?"
 */

// -----------------------------------------------------------------------------
// ☁️ WHAT CLOUD CHANGES
// -----------------------------------------------------------------------------

/*
 * Traditional infrastructure:
 *
 * Buy hardware → wait → install → configure → deploy
 *
 * Cloud infrastructure:
 *
 * Declare resources → create by API → deploy → measure → change
 *
 * Cloud does not remove architecture problems.
 * It makes infrastructure faster to provision and easier to automate.
 */

// -----------------------------------------------------------------------------
// 🤝 SHARED RESPONSIBILITY
// -----------------------------------------------------------------------------

/*
 * Cloud provider commonly protects:
 *
 * Physical data centers
 * Hardware
 * The managed service platform
 *
 * Customer commonly protects:
 *
 * Identities and permissions
 * Application code
 * Data classification
 * Network configuration
 * Secrets
 * Backups and recovery choices
 * Operating-system patches when using virtual machines
 *
 * "Hosted in the cloud" does not mean "secure by default."
 */

// -----------------------------------------------------------------------------
// 🌍 REGIONS AND AVAILABILITY ZONES
// -----------------------------------------------------------------------------

/*
 * Region
 *
 * ├── Availability Zone A
 * ├── Availability Zone B
 * └── Availability Zone C
 *
 * A region is a geographic area.
 * An availability zone is an isolated failure domain inside a region.
 *
 * Deploying every instance in one zone leaves one shared point of failure.
 * A highly available regional system spreads critical capacity across zones.
 *
 * Multiple regions can improve disaster recovery and global latency, but they add
 * major data-consistency, routing, testing, and cost decisions.
 */

// -----------------------------------------------------------------------------
// 🧱 CORE CLOUD BUILDING BLOCKS
// -----------------------------------------------------------------------------

/*
 * Networking   → virtual network, subnets, routes, firewall rules, DNS
 * Edge         → CDN, DDoS protection, web application firewall
 * Compute      → virtual machines, containers, serverless functions
 * Data         → relational DB, NoSQL, object storage, cache, search
 * Integration  → queues, event buses, workflow engines
 * Operations   → logs, metrics, traces, alerts, configuration
 * Security     → identity, key management, secret management, audit
 */

// -----------------------------------------------------------------------------
// 🖥️ CHOOSING COMPUTE
// -----------------------------------------------------------------------------

/*
 * Virtual machines
 *
 * ✔ Maximum operating-system control
 * ❌ More patching and capacity management
 *
 * Containers
 *
 * ✔ Portable packaging and efficient service deployment
 * ❌ Orchestration adds complexity
 *
 * Serverless functions
 *
 * ✔ Scale on demand and minimal server management
 * ❌ Runtime limits, cold starts, and provider constraints
 *
 * Managed application platforms
 *
 * ✔ Simple deployment with fewer infrastructure choices
 * ❌ Less control and possible platform coupling
 *
 * Choose the simplest model that satisfies the workload and team constraints.
 */

// -----------------------------------------------------------------------------
// 🕸️ PUBLIC AND PRIVATE NETWORKING
// -----------------------------------------------------------------------------

/*
 * Internet
 *    │
 *    ▼
 * CDN / WAF
 *    │
 *    ▼
 * Public Load Balancer
 *    │
 *    ▼
 * Private Application Subnets
 *    │
 *    ▼
 * Private Data Subnets
 *
 * Only components that must receive public traffic should be publicly reachable.
 * Databases should normally accept connections only from approved application
 * identities and network paths.
 */

// -----------------------------------------------------------------------------
// 📦 MANAGED SERVICES
// -----------------------------------------------------------------------------

/*
 * Managed database services can provide:
 *
 * Automated backups
 * Patching
 * Replication
 * Monitoring integration
 * Failover automation
 *
 * This reduces undifferentiated operational work.
 *
 * Tradeoffs:
 *
 * Cost at scale
 * Service limits
 * Provider-specific behavior
 * Migration difficulty
 * Reduced low-level control
 *
 * Managed does not mean maintenance-free. Capacity, schema, indexes, recovery,
 * permissions, and cost still belong to the engineering team.
 */

// -----------------------------------------------------------------------------
// ❤️ HIGH AVAILABILITY
// -----------------------------------------------------------------------------

/*
 * Multi-zone reference:
 *
 * Load Balancer
 *      │
 *      ├────► Zone A: App Instances
 *      └────► Zone B: App Instances
 *                    │
 *                    ▼
 *              Primary Database
 *                    │ synchronous or managed replication
 *                    ▼
 *              Standby in Another Zone
 *
 * Add health checks, automatic replacement, and tested failover.
 * A diagram with two zones is not resilient until recovery actually works.
 */

// -----------------------------------------------------------------------------
// 🧯 DISASTER RECOVERY
// -----------------------------------------------------------------------------

/*
 * RPO — Recovery Point Objective
 *
 * How much data loss can the business tolerate?
 *
 * RTO — Recovery Time Objective
 *
 * How long can the system remain unavailable?
 *
 * Strategies, from simpler to more expensive:
 *
 * Backup and restore
 * Pilot light
 * Warm standby
 * Active-active regions
 *
 * The correct strategy follows business RPO and RTO, not prestige.
 * Backups must be encrypted, retained correctly, and restored in regular drills.
 */

// -----------------------------------------------------------------------------
// 📝 INFRASTRUCTURE AS CODE
// -----------------------------------------------------------------------------

/*
 * Infrastructure as Code (IaC) stores desired infrastructure in versioned files.
 *
 * Benefits:
 *
 * ✔ Repeatable environments
 * ✔ Peer review
 * ✔ Change history
 * ✔ Automated policy checks
 * ✔ Faster recovery
 *
 * Avoid manual production changes that cannot be reproduced.
 * Detect configuration drift and keep credentials outside the IaC source.
 */

// -----------------------------------------------------------------------------
// 🚀 SAFE DELIVERY
// -----------------------------------------------------------------------------

/*
 * Rolling deployment  → replace instances gradually
 * Blue/green           → switch traffic between old and new environments
 * Canary               → send a small percentage of traffic to the new version
 * Feature flag         → separate code deployment from feature release
 *
 * A safe release has:
 *
 * Health signals
 * Automated rollback criteria
 * Backward-compatible database changes
 * Gradual exposure
 * Clear ownership
 */

// -----------------------------------------------------------------------------
// 💰 COST IS AN ARCHITECTURE ATTRIBUTE
// -----------------------------------------------------------------------------

/*
 * Major cost drivers:
 *
 * Always-on compute
 * Oversized databases
 * Stored logs and backups
 * Cross-zone and cross-region data transfer
 * Internet egress
 * Idle test environments
 * High-cardinality monitoring data
 *
 * Practices:
 *
 * Right-size resources
 * Autoscale within safe limits
 * Use storage lifecycle rules
 * Set budgets and cost alerts
 * Tag resources by owner and product
 * Review unit cost, such as cost per 1,000 orders
 */

// -----------------------------------------------------------------------------
// 🏦 BANKING REFERENCE ARCHITECTURE
// -----------------------------------------------------------------------------

/*
 * Users
 *    │
 *    ▼
 * DNS ──► CDN / WAF
 *             │
 *             ▼
 *       Public Load Balancer
 *             │
 *       ┌─────┴─────┐
 *       ▼           ▼
 * Zone A Apps   Zone B Apps
 *       └─────┬─────┘
 *             │
 *       API Gateway
 *             │
 *       ┌─────┼──────────┐
 *       ▼     ▼          ▼
 *     Cache  Queue   Managed Database
 *                          │
 *                       Standby
 *
 * Cross-cutting controls:
 *
 * Identity, secrets, encryption, audit logs, metrics, traces, backups, IaC,
 * vulnerability management, budgets, and recovery drills.
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * Ask:
 *
 * What is the smallest useful failure domain?
 * Which resources must be private?
 * What are the RPO and RTO?
 * Which managed service reduces real operational work?
 * What would make migration difficult?
 * What is the cost per business transaction?
 *
 * Cloud architecture balances speed, control, resilience, security, and cost.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 * Draw a two-zone web architecture with no single application-server failure.
 *
 * TASK 2
 * Choose VM, container, or serverless compute for three different workloads.
 *
 * TASK 3
 * Define RPO and RTO for a blog and a bank ledger.
 *
 * TASK 4
 * Identify every public and private component in the reference architecture.
 *
 * TASK 5
 * Find five cost drivers and propose a safe optimization for each.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * ✔ Cloud infrastructure is programmable, not automatically well-architected
 * ✔ Regions and zones are different failure domains
 * ✔ Compute models trade control for operational simplicity
 * ✔ Public access should stop at the edge and entry layer
 * ✔ High availability and disaster recovery solve different problems
 * ✔ RPO and RTO define recovery requirements
 * ✔ IaC and safe deployment patterns make change repeatable
 * ✔ Cost is a first-class architecture attribute
 *
 * BIG IDEA
 *
 * The cloud gives you building blocks; architecture determines how safely and
 * economically those blocks work together.
 */
