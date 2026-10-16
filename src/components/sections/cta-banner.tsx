import { Link } from "react-router"
import { CalendarDays, Phone } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { contact } from "@/data/site"
import { cn } from "@/lib/utils"

export function CtaBanner() {
  return (
    <section className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col items-start gap-6 rounded-2xl bg-navy px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white text-navy">
            <CalendarDays className="size-7" strokeWidth={1.6} />
          </span>
          <div>
            <h2 className="text-[20px] font-semibold text-white sm:text-[22px]">Ready to Take Control of Your Finances?</h2>
            <p className="mt-1.5 text-[13.5px] text-white/85">
              Book a free consultation today and let&apos;s grow your business together.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            to="/contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 rounded-md border-white bg-white px-6 text-[13.5px] font-semibold text-navy hover:bg-white/90 hover:text-navy"
            )}
          >
            Book a Free Consultation
          </Link>
          <a
            href={contact.phoneHref}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 gap-2.5 rounded-md border-white/80 bg-transparent px-6 text-[13.5px] font-semibold text-white hover:bg-white/10 hover:text-white"
            )}
          >
            <Phone className="size-4" />
            Call Us: {contact.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
