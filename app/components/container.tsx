type ContainerProps = {
  children: React.ReactNode;
};

export default function Container(props: ContainerProps) {
  const { children } = props;

  return <main className="container mx-auto max-w-5xl flex-1">{children}</main>;
}
