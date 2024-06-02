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

export const ModifyUser = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <Title text={"Modificar usuario"} />
      <div className="w-96 mx-auto ">
        <Formik
          initialValues={{ email: "", name: "", rol: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Campo requerido";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.name) {
              errors.name = "Campo requerido";
            }

            if (!values.rol) {
              errors.rol = "Campo requerido";
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

              <TextField
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                id="outlined-basic"
                label="Email"
                variant="filled"
              />
              {errors.email && touched.email && errors.email}

              <FormControl variant="filled" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">
                  División
                </InputLabel>
                <Select
                  name="rol"
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={values.rol}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>Ninguno</em>
                  </MenuItem>
                  <MenuItem value={"estudiante"}>Estudiante</MenuItem>
                  <MenuItem value={"docente"}>Docente</MenuItem>
                  <MenuItem value={"admin"}>Admin</MenuItem>
                </Select>
              </FormControl>
              {errors.rol && touched.rol && errors.rol}

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
