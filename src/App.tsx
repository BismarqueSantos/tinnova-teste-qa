import React from "react"
import { ThemeProvider } from 'styled-components'
import { theme1 } from './styles/theme/default'
import GlobalStyle from './styles/globals'

import Routes from './routes/app.routes'
import { ListProvider } from "contexts/List"

const App = () => {
  return (
    <ThemeProvider theme={theme1} >
      <ListProvider>
        <GlobalStyle />
        <Routes />
      </ListProvider>
    </ThemeProvider>
  )
}

export default App
