import { Link } from "react-router"
import { ArrowRight, BadgeCheck, LayoutGrid, Percent, Target, UsersRound } from "lucide-react"

import heroBanner from "@/assets/hero-banner.webp"
import { Eyebrow } from "@/components/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const highlights = [
  { icon: BadgeCheck, lines: ["Certified", "Professionals"] },
  { icon: Percent, lines: ["Years of", "Experience"] },
  { icon: Target, lines: ["Accurate &", "Reliable"] },
  { icon: UsersRound, lines: ["Client-Focused", "Approach"] },
]

function GrowthCard() {
  return (
    <div className="w-[230px] rounded-xl bg-white p-5 shadow-[0_20px_50px_-12px_rgba(15,29,51,0.25)] sm:w-[240px]">
      <p className="text-[15px] leading-snug font-semibold text-ink">
        Helping Businesses
        <br />
        Thrive Financially
      </p>
      <svg viewBox="0 0 200 90" className="mt-3 h-[90px] w-full" aria-hidden="true">
        <defs>
          <linearGradient id="growth-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1a63d6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1a63d6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M2 78 L22 60 L40 66 L60 50 L80 54 L100 42 L118 46 L136 34 L152 38 L170 22 L186 10 L198 4 L198 90 L2 90 Z"
          fill="url(#growth-fill)"
        />
        <path
          d="M2 78 L22 60 L40 66 L60 50 L80 54 L100 42 L118 46 L136 34 L152 38 L170 22 L186 10 L198 4"
          fill="none"
          stroke="#1a63d6"
          strokeWidth="2.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <div className="mt-3 border-t border-slate-100 pt-3 text-[11px] font-medium text-ink">
        Trusted by 500+ Businesses
      </div>
    </div>
  )
}

const heroMask =
  "linear-gradient(to right, transparent 0%, black 28%), linear-gradient(to top, transparent 0%, black 14%)"
const heroMaskMobile = "linear-gradient(to bottom, transparent 0%, black 12%, black 70%, transparent 100%)"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white via-[#f6f9fe] to-[#eef3fb]">
      {/* Desktop: photo ends at the content edge (in line with the header's "Book a Consultation" button) and fades into the background */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="relative mx-auto h-full max-w-[1280px] px-10">
          <div className="absolute inset-y-0 right-10 w-[55%]">
            <div className="absolute top-[14%] left-[14%] aspect-square w-[46%] rounded-full bg-gradient-to-br from-[#dfe9fa] to-[#f4f7fd]" />
            <img
              src={heroBanner}
              alt=""
              width={1443}
              height={1090}
              fetchPriority="high"
              className="relative size-full object-cover object-[45%_30%]"
              style={{ maskImage: heroMask, WebkitMaskImage: heroMask, maskComposite: "intersect", WebkitMaskComposite: "source-in" }}
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-4 pt-12 pb-10 sm:px-6 lg:min-h-[600px] lg:grid-cols-[1fr_1.05fr] lg:gap-6 lg:px-10 lg:pt-16 lg:pb-28">
        <div className="relative max-w-[560px]">
          <Eyebrow>Your finances. Our expertise.</Eyebrow>
          <h1 className="mt-5 text-[40px] leading-[1.12] font-bold tracking-tight text-ink sm:text-[52px]">
            Smart Accounting.
            <br />
            <span className="text-brand">Stronger Business.</span>
          </h1>
          <p className="mt-6 max-w-[470px] text-[16px] leading-[1.75] text-slate-600">
            Reliable accounting, tax, and advisory services to help you save time, reduce taxes, and grow your
            business with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className={cn(buttonVariants(), "h-12 gap-2.5 rounded-md bg-navy px-6 text-[14px] font-semibold")}>
              Book a Free Consultation
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 gap-2.5 rounded-md border-slate-200 bg-white px-6 text-[14px] font-semibold text-ink"
              )}
            >
              <LayoutGrid className="size-4" />
              Our Services
            </Link>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
            {highlights.map(({ icon: Icon, lines }) => (
              <li key={lines.join(" ")} className="flex items-center gap-2.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-navy">
                  <Icon className="size-[18px]" strokeWidth={1.8} />
                </span>
                <span className="text-[12px] leading-snug font-medium whitespace-nowrap text-ink">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile & tablet: full-width photo fading into the page at the bottom */}
        <div className="relative -mx-4 sm:-mx-6 lg:mx-0 lg:h-full">
          <img
            src={heroBanner}
            alt="Smiling FinCore accountant reviewing financial reports at his desk"
            width={1443}
            height={1090}
            className="aspect-[4/3] w-full object-cover lg:hidden"
            style={{ maskImage: heroMaskMobile, WebkitMaskImage: heroMaskMobile }}
          />
          <div className="relative z-10 -mt-24 mr-4 ml-auto w-fit sm:mr-6 lg:absolute lg:top-[8%] lg:right-6 lg:m-0">
            <GrowthCard />
          </div>
        </div>
      </div>
    </section>
  )
}
