import { createContext, useState, useEffect, useContext } from "react";
import { useToDoHook } from "../hooks/useToDoHook";
import { TodoType } from "../types/ToDos";

interface ToDoProviderProps {
  children: React.ReactNode;
}

interface ToDoContextProps {
    toDos: TodoType[];
    createToDoHandler: (newToDoText: string) => void;
    deleteToDoHandler: (id: string) => void;
    updateToDoHandler: (id: string) => void;
}

const ToDoContext = createContext({} as ToDoContextProps);
export const useToDoContext = () => useContext(ToDoContext);

export const ToDoProvider = ({ children }: ToDoProviderProps) => {
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
        <ToDoContext.Provider value={{ toDos, createToDoHandler, deleteToDoHandler, updateToDoHandler }}
        >
        {children}
        </ToDoContext.Provider>
    );
}
