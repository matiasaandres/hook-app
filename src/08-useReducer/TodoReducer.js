
export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("Ation.type = ABC no esta implmentado");
    default:
      return initialState;
  }
};
