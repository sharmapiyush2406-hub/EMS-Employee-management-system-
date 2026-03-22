import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const { employees } = useContext(AuthContext)

  if (!employees) {
    return <p className='text-gray-400 mt-5 text-center'>Loading...</p>
  }

  return (
    <div className='bg-gray-800 rounded-2xl mt-8 overflow-x-auto'>
      {/* Header row */}
      <div className='min-w-[500px] bg-gray-700 flex justify-between py-3 px-5 rounded-t-2xl'>
        <h2 className='w-1/5 text-sm font-semibold text-gray-300 uppercase tracking-wide'>Employee</h2>
        <h3 className='w-1/5 text-sm font-semibold text-blue-400 uppercase tracking-wide'>New</h3>
        <h5 className='w-1/5 text-sm font-semibold text-yellow-400 uppercase tracking-wide'>Active</h5>
        <h5 className='w-1/5 text-sm font-semibold text-emerald-400 uppercase tracking-wide'>Completed</h5>
        <h5 className='w-1/5 text-sm font-semibold text-red-400 uppercase tracking-wide'>Failed</h5>
      </div>

      {/* Data rows */}
      <div className='min-w-[500px] divide-y divide-gray-700/50'>
        {employees.map((elem, idx) => (
          <div key={idx} className='flex justify-between items-center py-3 px-5 hover:bg-gray-700/30 transition'>
            <h2 className='w-1/5 text-sm font-semibold text-white capitalize'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-sm font-bold text-blue-400'>{elem.taskCounts.newTask}</h3>
            <h5 className='w-1/5 text-sm font-bold text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 text-sm font-bold text-emerald-400'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-sm font-bold text-red-400'>{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask