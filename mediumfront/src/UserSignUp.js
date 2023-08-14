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

export default function UserSignUp() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [errorSignUp, setErrorSignUp] = useState('');

    const registerUser = async (event) => {
        event.preventDefault();
        console.log("onsubmit");
        try {
            if (!username || !email || !password || !passwordRepeat) {
                setErrorSignUp('All fields are required');
                return;
            }

            if (password !== passwordRepeat) {
                setErrorSignUp('Passwords do not match');
                return;
            }

            const response = await fetch('http://127.0.0.1:3003/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    user: { username, email, password },
                }),
            });

            const authorizationHeader = response.headers.get('Authorization');

            if (authorizationHeader !== null) {
                localStorage.Authorization = authorizationHeader;
                //   props.setAuthorization(authorizationHeader);
            }

            const data = await response.json();

            if (data.status && data.status.code === 200) {
                setUsername('');
                setEmail('');
                setPassword('');
                setPasswordRepeat('');
                setErrorSignUp('');
                console.log("user created successfully");
                alert(data.status.message);
                window.location.href='/'
            } else {
                setErrorSignUp(data.status ? data.status.message : 'An error occurred');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
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
                    Sign up
                </Typography>
                <Box component="form" sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                // name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                type="text"
                                name="first_name"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                // name="lastName"
                                autoComplete="family-name"
                                type="text"
                                name="last_name"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="userName"
                                label="User Name"
                                // name="email"
                                autoComplete="email"
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                // name="email"
                                autoComplete="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                // name="password"
                                label="Password"
                                // type="password"
                                id="password"
                                autoComplete="new-password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                // name="password"
                                label="Confirm Password"
                                // type="password"
                                id="password"
                                autoComplete="new-password"
                                type="password"
                                name="password"
                                value={passwordRepeat}
                                onChange={(e) => setPasswordRepeat(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    {errorSignUp ? <div style={{color: "red"}}className='error'>{errorSignUp+"."}</div> : null}
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        type='submit'
                        onClick={registerUser}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/UserLogin" variant="body2">
                                Already have an account? Sign in Instead
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}