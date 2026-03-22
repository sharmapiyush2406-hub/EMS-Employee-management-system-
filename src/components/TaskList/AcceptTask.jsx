import React, { useContext, useState } from 'react'

const AcceptTask = ({ data, employeeId, onUpdate }) => {
  const [done, setDone] = useState(data.completed)
  const [failed, setFailed] = useState(data.failed)

  const markComplete = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const empIdx = employees.findIndex((e) => e.id === employeeId)
    if (empIdx === -1) return

    const taskIdx = employees[empIdx].tasks.findIndex(
      (t) => t.taskTitle === data.taskTitle && t.taskDate === data.taskDate
    )
    if (taskIdx === -1) return

    employees[empIdx].tasks[taskIdx].completed = true
    employees[empIdx].tasks[taskIdx].active = false
    employees[empIdx].tasks[taskIdx].newTask = false
    employees[empIdx].taskCounts.completed += 1
    if (employees[empIdx].taskCounts.active > 0)
      employees[empIdx].taskCounts.active -= 1

    localStorage.setItem('employees', JSON.stringify(employees))
    setDone(true)
    if (onUpdate) onUpdate(employees[empIdx])
  }

  const markFailed = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const empIdx = employees.findIndex((e) => e.id === employeeId)
    if (empIdx === -1) return

    const taskIdx = employees[empIdx].tasks.findIndex(
      (t) => t.taskTitle === data.taskTitle && t.taskDate === data.taskDate
    )
    if (taskIdx === -1) return

    employees[empIdx].tasks[taskIdx].failed = true
    employees[empIdx].tasks[taskIdx].active = false
    employees[empIdx].taskCounts.failed += 1
    if (employees[empIdx].taskCounts.active > 0)
      employees[empIdx].taskCounts.active -= 1

    localStorage.setItem('employees', JSON.stringify(employees))
    setFailed(true)
    if (onUpdate) onUpdate(employees[empIdx])
  }

  return (
    <div className='bg-yellow-500 h-full w-[280px] sm:w-[300px] shrink-0 p-5 rounded-xl flex flex-col justify-between'>
      <div>
        <div className='flex justify-between items-center'>
          <span className='bg-red-600 px-3 py-1 text-xs font-semibold rounded-full text-white'>
            {data.category}
          </span>
          <span className='text-xs text-gray-800 font-medium'>{data.taskDate}</span>
        </div>
        <h2 className='mt-4 text-xl font-bold text-gray-900'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 text-gray-800 leading-relaxed'>{data.taskDescription}</p>
      </div>

      {done ? (
        <div className='mt-4 bg-green-600 text-white text-center py-2 rounded-lg font-semibold tracking-wide text-sm'>
          ✅ Done
        </div>
      ) : failed ? (
        <div className='mt-4 bg-red-700 text-white text-center py-2 rounded-lg font-semibold tracking-wide text-sm'>
          ❌ Failed
        </div>
      ) : (
        <div className='flex gap-2 mt-4'>
          <button
            onClick={markComplete}
            className='flex-1 bg-green-500 hover:bg-green-600 active:scale-95 transition-all py-2 px-2 text-sm rounded-lg font-semibold text-white'
          >
            ✔ Mark Complete
          </button>
          <button
            onClick={markFailed}
            className='flex-1 bg-red-500 hover:bg-red-600 active:scale-95 transition-all py-2 px-2 text-sm rounded-lg font-semibold text-white'
          >
            ✖ Mark Failed
          </button>
        </div>
      )}
    </div>
  )
}

export default AcceptTask