// !$$$$$$$$$$$$$$$$$$$$$$$$ RECOMENDED FOLDER STRUCTURE $$$$$$$$$$$$$$$$$$$$$$$
// /app or /src
//   /features
//     /auth
//       auth.api.ts
//       auth.store.ts
//       auth.types.ts
//       auth.hooks.ts
//       LoginPage.tsx
//     /payments
//     /profile
//   /shared
//     /ui
//     /hooks
//     /utils
//     /constants
//   /core
//     apiClient.ts
//     router.ts
//     guards.ts
//     errorBoundary.tsx

// * A feature should be understandable in isolation.

// ! $$$$$$$$$$$$$$$$$$$$$ SEPERATION OF CONCERNS $$$$$$$$$$$$$$$$$$$$$$$$

// * The 4 Core Concerns in Frontend Apps

//?? 1. UI (components)

// Responsibilities

// * Rendering UI, Handling user interactions (clicks, input), Displaying state

// Rules

//* ❌ No API calls
//* ❌ No business rules
//* ❌ No complex data transformation

//?? 2. State management
// * Store data, Track loading, errors, success, Expose actions

// Rules

//* ❌ No JSX

//* ❌ No direct DOM logic

//* ❌ Minimal business rules

// Example

// authStore.ts (Zustand example)
// export const useAuthStore = create((set) => ({
//   user: null,
//   loading: false,

//   setUser: (user) => set({ user }),
//   logout: () => set({ user: null }),
// }));

//?? 3. Business Logic (Domain Layer)

// Responsibilities

// * Validation, Rules, Decisions, Computations

// Rules

//* ❌ No UI

//* ❌ No framework-specific code

//* ❌ No HTTP logic

// Example

// canUserTransfer.ts
// export function canUserTransfer(balance: number, amount: number) {
//     if (amount <= 0) return false
//     if (amount > balance) return false
//     return true
//   }

// 4. Infrastructure (External World)

// Responsibilities

//* API calls, LocalStorage, Cookies, WebSockets

// GENERAL EXAMPLE FOR SOC

/**
 * ======================================================
 * INFRASTRUCTURE LAYER
 * - External communication (API, HTTP, storage)
 * - NO UI
 * - NO state logic
 * ======================================================
 */

// async function loginRequest(payload: {
//     email: string
//     password: string
//   }) {
//     // Simulated API call
//     return new Promise<{ user: { id: number; email: string } }>(
//       (resolve, reject) => {
//         setTimeout(() => {
//           if (payload.password === 'password123') {
//             resolve({
//               user: { id: 1, email: payload.email },
//             })
//           } else {
//             reject(new Error('Invalid credentials'))
//           }
//         }, 800)
//       }
//     )
//   }

//   /**
//    * ======================================================
//    * DOMAIN / BUSINESS LOGIC
//    * - Pure functions
//    * - No React
//    * - No API calls
//    * ======================================================
//    */

//   function isValidEmail(email: string): boolean {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//   }

//   function validateLogin(email: string, password: string) {
//     if (!isValidEmail(email)) {
//       throw new Error('Email is invalid')
//     }

//     if (password.length < 6) {
//       throw new Error('Password must be at least 6 characters')
//     }
//   }

//   /**
//    * ======================================================
//    * STATE MANAGEMENT
//    * - Holds app state
//    * - Exposes actions
//    * - No UI, no API
//    * ======================================================
//    */

//   type AuthState = {
//     user: { id: number; email: string } | null
//     loading: boolean
//     error: string | null
//   }

//   const authState: AuthState = {
//     user: null,
//     loading: false,
//     error: null,
//   }

//   const authActions = {
//     setLoading(value: boolean) {
//       authState.loading = value
//     },
//     setUser(user: AuthState['user']) {
//       authState.user = user
//     },
//     setError(error: string | null) {
//       authState.error = error
//     },
//   }

//   /**
//    * ======================================================
//    * USE-CASE / ORCHESTRATION LAYER
//    * - Coordinates logic + API + state
//    * - Still NO UI
//    * ======================================================
//    */

//   async function loginUser(email: string, password: string) {
//     try {
//       authActions.setLoading(true)
//       authActions.setError(null)

