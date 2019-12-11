import React from "react";

const DisplayTodo = ({ id, dispatch, todo }) => {
  return (
    <div onClick={() => dispatch({ type: "TOGGLE", payload: id })}>{todo}</div>
  );
};

export default DisplayTodo;
