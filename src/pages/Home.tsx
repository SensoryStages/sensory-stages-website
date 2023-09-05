import spotlight from '../assets/spotlight.jpg';
import theaterbalcony from '../assets/theatrebalcony.jpg';
import {
  // Box,
  // Container,
  Grid,
  Typography,
  styled
} from '@mui/material';
// import theme from '../theme';

// const ParallaxBox = styled(Box)({
//     width: "100%",
//     height: `${window.innerHeight}px`,
//     position: "relative",
//     backgroundRepeat: "no-repeat",
//     backgroundAttachment: "fixed",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
// });

const ParallaxGrid = styled(Grid)({
  width: "100%",
  height: `${window.innerHeight}px`,
  position: "relative",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

// const ParallaxContainer = styled(Container)({
//   width: "100%",
//   height: `${window.innerHeight}px`,
//   position: "relative",
//   backgroundRepeat: "no-repeat",
//   backgroundAttachment: "fixed",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// });

export default function Home() {

  return (
    <div>
      <ParallaxGrid
        container
        sx={{ backgroundImage: `url(${spotlight})` }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          xs={12}
          item
          margin={3}
          // marginTop={15}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          borderRadius={2}
        >
          <Typography
            // margin={2}
            // variant={"h6"}
            sx={{
              textAlign: "center",
              fontSize: {
                xs: 16,
                sm: 20,
                md: 32,
              },
              margin: {
                xs: 2,
                sm: 3,
                md: 4,
              }
            }}
            color='white'>
            Current estimates show that 15%-20% of the population is considered to be neurodivergent, with 5%-15% of the general population experiencing sensory sensitivities affecting their ability to enjoy everyday opportunities.
            Many of these individuals immediately rule out live theatre as compatible to their needs.
          </Typography>
        </Grid>
      </ParallaxGrid>
      <Grid container spacing={1} sx={{ backgroundColor: '#d7dbd6'}}>
        <Grid item xs={12} margin={3}>
          <Typography variant='h5' textAlign='center' marginBottom={3}> Our Company</Typography>
          <Typography variant='h6'>
            Sensory Stages is a neurodivergent owned neurodiversity consulting firm for sensory-friendly services designed to create an inclusive and enjoyable theatre experience for all. From sensory-friendly performances to sensory sensitivity accommodating theatre spaces, we are committed to making live theatre a welcoming space for individuals&apos; diverse needs.
            With over 20 years of collective experience, Sensory Stages is a dedicated team of theatre professionals, neurodiversity advocates, and experts in the field of neurodiversity. Our collective experience and knowledge enables us to provide specialized consulting services that cater to the diverse needs of theatre companies, educational institutions, and creative organizations.
          </Typography>
        </Grid>
      </Grid>
      <ParallaxGrid
        container
        sx={{ backgroundImage: `url(${theaterbalcony})` }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          xs={12}
          item
          margin={3}
          // marginTop={15}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          textAlign='center'
          sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          borderRadius={2}
        >
          <Typography variant='h3' marginY={1} color='White' borderRadius={1}>Did You Know?</Typography>
          <Typography variant='h5' padding={1} marginY={1} color='White'>
            There are both national and state grants (depending on location) available for theater companies that provide sensory friendly productions? Let us help you navigate through the grant process to ensure you get the financial backing to help make your theater accessible for all. 
          </Typography>
        </Grid>
      </ParallaxGrid>
      {/* <Container disableGutters>
        <Box component='img' src={spotlight} maxWidth='92vw'>
        </Box>
      </Container>
      <Typography>
        Current estimates show that 15%-20% of the population is considered to be neurodivergent, with 5%-15% of the general population experiencing sensory sensitivities affecting their ability to enjoy everyday opportunities.
        Many of these individuals immediately rule out live theatre as compatible to their needs.
      </Typography> */}
      <Grid container spacing={1} sx={{ backgroundColor: '#d7dbd6'}}>
        <Grid item xs={12} margin={3}>
          <Typography variant='h5' textAlign='center' mb={2}> Our Services</Typography>
          <Typography variant='h6'>
            Using our expert crafted curriculum helped developed by years of collaboration with other sensory friendly experts, behavior analysts, diagnosticians, and other DEI professionals; we hope to make your organization a more inclusive place for all by providing:
            “Neurodiversity in the Theatre” Workshop
            Accessibility and Inclusivity Audits
            Neurodiverse Casting and Talent Development
            On-site Hands On Sensory Friendly Performance Consulting
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}