import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex items-center justify-center rounded-lg font-bold transition-all active:scale-95 duration-200 cursor-pointer",
  variants: {
    variant: {
      primary: "bg-primary text-on-primary hover:bg-primary-container shadow-lg shadow-primary/10",
      secondary: "bg-tertiary-fixed-dim text-on-tertiary-fixed hover:brightness-110",
      outline: "border border-white/30 text-white hover:bg-white/10",
      surface: "bg-surface-container-lowest text-primary hover:bg-primary-fixed",
    },
    size: {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2.5 text-base",
      lg: "px-10 py-4 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  href?: string;
}

export function Button({
  variant,
  size,
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const styles = button({ variant, size, className });

  if (href) {
    return (
      <a href={href} className={styles} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...(props as any)}>
      {children}
    </button>
  );
}