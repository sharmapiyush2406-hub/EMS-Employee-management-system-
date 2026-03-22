import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    const stored = localStorage.getItem('loggedInUser')
    if (stored) {
      const parsed = JSON.parse(stored)
      if (parsed && parsed.role) {
        setUser(parsed.role)
        setLoggedInUserData(parsed.data || null)
      }
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authData && authData.employees) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      )
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert('Invalid credentials. Please try again.')
      }
    } else {
      alert('Invalid credentials. Please try again.')
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser} />}
      {user === 'employee' && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  )
}

export default App