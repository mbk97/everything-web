/**************************************************************************************************
 * ================================================================================================
 *                    ARCHITECTURE NOTES FORMAT — OPENAI API
 * ================================================================================================
 *
 * MODULE:
 * Building AI Chat, Summarization, and Structured Extraction with OpenAI
 *
 * DURATION:
 * 7–10 days
 *
 * PRIMARY GOAL:
 * Learn the foundations of integrating an LLM into a TypeScript application.
 *
 * FEATURES:
 *
 * 1. AI chat
 * 2. Text summarization
 * 3. Structured invoice extraction
 *
 * STACK:
 *
 * Node.js
 * Express
 * TypeScript
 * OpenAI SDK
 * Zod
 *
 **************************************************************************************************/

/**************************************************************************************************
 * PHASE 1 — WHAT YOU ARE BUILDING
 * ================================================================================================
 */

/*
Application architecture:

React Frontend
      |
      | POST /api/openai/chat
      | POST /api/openai/summarize
      | POST /api/openai/extract
      v
Express Backend
      |
      | OpenAI SDK
      v
OpenAI API


The frontend must not communicate directly with OpenAI using your secret key.

Wrong:

React Browser
     |
     v
OpenAI API


Correct:

React Browser
     |
     v
Node.js Backend
     |
     v
OpenAI API
*/


/**************************************************************************************************
 * PHASE 2 — CREATE THE PROJECT
 * ================================================================================================
 */

/*
STEP 1:

Create the project.

mkdir openai-learning-api
cd openai-learning-api
npm init -y


STEP 2:

Install production dependencies.

npm install express cors dotenv zod openai


STEP 3:

Install development dependencies.

npm install -D typescript tsx @types/node @types/express @types/cors


STEP 4:

Create TypeScript configuration.

npx tsc --init


STEP 5:

Add package.json scripts.

{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "type-check": "tsc --noEmit"
  }
}
*/


/**************************************************************************************************
 * PHASE 3 — CREATE THE PROJECT STRUCTURE
 * ================================================================================================
 */

/*
src/
|
+-- config/
|   |
|   +-- env.ts
|
+-- controllers/
|   |
|   +-- openai.controller.ts
|
+-- routes/
|   |
|   +-- openai.routes.ts
|
+-- schemas/
|   |
|   +-- openai.schemas.ts
|
+-- services/
|   |
|   +-- openai.service.ts
|
+-- app.ts
+-- server.ts
*/


/**************************************************************************************************
 * PHASE 4 — CONFIGURE ENVIRONMENT VARIABLES
 * ================================================================================================
 */

/*
Create:

.env


Add:

PORT=5000
OPENAI_API_KEY=your_secret_key
OPENAI_MODEL=your_current_supported_model


Create:

.gitignore


Add:

node_modules
dist
.env


Never commit your .env file.
*/


/**************************************************************************************************
 * PHASE 5 — VALIDATE ENVIRONMENT VARIABLES
 * ================================================================================================
 */

// src/config/env.ts

import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(5000),

  OPENAI_API_KEY: z
    .string()
    .min(1, "OPENAI_API_KEY is required."),

  OPENAI_MODEL: z
    .string()
    .min(1, "OPENAI_MODEL is required."),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error(
    "Invalid environment variables:",
    result.error.flatten().fieldErrors,
  );

  process.exit(1);
}

export const env = result.data;


/*
Why validate your environment?

Without validation:

- The server may start without an API key.
- The first user request will fail unexpectedly.
- TypeScript sees environment variables as possibly undefined.

With validation:

- Configuration problems are detected during startup.
- Errors are easier to understand.
- Your application receives strongly typed values.
*/


/**************************************************************************************************
 * PHASE 6 — CREATE THE OPENAI CLIENT
 * ================================================================================================
 */

// src/services/openai.service.ts

import OpenAI from "openai";
import { env } from "../config/env";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});


/*
Mental model:

openai
  |
  +-- Holds your authenticated API client
  |
  +-- Sends requests to OpenAI
  |
  +-- Returns generated responses


Create the client once.

Do not create a new client inside every controller request.
*/


/**************************************************************************************************
 * PHASE 7 — BUILD YOUR FIRST CHAT FUNCTION
 * ================================================================================================
 */

export interface OpenAIChatInput {
  message: string;
}

export interface OpenAIChatResult {
  text: string;
}

export async function generateChatResponse(
  input: OpenAIChatInput,
): Promise<OpenAIChatResult> {
  const response = await openai.responses.create({
    model: env.OPENAI_MODEL,

    instructions: `
      You are a senior software architecture tutor.

      Rules:
      - Explain concepts using simple language.
      - Use TypeScript and Node.js examples.
      - Do not invent facts.
      - Say clearly when information is uncertain.
    `,

    input: input.message,
  });

  return {
    text: response.output_text,
  };
}


