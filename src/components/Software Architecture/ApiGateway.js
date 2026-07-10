// -----------------------------------------------------------------------------
// 🧠 SOFTWARE ARCHITECTURE & DESIGN OF MODERN LARGE SCALE SYSTEMS
// -----------------------------------------------------------------------------
//
// ARCHITECTURE NOTES FORMAT (ANF)
//
// PHASE 4 — API GATEWAY
//
// -----------------------------------------------------------------------------
//
// PREREQUISITE
//
// ✔ Architecture Fundamentals
// ✔ Load Balancers
//
// Today we'll learn one of the most important components
// in every enterprise architecture.
//
// Nearly every large company has one.
//
// Netflix
// Uber
// Amazon
// Google
// Banks
// FinTechs
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🧠 MINDSET SHIFT
// -----------------------------------------------------------------------------

/*
 * Beginner thinks...
 *
 * "My frontend can call every service directly."
 *
 * --------------------------------------------------
 *
 * Mid-level Engineer thinks...
 *
 * "I'll create many API endpoints."
 *
 * --------------------------------------------------
 *
 * Senior Engineer thinks...
 *
 * "The frontend should never know
 * where my services live."
 *
 * --------------------------------------------------
 *
 * Architect thinks...
 *
 * "Every request entering my company
 * should pass through ONE controlled entrance."
 */

// -----------------------------------------------------------------------------
// 🌍 THE PROBLEM
// -----------------------------------------------------------------------------

/*
 * Imagine a banking application.
 *
 * You have these services.
 *
 * Authentication Service
 *
 * User Service
 *
 * Transfer Service
 *
 * Notification Service
 *
 * Transaction Service
 *
 * Audit Service
 *
 * Reporting Service
 */

/*
 * Without an API Gateway...
 *
 *                React
 *
 *      ┌──────────┼───────────┐
 *      │          │           │
 *      ▼          ▼           ▼
 *
 * Auth API   User API   Transfer API
 *      │          │           │
 *      ▼          ▼           ▼
 *
 * Notification API
 * Audit API
 * Report API
 *
 * React now knows
 * EVERY service.
 */

/*
 * Problems
 *
 * ❌ Too many URLs
 *
 * ❌ Authentication repeated
 *
 * ❌ Authorization repeated
 *
 * ❌ Logging repeated
 *
 * ❌ Rate limiting repeated
 *
 * ❌ Hard to maintain
 *
 * ❌ Every service is exposed publicly
 */

// -----------------------------------------------------------------------------
// 🏗️ THE SOLUTION
// -----------------------------------------------------------------------------

/*
 * Instead of exposing everything...
 *
 * Build ONE entrance.
 *
 *
 *                    React
 *                      │
 *                      ▼
 *                API Gateway
 *                      │
 *      ┌───────────────┼───────────────┐
 *      │               │               │
 *      ▼               ▼               ▼
 *
 * Auth Service   User Service   Payment Service
 *
 *      ▼
 *
 * Notification Service
 *
 *      ▼
 *
 * Report Service
 *
 * React now knows only ONE endpoint.
 */

// -----------------------------------------------------------------------------
// 📦 WHAT IS AN API GATEWAY?
// -----------------------------------------------------------------------------

/*
 * Definition
 *
 * An API Gateway is a single entry point
 * for all client requests.
 *
 * Instead of clients talking directly
 * to backend services,
 *
 * clients communicate ONLY
 * with the Gateway.
 *
 * The Gateway decides
 * where each request should go.
 */

/*
 * Think of it like this.
 *
 * Airport
 *
 * Passenger
 *
 *          │
 *          ▼
 *
 * Immigration
 *
 *          │
 *          ▼
 *
 * Correct Terminal
 *
 * You don't walk directly
 * onto the runway.
 *
 * You must pass
 * through one controlled entrance.
 *
 * That's exactly
 * what an API Gateway does.
 */

// -----------------------------------------------------------------------------
// 🔁 REQUEST FLOW
// -----------------------------------------------------------------------------

/*
 * User clicks Login
 *
 * React
 *      │
 *      ▼
 *
 * POST /login
 *
 *      │
 *      ▼
 *
 * API Gateway
 *
 *      │
 *      ▼
 *
 * Authentication Service
 *
 *      │
 *      ▼
 *
 * JWT Token
 *
 *      │
 *      ▼
 *
 * API Gateway
 *
 *      │
 *      ▼
 *
 * React
 */

