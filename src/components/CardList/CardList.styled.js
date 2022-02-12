import styled from 'styled-components'

export const CardListLayout = styled.ul`
  display: flex;
  gap: 1.3rem;
  overflow-x: auto;
  padding-bottom: 1.5rem;

  @media screen and (min-width: 860px) {
    position: relative;
    left: -220px;
  }
`
