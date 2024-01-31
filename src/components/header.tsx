import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="my-5">
      <nav className="flex justify-between items-center">
        <div className=" flex gap-3">
          <a
            href="/ranking"
            className="dark:hover:text-indigo-500 transition-all"
          >
            Ranking
          </a>
          <a
            href="/competitors"
            className="dark:hover:text-indigo-500 transition-all"
          >
            Competidores
          </a>
          <a
            href="/categories"
            className="dark:hover:text-indigo-500 transition-all"
          >
            Categorias
          </a>
        </div>

        <ModeToggle />
      </nav>
    </header>
  );
}
