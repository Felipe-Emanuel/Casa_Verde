import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  children: any | object;
  asChield?: boolean;
  className?: string;
  ref?: any;
}

export function Text({ children, asChield, className }: TextProps) {
  const Comp = asChield ? Slot : "span";

  return <Comp className={clsx(className)}>{children}</Comp>;
} 
