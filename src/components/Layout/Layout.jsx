import { LayoutGrid } from './Layout.styled'

import Header from '../Header/Header'
import Main from '../Main/Main'

export default function Layout({ theme, setTheme }) {
  return (
    <LayoutGrid>
      <Header theme={theme} setTheme={setTheme} />
      <Main />
    </LayoutGrid>
  )
}
