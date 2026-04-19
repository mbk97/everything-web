// =============================================================================
// ⚛️ REACT – COMPLETE INTERVIEW MASTER GUIDE
// =============================================================================

// -----------------------------------------------------------------------------
// ! REACT CORE MENTAL MODEL
// -----------------------------------------------------------------------------
/*
 * DEFINITION:
 * React is a declarative, component-based JavaScript library for building user interfaces.
 *
 * CORE PRINCIPLE:
 * UI = f(state)
 *
 * This means:
 * - The UI is a function of the current application state.
 * - When state changes, React re-renders the component.
 *
 * HOW IT WORKS:
 * 1. State changes
 * 2. React re-renders component
 * 3. Virtual DOM comparison (diffing)
 * 4. Minimal updates applied to Real DOM
 *
 * BENEFIT:
 * - Predictable and maintainable UI updates
 */

// -----------------------------------------------------------------------------
// ! VIRTUAL DOM
// -----------------------------------------------------------------------------
/*
 * DEFINITION:
 * The Virtual DOM is a lightweight JavaScript representation of the real DOM.
 *
 * PURPOSE:
 * - Improve performance by minimizing direct DOM manipulation.
 *
 * PROCESS:
 * - React creates a new Virtual DOM tree on update.
 * - Compares it with the previous one (diffing).
 * - Applies only necessary changes to the real DOM.
 *
 * BENEFIT:
 * - Efficient rendering
 * - Improved application performance
 */

// -----------------------------------------------------------------------------
// ! RECONCILIATION
// -----------------------------------------------------------------------------
/*
 * DEFINITION:
 * Reconciliation is React’s algorithm for determining how the DOM should update.
 *
 * KEY CONCEPT:
 * - React compares old and new Virtual DOM trees.
 *
 * IMPORTANCE OF KEYS:
 * - Help React identify changed elements in lists.
 * - Prevent unnecessary re-renders.
 * - Improve rendering performance.
 */

// -----------------------------------------------------------------------------
// ! COMPONENT DESIGN PRINCIPLES
// -----------------------------------------------------------------------------
/*
 * GOOD COMPONENTS:
 * - Small and focused
 * - Reusable
 * - Follow Single Responsibility Principle
 *
 * BAD COMPONENTS:
 * - Handle too many responsibilities
 * - Mix UI and heavy business logic
 *
 * GOAL:
 * - Maintain readability and scalability.
 */

// -----------------------------------------------------------------------------
// ! STATE MANAGEMENT STRATEGY
// -----------------------------------------------------------------------------
/*
 * LOCAL STATE:
 * - Managed within a component.
 * - Used for UI-specific logic.
 *
 * LIFTED STATE:
 * - Shared between sibling components via a common parent.
 *
 * GLOBAL STATE:
 * - Shared across the entire application (e.g., auth, theme).
 *
 * BEST PRACTICE:
 * - Keep state as close as possible to where it is needed.
 */

// -----------------------------------------------------------------------------
// ! CUSTOM HOOKS
// -----------------------------------------------------------------------------
/*
 * DEFINITION:
 * Custom hooks are reusable functions that encapsulate component logic.
 *
 * PURPOSE:
 * - Improve code reuse
 * - Increase readability
 *
 * EXAMPLES:
 * - useAuth()
 * - useFetch()
 * - useDebounce()
 */

// ? what are hooks?

// ** Hooks are functions that let you “hook into” React state and lifecycle features from function components.

// -----------------------------------------------------------------------------
// ! REACT PERFORMANCE OPTIMIZATION
// -----------------------------------------------------------------------------
/*
 * WHAT CAUSES RE-RENDERS:
 * - State changes
 * - Parent component re-renders
 * - Prop changes
 *
 * OPTIMIZATION TOOLS:
 * - React.memo → memoizes components
 * - useMemo → memoizes computed values
 * - useCallback → memoizes functions
 *
 * RULE:
 * - Optimize only when performance issues are identified.
 */

