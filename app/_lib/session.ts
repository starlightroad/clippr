"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/app/_features/auth";

export const verifySession = async () => {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (!session?.session.userId) {
    redirect("/login");
  }

  return {
    userId: session.session.userId,
  };
};