// -----------------------------------------------------------------------------
// 🧠 WHY NOT LET REACT TALK DIRECTLY TO SERVICES?
// -----------------------------------------------------------------------------

/*
 * Imagine your frontend contains
 * all these URLs.
 *
 * auth.bank.com
 *
 * transfer.bank.com
 *
 * customer.bank.com
 *
 * notification.bank.com
 *
 * audit.bank.com
 *
 * Every deployment becomes painful.
 *
 * If ONE service changes,
 * your frontend changes.
 */

/*
 * Example
 *
 * Before
 *
 * transfer.bank.com
 *
 * After migration
 *
 * payments.bank.com
 *
 * Every frontend
 * must now change.
 *
 * Bad Architecture.
 */

/*
 * With Gateway
 *
 * React always calls
 *
 * api.bank.com
 *
 * Backend teams
 * can move services
 * however they want.
 *
 * Frontend changes NOTHING.
 */

// -----------------------------------------------------------------------------
// 🎯 RESPONSIBILITY #1 — REQUEST ROUTING
// -----------------------------------------------------------------------------

/*
 * Suppose React sends
 *
 * GET /users
 *
 * API Gateway knows
 *
 * /users
 *
 * belongs to
 *
 * User Service
 */

/*
 * POST /login
 *
 * belongs to
 *
 * Authentication Service
 */

/*
 * POST /transfer
 *
 * belongs to
 *
 * Payment Service
 */

/*
 * Gateway becomes
 * a traffic controller.
 */

// -----------------------------------------------------------------------------
// 🔐 RESPONSIBILITY #2 — AUTHENTICATION
// -----------------------------------------------------------------------------

/*
 * Without Gateway
 *
 * Every service
 * must verify JWT.
 *
 * Auth Service
 *
 * verifies JWT
 *
 * User Service
 *
 * verifies JWT
 *
 * Payment Service
 *
 * verifies JWT
 *
 * Notification Service
 *
 * verifies JWT
 *
 * Same code
 * everywhere.
 */

/*
 * With Gateway
 *
 * React
 *      │
 *      ▼
 * API Gateway
 *
 * JWT verified ONCE
 *
 *      │
 *      ▼
 *
 * User Service
 *
 * Payment Service
 *
 * Report Service
 *
 * Cleaner Architecture.
 */

// -----------------------------------------------------------------------------
// 🛡️ RESPONSIBILITY #3 — AUTHORIZATION
// -----------------------------------------------------------------------------

/*
 * Authentication answers:
 *
 * WHO are you?
 *
 * ---------------------------------
 *
 * Authorization answers:
 *
 * WHAT are you allowed to do?
 */

/*
 * Example
 *
 * User Role
 *
 * Customer
 *
 * Requests
 *
 * DELETE /users
 *
 * Gateway immediately blocks it.
 *
 * Request never reaches backend.
 */

// -----------------------------------------------------------------------------
// 🚦 RESPONSIBILITY #4 — RATE LIMITING
// -----------------------------------------------------------------------------

/*
 * Imagine someone writes
 *
 * while(true){
 *     login();
 * }
 *
 * Millions of requests.
 */

/*
 * Without Gateway
 *
 * Authentication Server
 *
 * crashes.
 */

/*
 * Gateway can say
 *
 * Maximum
 *
 * 100 requests
 *
 * per minute.
 *
 * Remaining requests
 * rejected.
 *
 * Backend stays healthy.
 */

// -----------------------------------------------------------------------------
// 📊 RESPONSIBILITY #5 — LOGGING
// -----------------------------------------------------------------------------

/*
 * Every request
 * enters one place.
 *
 * Easy to log.
 *
 * Example
 *
 * User ID
 *
 * Endpoint
 *
 * Time
 *
 * IP Address
 *
 * Response Time
 *
 * Status Code
 *
 * Perfect for auditing.
 *
 * Very common
 * in banking.
 */

// -----------------------------------------------------------------------------
// ⚡ RESPONSIBILITY #6 — RESPONSE AGGREGATION
// -----------------------------------------------------------------------------

/*
 * Imagine Dashboard.
 *
 * React needs
 *
 * User
 *
 * Wallet
 *
 * Notifications
 *
 * Transactions
 */

/*
 * Without Gateway
 *
 * React makes
 *
 * 4 API calls.
 */

/*
 * React
 *      │
 *      ├────────► User
 *      ├────────► Wallet
 *      ├────────► Notifications
 *      └────────► Transactions
 */

