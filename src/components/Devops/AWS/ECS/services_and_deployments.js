// =============================================================================
// ECS SERVICES AND DEPLOYMENTS
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - TASK DEFINITIONS
// -----------------------------------------------------------------------------
/*
 * A task definition is the blueprint for how a containerized workload runs.
 *
 * It includes things like:
 * - image
 * - CPU and memory
 * - environment variables
 * - port mappings
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - SERVICES
// -----------------------------------------------------------------------------
/*
 * A service keeps the desired number of tasks running.
 *
 * This is similar in spirit to the idea of desired state
 * in other orchestration systems.
 *
 * If a task fails,
 * the service tries to bring the count back.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - DEPLOYMENTS
// -----------------------------------------------------------------------------
/*
 * Deployments replace old tasks with new ones.
 *
 * This is how new container versions get rolled out.
 *
 * Strong deployment thinking includes:
 * - health checks
 * - load balancer integration
 * - rollback awareness
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - WHY THIS MATTERS
// -----------------------------------------------------------------------------
/*
 * This is a strong next step
 * after basic Docker plus EC2 deployments.
 *
 * It teaches you managed container operations
 * without requiring you to jump directly into Kubernetes complexity.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - LOAD BALANCER INTEGRATION
// -----------------------------------------------------------------------------
/*
 * ECS services often work with a load balancer.
 *
 * That gives:
 * - stable traffic entry
 * - health-based routing
 * - safer rolling changes
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - DEPLOYMENT RISK THINKING
// -----------------------------------------------------------------------------
/*
 * Good ECS deployment thinking includes:
 * - verifying new image version
 * - checking health behavior
 * - watching logs and metrics
 * - being ready to roll back
 *
 * Container orchestration still needs operational discipline.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Task definitions describe how containers run.
 * Services keep them running.
 * Deployments update them safely.
 *
 * That is the operational core of ECS.
 */
