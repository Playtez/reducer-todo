export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];
    case "TOGGLE":
      return state.map(todo => {
        console.log({ stateHere: state });
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case "DELETE_TODO":
      return state.filter(todo =>
        todo.completed === action.completed ? false : true
      );
    default:
      return state;
  }
};
