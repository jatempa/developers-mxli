import React from "react"
import Label from "./Label"
import styled from "styled-components"
import { InputContainer } from "./InputContainer"

const SelectInput = styled.select`
  border: 1px solid;
  background-color: transparent;
  height: 100%;
  margin: 0 15px;

  @media (max-width: 800px) {
    margin: 0 10px;
  }

  @media (max-width: 600px) {
    margin: 0 5px;
  }

  & option {
    font-size: 1rem;
  }

  &:focus {
    outline: none;
    border: 1px solid blue;
    color: black;
    background-color: transparent;
  }
`

const StatusSelect = ({ employmentStatus, setEmploymentStatus }) => {
  const handleChange = event => {
    setEmploymentStatus(event.target.value)
  }

  return (
    <InputContainer>
      <Label>Status:</Label>
      <SelectInput value={employmentStatus} onChange={handleChange}>
        <option value="all">All</option>
        <option value="employed">Employed</option>
        <option value="unemployed">Unemployed</option>
      </SelectInput>
    </InputContainer>
  )
}

export default StatusSelect
