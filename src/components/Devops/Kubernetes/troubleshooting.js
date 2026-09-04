// =============================================================================
// KUBERNETES TROUBLESHOOTING
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - THE RIGHT TROUBLESHOOTING MINDSET
// -----------------------------------------------------------------------------
/*
 * Do not debug Kubernetes randomly.
 *
 * Work layer by layer:
 *
 * 1. Is the object created?
 * 2. Is the pod running?
 * 3. Is the container healthy?
 * 4. Is the Service routing?
 * 5. Is Ingress routing?
 * 6. Is DNS correct?
 *
 * This prevents panic and guesswork.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - YOUR MOST IMPORTANT COMMANDS
// -----------------------------------------------------------------------------
/*
 * kubectl get pods
 * kubectl get deployments
 * kubectl get services
 * kubectl get ingress
 * kubectl describe pod <name>
 * kubectl describe deployment <name>
 * kubectl logs <pod-name>
 * kubectl logs <pod-name> -c <container-name>
 * kubectl get events
 * kubectl rollout status deployment/<name>
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - START WITH WHAT THE USER FEELS
// -----------------------------------------------------------------------------
/*
 * Common symptoms:
 *
 * - app is down
 * - app is slow
 * - new deployment failed
 * - pod keeps restarting
 * - public domain not responding
 *
 * Always start from the symptom,
 * then work backward through the system.
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - POD STATUS MEANINGS
// -----------------------------------------------------------------------------
/*
 * Common pod states:
 *
 * Running
 * -> pod exists and container is active
 *
 * Pending
 * -> pod has not been scheduled or cannot start yet
 *
 * CrashLoopBackOff
 * -> container keeps crashing and Kubernetes retries it
 *
 * ImagePullBackOff / ErrImagePull
 * -> image cannot be pulled
 *
 * Terminating
 * -> pod is shutting down
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - CRASHLOOPBACKOFF
// -----------------------------------------------------------------------------
/*
 * This is one of the most common failures.
 *
 * Meaning:
 * Kubernetes starts the container,
 * the container exits,
 * Kubernetes retries,
 * then backs off.
 *
 * Common causes:
 * - wrong environment variables
 * - bad startup command
 * - missing dependency
 * - app crashes immediately
 * - port mismatch
 *
 * What to do:
 * - kubectl logs <pod>
 * - kubectl describe pod <pod>
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - IMAGE PULL FAILURES
// -----------------------------------------------------------------------------
/*
 * If Kubernetes cannot pull the image,
 * your app never starts.
 *
 * Common causes:
 * - wrong image name
 * - wrong image tag
 * - private registry auth problem
 * - image does not exist
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - READINESS VS LIVENESS PROBLEMS
// -----------------------------------------------------------------------------
/*
 * Readiness probe:
 * decides when traffic should reach the pod
 *
 * Liveness probe:
 * decides when the container should be restarted
 *
 * If probes are wrong:
 * - healthy app may appear unhealthy
 * - traffic may be blocked
 * - containers may restart unnecessarily
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - SERVICE TROUBLESHOOTING
// -----------------------------------------------------------------------------
/*
 * If pod is healthy but traffic still fails,
 * inspect the Service layer.
 *
 * Questions:
 * - does the Service exist?
 * - does selector match pod labels?
 * - does targetPort match container port?
 * - are endpoints created?
 *
 * Very common issue:
 * Service selector mismatch -> no healthy endpoints
 */

// -----------------------------------------------------------------------------
// ! PHASE 9 - INGRESS TROUBLESHOOTING
// -----------------------------------------------------------------------------
/*
 * If internal service works but public URL fails,
 * inspect the Ingress path.
 *
 * Questions:
 * - is ingress resource correct?
 * - is ingress controller running?
 * - is DNS pointing correctly?
 * - is TLS secret valid?
 * - are backend services healthy?
 */

// -----------------------------------------------------------------------------
// ! PHASE 10 - SCHEDULING FAILURES
// -----------------------------------------------------------------------------
/*
 * A pod can stay Pending if the cluster cannot place it.
 *
 * Common causes:
 * - not enough CPU or memory
 * - node taints
 * - bad node selectors
 * - missing tolerations
 *
 * kubectl describe pod often reveals this clearly.
 */

// -----------------------------------------------------------------------------
// ! PHASE 11 - CONFIGURATION FAILURES
// -----------------------------------------------------------------------------
/*
 * Many "Kubernetes problems" are really config problems.
 *
 * Examples:
 * - missing ConfigMap key
 * - missing Secret
 * - wrong env variable name
 * - wrong mounted file path
 */

// -----------------------------------------------------------------------------
// ! PHASE 12 - A GOOD DEBUG FLOW
// -----------------------------------------------------------------------------
/*
 * Example flow:
 *
 * 1. kubectl get pods
 * 2. kubectl describe pod <pod>
 * 3. kubectl logs <pod>
 * 4. kubectl get service
 * 5. kubectl describe service <service>
 * 6. kubectl get ingress
 * 7. kubectl describe ingress <ingress>
 * 8. verify DNS and public access
 *
 * Follow the request path from outside in,
 * or from app internals outward.
 */

// -----------------------------------------------------------------------------
// ! PHASE 13 - EVENTS ARE UNDERUSED
// -----------------------------------------------------------------------------
/*
 * kubectl get events
 *
 * Many people forget this command,
 * but it often explains:
 * - failed scheduling
 * - image pull issues
 * - probe failures
 * - mount issues
 */

// -----------------------------------------------------------------------------
// ! PHASE 14 - COMMON PRODUCTION INCIDENT TYPES
// -----------------------------------------------------------------------------
/*
 * - bad deployment image
 * - broken config pushed with new release
 * - expired TLS certificate
 * - overloaded pods
 * - memory pressure
 * - unhealthy load balancer path
 *
 * Kubernetes gives structure,
 * but incidents still happen.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Strong Kubernetes troubleshooting is really about:
 * - understanding the object relationships
 * - reading status carefully
 * - checking logs and events
 * - moving through the stack calmly
 *
 * The cluster usually tells you a lot.
 * The skill is learning where to look first.
 */
