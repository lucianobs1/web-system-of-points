import { CircleDollarSign, PartyPopper, User } from "lucide-react";
import { NavLink } from "react-router-dom";

interface CompetitorProps {
  id: string;
  name: string;
  surname: string;
  score: number;
  wallet: number;
}

export function Competitor({
  id,
  name,
  surname,
  score,
  wallet,
}: CompetitorProps) {
  return (
    <NavLink
      to={`/competitor/${id}`}
      className="flex flex-col items-center gap-1 border border-indigo-500 b p-6"
    >
      <img
        src="https://avatars.githubusercontent.com/u/47507696?v=4"
        alt="imagem do competidor"
        className="object-cover rounded-full w-20 mb-4"
      />

      <p className="flex items-center gap-2 mb-2">
        <User />
        {name} {surname}
      </p>

      <p className="flex items-center gap-2 mb-2">
        <CircleDollarSign className="text-green-500" />
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(wallet)}
      </p>
      <p className="flex items-center gap-2">
        <PartyPopper className="text-yellow-500" />
        Pontuação {score}
      </p>
    </NavLink>
  );
}
