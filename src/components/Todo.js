import React, { useContext } from "react"
import { css } from "@emotion/react"
import AddButton from "./AddButton"
import { TodoContext } from "../contexts/todo-context"
import Item from "./Item"

const tab = css`
  width: 200%;
  display: flex;
`

const task = css`
  margin-left: 20px;
  width: 50%;
`
const task__group = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
  perspective: 100px;
`
const task__groupTitle = css`
  width: 100%;
  margin: 10px 0px;
  color: #919099;
  font-size: 18px;
`

const Todo = () => {
  const [state, dispatch] = useContext(TodoContext)
  return (
    <section css={tab}>
      <div css={task}>
          <section css={task__group}>
            <p css={task__groupTitle}>Places</p>
            {state.todos.map(todo => {
              return (
                !todo.done && todo.category === "Places" && <Item todo={todo} key={todo.id}/>
              )
            })}  
            <AddButton category="Places"/>
          </section>
          <section css={task__group}>
            <p css={task__groupTitle}>People</p>
            {state.todos.map(todo => {
                return (
                  !todo.done && todo.category === "People" && <Item todo={todo} key={todo.id}/>
                )
            })}  
            <AddButton category="People"/>
          </section>
        </div>
      </section>
  )
}

export default Todo