import { BenefitsBar } from "@/components/sections/benefits-bar"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Stats } from "@/components/sections/stats"
import { Testimonials } from "@/components/sections/testimonials"
import { WhyChooseUs } from "@/components/sections/why-choose-us"

export default function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsBar overlapHero />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
