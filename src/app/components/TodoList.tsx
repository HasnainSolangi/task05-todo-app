"use client";
import { FC, useState } from "react";

interface TodoListProps {
  tasks: string[];
  deleteTask: (index: number) => void;
  editTask: (index: number, newTask: string) => void;
}

const TodoList: FC<TodoListProps> = ({ tasks, deleteTask, editTask }) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState<string>("");

  const handleSave = (index: number) => {
    if (editedTask.trim() !== "") {
      editTask(index, editedTask);
      setEditIndex(null);
      setEditedTask("");
    }
  };

  return (
    <ul className="mt-6 space-y-4">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex flex-col sm:flex-row items-start sm:items-center px-4 py-2 bg-gray-100 rounded shadow-sm"
        >
          {/* Index and task */}
          <div className="flex items-center gap-x-0 w-full">
            <span className="font-bold w-6 text-gray-600">{index + 1}.</span>
            {editIndex === index ? (
              <input
                type="text"
                className="flex-1 min-w-0 px-2 py-1 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
            ) : (
              <span className="truncate flex-1">{task}</span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2 ml-0 sm:ml-4 mt-2 sm:mt-4 w-full sm:w-auto">
            {editIndex === index ? (
              <button
                onClick={() => handleSave(index)}
                className="w-20 h-8 flex justify-center items-center bg-blue-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditIndex(index);
                  setEditedTask(task);
                }}
                className="w-20 h-8 flex justify-center items-center bg-blue-500 text-white rounded hover:bg-green-600"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => deleteTask(index)}
              className="w-20 h-8 flex justify-center items-center bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
