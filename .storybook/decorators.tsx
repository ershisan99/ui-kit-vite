import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '../src'
export const withThemeProvider = (Story: any, context: any) => {
  const theme = createTheme(false)

  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}
export const allDecorators = [withThemeProvider]
