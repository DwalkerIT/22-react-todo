import { createContext, useReducer } from "react";

const initialState = {
  todos: [
    { id: 1, description: "hello" },
    { id: 2, description: "bye" },
  ],
  count: 0,
  banana: false,
};
export const store = createContext(initialState);
const { Provider } = store;

// arr.reduce
// [1,2,3].reduce((a, b) => a + b, 10) // 16

const id = () => Math.random().toString() + Math.random().toString();

// function id() {
//   return Math.floor(Math.random() * 100);
// }

function todoReducer(state, action) {
  // console.log(state, action);
  switch (action.type) {
    case "ADD_TODO":
      const newState = {
        ...state,
        todos: [
          ...state.todos,
          { id: id(), description: action.payload, isComplete: false },
        ],
      };
      return newState;
    case "DELETE_TODO":
      //filter by id somehow
      // action.payload
      const idToRemove = action.payload;
      // const arr = [1,2,3]
      // const moreThanOne = arr.filter(item => item > 1)
      const newTodos = state.todos.filter((todo) =>
        todo.id == idToRemove ? false : true
      );
      return { ...state, todos: newTodos };

    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      throw new Error();
    case "TOGGLE_STATUS":
      const transfromedTodos = state.todos.map((todo) => {
        const todoToToggleId = action.payload;
        if (todo.id === todoToToggleId) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
      return { ...state, todos: transfromedTodos };
      console.log(action);
    //boolean

    case "INCREMENT_COUNT_BY":
      return { ...state, count: state.count + action.payload };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
}

const StateProvider = ({ children }) => {
  // {type: 'ADD_TODO', payload: 'hello'}
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default StateProvider;
