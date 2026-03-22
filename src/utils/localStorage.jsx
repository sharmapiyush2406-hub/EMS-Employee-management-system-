const data = {
  employees: [
    {
      id: 1,
      firstName: "arjun",
      email: "e@e.com",
      password: "123",
      taskCounts: {
        active: 1,
        newTask: 1,
        completed: 0,
        failed: 0
      },
      tasks: [
        {
          taskNumber: 1,
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Prepare Report",
          taskDescription: "Create monthly sales report",
          taskDate: "2026-03-16",
          category: "Reporting"
        }
      ]
    },

    {
      id: 2,
      firstName: "rahul",
      email: "rahul@example.com",
      password: "123",
      taskCounts: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          taskNumber: 1,
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Client Meeting",
          taskDescription: "Discuss project scope",
          taskDate: "2026-03-18",
          category: "Meeting"
        },
        {
          taskNumber: 2,
          active: true,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Code Review",
          taskDescription: "Review team code",
          taskDate: "2026-03-15",
          category: "Development"
        }
      ]
    },

    {
      id: 3,
      firstName: "priya",
      email: "priya@example.com",
      password: "123",
      taskCounts: {
        active: 1,
        newTask: 0,
        completed: 1,
        failed: 1
      },
      tasks: [
        {
          taskNumber: 1,
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Design UI",
          taskDescription: "Create dashboard UI",
          taskDate: "2026-03-14",
          category: "Design"
        },
        {
          taskNumber: 2,
          active: true,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Fix Bugs",
          taskDescription: "Resolve UI bugs",
          taskDate: "2026-03-17",
          category: "Debugging"
        }
      ]
    },

    {
      id: 4,
      firstName: "aman",
      email: "aman@example.com",
      password: "123",
      taskCounts: {
        active: 0,
        newTask: 1,
        completed: 0,
        failed: 1
      },
      tasks: [
        {
          taskNumber: 1,
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Write Docs",
          taskDescription: "Documentation work",
          taskDate: "2026-03-19",
          category: "Writing"
        },
        {
          taskNumber: 2,
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Test API",
          taskDescription: "API testing failed",
          taskDate: "2026-03-18",
          category: "Testing"
        }
      ]
    },

    {
      id: 5,
      firstName: "neha",
      email: "neha@example.com",
      password: "123",
      taskCounts: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0
      },
      tasks: [
        {
          taskNumber: 1,
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Marketing Plan",
          taskDescription: "Plan campaign",
          taskDate: "2026-03-20",
          category: "Marketing"
        },
        {
          taskNumber: 2,
          active: true,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Social Media",
          taskDescription: "Post updates",
          taskDate: "2026-03-16",
          category: "Marketing"
        }
      ]
    }
  ],

  admin: [
    {
      id: 101,
      firstName: "Anjali",
      email: "admin@example.com",
      password: "123"
    }
  ]
}

export const setLocalstorage = () => {
  localStorage.setItem('employees', JSON.stringify(data.employees))
  localStorage.setItem('admin', JSON.stringify(data.admin))
}

export const getLocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }
}
