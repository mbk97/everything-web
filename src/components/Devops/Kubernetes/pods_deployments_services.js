// =============================================================================
// KUBERNETES PODS, DEPLOYMENTS, AND SERVICES
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - PODS
// -----------------------------------------------------------------------------
/*
 * A pod is the smallest deployable unit in Kubernetes.
 *
 * In many real applications,
 * one pod contains one main container.
 *
 * Example:
 * - Node API container
 *
 * Pods can also contain multiple containers if needed.
 *
 * Example:
 * - main app container
 * - log collector sidecar
 */

/*
 * Important truths about pods:
 *
 * - pods are replaceable
 * - pod IPs can change
 * - pods should be treated as disposable
 *
 * This means:
 * do not design around one fixed pod.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - SIMPLE POD EXAMPLE
// -----------------------------------------------------------------------------
/*
 * Example pod idea:
 *
 * apiVersion: v1
 * kind: Pod
 * metadata:
 *   name: my-api
 * labels:
 *   app: my-api
 * spec:
 *   containers:
 *     - name: api
 *       image: my-api:latest
 *       ports:
 *         - containerPort: 3000
 *
 * This runs one container inside one pod.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - WHY YOU RARELY DEPLOY NAKED PODS
// -----------------------------------------------------------------------------
/*
 * In real production, you usually do NOT manage pods directly.
 *
 * Why?
 *
 * If the pod dies,
 * nothing automatically recreates it.
 *
 * That is why Deployments are so important.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - DEPLOYMENTS
// -----------------------------------------------------------------------------
/*
 * A Deployment manages pods for you.
 *
 * It helps with:
 * - replica count
 * - rolling updates
 * - self-healing
 * - rollout history
 *
 * Think:
 *
 * Pod = one running unit
 * Deployment = pod manager
 */

/*
 * Example desired state:
 *
 * "I want 3 healthy replicas of my API."
 *
 * If one crashes,
 * Deployment tries to restore the count back to 3.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - DEPLOYMENT EXAMPLE
// -----------------------------------------------------------------------------
/*
 * apiVersion: apps/v1
 * kind: Deployment
 * metadata:
 *   name: my-api
 * spec:
 *   replicas: 3
 *   selector:
 *     matchLabels:
 *       app: my-api
 *   template:
 *     metadata:
 *       labels:
 *         app: my-api
 *     spec:
 *       containers:
 *         - name: api
 *           image: my-api:v1
 *           ports:
 *             - containerPort: 3000
 */

/*
 * Critical understanding:
 *
 * selector labels must match pod template labels.
 *
 * If labels do not match correctly,
 * the Deployment may not manage the intended pods.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - ROLLING UPDATES
// -----------------------------------------------------------------------------
/*
 * If you change image:
 *
 * my-api:v1 -> my-api:v2
 *
 * Deployment can roll out the new version gradually.
 *
 * That means:
 * - some old pods are replaced
 * - some new pods come up
 * - traffic moves as health checks pass
 *
 * This is much safer than killing everything at once.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - SERVICES
// -----------------------------------------------------------------------------
/*
 * Pods are temporary and their IPs can change.
 *
 * So how do other services or users reach them reliably?
 *
 * Answer:
 * Service
 *
 * A Kubernetes Service gives stable network access
 * to a changing set of pods.
 */

/*
 * Think:
 *
 * Pod IPs = unstable
 * Service name/IP = stable
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - SERVICE SELECTORS
// -----------------------------------------------------------------------------
/*
 * Service routes traffic using labels.
 *
 * Example:
 *
 * selector:
 *   app: my-api
 *
 * This means:
 * send traffic to pods labeled app=my-api
 *
 * Again, labels are a very big deal in Kubernetes.
 */

// -----------------------------------------------------------------------------
// ! PHASE 9 - COMMON SERVICE TYPES
// -----------------------------------------------------------------------------
/*
 * 1. ClusterIP
 *    -> internal cluster-only access
 *
 * 2. NodePort
 *    -> opens a port on each node
 *
 * 3. LoadBalancer
 *    -> asks cloud provider for an external load balancer
 *
 * In many real setups:
 * - Service is internal
 * - Ingress handles public HTTP/HTTPS traffic
 */

// -----------------------------------------------------------------------------
// ! PHASE 10 - SERVICE EXAMPLE
// -----------------------------------------------------------------------------
/*
 * apiVersion: v1
 * kind: Service
 * metadata:
 *   name: my-api-service
 * spec:
 *   selector:
 *     app: my-api
 *   ports:
 *     - port: 80
 *       targetPort: 3000
 *   type: ClusterIP
 *
 * Meaning:
 * clients use port 80 on the Service,
 * traffic is sent to port 3000 in the pod container.
 */

// -----------------------------------------------------------------------------
// ! PHASE 11 - FULL FLOW
// -----------------------------------------------------------------------------
/*
 * Browser or another service
 *   -> Service
 *   -> one healthy pod selected by labels
 *   -> container inside that pod
 *
 * When a pod dies:
 * - Deployment creates another pod
 * - Service keeps routing to healthy pods
 */

// -----------------------------------------------------------------------------
// ! PHASE 12 - USEFUL COMMANDS
// -----------------------------------------------------------------------------
/*
 * kubectl get pods
 * kubectl get deployments
 * kubectl get services
 * kubectl describe deployment my-api
 * kubectl describe service my-api-service
 * kubectl rollout status deployment/my-api
 * kubectl rollout history deployment/my-api
 */

// -----------------------------------------------------------------------------
// ! PHASE 13 - COMMON MISTAKES
// -----------------------------------------------------------------------------
/*
 * 1. Service selector does not match pod labels
 *    -> no endpoints
 *
 * 2. Wrong targetPort
 *    -> traffic reaches pod but app still fails
 *
 * 3. Wrong container image
 *    -> pods crash
 *
 * 4. Too few replicas
 *    -> weak availability
 *
 * 5. No readiness probe
 *    -> traffic sent to not-yet-ready pods
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Pods run the app.
 * Deployments manage the pods.
 * Services give stable access to the pods.
 *
 * If you understand this trio deeply,
 * you understand the heart of everyday Kubernetes usage.
 */
