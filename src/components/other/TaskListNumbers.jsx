import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-10 w-full'>
      <div className='py-6 px-6 sm:px-9 rounded-xl bg-red-400'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
      <h3 className='text-sm sm:text-xl font-medium'>New Task</h3>    
  </div>
  <div className='py-6 px-6 sm:px-9 rounded-xl bg-blue-400'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
      <h3 className='text-sm sm:text-xl font-medium'>Completed</h3>    
  </div>
  <div className='py-6 px-6 sm:px-9 rounded-xl bg-green-400'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
      <h3 className='text-sm sm:text-xl font-medium'>Accepted</h3>    
  </div>
  <div className='py-6 px-6 sm:px-9 rounded-xl bg-yellow-400'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
      <h3 className='text-sm sm:text-xl font-medium'>Failed</h3>    
  </div>
    </div>
  )
}

export default TaskListNumbers