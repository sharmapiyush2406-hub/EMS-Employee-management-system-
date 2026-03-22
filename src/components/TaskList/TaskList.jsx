import React, { useState } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, onUpdate }) => {
  const [tasks, setTasks] = useState(data.tasks)

  const handleUpdate = (updatedEmployee) => {
    setTasks([...updatedEmployee.tasks])
    if (onUpdate) onUpdate(updatedEmployee)
  }

  return (
    <div
      id='tasklist'
      className='flex items-stretch overflow-x-auto justify-start gap-5 w-full py-5 flex-nowrap mt-8'
      style={{ minHeight: '220px' }}
    >
      {tasks.length === 0 && (
        <p className='text-gray-400 text-center w-full self-center'>No tasks assigned yet.</p>
      )}
      {tasks.map((elem, idx) => {
        if (elem.active) {
          return (
            <AcceptTask
              key={idx}
              data={elem}
              employeeId={data.id}
              onUpdate={handleUpdate}
            />
          )
        }
        if (elem.newTask && !elem.completed && !elem.failed) {
          return (
            <NewTask
              key={idx}
              data={elem}
              employeeId={data.id}
              onUpdate={handleUpdate}
            />
          )
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }
        return null
      })}
    </div>
  )
}

export default TaskList