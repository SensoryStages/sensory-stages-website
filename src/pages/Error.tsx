// import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import lego404 from '../assets/lego404.jpg';

export default function ErrorPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h6" margin={2} textAlign='center'>
              The page you&apos;re looking for doesn&apos;t exist.
            </Typography>
            <Grid item xs={12} display='flex' sx={{ justifyContent: 'center', alignItems: 'center'}}>
              <Link to="/">
                <Button variant="contained">Back Home</Button>
              </Link>
            </Grid>
          </Grid>
          <Grid xs={12}>
            <img
              src={lego404}
              alt="404"
              width="100%" height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}