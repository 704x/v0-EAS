"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  Zap,
  Target,
  Phone,
  Calendar,
  Database,
  MessageSquare,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"

export function ProcessSceneSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const processSteps = [
    {
      id: 1,
      title: "Lead Capture",
      subtitle: "Smart Data Collection",
      description:
        "AI-powered forms capture and validate lead information with intelligent field completion and real-time verification.",
      image: "/images/lead-capture-form.png",
      icon: <Target className="w-6 h-6" />,
      features: ["Auto-complete suggestions", "Real-time validation", "Duplicate detection", "Smart field mapping"],
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 2,
      title: "AI Voice Engagement",
      subtitle: "Human-Like Conversations",
      description:
        "Advanced voice AI conducts natural conversations, handles objections, and builds rapport with prospects.",
      image: "/images/ai-voice-interface.png",
      icon: <Phone className="w-6 h-6" />,
      features: ["Natural speech patterns", "Objection handling", "Emotional intelligence", "Multi-language support"],
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 3,
      title: "CRM Integration",
      subtitle: "Seamless Data Flow",
      description:
        "All interactions are automatically logged and synchronized with your CRM system for complete visibility.",
      image: "/images/crm-workflow.webp",
      icon: <Database className="w-6 h-6" />,
      features: ["Real-time sync", "Custom field mapping", "Activity tracking", "Pipeline automation"],
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      title: "Smart Pipeline",
      subtitle: "Automated Progression",
      description:
        "Leads move through your pipeline automatically based on AI-driven qualification and engagement scoring.",
      image: "/images/crm-pipeline-2304.png",
      icon: <Calendar className="w-6 h-6" />,
      features: ["Lead scoring", "Auto-qualification", "Smart routing", "Appointment booking"],
      color: "from-pink-500 to-red-600",
    },
  ]

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    setIsPlaying(false)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      // Auto-advance through steps
      const interval = setInterval(() => {
        setActiveStep((prev) => {
          const next = (prev + 1) % processSteps.length
          if (next === 0) {
            setIsPlaying(false)
            clearInterval(interval)
          }
          return next
        })
      }, 3000)
    }
  }

  const handleReset = () => {
    setActiveStep(0)
    setIsPlaying(false)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Interactive Demo
          </Badge>
          <h2 className="font-sora font-bold text-4xl lg:text-5xl text-foreground mb-6">Watch the AI in Action</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience our complete AI sales automation process through this interactive visualization. See how leads
            flow from capture to conversion.
          </p>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button onClick={handlePlayPause} size="lg" className="bg-primary hover:bg-primary/90">
              {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
              {isPlaying ? "Pause Demo" : "Play Demo"}
            </Button>
            <Button onClick={handleReset} variant="outline" size="lg">
              <RotateCcw className="w-5 h-5 mr-2" />
              Reset
            </Button>
          </div>
        </div>

        {/* Process Visualization */}
        

        {/* Process Flow Summary */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 text-center">
          <h3 className="font-sora font-bold text-2xl text-foreground mb-4">Complete Automation  </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            From initial lead capture to final appointment booking, our AI handles every interaction with the
            sophistication of your best sales rep, available 24/7.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              <MessageSquare className="w-4 h-4 mr-2" />
              Natural Conversations
            </Badge>
            <Badge variant="outline" className="text-primary border-primary/30">
              <Zap className="w-4 h-4 mr-2" />
              Real-time Processing
            </Badge>
            <Badge variant="outline" className="text-primary border-primary/30">
              <CheckCircle className="w-4 h-4 mr-2" />
              Automated Follow-up
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
