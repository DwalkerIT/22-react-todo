import { useContext } from "react";
import { store } from "./Provider";

export default function TodoList(props) {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() =>
                dispatch({ type: "TOGGLE_STATUS", payload: todo.id })
              }
            />
            {todo.description}
            <span
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              x
            </span>
          </li>
        );
      })}
    </ul>
  );
}
