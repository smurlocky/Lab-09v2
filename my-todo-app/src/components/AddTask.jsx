import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleAdd = () => {
    if (title.trim() === "") return;
    addTask(title);
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
};

export default AddTask;
