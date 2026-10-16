import { Link, useParams } from "react-router"
import { ArrowRight, CircleCheck, Phone } from "lucide-react"

import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { CtaBanner } from "@/components/sections/cta-banner"
import { ServiceCard } from "@/components/sections/services"
import { buttonVariants } from "@/components/ui/button"
import { contact, services } from "@/data/site"
import { cn } from "@/lib/utils"
import NotFoundPage from "@/pages/not-found"

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <NotFoundPage />

  const { icon: Icon } = service
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={service.title}
        description={service.text}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.title }]}
      />

      <section className="mx-auto grid max-w-[1280px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-10">
        <div>
          <span className="flex size-16 items-center justify-center rounded-full bg-brand-soft text-navy">
            <Icon className="size-8" strokeWidth={1.5} />
          </span>
          <h2 className="mt-6 text-[26px] font-bold tracking-tight text-ink sm:text-[30px]">
            {service.title} that works for you
          </h2>
          <p className="mt-4 text-[15px] leading-[1.8] text-slate-600">{service.intro}</p>

          <h3 className="mt-10 text-[18px] font-semibold text-ink">What&apos;s included</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-3 rounded-lg bg-[#f6f9fe] px-4 py-3.5 text-[13.5px] text-ink">
                <CircleCheck className="mt-0.5 size-5 shrink-0 fill-navy text-white" strokeWidth={2} />
                {f}
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-[18px] font-semibold text-ink">Our process</h3>
          <ol className="mt-5 grid gap-5 sm:grid-cols-2">
            {service.process.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-xl border border-slate-100 p-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy text-[13px] font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[14.5px] font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-[0_6px_24px_-10px_rgba(15,29,51,0.12)]">
            <h3 className="text-[15px] font-semibold text-ink">All Services</h3>
            <nav className="mt-4 flex flex-col gap-1">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition-colors",
                    s.slug === service.slug ? "bg-navy text-white" : "text-ink hover:bg-brand-soft hover:text-brand"
                  )}
                >
                  {s.title}
                  <ArrowRight className="size-4" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="rounded-xl bg-navy p-6 text-white">
            <p className="text-[12px] font-semibold tracking-[0.08em] text-white/70 uppercase">Starting at</p>
            <p className="mt-1 text-[26px] font-bold">{service.price}</p>
            <p className="mt-3 text-[13px] leading-relaxed text-white/80">
              Fixed monthly fees. No hidden costs. Get an exact quote in a free 30-minute call.
            </p>
            <Link
              to="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-5 h-11 w-full rounded-md border-white bg-white font-semibold text-navy hover:bg-white/90 hover:text-navy"
              )}
            >
              Get a Free Quote
            </Link>
            <a href={contact.phoneHref} className="mt-4 flex items-center justify-center gap-2 text-[13px] text-white/90">
              <Phone className="size-4" /> {contact.phone}
            </a>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-20 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="Explore More" title="Related Services" divider />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
