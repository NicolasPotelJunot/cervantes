import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, "Estudiante"),
  createData("Ice cream sandwich", 237, "Docente"),
  createData("Eclair", 262, "Estudiante"),
  createData("Cupcake", 305, "Estudiante"),
  createData("Gingerbread", 356, "Docente"),
];

export const TableUsers = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="bg-blue-500">
          <TableRow>
            <TableCell>
              <p className="text-white">Nombre del material</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-white">Correo</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-white pr-5">Rol</p>
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">
                <Button variant="contained" size="small" color="success">
                  Modificar
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" size="small" color="error">
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
