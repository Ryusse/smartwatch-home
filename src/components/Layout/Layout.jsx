import { LayoutGrid, Toggle } from './Layout.styled'

import Header from '../Header/Header'
import Main from '../Main/Main'

export default function Layout(props) {
  function changeTheme() {
    if (props.theme === 'light') {
      props.setTheme('dark')
    } else {
      props.setTheme('light')
    }
  }

  return (
    <LayoutGrid>
      <Toggle onClick={changeTheme}>Toggle</Toggle>
      <Header />
      <Main />
    </LayoutGrid>
  )
}
