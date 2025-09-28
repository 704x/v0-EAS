"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-12 w-full z-50 transition-all duration-500 ease-out ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center my-7">
          <Link href="/" className="flex items-center group">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="relative overflow-hidden group px-6 py-2 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in"
              variant="ghost"
              size="sm"
              asChild
            >
              <Link href="/" className="relative z-10">
                <span className="relative">
                  Voice Automation Agents
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                </span>
              </Link>
            </Button>

            <Button
              className="relative overflow-hidden group px-6 py-2 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in delay-100"
              variant="ghost"
              size="sm"
              asChild
            >
              <Link href="/how-it-works" className="relative z-10">
                <span className="relative">
                  How It Works
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                </span>
              </Link>
            </Button>

            <Button
              className="relative overflow-hidden group px-6 py-2 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in delay-200"
              variant="ghost"
              size="sm"
              asChild
            >
              <Link href="/pricing" className="relative z-10">
                <span className="relative">
                  Pricing
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
                </span>
              </Link>
            </Button>

            <Button
              size="sm"
              className="relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in delay-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700"
              asChild
            >
              <Link href="/demo" className="relative z-10">
                Talk to the AI
              </Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 transition-all duration-300 hover:scale-110 hover:bg-primary/10"
            >
              <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-96 opacity-100 py-4 border-t border-border" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col space-y-2">
            <Button
              variant="ghost"
              size="sm"
              className={`justify-start transition-all duration-300 hover:scale-105 hover:bg-primary/10 ${
                isOpen ? "animate-slide-up" : ""
              }`}
              asChild
            >
              <Link href="/" onClick={() => setIsOpen(false)}>
                Voice Automation Agents
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className={`justify-start transition-all duration-300 hover:scale-105 hover:bg-primary/10 ${
                isOpen ? "animate-slide-up delay-100" : ""
              }`}
              asChild
            >
              <Link href="/how-it-works" onClick={() => setIsOpen(false)}>
                How It Works
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className={`justify-start transition-all duration-300 hover:scale-105 hover:bg-primary/10 ${
                isOpen ? "animate-slide-up delay-200" : ""
              }`}
              asChild
            >
              <Link href="/pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
            </Button>

            <div className={`pt-4 border-t border-border space-y-2 ${isOpen ? "animate-slide-up delay-300" : ""}`}>
              <Button
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
                size="sm"
                asChild
              >
                <Link href="/demo" onClick={() => setIsOpen(false)}>
                  Talk to the AI
                </Link>
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="w-full bg-transparent hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="tel:+19804589699" className="flex items-center justify-center space-x-2">
                  <Phone size={16} />
                  <span>(980) 458-9699</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
