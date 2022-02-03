import { NavbarLayout, NavbarList, NavbarItem, NavbarLink } from './Navbar.styled'

import Logo from '../Logo/Logo'

export default function Navbar() {
  return (
    <NavbarLayout>
      {/* <NavbarList>
        <NavbarItem>
          <NavbarLink href='#'>Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href='#'>About</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href='#'>Store</NavbarLink>
        </NavbarItem>
      </NavbarList> */}

      <Logo />
    </NavbarLayout>
  )
}
