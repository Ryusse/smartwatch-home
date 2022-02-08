import { Container, Line } from './Toggle.styled'

export default function Toggle({ open, onClick }) {
  return (
    <Container onClick={onClick}>
      <Line open={open}></Line>
      <Line open={open}></Line>
      <Line open={open}></Line>
    </Container>
  )
}
