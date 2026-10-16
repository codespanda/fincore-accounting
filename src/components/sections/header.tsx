import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router"
import { ChevronDown, Menu, Phone, X } from "lucide-react"

import { Logo } from "@/components/logo"
import { buttonVariants } from "@/components/ui/button"
import { contact, navItems, type NavItem } from "@/data/site"
import { cn } from "@/lib/utils"

function isActive(item: NavItem, pathname: string) {
  return item.to === "/" ? pathname === "/" : pathname.startsWith(item.to)
}

function DesktopNavItem({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <div className="group relative">
      <NavLink
        to={item.to}
        className={cn(
          "relative flex items-center gap-1.5 py-7 text-[13.5px] font-medium text-ink transition-colors hover:text-brand",
          active && "text-brand"
        )}
      >
        {item.label}
        {item.children && (
          <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" strokeWidth={2.5} />
        )}
        {active && <span className="absolute inset-x-0 bottom-[18px] h-0.5 rounded-full bg-brand" />}
      </NavLink>

      {item.children && (
        <div className="invisible absolute top-full left-1/2 z-50 w-60 -translate-x-1/2 translate-y-2 opacity-0 transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-[0_20px_50px_-12px_rgba(15,29,51,0.25)]">
            {item.children.map((child) => (
              <Link
                key={child.to}
                to={child.to}
                className="block rounded-lg px-3 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-brand-soft hover:text-brand"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    setOpen(false)
    setExpanded(null)
  }, [pathname, hash])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <DesktopNavItem key={item.label} item={item} active={isActive(item, pathname)} />
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={contact.phoneHref} className="flex items-center gap-2 text-[13.5px] font-medium text-ink">
            <Phone className="size-4 text-ink" strokeWidth={2} />
            {contact.phone}
          </a>
          <Link to="/contact" className={cn(buttonVariants(), "h-11 rounded-md bg-navy px-5 text-[13.5px] font-semibold")}>
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-slate-100 bg-white px-4 pb-6 sm:px-6 lg:hidden">
          <nav className="flex flex-col py-2" aria-label="Mobile">
            {navItems.map((item) => {
              const active = isActive(item, pathname)
              const isOpen = expanded === item.label
              return (
                <div key={item.label} className="border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <Link to={item.to} className={cn("flex-1 py-3 text-sm font-medium text-ink", active && "text-brand")}>
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        aria-label={`Toggle ${item.label} menu`}
                        aria-expanded={isOpen}
                        className="flex size-9 items-center justify-center text-ink"
                      >
                        <ChevronDown className={cn("size-4 transition-transform", isOpen && "rotate-180")} />
                      </button>
                    )}
                  </div>
                  {item.children && isOpen && (
                    <div className="pb-2 pl-3">
                      {item.children.map((child) => (
                        <Link key={child.to} to={child.to} className="block py-2 text-[13px] text-slate-600">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
          <a href={contact.phoneHref} className="mt-4 flex items-center gap-2 text-sm font-medium text-ink">
            <Phone className="size-4" /> {contact.phone}
          </a>
          <Link to="/contact" className={cn(buttonVariants(), "mt-4 h-11 w-full rounded-md bg-navy font-semibold")}>
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
