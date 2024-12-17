import { FC, useState } from "react";

interface TodoInputProps {
  addTask: (task: string) => void;
}

const TodoInput: FC<TodoInputProps> = ({ addTask }) => {
  const [task, setTask] = useState<string>("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 mt-4 w-full">
      <input
        type="text"
        className="w-full min-w-0 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleAddTask}
        className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600 mt-2 sm:mt-0"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
