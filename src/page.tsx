import React from "react";
import "./App.css";
import { addTodo, decrement, increment, removeTodo } from "./store/mySlice";
import { useAppDispatch, useAppSelector } from "./hooks";

function Page() {
  const count = useAppSelector((state) => state.myReducer.count);
  const todos = useAppSelector((state) => state.myReducer.todo);
  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        marginLeft: "500px",
      }}
    >
      <button onClick={() => dispatch(increment())}>Инкремент</button>
      <button onClick={() => dispatch(decrement())}>Декремент</button>
      <div>{count}</div>
      <button onClick={() => dispatch(addTodo(prompt()))}>Добавить ТУДУ</button>
      <button onClick={() => dispatch(removeTodo())}>Удалить ТУДУ</button>
      <div>
        {todos.map((item) => (
          <h1>{item}</h1>
        ))}
      </div>
    </div>
  );
}

export default Page;
