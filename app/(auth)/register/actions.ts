"use server";

import { RegistrationFormSchema } from "@/app/_features/auth";

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

  // Temporary return statement
  return {
    message: "The server is unable to process your request.",
  };
};
