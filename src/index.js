import React from "react"
import ReactDOM from "react-dom"
import { Global, css } from "@emotion/react"


const App = () => (<div>
  <Global
      styles={{
        body: {
          margin: 0,
          backgroundColor: '#242133',
          color: '#fff',
          fontFamily: 'Roboto, sans-serif'
        }
      }}
    />
  Start
  </div>)

ReactDOM.render(<App />, document.getElementById("app"))