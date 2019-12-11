import React from "react";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            <h1 onClick={() => toggleTodo(todo.id)}>{todo.todo}</h1>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
