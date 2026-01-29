import React, { useContext, useState } from "react"
import { Button } from "../components/ui/button"
import { Eye, EyeOff, Loader2, Mail, ArrowLeft, Sparkles } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Alert, AlertDescription } from "../components/ui/alert"
import { Zap } from "lucide-react"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import {UserDataContext} from "../context/UserContext.jsx"

const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const {user, setUser} =  useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async(e) => {
    e.preventDefault();
    setLoading(true)
    setError('')
    const userData = {
      email: email,
      password: password
    }

    try{
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
    // Form fields clear
      setEmail("");
      setPassword("");
      setLoading(false)
    }catch(err){
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Login failed. Please try again.");
      } else {
        setError("Network error. Please check your connection.");
      }
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 overflow-hidden">
      {/* BRAND HEADER */}
      <header className="fixed top-0 left-0 right-0 lg:left-0 lg:right-auto lg:w-1/2 px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex justify-between items-center z-30 bg-gradient-to-b from-slate-900/95 to-transparent backdrop-blur-sm lg:backdrop-blur-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flownest-gradient flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">FlowNest</h1>
        </div>

        {/* Back to home */}
        <Link to="/" className="hidden lg:flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </Link>
      </header>

      {/* LEFT - HERO SECTION */}
      <div className="relative flex items-center justify-center bg-slate-900 overflow-hidden min-h-[40vh] lg:min-h-screen pt-16 lg:pt-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 flownest-gradient animate-gradient opacity-90" />

        {/* Multiple gradient orbs for depth */}
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full bg-blue-600/20 blur-[100px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] rounded-full bg-indigo-600/20 blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-lg">
          <div className="mb-8 animate-float">
            <div className="w-32 h-32 rounded-3xl flownest-gradient flex items-center justify-center shadow-2xl">
              <Mail className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <div className="space-y-4 animate-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Welcome back
            </h2>
            <p className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed">
              Continue your journey to peak productivity with FlowNest
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT - FORM SECTION */}
      <div className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="w-full max-w-md space-y-8 animate-in slide-in-from-right duration-700">
          {/* Header */}
          <div className="text-center space-y-2">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to home</span>
            </Link>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight flownest-gradient-text">
              Sign In
            </h2>
            <p className="text-slate-600 text-lg">
              Enter your credentials to access your workspace
            </p>
          </div>

          {/* Login Form */}
          <Card className="flownest-card shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                Welcome Back
              </CardTitle>
              <CardDescription className="text-slate-600 text-base">
                Sign in to continue to your FlowNest workspace
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {error && (
                <Alert className="border-red-200 bg-red-50 text-red-800">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={submitHandler} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flownest-input h-12 pl-10 bg-white/50 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-700 font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="flownest-input h-12 pr-10 bg-white/50 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 text-lg flownest-button-primary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>

              <div className="text-center">
                <p className="text-slate-600">
                  Don't have an account?{" "}
                  <Link 
                    to="/signup" 
                    className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Trust indicators */}
          <div className="text-center space-y-4">
            <p className="text-sm text-slate-500">
              Secure login powered by industry-standard encryption
            </p>
            <div className="flex items-center justify-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
