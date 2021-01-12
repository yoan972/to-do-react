import React from "react"
import ReactDOM from "react-dom"
import { Global } from "@emotion/react"
import Profile from "./components/Profile"
import { TodoContextProvider } from "./contexts/todo-context"
import Todo from "./components/Todo"

const App = () => (<div>
  <Global
      styles={{
        '*': { 
          boxSizing: 'border-box' 
        },
        body: {
          margin: 0,
          backgroundColor: '#242133',
          color: '#fff',
          fontFamily: 'Roboto, sans-serif'
        },
        p: {
          margin: '0'
        },
        '#app': {
          width: '100%',
          maxWidth: '480px',
          margin: 'auto',
          overflow: 'hidden'
        }
      }}
    />
  <Profile />
  <TodoContextProvider>
    <Todo/>
  </TodoContextProvider>
  </div>)

ReactDOM.render(<App />, document.getElementById("app"))