// =============================================================================
// KUBERNETES INGRESS
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT INGRESS IS
// -----------------------------------------------------------------------------
/*
 * Ingress is a Kubernetes resource used to manage HTTP and HTTPS traffic
 * coming into the cluster.
 *
 * It is often where you define:
 * - domains
 * - paths
 * - TLS / SSL behavior
 *
 * Example:
 * - app.example.com -> frontend service
 * - api.example.com -> backend service
 * - example.com/admin -> admin service
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - VERY IMPORTANT CLARIFICATION
// -----------------------------------------------------------------------------
/*
 * Ingress resource alone does not route traffic by magic.
 *
 * You also need an Ingress Controller.
 *
 * Common examples:
 * - NGINX Ingress Controller
 * - Traefik
 * - AWS Load Balancer Controller
 *
 * Think:
 *
 * Ingress resource = the rules
 * Ingress controller = the engine that enforces the rules
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - HOW IT FITS THE TRAFFIC FLOW
// -----------------------------------------------------------------------------
/*
 * Real HTTP request flow can look like:
 *
 * Browser
 *   -> cloud load balancer
 *   -> Ingress controller
 *   -> Service
 *   -> Pod
 *
 * Ingress is the layer that decides:
 * "Where should this HTTP request go?"
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - WHY INGRESS MATTERS
// -----------------------------------------------------------------------------
/*
 * Without Ingress,
 * you may expose many services awkwardly.
 *
 * Problems:
 * - messy public access
 * - poor domain routing
 * - duplicated TLS setup
 *
 * With Ingress:
 * - one organized entry point
 * - cleaner host routing
 * - cleaner path routing
 * - central TLS handling
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - PATH-BASED ROUTING
// -----------------------------------------------------------------------------
/*
 * Example:
 *
 * example.com/      -> frontend service
 * example.com/api   -> backend service
 * example.com/admin -> admin service
 *
 * This is called path-based routing.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - HOST-BASED ROUTING
// -----------------------------------------------------------------------------
/*
 * Example:
 *
 * app.example.com   -> frontend service
 * api.example.com   -> backend service
 * admin.example.com -> admin service
 *
 * This is called host-based routing.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - TLS / HTTPS
// -----------------------------------------------------------------------------
/*
 * Ingress is also commonly used to manage HTTPS.
 *
 * Meaning:
 * - users hit https://yourdomain.com
 * - TLS is terminated at the ingress layer
 * - traffic is then forwarded to the appropriate service
 *
 * This is similar to how Nginx often handles SSL
 * in simpler non-Kubernetes setups.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - SIMPLE INGRESS EXAMPLE
// -----------------------------------------------------------------------------
/*
 * apiVersion: networking.k8s.io/v1
 * kind: Ingress
 * metadata:
 *   name: app-ingress
 * spec:
 *   rules:
 *     - host: app.example.com
 *       http:
 *         paths:
 *           - path: /
 *             pathType: Prefix
 *             backend:
 *               service:
 *                 name: frontend-service
 *                 port:
 *                   number: 80
 */

/*
 * This means:
 * traffic for app.example.com/ goes to frontend-service.
 */

// -----------------------------------------------------------------------------
// ! PHASE 9 - MULTI-SERVICE EXAMPLE
// -----------------------------------------------------------------------------
/*
 * Same Ingress can route different paths:
 *
 * - /      -> frontend-service
 * - /api   -> backend-service
 *
 * That gives one public entry point
 * for multiple internal services.
 */

// -----------------------------------------------------------------------------
// ! PHASE 10 - COMMON TROUBLE AREAS
// -----------------------------------------------------------------------------
/*
 * 1. Ingress controller not installed
 *    -> resource exists but traffic does not work
 *
 * 2. Wrong service name
 *    -> backend cannot be found
 *
 * 3. Wrong service port
 *    -> request reaches wrong port
 *
 * 4. DNS not pointing to ingress entry point
 *    -> domain never reaches cluster
 *
 * 5. TLS secret misconfigured
 *    -> HTTPS fails
 */

// -----------------------------------------------------------------------------
// ! PHASE 11 - DEBUGGING CHECKLIST
// -----------------------------------------------------------------------------
/*
 * When Ingress is failing:
 *
 * 1. kubectl get ingress
 * 2. kubectl describe ingress <name>
 * 3. confirm ingress controller is running
 * 4. confirm service exists
 * 5. confirm service endpoints exist
 * 6. confirm pods are healthy
 * 7. confirm DNS points correctly
 * 8. confirm TLS secret exists if using HTTPS
 */

// -----------------------------------------------------------------------------
// ! PHASE 12 - MENTAL MODEL
// -----------------------------------------------------------------------------
/*
 * Ingress is the HTTP door of your cluster.
 *
 * It does not run your app.
 * It does not replace Services.
 *
 * It simply decides how incoming web traffic
 * should be routed to internal services.
 */
