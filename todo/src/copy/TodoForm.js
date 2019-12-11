import React from "react";

// import local

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = React.useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(newTodo);
        }}
      >
        <input
          name="todo"
          type="text"
          value={newTodo}
          onChange={handleChanges}
          placeholder="i.e. Do laundry..."
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
