import { Categories } from "@/pages/Categories";
import { Competitors } from "@/pages/Competitors";
import { Ranking } from "@/pages/Ranking";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/ranking",
    element: <Ranking />,
  },
  {
    path: "/competitors",
    element: <Competitors />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
]);
