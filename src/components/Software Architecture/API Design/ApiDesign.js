// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE-SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// PHASE 4A → API DESIGN AND CONTRACTS
//
// Goal:
//
// Learn how to design stable, predictable APIs that clients can use safely as
// the system grows and changes.
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Beginner thinks:
 *
 * "An API is a URL that returns JSON."
 *
 * Senior Engineer thinks:
 *
 * "An API is a contract other software will depend on."
 *
 * Architect thinks:
 *
 * "How will this contract evolve without breaking its consumers?"
 */

// -----------------------------------------------------------------------------
// 📦 WHAT IS AN API CONTRACT?
// -----------------------------------------------------------------------------

/*
 * An API contract defines:
 *
 * ✔ Available operations
 * ✔ Required input
 * ✔ Returned output
 * ✔ Error behavior
 * ✔ Authentication rules
 * ✔ Performance and usage limits
 * ✔ Compatibility expectations
 *
 * The implementation can change behind the contract.
 * Consumers should not need to know the internal database or class structure.
 */

// -----------------------------------------------------------------------------
// 🧱 DESIGN RESOURCES, NOT ACTION URLS
// -----------------------------------------------------------------------------

/*
 * Prefer nouns that describe business resources.
 *
 * Weak:
 *
 * POST /createUser
 * POST /getUser
 * POST /deleteUser
 *
 * Clearer:
 *
 * POST   /users
 * GET    /users/42
 * PATCH  /users/42
 * DELETE /users/42
 *
 * A business action that is not simple CRUD can still be explicit:
 *
 * POST /transfers/123/cancellations
 */

// -----------------------------------------------------------------------------
// 🌐 HTTP METHOD SEMANTICS
// -----------------------------------------------------------------------------

/*
 * GET    → Read a resource; should not change server state
 * POST   → Create a resource or start a command
 * PUT    → Replace a resource at a known address
 * PATCH  → Partially update a resource
 * DELETE → Remove a resource
 *
 * Safe means an operation does not change server state.
 * Idempotent means repeating it has the same intended effect as doing it once.
 *
 * GET, PUT, and DELETE should be idempotent.
 * POST is not automatically idempotent.
 */

// -----------------------------------------------------------------------------
// ✅ STATUS CODES HAVE MEANING
// -----------------------------------------------------------------------------

/*
 * 200 OK           → successful response
 * 201 Created      → a new resource was created
 * 202 Accepted     → work was accepted and continues asynchronously
 * 204 No Content   → successful response with no body
 * 400 Bad Request  → malformed request
 * 401 Unauthorized → identity is missing or invalid
 * 403 Forbidden    → identity is valid but lacks permission
 * 404 Not Found    → resource does not exist
 * 409 Conflict     → current resource state conflicts with the request
 * 422 Unprocessable Content → validation failed
 * 429 Too Many Requests     → rate limit exceeded
 * 500 Internal Server Error → unexpected server failure
 * 503 Service Unavailable   → temporarily unable to serve the request
 *
 * Do not return 200 with { success: false } for every failure.
 */

// -----------------------------------------------------------------------------
// 🧾 INPUT VALIDATION
// -----------------------------------------------------------------------------

/*
 * Validate at the system boundary.
 *
 * POST /transfers
 *
 * {
 *   "fromAccountId": "acc-1",
 *   "toAccountId": "acc-2",
 *   "amount": 2500,
 *   "currency": "NGN"
 * }
 *
 * Check:
 *
 * Required fields
 * Data types
 * Allowed ranges
 * Allowed values
 * String length
 * Business rules
 * Authorization
 *
 * Validation errors should identify the field and a machine-readable reason.
 */

// -----------------------------------------------------------------------------
// ❌ CONSISTENT ERROR RESPONSES
// -----------------------------------------------------------------------------

/*
 * Example:
 *
 * {
 *   "code": "INSUFFICIENT_FUNDS",
 *   "message": "The account has insufficient funds.",
 *   "requestId": "req-789",
 *   "details": [
 *     { "field": "amount", "reason": "exceeds_available_balance" }
 *   ]
 * }
 *
 * code      → stable value clients can handle
 * message   → safe human-readable explanation
 * requestId → connects the client failure to server logs
 * details   → precise validation information
 *
 * Never expose stack traces, SQL text, credentials, or internal hostnames.
 */

// -----------------------------------------------------------------------------
// 🔁 IDEMPOTENCY FOR IMPORTANT COMMANDS
// -----------------------------------------------------------------------------

/*
 * A client sends a payment request.
 * The server completes it, but the response is lost.
 * The client retries.
 *
 * Without protection → two payments may be created.
 *
 * Request:
 *
 * POST /payments
 * Idempotency-Key: checkout-91-attempt-1
 *
 * The server stores the key and result.
 * A repeated request with the same key returns the original result.
 *
 * Idempotency is essential for payments, orders, transfers, and other commands
 * where an accidental duplicate has real consequences.
 */

// -----------------------------------------------------------------------------
// 📚 PAGINATION, FILTERING, AND SORTING
// -----------------------------------------------------------------------------

