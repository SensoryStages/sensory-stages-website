// import { Link } from 'react-router-dom'
import {
  AppBar,
  Box,
  // Grid,
  Toolbar,
  Typography,
  Button,
  Container,
  // useTheme,
  // useMediaQuery
} from '@mui/material'
import DrawerComponent from './Drawer';
import originallogo from '../assets/originallogo.png'
// import smalllogo from '../assets/smalllogo.png'

import { Link } from 'react-router-dom';


export default function Header() {
    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" color='secondary'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Link to="/">
            <Box
              width={50}
              component='img'
              src={originallogo}
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
          </Link>
            <Typography
              variant="h6"
              noWrap
              // component="a"
              // href="/"
              align='center'
              sx={{
                // mr: 2,
                display: { xs: 'none', md: 'flex' },
                // fontFamily: 'monospace',
                fontWeight: 700,
                // letterSpacing: '.3rem',
                // color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Sensory Stages
            </Typography>
          <Link to='/'>
            <Box
              width={50}
              component='img'
              src={originallogo}
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
          </Link>
          <Typography
            variant="h5"
            noWrap
            // component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              // fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Sensory Stages
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'right'}}>
            <DrawerComponent />
          </ Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
            <Link to="/">
              <Button variant="contained" color="primary" sx={{ my: 2, display: 'block', mx: "2px" }}>
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="contained" color="primary" sx={{ my: 2, display: 'block', mx: "2px" }}>
                About
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="contained" color="primary" sx={{ my: 2, display: 'block', mx: "2px" }}>
                Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="contained" color="primary" sx={{ my: 2, display: 'block', mx: "2px" }}>
                Contact
              </Button>
            </Link>
            <Link to="/testimonials">
              <Button variant="contained" color="primary" sx={{ my: 2, display: 'block', mx: "2px" }}>
                Testimonials
              </Button>
            </Link>
          </Box>
        {/* <Grid container spacing={2}>
          <Grid item xs={3}>
            <Link to='/'>
            <Box component='img' src={originallogo} width='100%'>
            </Box>
            </Link>
            </Grid>
            <Grid item xs={7}>
            <Typography variant="h4">
            Sensory Stages
            </Typography>
            </Grid>
            {isMobile ? (
              <Grid item xs={2}>
              <DrawerComponent />
              </Grid>
              ) : (
                <Grid item xs={9}>
                <Button variant="contained" color="primary" href="/" sx={{ margin: "100" }}>
                Home
                </Button>
                <Button variant="contained" color="primary" href="/about" sx={{ margin: "100" }}>
                About
                </Button>
                <Button variant="contained" color="primary" href="/services" sx={{ margin: "100" }}>
                Services
                </Button>
                <Button variant="contained" color="primary" href="/contact" sx={{ margin: "100" }}>
                Contact
                </Button>
                <Button variant="contained" color="primary" href="/testimonials" sx={{ margin: "100", padding: "10" }}>
                Testimonials
                </Button>
                </Grid>
                )}
              </Grid> */}
      </Toolbar>
    </Container>
  </AppBar>
        // <nav className='header'>
        //     <Link to='/' className='site-title'>
        //         Sensory Stages
        //     </Link>
        //     <ul className='nav-buttons'>
        //         <Link to='/'>Home</Link>
        //         <Link to='/about'>About</Link>
        //         <Link to='/services'>Services</Link>
        //         <Link to='/contact'>Contact</Link>
        //         <Link to='/testimonials'>Testimonials</Link>
        //     </ul>
        // </nav>
    )
}