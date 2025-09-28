import { Button } from "@/components/ui/button"
import { Check, Clock, Star } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function PricingPage() {
  const bundledPlans = [
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
        "Basic analytics dashboard",
        "Standard integrations",
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
        "2,000 outbound + 500 inbound minutes",
        "Up to 5 calendars",
        "2 pipelines, 3 AI scripts",
        "Priority email/chat (~12h)",
        "Advanced analytics & reporting",
        "Custom workflow automation",
        "A/B testing capabilities",
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
        "5,000 outbound + 1,500 inbound minutes",
        "Custom GHL portal",
        "3 pipelines, 5 AI scripts",
        "Premium support (~12h)",
        "White-label solutions",
        "Advanced AI customization",
        "Dedicated account manager",
        "Custom integrations",
      ],
      popular: false,
    },
  ]

  const outboundPlans = [
    {
      name: "Outbound Starter",
      originalPrice: "$249",
      promoPrice: "$125",
      setup: "$199",
      promoSetup: "$100",
      features: ["1,000 outbound minutes", "1 pipeline, 2 AI scripts", "Basic CRM integration", "Email support"],
    },
    {
      name: "Outbound Pro",
      originalPrice: "$499",
      promoPrice: "$249",
      setup: "$399",
      promoSetup: "$200",
      features: ["3,000 outbound minutes", "2 pipelines, 3 AI scripts", "Advanced CRM features", "Priority support"],
    },
    {
      name: "Outbound Elite",
      originalPrice: "$1,099",
      promoPrice: "$549",
      setup: "$799",
      promoSetup: "$400",
      features: ["8,000 outbound minutes", "3 pipelines, 5 AI scripts", "Custom integrations", "Premium support"],
    },
  ]

  const inboundPlans = [
    {
      name: "Inbound Starter",
      originalPrice: "$199",
      promoPrice: "$99",
      setup: "$149",
      promoSetup: "$75",
      features: ["500 inbound minutes", "Basic call routing", "Standard AI responses", "Email support"],
    },
    {
      name: "Inbound Pro",
      originalPrice: "$399",
      promoPrice: "$199",
      setup: "$299",
      promoSetup: "$150",
      features: ["1,500 inbound minutes", "Advanced call routing", "Custom AI responses", "Priority support"],
    },
    {
      name: "Inbound Elite",
      originalPrice: "$799",
      promoPrice: "$399",
      setup: "$599",
      promoSetup: "$300",
      features: [
        "4,000 inbound minutes",
        "Intelligent call distribution",
        "Advanced AI customization",
        "Premium support",
      ],
    },
  ]

  const automationPlans = [
    {
      name: "Automation Starter",
      originalPrice: "$149",
      promoPrice: "$75",
      setup: "$99",
      promoSetup: "$50",
      features: ["Basic workflow automation", "Email sequences", "Simple integrations", "Email support"],
    },
    {
      name: "Automation Pro",
      originalPrice: "$299",
      promoPrice: "$149",
      setup: "$199",
      promoSetup: "$100",
      features: ["Advanced workflows", "Multi-channel automation", "Custom triggers", "Priority support"],
    },
    {
      name: "Automation Elite",
      originalPrice: "$599",
      promoPrice: "$299",
      setup: "$399",
      promoSetup: "$200",
      features: ["Enterprise workflows", "AI-powered automation", "Custom integrations", "Premium support"],
    },
  ]

  const PlanCard = ({ plan, showBadge = false }: { plan: any; showBadge?: boolean }) => (
    <div className={`card relative ${plan.popular ? "ring-2 ring-primary shadow-lg" : ""}`}>
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

        {/* First 90 Days Badge */}
        <div className="mb-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
            <Clock className="w-3 h-3" />
            First 90 Days
          </span>
        </div>

        <div className="mb-2">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-lg line-through text-destructive">{plan.originalPrice}</span>
            <span className="text-3xl font-bold text-primary">{plan.promoPrice}</span>
          </div>
          <span className="text-muted-foreground">/month</span>
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="line-through text-red-400">+ {plan.setup} retainer</span>
          <span className="ml-2 text-primary font-medium">+ {plan.promoSetup} retainer</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature: string, featureIndex: number) => (
          <li key={featureIndex} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button className={`w-full ${plan.popular ? "btn-primary" : ""}`}>Get Started</Button>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        Promo pricing valid for 90 days. Renews at standard rate unless canceled with 7-day written notice.
      </p>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Countdown Banner */}
      <div className="bg-primary text-primary-foreground py-3 text-center">
        <p className="text-sm font-medium">
          🎉 Special Launch Offer — 90 Days at HALF PRICE! Offer ends March 31st. Lock in your half-price trial now.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-sora font-bold text-4xl lg:text-5xl mb-4">Plans and Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto my-auto py-0.5">
            All plans shown below include the promotional discount. After 90 days, billing continues at the regular
            subscription price.
          </p>
        </div>

        {/* Bundled Plans */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl mb-4">Bundled (Outbound + Inbound)</h2>
            <p className="text-muted-foreground">Complete AI sales automation solution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bundledPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </section>

        {/* Outbound-Only Plans */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl mb-4">Outbound-Only</h2>
            <p className="text-muted-foreground">Focus on cold outreach and lead generation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outboundPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </section>

        {/* Inbound-Only Plans */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl mb-4">Inbound-Only</h2>
            <p className="text-muted-foreground">
              Handle incoming calls with AI precision. Call (980) 458-9699 for inbound demos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inboundPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </section>

        {/* Automation-Only Plans */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl mb-4">Automation-Only (No Voice)</h2>
            <p className="text-muted-foreground">Custom workflow automation without calling features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automationPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </section>

        {/* Enterprise */}
        <section className="mb-20">
          <div className="card max-w-4xl mx-auto text-center">
            <h2 className="font-sora font-bold text-3xl mb-4">Enterprise</h2>
            <p className="text-muted-foreground mb-6">
              For large companies that require additional security and custom solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom pricing with promotional discount applied</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited calling minutes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority access and dedicated support</span>
                </li>
              </ul>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced security features</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom integrations and workflows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated customer success manager</span>
                </li>
              </ul>
            </div>

            <Button size="lg">Contact Sales</Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="card max-w-2xl mx-auto border-slate-400 rounded-4xl">
            <h2 className="font-sora font-bold text-2xl mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Choose your plan and start transforming your sales process with AI automation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="btn-primary font-extrabold text-xl text-transparent bg-transparent opacity-100 rounded-4xl shadow"
              >
                {"90 Days Starts Here"}
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
