// -----------------------------------------------------------------------------
// 🧠 ENTERPRISE TYPESCRIPT ARCHITECTURE (FINTECH LEVEL)
// -----------------------------------------------------------------------------

/*
 * Mindset Shift:
 *
 * Beginner → writes components
 * Mid-level → types everything
 * Senior → designs SYSTEMS
 *
 * This file teaches:
 * ✔ DTOs (Data Transfer Objects)
 * ✔ API Clients
 * ✔ Service Layer
 * ✔ Separation of concerns
 * ✔ Scalable folder structure
 */

// -----------------------------------------------------------------------------
// 🧱 PHASE 1 — DOMAIN MODEL (CORE TYPES)
// -----------------------------------------------------------------------------

/*
 * WHAT IS A DOMAIN MODEL?
 *
 * It represents your core business data.
 *
 * Example:
 * In banking → User, Account, Transaction
 */

export type User = {
  id: number;
  name: string;
  email: string;
};

export type Account = {
  id: number;
  balance: number;
  currency: string;
};

/*
 * SUMMARY:
 * Domain models represent REAL business entities.
 */

// -----------------------------------------------------------------------------
// 🔄 PHASE 2 — DTOs (DATA TRANSFER OBJECTS)
// -----------------------------------------------------------------------------

/*
 * WHAT IS A DTO?
 *
 * DTO = Shape of data coming from API
 *
 * IMPORTANT:
 * API data ≠ your app data
 *
 * WHY?
 * Backend might:
 * - Rename fields
 * - Add extra data
 * - Return inconsistent formats
 */

export type UserDTO = {
  user_id: number;
  full_name: string;
  email_address: string;
};

/*
 * TRANSFORM DTO → DOMAIN
 */

export const mapUserDtoToUser = (dto: UserDTO): User => {
  return {
    id: dto.user_id,
    name: dto.full_name,
    email: dto.email_address,
  };
};

// -----------------------------------------------------------------------------
// 🧠 REAL API EXAMPLE — DTO → DOMAIN → SERVICE → REACT
// -----------------------------------------------------------------------------

/*
 * API WE ARE USING:
 *
 * https://jsonplaceholder.typicode.com/users
 *
 * SAMPLE RESPONSE (from backend):
 *
 * {
 *   id: 1,
 *   name: "Leanne Graham",
 *   username: "Bret",
 *   email: "leanne@example.com",
 *   address: {
 *     street: "Kulas Light"
 *   }
 * }
 *
 * NOTICE:
 * Backend structure is NOT what we want directly in UI
 */

// -----------------------------------------------------------------------------
// 🔄 STEP 1 — DTO (API STRUCTURE)
// -----------------------------------------------------------------------------

/*
 * WHAT IS DTO HERE?
 *
 * Exact shape from API
 */

export type UserDTO_v2 = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
  };
};

/*
 * SUMMARY:
 * This mirrors backend EXACTLY
 */

// -----------------------------------------------------------------------------
// 🧱 STEP 2 — DOMAIN MODEL (WHAT UI NEEDS)
// -----------------------------------------------------------------------------

/*
 * WHAT IS DOMAIN MODEL?
 *
 * Clean structure for your app
 */

export type User_v2 = {
  id: number;
  fullName: string;
  email: string;
  street: string;
};

/*
 * WHY DIFFERENT?
 *
 * - Rename fields
 * - Flatten nested objects
 * - Remove unnecessary data
 */

/*
 * SUMMARY:
 * Domain = what your app ACTUALLY uses
 */

// -----------------------------------------------------------------------------
// 🔁 STEP 3 — MAPPER (DTO → DOMAIN)
// -----------------------------------------------------------------------------

export const mapUserDtoToUser_v2 = (dto: UserDTO_v2): User_v2 => {
  return {
    id: dto.id,
    fullName: dto.name,
    email: dto.email,
    street: dto.address.street,
  };
};

/*
 * SUMMARY:
 * Converts messy API → clean app data
 */

// -----------------------------------------------------------------------------
// 🌐 STEP 4 — API CLIENT
// -----------------------------------------------------------------------------

// import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

/*
 * GENERIC FETCH FUNCTION
 */

export const get_v1 = async <T>(url: string): Promise<T> => {
  const res = await api.get<T>(url);
  return res.data;
};

/*
 * SUMMARY:
 * Central place for API calls
 */

// -----------------------------------------------------------------------------
// ⚙️ STEP 5 — SERVICE LAYER
// -----------------------------------------------------------------------------

export const userService_v1 = {
  getUsers: async (): Promise<User[]> => {
    const data = await get_v1<UserDTO[]>("/users");

    return data.map(mapUserDtoToUser);
  },
};

/*
 * SUMMARY:
 * - Calls API
 * - Maps DTO → Domain
 * - Returns clean data
 */

// -----------------------------------------------------------------------------
// ⚛️ STEP 6 — REACT COMPONENT (CLEAN)
// -----------------------------------------------------------------------------

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    userService_v1.getUsers().then(setUsers);
  }, []);

  // return (
  //   <div>
  //     {users.map((user) => (
  //       <div key={user.id}>
  //         <h3>{user.fullName}</h3>
  //         <p>{user.email}</p>
  //         <p>{user.street}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
};

/*
 * NOTICE:
 *
 * Component does NOT know:
 * ❌ about DTO
 * ❌ about API structure
 * ❌ about axios
 *
 * It ONLY knows clean data
 */

