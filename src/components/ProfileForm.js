import React, { useState } from "react"
import styled from "styled-components"
import useInput from "../hooks/useInput"

const ProfileFormContainer = styled.div`
  font-size: 1.2rem;
  padding: 25px;
  margin: 2em auto;
  width: 60%;

  & > h1 {
    margin-bottom: 0.75em;
    text-align: center;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`

const ProfileFormButton = styled.button`
  margin-top: 0.75em;
  width: 100%;
  height: 50px;
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: white;
  border: 1px solid black;
  outline: none;

  &:hover {
    border: none;
    color: white;
    background-color: rgb(87, 174, 245);
  }
`

const ProfileFormInputContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & > input {
    height: 30px;
    max-height: 30px;
    width: 80%;
  }

  & > input#employed {
    width: 5%;
  }
`

const ProfileForm = ({ title = "" }) => {
  const [firstNameProps, resetFirstName] = useInput("")
  const [lastNameProps, resetLastName] = useInput("")
  const [githubAccountProps, resetGithubAccount] = useInput("")
  const [emailProps, resetEmail] = useInput("")
  const [skillsProps, resetSkills] = useInput("")
  const [checked, setChecked] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    resetFirstName()
    resetLastName()
    resetGithubAccount()
    resetEmail()
    resetSkills()
    setChecked(false)
  }

  const handleClick = () => setChecked(!checked)

  return (
    <ProfileFormContainer>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <ProfileFormInputContainer>
          <label htmlFor="firstName">First Name: </label>
          <input {...firstNameProps} id="firstName" name="firstName" required />
        </ProfileFormInputContainer>
        <ProfileFormInputContainer>
          <label htmlFor="lastName">Last Name: </label>
          <input {...lastNameProps} id="lastName" name="lastName" required />
        </ProfileFormInputContainer>
        <ProfileFormInputContainer>
          <label htmlFor="githubAccount">GitHub: </label>
          <input
            {...githubAccountProps}
            id="githubAccount"
            name="githubAccount"
            required
          />
        </ProfileFormInputContainer>
        <ProfileFormInputContainer>
          <label htmlFor="emailAccount">Email: </label>
          <input
            {...emailProps}
            id="emailAccount"
            name="emailAccount"
            type="email"
            required
          />
        </ProfileFormInputContainer>
        <ProfileFormInputContainer>
          <label htmlFor="skills">Skills: </label>
          <input
            {...skillsProps}
            id="skills"
            name="skills"
            placeholder="Introduce your skills separated by commas"
            required
          />
        </ProfileFormInputContainer>
        <ProfileFormInputContainer>
          <label htmlFor="employed">Employed: </label>
          <input
            checked={checked}
            onClick={handleClick}
            id="employed"
            name="employed"
            type="checkbox"
          />
        </ProfileFormInputContainer>

        <ProfileFormButton>Save</ProfileFormButton>
      </form>
    </ProfileFormContainer>
  )
}

export default ProfileForm
