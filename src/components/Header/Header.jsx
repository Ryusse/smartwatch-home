import { useState } from 'react'
import { useGetWidth } from '../../hooks/useGetWidth'
import { HeaderLayout } from './Header.styled'

import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import Toggle from '../Toggle/Toggle'

export default function Header({ theme, setTheme }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const breakpointDesktop = 960

  useGetWidth(setWindowWidth)
  return (
    <HeaderLayout>
      <Logo />
      {windowWidth < breakpointDesktop && <Toggle />}

      {windowWidth > breakpointDesktop && <Navbar theme={theme} setTheme={setTheme} />}
    </HeaderLayout>
  )
}
