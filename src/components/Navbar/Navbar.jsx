import { NavbarLayout, List, Item, Link } from './Navbar.styled'
import { ToggleTheme } from '../Styles/Utils.styled'

import Moon from '../Icons/Moon/Moon'
import Sun from '../Icons/Sun/Sun'

export default function Navbar({ theme, setTheme }) {
  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const icon = theme === 'light' ? <Moon /> : <Sun />

  return (
    <NavbarLayout>
      <List>
        <Item>
          <ToggleTheme onClick={changeTheme}>{icon}</ToggleTheme>
        </Item>
        <Item>
          <Link href='#'>Home</Link>
        </Item>
        <Item>
          <Link href='#'>About</Link>
        </Item>
        <Item>
          <Link href='#'>Store</Link>
        </Item>
      </List>
    </NavbarLayout>
  )
}
