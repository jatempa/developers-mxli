import React from "react"
import Label from "./Label"
import styled from "styled-components"
import InputContainer from "./InputContainer"

const EmploymentStatusSelect = styled.select`
  height: 25px;
  font-size: 1.2rem;
  border: none;
  background-color: transparent;

  @media (max-width: 600px) {
    font-size: 1rem;
    min-width: 50px;
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
    </InputContainer>
  )

  // return (
  //   <div>
  //     <EmploymentStatusSelect value={employmentStatus} onChange={handleChange}>
  //       <option value="all">All</option>
  //       <option value="employed">Employed</option>
  //       <option value="unemployed">Unemployed</option>
  //     </EmploymentStatusSelect>
  //   </div>
  // )
}

export default StatusSelect
