import { Formik } from "formik";

import {
  Button,
  FilledInput,
  FormControl,
  InputLabel,
} from "@mui/material";

export const FormUser = () => {
  return (
    <div className="">
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name && !values.email) {
            errors.name = "Completar un campo para la búsqueda";
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
                  Nombre del usuario
                </InputLabel>
                <FilledInput
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
              </FormControl>

              <Button variant="contained" type="submit" className="w-48">
                Buscar
              </Button>
            </div>

            <FormControl variant="filled" className="w-full">
              <InputLabel htmlFor="outlined-adornment-password">
                Correo
              </InputLabel>
              <FilledInput
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </FormControl>
          </form>
        )}
      </Formik>
    </div>
  );
};
