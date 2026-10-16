import { ChartColumn, FileText, Percent, ShieldCheck } from "lucide-react"

const benefits = [
  { icon: Percent, title: "Tax Savings", text: "Maximize deductions and keep more of your money." },
  { icon: FileText, title: "Accurate Records", text: "Precise bookkeeping and error-free reporting." },
  { icon: ShieldCheck, title: "Timely Compliance", text: "Stay compliant with tax laws and regulations." },
  { icon: ChartColumn, title: "Better Decisions", text: "Real insights to help your business grow." },
]

export function BenefitsBar({ overlapHero = false }: { overlapHero?: boolean }) {
  return (
    <section className={`relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10 ${overlapHero ? "-mt-4 lg:-mt-20" : ""}`}>
      <div className="grid gap-6 rounded-2xl bg-navy px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:px-4">
        {benefits.map(({ icon: Icon, title, text }, i) => (
          <div
            key={title}
            className={`flex items-start gap-4 lg:px-6 ${i > 0 ? "lg:border-l lg:border-white/15" : ""}`}
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
              <Icon className="size-6" strokeWidth={1.7} />
            </span>
            <div>
              <h3 className="text-[15px] font-semibold text-white">{title}</h3>
              <p className="mt-1.5 max-w-[190px] text-[13px] leading-relaxed text-white/80">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