/*
 * Never assume a collection remains small.
 *
 * GET /transactions?accountId=acc-1&limit=50&cursor=tx-900
 *
 * Response:
 *
 * {
 *   "items": [ ... ],
 *   "nextCursor": "tx-850"
 * }
 *
 * Offset pagination is simple but can become slow or inconsistent on rapidly
 * changing large datasets.
 *
 * Cursor pagination is usually more stable for feeds and transaction histories.
 * Define maximum page sizes to protect the service.
 */

// -----------------------------------------------------------------------------
// 🧬 VERSIONING AND COMPATIBILITY
// -----------------------------------------------------------------------------

/*
 * Common approaches:
 *
 * URL version      → /v1/users/42
 * Header version   → Accept: application/vnd.company.v2+json
 * Date version     → contract selected by a published API date
 *
 * Prefer backward-compatible changes when possible:
 *
 * Usually safe     → add an optional response field
 * Usually breaking → rename a field, remove a value, change its type
 *
 * A deprecation plan needs:
 *
 * ✔ Notice
 * ✔ Migration documentation
 * ✔ Usage monitoring
 * ✔ A retirement date
 */

// -----------------------------------------------------------------------------
// 🔀 REST, gRPC, GRAPHQL, AND EVENTS
// -----------------------------------------------------------------------------

/*
 * REST
 *
 * ✔ Familiar HTTP semantics
 * ✔ Good public and browser-facing APIs
 *
 * gRPC
 *
 * ✔ Strong schemas and efficient binary communication
 * ✔ Good internal service-to-service calls
 *
 * GraphQL
 *
 * ✔ Clients request exactly the fields they need
 * ✔ Useful for varied frontend data needs
 * ❌ Query cost and caching require care
 *
 * Events
 *
 * ✔ Producers do not wait for every consumer
 * ✔ Good for asynchronous facts such as TransferCompleted
 * ❌ Delivery, ordering, and schema evolution must be designed
 *
 * Choose based on consumers and constraints, not fashion.
 */

// -----------------------------------------------------------------------------
// ⏳ LONG-RUNNING OPERATIONS
// -----------------------------------------------------------------------------

/*
 * Do not keep an HTTP connection open for a ten-minute report.
 *
 * POST /reports
 *
 * Response: 202 Accepted
 *
 * {
 *   "reportId": "report-123",
 *   "status": "queued",
 *   "statusUrl": "/reports/report-123"
 * }
 *
 * A worker creates the report.
 * The client polls the status URL or receives a webhook when it is ready.
 */

// -----------------------------------------------------------------------------
// 🛡️ PROTECT THE CONTRACT
// -----------------------------------------------------------------------------

/*
 * API protection includes:
 *
 * TLS
 * Authentication
 * Authorization for every protected resource
 * Rate limiting
 * Request size limits
 * Schema validation
 * CORS rules for browser clients
 * Audit logs for sensitive operations
 *
 * An API Gateway can apply shared controls, but each service must still protect
 * its own business rules and data.
 */

// -----------------------------------------------------------------------------
// 🔭 OPERABILITY
// -----------------------------------------------------------------------------

/*
 * Every API should define:
 *
 * Timeouts
 * Rate limits
 * Expected error codes
 * Request correlation IDs
 * Metrics by route and status
 * Deprecation policy
 * Ownership
 *
 * Publish the contract with OpenAPI, Protocol Buffers, or another schema format.
 * Test consumers against the contract before deployment.
 */

// -----------------------------------------------------------------------------
// 🏦 COMPLETE TRANSFER API
// -----------------------------------------------------------------------------

/*
 * POST /v1/transfers
 * Authorization: Bearer <token>
 * Idempotency-Key: transfer-attempt-818
 *
 * Request body
 *      │
 *      ▼
 * API Gateway
 *      │ authentication, rate limit, request ID
 *      ▼
 * Transfer Service
 *      │ validation, authorization, business rules
 *      ▼
 * Ledger Database
 *      │ atomic transaction
 *      ▼
 * 201 Created
 *
 * The response returns the transfer resource and its stable status.
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * Ask:
 *
 * Who are the consumers?
 * What may they retry?
 * Which changes would break them?
 * How large can each response become?
 * How is a failure represented?
 * How will the contract be retired?
 *
 * An API is successful when clients can depend on it without understanding its
 * implementation.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 * Design resource URLs for users, accounts, and transactions.
 *
 * TASK 2
 * Create a consistent validation-error shape.
 *
 * TASK 3
 * Explain how an idempotency key prevents a duplicate payment.
 *
 * TASK 4
 * Design cursor pagination for a transaction history.
 *
 * TASK 5
 * List one situation where REST, gRPC, GraphQL, and events are each suitable.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * ✔ APIs are long-lived contracts
 * ✔ Resource names and HTTP semantics make behavior predictable
 * ✔ Validation and errors must be consistent and safe
 * ✔ Idempotency protects retried commands
 * ✔ Pagination protects growing collections
 * ✔ Compatibility and deprecation are design responsibilities
 * ✔ REST, gRPC, GraphQL, and events solve different communication problems
 *
 * BIG IDEA
 *
 * Good API design hides implementation details while making behavior explicit.
 */
