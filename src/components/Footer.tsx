// import { Container } from '@mui/material';
import { AppBar, Toolbar, Typography } from '@mui/material';


export default function Footer() {
  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0, backgroundColor: '#3e6a74', zIndex: 1 }}>
      <Toolbar>
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          &copy; {new Date().getFullYear()} Sensory Stages. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
      // <Container component="footer">
      //   <footer className="footer">
      //       { new Date().getFullYear() } Sensory Stages. All rights reserved.
      //   </footer>
      // </Container>
    )
  }