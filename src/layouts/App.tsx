import { CustomThemeProvider } from '@providers/CustomThemeProvider'
import { Home } from './Home'

export const App = () => {
  return (
    <CustomThemeProvider>
      <Home />
    </CustomThemeProvider>
  )
}