/*
 * With Gateway
 *
 * React
 *
 *      │
 *      ▼
 *
 * GET /dashboard
 *
 *      │
 *      ▼
 *
 * API Gateway
 *
 *      │
 *      ├────────► User Service
 *      ├────────► Wallet Service
 *      ├────────► Notification Service
 *      └────────► Transaction Service
 *
 * Gateway combines everything.
 *
 * React receives
 * ONE response.
 */

// -----------------------------------------------------------------------------
// 🏦 REAL BANKING EXAMPLE
// -----------------------------------------------------------------------------

/*
 * Customer opens dashboard.
 *
 * Dashboard requires
 *
 * Account Balance
 *
 * Recent Transactions
 *
 * Card Status
 *
 * Exchange Rates
 *
 * Notifications
 */

/*
 * React
 *      │
 *      ▼
 *
 * GET /dashboard
 *
 *      │
 *      ▼
 *
 * API Gateway
 *
 *      ├────────► Core Banking
 *      ├────────► Card Service
 *      ├────────► FX Service
 *      ├────────► Notification Service
 *      └────────► Customer Service
 *
 * Gateway merges responses.
 *
 * Returns one JSON.
 */

// -----------------------------------------------------------------------------
// 🌍 WHERE DOES THE API GATEWAY LIVE?
// -----------------------------------------------------------------------------

/*
 * Browser
 *      │
 *      ▼
 *
 * React
 *      │
 *      ▼
 *
 * Internet
 *      │
 *      ▼
 *
 * Load Balancer
 *      │
 *      ▼
 *
 * API Gateway
 *      │
 *      ▼
 *
 * Microservices
 *
 *      │
 *      ▼
 *
 * Database
 */

/*
 * Notice something.
 *
 * API Gateway sits
 * AFTER
 * the Load Balancer.
 *
 * Why?
 *
 * Because first
 * traffic must be distributed.
 *
 * Then requests
 * enter the Gateway.
 */

// -----------------------------------------------------------------------------
// 🔥 POPULAR API GATEWAYS
// -----------------------------------------------------------------------------

/*
 * Enterprise products
 *
 * ✔ Kong
 *
 * ✔ NGINX
 *
 * ✔ KrakenD
 *
 * ✔ AWS API Gateway
 *
 * ✔ Azure API Management
 *
 * ✔ Apigee
 *
 * ✔ Traefik
 */

// -----------------------------------------------------------------------------
// 🧠 ARCHITECT'S MINDSET
// -----------------------------------------------------------------------------

/*
 * Beginners expose
 * every service.
 *
 * Architects expose
 * only ONE entrance.
 *
 * Security
 *
 * Monitoring
 *
 * Logging
 *
 * Authentication
 *
 * Authorization
 *
 * Rate Limiting
 *
 * Routing
 *
 * all happen
 * before
 * requests reach
 * backend services.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE
// -----------------------------------------------------------------------------

/*
 * TASK 1
 *
 * Draw this architecture.
 *
 * Browser
 *      │
 * React
 *      │
 * Load Balancer
 *      │
 * API Gateway
 *      │
 * Authentication Service
 * User Service
 * Payment Service
 * Notification Service
 * Database
 */

/*
 * TASK 2
 *
 * Explain the difference between
 *
 * Load Balancer
 *
 * and
 *
 * API Gateway.
 */

/*
 * TASK 3
 *
 * Why shouldn't React
 * communicate directly
 * with every backend service?
 */

/*
 * TASK 4
 *
 * Research Kong API Gateway.
 *
 * What features
 * does it provide?
 */

/*
 * TASK 5
 *
 * Think about your current
 * Wema Bank application.
 *
 * If tomorrow
 * Customer Service
 * changes its URL,
 *
 * would React need updating?
 *
 * How would an API Gateway
 * solve that problem?
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * If you understand this lesson,
 * you now know:
 *
 * ✔ What an API Gateway is
 *
 * ✔ Why modern systems use it
 *
 * ✔ Request Routing
 *
 * ✔ Authentication
 *
 * ✔ Authorization
 *
 * ✔ Rate Limiting
 *
 * ✔ Logging
 *
 * ✔ Response Aggregation
 *
 * ✔ How it fits with
 *   a Load Balancer
 *
 * BIG PICTURE
 *
 * Browser
 *      │
 * React
 *      │
 * Load Balancer
 *      │
 * API Gateway
 *      │
 * Microservices
 *      │
 * Databases
 *
 * This architecture powers
 * many of today's large-scale,
 * secure, and scalable systems.
 */