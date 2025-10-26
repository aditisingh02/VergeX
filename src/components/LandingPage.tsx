import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Menu,
  Paintbrush,
  Sparkles,
  Star,
  X,
} from "lucide-react";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better readability */}
      <div className="fixed inset-0 bg-linear-to-br from-black/60 via-black/40 to-black/60 pointer-events-none" />

      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm md:max-w-none md:w-auto px-4 md:px-0">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between md:justify-center md:gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">Verge</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => alert("Blog coming soon!")}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Blog
              </button>
            </div>

            {/* Desktop CTA Button */}
            <Button
              size="sm"
              className="hidden md:flex rounded-full px-4 py-2 text-sm bg-white hover:bg-gray-200 text-black border-0"
              onClick={() => alert("App coming soon!")}
            >
              Generate Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-sm text-white/70 hover:text-white transition-colors py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="text-sm text-white/70 hover:text-white transition-colors py-2 text-left"
              >
                Features
              </button>
              <button
                onClick={() => {
                  alert("Blog coming soon!");
                  setIsMobileMenuOpen(false);
                }}
                className="text-sm text-white/70 hover:text-white transition-colors py-2 text-left"
              >
                Blog
              </button>
              <div className="pt-2 border-t border-white/20">
                <Button
                  size="sm"
                  className="w-full rounded-full px-4 py-2 text-sm bg-white hover:bg-gray-200 text-black border-0"
                  onClick={() => {
                    alert("App coming soon!");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Generate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-12 md:px-16 lg:px-24 xl:px-32 pt-24 sm:pt-0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left Side - Text and Buttons */}
              <div
                className={`text-center lg:text-left transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  <span className="text-white">Your Palette,</span>
                  <br />
                  <span className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Perfected
                  </span>
                </h1>
                <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Generate beautiful, accessible color palettes for your design
                  projects. Create harmonious color schemes with real-time
                  preview and export to multiple formats.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                  <Button
                    size="default"
                    className="gap-2 px-6 py-3 bg-white hover:bg-gray-200 text-black border-0"
                    onClick={() => alert("App coming soon!")}
                  >
                    <Sparkles className="h-4 w-4" />
                    Start Creating
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    className="gap-2 px-6 py-3 border-white/30 text-white hover:bg-white/10 hover:text-white"
                    onClick={() =>
                      window.open(
                        "https://github.com/aditisingh02/verge",
                        "_blank"
                      )
                    }
                  >
                    <Star className="h-4 w-4" />
                    Star on GitHub
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0">
                  <div className="text-center lg:text-left">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">
                      4+
                    </div>
                    <div className="text-xs text-gray-400">Harmony Types</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">
                      WCAG
                    </div>
                    <div className="text-xs text-gray-400">Compliant</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">
                      4+
                    </div>
                    <div className="text-xs text-gray-400">Export Formats</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Verge GIF */}
              <div
                className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <img
                  src="/verge.gif"
                  alt="Verge"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl object-contain"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section
          id="features"
          className="py-20 px-12 md:px-16 lg:px-24 xl:px-32"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-white/20 text-white border-white/30"
              >
                Features
              </Badge>
              <h2 className="text-4xl font-bold mb-4 text-white">
                Everything you need for perfect palettes
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Powerful tools and features designed to help you create
                accessible, beautiful color schemes
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 min-h-[500px] border-2 border-dashed border-white/30">
              {/* Large Feature - Smart Color Generation (Top Left, spans 2x2) */}
              <div className="lg:col-span-2 lg:row-span-2 border-r-2 border-b-2 border-dashed border-white/30 hover:border-white/60 transition-all duration-300 p-8 bg-white/5 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Smart Color Generation
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Generate harmonious color palettes using color theory
                  principles - complementary, analogous, triadic, and
                  split-complementary schemes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Complementary
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Analogous
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Triadic
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Split-complementary
                  </Badge>
                </div>
              </div>

              {/* Top Right - Accessibility */}
              <div className="lg:col-span-1 lg:row-span-1 border-b-2 border-dashed border-white/30 hover:border-white/60 transition-all duration-300 p-6 bg-white/5 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Accessibility First
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Real-time WCAG compliance checking with AA/AAA contrast ratio
                  validation to ensure your colors are accessible to everyone.
                </p>
              </div>

              {/* Top Far Right - Color Vision */}
              <div className="lg:col-span-1 lg:row-span-1 border-b-2 border-l-2 border-dashed border-white/30 hover:border-white/60 transition-all duration-300 p-6 bg-white/5 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Color Vision Support
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Test your palettes for different types of color blindness to
                  create inclusive designs that work for all users.
                </p>
              </div>

              {/* Right Side - Verge in Action with Screenshot (spans 2x2) */}
              <div className="lg:col-span-2 lg:row-span-2 border-l-2 border-dashed border-white/30 p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="h-full flex flex-col">
                  <img
                    src="/verge-screen.png"
                    alt="Verge Application Screenshot"
                    className="w-auto h-60 object-contain rounded border border-white/20 bg-white/10 p-2"
                  />
                </div>
              </div>

              {/* Bottom Left - Export Formats (Below Smart Color Generation) */}
              <div className="lg:col-span-1 lg:row-span-1 border-r-2 border-dashed border-white/30 hover:border-white/60 transition-all duration-300 p-6 bg-white/5 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Multiple Export Formats
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Ready-to-use code for any project
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    CSS Variables
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Tailwind Config
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    JSON
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Figma Tokens
                  </Badge>
                </div>
              </div>

              {/* Bottom Center - Real-time Preview (Below Smart Color Generation) */}
              <div className="lg:col-span-1 lg:row-span-1 border-l-2 border-dashed border-white/30 hover:border-white/60 transition-all duration-300 p-6 bg-white/5 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Real-time Preview
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  See your colors applied to actual UI components instantly.
                  Toggle between light and dark themes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Section */}
        <section className="py-20 px-12 md:px-16 lg:px-24 xl:px-32 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge
                  variant="secondary"
                  className="mb-4 bg-white/20 text-white border-white/30"
                >
                  Accessibility First
                </Badge>
                <h2 className="text-4xl font-bold mb-6 text-white">
                  Built for everyone
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Verge automatically checks your color combinations against
                  WCAG guidelines, ensuring your designs are accessible to users
                  with different visual abilities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white">
                      WCAG 2.1 AA/AAA compliance checking
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white">
                      Color blindness simulation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white">
                      Real-time contrast ratio calculation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white">
                      Accessibility recommendations
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="p-8 shadow-2xl bg-white/10 border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">
                        Contrast Ratio
                      </span>
                      <Badge
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30"
                      >
                        AA Compliant
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/10">
                        <span className="text-sm text-gray-300">
                          Primary on Background
                        </span>
                        <span className="font-mono text-sm text-white">
                          4.7:1
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/10">
                        <span className="text-sm text-gray-300">
                          Secondary on Background
                        </span>
                        <span className="font-mono text-sm text-white">
                          7.2:1
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/10">
                        <span className="text-sm text-gray-300">
                          Accent on Background
                        </span>
                        <span className="font-mono text-sm text-white">
                          5.1:1
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-12 md:px-16 lg:px-24 xl:px-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to create amazing palettes?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join designers and developers who trust Verge for their color
              palette needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gap-2 text-lg px-8 py-6 bg-white hover:bg-gray-200 text-black border-0"
                onClick={() => alert("App coming soon!")}
              >
                <Paintbrush className="h-5 w-5" />
                Start Creating Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:text-white"
                onClick={() =>
                  window.open("https://github.com/aditisingh02/verge", "_blank")
                }
              >
                <Star className="h-5 w-5" />
                Star on GitHub
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 bg-white/5 backdrop-blur-sm py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/cube.gif"
                alt="Verge"
                className="w-6 h-6 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-bold text-white">Verge</h3>
                <p className="text-xs text-gray-400">Your Palette, Perfected</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <button
                onClick={() =>
                  window.open("https://github.com/aditisingh02/verge", "_blank")
                }
                className="hover:text-white transition-colors"
              >
                GitHub
              </button>
              <span>•</span>
              <button
                onClick={() => alert("Blog coming soon!")}
                className="hover:text-white transition-colors"
              >
                Blog
              </button>
              <span>•</span>
              <span>© 2024 Aditi Singh</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
