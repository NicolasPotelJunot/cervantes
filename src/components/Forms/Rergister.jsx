import { useState } from "react";
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Formik } from "formik";
import { Title } from "../commons/Title";

export const Rergister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () =>
    setConfirmShowPassword((show) => !show);

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-96 mx-auto h-screen flex flex-col justify-center">
      <Title text={"Registrarse"} />
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          confirmpassword: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Campo requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Campo requerido";
          }

          if (!values.confirmpassword) {
            errors.confirmpassword = "Campo requerido";
          }

          if (!values.name) {
            errors.name = "Campo requerido";
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
              label="Nombre completo"
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

            <FormControl variant="filled">
              <InputLabel htmlFor="outlined-adornment-password">
                Contraseña
              </InputLabel>
              <FilledInput
                name="password"
                onChange={handleChange}
                value={values.password}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {errors.password && touched.password && errors.password}

            <FormControl variant="filled">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirmar contraseña
              </InputLabel>
              <FilledInput
                name="confirmpassword"
                onChange={handleChange}
                value={values.confirmpassword}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {errors.confirmpassword &&
              touched.confirmpassword &&
              errors.confirmpassword}

            <Button variant="contained" type="submit">
              Registrarse
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
