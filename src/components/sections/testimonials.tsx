import { useEffect, useState } from "react"
import { Quote, Star } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "FinCore Accounting has been a game-changer for our business. Their team is professional, responsive, and always looking out for our best interests.",
    name: "Sarah Johnson",
    role: "CEO, Bright Retail LLC",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote:
      "Their tax planning strategies saved us thousands of dollars. Highly recommend their services to any business owner.",
    name: "Michael Thompson",
    role: "Founder, TechNova Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote:
      "Reliable, accurate, and trustworthy. FinCore Accounting gives us the confidence to focus on growing our business.",
    name: "Priya Patel",
    role: "Owner, Patel Consulting",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote:
      "Payroll used to eat up our week. Now it simply runs, on time and without errors. Their team is a pleasure to work with.",
    name: "Danielle Chen",
    role: "COO, Harbor Logistics",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote:
      "Clear monthly statements and honest advice. We finally understand our numbers and make decisions with confidence.",
    name: "Emily Carter",
    role: "Director, Carter Studio",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
  },
]

function usePerView() {
  const get = () => (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)
  const [perView, setPerView] = useState(get)
  useEffect(() => {
    const onResize = () => setPerView(get())
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])
  return perView
}

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const perView = usePerView()
  const pages = testimonials.length - perView + 1
  const current = Math.min(index, pages - 1)

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % pages), 6000)
    return () => window.clearInterval(id)
  }, [pages])

  return (
    <section className="mx-auto max-w-[1280px] px-4 pt-20 pb-16 sm:px-6 lg:px-10">
      <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />

      <div className="mt-10 overflow-hidden px-1 py-2">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${(current * 100) / perView}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="shrink-0 px-3" style={{ width: `${100 / perView}%` }}>
              <Card className="h-full gap-0 rounded-xl bg-white p-7 shadow-[0_6px_24px_-10px_rgba(15,29,51,0.12)] ring-slate-100">
                <div className="flex gap-4">
                  <Quote className="size-7 shrink-0 rotate-180 fill-brand text-brand" strokeWidth={0} />
                  <p className="text-[13px] leading-[1.8] text-slate-600">{t.quote}</p>
                </div>
                <div className="mt-auto flex items-center gap-4 pt-7">
                  <img src={t.avatar} alt={t.name} className="size-12 rounded-full object-cover" />
                  <div>
                    <p className="text-[14px] font-semibold text-ink">{t.name}</p>
                    <p className="mt-0.5 text-[12px] text-slate-500">{t.role}</p>
                    <div className="mt-1.5 flex gap-1" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2.5">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial group ${i + 1}`}
            aria-current={current === i}
            className={cn("size-2.5 rounded-full transition-colors", current === i ? "bg-brand" : "bg-slate-300")}
          />
        ))}
      </div>
    </section>
  )
}
