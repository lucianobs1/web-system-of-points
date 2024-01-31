import { Home } from "./pages/Home";
import { ThemeProvider } from "./providers/theme-provider";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  );
}
