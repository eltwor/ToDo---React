import './AddForm.module.css'

interface AddFormProps {
  onClose: () => void;
}

function AddForm({ onClose }: AddFormProps) {
  return (
    <form>
      <label>Task</label>
      <input type="text"></input>
      <div className='button-group'>
      <button onClick={onClose}>Close</button>
      <button onClick={onClose}>Add</button></div>
    </form>
  );
}

export default AddForm;
