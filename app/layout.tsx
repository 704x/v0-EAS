import type React from "react"
import {
  Inter,
  Space_Grotesk,
  Sora,
  Source_Serif_4,
} from "next/font/google";


import { Space_Grotesk } from "next/font/google"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"




const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "AI Cold-Calling for Real Estate | Elite AI Solutions",
  description:
    "Human-sounding AI that cold-calls FSBO/Expired leads and answers inbound 24/7. Books appointments and logs to GoHighLevel. Demo a live call now.",
  generator: "Elite AI Solutions",
  keywords:
    "AI cold caller real estate, FSBO cold calling AI, expired listing AI caller, AI ISA, AI receptionist real estate, never miss a lead",
  openGraph: {
    title: "AI Cold-Calling for Real Estate | Elite AI Solutions",
    description: "Human-sounding AI that cold-calls FSBO/Expired leads and answers inbound 24/7.",
    url: "https://www.eliteaisolutions.xyz",
    siteName: "Elite AI Solutions",
    images: [
      {
        url: "/assets/easlogotrans.png",
        width: 1200,
        height: 630,
        alt: "Elite AI Solutions - Voice AI for Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Cold-Calling for Real Estate | Elite AI Solutions",
    description: "Human-sounding AI that cold-calls FSBO/Expired leads and answers inbound 24/7.",
    images: ["/assets/easlogotrans.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/logotransparent.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.eliteaisolutions.xyz/#org",
                  name: "Elite AI Solutions",
                  url: "https://www.eliteaisolutions.xyz",
                  logo: "https://www.eliteaisolutions.xyz/assets/easlogotrans.png",
                  sameAs: ["https://www.linkedin.com/company/eliteaisolutions"],
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+1-980-458-9699",
                      contactType: "sales",
                      areaServed: "US",
                      availableLanguage: ["en"],
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.eliteaisolutions.xyz/#website",
                  url: "https://www.eliteaisolutions.xyz",
                  name: "Elite AI Solutions",
                  inLanguage: "en",
                  publisher: { "@id": "https://www.eliteaisolutions.xyz/#org" },
                  potentialAction: [
                    { "@type": "Action", name: "Call for a Demo", target: "tel:+19804589699" },
                    { "@type": "Action", name: "Start AI Demo Call", target: "https://www.eliteaisolutions.xyz/demo" },
                  ],
                },
                {
                  "@type": "Service",
                  "@id": "https://www.eliteaisolutions.xyz/#service",
                  name: "Voice AI for Real Estate — Outbound Cold-Calling & Inbound Answering",
                  provider: { "@id": "https://www.eliteaisolutions.xyz/#org" },
                  areaServed: "US",
                  serviceType: "AI cold calling, AI receptionist, CRM automation",
                  isSimilarTo: [
                    "AI ISA for real estate",
                    "FSBO & Expired listing outreach",
                    "GoHighLevel CRM automation",
                  ],
                  offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "USD",
                    lowPrice: "299",
                    highPrice: "1299",
                    offerCount: "3",
                    offers: [
                      {
                        "@type": "Offer",
                        name: "Starter",
                        price: "299",
                        priceCurrency: "USD",
                        url: "https://www.eliteaisolutions.xyz/pricing",
                      },
                      {
                        "@type": "Offer",
                        name: "Pro",
                        price: "599",
                        priceCurrency: "USD",
                        url: "https://www.eliteaisolutions.xyz/pricing",
                      },
                      {
                        "@type": "Offer",
                        name: "Elite",
                        price: "1299",
                        priceCurrency: "USD",
                        url: "https://www.eliteaisolutions.xyz/pricing",
                      },
                    ],
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "How fast do you respond to new leads?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Inbound calls are answered instantly; outbound demo calls start within ~30 seconds of form submission.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do you store call audio?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Calls are transcribed in real time; transcripts are retained for 90 days, then auto-deleted.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How do I try the AI?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Submit your number to trigger a live outbound demo call, or call the inbound demo line at (980) 458-9699.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Which CRMs and tools are supported?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Native integration with GoHighLevel; connections to Google Calendar and Google Sheets.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is it compliant?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. TCPA/DNC aligned, quiet hours honored, A2P 10DLC registered, and STIR/SHAKEN signed. Transcription-only retention.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What happens during the demo call?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "The AI runs a short qualification, can handle interruptions, and offers to book a sample appointment into a sandbox calendar.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
