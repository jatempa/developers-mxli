import React from "react"
import EmploymentStatusFilter from "./EmploymentStatusFilter"
import SearchBar from "./SearchBar"
import styled from "styled-components"

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  height: 100px;
  display: grid;
  grid-template-columns: 450px 1fr;
  align-items: center;
  margin-bottom: 50px;

  h2 {
    margin-right: 15px;
  }
`

const Header = ({ employmentStatus, setEmploymentStatus, name, setName }) => {
  return (
    <HeaderContainer>
      <SearchBar name={name} setName={setName} />
      <EmploymentStatusFilter
        employmentStatus={employmentStatus}
        setEmploymentStatus={setEmploymentStatus}
      />
    </HeaderContainer>
  )
}

export default Header
