import { useEffect } from "react"
import { Outlet, useLocation } from "react-router"

import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