// -----------------------------------------------------------------------------
// ! ERROR BOUNDARIES
// -----------------------------------------------------------------------------
/*
 * DEFINITION:
 * Error boundaries catch rendering errors in React component trees.
 *
 * PURPOSE:
 * - Prevent full application crash
 * - Display fallback UI
 *
 * IMPLEMENTATION:
 * - Typically implemented using class components
 * - Or framework-provided wrappers
 */

// -----------------------------------------------------------------------------
// ! SSR VS CSR
// -----------------------------------------------------------------------------
/*
 * CSR (Client-Side Rendering):
 * - Rendering happens in the browser.
 *
 * SSR (Server-Side Rendering):
 * - HTML generated on server before sending to client.
 *
 * BENEFITS OF SSR:
 * - Better SEO
 * - Faster initial load
 *
 * FRAMEWORK EXAMPLE:
 * - Next.js supports hybrid rendering.
 */

// =============================================================================
// 🌐 NODE.JS – COMPLETE INTERVIEW MASTER GUIDE
// =============================================================================

// -----------------------------------------------------------------------------
// ! NODE.JS FUNDAMENTAL DEFINITION
// -----------------------------------------------------------------------------
/*
 * DEFINITION:
 * Node.js is a runtime environment that executes JavaScript outside the browser.
 *
 * CHARACTERISTICS:
 * - Event-driven
 * - Non-blocking I/O
 * - Built on Chrome’s V8 engine
 *
 * USE CASES:
 * - APIs
 * - Real-time apps
 * - Microservices
 */

// -----------------------------------------------------------------------------
// ! EVENT LOOP
// -----------------------------------------------------------------------------
/*
 * DEFINITION:
 * The Event Loop manages asynchronous operations in Node.js.
 *
 * HOW IT WORKS:
 * - Executes synchronous code first.
 * - Delegates async tasks to background.
 * - Processes callbacks when ready.
 *
 * BENEFIT:
 * - High concurrency using a single thread.
 */

// -----------------------------------------------------------------------------
// ! BLOCKING VS NON-BLOCKING
// -----------------------------------------------------------------------------
/*
 * BLOCKING:
 * - Execution waits until operation completes.
 *
 * NON-BLOCKING:
 * - Execution continues while operation runs in background.
 *
 * NODE’S ADVANTAGE:
 * - Efficient handling of multiple concurrent connections.
 */

// -----------------------------------------------------------------------------
// ! EXPRESS ARCHITECTURE
// -----------------------------------------------------------------------------
/*
 * COMMON STRUCTURE:
 * - routes/
 * - controllers/
 * - services/
 * - middleware/
 * - models/
 *
 * PRINCIPLE:
 * - Separation of concerns.
 */

// -----------------------------------------------------------------------------
// ! ASYNC/AWAIT
// -----------------------------------------------------------------------------
/*
 * DEFINITION:
 * async/await simplifies working with Promises.
 *
 * BEST PRACTICE:
 * - Wrap logic in try/catch blocks.
 * - Avoid unhandled promise rejections.
 */

// -----------------------------------------------------------------------------
// ! API DESIGN BEST PRACTICES
// -----------------------------------------------------------------------------
/*
 * PRINCIPLES:
 * - Use proper HTTP status codes.
 * - Follow RESTful conventions.
 * - Validate input.
 * - Sanitize data.
 * - Centralize error handling.
 */

// =============================================================================
// 🔐 AUTHENTICATION & SECURITY
// =============================================================================

// -----------------------------------------------------------------------------
// ! PASSWORD SECURITY
// -----------------------------------------------------------------------------
/*
 * RULE:
 * - Never store plain text passwords.
 *
 * USE:
 * - bcrypt for hashing
 * - Salting for added security
 */

