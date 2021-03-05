import React from "react";
import { ITodo } from "../intarfaces";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  if (todos.length === 0) {
    return <p className="center">Список пуст!</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} key={todo.id} />
      ))}
    </ul>
  );
};
