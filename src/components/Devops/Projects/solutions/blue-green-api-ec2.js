/* eslint-disable no-undef */
// -----------------------------------------------------------------------------
// ! PROJECT 1 â€” PRODUCTION BLUE/GREEN EXPRESS API ON EC2 + ALB
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Mid-level to advanced
 *
 * Stack:
 * - Node.js
 * - TypeScript
 * - Express
 * - EC2
 * - Application Load Balancer
 * - Auto Scaling Groups
 * - AWS Systems Manager
 * - AWS Parameter Store / Secrets Manager
 * - CloudWatch
 * - GitHub Actions
 *
 * Build:
 * - two production environments: Blue and Green
 * - two target groups
 * - health-check-based deployment validation
 * - controlled traffic switching
 * - optional QA/cohort routing
 * - authenticated-user feature rollout
 * - automated rollback workflow
 *
 * Focus:
 * - zero-downtime deployment
 * - traffic management
 * - release safety
 * - infrastructure security
 * - monitoring
 * - repeatable deployments
 * - safe separation of routing and authorization
 */

// =============================================================================
// 1. PROJECT GOAL
// =============================================================================

/*
 * Blue and Green are two independent environments running the same API.
 *
 * At any moment:
 *
 * - one environment is ACTIVE and receives production traffic;
 * - the other environment is INACTIVE and receives the next release.
 *
 * Initial state:
 *
 * Users
 *   |
 *   v
 * Application Load Balancer
 *   |
 *   +---- 100% ---> Blue target group ---> Blue EC2 instances
 *   |
 *   +------ 0% ---> Green target group --> Green EC2 instances
 *
 * After deploying and validating a new release on Green:
 *
 * Users
 *   |
 *   v
 * Application Load Balancer
 *   |
 *   +------ 0% ---> Blue target group
 *   |
 *   +---- 100% ---> Green target group
 *
 * The ALB DNS name does not change when traffic switches.
 */

// =============================================================================
// 2. LEARNING ARCHITECTURE VS REAL PRODUCTION ARCHITECTURE
// =============================================================================

/*
 * WHAT WE BUILT FOR LEARNING:
 *
 * - one standalone Blue EC2 instance;
 * - one standalone Green EC2 instance;
 * - both instances in one Availability Zone;
 * - public IP addresses;
 * - PM2 managing the applications;
 * - one ALB;
 * - two target groups;
 * - manual weighted traffic switching.
 *
 * This demonstrates blue/green deployment correctly, but each environment
 * still contains only one server.
 *
 * RECOMMENDED PRODUCTION ARCHITECTURE:
 *
 * Internet
 *    |
 *    v
 * Route 53 domain
 *    |
 *    v
 * AWS WAF â€” optional
 *    |
 *    v
 * Public Application Load Balancer
 *    |
 *    +---- Blue target group
 *    |       |
 *    |       +---- Blue Auto Scaling Group â€” AZ A
 *    |       +---- Blue Auto Scaling Group â€” AZ B
 *    |
 *    +---- Green target group
 *            |
 *            +---- Green Auto Scaling Group â€” AZ A
 *            +---- Green Auto Scaling Group â€” AZ B
 *
 * Production EC2 instances should:
 *
 * - run in private subnets;
 * - have no public IP addresses;
 * - be managed through AWS Systems Manager;
 * - be distributed across at least two Availability Zones;
 * - belong to Auto Scaling Groups;
 * - retrieve secrets using an IAM instance role.
 */

// =============================================================================
// 3. PREPARE THE EXPRESS APPLICATION
// =============================================================================

/*
 * Required production endpoints:
 *
 * GET /health
 *
 * The health endpoint should:
 *
 * - not call OpenAI;
 * - not perform expensive work;
 * - return quickly;
 * - return HTTP 200 only when the process is ready;
 * - expose the deployment environment and version.
 *
 * Example:
 */

