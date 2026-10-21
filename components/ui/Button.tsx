import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "inverse";
type Size = "md" | "lg";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal-700 text-white hover:bg-teal-800 active:bg-navy-900 focus-visible:outline-teal-700 disabled:hover:bg-teal-700",
  secondary:
    "border border-navy-900/20 bg-white text-navy-900 hover:border-navy-900 hover:bg-teal-50 active:bg-border focus-visible:outline-teal-700",
  // For use on navy backgrounds.
  inverse:
    "border border-white/40 text-white hover:border-white hover:bg-navy-700 active:bg-navy-900 focus-visible:outline-white",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2 text-small",
  lg: "px-6 py-3 text-body",
};

type StyleProps = { variant?: Variant; size?: Size };

export function buttonClasses({ variant = "primary", size = "md" }: StyleProps = {}) {
  return cn(base, variants[variant], sizes[size]);
}

type ButtonProps = ComponentProps<"button"> & StyleProps;

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(buttonClasses({ variant, size }), className)} {...props} />
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & StyleProps;

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonClasses({ variant, size }), className)} {...props} />;
}
