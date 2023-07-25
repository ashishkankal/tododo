const initialState = [];

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [{ ...payload, completed: false }, ...state];

    case "COMPLETE_TODO": {
      const mutatedState = [...state];
      const index = mutatedState.findIndex((item) => item.id === payload.id);
      mutatedState[index] = {
        ...mutatedState[index],
        completed: !mutatedState[index].completed,
      };
      return [
        ...mutatedState.filter((item) => !item.completed),
        ...mutatedState.filter((item) => item.completed),
      ];
    }
    case "DELETE_TODO": {
      const mutatedState = [...state];
      const index = mutatedState.findIndex((item) => item.id === payload.id);
      mutatedState.splice(index, 1);
      return mutatedState;
    }

    case "CLEAR_TODO": {
      return initialState;
    }
    default:
      return state;
  }
};

export default todoReducer;
