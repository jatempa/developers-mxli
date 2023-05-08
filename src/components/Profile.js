import React from "react"
import styled from "styled-components"
import GithubLink from "./GithubLink"
import Picture from "./Picture"

const ProfileCard = styled.div`
  line-height: 1.75;

  ul {
    list-style-type: none;
  }
`

const Profile = props => {
  const { firstName, lastName, githubAccount, skills, employed, picture } =
    props
  return (
    <ProfileCard>
      <GithubLink github={githubAccount}>
        <Picture picture={picture} />
      </GithubLink>
      <h2>{`${firstName} ${lastName}`}</h2>
      <ul>
        <li>
          <span>
            Github:{" "}
            <GithubLink
              github={githubAccount}
            >{`@${githubAccount}`}</GithubLink>
          </span>
        </li>
        <li>
          <span>Status: {employed ? "employed" : "unemployed"}</span>
        </li>
        <li>
          <span>
            Skills: {skills.map(skill => skill.toLowerCase()).join(", ")}
          </span>
        </li>
      </ul>
    </ProfileCard>
  )
}

export default Profile
