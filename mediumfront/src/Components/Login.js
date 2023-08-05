import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  CircularProgress,
  Grid,
} from "@mui/material";

const LoginContainer = styled("div")(({ theme }) => ({
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
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    console.log(data);
    if (response.ok) {
      localStorage.setItem("token", data.access_token);

      console.log(data.message);
      navigate("/userProfile");
    } else {
      alert(data.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <LoginContainer>
        <Typography variant="h4">Login</Typography>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="text"
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
          </Grid>
          <SubmitButton type="submit" variant="contained">
            Login
          </SubmitButton>
        </Form>
        <Box mt={2}>
          {/* Simulating login loader */}
          <CircularProgress />
        </Box>
      </LoginContainer>
    </Container>
  );
};

export default Login;
