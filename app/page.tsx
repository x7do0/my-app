"use client"

import { useState } from "react"
import { Search, Bell, Home, Download, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StageCard } from "@/components/stage-card"


const Index = () => {
  const [activeTab, setActiveTab] = useState("home")
  const [currentPage, setCurrentPage] = useState("home")
  const [notificationCount] = useState(3)
  const [downloadCount] = useState(2)

  console.log("Current page:", currentPage)
  console.log("Active tab:", activeTab)

  const handleStageClick = (stageNumber: number) => {
    console.log(`Stage ${stageNumber} clicked`)
    setCurrentPage(`stage-${stageNumber}`)
  }

  const handleTabClick = (tab: string) => {
    console.log(`Tab ${tab} clicked`)
    setActiveTab(tab)
    setCurrentPage(tab)
  }

  const renderHomePage = () => (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 backdrop-blur-md bg-white/5 border-b border-cyan-400/20"
        data-spec-id="header-bar"
      >
        <div
          className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-400/10"
          data-spec-id="profile-avatar"
        >
          <div className="w-6 h-6 rounded-full bg-blue-400"></div>
        </div>

        <div className="flex gap-3">
          <div
            className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-400/10 hover:bg-white/10 transition-all duration-300"
            data-spec-id="search-button"
          >
            <Search className="w-5 h-5 text-cyan-300" />
          </div>
          <div
            className="relative w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-400/10 hover:bg-white/10 transition-all duration-300"
            data-spec-id="notification-button"
          >
            <Bell className="w-5 h-5 text-cyan-300" />
            {notificationCount > 0 && (
              <Badge
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-xs flex items-center justify-center border-0 shadow-lg shadow-cyan-400/30"
                data-spec-id="notification-badge"
              >
                {notificationCount}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="px-6 pt-8 pb-6">
        <h1
          className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent"
          data-spec-id="welcome-title"
        >
          Welcome back!
        </h1>
        <p
          className="text-lg text-cyan-200/70 border-b border-cyan-400/20 pb-2 inline-block"
          data-spec-id="welcome-subtitle"
        >
          Choose your stage to continue
        </p>
      </div>

      {/* Stage Selection */}
      <div className="px-6 flex-1">
        <div
          className="inline-block px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-cyan-400/40 shadow-lg shadow-cyan-400/10 mb-6"
          data-spec-id="stage-selection-chip"
        >
          <span className="text-cyan-300 font-medium">Stage Selection</span>
        </div>

        <div
          className="p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-cyan-400/20 shadow-2xl shadow-cyan-400/10"
          data-spec-id="stage-grid-container"
        >
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((stage) => (
              <StageCard
                key={stage}
                stage={stage}
                onClick={handleStageClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderNotificationsPage = () => (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Notifications</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((notification) => (
          <div
            key={notification}
            className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-cyan-400/30 shadow-lg shadow-cyan-400/10"
            data-spec-id={`notification-${notification}`}
          >
            <h3 className="text-white font-medium">Notification {notification}</h3>
            <p className="text-cyan-200/70 text-sm mt-1">Sample notification content</p>
          </div>
        ))}
      </div>
    </div>
  )

  const renderDownloadsPage = () => (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Downloads</h2>
      <div className="space-y-4">
        {[1, 2].map((download) => (
          <div
            key={download}
            className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-cyan-400/30 shadow-lg shadow-cyan-400/10"
            data-spec-id={`download-${download}`}
          >
            <h3 className="text-white font-medium">File {download}</h3>
            <div className="w-full bg-white/20 rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                style={{ width: `${download * 45}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderSettingsPage = () => (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
      <div className="space-y-4">
        {["Profile", "Notifications", "Privacy", "About"].map((setting) => (
          <div
            key={setting}
            className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-cyan-400/30 shadow-lg shadow-cyan-400/10"
            data-spec-id={`setting-${setting.toLowerCase()}`}
          >
            <span className="text-white font-medium">{setting}</span>
          </div>
        ))}
      </div>
    </div>
  )

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return renderHomePage()
      case "notifications":
        return renderNotificationsPage()
      case "downloads":
        return renderDownloadsPage()
      case "settings":
        return renderSettingsPage()
      default:
        return renderHomePage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10h10v10h10" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cyan-400" />
                <circle cx="5" cy="5" r="1" fill="currentColor" className="text-cyan-400" />
                <circle cx="15" cy="15" r="1" fill="currentColor" className="text-cyan-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Glowing Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-md mx-auto">
        {renderCurrentPage()}

        {/* Bottom Navigation */}
        {/* Bottom Navigation */}
        <div
          className="sticky bottom-0 left-0 right-0 z-20 px-4 pb-6 pt-3"
          data-spec-id="bottom-navigation"
        >
          <div className="mx-auto max-w-md">
            <div className="backdrop-blur-xl bg-white/8 border border-cyan-400/25 shadow-[0_10px_40px_-8px_rgba(0,180,255,.25)] rounded-3xl px-3 py-2">
              <div className="flex justify-around">
                {[
                  { id: "home", icon: Home, label: "Home" },
                  { id: "notifications", icon: Bell, label: "Notifications" },
                  { id: "downloads", icon: Download, label: "Downloads" },
                  { id: "settings", icon: Settings, label: "Settings" }
                ].map(({ id, icon: Icon, label }) => (
                  <div
                    key={id}
                    className="backdrop-blur-xl bg-white/8 border border-cyan-400/25 rounded-3xl px-3 py-2"
                  >
                    <Button
                      onClick={() => handleTabClick(id)}
                      variant="ghost"
                      className={`flex flex-col items-center gap-1 h-auto p-2 rounded-xl transition-all duration-300
                ${activeTab === id
                          ? "text-cyan-200 bg-white/10 border border-cyan-400/40 shadow-[0_0_30px_-6px_rgba(56,189,248,.45)]"
                          : "text-cyan-200/70 hover:text-cyan-200 hover:bg-white/5"}`}
                      data-spec-id={`nav-${id}`}
                    >
                      <div className="relative">
                        <Icon className="w-5 h-5" />
                        {id === "notifications" && notificationCount > 0 && (
                          <Badge className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-[10px] flex items-center justify-center border-0 p-0">
                            {notificationCount}
                          </Badge>
                        )}
                        {id === "downloads" && downloadCount > 0 && (
                          <Badge className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-[10px] flex items-center justify-center border-0 p-0">
                            {downloadCount}
                          </Badge>
                        )}
                      </div>
                      <span className="text-xs">{label}</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Index
