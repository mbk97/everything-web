// =============================================================================
// MID-LEVEL TO ADVANCED DEVOPS + NODE.JS PROJECTS
// =============================================================================

// -----------------------------------------------------------------------------
// ! WHY THIS FOLDER EXISTS
// -----------------------------------------------------------------------------
/*
 * This folder turns the topics already covered in Devops
 * into stronger hands-on build projects.
 *
 * Your current foundation already includes:
 * - Linux and shell automation
 * - Node.js deployment on servers
 * - Docker and multi-container setups
 * - AWS networking and delivery
 * - Terraform
 * - Kubernetes
 * - Monitoring and alerting
 * - Security and secrets management
 * - Ansible deployment automation
 *
 * The goal here is to move from:
 * "I understand the tools"
 * into:
 * "I can combine them into production-style systems."
 */

// -----------------------------------------------------------------------------
// ! PROJECT 1 - BLUE/GREEN EXPRESS API ON EC2 + ALB == IN Progress
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Mid-level to advanced
 *
 * Stack:
 * - Node.js
 * - Express
 * - EC2
 * - ALB
 * - GitHub Actions
 *
 * Build:
 * - two versions of the same API
 * - two target groups
 * - health-check-based traffic switch
 * - rollback workflow
 *
 * Focus:
 * - zero-downtime deployment
 * - traffic management
 * - release safety
 */

// -----------------------------------------------------------------------------
// ! PROJECT 2 - STAGING + PRODUCTION DELIVERY PLATFORM
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Mid-level
 *
 * Stack:
 * - Node.js
 * - React
 * - EC2 or ECS
 * - S3
 * - CloudFront
 * - Route53
 * - GitHub Actions
 *
 * Build:
 * - separate staging and production environments
 * - separate environment variables
 * - separate DNS records
 * - separate deployment workflows
 *
 * Focus:
 * - environment isolation
 * - safer promotion flow
 * - deployment discipline
 */

// -----------------------------------------------------------------------------
// ! PROJECT 3 - DOCKERIZED FULL-STACK MONOREPO
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Mid-level
 *
 * Stack:
 * - Node.js
 * - Express
 * - React
 * - Redis
 * - MongoDB or Postgres
 * - Nginx
 * - Docker Compose
 *
 * Build:
 * - frontend container
 * - backend container
 * - database container
 * - reverse proxy container
 * - health checks and restart policies
 *
 * Focus:
 * - service architecture
 * - container networking
 * - local production simulation
 */

// -----------------------------------------------------------------------------
// ! PROJECT 4 - PM2 TO DOCKER MIGRATION
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Mid-level
 *
 * Stack:
 * - Node.js
 * - PM2
 * - Docker
 * - Nginx
 * - EC2
 *
 * Build:
 * - existing PM2 app
 * - Dockerized replacement
 * - cutover checklist
 * - rollback plan
 *
 * Focus:
 * - runtime consistency
 * - migration planning
 * - production cutover thinking
 */

// -----------------------------------------------------------------------------
// ! PROJECT 5 - ECS FARGATE NODE API
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Advanced
 *
 * Stack:
 * - Node.js
 * - Express or Fastify
 * - Docker
 * - ECS Fargate
 * - ALB
 * - CloudWatch
 *
 * Build:
 * - Dockerized API
 * - ECS service
 * - task definition
 * - ALB routing
 * - autoscaling rules
 *
 * Focus:
 * - container deployment on AWS
 * - managed orchestration
 * - production service scaling
 */

// -----------------------------------------------------------------------------
// ! PROJECT 6 - KUBERNETES NODE MICROSERVICES
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Advanced
 *
 * Stack:
 * - Node.js
 * - Express
 * - Kubernetes
 * - Ingress
 * - ConfigMaps
 * - Secrets
 * - Helm
 *
 * Build:
 * - auth service
 * - orders service
 * - notifications service
 * - ingress routing
 * - readiness and liveness probes
 *
 * Focus:
 * - service decomposition
 * - Kubernetes operations
 * - environment-aware configuration
 */

