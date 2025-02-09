import Container from "@/app/_components/container";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className="mx-auto flex max-w-sm justify-center">{children}</div>
    </Container>
  );
}
