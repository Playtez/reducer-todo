import React from "react";
import "./Todo.css";

const TodoList = ({ todoState, dispatch }) => {
  console.log({ todoState });
  return (
    <>
      {todoState.map(todo => {
        return (
          <div
            key={todo.id}
            className={todo.completed ? " toggle-on" : "toggle-off"}
          >
            <h1 onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}>
              {todo.item}
            </h1>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
