// -----------------------------------------------------------------------------
// 🧠 REAL-WORLD CASE STUDY 2 — DESIGN A PAYMENT SYSTEM
// -----------------------------------------------------------------------------
//
// Goal:
//
// Apply idempotency, ledgers, state machines, external-provider integration,
// asynchronous processing, reconciliation, security, and auditability.
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🎯 REQUIREMENTS
// -----------------------------------------------------------------------------

/*
 * Functional:
 *
 * ✔ A merchant creates a payment
 * ✔ A customer completes payment through a provider
 * ✔ A merchant checks payment status
 * ✔ The platform sends a webhook when status changes
 * ✔ Operations can refund a successful payment
 * ✔ The system reconciles internal records with provider records
 *
 * Non-functional:
 *
 * ✔ A retry must never create an accidental duplicate charge
 * ✔ Money records must be strongly consistent and auditable
 * ✔ Provider slowness must not collapse the platform
 * ✔ Status changes must survive process failure
 */

// -----------------------------------------------------------------------------
// 💰 MONEY IS NOT A FLOAT
// -----------------------------------------------------------------------------

/*
 * Store money as:
 *
 * amount_minor = 1050
 * currency     = "NGN"
 *
 * The value represents the currency's smallest supported unit according to the
 * product's money library and currency rules.
 *
 * Avoid binary floating-point arithmetic for financial amounts.
 * Always store currency with amount and define rounding rules explicitly.
 */

// -----------------------------------------------------------------------------
// 🔌 CREATE PAYMENT API
// -----------------------------------------------------------------------------

/*
 * POST /payments
 * Authorization: Bearer <merchant-token>
 * Idempotency-Key: checkout-order-712
 *
 * {
 *   "orderId": "order-712",
 *   "amountMinor": 1050,
 *   "currency": "NGN",
 *   "paymentMethodToken": "pm_81"
 * }
 *
 * Response:
 *
 * {
 *   "paymentId": "pay-304",
 *   "status": "processing"
 * }
 *
 * The server stores the idempotency key, a hash of relevant request fields, and
 * the original result. Reuse with different input is rejected.
 */

// -----------------------------------------------------------------------------
// 🔄 PAYMENT STATE MACHINE
// -----------------------------------------------------------------------------

/*
 * CREATED
 *    │
 *    ▼
 * PROCESSING
 *    ├────► SUCCEEDED ──► PARTIALLY_REFUNDED ──► REFUNDED
 *    ├────► FAILED
 *    └────► REQUIRES_ACTION
 *
 * Only named transitions are allowed.
 *
 * Example:
 *
 * SUCCEEDED → PROCESSING is invalid.
 * FAILED → SUCCEEDED needs explicit late-success handling and reconciliation.
 *
 * A state machine prevents contradictory updates from callbacks and retries.
 */

// -----------------------------------------------------------------------------
// 📒 DOUBLE-ENTRY LEDGER
// -----------------------------------------------------------------------------

/*
 * Record value movement as balanced entries.
 *
 * Payment of 1,050 minor units:
 *
 * Customer / Provider Clearing  -1,050
 * Merchant Payable              +1,050
 *
 * Total = 0
 *
 * Ledger properties:
 *
 * Append-only entries
 * Balanced transaction groups
 * Immutable identifiers
 * Explicit currency
 * Complete audit metadata
 * Reversals instead of destructive edits
 *
 * Payment status describes workflow. The ledger describes money movement.
 */

// -----------------------------------------------------------------------------
// 🏗️ HIGH-LEVEL ARCHITECTURE
// -----------------------------------------------------------------------------

/*
 * Merchant
 *    │
 *    ▼
 * API Gateway
 *    │
 *    ▼
 * Payment Service ─────► Payment Database
 *    │                         │
 *    │                         └────► Outbox
 *    ▼
 * Provider Adapter ─────► External Payment Provider
 *                              │
 * Webhook Gateway ◄────────────┘
 *    │
 *    ▼
 * Event Queue
 *    ├────► Payment State Worker
 *    ├────► Merchant Webhook Worker
 *    └────► Reconciliation Worker
 *
 * Ledger Service ─────► Ledger Database
 */

// -----------------------------------------------------------------------------
// 🔁 PAYMENT FLOW
// -----------------------------------------------------------------------------

/*
 * 1. Merchant creates payment with an idempotency key
 * 2. Service validates merchant, order, amount, and currency
 * 3. Database stores payment in PROCESSING state
 * 4. Provider adapter submits a provider idempotency key
 * 5. Immediate provider result is recorded if definitive
 * 6. Provider may later send an authenticated webhook
 * 7. State worker applies a valid transition exactly once in effect
 * 8. Successful money movement creates balanced ledger entries
 * 9. Outbox publishes PaymentSucceeded
 * 10. Webhook worker notifies the merchant with retries
 */

// -----------------------------------------------------------------------------
// 📨 WEBHOOKS ARE UNTRUSTED AND REPEATED
// -----------------------------------------------------------------------------

/*
 * On provider webhook receipt:
 *
 * Verify signature
 * Verify timestamp and replay window
 * Limit body size
 * Store provider event ID with a unique constraint
 * Return quickly
 * Process asynchronously
 * Apply only valid state transitions
 *
 * Providers may deliver the same event more than once or deliver events out of
 * order. Event IDs and the state machine make processing idempotent.
 */

