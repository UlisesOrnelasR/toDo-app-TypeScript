import React, { useState } from "react"

interface Props  {
    createToDo: (text: string) => void
}


export const Form = ({createToDo}: Props) => {

    const [toDoText, setToDoText] = useState<string>("")

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log("llego al submit")
        if (toDoText === "") return
        createToDo(toDoText)
        e.currentTarget.reset()
        setToDoText("")
    }

    const changeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setToDoText(e.currentTarget.value)
        console.log(toDoText)
    }

  return (
      <form onSubmit={submitHandler}
      className="flex flex-col items-center justify-center my-4"
      >
          <input
              type="text"
              name="newToDoText"
              onChange={changeHandler}
              className="border-2 border-primary rounded-lg p-2 mb-4"
          />
          <button type="submit" disabled={!toDoText}
          className="bg-primary text-white rounded-lg p-2 cursor-pointer"
          >Create ToDo</button>
    </form>
  )
}
