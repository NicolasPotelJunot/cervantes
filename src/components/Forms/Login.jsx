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
import { NavLink } from "react-router-dom";
import { Title } from "../commons/Title";

export const Login = () => {
  const [showPassword, setShowPassword] = useState();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-96 mx-auto h-screen flex flex-col justify-center">
      <Title text={"Iniciar Sesión"} />
      <Formik
        initialValues={{ email: "", password: "" }}
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
                // id="outlined-adornment-password"
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
            <Button variant="contained" type="submit">
              Ingresar
            </Button>
          </form>
        )}
      </Formik>

      <button className="my-5 underline hover:text-cyan-600 cursor-pointer">
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Registrarse
        </NavLink>
      </button>
    </div>
  );
};
