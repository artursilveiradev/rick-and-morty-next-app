type ContainerProps = {
  children: React.ReactNode;
};

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <main className="container mx-auto flex min-h-screen max-w-5xl flex-col">
      {children}
    </main>
  );
}
