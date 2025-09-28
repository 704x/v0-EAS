"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden flex items-center justify-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-white to-slate-100/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`text-4xl md:text-5xl lg:text-6xl text-slate-800 text-balance shadow-none px-px font-extrabold mb-px py-0 mr-[-10px] mt-[-170px] ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <div className="relative inline-block group mb-8">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-150 group-hover:scale-175 transition-transform duration-1000 py-0 mx-12 my-72" />

            <Image
              src="/assets/easlogo-refined.png"
              alt="Elite AI Solutions - NextGen Creative Automations"
              width={600}
              height={200}
              className="relative z-10 max-w-3xl drop-shadow-lg group-hover:scale-105 transition-all duration-700 ease-out text-background rounded-3xl border-none shadow-none font-mono tracking-tighter leading-7 border-background text-center bg-transparent py-[-10px] py-[-0px] py-[-30px] py-[-40px] opacity-100 mx-auto border-0 h-96 w-full py-3 my-16 "
              priority
            />

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-2xl border border-blue-300/20 group-hover:border-blue-400/30 transition-colors duration-700" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-800 text-balance shadow-none mb-px px-px font-extrabold py-0 mt-[-211px]">
            Master Every{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Cold Call
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Incoming Call
            </span>
          </h1>
        </div>

        <div
          className={`mt-8 transition-all duration-2000 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-slate-600 mb-4 text-balance">
            AI-Powered Sales Automation That Never Sleeps
            <span className="block mt-2 text-lg md:text-xl text-slate-500">
              Transform every conversation into a conversion opportunity
            </span>
          </p>
        </div>

        <div
          className={`mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-2000 delay-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link href="/demo">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Experience Our AI
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>

          <a
            href="tel:+19804589699"
            className="group flex items-center space-x-3 border-2 border-blue-400/50 text-blue-300 hover:text-white hover:border-blue-300 rounded-xl px-6 py-4 transition-all duration-300 hover:bg-blue-500/10 hover:scale-105"
          >
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            <span className="font-semibold text-lg">(980) 458-9699</span>
          </a>
        </div>

        <div
          className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-2000 delay-1500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "24/7", label: "Call Handling", delay: "0s" },
            { value: "<1s", label: "Response Time", delay: "0.2s" },
            { value: "100%", label: "Call Coverage", delay: "0.4s" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-6 hover:border-blue-300/60 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ animationDelay: stat.delay }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-2000 delay-2000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
