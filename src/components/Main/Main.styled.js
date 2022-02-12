import styled from 'styled-components'

export const Introduction = styled.div`
  max-width: 38rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  & :nth-child(3) {
    margin-top: 1rem;
  }
`

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5rem;
`
