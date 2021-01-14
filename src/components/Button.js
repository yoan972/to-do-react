import React from "react"
import { css } from "@emotion/react"

const modal__btn = css`
  border: 1px solid rgb(0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  height: 40px;
  line-height: 1.5;
  margin: 1em 0.1em;
  padding: 0px;
  width: 140px;
  color: #fff;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  transition: 0.3s;
`
const themes = {
  blue: '#3598fe',
  red: 'red'
}

const Button = ({ label, action, theme }) => {
  return <button css={[modal__btn, css`background-color: ${themes[theme]}`]} onClick={action}>{label}</button>
}

export default Button