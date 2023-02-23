import React from "react"
import StatusSelect from "./StatusSelect"
import SearchBar from "./SearchBar"
import styled from "styled-components"

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  height: 100px;
  max-height: 100px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: start;

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`

const Header = props => {
  const { employmentStatus, setEmploymentStatus, name, setName } = props
  return (
    <HeaderContainer>
      <SearchBar name={name} setName={setName} />
      <StatusSelect
        employmentStatus={employmentStatus}
        setEmploymentStatus={setEmploymentStatus}
      />
    </HeaderContainer>
  )
}

export default Header
