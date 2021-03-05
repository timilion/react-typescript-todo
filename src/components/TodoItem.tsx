import React from "react";
import { ITodo } from "../intarfaces";

type TodoItemProps = {
  todo: ITodo;
  onToggle(id: number): void;
  onRemove(id: number): void;
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  const classes = ["todo"];

  if (todo.completed) {
    classes.push("completed");
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <li className={classes.join(" ")}>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
        <span>{todo.title}</span>
        <i className="material-icons red-text" onClick={(event) => removeHandler(event, todo.id)}>
          delete
        </i>
      </label>
    </li>
  );
};
