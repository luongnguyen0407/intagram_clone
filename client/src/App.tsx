import { useReducer, useRef } from "react";

type TodoAction =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };
interface Todo {
  id: number;
  text: string;
}
const reducerTodo = (state: Todo[], action: TodoAction) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
        },
      ];
    case "REMOVE":
      return state.filter((todo: Todo) => todo.id !== action.id);
    default:
      throw new Error("");
  }
};
const initialState: Todo[] = [];

function App() {
  const [todos, dispatch] = useReducer(reducerTodo, initialState);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleDelete = (id: number) => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };
  const addTodo = () => {
    if (inputRef.current) {
      dispatch({
        type: "ADD",
        text: inputRef.current.value,
      });
      inputRef.current.value = "";
    }
  };
  return (
    <div className="App p-5">
      <Heading title="Todo App With TypeScript" />
      <div className="my-3">
        {todos.map((todo: Todo) => (
          <div className="flex gap-x-3 items-center" key={todo.id}>
            <p>{todo.text}</p>
            <button
              onClick={() => handleDelete(todo.id)}
              className="p-2 bg-red-400 text-white rounded-md"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-x-2 mt-3">
        <input
          ref={inputRef}
          type="text"
          className="p-2 borer border-slate-400 border outline-none rounded-sm"
        />
        <button
          onClick={addTodo}
          className="rounded-sm text-white p-2 bg-green-400 border-none"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

const Heading = ({ title }: { title?: string }) => {
  return <h1>{title}</h1>;
};

export default App;
