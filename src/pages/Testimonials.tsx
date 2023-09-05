import React from 'react';
import { Grid, Box, Container, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import theatrebalcony from '../assets/theatrebalcony.jpg';

const Testimonials: React.FC = () => {

  return (
    <Container
      disableGutters
      sx={{
        backgroundImage: `url(${theatrebalcony})`,
        width: "100%",
        height: `${window.innerHeight}px`,
        position: "relative",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box paddingY={3}>
        <Typography variant='h4' textAlign='center' color='white'>
          See what theaters have said about us:
        </Typography>
      </Box>
      <Grid container justifyContent='center' alignItems='center'>
        <Box justifyContent='center' alignItems='center'>
          <Card variant='outlined' sx={{backgroundColor: '#EFD0D5', width: '80vw', boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.5)'}}>
            <CardContent>
              <Typography variant='body1' fontSize={16}>
                "Sensory Stages has provided us with terrific, insightful service.
                They attend our performances in advance, paying close attention to all of the design and performance elements: entrances and exits, sound levels, lighting, costumes, props, and special effects, and considers them through the lens of their expertise.
                They then work very closely with our stage managers, casts and technicians to incorporate adjustments, and ensure that our sensory-friendly guests feel safe and supported enough to relax into the joy of our story."
              </Typography>
              <Typography fontStyle='italic'>
                -Elizabeth Keel, Stages&apos; Community Engagement Manager
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href='https://stageshouston.com/sensory-friendly/#:~:text=Sensory%2Dfriendly%20performances%20cater%20to,show%20and%20its%20dramatic%20elements'
                size='small'
                sx={{ color: '#3e6a74' }}>
                Learn More About Stages
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Container>
  );
};

export { Testimonials };