import { Button, TextField } from "@mui/material";
import { Formik } from "formik";

export const Product = () => {
  return (
    <div>
      <div className="bg-blue-600 text-white grid grid-cols-6 p-3">
        <p className="col-span-2">Formato de impresion</p>
        <p>Precio por unidad</p>
      </div>
      <div className="grid grid-cols-6 p-3 border-b-2">
        <p className="col-span-2 flex justify-center items-center">Doble Faz</p>

        <div className="col-span-2">
          <Formik
            initialValues={{ price: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.price) {
                errors.price = "Campo requerido";
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
              handleBlur,
              handleSubmit,
              // isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="flex gap-5">
                <TextField
                  type="price"
                  name="price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                  id="outlined-basic"
                  label="Precio"
                  variant="filled"
                />
                <Button
                  className="w-40"
                  size="small"
                  variant="contained"
                  type="submit"
                >
                  Confirmar Cambio
                </Button>
              </form>
            )}
          </Formik>
        </div>

        <Button className="w-40" size="small" variant="contained" color="error">
          Eliminar
        </Button>
        <Button
          className="w-40"
          size="small"
          variant="contained"
          color="inherit"
        >
          Deshabilitar
        </Button>
      </div>
    </div>
  );
};
