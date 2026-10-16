import { Link } from "react-router"
import { ArrowLeft } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFoundPage() {
  return (
    <section className="bg-gradient-to-br from-white via-[#f6f9fe] to-[#e9f0fb]">
      <div className="mx-auto flex max-w-[640px] flex-col items-center px-4 py-28 text-center">
        <p className="text-[96px] leading-none font-bold tracking-tight text-navy sm:text-[128px]">
          4<span className="text-brand">0</span>4
        </p>
        <h1 className="mt-6 text-[26px] font-bold text-ink sm:text-[30px]">This page doesn&apos;t add up</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          The page you&apos;re looking for may have moved or no longer exists.
        </p>
        <Link
          to="/"
          className={cn(buttonVariants(), "mt-8 h-12 gap-2.5 rounded-md bg-navy px-6 text-[14px] font-semibold")}
        >
          <ArrowLeft className="size-4" /> Back to Home
        </Link>
      </div>
    </section>
  )
}