// -----------------------------------------------------------------------------
// ⏱️ TIMEOUTS AND UNKNOWN OUTCOMES
// -----------------------------------------------------------------------------

/*
 * The provider times out after receiving a charge request.
 *
 * The outcome is UNKNOWN, not automatically FAILED.
 *
 * Bad response:
 *
 * Mark failed and immediately submit a brand-new charge.
 *
 * Safer response:
 *
 * Keep PROCESSING
 * Query provider using the same provider reference
 * Wait for provider webhook
 * Reconcile later
 *
 * Timeouts describe what the caller knows, not what the provider did.
 */

// -----------------------------------------------------------------------------
// 🧾 RECONCILIATION
// -----------------------------------------------------------------------------

/*
 * Reconciliation compares independent records.
 *
 * Internal payments and ledger
 *          │
 *          ▼ compare
 * Provider settlement report
 *          │
 *          ▼
 * Matched | Missing | Amount mismatch | Status mismatch
 *
 * Differences create investigation items.
 * Reconciliation catches lost callbacks, manual provider changes, software bugs,
 * and delayed settlement that normal request flows may miss.
 */

// -----------------------------------------------------------------------------
// 🔔 MERCHANT WEBHOOK DELIVERY
// -----------------------------------------------------------------------------

/*
 * Send a signed webhook event:
 *
 * payment.succeeded
 * payment.failed
 * refund.succeeded
 *
 * Delivery behavior:
 *
 * Stable event ID
 * Signature and timestamp
 * Timeout
 * Exponential backoff with jitter
 * Maximum attempts
 * Dead letter queue
 * Merchant-visible delivery history
 *
 * Merchants must also process events idempotently.
 */

// -----------------------------------------------------------------------------
// 🔒 SECURITY BOUNDARIES
// -----------------------------------------------------------------------------

/*
 * Reduce sensitive-data scope:
 *
 * Use provider tokens instead of storing raw card details
 * Encrypt sensitive data in transit and at rest
 * Separate merchant and internal operator permissions
 * Use least-privilege service identities
 * Redact logs
 * Audit refunds and administrative changes
 * Rotate keys and webhook secrets
 * Apply strong customer authentication where required
 *
 * Financial and privacy obligations depend on jurisdiction and payment method;
 * compliance must be confirmed with qualified specialists.
 */

// -----------------------------------------------------------------------------
// ❤️ FAILURE BEHAVIOR
// -----------------------------------------------------------------------------

/*
 * Payment API instance fails → another stateless instance handles new work
 * Provider becomes slow      → timeout, circuit breaker, bounded queue
 * Worker crashes             → message redelivery with idempotent processing
 * Merchant endpoint fails    → retry webhook without changing payment status
 * Queue is delayed           → status remains queryable from durable storage
 * Database primary fails     → controlled failover with no split-brain writes
 *
 * Do not sacrifice ledger correctness merely to return a successful response.
 */

// -----------------------------------------------------------------------------
// 🔭 OBSERVABILITY AND AUDIT
// -----------------------------------------------------------------------------

/*
 * Measure:
 *
 * Payment success rate by provider and method
 * Processing latency percentiles
 * Unknown/processing age
 * Provider timeouts and circuit state
 * Duplicate idempotency-key usage
 * Webhook queue age and failed attempts
 * Reconciliation mismatch count and value
 * Ledger imbalance count — must remain zero
 *
 * Use identifiers instead of sensitive payment details in ordinary logs.
 */

// -----------------------------------------------------------------------------
// ⚖️ IMPORTANT TRADEOFFS
// -----------------------------------------------------------------------------

/*
 * Synchronous provider call
 *
 * ✔ Immediate customer interaction
 * ❌ Provider latency affects the request
 *
 * Asynchronous final status
 *
 * ✔ Handles delayed provider outcomes
 * ❌ Merchant integration becomes more complex
 *
 * One provider
 *
 * ✔ Simpler and more consistent behavior
 * ❌ Larger outage and commercial dependency risk
 *
 * Multiple providers
 *
 * ✔ Routing and resilience options
 * ❌ Complex adapters, reconciliation, and differing semantics
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 * Add authorization, capture, cancellation, and refund states to the state machine.
 *
 * TASK 2
 * Explain all duplicate-charge defenses in the request flow.
 *
 * TASK 3
 * Design recovery for a timeout with an unknown provider outcome.
 *
 * TASK 4
 * Create balanced ledger entries for a payment, fee, and refund.
 *
 * TASK 5
 * Design a daily reconciliation report and mismatch workflow.
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * This design uses:
 *
 * ✔ Minor-unit money representation
 * ✔ API and provider idempotency
 * ✔ An explicit payment state machine
 * ✔ An append-only balanced ledger
 * ✔ Authenticated, idempotent webhook processing
 * ✔ Outbox and queues for reliable asynchronous work
 * ✔ Reconciliation as an independent correctness control
 * ✔ Strong security, audit, and failure behavior
 *
 * BIG IDEA
 *
 * Payment architecture separates workflow status from financial truth and assumes
 * that every network response, callback, and retry can be late or duplicated.
 */
