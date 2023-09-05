import reedwalker from '../assets/reedwalker.jpg'
import rachelpetmecky from '../assets/rachelpetmecky.jpg';
import { Typography, Grid, Box, Card, CardContent } from '@mui/material';
import lightswithwhite from '../assets/lightswithwhite.jpg';

export default function About() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box component='img' src={lightswithwhite} width='100vw'>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: '#d7dbd6'}}>
        <Box>
          <Typography margin={2} variant='h6' textAlign='center'>
            Sensory Stages was created out of the necessity of lack of qualified experts providing neurodiversity trainings and sensory friendly experiences geared specifically for the theatre.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} justifyContent='center' sx={{ judstifyContent: 'center', backgroundColor: '#d7dbd6' }}>
        <Card sx={{ backgroundColor: "#3e6a74" }}>
          <CardContent>
            <Box
              component='img'
              maxWidth='90vw'
              width='100%'
              alt='Reed J Walker Headshot'
              src={reedwalker}
            /> 
          </CardContent> 
        </Card>
      </Grid>
      <Grid item xs={12} md={8} sx={{ backgroundColor: '#d7dbd6'}}>
        <Box justifyContent='center' marginX={2}>
          <Typography variant='h6' marginX={2} mb={1} textAlign='center'>
            Reed Walker - Co-Founder and President          </Typography>
          <Typography>
            As the co-founder and President of Sensory Stages, Reed is dedicated to transforming theatres into inclusive and sensory-friendly spaces.
            With over a decade of experience in the mental and behavioral health field, Reed brings a deep understanding of the needs and challenges faced by neurodivergent individuals with sensory sensitivities.
            Reed&apos;s connection to the theatre world runs deep.
            Having grown up in the theatre as an actor, Reed has a profound appreciation for the transformative power of the performing arts.
            Combining this passion for theatre and the arts with his extensive experience working with neurodivergent populations, Reed is committed to making live theatre accessible to all, ensuring every audience member, cast, and crew can fully embrace the magic of the stage.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} justifyContent='center' sx={{ judstifyContent: 'center', backgroundColor: '#d7dbd6'}}>
        <Card sx={{ backgroundColor: "#3e6a74" }}>
          <CardContent>
            <Box
              component='img'
              maxWidth='90vw'
              width='100%'
              alt='Rachel Petmecky Headshot'
              src={rachelpetmecky}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8} sx={{ backgroundColor: '#d7dbd6'}}>
        <Box>
          <Typography variant='h6' marginX={2} mb={3} textAlign='center'>
          Rachel Petmecky - Co-Founder and Director of Content and Education
          </Typography>
          <Typography marginX={2} mb={3}>
            Our Director of Content, Rachel Petmecky, has over 10 years of experience creating and overseeing a variety of specialized services for individuals with sensory needs.
            In the beginning of her career as a behavioral therapist, she began the process of learning objectively who, what, where, and how the environment can affect a person&apos;s ability to thrive. 
            Professionally, Rachel grew into roles that shifted from implementing protocols that set others up for success, to creating protocols and teaching therapists and families how to use these valuable tools.
            Rachel has accumulated a decade of experience in clinical treatment, diagnostic evaluations for autism, and has collaborated with various fields, ranging from occupational therapists to orientation and movement specialists, all of which included interpreting the environment and creating ways to better accommodate the sensory needs of others.
            Rachel&apos;s mission is to teach others how to create a more inclusive and accommodating experience for those affected by sensory sensitivities. Everyone deserves the opportunity to enjoy the wonder of live theater.
          </Typography>
        </Box>
      </Grid>  
    </Grid>
  )
}