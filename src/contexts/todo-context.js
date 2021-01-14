import React, { useReducer, createContext } from "react"
import { makeid }  from "../utils/utils"

export const TodoContext = createContext()

const initialState = {
  todos: [
    {
      id: makeid(24),
      title: "First",
      subtitle: "Todo",
      category: "Places",
      done: false
    }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload]
      }
    case "DONE_TODO":
      return {
        todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, done: action.payload.done} : {...todo})
      }
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    default:
      throw new Error()
  }
}

export const TodoContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <TodoContext.Provider value={[state, dispatch]}>{props.children}</TodoContext.Provider>
}