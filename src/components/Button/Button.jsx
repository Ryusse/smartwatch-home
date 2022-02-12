import { ButtonStyled } from './Button.styled'

export default function Header({ content, fullWidth, marginTop }) {
  return (
    <ButtonStyled fullWidth={fullWidth} marginTop={marginTop}>
      {content}
    </ButtonStyled>
  )
}
