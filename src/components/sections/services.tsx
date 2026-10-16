import { Link } from "react-router"
import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { services, type Service } from "@/data/site"
import { cn } from "@/lib/utils"

export function ServiceCard({ service }: { service: Service }) {
  const { icon: Icon, title, text, slug } = service
  return (
    <Card className="group flex-row items-start gap-5 rounded-xl bg-white p-7 shadow-[0_6px_24px_-10px_rgba(15,29,51,0.12)] ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(15,29,51,0.22)]">
      <span className="flex size-[58px] shrink-0 items-center justify-center rounded-full bg-brand-soft text-navy">
        <Icon className="size-7" strokeWidth={1.5} />
      </span>
      <div>
        <h3 className="text-[16px] font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-[13px] leading-[1.75] text-slate-600">{text}</p>
        <Link
          to={`/services/${slug}`}
          className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-brand transition-[gap] group-hover:gap-3"
        >
          Learn More <ArrowRight className="size-4" />
        </Link>
      </div>
    </Card>
  )
}

export function Services() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pt-20 pb-20 sm:px-6 lg:px-10">
      <SectionHeading eyebrow="Our Services" title="Comprehensive Accounting Solutions" divider />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link to="/services" className={cn(buttonVariants(), "h-12 rounded-md bg-navy px-7 text-[14px] font-semibold")}>
          View All Services
        </Link>
      </div>
    </section>
  )
}
