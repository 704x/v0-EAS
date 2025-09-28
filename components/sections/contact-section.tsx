"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CalendarBooking } from "@/components/calendar-booking"
import { Phone, Mail, Calendar, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showBooking, setShowBooking] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", company: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (showBooking) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CalendarBooking showBackButton={true} onBack={() => setShowBooking(false)} />
        </div>
      </section>
    )
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="font-sora font-bold text-3xl text-foreground mb-4">Thank You!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We've received your message and will get back to you within 24 hours.
            </p>
            <p className="text-muted-foreground mb-8">
              Want to talk sooner? Book a call with our team using the calendar below.
            </p>
            <Button onClick={() => setShowBooking(true)}>Book Demo Call</Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-3xl lg:text-4xl text-foreground mb-4">Have Questions? Let's Talk</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized answers from our team or book a live demo to see our Voice AI in action.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="card">
            <h3 className="font-sora font-semibold text-2xl text-foreground mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs, questions, or how we can help..."
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Book a Call Section */}
          <div className="space-y-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-sora font-semibold text-xl text-foreground">Book a Live Demo</h3>
                  <p className="text-muted-foreground">See our Voice AI in action</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Schedule a personalized 15-minute demo where you'll experience our Voice AI handling real conversations
                and see how it integrates with your workflow.
              </p>
              <Button className="w-full" onClick={() => setShowBooking(true)}>
                Book Demo Call
              </Button>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-sora font-semibold text-xl text-foreground">Try It Now</h3>
                  <p className="text-muted-foreground">Experience our AI instantly</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Call our demo line to experience our Voice AI firsthand:</p>
              <div className="flex items-center justify-center bg-muted/50 rounded-lg p-4 mb-6">
                <Phone className="w-5 h-5 text-primary mr-2" />
                <span className="font-mono text-lg font-semibold text-foreground">(980) 458-9699</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">Available 24/7 • No appointment needed</p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-sora font-semibold text-xl text-foreground">Quick Response</h3>
                  <p className="text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Our team typically responds to messages within a few hours during business hours (9 AM - 6 PM EST,
                Monday-Friday).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
