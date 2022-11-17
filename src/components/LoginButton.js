import React from "react"
import { Link } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  if (isAuthenticated) {
    return <Link to="/account">My Account</Link>
  }

  return !isAuthenticated && <button onClick={loginWithRedirect}>Log in</button>
}

export default LoginButton
