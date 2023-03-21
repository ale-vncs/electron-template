import React from 'react'
import { GlobalStyles as GlobalStylesMui, useTheme } from '@mui/material'

export const GlobalStyles = () => {
  const theme = useTheme()

  const scrollbarSize = '0.65em'

  return (
    <GlobalStylesMui
      styles={{
        '@font-face': {
          fontFamily: 'Comfortaa',
          src: 'url("../assets/Comfortaa-VariableFont_wght.ttf")'
        },
        '*': {
          scrollBehavior: 'smooth'
        },
        body: {
          margin: 0,
          boxSizing: 'border-box',
          webkitFontSmoothing: 'antialiased',
          mozOsxFontSmoothing: 'grayscale'
        },
        '*::-webkit-scrollbar': {
          width: scrollbarSize
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: theme.palette.primary.light,
          '&:hover': {
            backgroundColor: theme.palette.primary.light
          }
        },
        '*::-webkit-scrollbar:horizontal': {
          height: scrollbarSize
        }
      }}
    />
  )
}
