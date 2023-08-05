import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Button, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const AddNewPost = () => {
    const [filename, setFileName] = useState("");
    const [currentUser, setCurrentUser] = useState({});
    const [newPost, setNewPost] = useState({
        title: "",
        topic: "",
        image: "",
        text: "",
        author: {},
    });
    const onChangeFile = (e) => {
        // console.log(e.target.files);
        setFileName(e.target.files[0]);
        readURL(e.target);
    };
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                const ele = document.getElementById('blah');
                ele.setAttribute('src', e.target.result);
                ele.setAttribute('width', '380px');
                ele.setAttribute('height', '380px');
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPost({ ...newPost, [name]: value });
    };

    //adding data to database
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!filename || filename == null) {
        //     alert('Please select an image of your product');
        //     return;
        // }

        if (!newPost.title || !newPost.text || !newPost.topic) {
            alert('Please input all details about the product');
            return;
        }
        const text = newPost.text;
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        setNewPost({ ...newPost, "author": currentUser, reading_time_mins: time })

        const postObj = { ...newPost, filename: filename };
        console.log(postObj);

        const mockURL = `https://7c5df6d5-e40e-40f9-bdd2-4e8319aa7075.mock.pstmn.io`;
        fetch(`${mockURL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            body: JSON.stringify(newPost),
            // body: JSON.stringify(postObj),
        }).then((response) => {
            if (response.status === 404) {
                console.log("error while pushing data to database");
            }
        }).then((data) => {
            console.log("data");
            console.log(data);
            alert("Created Post Successfully!");
            window.location.href = '/';
        })

    };
    // useEffect(async () => {
    //     if (localStorage.getItem('token') === "undefined") {
    //         alert("Please Sign In to continue");
    //         window.location.href = '/userlogin';
    //     }
    //     else {
    //         const givingToken = localStorage.getItem('token');
    //         // console.log(givingToken)
    //         const response = await fetch(`/auth`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 token: givingToken,
    //             })
    //         })
    //         const data = await response.json();
    //         console.log(data.message);
    //         if (response.status !== 200) {
    //             console.log(data.message);
    //             window.location.href = '/userLogin';
    //         }else{
    //              setCurrentUser(data);
    // }
    //     }
    // }, []);
    return (
        <>

            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <h1>Add Post</h1>
                    <form>
                        <div>
                            <TextField sx={{ margin: "20px 10px", width: "500px" }}
                                required
                                id="fullWidth"
                                label="Title"
                                variant="outlined"
                                type="text"
                                name="title"
                                value={newPost.title}
                                onChange={handleInputChange} />
                            <TextField sx={{ margin: "20px 10px", width: "500px" }}
                                required
                                id="fullWidth"
                                label="Topic"
                                variant="outlined"
                                type="text"
                                name="topic"
                                value={newPost.topic}
                                onChange={handleInputChange} />
                        </div>
                        <div>
                            <TextField sx={{ margin: "20px 10px", width: "500px" }} required id="fullWidth" label="Image" variant="outlined" type="text" name="image" value={newPost.image} onChange={handleInputChange} />
                            {/* <input type="file" name="image" onChange={onChangeFile} className='custom-file-input' />
                            <div className='uploadedImage' >
                                <img className='upldImg' id="blah" src="#" alt="YOUR UPLOADED IMAGE HERE" />
                            </div> */}
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="stretch"
                                spacing={2}
                                sx={{ margin: "20px 10px", width: "100%" }}
                            >
                                <TextareaAutosize maxRows={5} placeholder='Blog Body' minRows={3} required name="text" value={newPost.text} onChange={handleInputChange} id="fullWidth" label="Blog Body" variant="outlined" />
                            </Stack>
                        </div>
                        <Button sx={{ alignContent: "center" }} onClick={handleSubmit} variant="contained">Add Post</Button>
                    </form>

                </Paper>
            </Container>
        </>
    );
};

export default AddNewPost;










// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// export default function AddressForm() {
//     return (
//         <React.Fragment>
//             <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="firstName"
//                         name="firstName"
//                         label="First name"
//                         fullWidth
//                         autoComplete="given-name"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="lastName"
//                         name="lastName"
//                         label="Last name"
//                         fullWidth
//                         autoComplete="family-name"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <TextField
//                         required
//                         id="address1"
//                         name="address1"
//                         label="Address line 1"
//                         fullWidth
//                         autoComplete="shipping address-line1"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <TextField
//                         id="address2"
//                         name="address2"
//                         label="Address line 2"
//                         fullWidth
//                         autoComplete="shipping address-line2"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="city"
//                         name="city"
//                         label="City"
//                         fullWidth
//                         autoComplete="shipping address-level2"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         id="state"
//                         name="state"
//                         label="State/Province/Region"
//                         fullWidth
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="zip"
//                         name="zip"
//                         label="Zip / Postal code"
//                         fullWidth
//                         autoComplete="shipping postal-code"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="country"
//                         name="country"
//                         label="Country"
//                         fullWidth
//                         autoComplete="shipping country"
//                         variant="standard"
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <FormControlLabel
//                         control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
//                         label="Use this address for payment details"
//                     />
//                 </Grid>
//             </Grid>
//         </React.Fragment>
//     );
// }







// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Typography from '@mui/material/Typography';
// import AddressForm from './AddressForm';


// export default function Checkout() {
//     const [activeStep, setActiveStep] = React.useState(0);

//     const handleNext = () => {
//         setActiveStep(activeStep + 1);
//     };

//     const handleBack = () => {
//         setActiveStep(activeStep - 1);
//     };

//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <AppBar
//                 position="absolute"
//                 color="default"
//                 elevation={0}
//                 sx={{
//                     position: 'relative',
//                     borderBottom: (t) => `1px solid ${t.palette.divider}`,
//                 }}
//             >
//             </AppBar>
//             <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
//                 <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
//                     <Typography component="h1" variant="h4" align="center">
//                         Checkout
//                     </Typography>
//                     <React.Fragment>
//                         <AddressForm />;
//                     </React.Fragment>
//                 </Paper>
//             </Container>
//         </React.Fragment>
//     );
// }