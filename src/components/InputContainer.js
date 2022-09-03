import styled from "styled-components"

export const InputContainer = styled.div`
  font-size: 1.2rem;
  height: 30px;
  max-height: 30px;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`
