import React from "react"
import styled from "styled-components"

const ProfileFormContainer = styled.div`
  font-size: 1.2rem;
  padding: 25px;
  margin: 3em auto;
  width: 60%;

  & > h2 {
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
  font-size: 2rem;
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
  align-items: center;
  justify-content: space-between;

  & > input {
    height: 30px;
    max-height: 30px;
    width: 80%;
  }
`

const ProfileForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log("hello world")
  }

  return (
    <ProfileFormContainer>
      <h2>{"Create Profile"}</h2>
      <form onSubmit={handleSubmit}>
        <ProfileFormInputContainer>
          <label htmlFor="firstName">First name: </label>
          <input id="firstName" name="firstName" />
        </ProfileFormInputContainer>
        <ProfileFormInputContainer>
          <label htmlFor="lastName">Last name: </label>
          <input id="lastName" name="lastName" />
        </ProfileFormInputContainer>
        <ProfileFormInputContainer>
          <label htmlFor="githubAccount">GitHub: </label>
          <input id="githubAccount" name="githubAccount" />
        </ProfileFormInputContainer>
        <ProfileFormInputContainer>
          <label htmlFor="emailAccount">Email: </label>
          <input id="emailAccount" name="emailAccount" />
        </ProfileFormInputContainer>
        <ProfileFormInputContainer>
          <label htmlFor="skills">Skills: </label>
          <input id="skills" name="skills" />
        </ProfileFormInputContainer>
        <ProfileFormButton>Save</ProfileFormButton>
      </form>
    </ProfileFormContainer>
  )
}

export default ProfileForm
