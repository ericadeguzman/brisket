import React from "react";

// Styles
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/Styles";
import { Typography } from "@mui/material";

// Material Icons
import Container from "@mui/material/Container";
import DrawerAppBar from "./Nav";
import { Box } from "@mui/system";

import brisket_landscape from "./img/brisket_landscape.jpg";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container  maxWidth="lg">
        <DrawerAppBar />
       <Box mt={10}>
       <Typography sx={{textAlign: "center", color: '#8A0108', fontSize: { xs: 44 , sm: 44, md: 44, lg: 44, }, lineHeight: .2,}} variant="h1" component="h1">
          Eat more </Typography>
       <Typography sx={{textAlign: "center", color: '#8A0108', fontSize: { xs: 84 , sm: 84, md: 84, lg: 144, },}} variant="h1" component="h1">
          Brisket</Typography>
       </Box>
       <Box my={4} display='flex' flexDirection='row' justifyContent='center'>
        <img style={{width:'100%',}}  src={brisket_landscape} />
       </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
