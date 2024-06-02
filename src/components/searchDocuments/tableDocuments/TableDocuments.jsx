import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 165),
  createData("Ice cream sandwich", 237, 9.0, 37, 50),
  createData("Eclair", 262, 16.0, 24, 220),
  createData("Cupcake", 305, 3.7, 67, 503),
  createData("Gingerbread", 356, 16.0, 49, 164),
];

export function TableDocuments() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="bg-blue-500">
          <TableRow>
            <TableCell>
              <p className="text-white">Nombre del material</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-white">Carrera</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-white">Año</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-white">División</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-white">Cantidad de páginas</p>
            </TableCell>
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
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
                <p className="text-right px-10">{row.protein}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
