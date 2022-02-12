import { useState } from 'react'

import { GlobalStyles } from './components/styles/Global.styled.js'
import { ThemeProvider } from 'styled-components'

import Layout from './components/Layout/Layout'

const LightTheme = {
  menuBackground: '#ffffff',
  titleColor: '#08162B',
  primaryColor: '#FE3B8F',
  textColor: '#68707D',
  backgroundColor: '#F9FAFE',
  cardColor: '#ffffff',
  shadowColor: 'rgba(112, 144, 176, 0.1)',
}

const DarkTheme = {
  menuBackground: '#000000',
  titleColor: `#F9FAFE`,
  primaryColor: '#FE3B8F',
  textColor: '#B6BCC8',
  backgroundColor: '#08162B',
  cardColor: '#2B3544',
  shadowColor: 'rgba(1, 1, 1, 0.2)',
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

export default function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={themes[theme]}>
        <Layout theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </>
  )
}
