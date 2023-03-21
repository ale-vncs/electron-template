import { PropsWithChildren } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useCustomTheme } from '../styles/useCustomTheme'
import { GlobalStyles } from '../styles/GlobalStyles'

export const CustomThemeProvider = ({ children }: PropsWithChildren<Record<never, never>>) => {
  const theme = useCustomTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
