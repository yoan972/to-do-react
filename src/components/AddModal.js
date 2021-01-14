import React, { useContext, useState } from "react"
import Modal from "./Modal"
import { TodoContext } from "../contexts/todo-context"
import { makeid } from "../utils/utils"
import { modal__title, modal__input, modal__btn } from "../style/modal"
import Button from "./Button"

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
        category: category,
        done: false
      }
    })

    setShowModal(false)
  }

  return (
    <Modal>
      <h2 css={modal__title}>Ajouter une tache</h2>
      <input css={modal__input} type="text" placeholder="Titre..." value={title} id="title" onChange={handleInputCHange}></input>
      <input css={modal__input} type="text" placeholder="Sous-titre..." value={subtitle} id="subtitle" onChange={handleInputCHange}></input>
      <Button label="Ajouter" action= {handleAddTodo} theme="blue" />
    </Modal>
  )
}

export default AddModal 