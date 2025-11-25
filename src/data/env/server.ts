// src/data/env/server.ts

import { createEnv } from "@t3-oss/env-nextjs"
import z from "zod"

export const env = createEnv({
  server: {
    // ✅ ADD DATABASE_URL HERE AND REMOVE INDIVIDUAL DB_ COMPONENTS
    DATABASE_URL: z.string().min(1), // Neon gives you the full URL

    ARCJET_KEY: z.string().min(1),
    CLERK_SECRET_KEY: z.string().min(1),
    HUME_API_KEY: z.string().min(1),
    HUME_SECRET_KEY: z.string().min(1),
    GEMINI_API_KEY: z.string().min(1),
  },

  // ❌ REMOVE createFinalSchema ENTIRELY
  // The URL is now provided directly, so no transformation is needed.

  emptyStringAsUndefined: true,
  experimental__runtimeEnv: process.env,
})