import { Button, TextField } from "@mui/material";
import { Formik } from "formik";

export const AddProduct = () => {
  return (
    <div className="grid p-3 border-b-2">
      <Formik
        initialValues={{ price: "", description: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.price) {
            errors.price = "Campo requerido";
          }
          if (!values.description) {
            errors.description = "Campo requerido";
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
          <form onSubmit={handleSubmit} className="flex justify-between pr-9">
            <div className="flex gap-4">
              <TextField
                type="description"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                id="outlined-basic"
                label="Descripción"
                variant="filled"
                className="w-96"
              />
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
            </div>
            <Button
              className="w-40"
              size="small"
              variant="contained"
              type="submit"
            >
              Agregar
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
