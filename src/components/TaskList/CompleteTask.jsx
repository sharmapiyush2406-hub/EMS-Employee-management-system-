import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className='bg-emerald-600 h-full w-[280px] sm:w-[300px] shrink-0 p-5 rounded-xl flex flex-col justify-between'>
      <div>
        <div className='flex justify-between items-center'>
          <span className='bg-emerald-900 px-3 py-1 text-xs font-semibold rounded-full text-white'>
            {data.category}
          </span>
          <span className='text-xs text-emerald-200 font-medium'>{data.taskDate}</span>
        </div>
        <h2 className='mt-4 text-xl font-bold text-white'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 text-emerald-100 leading-relaxed'>{data.taskDescription}</p>
      </div>
      <div className='mt-4 bg-white/20 text-white text-center py-2 rounded-lg font-semibold text-sm tracking-wide'>
        ✅ Completed
      </div>
    </div>
  )
}

export default CompleteTask