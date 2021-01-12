import React, { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { Global, css, keyframes } from "@emotion/react"

const fadeIn = keyframes`
  0% {
  opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const slideIn = keyframes`
  0% {
    bottom: -300px;
    opacity: 0;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
`

const modal = css`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  animation-name: ${fadeIn};
  animation-duration: 0.4s;
`
const modal__content = css`
  background-color: #fefefe;
  position: relative;
  bottom: 0;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 97%;
  max-width: 480px;
  border-radius: 10px;
  text-align: center;
  animation-name: ${slideIn};
  animation-duration: 0.4s;
`
const close = css`
  float: right;
  color: #919099;
  cursor: pointer;
  font-size: 40px;
  transition: color 0.3s;

  &:hover {
    color: #000000
  }
`
const closeModal = () => {
  const modalRoot = document.getElementById("modal");
  modalRoot.removeChild(modalRoot.firstChild);
}

const ModalLayout = ({ children }) => {
  return (
    <div css={modal}>
      <div css={modal__content}>
        <span onClick={() => closeModal()} css={close}>×</span>
        {children}
      </div>
    </div>
  )
}

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<ModalLayout>{children}</ModalLayout>, elRef.current);
};

export default Modal;
