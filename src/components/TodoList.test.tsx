import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ITodo } from "../intarfaces";

import { TodoList } from "./TodoList";

let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const testFakeFunction = (): void => {};

it("renders TodoList", (): void => {
  act(() => {
    render(<TodoList todos={[]} onToggle={testFakeFunction} onRemove={testFakeFunction} />, container);
  });

  expect(container.querySelector(".center").textContent).toBe("Список пуст!");

  const testArray: ITodo[] = [
    {
      title: "test",
      id: 1,
      completed: false,
    },
    {
      title: "test 2",
      id: 2,
      completed: true,
    },
  ];
  act(() => {
    render(<TodoList todos={testArray} onToggle={testFakeFunction} onRemove={testFakeFunction} />, container);
  });
  expect(container.querySelectorAll("ul li").length > 0).toBeTruthy();
});
