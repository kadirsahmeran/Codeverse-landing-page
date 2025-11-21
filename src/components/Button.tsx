
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string; // Varsa <a> etiketi render edilir
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string; // Ekstra stil veya override için
}

const BASE_BUTTON_CLASSES =
  "inline-flex items-center justify-center gap-3 " +
  "px-6 sm:px-10 py-4 text-base sm:text-lg font-semibold " +
  "rounded-full bg-cyan-700 hover:bg-cyan-600 " +
  "text-white transition-all duration-300 shadow-xl shadow-cyan-900/50 " +
  "transform hover:scale-105 cursor-pointer whitespace-nowrap";

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const finalClassName = `${BASE_BUTTON_CLASSES} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={finalClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} className={finalClassName}>
      {children}
    </button>
  );
}
