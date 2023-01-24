//Providers
import { ToDoProvider } from "./context/ToDoContext";
//common
import "./App.css";
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";

function App() {
 
  return (
    <ToDoProvider>
    <div className="App px-8 py-16">
      <h2
        className="text-3xl text-center font-bold text-primary"
        >ToDo list TypeScript</h2>
        <Form  />
        <Todo />
      </div>
    </ToDoProvider>
  );
}

export default App;
