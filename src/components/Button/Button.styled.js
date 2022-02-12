import styled from 'styled-components'

export const ButtonStyled = styled.button`
  font-size: 1.05rem;
  color: white;
  background-color: ${(props) => props.theme.primaryColor};
  margin-top: ${({ marginTop }) => (marginTop ? '3.75rem' : '')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '')};
  padding: 0.9rem 1.6rem;
  border-radius: 10px;
  transition: all 0.25s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
