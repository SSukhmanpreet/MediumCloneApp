import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
    // const [user, setUser] = useState({
    //     email: '',
    //     password: '',
    // });

    const navigate = useNavigate();
    const [errorSignIn, setErrorSignIn] = useState("");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = (event) => {
        event.preventDefault()
        console.log("onsubmit")
        fetch("http://127.0.0.1:3003/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user: { email: email, password: password }
            })
        })
            .then(response => {
                console.log("response");
                console.log(response);
                const authorizationHeader = response.headers.get('Authorization');
                console.log("authorization", authorizationHeader);
                if (authorizationHeader != null) {
                    localStorage.Authorization = authorizationHeader;
                    // props.setAuthorization(authorizationHeader);
                }

                return response.json()
            })
            .then(data => {
                console.log("data");
                console.log(data);
                if ('error' in data) {
                    setErrorSignIn(data.error);
                }
                else {
                    // SubmitProps.resetForm();
                    setEmail("");
                    setPassword("");
                    setErrorSignIn("");
                    alert(data.status.message);
                    navigate('/');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    // useEffect(async () => {
    // console.log("LOADED");
    // if(props.authorization!="")
    //     {
    //       console.log(props.authorization)
    //       navigate('/');
    //     }
    // if (localStorage.Authorization) {
    //     const response = await fetch(`/auth`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             Authorization: localStorage.Authorization,
    //         })
    //     })
    //     if (response.status === 200) {
    //         navigate('/userProfile');
    //     }
    // }
    // }, [props.authorization])
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        //   name="email"
                        autoComplete="email"
                        autoFocus
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        // name="password"
                        label="Password"
                        // type="password"
                        id="password"
                        autoComplete="current-password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errorSignIn != "" ? <div style={{color: "red"}} className='error'>{errorSignIn}</div> : null}
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        type="submit"
                        onClick={loginUser}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                        <Grid item>
                            <Link href="/UserSignUp" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}