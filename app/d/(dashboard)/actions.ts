"use server";

import { headers } from "next/headers";

import { auth } from "@/app/_features/auth";

export const signOutUser = async () => {
  try {
    await auth.api.signOut({
      headers: headers(),
    });
  } catch (error) {
    console.error("Failed to sign out user.");
  }
};
