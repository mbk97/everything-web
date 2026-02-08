// =============================================================================
// 🧠 NODE.JS VS BROWSER (JAVASCRIPT RUNTIMES)
// =============================================================================

// -----------------------------------------------------------------------------
// ! WHAT THIS COMPARISON IS ABOUT
// -----------------------------------------------------------------------------
/*
 * JavaScript is a language, but it does not run by itself.
 * It needs a runtime environment.
 *
 * Node.js and browsers are two different JavaScript runtimes,
 * built for very different purposes.
 */

// -----------------------------------------------------------------------------
// ? PRIMARY GOAL OF EACH RUNTIME
// -----------------------------------------------------------------------------
/*
 * Browser:
 * - Executes JavaScript to build user interfaces
 * - Interacts with the DOM
 * - Runs in a sandboxed, security-restricted environment
 *
 * Node.js:
 * - Executes JavaScript to build servers, tools, and backends
 * - Interacts with the operating system
 * - Runs outside the browser
 */

// -----------------------------------------------------------------------------
// * GLOBAL OBJECTS (KEY DIFFERENCE)
// -----------------------------------------------------------------------------
/*
 * Browser:
 * - window
 * - document
 * - navigator
 *
 * Node.js:
 * - global
 * - process
 * - Buffer
 *
 * There is NO window or document in Node.js.
 */

// -----------------------------------------------------------------------------
// ! APIs AVAILABLE IN EACH ENVIRONMENT
// -----------------------------------------------------------------------------
/*
 * Browser APIs:
 * - DOM
 * - fetch (native)
 * - localStorage / sessionStorage
 * - Web APIs (Canvas, WebSocket, Geolocation)
 *
 * Node.js APIs:
 * - File System (fs)
 * - Network (http, https)
 * - OS access (os, path)
 * - Streams
 * - Child processes
 *
 * Same language — different superpowers.
 */

// -----------------------------------------------------------------------------
// ? MODULE SYSTEMS
// -----------------------------------------------------------------------------
/*
 * Browser (historically):
 * - Script tags
 * - ES Modules (type="module")
 *
 * Node.js:
 * - CommonJS (require / module.exports)
 * - ES Modules (import / export)
 *
 * Node.js supports both, but configuration matters.
 */

// -----------------------------------------------------------------------------
// * EVENT LOOP (SIMILAR BUT NOT IDENTICAL)
// -----------------------------------------------------------------------------
/*
 * Both environments use an event loop,
 * but they are implemented differently.
 *
 * Browser:
 * - Managed by the browser engine
 * - Coordinates rendering, user input, and network events
 *
 * Node.js:
 * - Built on libuv
 * - Optimized for non-blocking I/O
 * - No rendering responsibilities
 */

// -----------------------------------------------------------------------------
// ! SECURITY MODEL
// -----------------------------------------------------------------------------
/*
 * Browser:
 * - Strict sandbox
 * - Cannot access filesystem directly
 * - Same-Origin Policy
 *
 * Node.js:
 * - Full system access
 * - Can read/write files
 * - Can open network sockets
 *
 * This is why Node.js apps MUST handle security explicitly.
 */

// -----------------------------------------------------------------------------
// ? PERFORMANCE CHARACTERISTICS
// -----------------------------------------------------------------------------
/*
 * Browser:
 * - Optimized for UI responsiveness
 * - Rendering + JS compete for main thread
 *
 * Node.js:
 * - Optimized for I/O-heavy workloads
 * - Excellent for APIs, streaming, real-time apps
 * - Single-threaded but highly concurrent
 */

// -----------------------------------------------------------------------------
// * TYPICAL USE CASES
// -----------------------------------------------------------------------------
/*
 * Browser:
 * - SPAs
 * - Websites
 * - UI-heavy applications
 *
 * Node.js:
 * - REST APIs
 * - WebSockets
 * - Background jobs
 * - CLI tools
 * - Microservices
 */

// -----------------------------------------------------------------------------
// ! COMMON INTERVIEW TRAPS
// -----------------------------------------------------------------------------
/*
 * ❌ "Node.js runs JavaScript faster than the browser"
 * ❌ "Node.js has the DOM"
 * ❌ "Node.js is multi-threaded by default"
 *
 * ✅ Correct:
 * - Same language, different environments
 * - Different APIs
 * - Different responsibilities
 */

// -----------------------------------------------------------------------------
// ? SHARED FOUNDATIONS
// -----------------------------------------------------------------------------
/*
 * Both Node.js and browsers:
 * - Use JavaScript
 * - Are often powered by the V8 engine
 * - Are event-driven
 * - Support async programming
 */

// -----------------------------------------------------------------------------
// * ONE-LINE SENIOR SUMMARY
// -----------------------------------------------------------------------------
/*
 * The browser runs JavaScript to render UIs safely for users,
 * while Node.js runs JavaScript to build servers and tools
 * with direct access to the system.
 */
