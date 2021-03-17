import { useContext, useState } from "react";
import TodoList from "./TodoList";
export default function Todo() {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const [text, setText] = useState("");

  const todos = globalState.state.todos;
  const count = globalState.state.count;

  
  function handleSubmit(e) {
    e.preventDefault();
    // const action = { type: "ADD_TODO", payload: text };
 
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  }
 
  return (
    <div>
      {count}

      <button onClick={() => dispatch({ type: "DELETE_TODO", payload: 1 })}>
        delete todo at id
      </button>
      <button
        onClick={() => dispatch({ type: "INCREMENT_COUNT_BY", payload: 10 })}
      >
        increment by
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}
