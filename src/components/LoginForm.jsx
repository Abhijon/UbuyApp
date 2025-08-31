import React, { useState } from 'react'
import { FaGoogle, FaFacebook, FaApple, FaPaypal } from 'react-icons/fa'

export default function LoginForm() {
  const [useOtp, setUseOtp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState('')
  const [showPwd, setShowPwd] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return alert('Enter email')
    if (useOtp ? !otp : !password) return alert('Complete required fields')
    alert('Logged in (demo)')
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="you@example.com"
          className="mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
        <span>{useOtp ? 'Using OTP' : 'Using Password'}</span>
        <button type="button" onClick={() => setUseOtp(!useOtp)} className="text-blue-600 hover:underline">
          Switch to {useOtp ? 'Password' : 'OTP'}
        </button>
      </div>

      {useOtp ? (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">OTP</label>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0,6))}
            inputMode="numeric"
            placeholder="Enter 6-digit OTP"
            className="mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 tracking-widest text-center"
          />
        </div>
      ) : (
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPwd ? 'text' : 'password'}
            placeholder="Your password"
            className="mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="button"
            onClick={() => setShowPwd(!showPwd)}
            className="absolute right-3 top-10 text-sm text-gray-600 dark:text-gray-300"
            aria-label={showPwd ? 'Hide password' : 'Show password'}
          >
            {showPwd ? 'Hide' : 'Show'}
          </button>
        </div>
      )}

      {!useOtp && (
        <div className="text-right">
          <a href="#" onClick={(e)=>e.preventDefault()} className="text-sm text-blue-600 hover:underline">Forgot Your Password?</a>
        </div>
      )}

      <button className="w-full py-3 rounded-lg bg-yellow-400 text-black font-semibold">Login</button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden>
          <span className="w-full border-t border-gray-200 dark:border-gray-700"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-gray-800 px-3 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <button type="button" aria-label="Continue with Google" className="flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">
          <FaGoogle />
        </button>
        <button type="button" aria-label="Continue with Facebook" className="flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">
          <FaFacebook />
        </button>
        <button type="button" aria-label="Continue with Apple" className="flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">
          <FaApple />
        </button>
        <button type="button" aria-label="Continue with PayPal" className="flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">
          <FaPaypal />
        </button>
      </div>
    </form>
  )
}
