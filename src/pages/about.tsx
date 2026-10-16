import { Eye, Gem, HeartHandshake, Lightbulb, ShieldCheck, Target } from "lucide-react"

import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Stats } from "@/components/sections/stats"
import { Testimonials } from "@/components/sections/testimonials"
import { Card } from "@/components/ui/card"
import { team } from "@/data/site"

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "Honest advice and transparent pricing, even when it's not what you want to hear." },
  { icon: Target, title: "Accuracy", text: "Every number is checked twice. Our multi-step review process catches what others miss." },
  { icon: HeartHandshake, title: "Partnership", text: "We learn your business and treat your goals as if they were our own." },
  { icon: Lightbulb, title: "Innovation", text: "Modern cloud tools and automation give you real-time insight, not year-old reports." },
]

const milestones = [
  { year: "2015", title: "FinCore is founded", text: "Robert Hayes opens a two-person practice in Manhattan." },
  { year: "2018", title: "Going fully cloud", text: "We move every client to cloud accounting and a secure portal." },
  { year: "2021", title: "Advisory practice launches", text: "Fractional CFO services help clients plan growth with confidence." },
  { year: "2025", title: "500+ businesses served", text: "A team of 30 professionals now serves clients in all 50 states." },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Your Trusted Partner in Financial Success"
        description="For over a decade, FinCore Accounting has helped small and mid-sized businesses keep accurate books, pay less tax and grow with confidence."
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      {/* Story */}
      <section className="mx-auto grid max-w-[1280px] items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1100&q=80"
            alt="FinCore team collaborating"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
          <div className="absolute -right-3 -bottom-6 hidden rounded-xl bg-navy px-6 py-5 text-white shadow-xl sm:block">
            <p className="text-[32px] leading-none font-bold">30+</p>
            <p className="mt-2 text-[12px] text-white/85">Certified Professionals</p>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Our Story" title="Built on Trust, Driven by Results" align="left" divider />
          <p className="mt-6 text-[14.5px] leading-[1.8] text-slate-600">
            FinCore began with a simple idea: business owners deserve an accountant who picks up the phone, explains
            things in plain English and looks out for them all year, not just at tax time.
          </p>
          <p className="mt-4 text-[14.5px] leading-[1.8] text-slate-600">
            Today our team of CPAs, enrolled agents and advisors serves more than 500 businesses across 50 industries.
            We combine deep technical expertise with modern technology so you always know where you stand and what to do
            next.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-brand-soft p-5">
              <Gem className="size-6 text-navy" strokeWidth={1.6} />
              <h3 className="mt-3 text-[15px] font-semibold text-ink">Our Mission</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                To give every business the financial clarity and confidence it needs to thrive.
              </p>
            </div>
            <div className="rounded-xl bg-brand-soft p-5">
              <Eye className="size-6 text-navy" strokeWidth={1.6} />
              <h3 className="mt-3 text-[15px] font-semibold text-ink">Our Vision</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                To be the most trusted accounting partner for growing businesses in America.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="Our Values" title="What Guides Everything We Do" divider />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <Card
              key={title}
              className="items-center gap-0 rounded-xl bg-white p-8 text-center shadow-[0_6px_24px_-10px_rgba(15,29,51,0.12)] ring-slate-100"
            >
              <span className="flex size-[60px] items-center justify-center rounded-full bg-brand-soft text-navy">
                <Icon className="size-7" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-[16px] font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-[13px] leading-[1.75] text-slate-600">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#f6f9fe] py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <SectionHeading eyebrow="Our Journey" title="A Decade of Growing Together" divider />
          <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
            <span className="absolute top-[22px] right-[12%] left-[12%] hidden h-0.5 bg-brand/20 lg:block" />
            {milestones.map((m) => (
              <li key={m.year} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full bg-navy text-[12px] font-bold text-white ring-8 ring-[#f6f9fe]">
                  {m.year.slice(2)}
                </span>
                <div className="lg:mt-5">
                  <p className="text-[13px] font-bold text-brand">{m.year}</p>
                  <h3 className="mt-1 text-[16px] font-semibold text-ink">{m.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-[1280px] px-4 pt-20 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="Our Team" title="Meet the People Behind Your Numbers" divider />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card
              key={member.name}
              className="group gap-0 overflow-hidden rounded-xl bg-white p-0 shadow-[0_6px_24px_-10px_rgba(15,29,51,0.12)] ring-slate-100"
            >
              <div className="overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="aspect-[9/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-[15px] font-semibold text-ink">{member.name}</h3>
                <p className="mt-1 text-[12.5px] text-brand">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Testimonials />
      <CtaBanner />
    </>
  )
}
