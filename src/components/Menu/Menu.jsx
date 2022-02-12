import { MenuContainer, MenuHeader, MenuList, MenuLink, MenuLogoContainer } from './Menu.styled'
import { ToggleTheme } from '../Styles/Utils.styled'

import Moon from '../Icons/Moon/Moon'
import Sun from '../Icons/Sun/Sun'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'

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
      <MenuHeader>
        <ToggleTheme onClick={changeTheme}> {icon} </ToggleTheme>
      </MenuHeader>
      <MenuList>
        <li>
          <MenuLink href='#'>Home</MenuLink>
        </li>
        <li>
          <MenuLink href='#'>Smartphone</MenuLink>
        </li>
        <li>
          <MenuLink href='#'>Store</MenuLink>
        </li>

        <Button fullWidth={true} marginTop={true} content={'Buy Now'} />
      </MenuList>
      <MenuLogoContainer>
        <Logo />
      </MenuLogoContainer>
    </MenuContainer>
  )
}
