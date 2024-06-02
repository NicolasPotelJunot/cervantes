import { Title } from "../commons/Title";
import { Order } from "./Order";
import { ResumenOrder } from "./ResumenOrder";

export const OrderDetailsFinally = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Los meses empiezan desde 0
  const day = today.getDate();

  console.log(day);
  return (
    <div className="mx-auto pt-10 pb-20">
      <div className="my-20">
        <Title text={"Detalles de los pedidos"} />
      </div>
      <p className="text-right text-2xl">
        Fecha de hoy: {`${year}-${month}-${day}`}
      </p>

      <div>
        <Order />

        <Order />

        <Order />
      </div>

      <div className="w-full h-3 bg-gray-200 my-10"></div>

      <ResumenOrder />
    </div>
  );
};