// -----------------------------------------------------------------------------
// ! PROJECT 7 - CANARY RELEASE SYSTEM FOR NODE
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Advanced
 *
 * Stack:
 * - Node.js
 * - ALB or Kubernetes
 * - GitHub Actions
 * - monitoring alerts
 *
 * Build:
 * - versioned API releases
 * - partial traffic rollout
 * - automated health validation
 * - rollback trigger on failure
 *
 * Focus:
 * - progressive delivery
 * - safer releases
 * - deployment automation
 */

// -----------------------------------------------------------------------------
// ! PROJECT 8 - KAFKA ORDER EVENT PIPELINE
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Advanced
 *
 * Stack:
 * - Node.js
 * - KafkaJS
 * - Docker
 * - Express
 *
 * Build:
 * - order producer service
 * - inventory consumer
 * - notification consumer
 * - dead letter queue strategy
 * - retry and idempotency logic
 *
 * Focus:
 * - event-driven architecture
 * - asynchronous workflows
 * - distributed system reliability
 */

// -----------------------------------------------------------------------------
// ! PROJECT 9 - BULLMQ BACKGROUND JOB PLATFORM
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Mid-level to advanced
 *
 * Stack:
 * - Node.js
 * - Express
 * - Redis
 * - BullMQ
 * - Docker
 *
 * Build:
 * - API that creates jobs
 * - worker that processes jobs
 * - retries and failure queues
 * - admin dashboard
 *
 * Focus:
 * - queue-based workloads
 * - async processing
 * - operational visibility
 */

// -----------------------------------------------------------------------------
// ! PROJECT 10 - TERRAFORM FULL-STACK AWS PLATFORM
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Advanced
 *
 * Stack:
 * - Terraform
 * - EC2 or ECS
 * - S3
 * - CloudFront
 * - Route53
 * - IAM
 * - VPC
 *
 * Build:
 * - frontend hosting
 * - backend hosting
 * - DNS
 * - security groups
 * - remote state
 * - outputs for useful endpoints
 *
 * Focus:
 * - infrastructure as code
 * - reproducible environments
 * - resource dependency thinking
 */

// -----------------------------------------------------------------------------
// ! PROJECT 11 - ANSIBLE NODE DEPLOYMENT AUTOMATION
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Mid-level
 *
 * Stack:
 * - Ansible
 * - Node.js
 * - Nginx
 * - EC2
 * - systemd or PM2
 *
 * Build:
 * - server bootstrap playbook
 * - deploy playbook
 * - environment template
 * - service restart
 * - health check validation
 *
 * Focus:
 * - idempotent automation
 * - repeatable deployment flow
 * - operational consistency
 */

// -----------------------------------------------------------------------------
// ! PROJECT 12 - PROMETHEUS/GRAFANA FOR NODE SERVICES
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Advanced
 *
 * Stack:
 * - Node.js
 * - prom-client
 * - Prometheus
 * - Grafana
 * - Docker or Kubernetes
 *
 * Build:
 * - /metrics endpoint
 * - request count graph
 * - latency graph
 * - error rate graph
 * - alert conditions
 *
 * Focus:
 * - observability
 * - service-level metrics
 * - alert-driven operations
 */

// -----------------------------------------------------------------------------
// ! PROJECT 13 - CLOUDWATCH-NATIVE OBSERVABILITY STACK
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Mid-level to advanced
 *
 * Stack:
 * - Node.js
 * - CloudWatch Logs
 * - CloudWatch Metrics
 * - CloudWatch Alarms
 * - SNS
 *
 * Build:
 * - structured application logs
 * - metric filters
 * - dashboards
 * - latency and error alarms
 * - notification pipeline
 *
 * Focus:
 * - AWS-native observability
 * - incident detection
 * - log-to-metric thinking
 */

// -----------------------------------------------------------------------------
// ! PROJECT 14 - SECRETS MANAGER + RUNTIME INJECTION
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Mid-level
 *
 * Stack:
 * - Node.js
 * - AWS Secrets Manager or SSM Parameter Store
 * - ECS or EC2
 *
 * Build:
 * - move secrets out of local files
 * - secure runtime loading
 * - environment-specific secret values
 * - rotation checklist
 *
 * Focus:
 * - secret hygiene
 * - controlled access
 * - safer production configuration
 */

