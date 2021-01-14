import React, { useContext } from "react"
import { css } from "@emotion/react"
import { TodoContext } from "../contexts/todo-context"

const stat = css`
  display: flex;
`
const stat__tab = css `
  width: 50%;
  padding: 20px 0px;
  text-align: center;
  border-top: 1px solid #919099;
  border-bottom: 1px solid #919099;
  cursor: pointer;
  text-align: center;
  margin: 0;
  font-size: 20px;
`

const stat__tabActive = css `
  border-top-color: #3598fe;
`
const bold = css`
  font-weight: bold;
`

const Counter = () => {
  const [state, dispatch] = useContext(TodoContext)

  return (
    <section css={stat}>
			<div css={stat__tab}>
				<p><span css={bold}>{state.todos.length}</span><br/> created tasks</p>
			</div>
			<div css={stat__tab}>
				<p><span css={bold}>{state.todos.filter(todo => todo.done).length}</span><br/> completed tasks</p>
			</div>
		</section>
  )
}

export default Counter