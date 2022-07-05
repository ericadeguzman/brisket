import { createTheme } from '@mui/material/styles';


const theme = createTheme ({
    typography: {
      h1: {
        fontFamily: 'Bangers',
        letterSpacing: 4,
        color: '#8A0108',
      },
      h2: {
        fontFamily: 'Bangers',
        letterSpacing: 4,
        color: '#8A0108',
      },
      h3: {
        color: '#8A0108',
      },
      h4: {
        color: '#8A0108',
      },
      h5: {
        color: '#8A0108',
      },
      h6: {
        color: '#8A0108',
      },
      button: {
        textTransform: 'none',
        fontWeight: '400',
      },
    },
    palette: {
      background: {
        default: "#f7f0e8",
      },
      primary: {
        main: '#8A0108',
        contrastText: '#fff',
      },
      secondary: {
        light: '#C9C7C7',
        main: '#ff8da1',
        dark: '#4D4D4D',
        contrastText: '#fff',
      },
    },

});


export default theme;