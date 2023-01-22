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

  return (
    <div className="App">
      <h2>ToDo list TypeScript</h2>
      <Form createToDo={createToDoHandler} />
      <Todo todoData={toDos} deleteToDo={deleteToDoHandler}  />
    </div>
  );
}

export default App;
