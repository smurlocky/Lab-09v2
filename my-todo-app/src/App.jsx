import { useState } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import TaskList from './components/TaskList'
import './App.css'

function App() {


  return (
    <div>
      <Header />
      <AddTask />
      <TaskList />
    </div>
  )
}

export default App
