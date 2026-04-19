// =============================================================================
// 🧠 DEVOPS
// =============================================================================

// -----------------------------------------------------------------------------
// ! WHAT IT IS
// -----------------------------------------------------------------------------
/*
 * DevOps is a set of practices, principles, and culture that combines
 * Software Development (Dev) and IT Operations (Ops).
 *
 * The goal:
 * - Deliver software faster
 * - With higher quality
 * - With reliability
 * - Through automation and collaboration
 *
 * DevOps is NOT:
 * - A job title
 * - A single tool
 * - Just CI/CD
 *
 * DevOps IS:
 * - A way of building, shipping, and running software continuously
 */

// * Core idea:
//   - Developers write code
//   - Operations keep systems stable
//   - DevOps removes the wall between them

// -----------------------------------------------------------------------------
// ? WHY IT EXISTS (PROBLEM IT SOLVES)
// -----------------------------------------------------------------------------
/*
 * Traditional software delivery problem:
 *
 * Dev team:
 * - "It works on my machine"
 * - Pushes code fast
 *
 * Ops team:
 * - "This will break production"
 * - Wants stability
 *
 * Result:
 * - Slow releases
 * - Manual deployments
 * - Blame culture
 * - Production outages
 *
 * DevOps philosophy:
 * “You build it, you run it, you improve it.”
 */

// -----------------------------------------------------------------------------
// * HIGH-LEVEL FLOW (MENTAL MODEL)
// -----------------------------------------------------------------------------
/*
 * Plan
 *   ↓
 * Code
 *   ↓
 * Build
 *   ↓
 * Test
 *   ↓
 * Release
 *   ↓
 * Deploy
 *   ↓
 * Monitor
 *   ↓
 * Feedback → back to Plan
 *
 * (This loop never stops)
 */

// -----------------------------------------------------------------------------
// ! CORE DEVOPS PILLARS
// -----------------------------------------------------------------------------

// 1️⃣ Culture
/*
 * - Collaboration over silos
 * - Shared ownership of production
 * - Blameless postmortems
 */

// 2️⃣ Automation
/*
 * - Automated builds
 * - Automated tests
 * - Automated deployments
 * - Automated infrastructure
 */

// 3️⃣ Continuous Improvement
/*
 * - Measure everything
 * - Monitor systems
 * - Learn from failures
 * - Iterate fast
 */

// 4️⃣ Reliability & Stability
/*
 * - Systems should be:
 *   - Repeatable
 *   - Predictable
 *   - Recoverable
 */

// -----------------------------------------------------------------------------
// ! DEVOPS VS AGILE (COMMON CONFUSION)
// -----------------------------------------------------------------------------
/*
 * Agile:
 * - Focuses on HOW software is developed
 * - Iterative development
 * - Sprint-based delivery
 *
 * DevOps:
 * - Focuses on HOW software is delivered and operated
 * - Deployment
 * - Infrastructure
 * - Monitoring
 *
 * Relationship:
 * Agile → DevOps
 *
 * Agile without DevOps:
 * - Fast code
 * - Slow releases
 *
 * DevOps completes Agile.
 */

// -----------------------------------------------------------------------------
// ? WHAT DEVOPS AUTOMATES
// -----------------------------------------------------------------------------
/*
 * ❌ Manual world:
 * - SSH into server
 * - Copy files
 * - Restart services
 * - Pray nothing breaks
 *
 * ✅ DevOps world:
 * - Code push
 * - Pipeline runs
 * - Tests execute
 * - App deploys automatically
 * - Monitoring alerts if something fails
 */

// -----------------------------------------------------------------------------
// ! CI/CD (CORE DEVOPS CONCEPT)
// -----------------------------------------------------------------------------

// CI — Continuous Integration
/*
 * - Developers push code frequently
 * - Code is automatically:
 *   - Built
 *   - Tested
 * - Errors are caught early
 */

// CD — Continuous Delivery / Deployment
/*
 * Continuous Delivery:
 * - Code is always deployable
 * - Manual approval to deploy
 *
 * Continuous Deployment:
 * - Every successful change goes to production automatically
 */

// -----------------------------------------------------------------------------
// ? INFRASTRUCTURE AS CODE (IaC)
// -----------------------------------------------------------------------------
/*
 * Infrastructure is defined using code instead of manual setup.
 *
 * Example:
 * - Servers
 * - Networks
 * - Load balancers
 * - Databases
 *
 * Benefits:
 * - Version control
 * - Reproducibility
 * - No "snowflake servers"
 */

// -----------------------------------------------------------------------------
// ! MONITORING & FEEDBACK LOOP
// -----------------------------------------------------------------------------
/*
 * DevOps doesn’t end at deployment.
 *
 * You must observe:
 * - Logs
 * - Metrics
 * - Errors
 * - Performance
 *
 * Purpose:
 * - Detect issues early
 * - Improve system reliability
 * - Feed insights back to development
 */

// -----------------------------------------------------------------------------
// ? REAL-WORLD CONSEQUENCES OF NO DEVOPS
// -----------------------------------------------------------------------------
/*
 * - Downtime during deployments
 * - Rollbacks take hours
 * - Fear of shipping changes
 * - Manual errors
 * - Burned-out engineers
 */

// -----------------------------------------------------------------------------
// * REAL-WORLD CONSEQUENCES OF GOOD DEVOPS
// -----------------------------------------------------------------------------
/*
 * - Fast, safe releases
 * - Predictable deployments
 * - Quick recovery from failures
 * - Happier dev & ops teams
 * - Scalable systems
 */

// -----------------------------------------------------------------------------
// ! DEVOPS IS NOT ABOUT TOOLS (BUT TOOLS HELP)
// -----------------------------------------------------------------------------
/*
 * Tools support DevOps, but tools ≠ DevOps.
 *
 * Examples:
 * - Git
 * - CI/CD pipelines
 * - Containers
 * - Cloud platforms
 *
 * Without the right mindset:
 * - You’re just using tools
 * - Not practicing DevOps
 */

// -----------------------------------------------------------------------------
// * ONE-LINE SENIOR SUMMARY
// -----------------------------------------------------------------------------
/*
 * DevOps is a culture and set of practices that enable teams to build,
 * deliver, and operate software continuously, reliably, and at scale
 * through automation and collaboration.
 */
