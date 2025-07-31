import { ReactNode } from "react";

interface ScrollAnimatedListProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollAnimatedList({
  children,
  className,
}: ScrollAnimatedListProps) {
  return <div className={className}>{children}</div>;
}
