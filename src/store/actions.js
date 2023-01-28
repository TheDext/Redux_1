import * as actionTypes from "./actionTypes"

export function taskCompleted(id) {
  return {
    type: actionTypes.taskUpdate,
    payload: { id, completed: true },
  };
}

export function titleChanged(id) {
  return {
    type: actionTypes.taskUpdate,
    payload: { id, title: `New title for id ${id}` },
  };
}

export function taskRemoved(id) {
  return {
    type: actionTypes.taskRemove,
    payload: {id}
  }
}
