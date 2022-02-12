import { Card, CardTitle, ImageContainer, Image } from './CardItem.styled'
import { TextCentered } from '../Styles/Utils.styled'

export default function CardItem({ watch }) {
  return (
    <Card>
      <CardTitle> {watch.title} </CardTitle>
      <TextCentered> {watch.description} </TextCentered>
      <ImageContainer>
        <Image src={watch.img} alt={watch.title} />
      </ImageContainer>
    </Card>
  )
}
