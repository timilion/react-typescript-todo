import React, { useState } from "react";

interface TodoProps {
  addHandler(title: string): void;
}

export const TodoForm: React.FC<TodoProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.addHandler(title);
    setTitle("");
  };

  return (
    <div className="row mt2">
      <form onSubmit={submitHandler}>
        <div className="input-field col s10">
          <input onChange={inputHandler} value={title} id="todoInput" type="text" />
          <label htmlFor="todoInput">Введите название</label>
        </div>
        <div className="input-field col s2">
          <button className="btn waves-effect waves-light  indigo darken-4 btn-block" type="submit" name="action">
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
};
