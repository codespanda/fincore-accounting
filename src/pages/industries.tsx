import { Link } from "react-router"
import { ArrowRight, Check } from "lucide-react"

import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Stats } from "@/components/sections/stats"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { industries } from "@/data/site"
import { cn } from "@/lib/utils"

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industry Expertise That Makes a Difference"
        description="Every industry has its own rules, risks and opportunities. Our specialists know yours, so nothing gets missed."
        crumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
      />

      <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="Who We Serve" title="Specialized Accounting for Your Industry" divider />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, title, text, points }) => (
            <Card
              key={title}
              className="group gap-0 rounded-xl bg-white p-7 shadow-[0_6px_24px_-10px_rgba(15,29,51,0.12)] ring-slate-100 transition-all hover:-translate-y-1 hover:bg-navy hover:shadow-[0_18px_40px_-14px_rgba(15,29,51,0.35)]"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-brand-soft text-navy transition-colors group-hover:bg-white/10 group-hover:text-white">
                <Icon className="size-7" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-[16px] font-semibold text-ink transition-colors group-hover:text-white">{title}</h3>
              <p className="mt-2.5 text-[13px] leading-[1.75] text-slate-600 transition-colors group-hover:text-white/80">
                {text}
              </p>
              <ul className="mt-5 space-y-2">
                {points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-[12.5px] font-medium text-ink transition-colors group-hover:text-white"
                  >
                    <Check className="size-4 text-brand group-hover:text-white" strokeWidth={2.5} />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <Stats />

      <section className="mx-auto grid max-w-[1280px] items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <SectionHeading eyebrow="Don't See Yours?" title="We Adapt to Every Business" align="left" divider />
          <p className="mt-6 text-[14.5px] leading-[1.8] text-slate-600">
            From nonprofits and law firms to construction companies and creative agencies, we've worked with businesses
            in more than 50 industries. If you have unique reporting needs, we'll build a process around them.
          </p>
          <Link
            to="/contact"
            className={cn(buttonVariants(), "mt-8 h-12 gap-2.5 rounded-md bg-navy px-6 text-[14px] font-semibold")}
          >
            Talk to a Specialist <ArrowRight className="size-4" />
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=80"
          alt="City office buildings"
          className="aspect-[16/11] w-full rounded-xl object-cover"
        />
      </section>

      <CtaBanner />
    </>
  )
}