//       // Business rules
//       validateLogin(email, password)

//       // API call
//       const response = await loginRequest({ email, password })

//       // State update
//       authActions.setUser(response.user)
//     } catch (err: any) {
//       authActions.setError(err.message)
//     } finally {
//       authActions.setLoading(false)
//     }
//   }

//   /**
//    * ======================================================
//    * UI / PRESENTATION LAYER
//    * - React only
//    * - No business rules
//    * - No API calls
//    * ======================================================
//    */

//   import { useState } from 'react'

//   export default function LoginScreen() {
//     const [, forceUpdate] = useState({}) // simple rerender trigger

//     const handleLogin = async () => {
//       await loginUser(email, password)
//       forceUpdate({})
//     }

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     return (
//       <div style={{ maxWidth: 300 }}>
//         <h3>Login</h3>

//         <input
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {authState.error && (
//           <p style={{ color: 'red' }}>{authState.error}</p>
//         )}

//         {authState.user && (
//           <p style={{ color: 'green' }}>
//             Welcome {authState.user.email}
//           </p>
//         )}

//         <button
//           onClick={handleLogin}
//           disabled={authState.loading}
//         >
//           {authState.loading ? 'Logging in...' : 'Login'}
//         </button>
//       </div>
//     )
//   }

// ! Data Flow Discipline

// * API → Data Layer → Business Logic → UI

// ! SOLID ROLE BASED ACCESS CONTROL

// *  Leadership-level React (Banking / Regulated Systems)
// ******************************************************************/

// import React from 'react'
// import { Navigate } from 'react-router-dom'

// /******************************************************************
// *  1. PERMISSION & AUTH MODELS (SOURCE OF TRUTH)
// ******************************************************************/

// type Permission =
//  | 'USER_VIEW'
//  | 'USER_CREATE'
//  | 'TRANSACTION_INITIATE'
//  | 'TRANSACTION_APPROVE'
//  | 'ADMIN_ACCESS'

// type Role = 'user' | 'admin' | 'auditor'

// type AuthState = {
//  userId: string
//  role: Role
//  permissions: Permission[]
// }

// /******************************************************************
// *  2. AUTH STORE (SIMPLIFIED — REPLACE WITH ZUSTAND / CONTEXT)
// ******************************************************************/

// const authStore: AuthState = {
//  userId: 'user-123',
//  role: 'user',
//  permissions: ['USER_VIEW', 'TRANSACTION_INITIATE']
// }

// function useAuth() {
//  return authStore
// }

// /******************************************************************
// *  3. CENTRAL PERMISSION RESOLVER (CRITICAL)
// ******************************************************************/

// function hasPermission(
//  userPermissions: Permission[],
//  required: Permission | Permission[]
// ): boolean {
//  if (Array.isArray(required)) {
//    return required.every(p => userPermissions.includes(p))
//  }
//  return userPermissions.includes(required)
// }

// /******************************************************************
// *  4. APP-LEVEL ERROR MODEL
// ******************************************************************/

// class AppError extends Error {
//  type: 'FORBIDDEN' | 'UNAUTHORIZED' | 'UNKNOWN'
//  retryable?: boolean

//  constructor(type: AppError['type'], message: string) {
//    super(message)
//    this.type = type
//  }
// }

// /******************************************************************
// *  5. ROUTE GUARD (FIRST LINE OF DEFENSE)
// ******************************************************************/

// type ProtectedRouteProps = {
//  permission: Permission
//  children: JSX.Element
// }

// function ProtectedRoute({ permission, children }: ProtectedRouteProps) {
//  const auth = useAuth()

//  if (!hasPermission(auth.permissions, permission)) {
//    return <Navigate to="/unauthorized" replace />
//  }

//  return children
// }

// /******************************************************************
// *  6. FEATURE FLAGS (NOT PERMISSIONS)
// ******************************************************************/

// const featureFlags = {
//  transactionApproval: true,
//  adminPanel: false
// }

// /******************************************************************
// *  7. BUSINESS LOGIC — PERMISSION ENFORCED (NON-UI)
// ******************************************************************/

// async function approveTransaction(txId: string) {
//  const auth = useAuth()

//  // LOGIC-LEVEL ENFORCEMENT (NON-NEGOTIABLE)
//  if (!hasPermission(auth.permissions, 'TRANSACTION_APPROVE')) {
//    logSecurityEvent({
//      userId: auth.userId,
//      action: 'APPROVE_TRANSACTION',
//      resourceId: txId,
//      allowed: false
//    })

//    throw new AppError(
//      'FORBIDDEN',
//      'You are not authorized to approve transactions'
//    )
//  }

//  // Simulated API call
//  return Promise.resolve({ success: true })
// }

// /******************************************************************
// *  8. GUARDED HOOK (PREVENTS ACCIDENTAL MISUSE)
// ******************************************************************/

// function useApproveTransaction() {
//  const auth = useAuth()

//  return async (txId: string) => {
//    if (!hasPermission(auth.permissions, 'TRANSACTION_APPROVE')) {
//      throw new AppError('FORBIDDEN', 'Approval permission required')
//    }

//    return approveTransaction(txId)
//  }
// }

// /******************************************************************
// *  9. UI — REFLECT PERMISSIONS (NEVER ENFORCE)
// ******************************************************************/

// function ApproveButton({ txId }: { txId: string }) {
//  const auth = useAuth()
//  const approve = useApproveTransaction()

//  const canApprove =
//    featureFlags.transactionApproval &&
//    hasPermission(auth.permissions, 'TRANSACTION_APPROVE')

//  const handleClick = async () => {
//    try {
//      await approve(txId)
//      alert('Transaction approved')
//    } catch (e: any) {
//      alert(e.message)
//    }
//  }

//  return (
//    <button
//      disabled={!canApprove}
//      title={!canApprove ? 'Approval permission required' : undefined}
//      onClick={handleClick}
//    >
//      Approve Transaction
//    </button>
//  )
// }

// /******************************************************************
// *  10. SAMPLE PAGE (ROUTE-LEVEL PROTECTION)
// ******************************************************************/

// function ApproveTransactionPage() {
//  return (
//    <div>
//      <h2>Approve Transaction</h2>
//      <ApproveButton txId="tx-001" />
//    </div>
//  )
// }

// /******************************************************************
// *  11. ROUTE USAGE EXAMPLE
// ******************************************************************/

// export function AppRoutes() {
//  return (
//    <ProtectedRoute permission="TRANSACTION_APPROVE">
//      <ApproveTransactionPage />
//    </ProtectedRoute>
//  )
// }

// /******************************************************************
// *  12. SECURITY / AUDIT LOGGING
// ******************************************************************/

// function logSecurityEvent(event: {
//  userId: string
//  action: string
//  resourceId: string
//  allowed: boolean
// }) {
//  console.log('[SECURITY EVENT]', event)
// }

// /******************************************************************
// *  END OF FILE
// *
// *  GUARANTEES:
// *  - UI hiding ≠ permission enforcement
// *  - Routes guarded
// *  - Logic enforced
// *  - Feature flags separated
// *  - Auditable security events
// *
// *  THIS IS REGULATED-GRADE FRONTEND ARCHITECTURE.
// ******************************************************************/

// ! Layered architecture is a common software design pattern that organizes an application into horizontal layers, each handling specific functions like presentation, business logic, or data access, promoting separation of concerns, modularity, and easier maintenance.

// * “The app is built using a layered architecture to keep concerns clearly separated. At the top is the presentation layer, which contains mostly dumb UI components responsible only for rendering and user interactions. Business logic and state management are handled separately using a centralized store. This ensures predictable state updates and makes the app easier to debug and test. Data access is abstracted behind a service layer, which handles API communication, caching, and error normalization. The UI never talks directly to the API. Data flows in a single direction — user actions trigger state updates, which may cause side effects like API calls, and the resulting data flows back into the UI. For cross-cutting concerns like authentication, session management, and error handling, I used guards and interceptors so security and stability are enforced at the logic level, not just in the UI.This architecture makes the app scalable, easier to maintain, and safer to evolve. If the app grew further, I’d split the domain into feature-based modules and introduce stricter boundaries between features.”
