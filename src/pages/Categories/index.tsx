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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    description: yup
      .string()
      .trim("O campo não pode ser vazio")
      .min(3, "Mínimo de três letras")
      .required("Nome obrigatório"),
    points: yup.number().min(1).required(),
    money: yup.number().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function Categories() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = ({ description, points, money }: FormData) => {
    console.log(description, points, money);

    reset();
  };

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

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <Input
                  {...register("description", { required: true })}
                  placeholder="Descrição"
                  className="w-auto py-6 px-4"
                />
                {errors.description && (
                  <div className="text-sm  text-red-500">
                    Descrição é obrigatória
                  </div>
                )}

                <Input
                  {...register("points", { required: true })}
                  placeholder="Pontos"
                  type="number"
                  className="w-auto  py-6 px-4"
                />
                {errors.points && (
                  <div className="text-sm  text-red-500">
                    A pontuação deve ser maior que 0!
                  </div>
                )}

                <Input
                  {...register("money", { required: true })}
                  placeholder="Valor"
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
