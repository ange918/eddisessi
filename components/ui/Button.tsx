import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-xl font-medium transition-all duration-300 inline-block";
  
  const variants = {
    primary: "bg-[#D4AF37] text-white hover:bg-[#333333] hover:scale-105",
    secondary: "bg-[#333333] text-white hover:bg-[#D4AF37] hover:scale-105",
    outline: "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white hover:scale-105",
  };

  const combinedClassName = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
