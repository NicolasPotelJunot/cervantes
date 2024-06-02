import { Button } from "@mui/material";

export const ResumenOrder = () => {
  return (
    <div className="">
      <div>
        <h2 className="text-left text-3xl">Resumen del pedido</h2>
        <h2 className="text-left text-3xl">
          Tiempo estimado de entrega: 2 días - 31/05/2024
        </h2>
      </div>
      <div className="flex justify-center my-10 gap-20">
        <p className="text-3xl flex items-center">Total: $ 35800,00</p>
        <div>
          <Button variant="contained" color="success">
            Hacer el pedido
          </Button>
        </div>
      </div>
    </div>
  );
};
