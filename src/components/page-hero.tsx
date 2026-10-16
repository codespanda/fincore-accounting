import { Link } from "react-router"
import { ChevronRight } from "lucide-react"

import { Eyebrow } from "@/components/section-heading"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  crumbs: { label: string; to?: string }[]
}

export function PageHero({ eyebrow, title, description, crumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f6f9fe] to-[#e9f0fb]">
      <div className="absolute -top-24 -right-24 size-[420px] rounded-full bg-gradient-to-br from-[#dfe9fa] to-transparent" />
      <div className="absolute right-[18%] bottom-[-120px] size-[240px] rounded-full border-[28px] border-brand/5" />
      <div className="relative mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-[12.5px] text-slate-500">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="size-3.5" />}
              {c.to ? (
                <Link to={c.to} className="hover:text-brand">
                  {c.label}
                </Link>
              ) : (
                <span className="font-medium text-brand">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-[720px] text-[36px] leading-[1.15] font-bold tracking-tight text-ink sm:text-[46px]">
          {title}
        </h1>
        <p className="mt-5 max-w-[600px] text-[16px] leading-[1.75] text-slate-600">{description}</p>
      </div>
    </section>
  )
}
