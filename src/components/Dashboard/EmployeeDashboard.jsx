import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='min-h-screen w-full bg-[#1C1C1C] text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard