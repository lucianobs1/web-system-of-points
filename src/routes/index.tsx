import { Ranking } from "@/pages/Ranking";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/ranking",
    element: <Ranking />,
  },
]);
