import React, { useState } from "react"
import { css } from "@emotion/react"
import DoneModal from "./DoneModal"

const task__item = css`
  background-color: #123456;
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
const themes = {
  Places: {
    backgroundColor: '#3598fe'
  },
  People: {
    backgroundColor: '#f95959'
  }
}

const Item = ({todo}) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
    <div css={[task__item, css({backgroundColor: `${themes[todo.category].backgroundColor}`})]} onClick={() => setShowModal(!showModal)}>
      <p css={task__itemTitle}>{todo.title}</p>
      <p css={task__itemSubtitle}>{todo.subtitle}</p>
    </div>
    {showModal && <DoneModal todo={todo} setShowModal={setShowModal} />}
    </>
  )
}

export default Item