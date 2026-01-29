import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap, Shield, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const StartedPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 overflow-hidden">
      {/* BRAND HEADER - Fixed on all devices */}
      <header className="fixed top-0 left-0 right-0 lg:left-0 lg:right-auto lg:w-1/2 px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex justify-between items-center z-30 bg-gradient-to-b from-slate-900/95 to-transparent backdrop-blur-sm lg:backdrop-blur-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flownest-gradient flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">FlowNest</h1>
        </div>

        {/* Desktop login hint */}
        <div className="hidden lg:flex items-center gap-2 text-sm text-slate-300">
          <span>Already have an account?</span>
          <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            <Link to='/login'>Login</Link>
          </button>
        </div>
      </header>

      {/* LEFT - HERO SECTION */}
      <div className="relative flex items-center justify-center bg-slate-900 overflow-hidden min-h-[50vh] sm:min-h-[55vh] lg:min-h-screen pt-16 lg:pt-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 flownest-gradient animate-gradient opacity-90" />

        {/* Multiple gradient orbs for depth */}
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full bg-blue-600/20 blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] rounded-full bg-indigo-600/20 blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-glow" />
        <div
          className="absolute top-32 right-16 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-glow"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-24 left-20 w-2 h-2 bg-purple-400 rounded-full animate-glow"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Main illustration container */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-lg">
          {/* Abstract productivity illustration */}
          <div className="relative mb-8 lg:mb-10 animate-float">
            <div className="absolute inset-0 flownest-gradient opacity-20 blur-3xl rounded-full" />
            <div className="relative w-[280px] sm:w-[340px] md:w-[400px] lg:w-[480px] h-[280px] sm:h-[340px] md:h-[400px] lg:h-[480px] bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 p-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-blue-400" />
                </div>
                <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl border border-indigo-500/30 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-indigo-400" />
                </div>
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl border border-purple-500/30 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <div className="w-16 h-16 bg-pink-500/20 rounded-2xl border border-pink-500/30 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-pink-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Hero text - hidden on mobile, shown on tablet/desktop */}
          <div
            className="hidden sm:block space-y-4 lg:space-y-6 animate-in slide-in-from-bottom duration-700"
            style={{ animationDelay: "200ms" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Trusted by 10,000+ teams</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Organize your work.
              <br />
              Amplify your focus.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              FlowNest helps you manage tasks, track progress, and stay productive — all in one place.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT - FORM SECTION */}
      <div className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="w-full max-w-md space-y-6 sm:space-y-8 lg:space-y-10 animate-in slide-in-from-right duration-700">
          {/* Heading */}
          <div className="space-y-3 sm:space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight flownest-gradient-text">
              Get Started
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-sm mx-auto">
              Join thousands of teams already using FlowNest to stay productive
            </p>
          </div>

          {/* Main Card */}
          <Card className="flownest-card shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="space-y-2 pb-6">
              <CardTitle className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Create your workspace
              </CardTitle>
              <CardDescription className="text-slate-600 text-base">
                Start your free trial today
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 pt-2">
              {/* Primary CTA */}
              <Button
                asChild
                className="w-full text-lg sm:text-xl h-14 sm:h-16 flownest-button-primary rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Link
                  to="/signup"
                  className="flex items-center justify-center gap-3"
                >
                  Create Account
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {/* Divider */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-wide text-slate-500">
                  <span className="bg-white px-4">Or</span>
                </div>
              </div>

              {/* Secondary CTA */}
              <Button
                asChild
                variant="outline"
                className="w-full h-14 sm:h-16 text-lg sm:text-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl font-medium transition-all duration-300"
              >
                <Link to="/login" className="flex items-center justify-center">
                  Login
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Trust badges and features */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm text-slate-500 text-center font-medium">
              No credit card required · Free forever · Setup in 2 minutes
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-xs font-medium text-slate-700">Secure</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-xs font-medium text-slate-700">Fast</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-xs font-medium text-slate-700">Smart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartedPage;