app.get("/health", (_request, response) => {
    response.status(200).json({
      success: true,
      status: "healthy",
      environment: process.env.APP_ENV || "local",
      version: process.env.APP_VERSION || "unknown",
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
    });
  });
  
  /*
   * The server must listen on 0.0.0.0:
   */
  
  const port = Number(process.env.PORT) || 8080;
  
  const server = app.listen(port, "0.0.0.0", () => {
    console.log(`API running on port ${port}`);
    console.log(`Environment: ${process.env.APP_ENV}`);
    console.log(`Version: ${process.env.APP_VERSION}`);
  });
  
  /*
   * 0.0.0.0 means:
   *
   * "Accept connections arriving through any network interface."
   *
   * If the server listened only on localhost, the ALB could not reach it.
   */
  
  // =============================================================================
  // 4. IMPLEMENT GRACEFUL SHUTDOWN
  // =============================================================================
  
  /*
   * The application must stop accepting new requests while allowing current
   * requests to complete.
   */
  
  function shutdown(signal) {
    console.log(`${signal} received. Shutting down gracefully.`);
  
    const forceShutdownTimer = setTimeout(() => {
      console.error("Graceful shutdown timed out.");
      process.exit(1);
    }, 15_000);
  
    forceShutdownTimer.unref();
  
    server.close(() => {
      console.log("HTTP server closed.");
      process.exit(0);
    });
  }
  
  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));
  
  /*
   * SIGTERM:
   * - commonly sent by PM2, deployment scripts and operating systems.
   *
   * SIGINT:
   * - normally sent when Ctrl + C is pressed.
   *
   * Graceful shutdown reduces dropped requests during replacement or rollback.
   */
  
  // =============================================================================
  // 5. CONFIGURE TYPESCRIPT PRODUCTION SCRIPTS
  // =============================================================================
  
  /*
   * package.json:
   *
   * {
   *   "scripts": {
   *     "dev": "tsx watch src/server.ts",
   *     "type-check": "tsc --noEmit",
   *     "test": "vitest run",
   *     "build": "tsc",
   *     "start": "node dist/server.js"
   *   }
   * }
   *
   * Development:
   *
   * src/server.ts â†’ tsx/nodemon â†’ running application
   *
   * Production:
   *
   * src/server.ts â†’ tsc â†’ dist/server.js â†’ Node.js â†’ PM2
   *
   * Do not use ts-node, tsx or nodemon as the production runtime.
   */
  
  // =============================================================================
  // 6. VALIDATE THE PROJECT LOCALLY
  // =============================================================================
  
  /*
   * Run:
   *
   * npm ci
   * npm run type-check
   * npm test
   * npm run build
   * npm start
   *
   * Test:
   *
   * curl http://localhost:8080/health
   *
   * Expected:
   *
   * {
   *   "success": true,
   *   "status": "healthy"
   * }
   *
   * Never deploy code that fails type-checking, tests or compilation.
   */
  
  // =============================================================================
  // 7. MANAGE ENVIRONMENT VARIABLES AND SECRETS
  // =============================================================================
  
  /*
   * Non-secret Blue configuration:
   *
   * PORT=8080
   * NODE_ENV=production
   * APP_ENV=production-blue
   * APP_VERSION=1.0.0-blue
   * OPENAI_MODEL=gpt-5
   *
   * Non-secret Green configuration:
   *
   * PORT=8080
   * NODE_ENV=production
   * APP_ENV=production-green
   * APP_VERSION=1.1.0-green
   * OPENAI_MODEL=gpt-5
   *
   * Both servers can use port 8080 because they have different private IPs.
   *
   * Do not commit .env files.
   * Do not store AWS keys or the OpenAI API key inside GitHub source code.
   *
   * Recommended secret storage:
   *
   * AWS Systems Manager Parameter Store:
   *
   * /openai-api/production/openai-api-key
   *
   * Store it as SecureString, encrypted with AWS KMS.
   *
   * Give the EC2 instance IAM role permission to read only this parameter.
   *
   * The old OpenAI key exposed during development must be revoked.
   */
  
  // =============================================================================
  // 8. CREATE THE PRODUCTION VPC LAYOUT
  // =============================================================================
  
  /*
   * Use at least two Availability Zones.
   *
   * Example:
   *
   * AZ A:
   * - public subnet for the ALB;
   * - private application subnet for EC2.
   *
   * AZ B:
   * - public subnet for the ALB;
   * - private application subnet for EC2.
   *
   * PUBLIC SUBNETS:
   *
   * - route 0.0.0.0/0 to an Internet Gateway;
   * - contain ALB network interfaces.
   *
   * PRIVATE APPLICATION SUBNETS:
   *
   * - contain Blue and Green EC2 instances;
   * - do not assign public IP addresses;
   * - use a NAT Gateway or VPC endpoints for required outbound services.
   *
   * Production instances should not expose port 8080 to the internet.
   */
  
  // =============================================================================
  // 9. CREATE THE SECURITY GROUPS
  // =============================================================================
  
  /*
   * A. ALB SECURITY GROUP
   *
   * Name:
   * openai-api-alb-sg
   *
   * Inbound:
   *
   * HTTP     TCP 80   0.0.0.0/0
   * HTTPS    TCP 443  0.0.0.0/0
   *
   * In final production, port 80 should redirect to HTTPS 443.
   *
   * Outbound:
   *
   * TCP 8080 â†’ openai-api-ec2-sg
   *
   * B. EC2 SECURITY GROUP
   *
   * Name:
   * openai-api-ec2-sg
   *
   * Inbound:
   *
   * Custom TCP 8080 â†’ source: openai-api-alb-sg
   *
   * Do not use:
   *
   * Custom TCP 8080 â†’ 0.0.0.0/0
   *
   * For private instances managed through Systems Manager, SSH port 22 does
   * not need to be publicly open.
   *
   * Final application flow:
   *
   * Internet â†’ ALB:443 â†’ EC2:8080
   */
  
  // =============================================================================
  // 10. CREATE IAM ROLES
  // =============================================================================
  
  /*
   * A. EC2 INSTANCE ROLE
   *
   * Attach an instance profile that permits:
   *
   * - registration with Systems Manager;
   * - reading the deployment artifact from a specific S3 bucket;
   * - reading the application secret from Parameter Store;
   * - decrypting that secret through the required KMS key;
   * - publishing logs and metrics to CloudWatch.
   *
   * Use least privilege. Do not grant AdministratorAccess.
   *
   * B. GITHUB ACTIONS DEPLOYMENT ROLE
   *
   * Create a GitHub OIDC provider in IAM:
   *
   * Provider URL:
   * https://token.actions.githubusercontent.com
   *
   * Audience:
   * sts.amazonaws.com
   *
   * Create a deployment role trusted only by:
   *
   * - your GitHub organization;
   * - your repository;
   * - your production branch or GitHub Environment.
   *
   * This lets GitHub obtain temporary AWS credentials.
   *
   * Do not store permanent AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY values
   * in GitHub Secrets.
   */
  
  // =============================================================================
  // 11. CREATE A LAUNCH TEMPLATE
  // =============================================================================
  
  /*
   * The launch template defines how production EC2 instances are created.
   *
   * Configure:
   *
   * - Amazon Linux 2023;
   * - instance type appropriate for the workload;
   * - encrypted gp3 storage;
   * - no public IP;
   * - openai-api-ec2-sg;
   * - EC2 instance IAM profile;
   * - IMDSv2 required;
   * - detailed monitoring;
   * - user data to install Node.js, PM2 and the CloudWatch agent.
   *
   * Avoid t3.nano for real production because 512 MB RAM is restrictive.
   *
   * Use at least:
   *
   * - t3.micro for a small learning workload;
   * - t3.small or higher after load testing.
   *
   * Choose based on metrics, not guesswork.
   */
  
  // =============================================================================
  // 12. CREATE BLUE AND GREEN AUTO SCALING GROUPS
  // =============================================================================
  
  /*
   * Recommended:
   *
   * openai-api-blue-asg
   * - desired capacity: 2
   * - minimum capacity: 2
   * - private subnets in AZ A and AZ B
   * - attached to openai-api-blue-tg
   *
   * openai-api-green-asg
   * - desired capacity: 2
   * - minimum capacity: 2
   * - private subnets in AZ A and AZ B
   * - attached to openai-api-green-tg
   *
   * Auto Scaling automatically registers and deregisters instances from the
   * attached target groups.
   *
   * For a lower-cost non-critical environment, each colour may temporarily
   * use one instance, but that does not provide instance-level redundancy.
   */
  
  // =============================================================================
  // 13. CREATE THE TWO TARGET GROUPS
  // =============================================================================
  
  /*
   * BLUE TARGET GROUP:
   *
   * Name: openai-api-blue-tg
   * Target type: Instances
   * Protocol: HTTP
   * Port: 8080
   * VPC: application VPC
   * Protocol version: HTTP1
   *
   * GREEN TARGET GROUP:
   *
   * Name: openai-api-green-tg
   * Target type: Instances
   * Protocol: HTTP
   * Port: 8080
   * VPC: application VPC
   * Protocol version: HTTP1
   *
   * Health-check settings:
   *
   * Protocol: HTTP
   * Port: Traffic port
   * Path: /health
   * Success code: 200
   * Healthy threshold: 2â€“3
   * Unhealthy threshold: 2â€“3
   * Timeout: shorter than interval
   *
   * Target registration must use port 8080, not port 80.
   *
   * ALB listener port: 80/443
   * Target-group port: 8080
   * Express port: 8080
   */
  
  // =============================================================================
  // 14. CREATE THE APPLICATION LOAD BALANCER
  // =============================================================================
  
  /*
   * Configure:
   *
   * Name: openai-api-alb
   * Type: Application Load Balancer
   * Scheme: Internet-facing
   * IP address type: IPv4 or dual-stack
   * VPC: application VPC
   * Subnets: public subnets in at least two Availability Zones
   * Security group: openai-api-alb-sg
   *
   * Every Availability Zone containing a registered target must be enabled
   * on the ALB.
   */
  
  // =============================================================================
  // 15. CONFIGURE HTTPS
  // =============================================================================
  
  /*
   * Request a public certificate through AWS Certificate Manager:
   *
   * api.example.com
   *
   * Validate ownership through DNS.
   *
   * Add listeners:
   *
   * HTTP:80
   * - redirect to HTTPS:443
   *
   * HTTPS:443
   * - attach the ACM certificate;
   * - forward to Blue and Green target groups.
   *
   * Route 53:
   *
   * api.example.com
   *     |
   *     v
   * Alias record â†’ Application Load Balancer
   *
   * Production clients should use:
   *
   * https://api.example.com
   *
   * They should not depend on the raw ALB DNS name.
   */
  
  // =============================================================================
  // 16. CONFIGURE THE INITIAL LISTENER WEIGHTS
  // =============================================================================
  
  /*
   * Initial production state:
   *
   * openai-api-blue-tg:
   * Weight: 1
   * Percentage: 100%
   *
   * openai-api-green-tg:
   * Weight: 0
   * Percentage: 0%
   *
   * Weight calculations are relative:
   *
   * Blue  = 1 / (1 + 0) = 100%
   * Green = 0 / (1 + 0) = 0%
   *
   * Green remains registered and health-checked but receives no public traffic.
   *
   * Target-group stickiness should normally remain disabled during controlled
   * blue/green switching.
   */
  
  // =============================================================================
  // 17. INSTALL AND CONFIGURE PM2
  // =============================================================================
  
  /*
   * Build the project:
   *
   * npm ci
   * npm run type-check
   * npm test
   * npm run build
   *
   * Start the compiled application:
   *
   * pm2 start dist/server.js --name openai-api-blue
   *
   * Or Green:
   *
   * pm2 start dist/server.js --name openai-api-green
   *
   * Persist the process list:
   *
   * pm2 save
   * pm2 startup
   *
   * Run the sudo command printed by pm2 startup, then:
   *
   * pm2 save
   *
   * Useful commands:
   *
   * pm2 status
   * pm2 logs openai-api-blue
   * pm2 restart openai-api-blue --update-env
   * pm2 monit
   *
   * In production, use an ecosystem.config.js file to keep configuration
   * repeatable.
   */
  
  // =============================================================================
  // 18. USE ATOMIC RELEASE DIRECTORIES
  // =============================================================================
  
  /*
   * Avoid overwriting a running deployment in place.
   *
   * Recommended layout:
   *
   * /opt/openai-api/
   * â”œâ”€â”€ releases/
   * â”‚   â”œâ”€â”€ 1.0.0/
   * â”‚   â””â”€â”€ 1.1.0/
   * â”œâ”€â”€ shared/
   * â”‚   â””â”€â”€ .env
   * â””â”€â”€ current -> /opt/openai-api/releases/1.1.0
   *
   * Deployment flow:
   *
   * 1. Download artifact into a new release directory.
   * 2. Install production dependencies.
   * 3. Attach the shared configuration.
   * 4. Run a local validation.
   * 5. Change the current symlink atomically.
   * 6. Restart or reload PM2.
   *
   * If deployment fails before the symlink changes, the previous release
   * remains untouched.
   */
  
  // =============================================================================
  // 19. BUILD THE CI WORKFLOW
  // =============================================================================
  
  /*
   * Pull requests should run:
   *
   * 1. npm ci
   * 2. npm run type-check
   * 3. npm test
   * 4. npm run build
   * 5. dependency/security scanning
   *
   * Only reviewed code should merge into the production branch.
   *
   * Build once and deploy the same artifact everywhere.
   *
   * Do not rebuild independently on Blue and Green because that can produce
   * different artifacts for the same release.
   *
   * Artifact contents:
   *
   * - dist/
   * - package.json
   * - package-lock.json
   * - deployment metadata
   *
   * Upload the versioned artifact to a private S3 bucket:
   *
   * s3://openai-api-artifacts/releases/1.1.0/app.tar.gz
   */
  
  // =============================================================================
  // 20. CONFIGURE GITHUB ACTIONS SECURITY
  // =============================================================================
  
  /*
   * Workflow permissions:
   *
   * permissions:
   *   id-token: write
   *   contents: read
   *
   * The id-token permission is required for GitHub OIDC.
   *
   * Use a GitHub Environment named:
   *
   * production
   *
   * Configure:
   *
   * - required reviewer approval;
   * - allowed deployment branches;
   * - deployment protection rules;
   * - concurrency so only one production deployment runs at a time.
   *
   * Example:
   *
   * concurrency:
   *   group: production-deployment
   *   cancel-in-progress: false
   *
   * Never allow two workflows to switch production traffic simultaneously.
   */
  
  // =============================================================================
  // 21. DEPLOY TO THE INACTIVE ENVIRONMENT
  // =============================================================================
  
  /*
   * Assume Blue is currently active.
   *
   * The deployment workflow should:
   *
   * 1. Determine that Green is inactive.
   * 2. Build and upload the versioned artifact.
   * 3. Use Systems Manager Run Command to deploy it to Green.
   * 4. Retrieve required secrets from Parameter Store.
   * 5. Restart the Green PM2 process.
   * 6. Run curl http://localhost:8080/health on every Green instance.
   * 7. Confirm the returned version equals the intended release.
   * 8. Wait until every Green target is Healthy.
   * 9. Run smoke tests.
   * 10. Request production approval.
   * 11. Switch traffic.
   *
   * Do not switch traffic merely because npm run build succeeded.
   */
  
  // =============================================================================
  // 22. VALIDATE THE INACTIVE TARGET GROUP
  // =============================================================================
  
  /*
   * Required validations:
   *
   * - process is online;
   * - /health returns HTTP 200;
   * - correct APP_ENV is returned;
   * - correct APP_VERSION is returned;
   * - every target is healthy;
   * - application logs contain no startup errors;
   * - critical dependency checks pass;
   * - smoke tests pass.
   *
   * Example:
   *
   * curl http://localhost:8080/health
   *
   * Expected Green response:
   *
   * {
   *   "success": true,
   *   "status": "healthy",
   *   "environment": "production-green",
   *   "version": "1.1.0-green"
   * }
   */
  
  // =============================================================================
  // 23. SWITCH TRAFFIC FROM BLUE TO GREEN
  // =============================================================================
  
  /*
   * Before:
   *
   * Blue:  1 â†’ 100%
   * Green: 0 â†’ 0%
   *
   * After:
   *
   * Blue:  0 â†’ 0%
   * Green: 1 â†’ 100%
   *
   * Console method:
   *
   * EC2
   * â†’ Load Balancers
   * â†’ openai-api-alb
   * â†’ Listeners and rules
   * â†’ HTTP:80 or HTTPS:443
   * â†’ Default rule
   * â†’ Actions
   * â†’ Edit rule
   * â†’ Reverse weights
   * â†’ Save
   *
   * AWS CLI automation uses:
   *
   * aws elbv2 modify-listener \
   *   --listener-arn "$LISTENER_ARN" \
   *   --default-actions file://actions-green.json
   *
   * actions-green.json:
   *
   * [
   *   {
   *     "Type": "forward",
   *     "ForwardConfig": {
   *       "TargetGroups": [
   *         {
   *           "TargetGroupArn": "BLUE_TARGET_GROUP_ARN",
   *           "Weight": 0
   *         },
   *         {
   *           "TargetGroupArn": "GREEN_TARGET_GROUP_ARN",
   *           "Weight": 1
   *         }
   *       ],
   *       "TargetGroupStickinessConfig": {
   *         "Enabled": false
   *       }
   *     }
   *   }
   * ]
   */
  
  // =============================================================================
  // 24. VERIFY THE LIVE ENVIRONMENT
  // =============================================================================
  
  /*
   * Test through the public production endpoint:
   *
   * curl https://api.example.com/health
   *
   * Expected:
   *
   * {
   *   "environment": "production-green",
   *   "version": "1.1.0-green"
   * }
   *
   * Also validate:
   *
   * - critical API endpoints;
   * - error rate;
   * - target response time;
   * - ALB 5xx count;
   * - application logs;
   * - OpenAI integration;
   * - database connectivity.
   *
   * Do not terminate Blue immediately.
   *
   * Keep Blue available during an observation window so rollback remains fast.
   */
  
  // =============================================================================
  // 25. ROLLBACK WORKFLOW
  // =============================================================================
  
  /*
   * Roll back when:
   *
   * - smoke tests fail;
   * - error rate crosses the threshold;
   * - response time becomes unacceptable;
   * - critical business functionality fails;
   * - Green targets become unhealthy.
   *
   * Rollback:
   *
   * Blue:  1 â†’ 100%
   * Green: 0 â†’ 0%
   *
   * Then:
   *
   * 1. verify the ALB returns Blue;
   * 2. confirm metrics recover;
   * 3. preserve Green logs;
   * 4. investigate Green without production traffic;
   * 5. fix and deploy another version.
   *
   * Important:
   *
   * Weighted target groups should not be treated as automatic cross-group
   * disaster recovery. Your workflow and monitoring must explicitly perform
   * rollback when the active environment is bad.
   */
  
  // =============================================================================
  // 26. OPTIONAL CANARY STEP
  // =============================================================================
  
  /*
   * Instead of switching immediately:
   *
   * Blue weight:  99
   * Green weight: 1
   *
   * Approximate traffic:
   *
   * Blue:  99%
   * Green: 1%
   *
   * Observe metrics, then increase gradually:
   *
   * 90/10
   * 75/25
   * 50/50
   * 0/100
   *
   * Use this only when the application and monitoring can safely handle users
   * reaching different versions during the transition.
   */
  
  // =============================================================================
  // 27. DATABASE MIGRATION SAFETY
  // =============================================================================
  
  /*
   * Blue and Green may briefly run different code versions against the same
   * database.
   *
   * Database changes must be backward-compatible.
   *
   * Use expand-and-contract migrations:
   *
   * Release A:
   * - add the new column or table;
   * - keep old structures working.
   *
   * Release B:
   * - write/read both old and new structures if required.
   *
   * Release C:
   * - remove the old structure only after rollback is no longer required.
   *
   * Never deploy a destructive database migration that immediately prevents
   * the old Blue version from working.
   *
   * Otherwise, traffic rollback will not restore the application.
   */
  
  // =============================================================================
  // 28. MONITORING AND ALERTING
  // =============================================================================
  
  /*
   * Send application logs to CloudWatch Logs.
   *
   * Monitor:
   *
   * - HealthyHostCount;
   * - UnHealthyHostCount;
   * - RequestCount;
   * - TargetResponseTime;
   * - HTTPCode_Target_2XX_Count;
   * - HTTPCode_Target_4XX_Count;
   * - HTTPCode_Target_5XX_Count;
   * - HTTPCode_ELB_5XX_Count;
   * - CPU utilization;
   * - memory utilization through the CloudWatch agent;
   * - disk utilization;
   * - PM2 restart count.
   *
   * Create alarms for:
   *
   * - any unhealthy production target;
   * - sustained 5xx errors;
   * - high latency;
   * - CPU or memory exhaustion;
   * - insufficient healthy capacity.
   *
   * Enable ALB access logs to a protected S3 bucket when request-level
   * investigation and auditability are required.
   */
  
  // =============================================================================
  // 29. SECURITY HARDENING
  // =============================================================================
  
  /*
   * Production checklist:
   *
   * - HTTPS only;
   * - ACM-managed certificate;
   * - WAF for public applications where appropriate;
   * - private EC2 instances;
   * - no public port 8080;
   * - no public SSH;
   * - Systems Manager for administration;
   * - IMDSv2 required;
   * - encrypted EBS volumes;
   * - encrypted S3 artifact bucket;
   * - encrypted secrets;
   * - least-privilege IAM;
   * - GitHub OIDC instead of permanent AWS keys;
   * - protected GitHub production environment;
   * - dependency and image patching;
   * - CloudTrail enabled;
   * - ALB access logs enabled where needed.
   */
  
  // =============================================================================
  // 30. COMPLETE PRODUCTION DEPLOYMENT FLOW
  // =============================================================================
  
  /*
   * Developer opens pull request
   *          |
   *          v
   * Lint + type-check + test + build + scan
   *          |
   *          v
   * Code review and merge
   *          |
   *          v
   * Build one immutable artifact
   *          |
   *          v
   * Upload artifact to S3
   *          |
   *          v
   * Determine inactive environment
   *          |
   *          v
   * Deploy through Systems Manager
   *          |
   *          v
   * Restart PM2
   *          |
   *          v
   * Local /health validation
   *          |
   *          v
   * Target-group health validation
   *          |
   *          v
   * Smoke tests
   *          |
   *          v
   * Production approval
   *          |
   *          v
   * Switch ALB weights
   *          |
   *          v
   * Verify live version and metrics
   *          |
   *      +---+---+
   *      |       |
   *   Healthy   Failure
   *      |       |
   *      v       v
   * Complete   Roll back weights
   */
  
  // =============================================================================
  // 31. FINAL RESOURCE LIST
  // =============================================================================
  
  /*
   * NETWORK:
   *
   * - one VPC;
   * - two or more public ALB subnets;
   * - two or more private application subnets;
   * - Internet Gateway;
   * - NAT Gateway or appropriate VPC endpoints.
   *
   * SECURITY:
   *
   * - openai-api-alb-sg;
   * - openai-api-ec2-sg;
   * - EC2 instance IAM role;
   * - GitHub Actions OIDC deployment role;
   * - KMS key;
   * - Parameter Store/Secrets Manager secret.
   *
   * COMPUTE:
   *
   * - Blue launch template/ASG;
   * - Green launch template/ASG;
   * - PM2-managed Node.js processes.
   *
   * LOAD BALANCING:
   *
   * - openai-api-alb;
   * - openai-api-blue-tg;
   * - openai-api-green-tg;
   * - HTTP redirect listener;
   * - HTTPS production listener.
   *
   * DELIVERY:
   *
   * - private S3 artifact bucket;
   * - GitHub Actions CI workflow;
   * - GitHub Actions deployment workflow;
   * - production approval environment;
   * - automated traffic switch;
   * - automated rollback.
   *
   * OBSERVABILITY:
   *
   * - CloudWatch Logs;
   * - CloudWatch metrics;
   * - CloudWatch alarms;
   * - ALB access logs;
   * - CloudTrail.
   */
  
  // =============================================================================
  // 32. COMPLETION CRITERIA
  // =============================================================================
  
  /*
   * The project is production-ready when:
   *
   * [ ] Tests and builds pass automatically.
   * [ ] The artifact is immutable and versioned.
   * [ ] EC2 instances are private and spread across Availability Zones.
   * [ ] Both target groups contain healthy targets.
   * [ ] HTTPS is enabled.
   * [ ] Secrets are not stored in source code or long-lived CI credentials.
   * [ ] GitHub authenticates to AWS through OIDC.
   * [ ] Deployment always targets the inactive environment.
   * [ ] Traffic switches only after health and smoke tests pass.
   * [ ] The live version is verified after switching.
   * [ ] Rollback can restore the previous environment quickly.
   * [ ] Database changes remain backward-compatible.
   * [ ] Logs, metrics and alarms are configured.
   * [ ] A failed deployment has been deliberately tested.
   */
  
  // =============================================================================
  // 33. KEY LESSON
  // =============================================================================
  
  /*
   * Blue/green deployment is not simply running two servers.
   *
   * It is a release-safety strategy:
   *
   * 1. Keep the current release available.
   * 2. Deploy the next release separately.
   * 3. Validate it before exposing users.
   * 4. Move traffic through a stable entry point.
   * 5. Preserve the previous release for fast rollback.
   *
   * The ALB controls traffic.
   * Target groups isolate environments.
   * Health checks verify reachability.
   * Auto Scaling provides capacity and resilience.
   * GitHub Actions makes deployments repeatable.
   * OIDC and IAM secure automation.
   * Monitoring determines whether to continue or roll back.
   */
  
  // =============================================================================
  // 34. ROUTE SELECTED TESTERS TO BLUE OR GREEN
  // =============================================================================
  
  /*
   * Weighted target groups control broad release traffic:
   *
   * Blue:  1 â†’ 100%
   * Green: 0 â†’ 0%
   *
   * Listener rules can override that default for requests matching specific
   * conditions.
   *
   * ALB listener rules can match information such as:
   *
   * - HTTP headers;
   * - hostnames;
   * - URL paths;
   * - query strings;
   * - source IP addresses;
   * - HTTP methods.
   *
   * Example requirement:
   *
   * - QA testers should use Blue;
   * - normal production users should use Green.
   *
   * Listener rule with priority 10:
   *
   * Condition:
   * HTTP header X-Release-Channel equals blue
   *
   * Action:
   * Forward to openai-api-blue-tg
   *
   * Default listener rule:
   * Forward to openai-api-green-tg
   *
   * Request flow:
   *
   * Request includes X-Release-Channel: blue
   *                         |
   *                         v
   *                Blue target group
   *
   * Request does not include the header
   *                         |
   *                         v
   *                Green target group
   *
   * This is useful for controlled QA and preview traffic.
   */
  
  // =============================================================================
  // 35. PASS THE RELEASE HEADER FROM A FRONTEND
  // =============================================================================
  
  /*
   * The frontend must attach the routing header before the request reaches the
   * ALB.
   *
   * fetch example:
   *
   * const response = await fetch("https://api.example.com/api/chat", {
   *   method: "POST",
   *   headers: {
   *     "Content-Type": "application/json",
   *     "Authorization": `Bearer ${accessToken}`,
   *     "X-Release-Channel": "blue",
   *   },
   *   body: JSON.stringify({
   *     message: "Hello",
   *   }),
   * });
   *
   * Axios example:
   *
   * const response = await axios.post(
   *   "https://api.example.com/api/chat",
   *   { message: "Hello" },
   *   {
   *     headers: {
   *       Authorization: `Bearer ${accessToken}`,
   *       "X-Release-Channel": "blue",
   *     },
   *   },
   * );
   *
   * Processing order:
   *
   * Frontend creates request
   *          |
   *          v
   * Frontend adds X-Release-Channel
   *          |
   *          v
   * ALB evaluates listener rules
   *          |
   *          v
   * ALB chooses Blue or Green
   *          |
   *          v
   * Selected Express backend receives the request
   *
   * The selected backend receives the header like any other request header:
   *
   * const releaseChannel = request.header("X-Release-Channel");
   *
   * However, Express receives the request only after the ALB has already made
   * its routing decision. The selected backend cannot ask the same ALB to
   * reroute that current request retroactively.
   */
  
  // =============================================================================
  // 36. ALLOW THE CUSTOM HEADER THROUGH CORS
  // =============================================================================
  
  /*
   * If the frontend and API use different origins, a custom request header can
   * cause the browser to send an OPTIONS preflight request.
   *
   * Express configuration:
   *
   * app.use(
   *   cors({
   *     origin: [
   *       "https://app.example.com",
   *       "https://admin.example.com",
   *     ],
   *     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
   *     allowedHeaders: [
   *       "Content-Type",
   *       "Authorization",
   *       "X-Release-Channel",
   *     ],
   *     credentials: true,
   *   }),
   * );
   *
   * Do not combine credentials with an unrestricted origin.
   *
   * Unsafe:
   *
   * origin: "*"
   * credentials: true
   *
   * Only trusted frontend origins should be allowed in production.
   */
  
  // =============================================================================
  // 37. DO NOT USE A FRONTEND HEADER AS AUTHORIZATION
  // =============================================================================
  
  /*
   * Browser code runs on a user's device.
   *
   * A user can open Developer Tools or use curl/Postman and send:
   *
   * X-Release-Channel: blue
   *
   * Therefore, the header does not prove that the user is authorised to use
   * Blue.
   *
   * Good uses:
   *
   * - QA testing;
   * - internal preview environments;
   * - cooperative test clients;
   * - non-sensitive release-channel selection.
   *
   * Bad uses:
   *
   * - protecting administrative functionality;
   * - enforcing paid subscription access;
   * - protecting private customer information;
   * - replacing JWT/session authorization;
   * - deciding security permissions.
   *
   * Routing answers:
   *
   * "Which environment should process this request?"
   *
   * Authorization answers:
   *
   * "Is this authenticated user allowed to perform this action?"
   *
   * These are separate responsibilities.
   */
  
  // =============================================================================
  // 38. SECURE OPTIONS FOR INTERNAL BLUE ACCESS
  // =============================================================================
  
  /*
   * OPTION A â€” PROTECTED PREVIEW HOSTNAME
   *
   * api.example.com
   * â†’ current production environment
   *
   * blue-api.example.com
   * â†’ Blue target group
   *
   * Add an ALB host-header listener rule:
   *
   * Host = blue-api.example.com
   * Action = forward to openai-api-blue-tg
   *
   * Protect the preview hostname using one or more of:
   *
   * - company VPN;
   * - trusted source-IP rules;
   * - an authentication-aware proxy;
   * - AWS WAF;
   * - an internal ALB;
   * - API Gateway/CloudFront with an authentication layer.
   *
   * OPTION B â€” SOURCE-IP RULE
   *
   * Condition:
   * Source IP equals the company VPN address range
   *
   * Action:
   * Forward to openai-api-blue-tg
   *
   * Default:
   * Forward to openai-api-green-tg
   *
   * This works well when testers always connect through a predictable company
   * network or VPN.
   *
   * OPTION C â€” TRUSTED GATEWAY
   *
   * A trusted gateway validates the JWT/session, determines the release cohort,
   * and forwards the request internally.
   *
   * Frontend
   *    |
   *    v
   * Authentication-aware gateway
   *    |
   *    +---- authorised Blue cohort ---> Blue
   *    |
   *    +---- everyone else -----------> Green
   *
   * The gateway decision is based on verified identity rather than a value the
   * browser can freely invent.
   */
  
  // =============================================================================
  // 39. USE FEATURE FLAGS FOR SPECIFIC AUTHENTICATED USERS
  // =============================================================================
  
  /*
   * If the requirement is:
   *
   * "Enable the new feature for these customer accounts"
   *
   * then feature flags are normally better than routing whole users between
   * infrastructure environments.
   *
   * Recommended flow:
   *
   * Frontend sends authenticated request
   *               |
   *               v
   * ALB sends request to active production environment
   *               |
   *               v
   * Backend verifies JWT/session
   *               |
   *               v
   * Backend obtains trusted user ID
   *               |
   *               v
   * Feature-flag service checks assignment
   *               |
   *       +-------+-------+
   *       |               |
   *       v               v
   * New behaviour     Existing behaviour
   *
   * Example:
   *
   * const enabled = await featureFlags.isEnabled({
   *   flag: "new-chat-experience",
   *   userId: request.user.id,
   * });
   *
   * if (enabled) {
   *   return handleNewChatExperience(request, response);
   * }
   *
   * return handleExistingChatExperience(request, response);
   *
   * The authenticated user ID must come from a verified token/session, not from
   * an untrusted userId supplied in the request body.
   */
  
  // =============================================================================
  // 40. CHOOSE THE CORRECT USER-ROUTING STRATEGY
  // =============================================================================
  
  /*
   * Requirement:
   * QA team needs to preview Blue
   * Recommended solution:
   * Protected preview hostname or controlled request header
   *
   * Requirement:
   * Company/VPN users should reach Blue
   * Recommended solution:
   * ALB source-IP listener rule
   *
   * Requirement:
   * Selected customer accounts should receive a new feature
   * Recommended solution:
   * Backend feature flags based on authenticated user ID
   *
   * Requirement:
   * A small percentage of real traffic should reach Green
   * Recommended solution:
   * Weighted ALB target groups, such as Blue 90 / Green 10
   *
   * Requirement:
   * Blue must be securely private to employees
   * Recommended solution:
   * Internal/protected hostname with VPN or authentication-aware access
   *
   * Practical rule:
   *
   * ALB weights
   * â†’ control release traffic globally or by percentage.
   *
   * ALB listener rules
   * â†’ route requests using visible request/network attributes.
   *
   * Backend authorization
   * â†’ controls what an authenticated user may do.
   *
   * Feature flags
   * â†’ control which product behaviour a specific user receives.
   */