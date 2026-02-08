// =============================================================================
// 🧠 REACT RECONCILIATION ALGORITHM
// =============================================================================

// -----------------------------------------------------------------------------
// ! WHAT IT IS
// -----------------------------------------------------------------------------
/*
 * Reconciliation is the process React uses to efficiently update the UI by
 * calculating the minimal set of changes required when state or props change.
 */

// * Instead of re-rendering the entire page, React:
//   - Builds a new Virtual DOM tree
//   - Diffs it against the previous Virtual DOM
//   - Applies only the necessary updates to the real DOM

// -----------------------------------------------------------------------------
// ? WHY IT EXISTS (PROBLEM IT SOLVES)
// -----------------------------------------------------------------------------
/*
 * Direct DOM updates are:
 * - Slow
 * - Expensive
 * - Hard to optimize manually
 *
 * React’s philosophy:
 * “Don’t touch the DOM directly. Describe what the UI should look like —
 *  React will handle how to update it efficiently.”
 */

// -----------------------------------------------------------------------------
// * HIGH-LEVEL FLOW (MENTAL MODEL)
// -----------------------------------------------------------------------------
/*
 * Previous UI snapshot
 *         ↓
 * State / Props change
 *         ↓
 * New UI snapshot
 *         ↓
 * Diffing (Reconciliation)
 *         ↓
 * Minimal DOM updates
 */

// -----------------------------------------------------------------------------
// ! THE TWO MAIN PHASES
// -----------------------------------------------------------------------------

// 1️⃣ Render Phase (Pure & Interruptible)
/*
 * - React calls your components
 * - Builds a new Virtual DOM tree
 * - No real DOM mutations happen here
 * - Can be paused, restarted, or abandoned
 * - Enables Concurrent React
 */

// 2️⃣ Commit Phase (Fast & Non-Interruptible)
/*
 * - React applies changes to the real DOM
 * - Runs effects (useEffect)
 * - Updates refs
 */

// -----------------------------------------------------------------------------
// ? HOW DIFFING WORKS (CORE RULES)
// -----------------------------------------------------------------------------

// * Rule 1: Different element types → Replace subtree
/*
 * <div />
 *   ↓
 * <span />
 *
 * Result:
 * - Old subtree is destroyed
 * - New subtree is created
 * - Component state is lost
 */

// * Rule 2: Same element type → Update only changed props
/*
 * <div className="a" />
 *   ↓
 * <div className="b" />
 *
 * Result:
 * - DOM node is reused
 * - Only className is updated
 */

// * Rule 3: Lists are reconciled using keys (CRITICAL)
/*
 * items.map(item => <Item key={item.id} />)
 *
 * ❌ No keys → index-based matching → bugs & performance issues
 * ✅ Stable keys → precise updates & preserved state
 */

// -----------------------------------------------------------------------------
// ! CONSEQUENCES OF POOR RECONCILIATION
// -----------------------------------------------------------------------------
/*
 * - Unnecessary re-renders
 * - Lost component state
 * - Janky or flickering UI
 */

// -----------------------------------------------------------------------------
// * TOOLS TO HELP REACT RECONCILE EFFICIENTLY
// -----------------------------------------------------------------------------
/*
 * - key (stable & unique)
 * - React.memo
 * - useMemo
 * - useCallback
 * - Proper component splitting
 */

// ! ##################################################################################################################################

// =============================================================================
// 🧠 REACT BATCHING UPDATES
// =============================================================================

// -----------------------------------------------------------------------------
// ! WHAT IT IS
// -----------------------------------------------------------------------------
/*
 * Batching is a performance optimization where React groups multiple state
 * updates into a single render cycle.
 *
 * Instead of re-rendering after every setState call, React waits, collects
 * updates, and processes them together.
 */

// * Core idea:
//   - Multiple state updates
//   - One render
//   - Less work for React and the browser

// -----------------------------------------------------------------------------
// ? WHY IT EXISTS (PROBLEM IT SOLVES)
// -----------------------------------------------------------------------------
/*
 * Without batching:
 * - Each setState triggers a render
 * - Reconciliation runs multiple times
 * - DOM updates become expensive
 *
 * With batching:
 * - React minimizes renders
 * - Improves performance
 * - Keeps the UI responsive
 *
 * React’s philosophy:
 * “Schedule updates first, render later — and do it efficiently.”
 */

// -----------------------------------------------------------------------------
// * HIGH-LEVEL FLOW (MENTAL MODEL)
// -----------------------------------------------------------------------------
/*
 * User interaction / async event
 *           ↓
 * Multiple state updates queued
 *           ↓
 * React batches updates
 *           ↓
 * Single render pass
 *           ↓
 * Reconciliation + Commit
 */

