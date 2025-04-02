import { ReactNode } from "react";
import classes from "./AddTodo.module.css";

interface AddTodoProps {
  onClose: () => void;
  children: ReactNode;
}

function AddTodo({ onClose,children }: AddTodoProps) {
  return (
    <>
    <div className={classes.backdrop} onClick={onClose} />
    <dialog open className={classes.modal}>
    {children}
    </dialog></>
  );
}
export default AddTodo;
