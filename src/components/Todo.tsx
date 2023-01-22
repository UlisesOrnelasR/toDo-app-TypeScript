import { TodoType } from "../types/ToDos";

import { TiDelete } from 'react-icons/ti';


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
              className="shadow-md p-3 my-5 text-dark hover:bg-secondary hover:ease-in duration-300 hover:text-white rounded-lg flex"
              key={oneTodo.id}
            >
              <div>
                <h3
                className="font-bold"
                >{oneTodo.text}</h3>
                <p>{oneTodo.date}</p>
              </div>
              <div
                onClick={() => deleteToDo(oneTodo.id)}
              className="ml-auto cursor-pointer scale-150"
              >
                <TiDelete/>
              </div>
            </li>}
          )
        }
      </ul>
  )
}
