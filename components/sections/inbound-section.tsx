import { Phone, MessageSquare, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function InboundSection() {
  const inboundSteps = [
    {
      icon: <Phone className="w-6 h-6 text-[var(--eas-sky)]" />,
      title: "Answer in seconds",
      description: "Every call picked up instantly",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[var(--eas-sky)]" />,
      title: "Qualify",
      description: "Intent, property, readiness captured",
    },
    {
      icon: <Calendar className="w-6 h-6 text-[var(--eas-sky)]" />,
      title: "Book & Log",
      description: "Appointment scheduled; follow-ups triggered",
    },
  ]

  return (
    <section className="py-20 bg-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="font-sora font-bold text-3xl lg:text-4xl text-[var(--eas-navy)] dark:text-[var(--eas-sky)] mb-6">
              Inbound + Outbound + Workflow Automation
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Complete AI solution: Answer inbound calls 24/7, dial FSBO/Expired leads, and automate your entire
              workflow.
            </p>

            {/* Steps */}
            <div className="space-y-6 mb-8">
              {inboundSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-space-grotesk font-semibold text-[var(--eas-navy)] dark:text-[var(--eas-sky)] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/demo">
              <Button className="btn-primary">See Inbound in Action</Button>
            </Link>
          </div>

          {/* Right Column - Sample Interaction */}
          <div className="rounded-2xl p-8 bg-card border">
            <h4 className="font-space-grotesk font-semibold text-lg text-[var(--eas-navy)] dark:text-[var(--eas-sky)] mb-6">
              Sample After-Hours Call:
            </h4>

            <div className="space-y-4">
              <div className="rounded-lg p-4 border-l-4 border-[var(--eas-sky)] bg-muted/50">
                <p className="text-sm mb-1 text-foreground">Caller (9:30 PM):</p>
                <p className="text-muted-foreground">
                  "Hi, I saw your listing on Zillow for the house on Maple Street. Is it still available?"
                </p>
              </div>

              <div className="rounded-lg p-4 border-l-4 border-[var(--eas-navy)] dark:border-[var(--eas-sky)] bg-muted/50">
                <p className="text-sm mb-1 text-accent">AI Assistant:</p>
                <p className="text-muted-foreground">
                  "Yes, it's still available! I'd love to help you learn more about it. Are you looking to schedule a
                  showing? I can check our agent's calendar right now."
                </p>
              </div>

              <div className="rounded-lg p-4 border-l-4 border-green-500 bg-muted/50">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Appointment booked for tomorrow at 2 PM
                  </span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                  Automatically added to calendar + CRM with lead details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
