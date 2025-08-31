import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Tabs from '../components/Tabs'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

export default function AuthPage() {
  const [active, setActive] = useState('login')

  return (
    <div className="w-full max-w-xl">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 overflow-hidden">
        <Tabs active={active} onChange={setActive} />

        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {active === 'login' ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.18 }}
              >
                <LoginForm />
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.18 }}
              >
                <SignupForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
