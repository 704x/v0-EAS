"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  FileText,
  Scale,
  ShieldCheck,
  ScrollText,
} from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [docsOpen, setDocsOpen] = useState(false)
  const [docsHover, setDocsHover] = useState(false)
  const pathname = usePathname()

  const navLink =
    "relative overflow-hidden group px-4 lg:px-6 py-2 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs lg:text-sm rounded-md"

  const isActive = (href: string) =>
    pathname === href ? "text-primary font-semibold" : "text-foreground"

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex h-16 justify-between items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="assets/logotransparent.png"
              alt="Elite AI Solutions Logo"
              className="w-auto object-contain h-24"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <Button className={`${navLink} ${isActive("/")}`} variant="ghost" size="sm" asChild>
              <Link href="/">Voice Automation Agents</Link>
            </Button>

            <Button className={`${navLink} ${isActive("/how-it-works")}`} variant="ghost" size="sm" asChild>
              <Link href="/how-it-works">How It Works</Link>
            </Button>

            <Button className={`${navLink} ${isActive("/pricing")}`} variant="ghost" size="sm" asChild>
              <Link href="/pricing">Pricing</Link>
            </Button>

            {/* Docs dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDocsHover(true)}
              onMouseLeave={() => setDocsHover(false)}
            >
              <Button
                className={`${navLink} ${isActive("/docs")}`}
                variant="ghost"
                size="sm"
                onClick={() => setDocsHover((s) => !s)}
                aria-haspopup="menu"
                aria-expanded={docsHover}
              >
                <span className="flex items-center gap-1.5">
                  Docs
                  <ChevronDown size={14} className={`transition-transform ${docsHover ? "rotate-180" : ""}`} />
                </span>
              </Button>

              <div
                className={`absolute right-0 mt-2 w-64 rounded-xl border border-border bg-popover shadow-xl transition-all duration-200 ${
                  docsHover ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
                }`}
                role="menu"
              >
                <ul className="py-2">
                  <li>
                    <Link href="/docs/legal" className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-lg">
                      <Scale size={16} className="text-primary" />
                      Legal
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/terms" className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-lg">
                      <FileText size={16} className="text-primary" />
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/privacy" className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-lg">
                      <ShieldCheck size={16} className="text-primary" />
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/sops" className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-lg">
                      <ScrollText size={16} className="text-primary" />
                      SOPs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Button
              size="sm"
              className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-4 lg:px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-md"
              asChild
            >
              <Link href="/demo">Talk to the AI</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-all duration-300 hover:scale-110 hover:bg-primary/10 rounded-md"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {/* ... (keep the same mobile menu code you already have) ... */}
      </div>
    </nav>
  )
}
