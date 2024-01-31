import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { PlusCircle } from "lucide-react";
import { Header } from "@/components/header";
import { CategoryCard } from "@/components/category-card";

export function Categories() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Header />
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Categorias</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              Adicionar Categoria
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nova Categoria</DialogTitle>
              <DialogDescription>Criar uma nova categoria</DialogDescription>
            </DialogHeader>

            <form>
              <div className="space-y-6">
                <Input
                  placeholder="Descrição"
                  name="description"
                  className="w-auto py-6 px-4"
                />
                <Input
                  placeholder="Pontos"
                  name="points"
                  type="number"
                  className="w-auto  py-6 px-4"
                />
                <Input
                  placeholder="Valor"
                  name="money"
                  type="number"
                  className="w-auto  py-6 px-4"
                />
              </div>

              <DialogFooter className="mt-4">
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <CategoryCard
          id="2"
          description="Acompanhamento de sinistro"
          points={1000}
          money={500}
        />

        <CategoryCard
          id="2"
          description="Acompanhamento de sinistro"
          points={1000}
          money={500}
        />

        <CategoryCard
          id="2"
          description="Acompanhamento de sinistro"
          points={1000}
          money={500}
        />
      </div>
    </div>
  );
}
