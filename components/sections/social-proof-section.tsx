import { Star, TrendingUp, Clock, Calendar } from "lucide-react"
import Image from "next/image"

export function SocialProofSection() {
  const testimonials = [
    {
      quote: "23 appointments in my first week—closed $31k.",
      author: "Sarah M.",
      location: "Phoenix",
      avatar: "/professional-woman-realtor.jpg",
    },
    {
      quote: "Replaced ISA team of 3; saved ~$8k/mo.",
      author: "Marcus T.",
      location: "Atlanta",
      avatar: "/professional-realtor.png",
    },
    {
      quote: "2 Expired listings on Day One.",
      author: "Jennifer K.",
      location: "Dallas",
      avatar: "/professional-woman-real-estate-agent.png",
    },
  ]

  const metrics = [
    {
      icon: <Calendar className="w-6 h-6 text-[var(--eas-sky)]" />,
      value: "847",
      label: "Appointments Booked This Week",
    },
    {
      icon: <Clock className="w-6 h-6 text-[var(--eas-sky)]" />,
      value: "2,340",
      label: "Hours Saved This Month",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[var(--eas-sky)]" />,
      value: "156",
      label: "After-Hours Calls Answered Today",
    },
  ]

  return (
    <section className="py-16 bg-slate-200 border-slate-600 border-solid rounded-4xl shadow-sm px-2 my-2.5 mx-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-200">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">{metric.icon}</div>
              <div className="text-3xl font-bold text-[var(--eas-navy)] mb-2">{metric.value}</div>
              <div className="text-gray-600 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={`${testimonial.author} testimonial`}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>

              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-4 italic">"{testimonial.quote}"</blockquote>

              <div className="font-semibold text-[var(--eas-navy)]">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
