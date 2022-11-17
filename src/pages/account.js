import React from "react"

import { Link } from "gatsby"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"

import LogoutButton from "../components/LogoutButton"
import styled from "styled-components"

const NavigationContainer = styled.nav`
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavigationItem = styled.div`
  flex-basis: 150px;
  text-align: center;
`

const NavigationProfileItem = styled(NavigationItem)`
  flex-basis: 200px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Account = () => {
  const { user } = useAuth0()
  return (
    <NavigationContainer>
      <NavigationItem>
        <Link to="/">Home</Link>
      </NavigationItem>
      <NavigationProfileItem>
        <Link to="/">
          <img
            src={user.picture}
            alt={`${user.nickname && user.email}_profile`}
          />
        </Link>
        <span>
          <LogoutButton />
        </span>
      </NavigationProfileItem>
    </NavigationContainer>
  )
}

export default withAuthenticationRequired(Account)
