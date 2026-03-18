import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Header = () => {
  const { tasks } = useContext(TaskContext);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <header>
      <h1>Meu To-do App</h1>
      <p>Total de tarefas: {total}</p>
      <p>Concluídas: {completed}</p>
    </header>
  );
};

export default Header;
