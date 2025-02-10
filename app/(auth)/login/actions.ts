import { LoginFormSchema } from "@/app/_features/auth";
import { ERRORS } from "@/app/_lib/constants";

export const signInUser = async (prevState: any, formData: FormData) => {
  // Validate user data
  const validatedUserData = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedUserData.success) {
    const errors = validatedUserData.error.flatten().fieldErrors;

    if (errors.email) {
      return {
        message: errors.email[0],
      };
    }
  }

  // Temporary return statement
  return {
    message: ERRORS.SERVER.UNABLE_TO_PROCESS,
  };
};
