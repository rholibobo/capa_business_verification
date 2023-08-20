import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Email } from "@mui/icons-material";

import { Formik } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";

import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const resetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email")
    .max(255),
});

const initialValues = {
  email: "",
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

const ForgotPassword = () => {
    const navigate = useNavigate()

  const handleSubmit = (values) => {
    const { email } = values;

    sendPasswordResetEmail(auth, email)
      .then((data) => {
        alert("Check Email")
        navigate("/login")
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Box sx={{ width: "40%", margin: "2rem auto 0 auto" }}>
      <Box sx={{ marginBottom: "1rem" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold" }}
          color="#007FFF"
          gutterBottom
        >
          Forgot Password
        </Typography>
        <br />

        <Formik
          initialValues={initialValues}
          validationSchema={resetPasswordSchema}
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
              </InputFieldBox>

              <StyledSubmitButton type="submit">
                Reset Password
              </StyledSubmitButton>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
