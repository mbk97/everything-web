// =============================================================================
// HELM BASICS
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHAT HELM IS
// -----------------------------------------------------------------------------
/*
 * Helm is often called the package manager for Kubernetes.
 *
 * More practically,
 * Helm helps you manage Kubernetes manifests as reusable templates.
 *
 * Think:
 *
 * raw YAML everywhere
 * -> repetitive
 * -> hard to maintain
 * -> hard to reuse across environments
 *
 * Helm
 * -> templated YAML
 * -> reusable values
 * -> release management
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - WHY HELM EXISTS
// -----------------------------------------------------------------------------
/*
 * Without Helm,
 * a growing Kubernetes project may end up with many copied YAML files.
 *
 * Problems:
 * - too much duplication
 * - error-prone environment differences
 * - difficult upgrades
 * - difficult rollbacks
 *
 * Helm reduces this pain.
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - CORE TERMS
// -----------------------------------------------------------------------------
/*
 * Chart
 * -> a package of Kubernetes resources
 *
 * Release
 * -> a deployed instance of a chart
 *
 * values.yaml
 * -> configuration values used by templates
 *
 * Template
 * -> parameterized manifest file
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - CHART STRUCTURE
// -----------------------------------------------------------------------------
/*
 * Common chart structure:
 *
 * my-app/
 *   Chart.yaml
 *   values.yaml
 *   templates/
 *     deployment.yaml
 *     service.yaml
 *     ingress.yaml
 *
 * This lets one chart manage a whole app stack.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - VALUES.YAML
// -----------------------------------------------------------------------------
/*
 * values.yaml stores configurable values like:
 * - image tag
 * - replica count
 * - service port
 * - ingress host
 *
 * Example idea:
 *
 * replicaCount: 3
 * image:
 *   repository: my-app
 *   tag: v1
 * service:
 *   port: 80
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - TEMPLATING IDEA
// -----------------------------------------------------------------------------
/*
 * In templates,
 * Helm substitutes values into manifests.
 *
 * Example idea:
 *
 * replicas: {{ .Values.replicaCount }}
 *
 * image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
 *
 * This is how one chart becomes reusable.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - RELEASE MANAGEMENT
// -----------------------------------------------------------------------------
/*
 * Helm is not only about templating.
 * It also manages releases.
 *
 * Useful actions:
 * - install
 * - upgrade
 * - rollback
 * - uninstall
 *
 * This is powerful in production
 * because bad changes can be reversed faster.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - COMMON COMMANDS
// -----------------------------------------------------------------------------
/*
 * helm create my-app
 * helm install my-app ./my-app
 * helm upgrade my-app ./my-app
 * helm rollback my-app 1
 * helm list
 * helm uninstall my-app
 *
 * These are some of the most common Helm commands.
 */

// -----------------------------------------------------------------------------
// ! PHASE 9 - ENVIRONMENT MANAGEMENT
// -----------------------------------------------------------------------------
/*
 * Helm is very useful when the same app runs in:
 * - dev
 * - staging
 * - production
 *
 * Why?
 *
 * The structure stays the same,
 * while values change.
 *
 * Example differences:
 * - replica count
 * - image tag
 * - domain name
 * - resource requests
 */

// -----------------------------------------------------------------------------
// ! PHASE 10 - HELM AND KUBERNETES RELATIONSHIP
// -----------------------------------------------------------------------------
/*
 * Kubernetes still runs the resources.
 * Helm does not replace Kubernetes.
 *
 * Helm helps you generate and manage
 * the Kubernetes manifests more efficiently.
 */

// -----------------------------------------------------------------------------
// ! PHASE 11 - COMMON HELM MISTAKES
// -----------------------------------------------------------------------------
/*
 * 1. Treating Helm like magic instead of understanding the YAML
 *
 * 2. Storing too much unrelated logic in templates
 *
 * 3. Not reviewing rendered manifests
 *
 * 4. Poor values organization
 *
 * 5. Forgetting chart versioning discipline
 */

// -----------------------------------------------------------------------------
// ! PHASE 12 - PRODUCTION VALUE
// -----------------------------------------------------------------------------
/*
 * Helm becomes more valuable as the system grows.
 *
 * For a tiny single-service demo,
 * raw YAML may be enough.
 *
 * For multi-service real environments,
 * Helm often makes maintenance much more manageable.
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * Helm helps you move from:
 * "I can write Kubernetes YAML"
 * to
 * "I can manage Kubernetes applications cleanly across environments."
 */
