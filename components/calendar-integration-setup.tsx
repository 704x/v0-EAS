"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Settings, CheckCircle, ExternalLink, AlertCircle, Copy, Eye, EyeOff } from "lucide-react"

interface CalendarIntegrationSetupProps {
  onComplete?: () => void
}

export function CalendarIntegrationSetup({ onComplete }: CalendarIntegrationSetupProps) {
  const [activeTab, setActiveTab] = useState<"google" | "gohighlevel">("google")
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [showApiKey, setShowApiKey] = useState(false)
  const [credentials, setCredentials] = useState({
    googleClientId: "",
    googleClientSecret: "",
    ghlApiKey: "",
    ghlLocationId: "",
  })

  const handleConnect = async (provider: "google" | "gohighlevel") => {
    setIsConnecting(true)

    // Simulate connection process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsConnected(true)
    setIsConnecting(false)

    if (onComplete) {
      setTimeout(onComplete, 1000)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setCredentials((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  if (isConnected) {
    return (
      <div className="card max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="font-sora font-bold text-2xl text-foreground mb-4">Calendar Integration Connected!</h2>
        <p className="text-muted-foreground mb-8">
          Your {activeTab === "google" ? "Google Calendar" : "GoHighLevel"} integration is now active. Bookings will
          automatically sync to your calendar.
        </p>
        <Button onClick={onComplete}>Continue Setup</Button>
      </div>
    )
  }

  return (
    <div className="card max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-sora font-bold text-2xl lg:text-3xl text-foreground mb-4">Connect Your Calendar</h2>
        <p className="text-muted-foreground text-lg">
          Integrate with your calendar system to automatically sync bookings and appointments
        </p>
      </div>

      {/* Provider Tabs */}
      <div className="flex border-b border-border mb-8">
        <button
          className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
            activeTab === "google"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => setActiveTab("google")}
        >
          <div className="flex items-center justify-center">
            <Calendar className="w-5 h-5 mr-2" />
            Google Calendar
          </div>
        </button>
        <button
          className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
            activeTab === "gohighlevel"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => setActiveTab("gohighlevel")}
        >
          <div className="flex items-center justify-center">
            <Settings className="w-5 h-5 mr-2" />
            GoHighLevel
          </div>
        </button>
      </div>

      {/* Google Calendar Setup */}
      {activeTab === "google" && (
        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Setup Instructions</h3>
                <ol className="text-blue-800 text-sm space-y-2 list-decimal list-inside">
                  <li>
                    Go to the{" "}
                    <a
                      href="https://console.cloud.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Google Cloud Console
                    </a>
                  </li>
                  <li>Create a new project or select an existing one</li>
                  <li>Enable the Google Calendar API</li>
                  <li>Create OAuth 2.0 credentials</li>
                  <li>Add your domain to authorized origins</li>
                  <li>Copy your Client ID and Client Secret below</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Google Client ID *</label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="123456789-abcdefghijklmnop.apps.googleusercontent.com"
                  value={credentials.googleClientId}
                  onChange={(e) => handleInputChange("googleClientId", e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => copyToClipboard(credentials.googleClientId)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Google Client Secret *</label>
              <div className="relative">
                <Input
                  type={showApiKey ? "text" : "password"}
                  placeholder="GOCSPX-abcdefghijklmnopqrstuvwxyz"
                  value={credentials.googleClientSecret}
                  onChange={(e) => handleInputChange("googleClientSecret", e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowApiKey(!showApiKey)}
                >
                  {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Authorized Redirect URIs</h4>
            <p className="text-sm text-muted-foreground mb-3">Add these URLs to your Google OAuth configuration:</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-background rounded p-2">
                <code className="text-sm">https://yourdomain.com/api/auth/google/callback</code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard("https://yourdomain.com/api/auth/google/callback")}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between bg-background rounded p-2">
                <code className="text-sm">http://localhost:3000/api/auth/google/callback</code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard("http://localhost:3000/api/auth/google/callback")}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button
            className="w-full"
            onClick={() => handleConnect("google")}
            disabled={!credentials.googleClientId || !credentials.googleClientSecret || isConnecting}
          >
            {isConnecting ? "Connecting..." : "Connect Google Calendar"}
          </Button>
        </div>
      )}

      {/* GoHighLevel Setup */}
      {activeTab === "gohighlevel" && (
        <div className="space-y-6">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-purple-900 mb-2">Setup Instructions</h3>
                <ol className="text-purple-800 text-sm space-y-2 list-decimal list-inside">
                  <li>Log into your GoHighLevel account</li>
                  <li>Go to Settings → Integrations → API</li>
                  <li>Generate a new API key with Calendar permissions</li>
                  <li>Copy your Location ID from the URL or Settings</li>
                  <li>Paste both values below</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">GoHighLevel API Key *</label>
              <div className="relative">
                <Input
                  type={showApiKey ? "text" : "password"}
                  placeholder="ghl_api_key_abcdefghijklmnopqrstuvwxyz123456"
                  value={credentials.ghlApiKey}
                  onChange={(e) => handleInputChange("ghlApiKey", e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowApiKey(!showApiKey)}
                >
                  {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Location ID *</label>
              <Input
                type="text"
                placeholder="5f7c8d9e1a2b3c4d5e6f7g8h"
                value={credentials.ghlLocationId}
                onChange={(e) => handleInputChange("ghlLocationId", e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-1">
                Found in your GoHighLevel URL or Settings → Company Info
              </p>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Required Permissions</h4>
            <p className="text-sm text-muted-foreground mb-3">Ensure your API key has these permissions enabled:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Calendar Read/Write</li>
              <li>• Contacts Read/Write</li>
              <li>• Appointments Read/Write</li>
              <li>• Webhooks (optional, for real-time sync)</li>
            </ul>
          </div>

          <Button
            className="w-full"
            onClick={() => handleConnect("gohighlevel")}
            disabled={!credentials.ghlApiKey || !credentials.ghlLocationId || isConnecting}
          >
            {isConnecting ? "Connecting..." : "Connect GoHighLevel"}
          </Button>
        </div>
      )}

      {/* Help Section */}
      <div className="mt-8 pt-8 border-t border-border">
        <div className="text-center">
          <h3 className="font-semibold text-foreground mb-2">Need Help?</h3>
          <p className="text-muted-foreground mb-4">
            Our team can help you set up the integration in just a few minutes.
          </p>
          <Button variant="outline">
            <ExternalLink className="w-4 h-4 mr-2" />
            Schedule Setup Call
          </Button>
        </div>
      </div>
    </div>
  )
}
