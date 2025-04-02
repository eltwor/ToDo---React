import './AddForm.module.css'
import { useState } from 'react';

interface AddFormProps {
  onClose: () => void;
  onAdd: (taskData:Object) => void;
}

function AddForm({ onClose,onAdd }: AddFormProps) {

  const [task, setTask] = useState("");

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.currentTarget.value);
  }

  function addPost(event: React.MouseEvent<HTMLInputElement>) {
    event.preventDefault();
    const taskData = {
        id: Math.random(),
        taskText: task,
        isCompleted: false
    }
    onAdd(taskData);
    onClose();
  }
  return (
    <form>
      <label>Task</label>
      <input type="text" onChange={changeHandler}></input>
      <div className='button-group'>
      <button onClick={onClose}>Close</button>
      <button onClick={addPost}>Add</button></div>
    </form>
  );
}

export default AddForm;
