import { PartyPopper, CircleDollarSign } from "lucide-react";
import { NavLink } from "react-router-dom";

interface CategoryProps {
  id: string;
  description: string;
  points: number;
  money: number;
}

export function CategoryCard({
  id,
  description,
  points,
  money,
}: CategoryProps) {
  return (
    <NavLink
      to={`/categories/${id}`}
      className="border rounded-md border-indigo-500 dark:bg-indigo-500 dark:text-gray-100 dark:hover:bg-indigo-600 transition-all"
    >
      <div className="p-6 w-auto rounded-md">
        <h3 className="font-semibold mb-4 dark:text-gray-300">{description}</h3>
        <div className="flex items-center gap-2 my-3">
          <PartyPopper className="text-yellow-500" />
          <p>{points} pontos</p>
        </div>
        <div className="flex items-center gap-2">
          <CircleDollarSign className="text-green-500" />
          <p>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(money)}
          </p>
        </div>
      </div>
    </NavLink>
  );
}
