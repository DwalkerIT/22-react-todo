import { useContext } from "react";
import { store } from "./Provider";

export default function TodoList(props) {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <li className="todoItem" key={todo.id}>
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.isComplete}
              onChange={() =>
                dispatch({ type: "TOGGLE_STATUS", payload: todo.id })
              }
            />
            <span className={todo.isComplete == true ? "description" : ""}>
              {todo.description}
            </span>

            <span
              className="delete"
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
