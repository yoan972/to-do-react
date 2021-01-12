import React, { useContext } from "react"
import { css } from "@emotion/react"
import AddButton from "./AddButton"
import { TodoContext } from "../contexts/todo-context"

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

const task__item = css`
  background-color: #3598fe;
  border-radius: 5px;
  width: 45%;
  min-width: 102px;
  padding: 30px 20px;
  margin: 5px;
  cursor: pointer;
  font-size: 18px;
`

const task__itemTitle = css`
  font-weight: bold;
`

const task__itemSubtitle = css`
  color: #cecdd4;
`
const Todo = () => {
  const [state, dispatch] = useContext(TodoContext)
  return (
    <section css={tab}>
      <div css={task}>
          <section css={task__group}>
            <p css={task__groupTitle}>Places</p>
            {state.todos.map(todo => {
              if (todo.category === "Places") {
                return (
                  <div key={todo.id} css={task__item}>
                    <p css={task__itemTitle}>{todo.title}</p>
                    <p css={task__itemSubtitle}>{todo.subtitle}</p>
                  </div>
                )
              }
            })}  
            <AddButton category="Places"/>
          </section>
          <section css={task__group}>
            <p css={task__groupTitle}>People</p>
            {state.todos.map(todo => {
              if (todo.category === "People") {
                return (
                  <div key={todo.id} css={task__item}>
                    <p css={task__itemTitle}>{todo.title}</p>
                    <p css={task__itemSubtitle}>{todo.subtitle}</p>
                  </div>
                )
              }
            })}  
            <AddButton category="People"/>
          </section>
        </div>
      </section>
  )
}

export default Todo