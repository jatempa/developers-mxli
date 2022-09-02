import React from "react"
import styled from "styled-components"

const ProfilePicture = styled.img`
  height: 250px;

  @media (max-width: 800px) {
    height: 200px;
  }

  @media (max-width: 600px) {
    height: 150px;
  }
`

const Picture = props => {
  const { picture } = props

  return (
    <ProfilePicture
      src={`../../images/${picture ?? "default_profile.svg"}`}
      alt="profile-picture"
    />
  )
}

export default Picture
