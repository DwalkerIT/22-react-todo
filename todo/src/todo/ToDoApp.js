import { useContext, useState } from "react";
import StateProvider from "./Provider";
import Todo from "./Todo";

export default function ToDoApp() {
  return (
    <StateProvider>
      <Todo />
    </StateProvider>
  );
}

// Provider: provides the value (state)
// action: object that describes what happened {type: 'ADD_TODO', payload: 'text'}
// reducer: takes the state and action and reduces to a new state
// store is a combination of reducers that hold state
