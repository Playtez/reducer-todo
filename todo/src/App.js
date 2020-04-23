import React from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, reducer } from "./reducers/reducer";

function App() {
  const [todoState, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <h1> Todo App!</h1>
        <TodoForm dispatch={dispatch} />
        <TodoList todoState={todoState} dispatch={dispatch} />
      </header>
    </div>
  );
}

export default App;
