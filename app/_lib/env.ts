import { ZodError } from "zod";

import { EnvSchema } from "@/app/_lib/definitions";

const envSchema = () => EnvSchema.parse(process.env);

try {
  envSchema();
} catch (error) {
  if (error instanceof ZodError) {
    let message = "Missing environment variables:\n";
    error.issues.forEach((issue) => {
      message += `${issue.path[0]}\n`;
    });

    const newError = new Error(message);
    newError.stack = "";

    throw newError;
  } else {
    console.error(error);
  }
}

export default envSchema();
