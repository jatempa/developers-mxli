import React from "react"

import { Link } from "gatsby"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"

import LogoutButton from "../components/LogoutButton"

const Account = () => {
  const { user } = useAuth0()
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <p>
          Nombre: {user.given_name} {user.family_name}
        </p>
        <p>Email: {user.email}</p>
        <LogoutButton />
      </nav>
      <img src={user.picture} alt={`${user.nickname}_profile`} />
    </>
  )
}

export default withAuthenticationRequired(Account)
