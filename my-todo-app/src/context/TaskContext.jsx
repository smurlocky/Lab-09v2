import React, { children, createContext, useState } from "react";

export const TaskContext = React.createContext()

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (title) => {
      console.log(title)
      const newTask = {id: Date.now(), title, completed: false}; setTasks ([...tasks, newTask]);
    };

    const toggleTask = (id) => {
      setTasks(
        tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task)
      );
    };

    return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}