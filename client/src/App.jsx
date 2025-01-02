import { ThemeProvider } from "@/components/theme-provider"
import { Home } from "@/pages"

const App = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home/>
      {children}
    </ThemeProvider>
  )
}

export default App





