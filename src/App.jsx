import { useState } from 'react'

import { GlobalStyles } from './components/styles/Global.styled.js'
import { Layout } from './components/styles/Layout.js'
import { ThemeProvider } from 'styled-components'

import Header from './components/Header/Header'
import Main from './components/Main/Main'

const LightTheme = {
  colors: {
    titleColor: '#08162B',
    primaryColor: '#FE3B8F',
    textColor: '#68707D',
    backgroundColor: '#F9FAFE',
    cardColor: '#fffff',
    shadowColor: '#7090B0',
  },
}

const DarkTheme = {
  colors: {
    titleColor: `#F9FAFE`,
    primaryColor: '#FE3B8F',
    textColor: '#B6BCC8',
    backgroundColor: '#08162B',
    cardColor: '#2B3544',
    shadowColor: '#010101',
  },
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

export default function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Layout theme={theme} setTheme={setTheme}>
        <Header />
        <Main />
      </Layout>
    </ThemeProvider>
  )
}
