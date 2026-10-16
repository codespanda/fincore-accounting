import { Award, Building2, ThumbsUp, UsersRound } from "lucide-react"

const stats = [
  { icon: UsersRound, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years in Business" },
  { icon: Building2, value: "50+", label: "Industries Served" },
  { icon: ThumbsUp, value: "99%", label: "Client Satisfaction" },
]

export function Stats() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-2 gap-y-8 rounded-xl bg-[#f1f6fd] px-4 py-8 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <div
            key={label}
            className={`flex items-center justify-center gap-4 ${i > 0 ? "lg:border-l lg:border-slate-200" : ""}`}
          >
            <Icon className="size-10 shrink-0 text-navy" strokeWidth={1.4} />
            <div>
              <p className="text-[28px] leading-none font-bold text-navy sm:text-[32px]">{value}</p>
              <p className="mt-2 text-[13px] text-ink">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
