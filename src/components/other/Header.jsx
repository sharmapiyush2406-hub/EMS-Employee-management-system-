import React from 'react'

const Header = (props) => {
  const username = props.data ? props.data.firstName : 'Admin'
  const isAdmin = !props.data

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser(null)
  }

  return (
    <div className='flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-700'>
      <div>
        <p className='text-sm text-gray-400 font-medium uppercase tracking-widest'>
          {isAdmin ? '🛡 Admin Panel' : '👷 Employee Panel'}
        </p>
        <h1 className='text-2xl sm:text-3xl font-bold text-white mt-0.5'>
          Hello, <span className='text-emerald-400'>{username}</span> 👋
        </h1>
      </div>

      <button
        onClick={logOutUser}
        className='flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 hover:text-red-300 px-4 py-2 rounded-xl font-medium text-sm transition-all active:scale-95'
      >
        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
            d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
        </svg>
        Log Out
      </button>
    </div>
  )
}

export default Header