import React from "react";

// import local

const TodoForm = ({ dispatch }) => {
  const [newText, setNewText] = React.useState("");

  const handleChanges = e => {
    setNewText(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    dispatch({ type: "UPDATE_TODO", payload: newText });
  };

  const deleteItems = e => {
    e.preventDefault();
    dispatch({ type: "DELETE_TODO", completed: true });
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          name="todo"
          type="text"
          value={newText}
          onChange={handleChanges}
          placeholder="i.e. Do laundry..."
        />
        <button>Add Todo</button>
        <button onClick={deleteItems}>clear completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
