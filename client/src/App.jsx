import { ThemeProvider } from "@/components/theme-provider"
import { MealPlanner } from "@/components"
const App = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MealPlanner />
      {children}
    </ThemeProvider>
  )
}

export default App





