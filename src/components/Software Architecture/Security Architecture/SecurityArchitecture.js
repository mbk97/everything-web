// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE-SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// PHASE 10 → SECURITY ARCHITECTURE
//
// Goal:
//
// Learn how to identify threats, protect identities and data, reduce blast radius,
// and make security part of every architecture decision.
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Beginner thinks:
 *
 * "Security means adding login."
 *
 * Senior Engineer thinks:
 *
 * "Every input, identity, dependency, and boundary may be attacked."
 *
 * Architect thinks:
 *
 * "How do we prevent, detect, contain, and recover from compromise?"
 */

// -----------------------------------------------------------------------------
// 🔺 CONFIDENTIALITY, INTEGRITY, AVAILABILITY
// -----------------------------------------------------------------------------

/*
 * Confidentiality → only authorized parties can read data
 * Integrity       → data and actions cannot be changed improperly
 * Availability    → authorized users can use the system when needed
 *
 * Banking examples:
 *
 * Leaked statements       → confidentiality failure
 * Altered transfer amount → integrity failure
 * Payment API outage      → availability failure
 *
 * Security architecture must protect all three.
 */

// -----------------------------------------------------------------------------
// 🗺️ THREAT MODELING
// -----------------------------------------------------------------------------

/*
 * Threat modeling asks what can go wrong before implementation is complete.
 *
 * 1. Draw components, data stores, actors, and trust boundaries
 * 2. Identify valuable assets
 * 3. Identify likely attackers and abuse cases
 * 4. Add controls
 * 5. Record remaining risk
 *
 * Trust boundary example:
 *
 * Public Internet
 *      │ untrusted
 *      ▼
 * API Gateway
 *      │ authenticated boundary
 *      ▼
 * Private Services ──► Sensitive Database
 *
 * Data crossing a boundary deserves explicit validation and authorization.
 */

// -----------------------------------------------------------------------------
// 🪪 AUTHENTICATION VS AUTHORIZATION
// -----------------------------------------------------------------------------

/*
 * Authentication asks:
 *
 * "Who are you?"
 *
 * Authorization asks:
 *
 * "What are you allowed to do to this resource?"
 *
 * A valid user token does not permit access to every account.
 *
 * GET /accounts/acc-42
 *
 * The service must verify both:
 *
 * ✔ The token represents a valid identity
 * ✔ That identity may read acc-42
 */

// -----------------------------------------------------------------------------
// 🔑 TOKENS AND SESSIONS
// -----------------------------------------------------------------------------

/*
 * A session or token represents an authenticated identity.
 *
 * Protect it with:
 *
 * Short, appropriate expiration
 * Secure storage
 * Signature and issuer validation
 * Audience validation
 * Key rotation
 * Revocation or session invalidation where required
 * Multi-factor authentication for sensitive journeys
 *
 * Never place passwords, private keys, or unnecessary personal data in tokens.
 */

// -----------------------------------------------------------------------------
// 🛂 LEAST PRIVILEGE
// -----------------------------------------------------------------------------

/*
 * Give every human and machine only the permissions it needs.
 *
 * Notification Service:
 *
 * Needs    → read notification jobs, send messages
 * Does not → update balances, read card secrets, administer databases
 *
 * Use separate service identities.
 * Avoid one shared superuser credential for all applications.
 * Review and remove unused privileges.
 */

// -----------------------------------------------------------------------------
// 🏰 DEFENSE IN DEPTH
// -----------------------------------------------------------------------------

/*
 * Do not depend on one perfect control.
 *
 * Internet
 *    │
 * DDoS Protection
 *    │
 * Web Application Firewall
 *    │
 * API Gateway Authentication
 *    │
 * Service Authorization
 *    │
 * Database Permissions
 *    │
 * Encryption and Audit
 *
 * If one layer fails, another layer limits the damage.
 */

// -----------------------------------------------------------------------------
// 🔐 ENCRYPTION
// -----------------------------------------------------------------------------

/*
 * In transit → use TLS between clients and services
 * At rest    → encrypt databases, disks, objects, and backups
 *
 * Encryption depends on key management.
 *
 * Keys should be:
 *
 * Stored separately from encrypted data
 * Access-controlled
 * Rotated
 * Audited
 * Recoverable according to policy
 *
 * Encryption does not replace authorization. An authorized application can read
 * decrypted data, so application permissions still matter.
 */

// -----------------------------------------------------------------------------
// 🤫 SECRET MANAGEMENT
// -----------------------------------------------------------------------------

/*
 * Secrets include:
 *
 * Database passwords
 * API keys
 * Signing keys
 * Certificates
 *
 * Do not store them in:
 *
 * Source code
 * Git history
 * Container images
 * Plain log messages
 * Shared chat messages
 *
 * Use a secret manager, short-lived credentials where possible, rotation, and an
 * audit trail of who or what retrieved each secret.
 */

