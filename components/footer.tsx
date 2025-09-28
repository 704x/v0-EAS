import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-card">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/assets/easlogotrans.png"
                alt="Elite AI Solutions"
                width={160}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-space-grotesk font-bold text-lg" style={{ color: "var(--eas-navy)" }}>
                Elite AI Solutions
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Human-sounding Voice AI that cold-calls FSBO & Expired leads and answers inbound 24/7. Every call logged
              to your CRM with automated follow-ups.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone size={16} />
                <a href="tel:+19804589699" className="hover:text-[var(--eas-navy)] transition-colors">
                  Demo: (980) 458-9699
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail size={16} />
                <a href="mailto:rep@eliteaisolutions.xyz" className="hover:text-[var(--eas-navy)] transition-colors">
                  rep@eliteaisolutions.xyz
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin size={16} />
                <span className="font-medium text-muted-foreground">{"Charlotte, NC\n"}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space-grotesk font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-gray-600 hover:text-[var(--eas-navy)] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-[var(--eas-navy)] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-600 hover:text-[var(--eas-navy)] transition-colors">
                  Live Demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[var(--eas-navy)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-space-grotesk font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal" className="text-gray-600 hover:text-[var(--eas-navy)] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-600 hover:text-[var(--eas-navy)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-600 hover:text-[var(--eas-navy)] transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-600 hover:text-[var(--eas-navy)] transition-colors">
                  SLA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground">© Elite AI Solutions. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">NextGen Automation • Creative Solutions • Real Results</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
