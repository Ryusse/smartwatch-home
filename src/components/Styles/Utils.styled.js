import styled from 'styled-components'

export const ToggleTheme = styled.button`
  cursor: pointer;
  padding: 0.5rem;
`

export const Tittle = styled.h1`
  color: ${(props) => props.theme.titleColor};
  text-align: center;
  font-size: clamp(3.25rem, 5vw + 1rem, 6.25rem);
  font-weight: 800;
  transition: all 0.25s ease-in-out;

  @media screen and (min-width: 860px) {
    text-align: start;
  }
`

export const SubTitle = styled.h2`
  color: ${(props) => props.theme.primaryColor};
  text-align: center;
  font-size: clamp(1.25rem, 1vw + 1rem, 1.8rem);
  font-weight: 400;
  letter-spacing: 0.5em;
  transition: all 0.25s ease-in-out;

  @media screen and (min-width: 860px) {
    text-align: start;
  }
`

export const Text = styled.p`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-size: clamp(1rem, 0.1vw + 1rem, 1.25rem);
  transition: all 0.25s ease-in-out;

  @media screen and (min-width: 860px) {
    text-align: start;
  }
`

export const TextCentered = styled.p`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-size: clamp(1rem, 0.1vw + 1rem, 1.25rem);
  transition: all 0.25s ease-in-out;
`

export const SectionLayout = styled.section`
  padding: 6.25rem 5vw;
`
