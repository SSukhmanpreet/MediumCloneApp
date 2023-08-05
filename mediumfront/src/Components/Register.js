import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  CircularProgress,
} from "@mui/material";

const RegisterContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(4),
}));

const Form = styled("form")(({ theme }) => ({
  width: "100%", // Set the width of the form to 100%
  marginTop: theme.spacing(2),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  "&:hover": {
    textDecoration: "underline",
  },
}));

const LoaderContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(3, 0),
}));

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    LastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send registration data to the backend
    const mockURL = `https://52e49f36-7a43-4897-8fc0-b87cb414e40b.mock.pstmn.io`;
    const response = await fetch(`${mockURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.status === 404 || !data) {
      console.log("error registering");
      alert(data);
    } else {
      console.log("Registered Successfully");
      navigate("/login");
    }
  };

  return (
    <Container maxWidth="xs">
      <RegisterContainer>
        <Typography variant="h4">Register</Typography>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <SubmitButton type="submit" variant="contained">
                Register
              </SubmitButton>
            </Grid>
          </Grid>
        </Form>
        <Box mt={2}>
          <LinkStyled to="/login">
            Already have an account? Sign in Instead
          </LinkStyled>
        </Box>
        {/* Simulating registration loader */}
        <LoaderContainer>
          <CircularProgress />
        </LoaderContainer>
      </RegisterContainer>
    </Container>
  );
};

export default Register;
