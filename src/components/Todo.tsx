import { TodoType } from "../types/ToDos";

import { TiDelete } from 'react-icons/ti';


interface Props {
  todoData: Array<TodoType>;
  deleteToDo: (id: string) => void;
  updateToDo: (id: string) => void
}

export const Todo = ({ todoData, deleteToDo, updateToDo }: Props) => {

  if (todoData.length === 0) {
    return <h2>Nothing to show!</h2>
  }

  return (
    <ul
    className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
        {
          todoData.map((oneTodo) =>
          {
            return <li
              className="flex justify-between shadow-md p-3 text-dark hover:shadow-2xl hover:ease-in duration-300 rounded-lg"
              key={oneTodo.id}
            >
              <div>
                <h3
                className="font-bold"
                >{oneTodo.text}</h3>
                <p
                className="text-gray-500 text-sm mb-4"
                >{oneTodo.date}</p>
                <span
                  className={
                    oneTodo.isDone ? "text-green-500" : "text-red-500"
                }
                >
                  {oneTodo.isDone ? "Done" : "Not done"}
                </span>
              </div>
              <div
              className="flex flex-col items-center justify-between gap-3 w-1/3"
              >
                <div
                onClick={() => deleteToDo(oneTodo.id)}
              className="ml-auto cursor-pointer scale-150"
              >
                <TiDelete/>
                </div>
                <button
                  className="bg-green-500 text-white rounded-md p-1 hover:bg-green-600"
                  onClick={()=> updateToDo(oneTodo.id)}
                >
                  Switch status
                </button>
              </div>
            </li>}
          )
        }
      </ul>
  )
}
