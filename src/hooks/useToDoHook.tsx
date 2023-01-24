import { useReducer } from 'react';
//Deps
import { v4 as uuidv4 } from 'uuid';
// types
import { ToDoAction, TodoType } from "../types/ToDos";

const toDosReducer = (state: Array<TodoType>, action: ToDoAction): Array<TodoType> => {
  switch (action.type) {
    case "add":
      return [...state,
        {
          id: uuidv4(),
          text: action.payload.text,
          date: new Date().toLocaleDateString(),
          isDone: false
        }
      ]
    case "delete":
      return state.filter(oneToDo => oneToDo.id !== action.payload.id)
    case "update":
      return state.map(oneToDo => {
        if (oneToDo.id === action.payload.id) {
                console.log(oneToDo.isDone)
                return oneToDo.isDone === false ? {...oneToDo, isDone: true} : {...oneToDo, isDone: false}
              }
              return oneToDo
        })
    default: 
      return state
  }
}

const INITIAL_STATE = [
    {
      id: uuidv4(),
      text: "Learn more JS",
      date: new Date().toLocaleDateString(),
      isDone: false
    },
    {
      id: uuidv4(),
      text: "Practice and thinking",
      date: new Date().toLocaleDateString(),
      isDone: true
    },
    {
      id: uuidv4(),
      text: "Chill",
      date: new Date().toLocaleDateString(),
      isDone: false
    }
  ]

export const useToDoHook = () => useReducer(toDosReducer, INITIAL_STATE)
