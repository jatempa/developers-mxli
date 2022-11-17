import React from "react"

import { Link } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"
import { withAuthenticationRequired } from "@auth0/auth0-react"

import LogoutButton from "../components/LogoutButton"

const Account = () => {
  const { user } = useAuth0()
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <p>Email: {user.email}</p>
        <LogoutButton />
      </nav>
    </>
  )
}

export default withAuthenticationRequired(Account)
