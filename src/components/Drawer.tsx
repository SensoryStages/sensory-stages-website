import {
  Drawer,
  List,
  ListItem,
  // ListItemText,
  IconButton,
  Box,
  Button,
  Divider,
} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from "react-router-dom";
import { useState } from 'react';

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: '#3e6a74',
          },
        }}
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <Link to='/'>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <Box>
                <Button variant="text">Home</Button>
              </Box>
            </ListItem>
          </Link>

          <Divider role="presentation"/>

          <Link to='/about'>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <Box>
                  <Button variant="text">About</Button>
                </Box>
            </ListItem>
          </Link>

          <Divider role="presentation"/>

          <Link to='/services'>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <Box>
                  <Button variant="text" href="/services">Services</Button>
                </Box>
            </ListItem>
          </Link>

          <Divider role="presentation"/>

          <Link to='/contact'>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <Box>
                  <Button variant="text" href="/contact">Contact</Button>
                </Box>
            </ListItem>
          </Link>

          <Divider role="presentation"/>

          <Link to='/testimonials'>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <Box>
                  <Button variant="text" href="/testimonials">Testimonials</Button>
                </Box>
            </ListItem>
          </Link>

          {/* <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText >
              <Link to="/about">About</Link>
            </ListItemText>
          </ListItem> */}
          {/* <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact">Contact</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/services">Services</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/testimonials">Testimonials</Link>
            </ListItemText>
          </ListItem> */}
        </List>
      </Drawer>
      <IconButton size="large" onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;