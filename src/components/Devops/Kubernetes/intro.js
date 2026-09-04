// =============================================================================
// KUBERNETES COMPLETE GUIDE (ZERO -> PRODUCTION UNDERSTANDING)
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT KUBERNETES IS
// -----------------------------------------------------------------------------
/*
 * Kubernetes, often called K8s, is a container orchestration platform.
 *
 * It does NOT replace Docker's job of packaging applications.
 *
 * Instead, it solves the next problem:
 *
 * "Now that I have containers, how do I run many of them reliably
 * across real servers in production?"
 *
 * Think:
 *
 * Docker = package and run container
 * Kubernetes = manage containerized apps at scale
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - THE PROBLEM KUBERNETES SOLVES
// -----------------------------------------------------------------------------
/*
 * Docker alone is great for:
 * - local development
 * - one machine deployments
 * - simple containerized apps
 *
 * But production systems quickly become harder:
 *
 * - What if one container crashes?
 * - What if traffic increases?
 * - What if one server fails?
 * - How do you update 10 replicas safely?
 * - How do services find each other?
 *
 * Kubernetes solves these with:
 * - scheduling
 * - self-healing
 * - service discovery
 * - rolling updates
 * - scaling
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - KUBERNETES MENTAL MODEL
// -----------------------------------------------------------------------------
/*
 * A Kubernetes cluster is made of:
 *
 * 1. Control Plane
 *    -> the brain of the cluster
 *
 * 2. Worker Nodes
 *    -> the machines that run your app containers
 *
 * Your job:
 * describe the desired state
 *
 * Kubernetes job:
 * keep the real state matching that desired state
 *
 * This is a very important mindset shift.
 *
 * Traditional server thinking:
 * - SSH in
 * - manually start app
 *
 * Kubernetes thinking:
 * - write YAML
 * - apply desired state
 * - let the cluster reconcile it
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - CORE CLUSTER COMPONENTS
// -----------------------------------------------------------------------------
/*
 * Control plane components:
 *
 * - API Server
 *   Receives kubectl and automation requests
 *
 * - etcd
 *   Stores cluster state
 *
 * - Scheduler
 *   Decides which node should run a pod
 *
 * - Controller Manager
 *   Keeps desired state and actual state aligned
 *
 * Worker node components:
 *
 * - kubelet
 *   Agent running on each node
 *
 * - container runtime
 *   Runs containers
 *
 * - kube-proxy
 *   Helps with networking and service traffic
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - CORE KUBERNETES OBJECTS
// -----------------------------------------------------------------------------
/*
 * The most important Kubernetes objects to learn first are:
 *
 * - Pod
 *   Smallest deployable unit
 *
 * - Deployment
 *   Manages replicas and rolling updates
 *
 * - Service
 *   Gives stable access to pods
 *
 * - ConfigMap
 *   Non-sensitive configuration
 *
 * - Secret
 *   Sensitive configuration
 *
 * - Ingress
 *   Routes HTTP/HTTPS traffic into the cluster
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - WHY PODS MATTER
// -----------------------------------------------------------------------------
/*
 * Kubernetes does not usually deploy containers directly.
 * It deploys pods.
 *
 * A pod often contains:
 * - one main application container
 *
 * It can also contain:
 * - helper sidecar containers
 *
 * Important:
 * Pods are ephemeral.
 *
 * That means:
 * - do not rely on pod local storage for critical data
 * - do not assume a pod will keep the same IP forever
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - HOW A REAL REQUEST FLOWS
// -----------------------------------------------------------------------------
/*
 * Real traffic flow might look like:
 *
 * Browser
 *   -> Ingress
 *   -> Service
 *   -> Pod
 *   -> Application container
 *
 * If there are multiple replicas:
 *
 * Browser
 *   -> Ingress
 *   -> Service
 *   -> Pod A / Pod B / Pod C
 *
 * This is how Kubernetes helps distribute traffic.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - DECLARATIVE INFRASTRUCTURE THINKING
// -----------------------------------------------------------------------------
/*
 * In Kubernetes, you usually define resources in YAML.
 *
 * Example idea:
 *
 * "I want 3 replicas of my API image,
 * exposed internally by a service,
 * with environment config and health checks."
 *
 * You declare it.
 * Kubernetes keeps trying to make it true.
 *
 * This is called declarative management.
 */

// -----------------------------------------------------------------------------
// ! PHASE 9 - BASIC KUBECTL COMMANDS
// -----------------------------------------------------------------------------
/*
 * kubectl get pods
 * kubectl get deployments
 * kubectl get services
 * kubectl describe pod <name>
 * kubectl logs <pod-name>
 * kubectl apply -f app.yaml
 * kubectl delete -f app.yaml
 *
 * kubectl is your main command-line tool
 * for talking to the cluster.
 */

// -----------------------------------------------------------------------------
// ! PHASE 10 - WHAT KUBERNETES DOES WELL
// -----------------------------------------------------------------------------
/*
 * Kubernetes is strong when you need:
 *
 * - many services
 * - rolling deployments
 * - health checks
 * - scaling
 * - service discovery
 * - environment consistency
 * - recovery after crashes
 */

// -----------------------------------------------------------------------------
// ! PHASE 11 - WHAT KUBERNETES DOES NOT REMOVE
// -----------------------------------------------------------------------------
/*
 * Kubernetes helps a lot, but it does NOT remove the need for:
 *
 * - good application design
 * - monitoring
 * - logging
 * - security
 * - backups
 * - database design
 *
 * Bad apps can still run badly inside a good cluster.
 */

// -----------------------------------------------------------------------------
// ! PHASE 12 - COMMON BEGINNER MISTAKES
// -----------------------------------------------------------------------------
/*
 * 1. Treating pods like permanent servers
 *
 * 2. Storing important data inside pod filesystem
 *
 * 3. Skipping readiness and liveness probes
 *
 * 4. Not understanding selectors and labels
 *
 * 5. Confusing Service with Ingress
 *
 * 6. Using Kubernetes too early for tiny projects
 */

// -----------------------------------------------------------------------------
// ! PHASE 13 - WHERE KUBERNETES FITS YOUR DEVOPS PATH
// -----------------------------------------------------------------------------
/*
 * Good learning order:
 *
 * Linux
 * -> Docker
 * -> Networking
 * -> CI/CD
 * -> Cloud basics
 * -> Kubernetes
 *
 * Why?
 *
 * Kubernetes combines many earlier skills:
 * - containers
 * - networking
 * - YAML configuration
 * - logging
 * - scaling
 * - production thinking
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Kubernetes is not "just another deployment tool."
 *
 * It is a production operating model for containerized systems.
 *
 * If Docker taught you how to package an app,
 * Kubernetes teaches you how to run that app
 * safely, repeatedly, and at scale.
 */
