import React from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import useStyles from './Styles';
// import './Auth.css';

const Auth = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (if needed)
    console.log('Form submitted');
  };

  return (
    <div className={classes.pageContainer}>
    <div className={classes.background}></div>
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.submitButton} variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </div>
  );
};

export default Auth;
