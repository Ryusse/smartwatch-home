import { useState } from 'react'
import { useGetWidth } from '../../hooks/useGetWidth'
import { HeaderLayout } from './Header.styled'

import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import Toggle from '../Toggle/Toggle'
import Menu from '../Menu/Menu'

export default function Header({ theme, setTheme }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const breakpointDesktop = 860

  const handleToggle = () => {
    function toggleMenu(prevMenuOpen) {
      return !prevMenuOpen
    }

    setIsMenuOpen(toggleMenu)
  }

  useGetWidth(setWindowWidth)
  return (
    <HeaderLayout>
      <Logo />
      {windowWidth < breakpointDesktop && <Toggle open={isMenuOpen} onClick={handleToggle} />}

      {windowWidth > breakpointDesktop && <Navbar theme={theme} setTheme={setTheme} />}

      <Menu open={isMenuOpen} theme={theme} setTheme={setTheme} />
    </HeaderLayout>
  )
}
