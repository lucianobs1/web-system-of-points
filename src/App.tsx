import { ThemeProvider } from "./components/theme-provider";
import { Ranking } from "./pages/ranking";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Ranking />
    </ThemeProvider>
  );
}
