import { Formik } from "formik";

import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const FormFilters = () => {
  return (
    <div className="">
      <Formik
        initialValues={{
          document: "",
          carrera: "",
          anio: "",
          catedra: "",
          division: "",
        }}
        validate={(values) => {
          const errors = {};

          if (
            !values.document &&
            !values.carrera &&
            !values.anio &&
            !values.catedra &&
            !values.division
          ) {
            errors.document = "Completar un campo para la búsqueda";
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
          handleChange,
          handleSubmit,
          errors,
          touched,
          // isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="grid gap-3">
            <div>{errors.document && touched.document && errors.document}</div>
            <div className="flex gap-10 w-full">
              <FormControl variant="filled" className="w-full">
                <InputLabel htmlFor="outlined-adornment-password">
                  Nombre del material (libro,apunte,documento,etc)
                </InputLabel>
                <FilledInput
                  name="document"
                  onChange={handleChange}
                  value={values.document}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Button variant="contained" type="submit" className="w-48">
                Buscar
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-5 mt-2">
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
                  <MenuItem value={"carrera1"}>Carrera 1</MenuItem>
                  <MenuItem value={"carrera2"}>Carrera 2</MenuItem>
                  <MenuItem value={"carrera3"}>Carrera 3</MenuItem>
                </Select>
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
                  <MenuItem value={"1"}>Primer año</MenuItem>
                  <MenuItem value={"2"}>Segundo año</MenuItem>
                  <MenuItem value={"3"}>Tercer año</MenuItem>
                  <MenuItem value={"4"}>Cuarto año</MenuItem>
                  <MenuItem value={"5"}>Quinto año</MenuItem>
                </Select>
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
                  <MenuItem value={"1"}>3/1</MenuItem>
                  <MenuItem value={"2"}>3/2</MenuItem>
                  <MenuItem value={"3"}>12</MenuItem>
                  <MenuItem value={"4"}>123</MenuItem>
                  <MenuItem value={"5"}>124</MenuItem>
                </Select>
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
                  <MenuItem value={"1"}>3/1</MenuItem>
                  <MenuItem value={"2"}>3/2</MenuItem>
                  <MenuItem value={"3"}>12</MenuItem>
                  <MenuItem value={"4"}>123</MenuItem>
                  <MenuItem value={"5"}>124</MenuItem>
                </Select>
              </FormControl>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
