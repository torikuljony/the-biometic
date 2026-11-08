import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CFFCB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#03040A]";

  const styles =
    variant === "primary"
      ? "bg-[#7CFFCB] text-[#03040A] shadow-[0_0_30px_rgba(124,255,203,0.5)] hover:translate-y-[-1px] hover:shadow-[0_0_40px_rgba(124,255,203,0.7)]"
      : "border border-white/15 bg-white/5 text-white/90 hover:border-[#7CFFCB]/50 hover:bg-white/10";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
