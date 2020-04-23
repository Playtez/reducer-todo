import React from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// import { initialState, reducer } from "./reducers/reducer";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO: {
      return state.concat({
        id: state.length + 1,
        todo: action.data,
        completed: false
      });
    }
    case TOGGLE_TODO: {
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    }
    case DELETE_TODO: {
      return state.filter(todo => (todo.id === action.id ? false : true));
    }
    default: {
      // throw new Error(`Please provide a valid case for type - ${action.type}`)
      return state;
    }
  }
}

const initialState = [];

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  // const [todoState, dispatch] = React.useReducer(reducer, initialState);

  const addTodo = todo => {
    dispatch({ type: ADD_TODO, data: todo });
  };

  const toggleTodo = id => {
    dispatch({ type: TOGGLE_TODO, id });
  };

  const deleteTodo = id => {
    dispatch({ type: DELETE_TODO, id });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Todo App!</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={state}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </header>
    </div>
  );
}

export default App;
