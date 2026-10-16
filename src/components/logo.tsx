import { Link } from "react-router"
import { cn } from "@/lib/utils"

type LogoProps = {
  variant?: "dark" | "light"
  className?: string
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const light = variant === "light"
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)} aria-label="FinCore Accounting home">
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
        <rect x="2" y="17" width="7" height="13" rx="1.2" fill={light ? "#ffffff" : "#1a63d6"} />
        <rect x="12.5" y="10" width="7" height="20" rx="1.2" fill={light ? "#ffffff" : "#1a63d6"} />
        <rect x="23" y="2" width="7" height="28" rx="1.2" fill={light ? "#ffffff" : "#0b3a86"} />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={cn("text-[22px] font-bold tracking-tight", light ? "text-white" : "text-navy")}>
          FinCore
        </span>
        <span
          className={cn(
            "mt-0.5 text-[8.5px] font-semibold tracking-[0.32em]",
            light ? "text-white/80" : "text-navy/80"
          )}
        >
          ACCOUNTING
        </span>
      </span>
    </Link>
  )
}
