// =============================================================================
// KUBERNETES CONFIGMAPS AND SECRETS
// =============================================================================

// -----------------------------------------------------------------------------
// ! PHASE 1 - WHY CONFIGURATION MATTERS
// -----------------------------------------------------------------------------
/*
 * Real applications need configuration.
 *
 * Examples:
 * - NODE_ENV
 * - API base URL
 * - database host
 * - feature flags
 * - JWT secrets
 * - third-party API keys
 *
 * In Kubernetes, configuration should be separated
 * from the container image whenever possible.
 *
 * Why?
 *
 * Because the same image may be used in:
 * - development
 * - staging
 * - production
 *
 * But the config values are different in each environment.
 */

// -----------------------------------------------------------------------------
// ! PHASE 2 - CONFIGMAP VS SECRET
// -----------------------------------------------------------------------------
/*
 * ConfigMap:
 * - used for non-sensitive configuration
 *
 * Secret:
 * - used for sensitive values
 *
 * Good ConfigMap examples:
 * - app mode
 * - public API URL
 * - log level
 * - feature toggle
 *
 * Good Secret examples:
 * - database password
 * - JWT signing key
 * - API token
 * - private certificate material
 */

// -----------------------------------------------------------------------------
// ! PHASE 3 - MAIN IDEA
// -----------------------------------------------------------------------------
/*
 * Important rule:
 * do not hardcode environment-specific values
 * directly into the container image.
 *
 * Bad:
 * Docker image already contains production credentials
 *
 * Better:
 * image is generic
 * configuration is injected at runtime
 */

// -----------------------------------------------------------------------------
// ! PHASE 4 - CONFIGMAP EXAMPLE
// -----------------------------------------------------------------------------
/*
 * Example ConfigMap:
 *
 * apiVersion: v1
 * kind: ConfigMap
 * metadata:
 *   name: app-config
 * data:
 *   NODE_ENV: "production"
 *   LOG_LEVEL: "info"
 *   API_BASE_URL: "https://api.example.com"
 *
 * This is plain configuration data.
 */

// -----------------------------------------------------------------------------
// ! PHASE 5 - SECRET EXAMPLE
// -----------------------------------------------------------------------------
/*
 * Example Secret:
 *
 * apiVersion: v1
 * kind: Secret
 * metadata:
 *   name: app-secret
 * type: Opaque
 * data:
 *   JWT_SECRET: <base64-value>
 *   DB_PASSWORD: <base64-value>
 *
 * Important:
 * Secret values in YAML are often base64-encoded.
 *
 * Base64 is NOT real encryption.
 * It is just an encoding format.
 */

// -----------------------------------------------------------------------------
// ! PHASE 6 - HOW APPS USE CONFIGMAPS AND SECRETS
// -----------------------------------------------------------------------------
/*
 * Kubernetes can inject values into pods in two major ways:
 *
 * 1. Environment variables
 * 2. Mounted files / volumes
 *
 * Which one you use depends on how the app expects config.
 */

// -----------------------------------------------------------------------------
// ! PHASE 7 - USING ENVIRONMENT VARIABLES
// -----------------------------------------------------------------------------
/*
 * Example idea inside a pod or deployment:
 *
 * env:
 *   - name: NODE_ENV
 *     valueFrom:
 *       configMapKeyRef:
 *         name: app-config
 *         key: NODE_ENV
 *
 *   - name: JWT_SECRET
 *     valueFrom:
 *       secretKeyRef:
 *         name: app-secret
 *         key: JWT_SECRET
 *
 * This is very common for Node, Python, and many backend apps.
 */

// -----------------------------------------------------------------------------
// ! PHASE 8 - USING VOLUMES
// -----------------------------------------------------------------------------
/*
 * Sometimes applications want config files rather than env vars.
 *
 * Example:
 * - Nginx config file
 * - app settings file
 * - TLS certificates
 *
 * In such cases,
 * ConfigMaps or Secrets can be mounted as files into the container.
 */

/*
 * Example idea:
 *
 * volumeMounts:
 *   - name: config-volume
 *     mountPath: /app/config
 *
 * volumes:
 *   - name: config-volume
 *     configMap:
 *       name: app-config
 */

// -----------------------------------------------------------------------------
// ! PHASE 9 - HOW THIS FITS YOUR DEVOPS THINKING
// -----------------------------------------------------------------------------
/*
 * In local development, you may use:
 * .env
 *
 * In Kubernetes, the same idea becomes:
 * - ConfigMap for non-sensitive values
 * - Secret for sensitive values
 *
 * So this is not a brand new idea.
 * It is the production-scale version of environment management.
 */

// -----------------------------------------------------------------------------
// ! PHASE 10 - IMPORTANT SECURITY REALITY
// -----------------------------------------------------------------------------
/*
 * Secrets are better than plain ConfigMaps for sensitive values,
 * but they still require careful handling.
 *
 * Why?
 *
 * - people with enough cluster access may still read them
 * - base64 is not strong protection
 * - bad RBAC can expose them
 *
 * Stronger production setups often also use:
 * - cloud secret managers
 * - external secret operators
 * - strict RBAC
 * - audit logging
 */

// -----------------------------------------------------------------------------
// ! PHASE 11 - COMMON MISTAKES
// -----------------------------------------------------------------------------
/*
 * 1. Putting passwords in ConfigMaps
 *
 * 2. Committing Secret YAML with real credentials to Git
 *
 * 3. Assuming base64 means encrypted
 *
 * 4. Baking secrets directly into Docker image
 *
 * 5. Forgetting app restart behavior after config changes
 *
 * 6. Giving too many people permission to read secrets
 */

// -----------------------------------------------------------------------------
// ! PHASE 12 - CONFIG CHANGE BEHAVIOR
// -----------------------------------------------------------------------------
/*
 * Very important operational point:
 *
 * When you update a ConfigMap or Secret,
 * your application may not always pick up the change automatically
 * depending on how the app reads configuration.
 *
 * Sometimes you may need:
 * - pod restart
 * - rollout restart
 * - reloader tooling
 */

// -----------------------------------------------------------------------------
// ! PHASE 13 - DEBUGGING CHECKLIST
// -----------------------------------------------------------------------------
/*
 * If config is not working:
 *
 * 1. kubectl get configmap
 * 2. kubectl get secret
 * 3. kubectl describe deployment <name>
 * 4. verify correct key names
 * 5. verify env var names
 * 6. verify mounted path
 * 7. check app logs
 * 8. confirm pod restarted if necessary
 */

// -----------------------------------------------------------------------------
// ! FINAL TAKEAWAY
// -----------------------------------------------------------------------------
/*
 * ConfigMap and Secret help separate:
 * application image
 * from
 * application configuration
 *
 * This separation is a major production skill.
 *
 * It makes apps more reusable,
 * easier to promote across environments,
 * and safer to operate.
 */
