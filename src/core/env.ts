import { z } from "zod";

const viteEnvSchema = z.object({
  VITE_BROWSER_WIDTH: z.string().transform((value) => Number(value)),
  VITE_BROWSER_HEIGHT: z.string().transform((value) => Number(value)),
});

const parsedEnv = viteEnvSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error(
    "❌ Invalid Vite environment variables:",
    parsedEnv.error.format()
  );
  throw new Error("Invalid environment variables");
}

export const env = parsedEnv.data;
