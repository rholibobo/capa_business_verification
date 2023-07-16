import React, { useState } from "react";
import { Box, Button, FormHelperText, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import * as Yup from "yup";
import { Formik } from "formik";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email")
    .max(255),
  password: Yup.string()
    .max(255)
    .matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$", {
      message:
        "Password Must Contain Minimum eight characters,at least one upper case,one lower case letter , one digit and  one special character. example:Password12#",
    })
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const InputFieldBox = styled(Box)({
  marginBottom: "2rem",
});
const StyledSubmitButton = styled(Button)({
   backgroundColor: "#007FFF",
   width: "100%",
   color: "#ffffff",
   borderRadius: "10px",
   ":hover": {
    backgroundColor: "#008FFF"
   }
});

const Login = () => {

    const[showPassword, setShowPassword] = useState(false)

    const passwordVisibility = () => {
        setShowPassword((prev) => !prev)
    }

  return (
    <Box sx={{ width: "40%", margin: "2rem auto 0 auto" }}>
      <Box sx={{ marginBottom: "1rem" }}>
      <Typography variant="h5" sx={{fontWeight: "bold"}} color="#007FFF" gutterBottom>
          Welcome to CapaBusiness Verififcation
        </Typography>
        <Typography variant="body2" sx={{fontWeight: "bold"}} gutterBottom>
          Log into your account
        </Typography>
      </Box>

      <br />

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
        }) => (
          <form noValidate>
            
            <InputFieldBox>
              <TextField
                type="email"
                id="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email"
                placeholder="johndoe@gmail.com"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />{touched.email && errors.email && (
                <FormHelperText id="standard-weight-helper-text--register" error>
                  {errors.email}
                </FormHelperText>
              )}
            </InputFieldBox>
            <InputFieldBox>
              <TextField
                type={!showPassword ? "password" : "text"}
                id="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                label="Password"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                        <IconButton>
                        <Lock />
                        </IconButton>
                      
                    </InputAdornment>
                    
                  ),
                  endAdornment: (
                    <InputAdornment position="start">
                        <IconButton onClick={passwordVisibility}>
                            {!showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      
                    </InputAdornment>
                    
                  ),
                }}
              />{touched.password && errors.password && (
                <FormHelperText id="standard-weight-helper-text--register" error>
                  {errors.password}
                </FormHelperText>
              )}
            </InputFieldBox>
            <StyledSubmitButton >Login</StyledSubmitButton>

            <Box sx={{marginTop: "10px"}}>
            <Typography>Don't have an account? <Link to="/register">Signup</Link></Typography>
            </Box>
            
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