// -----------------------------------------------------------------------------
// 🧾 VALIDATE UNTRUSTED INPUT
// -----------------------------------------------------------------------------

/*
 * Treat input as untrusted until validated.
 *
 * Sources include:
 *
 * Browser requests
 * File uploads
 * Queue messages
 * Webhooks
 * Third-party APIs
 * Database content originating from users
 *
 * Controls include:
 *
 * Allow-list validation
 * Parameterized database queries
 * Output encoding
 * File type and size limits
 * Safe parsers
 * Request body limits
 * Server-side authorization
 */

// -----------------------------------------------------------------------------
// 🚦 ABUSE AND RATE LIMITING
// -----------------------------------------------------------------------------

/*
 * Rate limits protect both infrastructure and business workflows.
 *
 * Examples:
 *
 * Login attempts per identity and IP
 * Password-reset messages per account
 * Payments per merchant
 * Expensive report requests per customer
 *
 * Combine rate limiting with bot detection, lockout policies, fraud signals, and
 * monitoring. Ensure attackers cannot cheaply lock out legitimate users.
 */

// -----------------------------------------------------------------------------
// 🕸️ NETWORK SEGMENTATION
// -----------------------------------------------------------------------------

/*
 * Public subnet  → load balancer or controlled edge only
 * Private subnet → application services
 * Data subnet    → databases and caches
 *
 * Define explicit allowed paths:
 *
 * Internet        ──► Load Balancer
 * Load Balancer   ──► Application Port
 * Transfer Service──► Ledger Database Port
 *
 * A flat network gives a compromised service too much reach.
 */

// -----------------------------------------------------------------------------
// 📦 SOFTWARE SUPPLY CHAIN
// -----------------------------------------------------------------------------

/*
 * Applications inherit risk from dependencies and build systems.
 *
 * Practices:
 *
 * Pin and review dependencies
 * Scan source, packages, containers, and infrastructure definitions
 * Protect build credentials
 * Generate a software bill of materials
 * Sign and verify artifacts where practical
 * Patch according to severity and exposure
 * Remove unused packages and services
 *
 * A secure runtime cannot compensate for a compromised build artifact.
 */

// -----------------------------------------------------------------------------
// 🔭 AUDIT, DETECTION, AND RESPONSE
// -----------------------------------------------------------------------------

/*
 * Security logs should answer:
 *
 * Who performed the action?
 * What resource changed?
 * When and from where?
 * Was it allowed or denied?
 * What request and deployment produced it?
 *
 * Protect logs from tampering and restrict sensitive fields.
 *
 * Incident response needs:
 *
 * Alert ownership
 * Investigation playbooks
 * Credential-revocation procedures
 * Isolation and recovery steps
 * Communication paths
 * Post-incident learning
 */

// -----------------------------------------------------------------------------
// 🏦 SECURE TRANSFER FLOW
// -----------------------------------------------------------------------------

/*
 * Customer
 *    │ TLS + MFA
 *    ▼
 * WAF / API Gateway
 *    │ rate limit + token validation + request ID
 *    ▼
 * Transfer Service
 *    │ account-level authorization + input validation
 *    ▼
 * Ledger Database
 *    │ least-privilege identity + encryption + atomic write
 *    ▼
 * Tamper-resistant Audit Log
 *
 * Every boundary authenticates the caller, authorizes the action, validates the
 * input, and emits enough evidence to investigate misuse.
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * Ask:
 *
 * What are the most valuable assets?
 * Where are the trust boundaries?
 * What happens if this credential is stolen?
 * Can a compromised component reach unrelated data?
 * Will we detect abuse?
 * How will we rotate, isolate, and recover?
 *
 * Security is a continuous risk-management process, not a final checklist.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 * Draw the trust boundaries for an online banking login flow.
 *
 * TASK 2
 * Explain authentication and resource-level authorization with an example.
 *
 * TASK 3
 * Give each service in an online shop a least-privilege identity.
 *
 * TASK 4
 * Create a secret-rotation plan for a database credential.
 *
 * TASK 5
 * List the logs and alerts needed to investigate a suspicious transfer.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * ✔ Security protects confidentiality, integrity, and availability
 * ✔ Threat models expose risks at trust boundaries
 * ✔ Authentication and authorization solve different problems
 * ✔ Least privilege and segmentation reduce blast radius
 * ✔ Encryption requires disciplined key management
 * ✔ Input validation and rate limiting protect every entry point
 * ✔ Supply-chain controls protect what gets deployed
 * ✔ Audit and response capabilities limit the impact of inevitable incidents
 *
 * BIG IDEA
 *
 * Design systems assuming controls can fail, then make each failure difficult to
 * exploit, easy to detect, and possible to recover from.
 */
