import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 bg-white dark:bg-gray-800"
    >
      {dark ? <FaSun aria-hidden /> : <FaMoon aria-hidden />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
