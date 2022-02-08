import { MenuContainer } from './Menu.styled'
import { ToggleTheme } from '../Styles/Utils.styled'

import Moon from '../Icons/Moon/Moon'
import Sun from '../Icons/Sun/Sun'

export default function Menu({ open, theme, setTheme }) {
  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const icon = theme === 'light' ? <Moon /> : <Sun />

  return (
    <MenuContainer open={open}>
      <ToggleTheme onClick={changeTheme}> {icon} </ToggleTheme>
      <ul>
        <li>
          <a href=''></a>
        </li>
        <li>
          <a href=''></a>
        </li>
        <li>
          <a href=''></a>
        </li>
      </ul>
    </MenuContainer>
  )
}
