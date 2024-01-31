import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./providers/theme-provider";
import { routes } from "./routes";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
