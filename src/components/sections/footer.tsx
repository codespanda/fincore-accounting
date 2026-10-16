import { useState, type FormEvent } from "react"
import { Link } from "react-router"
import { Mail, MapPin, Phone, Send } from "lucide-react"

import { Logo } from "@/components/logo"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "@/components/social-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { contact, navItems, services } from "@/data/site"

const quickLinks = navItems.map(({ label, to }) => ({ label, to }))
const serviceLinks = services.map((s) => ({ label: s.title, to: `/services/${s.slug}` }))
const socials = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "LinkedIn", icon: LinkedinIcon },
  { label: "Twitter", icon: TwitterIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "YouTube", icon: YoutubeIcon },
]

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-white">{title}</h3>
      <div className="mt-5">{children}</div>
    </div>
  )
}

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubscribed(true)
    e.currentTarget.reset()
  }

  return (
    <footer className="mt-2 bg-navy-deep pt-16 text-white/80">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_0.9fr_1fr_1.2fr_1.3fr] lg:px-10">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-[260px] text-[13px] leading-[1.8]">
            Trusted accounting and advisory services to help businesses stay compliant, save taxes, and grow with
            confidence.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-8 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white hover:text-navy-deep"
              >
                <Icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick Links">
          <ul className="space-y-3 text-[13px]">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Our Services">
          <ul className="space-y-3 text-[13px]">
            {serviceLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Contact Us">
          <ul className="space-y-4 text-[13px] leading-relaxed">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-white" />
              <span>
                {contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li>
              <a href={contact.phoneHref} className="flex gap-3 hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0 text-white" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a href="mailto:info@fincoreaccounting.com" className="flex gap-3 break-all hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0 text-white" />
                info@fincoreaccounting.com
              </a>
            </li>
          </ul>
        </FooterColumn>

        <FooterColumn title="Newsletter">
          <p className="text-[13px] leading-[1.8]">Subscribe to get financial tips, updates, and insights.</p>
          <form onSubmit={onSubmit} className="mt-5 flex">
            <Input
              type="email"
              required
              placeholder="Enter your email"
              aria-label="Email address"
              className="h-11 rounded-r-none border-0 bg-white px-4 text-[13px] text-ink placeholder:text-slate-400 dark:bg-white"
            />
            <Button type="submit" aria-label="Subscribe" className="h-11 w-12 rounded-l-none bg-brand hover:bg-brand/90">
              <Send className="size-4" />
            </Button>
          </form>
          {subscribed && <p className="mt-3 text-[12px] text-white">Thanks for subscribing!</p>}
        </FooterColumn>
      </div>

      <div className="mx-auto mt-14 max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <Separator className="bg-white/10" />
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-[12px] sm:flex-row">
          <p>© 2025 FinCore Accounting. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-white/40">|</span>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
