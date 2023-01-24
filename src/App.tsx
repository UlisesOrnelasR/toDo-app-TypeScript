//common
import "./App.css";
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";

//hook
import { useToDoHook } from "./hooks/useToDoHook";

function App() {
  const [toDos, dispatch] = useToDoHook();
  console.log(toDos)

  const createToDoHandler = (newToDoText: string): void => {
    dispatch({
      type: "add",
      payload: {
        text: newToDoText
      }
    })
  }

  const deleteToDoHandler = (id: string):void => {
    dispatch({
      type: "delete",
      payload: {
        id: id
      }
    })
  }

  const updateToDoHandler = (id: string): void => {
    dispatch({
      type: "update",
      payload: {
        id: id
      }
    })
  }

  return (
    <div className="App px-8 py-16">
      <h2
        className="text-3xl text-center font-bold text-primary"
      >ToDo list TypeScript</h2>
      <Form createToDo={createToDoHandler} />
      <Todo todoData={toDos} deleteToDo={deleteToDoHandler} updateToDo={updateToDoHandler} />
    </div>
  );
}

export default App;
