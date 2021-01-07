import React from "react"
import ReactDOM from "react-dom"
import { css } from "@emotion/react"
import profilePic from "./../images/profil_pic.jpg"

const profile = css`
margin: 2em;
text-align: center;
`
const profile__pic = css`
width: 200px;
height: 200px;
border-radius: 50%;
background: url(${profilePic}) center no-repeat;
background-size: cover;
margin: 20px auto;
`

const profile__name = css`
  .firstName {
    font-size: 28px;
    font-weight: bold;
  }

  .lastName {
    font-size: 20px;
    color: #919099;
  }
`

const Profile = () => (
    <section css={profile}>
			<div css={profile__pic}></div>
			<div css={profile__name}>
				<p className="firstName">Laura</p>
				<p className="lastName">Ls</p>
			</div>	
		</section>
)

export default Profile