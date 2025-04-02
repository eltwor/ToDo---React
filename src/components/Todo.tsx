import classes from "./Todo.module.css";
type Task = {
  id: number;
  taskText: string;
  isCompleted: boolean;
};

type TodoProps = {
  tasks: Task[];
  onDelete: (id: number) => void;
  toggleCompleted: (id: number) => void;
};

function Todo({ tasks, onDelete, toggleCompleted }: TodoProps) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              className={`${classes.taskItem} ${
                task.isCompleted ? classes.completed : classes.uncompleted
              }`}
            >
              {task.taskText}
            </span>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleCompleted(task.id)}
            ></input>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => onDelete(task.id)}
            >
              🗑️
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
