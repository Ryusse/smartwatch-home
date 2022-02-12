import { CardListLayout } from './CardList.styled'

import CardItem from '../CardItem/CardItem'

import WhatchDarkHome from '../../assets/images/whatch-dark-home.png'
import WhatchSoftWhiteHome from '../../assets/images/whatch-soft-white-home.jpg'
import WhatchWhiteHome from '../../assets/images/whatch-white-home.png'

const watches = [
  {
    id: 1,
    img: WhatchDarkHome,
    title: 'Dark',
    description: 'Element',
  },

  {
    id: 2,
    img: WhatchSoftWhiteHome,
    title: 'Soft white',
    description: 'Element',
  },

  {
    id: 3,
    img: WhatchWhiteHome,
    title: 'White',
    description: 'Element',
  },
]

export default function CardList() {
  return (
    <CardListLayout>
      {watches.map((watch) => (
        <CardItem key={watch.id} watch={watch} />
      ))}
    </CardListLayout>
  )
}
