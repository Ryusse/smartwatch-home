import { HomeLayout, Introduction } from './Main.styled'
import { Text, Tittle, SubTitle, SectionLayout } from '../Styles/Utils.styled'

import CardList from '../CardList/CardList'

export default function Main() {
  return (
    <main>
      <SectionLayout>
        <HomeLayout>
          <Introduction>
            <Tittle>Smartwatch</Tittle>
            <SubTitle>ELEMENT SERIE</SubTitle>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue sed et leo, dignissim odio justo.</Text>
          </Introduction>

          <CardList />
        </HomeLayout>
      </SectionLayout>
    </main>
  )
}
