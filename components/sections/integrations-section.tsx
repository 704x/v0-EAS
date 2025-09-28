import Image from "next/image"

export function IntegrationsSection() {
  const integrations = [
    {
      name: "GoHighLevel",
      logo: "/highlevel-logo.png",
      description: "Native CRM integration",
    },
    {
      name: "Google Sheets",
      logo: "/google-sheets-logo.png",
      description: "Lead list management",
    },
    {
      name: "Google Calendar",
      logo: "/google-calendar-logo.png",
      description: "Appointment scheduling",
    },
    {
      name: "Vapi",
      logo: "/vapi-ai-logo.jpg",
      description: "Voice AI platform",
    },
    {
      name: "ElevenLabs",
      logo: "/elevenlabs-logo.jpg",
      description: "Human-like voices",
    },
  ]

  return (
    <section className="py-16 gradient-section leading-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sora font-bold text-[var(--eas-navy)] mb-4 text-4xl">
            Seamless Integrations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base font-medium">
            Works with the tools you already use. No complex setup required.
          </p>
        </div>

        <div className="mb-16 flex justify-center border-solid border-8 shadow rounded-4xl bg-gray-300 border-slate-200">
          <Image
            src="/images/design-mode/aiintergrate.png"
            alt="AI integrations with various real estate and business tools including HighLevel, Google Sheets, Canva, Zillow, WordPress, and more"
            width={800}
            height={500}
            className="max-w-full h-auto font-medium text-center rounded-none opacity-100"
          />
        </div>

        
      </div>
    </section>
  )
}
