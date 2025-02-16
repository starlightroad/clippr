"use server";

import { redirect } from "next/navigation";
import { APIError } from "better-auth/api";

import { auth, LoginFormSchema } from "@/app/_features/auth";
import { ERRORS, ROUTES } from "@/app/_lib/constants";

export const signInUser = async (prevState: any, formData: FormData) => {
  // Validate user data
  const validatedUserData = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedUserData.success) {
    const errors = validatedUserData.error.flatten().fieldErrors;

    return {
      message: String(errors.email ? errors.email : errors.password),
    };
  }

  try {
    const { data } = validatedUserData;

    await auth.api.signInEmail({
      body: {
        email: data.email,
        password: data.password,
      },
      asResponse: false,
    });
  } catch (error) {
    if (error instanceof APIError) {
      console.error(error.body.code);

      if (error.body.code === "INVALID_EMAIL_OR_PASSWORD") {
        return {
          message: ERRORS.AUTH.INVALID_CREDENTIALS,
        };
      }

      return {
        message: ERRORS.AUTH.FAILED_TO_LOG_IN_USER,
      };
    }

    return {
      message: ERRORS.SERVER.UNABLE_TO_PROCESS,
    };
  }

  redirect(ROUTES.HOME);
};
