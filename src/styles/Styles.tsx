import { createTheme } from '@mui/material/styles';


const theme = createTheme ({
    typography: {
      h1: {
        fontFamily: 'Source Serif Pro',
        fontWeight: '700',
      },
      button: {
        textTransform: 'none',
        fontWeight: '400',
      },
    },
    palette: {
      background: {
        default: "#fff",
      },
      primary: {
        light: '#00a6cf',
        main: '#8A0108',
        dark: '#00467E',
        contrastText: '#fff',
      },
      secondary: {
        light: '#C9C7C7',
        main: '#D98444',
        dark: '#4D4D4D',
        contrastText: '#fff',
      },
    },

});


export default theme;