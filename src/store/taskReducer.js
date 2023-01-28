import * as actionTypes from "./actionTypes"

export function taskReducer(state = [], action) {
  const newArray = [...state]
  
  switch (action.type) {
    case actionTypes.taskUpdate: {
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );

      newArray[elementIndex] = {
        ...newArray[elementIndex],
        ...action.payload,
      };
      return newArray;
    }

    case actionTypes.taskRemove: {
      return newArray.filter(el => el.id !== action.payload.id)
    }

    default:
      return state;
  }
}
