import React from "react"
import Label from "./Label"
import styled from "styled-components"
import { InputContainer } from "./InputContainer"

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

  return (
    <InputContainer>
      <Label>Search:</Label>
      <SearchBarInput
        value={name}
        onChange={handleChange}
        placeholder={"Introduce a profile name or skill"}
      />
    </InputContainer>
  )
}

export default SearchBar
