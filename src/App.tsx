import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import AddForm from "./components/AddForm";
function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <button onClick={() => setModalOpen(true)}>Dodaj</button>
      {isModalOpen && <AddTodo onClose={handleClose}><AddForm onClose={handleClose}/></AddTodo>}
      <Todo />
    </>
  );
}

export default App;
