import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OfferBanner } from "@/components/offer-banner"
import { Button } from "@/components/ui/button"
import { CalendarBooking } from "@/components/calendar-booking"
import { ProcessSceneSection } from "@/components/sections/process-scene-section"
import {
  Target,
  Phone,
  Calendar,
  ArrowRight,
  Upload,
  Settings,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  PlayCircle,
  Zap,
} from "lucide-react"

export default function HowItWorksPage() {
  const mainSteps = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Target",
      description: "Import FSBO/Expired/Circle lists from Sheets or GHL",
      details: [
        "Upload CSV files or connect directly to Google Sheets",
        "Import from GoHighLevel CRM automatically",
        "AI validates phone numbers and removes duplicates",
        "Smart list segmentation based on property type and location",
      ],
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Call",
      description: "AI dials, qualifies, handles objections, and re-tries smartly",
      details: [
        "Natural conversation flow with human-like responses",
        "Handles interruptions and objections professionally",
        "Adapts script based on prospect responses",
        "Smart retry logic with optimal timing",
      ],
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Book & Log",
      description: "Meetings on your calendar; outcomes logged to GoHighLevel with triggers",
      details: [
        "Direct calendar integration with Google Calendar",
        "Automatic CRM updates with call outcomes",
        "Trigger-based follow-up sequences",
        "Detailed conversation transcripts and analytics",
      ],
    },
  ]

  const features = [
    {
      icon: <Upload className="w-6 h-6 text-primary" />,
      title: "Easy Setup",
      description: "Upload your leads and configure your script in minutes",
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "Smart Configuration",
      description: "AI learns your preferences and optimizes call timing",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Real-time Analytics",
      description: "Track performance, conversion rates, and ROI in real-time",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Team Management",
      description: "Manage multiple agents and campaigns from one dashboard",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "24/7 Operation",
      description: "AI works around the clock, respecting quiet hours and time zones",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Compliance Ready",
      description: "TCPA/DNC compliant with automatic opt-out handling",
    },
  ]

  const callFlow = [
    {
      speaker: "AI",
      message:
        "Hi Sarah, this is Alex with Elite Properties. I noticed your home at 123 Oak Street was listed for sale by owner. I work with homeowners in your area and wanted to see if you'd be open to a quick conversation about your selling timeline...",
    },
    {
      speaker: "Prospect",
      message: "Well, I'm not really interested in working with an agent right now.",
    },
    {
      speaker: "AI",
      message:
        "I completely understand, Sarah. Many homeowners prefer to try selling on their own first. I'm not calling to pressure you into anything. I'm actually curious - how has the process been going so far? Any challenges you've run into?",
    },
    {
      speaker: "Prospect",
      message: "Actually, we've had some showings but no serious offers yet. It's been about 6 weeks.",
    },
    {
      speaker: "AI",
      message:
        "That's pretty typical for this market. Six weeks isn't unusual, especially if you're getting showings - that means your pricing and presentation are on track. Would it be helpful if I shared some insights about what's working well in your neighborhood right now? No strings attached.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <OfferBanner />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-sora font-bold text-4xl lg:text-6xl text-foreground mb-6">How Our Voice AI Works</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                From target list to booked appointment—voice AI handles the calls and the follow-ups with human-like
                conversations that convert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Book Live Demo
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo Video
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative max-w-4xl w-full">
                <img
                  src="/images/lead-pipeline-3d.png"
                  alt="3D visualization of lead progression pipeline showing New Lead to Contacted to Engaged flow with floating profile cards"
                  className="w-full h-auto shadow-2xl border-solid rounded-4xl shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Process Scene Section */}
        <ProcessSceneSection />

        {/* Main Process Steps */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sora font-bold text-3xl lg:text-4xl text-foreground mb-4">The Complete Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our AI handles every step of the outbound calling process, from initial contact to appointment booking.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {mainSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="card h-full">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="font-sora font-semibold text-2xl text-foreground mb-4 text-center">{step.title}</h3>

                    <p className="text-muted-foreground text-center mb-6 text-lg">{step.description}</p>

                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow connector */}
                  {index < mainSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Conversation */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-sora font-bold text-3xl lg:text-4xl text-foreground mb-4">
                Real Conversation Example
              </h2>
              <p className="text-xl text-muted-foreground">
                See how our AI handles objections and builds rapport naturally
              </p>
            </div>

            <div className="card">
              <div className="space-y-6">
                {callFlow.map((exchange, index) => (
                  <div key={index} className={`flex ${exchange.speaker === "AI" ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-3xl ${exchange.speaker === "AI" ? "bg-primary/10" : "bg-muted"} rounded-lg p-4`}
                    >
                      <div className="flex items-center mb-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                            exchange.speaker === "AI"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted-foreground text-background"
                          }`}
                        >
                          {exchange.speaker === "AI" ? <Zap className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                        </div>
                        <span className="font-semibold text-foreground">
                          {exchange.speaker === "AI" ? "Voice AI" : "Prospect"}
                        </span>
                      </div>
                      <p className="text-muted-foreground italic leading-relaxed">"{exchange.message}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-sora font-bold text-3xl lg:text-4xl text-foreground mb-4">Powerful Features</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to run successful outbound campaigns at scale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-sora font-semibold text-xl text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-sora font-bold text-3xl lg:text-4xl mb-6">Ready to See It in Action?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book a personalized demo and experience our Voice AI handling real conversations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendarBooking />
            </div>
            <p className="text-sm mt-6 opacity-75">No commitment required • See results in 15 minutes</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
