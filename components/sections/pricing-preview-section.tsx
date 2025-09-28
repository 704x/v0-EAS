import { Button } from "@/components/ui/button"
import { Check, Clock, Star } from "lucide-react"
import Link from "next/link"

export function PricingPreviewSection() {
  const plans = [
    {
      name: "Starter",
      originalPrice: "$299",
      promoPrice: "$149",
      setup: "$249",
      promoSetup: "$125",
      features: [
        "500 outbound + 200 inbound minutes",
        "Pre-made GHL portal (white-label)",
        "1 pipeline, 2 AI scripts",
        "Email support (24-48h)",
      ],
      popular: false,
    },
    {
      name: "Pro",
      originalPrice: "$599",
      promoPrice: "$299",
      setup: "$499",
      promoSetup: "$250",
      features: [
        "2,000 outbound + 500 inbound",
        "Up to 5 calendars",
        "2 pipelines, 3 AI scripts",
        "Priority email/chat (~12h)",
      ],
      popular: true,
    },
    {
      name: "Elite",
      originalPrice: "$1,299",
      promoPrice: "$649",
      setup: "$999",
      promoSetup: "$500",
      features: [
        "5,000 outbound + 1,500 inbound",
        "Custom GHL portal",
        "3 pipelines, 5 AI scripts",
        "Premium support (~12h)",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="bg-primary text-primary-foreground py-3 text-center mb-16">
        <p className="text-sm font-medium">Special Launch Offer — 90 Days at HALF PRICE!</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-3xl lg:text-4xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Month-to-month plans with no long-term contracts. All prices include 90-day promotional discount.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className={`card relative ${plan.popular ? "ring-2 ring-primary shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="badge bg-primary text-primary-foreground flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-space-grotesk font-bold text-xl mb-2">{plan.name}</h3>

                <div className="mb-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    <Clock className="w-3 h-3" />
                    First 90 Days
                  </span>
                </div>

                <div className="mb-2">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-lg line-through text-red-300">{plan.originalPrice}</span>
                    <span className="text-3xl font-bold text-primary">{plan.promoPrice}</span>
                  </div>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <div className="text-sm">
                  
                  <span className="text-primary font-medium">+ {plan.promoSetup} One Time Setup Fee</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/pricing" className="block">
                <Button className={`w-full text-card ${plan.popular ? "btn-primary" : ""}`}>Get Started</Button>
              </Link>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Promo pricing valid for 90 days. Renews at standard rate unless canceled with 7-day written notice.
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            We offer inbound calls, outbound sales, and custom workflow automation. Call (980) 458-9699 for inbound
            demos.
          </p>
          <Link href="/pricing">
            <Button variant="outline" size="lg">
              View All Pricing Options
            </Button>
          </Link>
        </div>

        <div className="mt-16 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="font-sora font-bold text-2xl mb-4">Other Subscription Options</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Need something more specific? We offer specialized plans for different business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </div>
                <h4 className="font-space-grotesk font-bold text-lg mb-2">Outbound-Only</h4>
                <p className="text-muted-foreground mb-4 font-bold text-sm">
                  Focus purely on outbound sales calls and lead generation
                </p>
                <p className="text-primary font-bold">Starting at $99/month</p>
              </div>
            </div>

            <div className="card text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </div>
                <h4 className="font-space-grotesk font-bold text-lg mb-2">Inbound-Only</h4>
                <p className="mb-4 text-red-500 text-lg italic font-bold">
                  No more missed incoming calls and customer service inquiriesn 24/7          
                </p>
                <p className="text-primary font-bold">Starting at $79/month</p>
              </div>
            </div>

            <div className="card text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-space-grotesk font-bold text-lg mb-2">Automation-Only</h4>
                <p className="text-sm text-muted-foreground mb-4 font-bold">
                  Custom workflow automation without calling features
                </p>
                <p className="text-primary font-bold">Starting at $49/month</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              All specialized plans include the same 90-day promotional pricing
            </p>
            <Link href="/pricing">
              <Button variant="outline">Explore All Options</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
