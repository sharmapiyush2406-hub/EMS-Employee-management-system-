import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const { refreshData } = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const idx = employees.findIndex(
      (emp) => emp.firstName.toLowerCase() === assignTo.trim().toLowerCase()
    )

    if (idx === -1) {
      alert(`No employee found with name "${assignTo}". Please check the name.`)
      return
    }

    const newTask = {
      taskNumber: employees[idx].tasks.length + 1,
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    }

    employees[idx].tasks.push(newTask)
    employees[idx].taskCounts.newTask += 1

    localStorage.setItem('employees', JSON.stringify(employees))

    // Refresh global context so AdminDashboard AllTask table updates instantly
    refreshData()

    // Clear form
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setSuccessMsg(`Task "${newTask.taskTitle}" assigned to ${employees[idx].firstName}!`)
    setTimeout(() => setSuccessMsg(''), 3000)
  }

  return (
    <div className='mt-8'>
      {successMsg && (
        <div className='mb-4 px-4 py-3 bg-emerald-600 text-white rounded-lg text-center font-medium transition-all'>
          ✅ {successMsg}
        </div>
      )}
      <form
        onSubmit={submitHandler}
        className='flex flex-col lg:flex-row items-start w-full bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg gap-6'
      >
        {/* LEFT SECTION */}
        <div className='w-full lg:w-1/2 flex flex-col gap-5'>
          <div>
            <label className='block text-sm mb-1 text-gray-300 font-medium'>Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              type='text'
              placeholder='e.g. Design new landing page'
              className='w-full px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 outline-none focus:border-emerald-400 text-white placeholder-gray-500 transition'
            />
          </div>

          <div>
            <label className='block text-sm mb-1 text-gray-300 font-medium'>Due Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
              type='date'
              className='w-full px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 outline-none focus:border-emerald-400 text-white transition'
            />
          </div>

          <div>
            <label className='block text-sm mb-1 text-gray-300 font-medium'>Assign To</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              required
              type='text'
              placeholder='Employee first name'
              className='w-full px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 outline-none focus:border-emerald-400 text-white placeholder-gray-500 transition'
            />
          </div>

          <div>
            <label className='block text-sm mb-1 text-gray-300 font-medium'>Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              type='text'
              placeholder='e.g. Design, Dev, Marketing'
              className='w-full px-4 py-2.5 rounded-lg bg-gray-700 border border-gray-600 outline-none focus:border-emerald-400 text-white placeholder-gray-500 transition'
            />
          </div>

          <button
            type='submit'
            className='mt-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all rounded-xl font-semibold text-white w-full sm:w-fit'
          >
            ＋ Create Task
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className='w-full lg:w-1/2 flex flex-col'>
          <label className='block text-sm mb-1 text-gray-300 font-medium'>Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            rows='11'
            placeholder='Describe the task in detail...'
            className='w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 outline-none focus:border-emerald-400 text-white placeholder-gray-500 resize-none transition'
          />
        </div>
      </form>
    </div>
  )
}

export default CreateTask