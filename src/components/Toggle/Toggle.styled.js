import styled from 'styled-components'

export const Container = styled.div`
  width: 2.5rem;
  height: 1.9rem;
`

export const Line = styled.div`
  width: 100%;
  height: 3.5px;
  background-color: ${(props) => props.theme.backgroundColor};
`
