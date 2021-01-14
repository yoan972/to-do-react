import React, { useContext, useState } from "react"
import Modal from "./Modal"
import { css } from "@emotion/react"
import { TodoContext } from "../contexts/todo-context"
import { modal__title, modal__btn } from "../style/modal"
import Button from "./Button"

const DoneModal = ({todo, setShowModal}) => {
  const [state, dispatch] = useContext(TodoContext)

  const handleDoneTodo = () => {
    dispatch({
      type: "DONE_TODO",
      payload: {
        id: todo.id,
        done: true
      }
    })
    
    setShowModal(false)
  }

  const handleRemoveTodo = () => {
    dispatch({
      type: "REMOVE_TODO",
      payload: {
        id: todo.id
      }
    })

    setShowModal(false)
  }

  return (
    <Modal>
      <h2 css={modal__title}>Que voulez vous faire ?</h2>
      <Button label="Terminer" action={handleDoneTodo} theme="blue"/>
      <Button label="Supprimer" action={handleRemoveTodo} theme="red"/>
    </Modal>
  )
}

export default DoneModal