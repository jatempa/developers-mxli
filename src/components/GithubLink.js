import React from "react"

const GithubLink = props => {
  const { github, children } = props
  return (
    <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default GithubLink
