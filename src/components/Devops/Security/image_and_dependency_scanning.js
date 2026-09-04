// =============================================================================
// IMAGE AND DEPENDENCY SCANNING
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHY SCANNING EXISTS
// -----------------------------------------------------------------------------
/*
 * Modern applications depend on many external packages and base images.
 *
 * That means vulnerabilities can enter your system
 * even if your own app code looks clean.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHAT TO SCAN
// -----------------------------------------------------------------------------
/*
 * Secure pipelines should scan:
 * - application dependencies
 * - container base images
 * - known CVEs
 * - outdated packages with security implications
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - WHY CONTAINER IMAGES MATTER
// -----------------------------------------------------------------------------
/*
 * If your container image starts from a vulnerable base,
 * your deployment may already be risky before your app even boots.
 *
 * So image hygiene matters.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - PIPELINE THINKING
// -----------------------------------------------------------------------------
/*
 * Security scanning works best when part of CI/CD.
 *
 * Example flow:
 * - code push
 * - dependency install
 * - tests
 * - security scan
 * - image build
 * - image scan
 * - deploy if safe enough
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - PRACTICAL MINDSET
// -----------------------------------------------------------------------------
/*
 * Faster shipping is good,
 * but shipping vulnerable software faster is not.
 *
 * DevOps speed is only valuable when it stays trustworthy.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - SEVERITY AND TRIAGE
// -----------------------------------------------------------------------------
/*
 * Not every finding has the same urgency.
 *
 * Good teams learn to triage by:
 * - severity
 * - exploitability
 * - production exposure
 * - patch availability
 *
 * This keeps scanning from becoming noisy theater.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - BASE IMAGE DISCIPLINE
// -----------------------------------------------------------------------------
/*
 * A practical habit is to keep base images:
 * - minimal
 * - updated
 * - intentionally chosen
 *
 * Large outdated base images often increase risk surface.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - WHAT SCANNING DOES NOT REPLACE
// -----------------------------------------------------------------------------
/*
 * Scanning helps a lot,
 * but it does not replace:
 * - secure coding
 * - IAM discipline
 * - secret management
 * - runtime monitoring
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Dependency and image scanning help catch known risks early.
 *
 * They are one of the easiest high-value improvements
 * for modern delivery pipelines.
 */
