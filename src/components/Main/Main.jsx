import { MainLayout } from './Main.styled'

import WatchDarkHome from '../../assets/images/whatch-dark-home.svg'

export default function Main() {
  return (
    <MainLayout>
      <div>content</div>
      <figure>
        <img src={WatchDarkHome} alt='smart watch' />
      </figure>
    </MainLayout>
  )
}
