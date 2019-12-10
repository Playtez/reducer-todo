import React from "react";

import { initialState, reducer } from "../reducers/reducer";

const TodoList = () => {
  const [todoState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <h1>{todoState.item}</h1>
    </div>
  );
};

export default TodoList;
