import React, { useReducer, createContext } from "react"

export const TodoContext = createContext()

const initialState = {
  todos: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload]
      }
    case "DONE_TODO":
      return {

      }
    default:
      throw new Error()
  }
}

export const TodoContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <TodoContext.Provider value={[state, dispatch]}>{props.children}</TodoContext.Provider>
}