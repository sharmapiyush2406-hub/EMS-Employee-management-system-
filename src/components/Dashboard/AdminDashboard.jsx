import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='min-h-screen w-full bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6'>
        <Header changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard