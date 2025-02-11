export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl px-5 md:px-0">
      {children}
    </div>
  );
}
