"use client"

import { useState } from "react"
import { X, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function OfferBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[var(--eas-navy)] to-[var(--eas-sky)] text-white shadow-lg">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/90-days-promo-banner.jpg" alt="90 Days Promotion" fill className="object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-lg tracking-wide sm:text-base font-black font-mono">PAY HALF PRICE FOR 90 DAYS</span>
            </div>

            <div className="hidden sm:block text-white/60">•</div>

            <div className="text-center sm:text-left">
              <span className="text-sm sm:text-base font-medium">Limited Time Offer - Setup in 24 Hours</span>
            </div>

            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-white text-[var(--eas-navy)] px-4 py-2 rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
        aria-label="Close offer banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
