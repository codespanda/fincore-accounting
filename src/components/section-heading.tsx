import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  align?: "center" | "left"
  divider?: boolean
  className?: string
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-bold tracking-[0.08em] text-brand uppercase", className)}>{children}</p>
  )
}

export function SectionHeading({ eyebrow, title, align = "center", divider, className }: SectionHeadingProps) {
  const center = align === "center"
  return (
    <div className={cn(center && "text-center", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-[28px] leading-tight font-bold tracking-tight text-ink sm:text-[32px]">{title}</h2>
      {divider && <span className={cn("mt-4 block h-0.5 w-10 rounded-full bg-brand", center && "mx-auto")} />}
    </div>
  )
}
