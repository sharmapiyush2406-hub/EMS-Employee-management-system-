import React, { useState } from 'react'

const NewTask = ({ data, employeeId, onUpdate }) => {
  const [accepted, setAccepted] = useState(data.active)

  const acceptTask = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const empIdx = employees.findIndex((e) => e.id === employeeId)
    if (empIdx === -1) return

    const taskIdx = employees[empIdx].tasks.findIndex(
      (t) => t.taskTitle === data.taskTitle && t.taskDate === data.taskDate
    )
    if (taskIdx === -1) return

    employees[empIdx].tasks[taskIdx].active = true
    employees[empIdx].tasks[taskIdx].newTask = false
    employees[empIdx].taskCounts.active += 1
    if (employees[empIdx].taskCounts.newTask > 0)
      employees[empIdx].taskCounts.newTask -= 1

    localStorage.setItem('employees', JSON.stringify(employees))
    setAccepted(true)
    if (onUpdate) onUpdate(employees[empIdx])
  }

  return (
    <div className='bg-blue-600 h-full w-[280px] sm:w-[300px] shrink-0 p-5 rounded-xl flex flex-col justify-between'>
      <div>
        <div className='flex justify-between items-center'>
          <span className='bg-blue-900 px-3 py-1 text-xs font-semibold rounded-full text-white'>
            {data.category}
          </span>
          <span className='text-xs text-blue-200 font-medium'>{data.taskDate}</span>
        </div>
        <h2 className='mt-4 text-xl font-bold text-white'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 text-blue-100 leading-relaxed'>{data.taskDescription}</p>
      </div>

      {accepted ? (
        <div className='mt-4 bg-green-500 text-white text-center py-2 rounded-lg font-semibold text-sm'>
          ✅ Accepted — In Progress
        </div>
      ) : (
        <button
          onClick={acceptTask}
          className='mt-4 w-full bg-amber-400 hover:bg-amber-500 active:scale-95 transition-all py-2 px-3 rounded-lg font-semibold text-gray-900 text-sm'
        >
          ▶ Accept Task
        </button>
      )}
    </div>
  )
}

export default NewTask