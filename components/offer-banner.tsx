"use client"

import { useState } from "react"
import { X, Flame } from "lucide-react"
import Link from "next/link"

export function OfferBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[var(--eas-navy)] to-[var(--eas-sky)] dark:from-gray-900 dark:to-gray-800 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2 sm:gap-4">
        <div className="flex items-center space-x-2">
          <Flame className="w-5 h-5 text-red-400" />
          <span className="text-sm sm:text-lg text-justify tracking-wide text-slate-50 tabular-nums font-serif font-normal">
            90 DAYS HALF PRICE - ENDS SPRING 2026*
          </span>
        </div>
        <div className="hidden lg:block text-gray-200">•</div>
        <div className="hidden lg:block">
          <span className="text-xs italic font-extrabold">
            Start booking appointments today — setup as fast as 24 hours.
          </span>
        </div>
        <div className="mt-2 sm:mt-0">
          <Link
            href="/demo"
            className="inline-block rounded-full text-sm hover:bg-white/20 transition-colors bg-white/10 backdrop-blur-sm text-white font-bold border border-white/30 text-left mx-0 my-1.5 px-6 py-2 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
        aria-label="Close offer banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
