import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#EFD0D5',
    },
    secondary: {
      main: '#3e6a74',
        },
    info: {
      main: '#d7dbd6',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;