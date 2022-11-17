import React from "react"
import { Link } from "gatsby"
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
  display: grid;
  grid-template-columns: repeat(2, 1fr) 200px;
  align-items: center;
`

const LoginContainer = styled.div`
  margin-left: auto;
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
        <Link to="/account">Login</Link>
      </LoginContainer>
    </HeaderContainer>
  )
}

export default Header
