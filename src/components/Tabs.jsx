import React from 'react'

export default function Tabs({ active, onChange }) {
  return (
    <div className="flex rounded-t-xl overflow-hidden">
      <button
        onClick={() => onChange('login')}
        className={`flex-1 py-3 font-semibold text-sm sm:text-base transition ${active === 'login' ? 'bg-yellow-400 text-black' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
      >
        Log In
      </button>
      <button
        onClick={() => onChange('signup')}
        className={`flex-1 py-3 font-semibold text-sm sm:text-base transition ${active === 'signup' ? 'bg-yellow-400 text-black' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
      >
        Sign Up
      </button>
    </div>
  )
}
