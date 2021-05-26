import React, { useEffect, useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import classes from "./Register.module.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

async function register(e) {
  e.preventDefault();

  try{
    const registerData = {
      email, password, passwordVerify
    };

    console.log("success");
    await axios.post("http://localhost:5000/auth/", registerData, {
      withCredentials: true
    });
  }
  catch(err){
    console.error(err);
  }
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit ={register} >

            <input type="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Password verification" onChange={(e) => setPasswordVerify(e.target.value)} />
        </form>
        <button className={classes.submit} type="submit"> Sign Up </button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

// <input type="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
//   <input type="surname" placeholder="Surname" onChange={(e) => setSurname(e.target.value)} />


            // <Grid item xs={12}>
            //   <TextField
            //     variant="outlined"
            //     required
            //     fullWidth
            //     name="verifypassword"
            //     label="Verify Password"
            //     type="password"
            //     id="password"
            //       onChange={(e) => setPassword(e.target.value)}
            //     autoComplete="current-password"
            //   />
            // </Grid>

// <Grid item xs={12} sm={6}>
//   <TextField
//     autoComplete="fname"
//     name="firstName"
//     variant="outlined"
//     required
//     fullWidth
//     id="firstName"
//     label="First Name"
//     autoFocus
//
//   />
// </Grid>
            //
            // <Grid item xs={12} sm={6}>
            //   <TextField
            //     variant="outlined"
            //     required
            //     fullWidth
            //     id="lastName"
            //     label="Last Name"
            //     name="lastName"
            //     autoComplete="lname"
            //   />
            // </Grid>

            // <TextField
            //   variant="outlined"
            //   required
            //   fullWidth
            //   id="email"
            //   label="Email Address"
            //   name="email"
            //   autoComplete="email"
            //
            // />

            // <Grid item xs={12}>
            //   <TextField
            //     variant="outlined"
            //     required
            //     fullWidth
            //     name="password"
            //     label="Password"
            //     type="password"
            //     id="password"
            //     onChange={(e) => setPasswordVerify(e.target.value)}
            //     autoComplete="current-password"
            //   />
            // </Grid>
