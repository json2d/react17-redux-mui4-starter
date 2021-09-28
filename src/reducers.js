import { combineReducers } from "redux";

export const greeter = (state = {}, action) => {
  switch (action.type) {
    case "SET_NAME": {
      const { name } = action.payload;
      return { ...state, name };
      break;
    }
  }

  return state;
};

export const combined = combineReducers({
  greeter
});