// -----------------------------------------------------------------------------
// ! JWT STRUCTURE
// -----------------------------------------------------------------------------
/*
 * STRUCTURE:
 * - Header.Payload.Signature
 *
 * CHARACTERISTIC:
 * - Digitally signed (not encrypted by default).
 *
 * BEST PRACTICES:
 * - Set expiration time.
 * - Verify token in protected routes.
 */

// -----------------------------------------------------------------------------
// ! COMMON SECURITY RISKS
// -----------------------------------------------------------------------------
/*
 * XSS:
 * - Malicious script injection.
 *
 * CSRF:
 * - Unauthorized request execution.
 *
 * MITIGATION:
 * - httpOnly cookies
 * - Proper CORS configuration
 * - Input validation
 */

// =============================================================================
// 🗄 DATABASE FUNDAMENTALS
// =============================================================================

// -----------------------------------------------------------------------------
// ! SQL VS NOSQL
// -----------------------------------------------------------------------------
/*
 * SQL:
 * - Structured schema
 * - Relational tables
 *
 * NoSQL:
 * - Flexible schema
 * - Document or key-value based
 */

// -----------------------------------------------------------------------------
// ! INDEXING
// -----------------------------------------------------------------------------
/*
 * DEFINITION:
 * Indexes improve database query performance.
 *
 * TRADE-OFF:
 * - Faster reads
 * - Slightly slower writes
 */

// -----------------------------------------------------------------------------
// ! DATABASE RELATIONSHIPS
// -----------------------------------------------------------------------------
/*
 * TYPES:
 * - One-to-One
 * - One-to-Many
 * - Many-to-Many
 */

// =============================================================================
// 🚀 SYSTEM DESIGN BASICS
// =============================================================================

// -----------------------------------------------------------------------------
// ! SCALABILITY
// -----------------------------------------------------------------------------
/*
 * VERTICAL SCALING:
 * - Increase server capacity.
 *
 * HORIZONTAL SCALING:
 * - Add more servers.
 */

// -----------------------------------------------------------------------------
// ! LOAD BALANCING
// -----------------------------------------------------------------------------
/*
 * DEFINITION:
 * Distributes traffic across multiple servers.
 *
 * BENEFIT:
 * - High availability
 * - Improved performance
 */

// -----------------------------------------------------------------------------
// ! CACHING
// -----------------------------------------------------------------------------
/*
 * PURPOSE:
 * - Reduce database load.
 *
 * TOOL EXAMPLE:
 * - Redis
 */

// =============================================================================
// 🧠 ENGINEERING THINKING & TRADE-OFFS
// =============================================================================

// -----------------------------------------------------------------------------
// ! SENIOR ENGINEERING MINDSET
// -----------------------------------------------------------------------------
/*
 * Always discuss trade-offs.
 *
 * EXAMPLES:
 * - JWT is scalable but harder to revoke.
 * - Global state simplifies access but increases complexity.
 */

// -----------------------------------------------------------------------------
// ! DEBUGGING APPROACH
// -----------------------------------------------------------------------------
/*
 * STEPS:
 * 1. Reproduce the issue.
 * 2. Isolate the source.
 * 3. Inspect logs.
 * 4. Validate assumptions.
 * 5. Confirm fix.
 */

// -----------------------------------------------------------------------------
// ! PRODUCTION BEST PRACTICES
// -----------------------------------------------------------------------------
/*
 * - Use environment variables.
 * - Implement logging and monitoring.
 * - Apply rate limiting.
 * - Version APIs.
 */

// =============================================================================
// 🎯 FINAL MASTER SUMMARY
// =============================================================================
/*
 * React:
 * - Enables predictable, state-driven UI rendering.
 *
 * Node:
 * - Handles scalable backend logic using asynchronous architecture.
 *
 * Databases:
 * - Store structured or flexible data efficiently.
 *
 * Security:
 * - Protects data through hashing, validation, and access control.
 *
 * Strong engineers:
 * - Understand fundamentals.
 * - Evaluate trade-offs.
 * - Communicate clearly.
 * - Design for long-term maintainability.
 */