/*
Request flow:

message
  |
  v
generateChatResponse()
  |
  v
openai.responses.create()
  |
  v
OpenAI model
  |
  v
response.output_text


The instructions field controls the assistant's general behaviour.

The input field contains the user's immediate request.
*/


/**************************************************************************************************
 * PHASE 8 — VALIDATE THE CHAT REQUEST
 * ================================================================================================
 */

// src/schemas/openai.schemas.ts

import { z } from "zod";

export const chatRequestSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .max(10_000, "Message is too long."),
});

export type ChatRequestBody = z.infer<typeof chatRequestSchema>;


/**************************************************************************************************
 * PHASE 9 — CREATE THE CHAT CONTROLLER
 * ================================================================================================
 */

// src/controllers/openai.controller.ts

import type { Request, Response } from "express";
import { chatRequestSchema } from "../schemas/openai.schemas";
import { generateChatResponse } from "../services/openai.service";

export async function chatController(
  request: Request,
  response: Response,
): Promise<void> {
  const validation = chatRequestSchema.safeParse(request.body);

  if (!validation.success) {
    response.status(400).json({
      success: false,
      message: "Invalid request.",
      errors: validation.error.flatten().fieldErrors,
    });

    return;
  }

  try {
    const result = await generateChatResponse({
      message: validation.data.message,
    });

    response.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("OpenAI chat error:", error);

    response.status(500).json({
      success: false,
      message: "The chat response could not be generated.",
    });
  }
}


/**************************************************************************************************
 * PHASE 10 — CREATE THE ROUTE
 * ================================================================================================
 */

// src/routes/openai.routes.ts

import { Router } from "express";
import { chatController } from "../controllers/openai.controller";

export const openAIRouter = Router();

openAIRouter.post("/chat", chatController);


/**************************************************************************************************
 * PHASE 11 — CREATE EXPRESS APP AND SERVER
 * ================================================================================================
 */

// src/app.ts

import cors from "cors";
import express from "express";
import { openAIRouter } from "./routes/openai.routes";

export const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_request, response) => {
  response.status(200).json({
    success: true,
    message: "OpenAI learning API is running.",
  });
});

app.use("/api/openai", openAIRouter);


// src/server.ts

import { app } from "./app";
import { env } from "./config/env";

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});


/**************************************************************************************************
 * PHASE 12 — TEST THE CHAT ENDPOINT
 * ================================================================================================
 */

/*
Start the application:

npm run dev


Test:

POST http://localhost:5000/api/openai/chat


Body:

{
  "message": "Explain Redis like I am a junior developer."
}


Expected response shape:

{
  "success": true,
  "data": {
    "text": "Redis is..."
  }
}
*/


/**************************************************************************************************
 * PHASE 13 — BUILD SUMMARIZATION
 * ================================================================================================
 */

export interface SummarizeInput {
  content: string;
  audience?: string;
  maximumWords?: number;
}

export interface SummarizeResult {
  summary: string;
}

export async function summarizeContent(
  input: SummarizeInput,
): Promise<SummarizeResult> {
  const audience = input.audience ?? "a busy project manager";
  const maximumWords = input.maximumWords ?? 150;

  const response = await openai.responses.create({
    model: env.OPENAI_MODEL,

    instructions: `
      You are a professional business summarization assistant.

      Summarize content accurately.
      Do not introduce information that is absent from the source.
    `,

    input: `
      Summarize the following content for ${audience}.

      Maximum length: ${maximumWords} words.

      CONTENT:
      ${input.content}
    `,
  });

  return {
    summary: response.output_text,
  };
}


/*
A useful summarization request should specify:

- Who will read the summary?
- How long should it be?
- What information is important?
- What output structure is required?
- What should the model avoid?
*/


/**************************************************************************************************
 * PHASE 14 — CREATE THE SUMMARIZATION SCHEMA
 * ================================================================================================
 */

export const summarizeRequestSchema = z.object({
  content: z
    .string()
    .trim()
    .min(50, "Provide more content to summarize.")
    .max(100_000, "Content is too long."),

  audience: z
    .string()
    .trim()
    .max(100)
    .optional(),

  maximumWords: z
    .number()
    .int()
    .min(20)
    .max(500)
    .optional(),
});


/**************************************************************************************************
 * PHASE 15 — BUILD STRUCTURED EXTRACTION
 * ================================================================================================
 */

/*
Goal:

Convert this:

Invoice Number: INV-2026-001
Vendor: Lagos Technology Services
Amount: NGN 850,000
Due Date: August 30, 2026


Into this:

{
  "invoiceNumber": "INV-2026-001",
  "vendorName": "Lagos Technology Services",
  "amount": 850000,
  "currency": "NGN",
  "dueDate": "2026-08-30"
}
*/


