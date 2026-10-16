import { useState, type FormEvent } from "react"
import { CircleCheck, Clock, Mail, MapPin, Phone, Send } from "lucide-react"

import { PageHero } from "@/components/page-hero"
import { Eyebrow } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contact, services } from "@/data/site"

const infoCards = [
  { icon: Phone, title: "Call Us", lines: [contact.phone], href: contact.phoneHref },
  { icon: Mail, title: "Email Us", lines: [contact.email], href: `mailto:${contact.email}` },
  { icon: MapPin, title: "Visit Us", lines: contact.address },
  { icon: Clock, title: "Office Hours", lines: contact.hours },
]

const fieldClass = "h-12 rounded-md border-slate-200 bg-white px-4 text-[14px]"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Business"
        description="Book a free 30-minute consultation or send us a question. We reply to every message within one business day."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map(({ icon: Icon, title, lines, href }) => {
            const body = (
              <>
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-soft text-navy">
                  <Icon className="size-5" strokeWidth={1.8} />
                </span>
                <h2 className="mt-4 text-[15px] font-semibold text-ink">{title}</h2>
                <div className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  {lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </>
            )
            const cls =
              "block rounded-xl border border-slate-100 bg-white p-6 shadow-[0_6px_24px_-10px_rgba(15,29,51,0.12)] transition-shadow hover:shadow-[0_18px_40px_-14px_rgba(15,29,51,0.22)]"
            return href ? (
              <a key={title} href={href} className={cls}>
                {body}
              </a>
            ) : (
              <div key={title} className={cls}>
                {body}
              </div>
            )
          })}
        </div>

        <div className="mt-14 grid overflow-hidden rounded-2xl border border-slate-100 shadow-[0_20px_50px_-20px_rgba(15,29,51,0.2)] lg:grid-cols-[1.35fr_1fr]">
          <div className="bg-white p-7 sm:p-10">
            <Eyebrow>Get in Touch</Eyebrow>
            <h2 className="mt-3 text-[26px] font-bold tracking-tight text-ink sm:text-[30px]">Book a Free Consultation</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
              Fill out the form and one of our accountants will contact you to schedule a time.
            </p>

            {sent ? (
              <div className="mt-8 flex flex-col items-center rounded-xl bg-brand-soft px-6 py-12 text-center">
                <CircleCheck className="size-12 fill-navy text-white" strokeWidth={1.8} />
                <h3 className="mt-4 text-[18px] font-semibold text-ink">Thank you! Your message has been sent.</h3>
                <p className="mt-2 max-w-sm text-[13.5px] text-slate-600">
                  We&apos;ll get back to you within one business day.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 h-10 rounded-md border-navy px-5 font-semibold text-navy"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" required placeholder="John Smith" className={fieldClass} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" required placeholder="john@company.com" className={fieldClass} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className={fieldClass} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Your business name" className={fieldClass} />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-[14px] text-ink outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                    <option value="other">Other / Not sure</option>
                  </select>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us a little about your business and what you need help with."
                    className="min-h-32 rounded-md border-slate-200 bg-white px-4 py-3 text-[14px]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" className="h-12 gap-2.5 rounded-md bg-navy px-7 text-[14px] font-semibold">
                    Send Message <Send className="size-4" />
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className="flex flex-col bg-navy text-white">
            <iframe
              title="FinCore Accounting office location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
              className="h-72 w-full border-0 lg:h-auto lg:flex-1"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-7 sm:p-10">
              <h3 className="text-[18px] font-semibold">Why book a consultation?</h3>
              <ul className="mt-5 space-y-3 text-[13.5px] text-white/85">
                {[
                  "Free, no-obligation 30-minute call",
                  "Clear fixed-fee quote, no surprises",
                  "Quick review of your current books",
                  "Immediate tax-saving ideas",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <CircleCheck className="size-5 shrink-0 fill-white text-navy" strokeWidth={2} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
