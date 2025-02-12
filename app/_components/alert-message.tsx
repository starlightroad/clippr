import { AlertCircleIcon } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/app/_components/ui/alert";

export default function AlertMessage({
  title,
  message,
}: {
  title?: string;
  message: string;
}) {
  return (
    <Alert variant="destructive">
      {title && (
        <>
          <AlertCircleIcon size={16} />
          <AlertTitle>{title}</AlertTitle>
        </>
      )}
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
