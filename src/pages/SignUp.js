import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import pic from "../assets/body.jpg";



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    
      <Grid container component="main"  >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${pic})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'right',
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square sx={{background: "linear-gradient(0deg, #010B1B 10.9%,#102661 97.1%)"}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4" color={'white'}>
              Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1,width:'70%' }}>
            <TextField
                sx={{
                    input: {
                      color: 'white',
                      border:'1px solid',
                      borderRadius:'4px'
                    }}}
                margin="normal"
                required
                fullWidth
                id="nmae"
                placeholder='Name'
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
              sx={{
                input: {
                  color: 'white',
                  border:'1px solid',
                  borderRadius:'4px'
                }}}
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
              sx={{
                input: {
                  color: 'white',
                  border:'1px solid',
                  borderRadius:'4px'
                }}}
                margin="normal"
                required
                fullWidth
                id="phone"
                placeholder="Mobile Number"
                name="phone"
                autoComplete="phone"
                autoFocus
              />
              <TextField
              sx={{
                input: {
                  color: 'white',
                  border:'1px solid',
                  borderRadius:'4px'
                  
                }}}
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    
  );
}