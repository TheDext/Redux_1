import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import * as actions from "./store/actions"
import { initiateStore } from "./store/store";

const store = initiateStore();

const App = (params) => {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  const completedTask = (taskId) => {
    store.dispatch(actions.taskCompleted(taskId));
  };

  const changeTitle = (taskId) => {
    store.dispatch(actions.titleChanged(taskId));
  };

  const removeTask = (taskId) => {
    store.dispatch(actions.taskRemoved(taskId));
  }

  return (
    <>
      <h1>App</h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.description}</p>
            <p>{`Completed:${el.completed}`}</p>
            <p>{`Title:${el.title}`}</p>
            <hr />
            <button onClick={() => completedTask(el.id)}>Completed</button>
            <button onClick={() => changeTitle(el.id)}>Change title</button>
            <button onClick={() => removeTask(el.id)}>Remove task</button>
          </li>
        ))}
      </ul>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
