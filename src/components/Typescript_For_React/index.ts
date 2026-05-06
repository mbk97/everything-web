// -----------------------------------------------------------------------------
// 🧠 TYPESCRIPT IN REACT — COMPLETE MASTER FILE (WITH DEFINITIONS)
// -----------------------------------------------------------------------------

/*
 * WHAT IS TYPESCRIPT?
 *
 * TypeScript is a superset of JavaScript that adds static typing.
 *
 * ✔ It checks errors BEFORE your code runs
 * ✔ Improves autocomplete
 * ✔ Makes large apps easier to maintain
 *
 * SUMMARY:
 * TypeScript helps you write safer, predictable code.
 */

// -----------------------------------------------------------------------------
// 🔰 PHASE 1 — TYPESCRIPT FUNDAMENTALS
// -----------------------------------------------------------------------------

/*
 * TASK 1: Basic Types
 *
 * WHAT ARE TYPES?
 *
 * Types define what kind of value a variable can hold.
 *
 * Examples:
 * - string → text
 * - number → numeric values
 * - boolean → true/false
 */

let username: string = "Mubarak";
let age: number = 28;
let isLoggedIn: boolean = true;

/*
 * SUMMARY:
 * Always define what kind of data your variable holds.
 */

// -----------------------------------------------------------------------------

/*
 * TASK 2: Arrays & Objects
 *
 * WHAT IS AN ARRAY TYPE?
 *
 * An array type defines what kind of items are inside a list.
 *
 * WHAT IS AN OBJECT TYPE?
 *
 * It defines the structure of an object.
 */

let users: string[] = ["John", "Jane"];

type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "Mubarak",
  age: 28,
};

/*
 * WHAT IS A UNION TYPE?
 *
 * A type that allows MULTIPLE possible types
 */

let users2: (string | number)[] = ["John", "Jane", 10, 20];

/*
 * SUMMARY:
 * Array can now contain BOTH strings and numbers
 */

/*
 * SUMMARY:
 * Types help structure your data clearly.
 */

// -----------------------------------------------------------------------------

/*
 * TASK 3: Functions
 *
 * WHAT IS FUNCTION TYPING?
 *
 * It defines:
 * ✔ Input types (parameters)
 * ✔ Output type (return value)
 */

function add(a: number, b: number): number {
  return a + b;
}

/*
 * SUMMARY:
 * Always type inputs AND return values.
 */

// -----------------------------------------------------------------------------

/*
 * TASK 4: Optional Fields
 *
 * WHAT ARE OPTIONAL PROPERTIES?
 *
 * Properties that may or may not exist.
 *
 * Useful when:
 * ✔ API doesn't always return all fields
 */

type Profile = {
  name: string;
  age?: number;
};

/*
 * SUMMARY:
 * Use ? when data is not guaranteed.
 */

// -----------------------------------------------------------------------------
// ⚛️ PHASE 2 — TYPESCRIPT WITH REACT BASICS
// -----------------------------------------------------------------------------

import React, { useState, useRef } from "react";

/*
 * TASK 5: Typing Props
 *
 * WHAT ARE PROPS?
 *
 * Props are inputs passed into components.
 *
 * WHY TYPE THEM?
 *
 * ✔ Prevent wrong data
 * ✔ Improve readability
 */

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  //   return <h1>{title}</h1>;
};

/*
 * SUMMARY:
 * Always type component props.
 */

// -----------------------------------------------------------------------------

/*
 * TASK 6: Typing useState
 *
 * WHAT IS useState TYPING?
 *
 * It defines what type of data your state holds.
 */

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  //   return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

/*
 * SUMMARY:
 * Never leave state untyped.
 */

// -----------------------------------------------------------------------------

/*
 * TASK 7: Typing Events
 *
 * WHAT ARE EVENTS?
 *
 * Events are user interactions (click, input, etc.)
 *
 * WHY TYPE THEM?
 *
 * ✔ Avoid accessing wrong properties
 */

const InputComponent = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  //   return <input onChange={handleChange} />;
};

/*
 * SUMMARY:
 * Proper event typing prevents runtime errors.
 */

// -----------------------------------------------------------------------------

/*
 * TASK 8: Typing useRef
 *
 * WHAT IS useRef?
 *
 * It gives direct access to DOM elements.
 */

const InputRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  //   return <input ref={inputRef} />;
};

/*
 * SUMMARY:
 * Always type DOM references.
 */

// -----------------------------------------------------------------------------
// 🧱 PHASE 3 — REAL PROJECT TYPES
// -----------------------------------------------------------------------------

/*
 * TASK 9: API Response Typing
 *
 * WHAT IS API TYPING?
 *
 * It defines what data your backend returns.
 */

type ApiUser = {
  id: number;
  name: string;
  email: string;
};

const fetchUser = async (): Promise<ApiUser> => {
  const res = await fetch("/api/user");
  return res.json();
};

/*
 * SUMMARY:
 * Never trust APIs without types.
 */

// -----------------------------------------------------------------------------

/*
 * TASK 10: Union Types
 *
 * WHAT IS A UNION TYPE?
 *
 * A variable that can hold multiple specific values.
 */

type Status = "loading" | "success" | "error";

let appState: Status = "loading";

/*
 * SUMMARY:
 * Perfect for UI states.
 */

// -----------------------------------------------------------------------------
// ⚡ PHASE 4 — ADVANCED REACT + TS
// -----------------------------------------------------------------------------

/*
 * TASK 11: Children Props
 *
 * WHAT IS children?
 *
 * It represents nested components inside a component.
 */

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  //   return <div>{children}</div>;
};

/*
 * SUMMARY:
 * Use ReactNode for children.
 */

