import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OfferBanner } from "@/components/offer-banner"
import { HeroSection } from "@/components/sections/hero-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { InboundSection } from "@/components/sections/inbound-section"
import { IntegrationsSection } from "@/components/sections/integrations-section"
import { PricingPreviewSection } from "@/components/sections/pricing-preview-section"
import { FAQSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <OfferBanner />
      <Navigation />

      <main className="pt-28">
        <HeroSection />
        <SocialProofSection />
        <HowItWorksSection />
        <InboundSection />
        <IntegrationsSection />
        <PricingPreviewSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
