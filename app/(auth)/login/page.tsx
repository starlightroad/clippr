import type { Metadata } from "next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { LOGIN_PAGE_METADATA, LoginForm } from "@/app/_features/auth";

export const metadata: Metadata = {
  title: LOGIN_PAGE_METADATA.TITLE,
  description: LOGIN_PAGE_METADATA.DESCRIPTION,
  keywords: LOGIN_PAGE_METADATA.KEYWORDS,
};

export default function Login() {
  return (
    <main className="w-full py-20">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Sign in to Clippr to continue.</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
