import { Title } from "../commons/Title";
import { AccordionDetail } from "./AccordionDetail";
import { TotalOrden } from "./TotalOrden";

export const OrderDetails = () => {
  return (
    <div className="mx-auto pt-10 pb-20">
      <div className="my-20">
        <Title text={"¿Cómo lo necesitas?"} />
      </div>
      <div className="bg-blue-500 text-white py-5 pl-4 flex gap-5">
        <p>Nombre del archivo va aca</p>
        <p>Cantidad de páginas: 165</p>
      </div>
      <h2 className="my-10 text-3xl">Elegí tus opciones</h2>

      <div className="flex flex-col gap-8">
        <AccordionDetail title="Formato de impresión:" />

        <AccordionDetail title="Tipo de impresión:" />

        <AccordionDetail title="Tipo de Anillado:" />
      </div>

      <div className="w-full h-5 bg-gray-200 my-10"></div>
      
      <TotalOrden />
    </div>
  );
};