// -----------------------------------------------------------------------------

/*
 * TASK 12: Generics
 *
 * WHAT ARE GENERICS?
 *
 * Generics allow you to create reusable types
 * that work with ANY data type.
 *
 * Think of it as:
 * "I don't know the type yet, but I’ll define it later"
 */

type ApiResponse<T> = {
  data: T;
  status: number;
};

const stringResponse: ApiResponse<string> = {
  data: "Hello",
  status: 200,
};

/*
 * SUMMARY:
 * Generics = reusable + scalable types.
 */

// -----------------------------------------------------------------------------

/*
 * TASK 13: Custom Hooks
 *
 * WHAT IS A CUSTOM HOOK?
 *
 * A reusable function that contains React logic.
 */

type CurrentUser = {
  name: string;
};

const useUser = (): CurrentUser => {
  return { name: "Mubarak" };
};

/*
 * SUMMARY:
 * Always type what your hook returns.
 */

// -----------------------------------------------------------------------------
// 🔥 PHASE 5 — STATE MANAGEMENT (ZUSTAND)
// -----------------------------------------------------------------------------

// import { create } from "zustand";

/*
 * TASK 14: Zustand Typing
 *
 * WHAT IS ZUSTAND?
 *
 * A lightweight global state management library.
 *
 * WHY TYPE IT?
 *
 * ✔ Prevent wrong state usage
 */

type Store = {
  count: number;
  increment: () => void;
};

const useStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

/*
 * SUMMARY:
 * Always define your store structure.
 */

// -----------------------------------------------------------------------------
// 🧾 PHASE 6 — FORMS + API
// -----------------------------------------------------------------------------

/*
 * TASK 15: Form Typing
 *
 * WHAT IS FORM TYPING?
 *
 * It ensures correct user input structure.
 */

type LoginForm = {
  email: string;
  password: string;
};

const handleSubmit = (values: LoginForm) => {
  console.log(values.email);
};

/*
 * SUMMARY:
 * Prevent invalid form data.
 */

// -----------------------------------------------------------------------------

/*
 * TASK 16: Axios Typing
 *
 * WHAT IS AXIOS TYPING?
 *
 * It defines the shape of API responses.
 */

import axios from "axios";

type AxiosUser = {
  id: number;
};

const getUser = async () => {
  const res = await axios.get<AxiosUser>("/api/user");
  return res.data;
};

/*
 * SUMMARY:
 * Always type API responses.
 */

// -----------------------------------------------------------------------------
// 🧠 PHASE 7 — ADVANCED TYPES
// -----------------------------------------------------------------------------

/*
 * TASK 17: Partial & Pick
 *
 * WHAT IS Partial?
 *
 * Makes all properties optional.
 *
 * WHAT IS Pick?
 *
 * Selects specific properties from a type.
 */

type FullUser = {
  name: string;
  age: number;
};

type PartialUser = Partial<FullUser>;
type UserName = Pick<FullUser, "name">;

/*
 * SUMMARY:
 * Modify types without rewriting them.
 */

// -----------------------------------------------------------------------------

/*
 * TASK 18: Record
 *
 * WHAT IS Record?
 *
 * A utility type to map keys to values.
 */

type Roles = "admin" | "user";

const permissions: Record<Roles, string[]> = {
  admin: ["read", "write"],
  user: ["read"],
};

/*
 * SUMMARY:
 * Useful for role-based systems.
 */

// -----------------------------------------------------------------------------

/*
 * TASK 19: keyof
 *
 * WHAT IS keyof?
 *
 * It extracts keys from a type.
 */

type Keys = keyof FullUser;

/*
 * SUMMARY:
 * Helps with dynamic property access.
 */

// -----------------------------------------------------------------------------

/*
 * TASK 20: Extending Types
 *
 * WHAT IS EXTENDING?
 *
 * Combining multiple types together.
 */

type Base = {
  id: number;
};

type Extended = Base & {
  name: string;
};

/*
 * SUMMARY:
 * Build scalable models.
 */

// -----------------------------------------------------------------------------
// 🚀 PHASE 8 — REAL WORLD EXAMPLE
// -----------------------------------------------------------------------------

/*
 * TASK 21: Scalable API Pattern
 *
 * Combines generics + API typing
 */

type AppUser = {
  id: number;
  name: string;
};

type AppApiResponse<T> = {
  data: T;
  status: number;
};

const fetchUsers = async (): Promise<AppApiResponse<AppUser[]>> => {
  return {
    data: [{ id: 1, name: "Mubarak" }],
    status: 200,
  };
};

function create<T>(
  arg0: (set: any) => { count: number; increment: () => any }
) {
  throw new Error("Function not implemented.");
}
/*
 * SUMMARY:
 * This is how real-world apps structure APIs.
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE TASKS
// -----------------------------------------------------------------------------

/*
 * TASK A:
 * Convert your React app to TypeScript
 *
 * TASK B:
 * Type your Zustand store
 *
 * TASK C:
 * Type all API responses
 *
 * TASK D:
 * Build a typed form
 *
 * TASK E:
 * Create reusable generic API handler
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL RULES
// -----------------------------------------------------------------------------

/*
 * 1. NEVER use "any"
 * 2. ALWAYS type props
 * 3. ALWAYS type API responses
 * 4. USE union types for UI states
 * 5. USE generics for reusable logic
 * 6. TYPE global state
 */

/*
 * FINAL SUMMARY:
 *
 * If you understand this file:
 *
 * ✔ You are beyond beginner
 * ✔ You can work in production apps
 * ✔ You can scale frontend systems
 *
 * TypeScript = REQUIRED for senior engineers
 */
