import React, { useState } from "react"
import Label from "./Label"
import styled from "styled-components"
import { InputContainer } from "./InputContainer"
import CrossIcon from "./utils/CrossIcon"

const SearchBarContainer = styled(InputContainer)`
  & > div.cross-icon {
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
  const [showCrossIcon, setShowCrossIcon] = useState(false)
  const handleChange = event => {
    let query = event.target.value

    if (query.length === 0) {
      setShowCrossIcon(false)
    } else {
      setShowCrossIcon(true)
    }

    setName(query)
  }

  const handleClear = () => {
    setName("")
    setShowCrossIcon(false)
  }

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      handleClear()
    }
  }

  return (
    <SearchBarContainer style={{ position: "relative" }}>
      <Label>Search:</Label>
      <SearchBarInput value={name} onChange={handleChange}></SearchBarInput>
      {showCrossIcon && (
        <CrossIcon handleClear={handleClear} handleKeyDown={handleKeyDown} />
      )}
    </SearchBarContainer>
  )
}

export default SearchBar
