const reducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return state.push(action.payload);
    case "delete":
      return state.shift(action.payload);
    default:
      return state;
  }
}

export default reducer;