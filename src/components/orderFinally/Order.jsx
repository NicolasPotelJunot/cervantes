import { Button } from "@mui/material";
import Inventory2Icon from "@mui/icons-material/Inventory2";

export const Order = () => {
  return (
    <div className="border-b-2 py-10 flex justify-between">
      <div className="flex items-center">
        <div className="bg-gray-300 w-16 h-16 flex justify-center items-center mr-10 text-white rounded">
          <Inventory2Icon />
        </div>
        <ul className="list-disc">
          <li className="text-start">Nombre del material</li>
          <li className="text-start">165 págs</li>
          <li className="text-start">1 Copia</li>
          <li className="text-start">
            Doble faz - Blanco y negro - Abrochado{" "}
          </li>
        </ul>
        <div className="flex items-center mx-10">
          <Button variant="contained" color="success" size="large">
            Editar
          </Button>
        </div>
      </div>

      <div className="text-3xl flex justify-center items-center gap-5">
        <p>$ 7800,00</p>
        <Button variant="contained" color="error" size="large">
          Eliminar
        </Button>
      </div>
    </div>
  );
};
