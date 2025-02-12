"use client";

import { useFormState, useFormStatus } from "react-dom";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { ROUTES } from "@/app/_lib/constants";
import AlertMessage from "@/app/_components/alert-message";
import { signInUser } from "@/app/(auth)/login/actions";

const initialState = {
  message: "",
};

export default function LoginForm() {
  const [state, formAction] = useFormState(signInUser, initialState);

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-6">
        {state?.message && <AlertMessage message={state.message} />}
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="bob@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" name="password" required />
        </div>
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
        <SubmitButton />
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?&nbsp;
        <a
          href={ROUTES.REGISTER}
          className="text-blue-500 hover:underline hover:underline-offset-4"
        >
          Register
        </a>
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      Log in
    </Button>
  );
}
