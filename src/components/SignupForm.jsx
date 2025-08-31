import React, { useState } from 'react'
import { FaGoogle, FaFacebook, FaApple, FaPaypal } from 'react-icons/fa'

export default function SignupForm() {
  const [useOtp, setUseOtp] = useState(true)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [mailing, setMailing] = useState(false)
  const [captcha, setCaptcha] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return alert('Enter email')
    if (useOtp ? !otp : !password) return alert('Complete required fields')
    if (!captcha) return alert('Please verify reCAPTCHA')
    alert('Registered (demo)')
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
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">OTP</label>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0,6))}
              inputMode="numeric"
              placeholder="Enter 6-digit OTP"
              className="mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 tracking-widest text-center"
            />
          </div>
          <button type="button" onClick={() => alert('OTP sent (demo)')} className="h-11 px-4 rounded-lg border border-gray-200 dark:border-gray-700">Get OTP?</button>
        </div>
      ) : (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Create password"
            className="mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      )}

      <div className="space-y-2">
        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" checked={mailing} onChange={(e)=>setMailing(e.target.checked)} className="mt-1 w-4 h-4"/>
          <span>Join Our Mailing List</span>
        </label>

        <label className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 p-3">
          <input type="checkbox" checked={captcha} onChange={(e)=>setCaptcha(e.target.checked)} className="w-4 h-4"/>
          <span className="text-sm">I'm not a robot (mock reCAPTCHA)</span>
        </label>
      </div>

      <button className="w-full py-3 rounded-lg bg-yellow-400 text-black font-semibold">Register</button>

      <p className="text-xs text-gray-500 dark:text-gray-300">By registering you agree to our <a href="#" className="text-blue-600 underline">Terms & Conditions</a></p>

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
