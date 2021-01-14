import React, { useState } from "react"
import { css } from "@emotion/react"
import AddModal from "./AddModal"

const task__add = css`
  background-color: #919099;
  border-radius: 5px;
  font-size: 30px;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  width: 23%;
  min-width: 102px;
  line-height: 102px;
  transition: 0.3s;

  &:hover {
    background-color: #504f56;
  }
`
const AddButton = ({category}) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
    <div css={task__add} onClick={() => setShowModal(!showModal)} >+</div>
    {showModal && <AddModal category={category} setShowModal={setShowModal} />}
    </>
  )
}

export default AddButton