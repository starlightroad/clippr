import { cn } from "@/app/_lib/utils";

export function Heading1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        className,
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      )}
    >
      {children}
    </h1>
  );
}

export function Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn(className, "leading-7 [&:not(:first-child)]:mt-6")}>
      {children}
    </p>
  );
}
