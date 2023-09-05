import littlegirl from '../assets/littlegirl.jpg';
import soundguy from '../assets/soundguy.jpg';
import boxoffice from '../assets/boxoffice.jpg';
import { Grid, Box, Typography } from '@mui/material';

export default function Services() {

  interface Service {
    id: number;
    title: string;
    description: string;
  }

  const services: Service[] = [
    {
      id: 1,
      title: 'Neurodiversity in the Theatre Workshop',
      description: 'An expert crafted curriculum helped developed and reviewed by neurodiversity professionals, psychologists, behavior analysts, diagnosticians, and DEI professionals. Tailored specifically for theatre companies and creative organizations, our sessions are designed to increase awareness and understanding of neurodivergent individuals in the performing arts.Through engaging activities and discussions, participants will learn how to create a more inclusive and supportive environment, both on and off the stage. We delve into practical strategies for casting neurodivergent actors, developing sensory-friendly performances, and fostering collaborations that harness the unique talents of all individuals. Can be conducted in person or virtually.',
    },
    {
      id: 2,
      title: 'Sensory-Friendly Performances',
      description: 'We work with theaters to design and implement sensory-friendly performances, making live theatre accessible and enjoyable for audiences with sensory processing differences.'
    },
    {
      id: 3,
      title: 'Accessibility and Inclusivity Audits',
      description: 'Our team performs thorough audits of theater spaces, practices, and policies to identify barriers and recommend modifications that enhance accessibility and inclusivity for neurodivergent individuals.'
    },
    {
      id: 4,
      title: 'Casting and Talent Development',
      description: 'We assist in casting neurodivergent actors and performers, helping theatre companies embrace a diverse range of talents and enriching their productions with authentic and unique perspectives.'
    },
    {
      id: 5,
      title: 'Creative Collaboration',
      description: 'Sensory Stages facilitates collaborations between neurodivergent artists, directors, and writers, promoting the creation of innovative and impactful theatrical works that challenge stereotypes and celebrate neurodiversity.'
    },
    {
      id: 6,
      title: 'Custom Social Story',
      description: 'We create a social story tailored to your specific company and performance to be sent out to patrons prior to the performance to help prepare them for the experience that could be unique and initially challenging for them.'
    },
  ];

  return (
    <Grid container spacing={2} marginBottom={4} sx={{ backgroundColor: '#3e6a74'}}>
       <Grid item xs={12} marginTop={5} textAlign='center' sx={{ backgroundColor: '#d7dbd6'}}>
        <Typography variant='h4'>Our Services</Typography>
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: '#d7dbd6'}}>
      <Typography variant='body1'  marginX={3} mb={2}>
        At Sensory Stages, we take pride in offering specialized sensory-friendly consulting services tailored to meet the unique needs of theaters. We understand that every theater and company is different, and that&apos;s why our pricing is variable, allowing us to create customized solutions that perfectly align with your theater&apos;s specific requirements.
        Our process begins with an in-depth consultation, during which we gain a comprehensive understanding of your theater&apos;s goals and challenges. By collaborating closely with you, we design a personalized package of services that addresses the specific sensory sensitivities and inclusivity enhancements your theater requires. Based on this evaluation, we will provide you with a detailed and transparent pricing proposal that reflects the services required to achieve your desired outcomes.
        Some of the services we offer, but are not limited to:
      </Typography>
      </Grid>
      <Grid xs={12} item margin={1}>
        <Box
          component='img'
          src={littlegirl}
          maxWidth='95vw'
        />
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: '#d7dbd6'}}>
        <Typography variant='h6' margin={2} textAlign='center'>{services[0].title}</Typography>
        <Typography variant='body2' mb={2} marginX={2}>{services[0].description}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: '#d7dbd6'}}>
        <Typography variant='h6' margin={2} textAlign='center'>{services[1].title}</Typography>
        <Typography variant='body2' mb={2} marginX={2}>{services[1].description}</Typography>
      </Grid>
      <Grid xs={12} item margin={1}>
        <Box
          component='img'
          src={soundguy}
          maxWidth='95vw'
        />
      </Grid>
      <Grid item xs={12} marginX={2}>
        <Typography variant='h6' textAlign='center' mb={2}>{services[2].title}</Typography>
        <Typography variant='body2'>{services[2].description}</Typography>
      </Grid>
      <Grid item xs={12} marginX={2}>
        <Typography variant='h6' textAlign='center' mb={2}>{services[3].title}</Typography>
        <Typography variant='body2'>{services[3].description}</Typography>
      </Grid>
      <Grid xs={12} item margin={1}>
        <Box
          component='img'
          src={boxoffice}
          maxWidth='95vw'
        />
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: '#d7dbd6'}}>
        <Typography variant='h6' textAlign='center' mb={2}>{services[4].title}</Typography>
        <Typography variant='body2' marginX={2} mb={3}>{services[4].description}</Typography>
      </Grid>
      <Grid item xs={12} mb={2} sx={{ backgroundColor: '#d7dbd6'}}>
        <Typography variant='h6' textAlign='center'>{services[5].title}</Typography>
        <Typography variant='body2' marginX={2} mb={3}>{services[5].description}</Typography>
      </Grid>
      </Grid>
  )
}