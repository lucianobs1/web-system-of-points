import { Competitor } from "@/components/competitor";
import { Header } from "@/components/header";
import { Separator } from "@/components/ui/separator";

export function Competitors() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Header />
      <h1 className="text-3xl font-bold">Competidores</h1>
      <Separator />

      <div className="grid grid-cols-3 gap-4">
        <Competitor
          id="1"
          score={200}
          wallet={1000}
          name="Luciano"
          surname="Brandão"
        />

        <Competitor
          id="1"
          score={200}
          wallet={1000}
          name="Luciano"
          surname="Brandão"
        />

        <Competitor
          id="1"
          score={200}
          wallet={1000}
          name="Luciano"
          surname="Brandão"
        />
      </div>
    </div>
  );
}
