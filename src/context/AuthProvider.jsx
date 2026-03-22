import React, { createContext, useState, useEffect } from 'react'
import { getLocalstorage, setLocalstorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // Only seed data if localStorage is empty
    const existing = localStorage.getItem('employees')
    if (!existing) {
      setLocalstorage()
    }
    const { employees, admin } = getLocalstorage()
    setUserData({ employees, admin })
  }, [])

  // Call this after any mutation to localStorage so all consumers get fresh data
  const refreshData = () => {
    const { employees, admin } = getLocalstorage()
    setUserData({ employees, admin })
  }

  return (
    <AuthContext.Provider value={{ ...userData, refreshData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider