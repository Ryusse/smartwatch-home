import styled from 'styled-components'

export const Card = styled.li`
  display: grid;
  min-width: 15rem;
  min-height: 19rem;
  border-radius: 1.25rem;
  padding: 1.8rem 1.3rem;
  background-color: ${(props) => props.theme.cardColor};
  box-shadow: 0px 20px 30px ${(props) => props.theme.shadowColor};
  border: 3px solid transparent;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    border: 3px solid ${(props) => props.theme.primaryColor};
  }
`

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.titleColor};
  font-size: clamp(2rem, 1vw + 1rem, 2.5rem);
  text-align: center;
  margin-bottom: 0.3rem;
`

export const ImageContainer = styled.figure`
  width: 12rem;
  height: 12rem;

  margin: auto;
`
export const Image = styled.img`
  height: 100%;
`