/*
 * SUMMARY:
 * UI stays simple and stable
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL FLOW (IMPORTANT)
// -----------------------------------------------------------------------------

/*
 * API → DTO → Mapper → Domain → Service → UI
 *
 * Backend data → transformed → clean → used
 */

/*
 * REAL BENEFIT:
 *
 * If backend changes:
 *
 * Only update:
 * mapUserDtoToUser()
 *
 * NOT your entire app
 */

/*
 * SUMMARY:
 * NEVER use API response directly in UI.
 * Always map it.
 */

// -----------------------------------------------------------------------------
// 🌐 PHASE 3 — API CLIENT LAYER
// -----------------------------------------------------------------------------

/*
 * WHAT IS AN API CLIENT?
 *
 * A centralized place to handle ALL HTTP requests.
 *
 * WHY?
 * ✔ Reusability
 * ✔ Error handling
 * ✔ Clean architecture
 */

import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api",
});

/*
 * GENERIC REQUEST HANDLER
 */

export const get = async <T>(url: string): Promise<T> => {
  const res = await apiClient.get<T>(url);
  return res.data;
};

/*
 * SUMMARY:
 * Never call axios directly in components.
 */

// -----------------------------------------------------------------------------
// ⚙️ PHASE 4 — SERVICE LAYER
// -----------------------------------------------------------------------------

/*
 * WHAT IS A SERVICE LAYER?
 *
 * It sits between:
 * UI ↔ API
 *
 * It:
 * ✔ Calls API
 * ✔ Maps DTO → Domain
 * ✔ Applies business logic
 */

export const userService = {
  getUser: async (): Promise<User> => {
    const data = await get<UserDTO>("/user");

    return mapUserDtoToUser(data);
  },
};

/*
 * SUMMARY:
 * Components should NOT know about API structure.
 */

// -----------------------------------------------------------------------------
// ⚛️ PHASE 5 — REACT USAGE (CLEAN)
// -----------------------------------------------------------------------------

import { useEffect, useState } from "react";

/*
 * CLEAN COMPONENT (NO API LOGIC)
 */

export const UserComponent = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    userService.getUser().then(setUser);
  }, []);

  // return <div>{user?.name}</div>;
};

/*
 * SUMMARY:
 * Components only handle UI.
 * Logic lives elsewhere.
 */

// -----------------------------------------------------------------------------
// 🔁 PHASE 6 — GENERIC API RESPONSE PATTERN
// -----------------------------------------------------------------------------

/*
 * WHAT IS A GENERIC RESPONSE WRAPPER?
 *
 * Many APIs return:
 * { data, status, message }
 */

export type ApiResponse<T> = {
  data: T;
  message: string;
  status: number;
};

export const getSafe = async <T>(url: string): Promise<T> => {
  const res = await apiClient.get<ApiResponse<T>>(url);
  return res.data.data;
};

/*
 * SUMMARY:
 * Use generics to handle ANY API response cleanly.
 */

// -----------------------------------------------------------------------------
// 🧠 PHASE 7 — ERROR HANDLING (PRO LEVEL)
// -----------------------------------------------------------------------------

/*
 * WHAT IS STRUCTURED ERROR HANDLING?
 *
 * Standardizing errors across app
 */

export class AppError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AppError";
  }
}

/*
 * SERVICE WITH ERROR HANDLING
 */

export const safeUserService = {
  getUser: async (): Promise<User> => {
    try {
      const data = await get<UserDTO>("/user");
      return mapUserDtoToUser(data);
    } catch (error) {
      throw new AppError("Failed to fetch user");
    }
  },
};

/*
 * SUMMARY:
 * Never expose raw API errors to UI.
 */

// -----------------------------------------------------------------------------
// 🧩 PHASE 8 — SCALABLE FOLDER STRUCTURE
// -----------------------------------------------------------------------------

/*
 * WHAT IS GOOD STRUCTURE?
 *
 * src/
 * ├── api/        → axios config
 * ├── services/   → business logic
 * ├── models/     → domain types
 * ├── dtos/       → API types
 * ├── hooks/      → custom hooks
 * ├── store/      → Zustand
 * ├── components/ → UI
 */

/*
 * SUMMARY:
 * Separation = scalability
 */

// -----------------------------------------------------------------------------
// 🔥 PHASE 9 — ADVANCED PATTERNS (SENIOR LEVEL)
// -----------------------------------------------------------------------------

/*
 * 1. NEVER MIX:
 * - API logic
 * - UI logic
 * - business logic
 *
 * 2. ALWAYS:
 * ✔ Map DTO → Domain
 * ✔ Use services
 * ✔ Use generics
 *
 * 3. THINK:
 * "If backend changes, will my UI break?"
 *
 * If YES → bad architecture
 */

// -----------------------------------------------------------------------------
// 🧪 PRACTICE (REAL FOR YOU)
// -----------------------------------------------------------------------------

/*
 * TASK 1:
 * Refactor your current project:
 * - Remove axios from components
 *
 * TASK 2:
 * Add DTO layer
 *
 * TASK 3:
 * Add service layer
 *
 * TASK 4:
 * Create reusable API client
 *
 * TASK 5:
 * Convert Zustand store to use typed services
 */

// -----------------------------------------------------------------------------
// 🧠 FINAL MINDSET
// -----------------------------------------------------------------------------

/*
 * If you understand this:
 *
 * ✔ You are approaching senior level
 * ✔ You can work in fintech systems
 * ✔ You can design scalable frontend architecture
 *
 * This is what separates:
 * "React developer" vs "Software Engineer"
 */
