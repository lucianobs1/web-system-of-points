import { NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="my-5">
      <nav className="flex justify-between items-center">
        <div className=" flex gap-3">
          <NavLink
            to="/ranking"
            className={({ isActive }) =>
              isActive
                ? " text-indigo-500 font-semibold"
                : " hover:text-indigo-500 transition-all"
            }
          >
            Ranking
          </NavLink>
          <NavLink
            to="/competitors"
            className={({ isActive }) =>
              isActive
                ? " text-indigo-500 font-semibold"
                : " hover:text-indigo-500 transition-all"
            }
          >
            Competidores
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? " text-indigo-500 font-semibold"
                : " hover:text-indigo-500 transition-all"
            }
          >
            Categorias
          </NavLink>
        </div>

        <ModeToggle />
      </nav>
    </header>
  );
}
