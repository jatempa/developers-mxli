import React from "react"
import styled from "styled-components"

const ProfilePicture = styled.img`
  width: 100%;
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
