import { use, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import AddForm from "./components/AddForm";

type Task = {
  id: number; // Math.random() returns a number
  taskText: string;
  isCompleted: boolean;
};

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleClose = () => {
    setModalOpen(false);
  };

  const [tasks, setTasks] = useState<Task[]>([]); // empty array

  function handleAdding(taskData: Task) {
    setTasks((existingTasks) => [taskData, ...existingTasks]);
  }

  function deleteHandler(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleCompleted(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Dodaj</button>
      {isModalOpen && (
        <AddTodo onClose={handleClose}>
          <AddForm onClose={handleClose} onAdd={handleAdding} />
        </AddTodo>
      )}
      {tasks.length === 0 && <p>Pusta lista taskow</p>}
      {tasks.length > 0 && (
        <Todo
          tasks={tasks}
          onDelete={deleteHandler}
          toggleCompleted={handleCompleted}
        />
      )}
    </>
  );
}

export default App;
