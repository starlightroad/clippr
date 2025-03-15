"use client";

import { LogOutIcon } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { type FormHTMLAttributes, forwardRef } from "react";

import { cn } from "@/app/_lib/utils";
import { signOutUser } from "@/app/(dashboard)/d/actions";

export default forwardRef<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>>(
  ({ className, ...props }, ref) => {
    const [_, formAction] = useFormState(signOutUser, null);

    return (
      <form
        action={formAction}
        ref={ref}
        className={cn(className, "p-0")}
        {...props}
      >
        <SubmitButton />
      </form>
    );
  },
);

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full cursor-default items-center gap-2 px-2 py-1.5"
    >
      <LogOutIcon size={16} />
      <span>Log out</span>
    </button>
  );
}
