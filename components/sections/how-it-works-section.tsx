import { Target, Phone, Calendar, ArrowRight } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: <Target className="w-8 h-8 text-[var(--eas-sky)] text-destructive" />,
      title: "Target",
      description: "Import FSBO/Expired/Circle lists from Sheets or GHL",
    },
    {
      icon: <Phone className="w-8 h-8 text-[var(--eas-sky)] text-green-400" />,
      title: "Call",
      description: "AI dials, qualifies, handles objections, and re-tries smartly",
    },
    {
      icon: <Calendar className="w-8 h-8 text-[var(--eas-sky)] bg-transparent text-blue-900" />,
      title: "Book & Log",
      description: "Meetings on your calendar; outcomes logged to GoHighLevel with triggers",
    },
  ]

  return (
    <section className="py-20 gradient-section bg-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-3xl lg:text-4xl text-[var(--eas-navy)] mb-4">
            How Outbound Cold-Calling Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From target list to booked appointment—voice AI handles the calls and the follow-ups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card text-center h-full">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full flex items-center justify-center h-24 w-24 bg-slate-200">{step.icon}</div>
                </div>

                <h3 className="font-space-grotesk font-semibold text-xl text-[var(--eas-navy)] mb-3">{step.title}</h3>

                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow connector (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-[var(--eas-sky)]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sample Call Snippet */}
        <div className="rounded-2xl p-8 max-w-4xl mx-auto bg-card">
          <h4 className="font-space-grotesk font-semibold text-lg text-[var(--eas-navy)] mb-4">Sample Call Flow:</h4>
          <div className="rounded-lg p-6 border-l-4 border-[var(--eas-sky)] bg-card">
            <p className="text-gray-700 italic leading-relaxed">
              "Hi Sarah, this is Alex with Elite Properties. I noticed your home at 123 Oak Street was listed for sale
              by owner. I work with homeowners in your area and wanted to see if you'd be open to a quick conversation
              about your selling timeline...
              <span className="text-[var(--eas-navy)] font-semibold">
                Would Tuesday at 2 PM or Wednesday at 10 AM work better for a brief consultation?
              </span>
              "
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
