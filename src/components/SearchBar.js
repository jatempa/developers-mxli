import React from "react"
import Label from "./Label"
import styled from "styled-components"
import { InputContainer } from "./InputContainer"

const SearchBarContainer = styled(InputContainer)`
  & > img {
    width: 1.2rem;
    position: absolute;
    right: 25px;

    &:hover {
      cursor: pointer;
    }

    @media (max-width: 800px) {
      right: 20px;
    }

    @media (max-width: 600px) {
      right: 15px;
    }
  }
`

const SearchBarInput = styled.input`
  height: 100%;
  width: 100%;
  margin: 0 15px;

  @media (max-width: 800px) {
    margin: 0 10px;
  }

  @media (max-width: 600px) {
    margin: 0 5px;
  }

  &:focus {
    outline: none;
    border: 1px solid blue;
  }
`

const SearchBar = ({ name, setName }) => {
  const handleChange = event => {
    setName(event.target.value)
  }

  const handleClear = event => {
    event.preventDefault()
    setName("")
  }

  return (
    <SearchBarContainer style={{ position: "relative" }}>
      <Label>Search:</Label>
      <SearchBarInput value={name} onChange={handleChange}></SearchBarInput>
      <img
        src={`../../crossicon.png`}
        onClick={handleClear}
        alt={"cross-icon"}
      />
    </SearchBarContainer>
  )
}

export default SearchBar
