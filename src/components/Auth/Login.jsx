import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 px-4'>
      <div className='w-full max-w-md'>
        {/* Card */}
        <div className='bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-3xl shadow-2xl p-8 sm:p-10'>

          {/* Logo / Branding */}
          <div className='flex flex-col items-center mb-8'>
            <div className='w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30'>
              <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                  d='M17 20h5v-2a4 4 0 00-5.364-3.75M9 20H4v-2a4 4 0 015.364-3.75M15 7a4 4 0 11-8 0 4 4 0 018 0zm6 13v-2a4 4 0 00-3-3.87' />
              </svg>
            </div>
            <h1 className='text-2xl sm:text-3xl font-bold text-white tracking-tight'>EMS Portal</h1>
            <p className='text-gray-400 text-sm mt-1'>Employee Management System</p>
          </div>

          {/* Form */}
          <form onSubmit={submitHandler} className='flex flex-col gap-5'>
            {/* Email */}
            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-300'>Email Address</label>
              <div className='relative'>
                <span className='absolute inset-y-0 left-4 flex items-center text-gray-400'>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8}
                      d='M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0zm0 0h2.5M4.5 12H2' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type='email'
                  placeholder='you@example.com'
                  className='w-full pl-12 pr-4 py-3 rounded-xl bg-gray-700/60 border border-gray-600 text-white placeholder-gray-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition text-sm'
                />
              </div>
            </div>

            {/* Password */}
            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-gray-300'>Password</label>
              <div className='relative'>
                <span className='absolute inset-y-0 left-4 flex items-center text-gray-400'>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8}
                      d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                  </svg>
                </span>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  className='w-full pl-12 pr-12 py-3 rounded-xl bg-gray-700/60 border border-gray-600 text-white placeholder-gray-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition text-sm'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword((v) => !v)}
                  className='absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-200 transition'
                >
                  {showPassword ? (
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8}
                        d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21' />
                    </svg>
                  ) : (
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.8}
                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type='submit'
              className='w-full py-3 mt-2 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] transition-all rounded-xl font-semibold text-white text-base shadow-lg shadow-emerald-500/25'
            >
              Sign In
            </button>
          </form>

          {/* Demo credentials hint */}
          <div className='mt-6 p-4 bg-gray-700/50 rounded-xl border border-gray-600/50'>
            <p className='text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide'>Demo Credentials</p>
            <p className='text-xs text-gray-300'>👤 Admin: <span className='text-emerald-400'>admin@example.com</span> / <span className='text-emerald-400'>123</span></p>
            <p className='text-xs text-gray-300 mt-1'>👷 Employee: <span className='text-emerald-400'>e@e.com</span> / <span className='text-emerald-400'>123</span></p>
          </div>
        </div>

        <p className='text-center text-gray-600 text-xs mt-6'>© 2026 EMS Portal. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Login