import { createTheme, responsiveFontSizes } from '@mui/material'
import { useMemo } from 'react'

export const useCustomTheme = () => {
  return useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          palette: {
            primary: {
              main: '#F09692',
              '50': '#FFF3ED'
            },
            secondary: {
              main: '#95160C'
            }
          },
          typography: {
            fontFamily: 'Comfortaa'
          }
        })
      ),
    []
  )
}
