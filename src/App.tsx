import React from "react";

// Styles
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/Styles";
import { Typography } from "@mui/material";

// Material Icons
import Container from "@mui/material/Container";
import DrawerAppBar from "./Nav";
import { Box } from "@mui/system";

// import brisket_landscape from "./img/brisket_landscape.jpg";

function coinToss () {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  brisket: 'img/brisket_landscape.jpg',
  wrapped: 'img/brisket_wrapped.jpg'
};

const img = <img style={{width:"100%",}} src={pics[coinToss() === 'heads' ? 'brisket' : 'wrapped']} />;

const judgmental = Math.random() < 0.5;
const favoriteFoods = (
  <div>
   <Typography variant="h2" component="h2"> My Favorite Food</Typography>
    <ul>
      <li>Brisket</li>
      <li>Bacon</li>
      { !judgmental && <li>Pork Buttts and I can not lie</li> }
      <li>BBQ sauce</li>
    </ul>
  </div>
);

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
        {img}
       </Box>
       {/* <Box>
       {favoriteFoods}
       </Box> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
