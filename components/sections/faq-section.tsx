"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How fast do you respond to new leads?",
      answer: "Inbound calls are answered instantly; outbound demo calls start within ~30 seconds of form submission.",
    },
    {
      question: "Do you store call audio?",
      answer: "No. Calls are transcribed in real time; transcripts are retained for 90 days, then auto-deleted.",
    },
    {
      question: "How do I try the AI?",
      answer:
        "Submit your number to trigger a live outbound demo call, or call the inbound demo line at (980) 458-9699.",
    },
    {
      question: "Which CRMs and tools are supported?",
      answer: "Native integration with GoHighLevel; connections to Google Calendar and Google Sheets.",
    },
    {
      question: "Is it compliant?",
      answer:
        "Yes. TCPA/DNC aligned, quiet hours honored, A2P 10DLC registered, and STIR/SHAKEN signed. Transcription-only retention.",
    },
    {
      question: "What happens during the demo call?",
      answer:
        "The AI runs a short qualification, can handle interruptions, and offers to book a sample appointment into a sandbox calendar.",
    },
  ]

  return (
    <section className="py-20 gradient-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-3xl lg:text-4xl text-[var(--eas-navy)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">Everything you need to know about our Voice AI solution.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-space-grotesk font-semibold text-lg text-[var(--eas-navy)] pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[var(--eas-sky)] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[var(--eas-sky)] flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
