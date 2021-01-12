import React, { useContext, useState } from "react"
import Modal from "./Modal"
import { css } from "@emotion/react"
import { TodoContext } from "../contexts/todo-context"
import { makeid } from "../utils/utils"

const modal__input = css`
  height: 40px;
  width: 70%;
  font-size: 18px;
  margin: 12px;
`
const modal__btn = css`
  background-color: #3598fe;
  border: 1px solid rgb(0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  height: 40px;
  line-height: 1.5;
  margin: 1em auto;
  padding: 0px;
  width: 140px;
  color: #fff;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  transition: 0.3s;
`
const modal__title = css`
  color: #919099;
`

const AddModal = ({category, setShowModal}) => {
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [state, dispatch] = useContext(TodoContext)
  
  const handleInputCHange = e => {
    if (e.target.id === "title") {
      setTitle(e.target.value)
    } else if (e.target.id === "subtitle") {
      setSubtitle(e.target.value)
    }
  }

  const handleAddTodo = () => {
    if (!title || !subtitle) return
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: makeid(24),
        title,
        subtitle,
        category: category
      }
    })

    setShowModal(false)
  }

  return (
    <Modal>
      <h2 css={modal__title}>Ajouter une tache</h2>
      <input css={modal__input} type="text" placeholder="Titre..." value={title} id="title" onChange={handleInputCHange}></input>
      <input css={modal__input} type="text" placeholder="Sous-titre..." value={subtitle} id="subtitle" onChange={handleInputCHange}></input>
      <button css={modal__btn} onClick={handleAddTodo}>Ajouter</button>
    </Modal>
  )
}

export default AddModal 