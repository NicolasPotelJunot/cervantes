import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { Title } from "../commons/Title";

export const ModifyDocument = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <Title text={"Modificar documento"} />
      <div className="w-3/4 mx-auto ">
        <Formik
          initialValues={{
            name: "",
            carrera: "",
            catedra: "",
            division: "",
            anio: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = "Campo requerido";
            }

            if (!values.carrera) {
              errors.carrera = "Campo requerido";
            }

            if (!values.catedra) {
              errors.catedra = "Campo requerido";
            }

            if (!values.division) {
              errors.division = "Campo requerido";
            }

            if (!values.anio) {
              errors.anio = "Campo requerido";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            // isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="grid gap-3">
              <TextField
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                id="outlined-basic"
                label="Nombre del usuario"
                variant="filled"
              />
              {errors.name && touched.name && errors.name}

              <div className="grid grid-cols-2 gap-3">
                <FormControl variant="filled" sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Carrera
                  </InputLabel>
                  <Select
                    name="carrera"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={values.carrera}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value={"estudiante"}>Estudiante</MenuItem>
                    <MenuItem value={"docente"}>Docente</MenuItem>
                    <MenuItem value={"admin"}>Admin</MenuItem>
                  </Select>
                  {errors.carrera && touched.carrera && errors.carrera}
                </FormControl>

                <FormControl variant="filled" sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Cátedra
                  </InputLabel>
                  <Select
                    name="catedra"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={values.catedra}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value={"estudiante"}>Estudiante</MenuItem>
                    <MenuItem value={"docente"}>Docente</MenuItem>
                    <MenuItem value={"admin"}>Admin</MenuItem>
                  </Select>
                  {errors.catedra && touched.catedra && errors.catedra}
                </FormControl>

                <FormControl variant="filled" sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Año
                  </InputLabel>
                  <Select
                    name="anio"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={values.anio}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value={"estudiante"}>Estudiante</MenuItem>
                    <MenuItem value={"docente"}>Docente</MenuItem>
                    <MenuItem value={"admin"}>Admin</MenuItem>
                  </Select>
                  {errors.anio && touched.anio && errors.anio}
                </FormControl>

                <FormControl variant="filled" sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    División
                  </InputLabel>
                  <Select
                    name="division"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={values.division}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Ninguno</em>
                    </MenuItem>
                    <MenuItem value={"estudiante"}>Estudiante</MenuItem>
                    <MenuItem value={"docente"}>Docente</MenuItem>
                    <MenuItem value={"admin"}>Admin</MenuItem>
                  </Select>
                  {errors.division && touched.division && errors.division}
                </FormControl>
              </div>

              <Button variant="contained" type="submit">
                Guardar cambios
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