// -----------------------------------------------------------------------------
// ! PROJECT 15 - SECURE SUPPLY CHAIN CI/CD
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Advanced
 *
 * Stack:
 * - Node.js
 * - GitHub Actions
 * - Docker
 * - image scanning
 * - dependency scanning
 * - secret scanning
 *
 * Build:
 * - lint and test jobs
 * - dependency audit
 * - container scan
 * - branch protection workflow
 * - gated deployment
 *
 * Focus:
 * - DevSecOps workflow
 * - trusted releases
 * - deployment confidence
 */

// -----------------------------------------------------------------------------
// ! PROJECT 16 - BACKUP, RESTORE, AND DISASTER RECOVERY DRILL
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Mid-level to advanced
 *
 * Stack:
 * - Node.js
 * - MongoDB or Postgres
 * - Bash
 * - S3
 * - cron or scheduler
 *
 * Build:
 * - scheduled backups
 * - retention policy
 * - restore script
 * - restore verification
 * - recovery time notes
 *
 * Focus:
 * - disaster recovery
 * - operational ownership
 * - recovery testing
 */

// -----------------------------------------------------------------------------
// ! PROJECT 17 - PRESIGNED UPLOAD + PROCESSING PIPELINE
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Mid-level
 *
 * Stack:
 * - Node.js
 * - S3
 * - CloudFront
 * - background worker
 *
 * Build:
 * - presigned upload endpoint
 * - client upload flow
 * - async file processing
 * - final asset delivery through CDN
 *
 * Focus:
 * - storage integration
 * - secure upload design
 * - asset delivery workflow
 */

// -----------------------------------------------------------------------------
// ! PROJECT 18 - MULTI-REGION NODE API FAILOVER
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Advanced
 *
 * Stack:
 * - Node.js
 * - Route53
 * - ALB
 * - EC2 or ECS
 * - health checks
 *
 * Build:
 * - same API in two regions
 * - primary and secondary routing
 * - regional health checks
 * - outage simulation
 *
 * Focus:
 * - high availability
 * - failover design
 * - resilience under failure
 */

// -----------------------------------------------------------------------------
// ! PROJECT 19 - INCIDENT SIMULATION LAB FOR NODE SERVICES
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Advanced
 *
 * Stack:
 * - Node.js
 * - Linux
 * - Nginx
 * - systemd
 * - Docker or Kubernetes
 *
 * Build:
 * - broken env variable scenario
 * - occupied port scenario
 * - SSL misconfiguration scenario
 * - disk pressure scenario
 * - runbook for each failure
 *
 * Focus:
 * - troubleshooting depth
 * - debugging discipline
 * - incident response practice
 */

// -----------------------------------------------------------------------------
// ! PROJECT 20 - SELF-SERVICE RELEASE PORTAL
// -----------------------------------------------------------------------------
/*
 * Difficulty:
 * - Advanced
 *
 * Stack:
 * - Node.js
 * - Express or Next.js
 * - GitHub Actions
 * - Terraform or Ansible
 * - audit logging
 *
 * Build:
 * - internal deployment dashboard
 * - release approval flow
 * - environment selection
 * - deployment status view
 * - rollback trigger
 *
 * Focus:
 * - platform thinking
 * - internal tooling
 * - release operations at team scale
 */

// -----------------------------------------------------------------------------
// ! RECOMMENDED STARTING ORDER
// -----------------------------------------------------------------------------
/*
 * Strong first 5 from this list:
 *
 * 1. Blue/Green Express API on EC2 + ALB
 * 2. Dockerized Full-Stack Monorepo
 * 3. ECS Fargate Node API
 * 4. Terraform Full-Stack AWS Platform
 * 5. Prometheus/Grafana for Node Services
 *
 * Why these first:
 * - they build directly on your current Devops folder
 * - they combine Linux, AWS, Docker, Terraform, and monitoring
 * - they push you into production-style system design
 */
