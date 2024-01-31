import { Input } from "@/components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle, Search } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Header } from "@/components/header";

export function Ranking() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Header />

      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Ranking</h1>
        <ModeToggle />
      </div>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input
            name="name"
            placeholder="Nome do competidor"
            className="w-auto border-b-violet-900"
          />

          <Button type="submit" variant="link">
            <Search className="w-4 h-4 mr-2" />
            Filtrar Resultados
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              Adicionar competidor
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Competidor</DialogTitle>
              <DialogDescription>Criar um novo competidor</DialogDescription>

              <form>
                <div className="space-y-6">
                  <Input placeholder="Nome" name="name" className="w-auto" />
                  <Input
                    placeholder="Sobrenome"
                    name="surname"
                    className="w-auto"
                  />
                </div>

                <DialogFooter className="mt-6">
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar</Button>
                </DialogFooter>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>Rank</TableHead>
            <TableHead>Competidor</TableHead>
            <TableHead>Desde</TableHead>
            <TableHead>Pontuação</TableHead>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Luciano Brandão</TableCell>
              <TableCell>20-11-2019</TableCell>
              <TableCell>1200</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Lucia Silva</TableCell>
              <TableCell>18-03-2010</TableCell>
              <TableCell>450</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Eduardo Reis</TableCell>
              <TableCell>20-11-2017</TableCell>
              <TableCell>200</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>20-11-2020</TableCell>
              <TableCell>500</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
