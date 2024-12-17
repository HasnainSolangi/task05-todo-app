"use client";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const Home = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => setTasks((prev) => [...prev, task]);

  const deleteTask = (index: number) =>
    setTasks((prev) => prev.filter((_, i) => i !== index));

  const editTask = (index: number, newTask: string) =>
    setTasks((prev) => prev.map((task, i) => (i === index ? newTask : task)));

  return (
    <div className="w-full max-w-md sm:max-w-lg p-6 bg-white rounded-lg shadow-lg mt-8 mx-auto">
      <h1 className="bg-yellow-400 text-2xl font-bold text-center mb-6 p-2 rounded-md">
        To-Do List
      </h1>
      <div className="w-full p-6 bg-white rounded-lg overflow-hidden">
        <TodoInput addTask={addTask} />
        <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </div>
  );
};

export default Home;
