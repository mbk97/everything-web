// -----------------------------------------------------------------------------
// 🧠 TYPESCRIPT INTERVIEW QUESTIONS (MID → SENIOR LEVEL)
// -----------------------------------------------------------------------------

import { useState } from "react";

/*
 * FORMAT:
 * Question
 * Answer
 * Why it matters (real-world insight)
 */

// -----------------------------------------------------------------------------
// 🔰 LEVEL 1 — CORE UNDERSTANDING
// -----------------------------------------------------------------------------

/*
 * Q1: What is TypeScript?
 *
 * A:
 * TypeScript is a superset of JavaScript that adds static typing.
 *
 * WHY IT MATTERS:
 * Shows you understand the purpose — not just syntax.
 */

/*
 * Q2: Difference between TypeScript and JavaScript?
 *
 * A:
 * TypeScript:
 * ✔ Static typing
 * ✔ Compile-time error checking
 *
 * JavaScript:
 * ✔ Dynamic typing
 * ✔ Errors occur at runtime
 *
 * WHY IT MATTERS:
 * Interviewers want to know if you understand safety benefits.
 */

/*
 * Q3: What is type inference?
 *
 * A:
 * TypeScript automatically determines a variable’s type based on its value.
 *
 * Example:
 * let name = "Mubarak"; // inferred as string
 *
 * WHY IT MATTERS:
 * Shows you don’t over-type unnecessarily.
 */

// -----------------------------------------------------------------------------
// ⚛️ LEVEL 2 — REACT + PRACTICAL TS
// -----------------------------------------------------------------------------

/*
 * Q4: How do you type React props?
 *
 * A:
 */

type Props = {
  title: string;
};

const Component = ({ title }: Props) => {
  // return <h1>{title}</h1>;
};

/*
 * WHY IT MATTERS:
 * This is basic expectation in React projects.
 */

/*
 * Q5: How do you type useState?
 *
 * A:
 */

const [count, setCount] = useState<number>(0);

/*
 * WHY IT MATTERS:
 * Prevents incorrect state updates.
 */

/*
 * Q6: Difference between interface and type?
 *
 * A:
 * interface:
 * ✔ extendable
 *
 * type:
 * ✔ supports unions, intersections
 *
 * RULE:
 * - Use interface for objects
 * - Use type for flexibility
 *
 * WHY IT MATTERS:
 * Common interview question.
 */

// -----------------------------------------------------------------------------
// 🧱 LEVEL 3 — INTERMEDIATE CONCEPTS
// -----------------------------------------------------------------------------

/*
 * Q7: What is a union type?
 *
 * A:
 * A type that allows multiple possible values.
 */

type Status = "loading" | "success" | "error";

/*
 * WHY IT MATTERS:
 * Used heavily in UI states.
 */

/*
 * Q8: What is an intersection type?
 *
 * A:
 * Combines multiple types into one.
 */

type A = { name: string };
type B = { age: number };

type C = A & B;

/*
 * WHY IT MATTERS:
 * Used for extending models.
 */

/*
 * Q9: What is keyof?
 *
 * A:
 * It extracts keys from a type.
 */

type User = { name: string; age: number };
type Keys = keyof User; // "name" | "age"

/*
 * WHY IT MATTERS:
 * Used in dynamic forms and utilities.
 */

/*
 * Q10: What is a generic?
 *
 * A:
 * A way to create reusable types that work with any data type.
 */

type ApiResponse<T> = {
  data: T;
};

/*
 * WHY IT MATTERS:
 * Core to scalable applications.
 */

// -----------------------------------------------------------------------------
// ⚡ LEVEL 4 — ADVANCED TYPES
// -----------------------------------------------------------------------------

/*
 * Q11: What is Partial<T>?
 *
 * A:
 * Makes all properties optional.
 */

type User2 = { name: string; age: number };
type PartialUser = Partial<User2>;

/*
 * WHY IT MATTERS:
 * Used in update forms.
 */

/*
 * Q12: What is Pick<T, K>?
 *
 * A:
 * Selects specific properties.
 */

type UserName = Pick<User, "name">;

/*
 * WHY IT MATTERS:
 * Avoids duplication.
 */

/*
 * Q13: What is Record<K, T>?
 *
 * A:
 * Creates a key-value object type.
 */

type Roles = "admin" | "user";

const permissions: Record<Roles, string[]> = {
  admin: ["read"],
  user: ["read"],
};

/*
 * WHY IT MATTERS:
 * Used in role-based systems.
 */

/*
 * Q14: What is unknown vs any?
 *
 * A:
 * any:
 * ❌ disables type checking
 *
 * unknown:
 * ✔ safer, must check before use
 *
 * WHY IT MATTERS:
 * Senior-level understanding.
 */

// -----------------------------------------------------------------------------
// 🚀 LEVEL 5 — REAL WORLD ARCHITECTURE
// -----------------------------------------------------------------------------

/*
 * Q15: What is a DTO?
 *
 * A:
 * Data Transfer Object — represents API response shape.
 *
 * WHY IT MATTERS:
 * Separates backend from frontend models.
 */

/*
 * Q16: Why map DTO to domain model?
 *
 * A:
 * To prevent UI breaking when API changes.
 *
 * WHY IT MATTERS:
 * This is senior-level architecture thinking.
 */

/*
 * Q17: Why should you not call axios in components?
 *
 * A:
 * It mixes concerns (UI + data fetching).
 *
 * WHY IT MATTERS:
 * Clean architecture principle.
 */

/*
 * Q18: What is a service layer?
 *
 * A:
 * A layer that handles API calls and business logic.
 *
 * WHY IT MATTERS:
 * Used in large-scale apps.
 */

/*
 * Q19: What are generics used for in API calls?
 *
 * A:
 */

const get = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  return res.json();
};

/*
 * WHY IT MATTERS:
 * Reusable API functions.
 */

/*
 * Q20: How do you handle API errors in TypeScript?
 *
 * A:
 * Use custom error classes + try/catch.
 */

class AppError extends Error {}

/*
 * WHY IT MATTERS:
 * Production-grade handling.
 */

// -----------------------------------------------------------------------------
// 🔥 LEVEL 6 — TRICKY / SENIOR QUESTIONS
// -----------------------------------------------------------------------------

/*
 * Q21: Why avoid "any"?
 *
 * A:
 * It removes all type safety.
 */

/*
 * Q22: When would you use unknown?
 *
 * A:
 * When you don’t know the type yet but want safety.
 */

/*
 * Q23: What happens if you misuse union types?
 *
 * A:
 * You must handle all possible types → can complicate logic.
 */

/*
 * Q24: What is type narrowing?
 *
 * A:
 * Refining a type using checks.
 */

function example(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
}

/*
 * WHY IT MATTERS:
 * Critical for working with unions.
 */

/*
 * Q25: What is the biggest TypeScript mistake developers make?
 *
 * A:
 * Using "any" or skipping proper typing of APIs.
 */

/*
 * Q26: How do you design scalable TypeScript apps?
 *
 * A:
 * ✔ Separate DTOs and domain models
 * ✔ Use service layer
 * ✔ Use generics
 * ✔ Avoid tight coupling
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL SUMMARY
// -----------------------------------------------------------------------------

/*
 * If you can answer these:
 *
 * ✔ You are mid → senior level
 * ✔ You understand architecture, not just syntax
 * ✔ You are ready for fintech-level interviews
 */