export const invoiceSchema = z.object({
  invoiceNumber: z.string().min(1),

  vendorName: z.string().min(1),

  amount: z.number().nonnegative(),

  currency: z.string().length(3),

  dueDate: z.string().nullable(),

  purchaseOrderNumber: z.string().nullable(),
});

export type Invoice = z.infer<typeof invoiceSchema>;


/*
The exact SDK helper available for schema-driven output can depend on the
currently installed OpenAI SDK version.

The stable architecture remains:

Source text
   |
   v
Schema-constrained model request
   |
   v
Parse returned object
   |
   v
Zod validation
   |
   v
Business-rule validation
*/


export async function extractInvoice(
  content: string,
): Promise<Invoice> {
  const response = await openai.responses.create({
    model: env.OPENAI_MODEL,

    instructions: `
      Extract invoice information from the source text.

      Return only JSON with these fields:

      invoiceNumber
      vendorName
      amount
      currency
      dueDate
      purchaseOrderNumber

      Rules:

      - amount must be a number without currency symbols or commas.
      - currency must be a three-letter code.
      - dueDate must use YYYY-MM-DD when available.
      - Use null when an optional field is unavailable.
      - Do not invent missing values.
    `,

    input: content,
  });

  let parsedValue: unknown;

  try {
    parsedValue = JSON.parse(response.output_text);
  } catch {
    throw new Error("OpenAI returned invalid JSON.");
  }

  return invoiceSchema.parse(parsedValue);
}


/*
IMPORTANT:

JSON parsing and Zod validation solve different problems.

JSON.parse asks:

"Is this valid JSON?"


Zod asks:

"Does this JSON match the structure required by my application?"


Neither automatically confirms that every extracted fact is correct.

Critical documents should still support human review.
*/


/**************************************************************************************************
 * PHASE 16 — ADD BUSINESS-RULE VALIDATION
 * ================================================================================================
 */

export function validateInvoiceBusinessRules(
  invoice: Invoice,
): string[] {
  const errors: string[] = [];

  if (invoice.amount > 10_000_000) {
    errors.push(
      "Invoices above 10,000,000 require manual approval.",
    );
  }

  if (invoice.currency !== "NGN") {
    errors.push(
      "Foreign-currency invoices require treasury review.",
    );
  }

  return errors;
}


/*
Schema validation:

"Is this a valid Invoice object?"


Business validation:

"Is this invoice acceptable under our business policies?"
*/


/**************************************************************************************************
 * PHASE 17 — LEARN STREAMING
 * ================================================================================================
 */

/*
Without streaming:

User
  |
  v
Wait for the full response
  |
  v
Display all text


With streaming:

User
  |
  v
Receive small text events
  |
  v
Display each event immediately


Streaming tasks:

1. Create POST /api/openai/chat/stream
2. Set the correct streaming response headers
3. Start an OpenAI streaming request
4. Listen for text delta events
5. Write each text delta to the HTTP response
6. Close the response when generation completes
7. Handle client cancellation
*/


/**************************************************************************************************
 * PHASE 18 — OPENAI PROJECT TASKS
 * ================================================================================================
 */

/*
TASK 1 — FIRST API CONNECTION

- Create the Express project.
- Add your environment variables.
- Configure the OpenAI client.
- Build GET /health.
- Build POST /api/openai/chat.


DEFINITION OF DONE:

The user sends a message and receives an AI-generated response.


TASK 2 — CHAT VALIDATION

- Reject empty messages.
- Limit message length.
- Add centralized error handling.
- Never return raw provider errors to the client.


TASK 3 — SUMMARIZER

Build:

POST /api/openai/summarize


Request:

{
  "content": "...",
  "audience": "engineering manager",
  "maximumWords": 100
}


TASK 4 — STRUCTURED EXTRACTION

Build:

POST /api/openai/extract/invoice


Validate:

- invoiceNumber
- vendorName
- amount
- currency
- dueDate
- purchaseOrderNumber


TASK 5 — STREAMING

- Create a streaming endpoint.
- Render the response progressively in React.
- Add an AbortController.
- Add a Stop Generating button.


TASK 6 — CHAT HISTORY

Create:

conversations
messages


Persist:

- User messages
- Assistant messages
- Provider name
- Model name
- Creation time


TASK 7 — PRODUCTION CONTROLS

Add:

- Request timeout
- Rate limiting
- Input size limits
- Logging
- Token or usage tracking
- Friendly provider-error mapping
*/


/**************************************************************************************************
 * OPENAI FINAL PROJECT
 * ================================================================================================
 */

/*
PROJECT:

OpenAI Business Assistant


FEATURES:

- AI chat
- Streaming
- Meeting-note summarization
- Invoice extraction
- Zod validation
- Conversation history
- Error handling
- Request limits
- React interface
*/