import { Formik } from "formik";

import {
  Button,
  FilledInput,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import UploadFileIcon from "@mui/icons-material/UploadFile";

export const FormFile = () => {
  return (
    <div>
      <Formik
        initialValues={{
          document: "",
          carrera: "",
          anio: "",
          catedra: "",
          division: "",
          file: null,
        }}
        validate={(values) => {
          const errors = {};

          if (!values.document) {
            errors.document = "Completar un campo para la carga";
          }
          if (!values.carrera) {
            errors.carrera = "Completar un campo para la carga";
          }
          if (!values.anio) {
            errors.anio = "Completar un campo para la carga";
          }
          if (!values.catedra) {
            errors.catedra = "Completar un campo para la carga";
          }
          if (!values.division) {
            errors.division = "Completar un campo para la carga";
          }
          if (!values.file) {
            errors.file = "Completar un campo para la carga";
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
            <div className="flex gap-10 w-full">
              <FormControl variant="filled" className="w-full">
                <InputLabel htmlFor="outlined-adornment-password">
                  Nombre del material (libro,apunte,documento,etc)
                </InputLabel>
                <FilledInput
                  name="document"
                  onChange={handleChange}
                  value={values.document}
                />
                {errors.document && touched.document && errors.document}
              </FormControl>
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
                {errors.carrera && touched.carrera && errors.carrera}
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
                {errors.anio && touched.anio && errors.anio}
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
                {errors.catedra && touched.catedra && errors.catedra}
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
                {errors.division && touched.division && errors.division}
              </FormControl>
            </div>

            <div className="h-64">
              <FormControl
                variant="filled"
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgb(212 212 216)",
                  display: "grid",
                  alignItems: "center",
                  justifyItems: "center",
                  justifyContent: "center",
                  borderWidth: "2px",
                  borderStyle: "dashed",
                  borderColor: "rgb(120 113 108)",
                }}
              >
                <input
                  accept=".jpg,.png,.pdf,.doc,.docx"
                  id="file-input"
                  type="file"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    handleChange({
                      target: {
                        name: "file",
                        value: file,
                      },
                    });
                  }}
                  style={{ display: "none" }}
                />
                <label htmlFor="file-input" className="grid">
                  <p className="my-10 text-gray-500">
                    <UploadFileIcon sx={{ fontSize: 65 }} />
                  </p>
                  <Button variant="contained" component="span">
                    Seleccionar archivo
                  </Button>
                </label>
              </FormControl>
              {errors.file && touched.file && errors.file}
            </div>

            <div className="my-10">
              <Button variant="contained" type="submit">
                Cargar material
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