// -----------------------------------------------------------------------------
// ! WHERE BATCHING HAPPENS
// -----------------------------------------------------------------------------
/*
 * Before React 18:
 * - Batching only worked inside React event handlers
 * - Async code (setTimeout, promises) caused multiple renders
 *
 * React 18+ (Automatic Batching):
 * - Batching works across:
 *   - Event handlers
 *   - setTimeout
 *   - Promises
 *   - async / await
 *   - Native events
 */

// -----------------------------------------------------------------------------
// ? COMMON INTERVIEW EXAMPLE (STILL TRIPS PEOPLE)
// -----------------------------------------------------------------------------
/*
 * ❌ Incorrect (stale state due to batching)
 */
// setCount(count + 1);
// setCount(count + 1);
// setCount(count + 1);

/*
 * Result:
 * - count increases by 1, not 3
 *
 * Reason:
 * - All updates read the same snapshot of state
 */

/*
 * ✅ Correct (functional updates)
 */
// setCount((c) => c + 1);
// setCount((c) => c + 1);
// setCount((c) => c + 1);

/*
 * Result:
 * - count increases by 3
 *
 * Rule:
 * - If the next state depends on the previous state,
 *   ALWAYS use a functional update.
 */

// -----------------------------------------------------------------------------
// ! WHAT ACTUALLY GETS BATCHED
// -----------------------------------------------------------------------------
/*
 * React batches:
 * - Multiple setState calls
 * - Within the same event loop tick
 *
 * React does NOT batch:
 * - Updates across different ticks
 * - Updates forced to flush synchronously
 */

// -----------------------------------------------------------------------------
// ? BATCHING VS RECONCILIATION (IMPORTANT DISTINCTION)
// -----------------------------------------------------------------------------
/*
 * Batching:
 * - Reduces the number of renders
 *
 * Reconciliation:
 * - Minimizes the number of DOM changes
 *
 * Order of operations:
 * Batching → Render → Reconciliation → Commit
 */

// -----------------------------------------------------------------------------
// ! FORCING REACT TO BREAK BATCHING (ADVANCED)
// -----------------------------------------------------------------------------
/*
 * Sometimes you need immediate DOM updates
 * (e.g., measurements, focus, animations).
 */
import { flushSync } from "react-dom";

flushSync(() => {
  //   setOpen(true);
});

/*
 * ⚠️ Warning:
 * - This disables batching
 * - Should be used sparingly
 * - Overuse leads to performance issues
 */

// -----------------------------------------------------------------------------
// ? REAL-WORLD CONSEQUENCES OF POOR BATCHING
// -----------------------------------------------------------------------------
/*
 * - Render storms
 * - Janky animations
 * - Wasted CPU cycles
 * - Hard-to-debug state bugs
 */

// -----------------------------------------------------------------------------
// * BEST PRACTICES (INTERVIEW GOLD)
// -----------------------------------------------------------------------------
/*
 * - Use functional updates for dependent state
 * - Avoid storing derived state
 * - Let React batch updates naturally
 * - Avoid flushSync unless absolutely necessary
 * - Understand batching behavior in React 18+
 */

// -----------------------------------------------------------------------------
// ! ONE-LINE SENIOR SUMMARY
// -----------------------------------------------------------------------------
/*
 * Batching groups multiple state updates into a single render cycle,
 * reducing unnecessary renders and improving performance.
 */

// ! #############################################################################################################################

// =============================================================================
// 🧠 REACT RENDER VS COMMIT PHASES
// =============================================================================

// -----------------------------------------------------------------------------
// ! WHAT THIS CONCEPT IS ABOUT
// -----------------------------------------------------------------------------
/*
 * React updates the UI in two distinct phases:
 *
 * 1️⃣ Render Phase  → "Figure out what should change"
 * 2️⃣ Commit Phase  → "Apply the changes to the DOM"
 *
 * Understanding this separation is critical for:
 * - Performance reasoning
 * - Correct useEffect usage
 * - Concurrent React
 * - Debugging unexpected renders
 */

// -----------------------------------------------------------------------------
// ? WHY REACT SPLITS WORK INTO TWO PHASES
// -----------------------------------------------------------------------------
/*
 * Rendering is expensive but interruptible.
 * DOM mutations are expensive and must be consistent.
 *
 * React separates them so it can:
 * - Prepare work safely (Render)
 * - Apply work atomically (Commit)
 *
 * Key idea:
 * "Thinking" and "doing" are separate.
 */

