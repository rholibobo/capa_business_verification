import React, { useState } from "react";
import {
  Box,
  Button,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  Email,
  Person,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import * as Yup from "yup";
import { Formik } from "formik";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

const registerSchema = Yup.object().shape({
  name: Yup.string().min(2).max(200).required("First Name is required!"),
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
  name: "",
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
    backgroundColor: "#008FFF",
  },
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const passwordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (values) => {
    const { email, password, name } = values;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser).then(() => {
          alert("Email Verification Link Sent");
        });
        updateProfile(userCredential.user, {
          displayName: name,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box className="w-full h-screen flex justify-center items-center">
      <div className="w-[95%] md:w-[40%] my-0 mx-auto border border-blue-300 border-solid py-8 px-4 rounded-md">
        <Box sx={{ marginBottom: "1rem" }}>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: "bold" }}
            color="#007FFF"
            gutterBottom
          >
            CapaBusiness Verification
          </Typography>
          <Typography variant="body2" align="center" sx={{ fontWeight: "bold" }} gutterBottom>
            Register your account
          </Typography>
        </Box>

        <br />

        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false);
            handleSubmit(values);
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
            <form noValidate onSubmit={handleSubmit}>
              <InputFieldBox>
                <TextField
                  type="name"
                  id="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Name"
                  placeholder="John Doe"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                />
                {touched.name && errors.name && (
                  <FormHelperText
                    id="standard-weight-helper-text--register"
                    error
                  >
                    {errors.name}
                  </FormHelperText>
                )}
              </InputFieldBox>
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
                />
                {touched.email && errors.email && (
                  <FormHelperText
                    id="standard-weight-helper-text--register"
                    error
                  >
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
                />
                {touched.password && errors.password && (
                  <FormHelperText
                    id="standard-weight-helper-text--register"
                    error
                  >
                    {errors.password}
                  </FormHelperText>
                )}
              </InputFieldBox>
              <StyledSubmitButton type="submit">Sign Up</StyledSubmitButton>

              <Box sx={{ marginTop: "10px" }}>
                <Typography variant="body2" gutterBottom>
                  Already registered? <Link to="/login">Login</Link>
                </Typography>
              </Box>
            </form>
          )}
        </Formik>
      </div>
    </Box>
  );
};

export default Register;
