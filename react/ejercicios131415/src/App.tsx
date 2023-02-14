import { useState } from 'react'
import { TaskList } from './components/containers/taskList'
import { TaskForm } from './components/taskForm'
import { TaskContextProvider } from './context/taskContext'
function App() {
  return (
    <div>
      <TaskForm />
    </div>
  )
}

export default App
