"use server";

import { redirect } from "next/navigation";
import { APIError } from "better-auth/api";

import { auth, RegistrationFormSchema } from "@/app/_features/auth";
import { ERRORS, ROUTES } from "@/app/_lib/constants";

export const createUser = async (prevState: any, formData: FormData) => {
  // Validate user data
  const validatedUserData = RegistrationFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirm-password"),
  });

  if (!validatedUserData.success) {
    const errors = validatedUserData.error.flatten().fieldErrors;

    if (errors.email) {
      return {
        message: errors.email[0],
      };
    } else if (errors.password) {
      return {
        message: errors.password[0],
      };
    } else {
      return {
        message: errors.confirmPassword && errors.confirmPassword[0],
      };
    }
  }

  try {
    const { data } = validatedUserData;

    await auth.api.signUpEmail({
      body: {
        name: data.email,
        email: data.email,
        password: data.password,
      },
    });
  } catch (error) {
    if (error instanceof APIError) {
      console.error(error.body.code);

      if (error.body.code === "USER_ALREADY_EXISTS") {
        return {
          message: ERRORS.AUTH.USER_EXISTS,
        };
      }

      return {
        message: ERRORS.AUTH.FAILED_TO_CREATE_USER,
      };
    }

    return {
      message: ERRORS.SERVER.UNABLE_TO_PROCESS,
    };
  }

  redirect(ROUTES.HOME);
};
