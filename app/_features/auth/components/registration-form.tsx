"use client";

import { useFormState } from "react-dom";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { ROUTES } from "@/app/_lib/constants";
import AlertMessage from "@/app/_components/alert-message";
import { createUser } from "@/app/(auth)/register/actions";

const initialState = {
  message: "",
};

export default function RegistrationForm() {
  const [state, formAction, pending] = useFormState(createUser, initialState);

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
        <div className="grid gap-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />
        </div>
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
        <Button type="submit" className="w-full" disabled={pending}>
          Register
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Have an account?&nbsp;
        <a
          href={ROUTES.LOGIN}
          className="text-blue-500 hover:underline hover:underline-offset-4"
        >
          Log in
        </a>
      </div>
    </form>
  );
}
