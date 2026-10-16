import { CalendarCheck, FileSearch, Handshake, Rocket } from "lucide-react"

import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { BenefitsBar } from "@/components/sections/benefits-bar"
import { CtaBanner } from "@/components/sections/cta-banner"
import { ServiceCard } from "@/components/sections/services"
import { Testimonials } from "@/components/sections/testimonials"
import { services } from "@/data/site"

const steps = [
  { icon: CalendarCheck, title: "Free Consultation", text: "Tell us about your business, goals and challenges." },
  { icon: FileSearch, title: "Custom Proposal", text: "Receive a fixed-fee plan tailored to what you need." },
  { icon: Handshake, title: "Easy Onboarding", text: "We securely connect your accounts and get set up." },
  { icon: Rocket, title: "Ongoing Support", text: "Your dedicated accountant keeps everything on track." },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Accounting Solutions"
        description="From day-to-day bookkeeping to long-term tax strategy, everything your business needs under one roof."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="What We Offer" title="Services Built Around Your Business" divider />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <BenefitsBar />

      <section className="mx-auto max-w-[1280px] px-4 pt-20 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="How It Works" title="Getting Started Is Simple" divider />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative rounded-xl border border-slate-100 bg-white p-7 shadow-[0_6px_24px_-10px_rgba(15,29,51,0.12)]"
            >
              <span className="absolute top-5 right-6 text-[40px] leading-none font-bold text-brand/10">
                0{i + 1}
              </span>
              <span className="flex size-12 items-center justify-center rounded-full bg-navy text-white">
                <Icon className="size-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 text-[16px] font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-[13px] leading-[1.75] text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  )
}
