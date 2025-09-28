"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, CheckCircle, ArrowLeft, ExternalLink } from "lucide-react"

interface TimeSlot {
  time: string
  available: boolean
}

interface CalendarBookingProps {
  title?: string
  description?: string
  duration?: number
  showBackButton?: boolean
  onBack?: () => void
}

export function CalendarBooking({
  title = "Book a Demo Call",
  description = "Schedule a personalized 15-minute demo to see our Voice AI in action",
  duration = 15,
  showBackButton = false,
  onBack,
}: CalendarBookingProps) {
  const [step, setStep] = useState<"calendar" | "times" | "details" | "confirmation">("calendar")
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Generate next 14 days for calendar
  const generateDates = () => {
    const dates = []
    const today = new Date()

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split("T")[0],
          display: date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          }),
          dayName: date.toLocaleDateString("en-US", { weekday: "long" }),
        })
      }
    }

    return dates
  }

  // Generate time slots for selected date
  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = []
    const startHour = 9 // 9 AM
    const endHour = 17 // 5 PM

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
        const display = new Date(`2000-01-01T${time}`).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })

        // Simulate some unavailable slots
        const available = Math.random() > 0.3

        slots.push({
          time: display,
          available,
        })
      }
    }

    return slots
  }

  const dates = generateDates()
  const timeSlots = generateTimeSlots()

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setStep("times")
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep("details")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate booking submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setStep("confirmation")
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const resetBooking = () => {
    setStep("calendar")
    setSelectedDate("")
    setSelectedTime("")
    setFormData({ name: "", email: "", phone: "", company: "", notes: "" })
  }

  if (step === "confirmation") {
    return (
      <div className="card max-w-2xl mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h2 className="font-sora font-bold text-2xl text-foreground mb-4">Demo Call Scheduled!</h2>

          <div className="bg-muted/50 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5 text-primary mr-2" />
              <span className="font-semibold text-foreground">
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-primary mr-2" />
              <span className="font-semibold text-foreground">{selectedTime} EST</span>
            </div>
            <div className="flex items-center justify-center">
              <User className="w-5 h-5 text-primary mr-2" />
              <span className="text-muted-foreground">{duration} minute demo call</span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-muted-foreground">
              We've sent a calendar invitation to <strong>{formData.email}</strong>
            </p>
            <p className="text-muted-foreground">
              You'll receive a reminder 15 minutes before the call with the meeting link.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={resetBooking} variant="outline">
              Book Another Call
            </Button>
            <Button>
              <ExternalLink className="w-4 h-4 mr-2" />
              Add to Calendar
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        {showBackButton && onBack && (
          <Button variant="ghost" onClick={onBack} className="mb-4 self-start">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        )}

        <h2 className="font-sora font-bold text-2xl lg:text-3xl text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{description}</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === "calendar"
                ? "bg-primary text-primary-foreground"
                : ["times", "details", "confirmation"].includes(step)
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
            }`}
          >
            1
          </div>
          <div
            className={`w-16 h-1 ${["times", "details", "confirmation"].includes(step) ? "bg-primary" : "bg-muted"}`}
          />
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === "times"
                ? "bg-primary text-primary-foreground"
                : ["details", "confirmation"].includes(step)
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
            }`}
          >
            2
          </div>
          <div className={`w-16 h-1 ${["details", "confirmation"].includes(step) ? "bg-primary" : "bg-muted"}`} />
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              ["details", "confirmation"].includes(step)
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            3
          </div>
        </div>
      </div>

      {/* Step Content */}
      {step === "calendar" && (
        <div>
          <h3 className="font-sora font-semibold text-xl text-foreground mb-6 text-center">Select a Date</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {dates.map((date) => (
              <Button
                key={date.date}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => handleDateSelect(date.date)}
              >
                <span className="font-semibold">{date.display.split(" ")[1]}</span>
                <span className="text-sm opacity-75">{date.display.split(" ")[0]}</span>
              </Button>
            ))}
          </div>
        </div>
      )}

      {step === "times" && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-sora font-semibold text-xl text-foreground">Select a Time</h3>
            <Button variant="ghost" onClick={() => setStep("calendar")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Change Date
            </Button>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary mr-2" />
              <span className="font-semibold">
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {timeSlots.map((slot, index) => (
              <Button
                key={index}
                variant="outline"
                disabled={!slot.available}
                className="h-auto p-3 hover:bg-primary hover:text-primary-foreground disabled:opacity-50 bg-transparent"
                onClick={() => handleTimeSelect(slot.time)}
              >
                {slot.time}
              </Button>
            ))}
          </div>
        </div>
      )}

      {step === "details" && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-sora font-semibold text-xl text-foreground">Your Details</h3>
            <Button variant="ghost" onClick={() => setStep("times")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Change Time
            </Button>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-primary mr-2" />
                <span className="font-semibold">
                  {new Date(selectedDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-primary mr-2" />
                <span className="font-semibold">{selectedTime}</span>
              </div>
            </div>
          </div>

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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-2">
                Anything specific you'd like to discuss?
              </label>
              <Textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Tell us about your current challenges, goals, or specific questions..."
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Scheduling..." : "Schedule Demo Call"}
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}
