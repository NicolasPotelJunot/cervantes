import { useState } from "react";
import { Box, TextField, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const TotalOrden = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1) {
      setCount(value);
    } else {
      setCount(1);
    }
  };

  return (
    <div>      
      <div className="flex justify-between">
        <div>
          <p className="text-start">Cantidad de copias</p>
          <div className="bg-gray-200 p-2 w-44 flex justify-center">
            <Box display="flex" alignItems="center">
              <IconButton onClick={handleDecrement} disabled={count <= 1}>
                <RemoveIcon />
              </IconButton>
              <TextField
                value={count}
                onChange={handleInputChange}
                type="text"
                inputProps={{
                  min: 1,
                  style: { textAlign: "center", backgroundColor: "white" },
                }}
                sx={{ width: 60, mx: 2 }}
              />
              <IconButton onClick={handleIncrement}>
                <AddIcon />
              </IconButton>
            </Box>
          </div>
        </div>
        <div>
          <h2 className="text-3xl">Lo que elegiste vale: $ 1750,00</h2>
          <p className="text-xs text-start mt-3">
            PODES MODIFICAR TUS OPCIONES SELECCIONADAS
          </p>
        </div>
      </div>
      <div className="my-10">
        <Button variant="contained" size="large">
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
