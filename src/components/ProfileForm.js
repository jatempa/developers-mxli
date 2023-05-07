import React, { useState } from "react"
import styled from "styled-components"
import useInput from "../hooks/useInput"
import Select from "react-select"
import skills from "../data/options.json"
import { API_URL } from "../hooks/useProfiles"

const ProfileFormContainer = styled.div`
  font-size: 1.2rem;
  padding: 25px;
  margin: 2em auto;
  width: 700px;

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

const ProfileFormSelectInputContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & > select {
    background-color: red;
    height: 30px;
    max-height: 30px;
    width: 300px;
  }
`

const ProfileFormPasswordError = styled.div`
  background-color: red;
  margin-top: 0.75em;
  width: 100%;
  height: 50px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  padding: 15px 0px;
`

const options = {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },

  body: null,
}

const ProfileForm = ({
  title = "",
  firstNameInitialValue = "",
  lastNameInitialValue = "",
  githubAccountInitialValue = "",
  emailInitialValue = "",
}) => {
  const [firstNameProps, resetFirstName] = useInput(firstNameInitialValue)
  const [lastNameProps, resetLastName] = useInput(lastNameInitialValue)
  const [githubAccountProps, resetGithubAccount] = useInput(
    githubAccountInitialValue
  )
  const [emailProps, resetEmail] = useInput(emailInitialValue)
  const [selectedSkills, setSelectedSkills] = useState([])
  const [employed, setEmployed] = useState(false)
  const [passwordProps, resetPassword] = useInput("")
  const [confirmPasswordProps, resetConfirmPassword] = useInput("")
  const passwordMatches = (firstPassword, secondPassword) =>
    firstPassword === secondPassword

  const handleSubmit = async e => {
    e.preventDefault()

    const firstName = firstNameProps.value
    const lastName = lastNameProps.value
    const githubAccount = githubAccountProps.value
    const email = emailProps.value
    const password = passwordProps.value
    const skills = selectedSkills.map(skill => skill.value)

    const payload = {
      firstName,
      lastName,
      githubAccount,
      email,
      skills,
      employed,
      password,
    }

    const response = await fetch(`http://localhost:3000/user`, {
      ...options,
      body: JSON.stringify(payload),
    })

    resetFirstName()
    resetLastName()
    resetGithubAccount()
    resetEmail()
    setEmployed(false)
    setSelectedSkills([])
    resetPassword()
    resetConfirmPassword()
  }

  const handleEmployedStatus = () => setEmployed(!employed)

  const handleSelect = skills => {
    setSelectedSkills(skills)
  }

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
        <ProfileFormSelectInputContainer>
          <label htmlFor="skills">Skills: </label>
          <Select
            options={skills}
            isMulti
            value={selectedSkills}
            onChange={handleSelect}
            isSearchable={true}
            id="skills"
            placeholder="Introduce your skills"
            required
          />
        </ProfileFormSelectInputContainer>
        <ProfileFormInputContainer>
          <label htmlFor="employed">Employed: </label>
          <input
            checked={employed}
            onClick={handleEmployedStatus}
            id="employed"
            name="employed"
            type="checkbox"
          />
        </ProfileFormInputContainer>
        <ProfileFormInputContainer>
          <label htmlFor="password">Password: </label>
          <input
            {...passwordProps}
            id="password"
            name="password"
            type="password"
            required
          />
        </ProfileFormInputContainer>
        <ProfileFormInputContainer>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input
            {...confirmPasswordProps}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
          />
        </ProfileFormInputContainer>
        {!passwordMatches(passwordProps.value, confirmPasswordProps.value) ? (
          <ProfileFormPasswordError>
            Passwords do NOT match!
          </ProfileFormPasswordError>
        ) : (
          <ProfileFormButton>Register</ProfileFormButton>
        )}
      </form>
    </ProfileFormContainer>
  )
}

export default ProfileForm