// -----------------------------------------------------------------------------
// * RENDER PHASE (THE "THINKING" PHASE)
// -----------------------------------------------------------------------------
/*
 * Purpose:
 * - Calculate what the UI should look like next
 *
 * What happens here:
 * - React calls your function components
 * - Reads state and props
 * - Builds a new Virtual DOM tree
 * - Runs reconciliation (diffing)
 *
 * What DOES NOT happen:
 * - No DOM mutations
 * - No layout reads
 * - No visual updates
 *
 * Important characteristics:
 * - Pure
 * - Side-effect free
 * - Can be paused, restarted, or discarded
 * - Enables Concurrent React
 */

// -----------------------------------------------------------------------------
// ! IMPORTANT RULE FOR RENDER PHASE
// -----------------------------------------------------------------------------
/*
 * Render phase must be PURE.
 *
 * ❌ Do NOT:
 * - Mutate state
 * - Access the DOM
 * - Trigger side effects
 *
 * ✅ Allowed:
 * - Calculations
 * - Deriving JSX from state/props
 */

// -----------------------------------------------------------------------------
// ? WHY YOU MAY SEE MULTIPLE RENDERS
// -----------------------------------------------------------------------------
/*
 * Multiple renders do NOT mean multiple DOM updates.
 *
 * React may re-run render:
 * - To prioritize more urgent updates
 * - To abandon outdated work
 * - In Strict Mode (development)
 *
 * This is normal and expected.
 */

// -----------------------------------------------------------------------------
// * COMMIT PHASE (THE "DOING" PHASE)
// -----------------------------------------------------------------------------
/*
 * Purpose:
 * - Apply the calculated changes to the real DOM
 *
 * What happens here:
 * - DOM nodes are created, updated, or removed
 * - Refs are updated
 * - Browser paints the UI
 *
 * Effects timing:
 * - useLayoutEffect → runs synchronously after DOM mutations
 * - useEffect       → runs after paint
 *
 * Important characteristics:
 * - Fast
 * - Synchronous
 * - Non-interruptible
 */

// -----------------------------------------------------------------------------
// ! CRITICAL RULE FOR COMMIT PHASE
// -----------------------------------------------------------------------------
/*
 * Once React enters the commit phase:
 * - It MUST finish
 * - UI consistency is guaranteed
 *
 * This ensures users never see half-updated UI.
 */

// -----------------------------------------------------------------------------
// ? RENDER VS COMMIT — SIDE-BY-SIDE COMPARISON
// -----------------------------------------------------------------------------
/*
 * Render Phase:
 * - Builds Virtual DOM
 * - Runs reconciliation
 * - Pure & interruptible
 * - No DOM access
 *
 * Commit Phase:
 * - Mutates the real DOM
 * - Updates refs
 * - Runs effects
 * - Not interruptible
 */

// -----------------------------------------------------------------------------
// * HOW THIS AFFECTS useEffect (INTERVIEW FAVORITE)
// -----------------------------------------------------------------------------
/*
 * useEffect does NOT run during render.
 *
 * Timeline:
 * Render → Commit → Paint → useEffect
 *
 * Why?
 * - Effects are side effects
 * - Side effects belong AFTER the DOM is updated
 *
 * useLayoutEffect runs earlier:
 * Render → Commit → useLayoutEffect → Paint
 */

// -----------------------------------------------------------------------------
// ! COMMON INTERVIEW TRAP
// -----------------------------------------------------------------------------
/*
 * ❓ "Why does console.log run multiple times but the DOM updates once?"
 *
 * Answer:
 * - console.log runs during render
 * - Render can run multiple times
 * - Commit runs once per update
 */

// -----------------------------------------------------------------------------
// ? RELATIONSHIP TO OTHER CONCEPTS
// -----------------------------------------------------------------------------
/*
 * Batching:
 * - Happens BEFORE render
 * - Reduces how often render runs
 *
 * Reconciliation:
 * - Happens DURING render
 * - Determines what changes are needed
 *
 * Commit:
 * - Applies the final result to the DOM
 */

// -----------------------------------------------------------------------------
// ! REAL-WORLD CONSEQUENCES OF MISUNDERSTANDING THIS
// -----------------------------------------------------------------------------
/*
 * - Side effects firing too early
 * - DOM measurement bugs
 * - Infinite render loops
 * - Performance issues
 */

// -----------------------------------------------------------------------------
// * ONE-LINE SENIOR SUMMARY
// -----------------------------------------------------------------------------
/*
 * Render determines what should change; Commit applies those changes to the DOM.
 */
