import React from "react"
import StatusSelect from "./StatusSelect"
import SearchBar from "./SearchBar"
import styled from "styled-components"
import LoginButton from "../components/LoginButton"

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  height: 100px;
  max-height: 100px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 250px;
  align-items: center;
`

const LoginContainer = styled.div`
  text-align: right;
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
      <LoginContainer>
        <LoginButton />
      </LoginContainer>
    </HeaderContainer>
  )
}

export default Header
