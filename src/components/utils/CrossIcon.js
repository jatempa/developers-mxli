import React from "react"
import styled from "styled-components"

const CrossIconContainer = styled.div`
  width: 20px;
  height: 20px;

  @media (max-width: 800px) {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 600px) {
    width: 15px;
    height: 15px;
  }
`

const CrossIcon = props => {
  return (
    <CrossIconContainer
      className="cross-icon"
      role={"button"}
      tabindex={0}
      onClick={props.handleClear}
      onKeyDown={props.handleKeyDown}
    >
      <img
        src={`../../crossicon.png`}
        alt={"cross-icon"}
        height={"100%"}
        width={"100%"}
      />
    </CrossIconContainer>
  )
}

export default CrossIcon
