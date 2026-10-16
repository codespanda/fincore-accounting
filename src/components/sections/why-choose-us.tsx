import { Link } from "react-router"
import { CircleCheck } from "lucide-react"

import { Logo } from "@/components/logo"
import { SectionHeading } from "@/components/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const reasons = [
  "Experienced & Certified Accountants",
  "Personalized Service for Every Client",
  "Up-to-Date with Latest Tax Laws",
  "Secure & Confidential",
  "Affordable Pricing, No Hidden Fees",
]

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-16 sm:px-6 lg:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
            alt="FinCore Accounting office meeting room"
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="absolute top-[22%] right-[10%] hidden rounded-md bg-white/85 px-3 py-2 backdrop-blur-sm sm:block">
            <Logo />
          </div>
          <div className="absolute bottom-6 left-6 rounded-lg bg-white px-5 py-4 shadow-xl">
            <p className="text-[32px] leading-none font-bold text-navy">10+</p>
            <p className="mt-2 text-[12px] font-medium text-ink">Years of Experience</p>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Why Choose Us" title="Your Success is Our Priority" align="left" />
          <p className="mt-5 max-w-[460px] text-[14px] leading-[1.75] text-slate-600">
            We combine expertise, technology, and a personalized approach to deliver financial clarity and peace of
            mind.
          </p>
          <ul className="mt-7 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-center gap-3 text-[14px] text-ink">
                <CircleCheck className="size-5 fill-navy text-white" strokeWidth={2} />
                {reason}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-8 h-11 rounded-md border-navy px-6 text-[13.5px] font-semibold text-navy hover:bg-navy hover:text-white"
            )}
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}
