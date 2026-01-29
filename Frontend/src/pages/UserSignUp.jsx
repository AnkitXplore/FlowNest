import React, { useContext, useState } from "react"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Alert, AlertDescription } from "../components/ui/alert";
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { User, Mail, Lock, Loader2, ArrowLeft, Sparkles, Zap } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import {UserDataContext} from "../context/UserContext.jsx"

const UserSignUp = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const {user, setUser} =  useContext(UserDataContext)

  const submitHandler = async(e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const newUser = {
      fullname:{
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }
    try{
      const response = await axios.post(`https://flownest-backend-2.onrender.com/users/register`, newUser)
    if(response.status === 201){
      const data = response.data
      localStorage.setItem('token', data.token)
      setUser(data.user)
      navigate('/home')
    }
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setLoading(false)
    }catch(err){
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Registration failed. Please try again.");
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
              <User className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <div className="space-y-4 animate-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Join FlowNest
            </h2>
            <p className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed">
              Start your journey to enhanced productivity and seamless collaboration
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
              Create Account
            </h2>
            <p className="text-slate-600 text-lg">
              Get started with your free FlowNest workspace
            </p>
          </div>

          {/* Signup Form */}
          <Card className="flownest-card shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                Get Started
              </CardTitle>
              <CardDescription className="text-slate-600 text-base">
                Create your account to unlock powerful productivity features
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {error && (
                <Alert className="border-red-200 bg-red-50 text-red-800">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={submitHandler} className="space-y-5">
                {/* Name fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-700 font-medium">
                      First Name
                    </Label>
                    <Input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="John"
                      className="h-12 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl text-slate-900 placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-slate-700 font-medium">
                      Last Name
                    </Label>
                    <Input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      className="h-12 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl text-slate-900 placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                {/* Email field */}
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
                      placeholder="john.doe@example.com"
                      className="h-12 pl-10 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl text-slate-900 placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                {/* Password field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-700 font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a strong password"
                      className="h-12 pl-10 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl text-slate-900 placeholder:text-slate-400"
                      required
                      minLength={6}
                    />
                  </div>
                  <p className="text-xs text-slate-500">
                    Must be at least 6 characters long
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 text-lg flownest-button-primary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>

              <div className="text-center">
                <p className="text-slate-600">
                  Already have an account?{" "}
                  <Link 
                    to="/login" 
                    className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Trust indicators */}
          <div className="text-center space-y-4">
            <p className="text-sm text-slate-500">
              By creating an account, you agree to our Terms of Service and Privacy Policy
            </p>
            <div className="flex items-center justify-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs">Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs">No Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="text-xs">Instant Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSignUp
