// =============================================================================
// AWS ECS BASICS
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT ECS IS
// -----------------------------------------------------------------------------
/*
 * ECS stands for Elastic Container Service.
 *
 * It is AWS container orchestration.
 *
 * It lets you run Docker workloads
 * without managing Kubernetes directly.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHY ECS MATTERS
// -----------------------------------------------------------------------------
/*
 * If you already understand Docker,
 * ECS is a natural next step for AWS-native deployments.
 *
 * It helps you move from:
 * "I can run containers"
 * to
 * "I can operate containers as managed services in AWS."
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - MAIN CONCEPTS
// -----------------------------------------------------------------------------
/*
 * Main concepts:
 * - cluster
 * - task definition
 * - service
 * - launch type
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - LAUNCH TYPES
// -----------------------------------------------------------------------------
/*
 * A common distinction:
 * - EC2 launch type
 * - Fargate launch type
 *
 * EC2:
 * you manage the compute instances
 *
 * Fargate:
 * AWS manages the underlying compute more for you
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - WHY ECS IS USEFUL
// -----------------------------------------------------------------------------
/*
 * ECS is useful when you want:
 * - containerized deployment
 * - AWS integration
 * - scaling
 * - service management
 * - load balancer integration
 *
 * It can be simpler than Kubernetes
 * for teams staying mostly AWS-native.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - MENTAL MODEL
// -----------------------------------------------------------------------------
/*
 * A simple ECS mental model:
 *
 * cluster
 * -> where workloads live
 *
 * task definition
 * -> how the container should run
 *
 * service
 * -> keep the workload running
 *
 * load balancer
 * -> route traffic to it
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - WHEN TO CHOOSE ECS
// -----------------------------------------------------------------------------
/*
 * ECS is a strong fit when:
 * - you already use AWS heavily
 * - you want managed container operations
 * - Kubernetes would be more complexity than you need right now
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * ECS is one of the strongest bridges
 * between Docker knowledge and production container operations on AWS.
 */
