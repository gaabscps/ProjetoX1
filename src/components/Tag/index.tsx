interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return <div className="tagContainer">{children}</div>;
}
