import { TodoType } from "../types/ToDos";


interface Props {
  todoData: Array<TodoType>;
  deleteToDo: (id: string) => void;
}

export const Todo = ({ todoData, deleteToDo }: Props) => {

  if (todoData.length === 0) {
    return <h2>Nothing to show!</h2>
  }

  return (
    <ul>
        {
          todoData.map((oneTodo) =>
          {
            return <li
              key={oneTodo.id}
            >
              <h3>{oneTodo.text}</h3>
              <p>{oneTodo.date}</p>
              <button
                onClick={() => deleteToDo(oneTodo.id)}
              >DELETE</button>
            </li>}
          )
        }
      </ul>
  )
}
