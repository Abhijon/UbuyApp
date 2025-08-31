import React, { useEffect, useState } from 'react'
import AuthPage from './pages/AuthPage'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme-dark')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme-dark', JSON.stringify(dark))
  }, [dark])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="absolute top-4 right-4">
        <ThemeToggle dark={dark} setDark={setDark} />
      </div>
      <AuthPage />
    </div>
  )
}
