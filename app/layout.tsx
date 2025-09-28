import type React from "react"
import type { Metadata } from "next"

import { Inter, Space_Grotesk, Sora, Source_Serif_4 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Fonts
const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif-4",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${spaceGrotesk.variable} ${inter.variable} ${sourceSerif4.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/logotransparent.png" type="image/png" />
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
