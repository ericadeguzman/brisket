import React from "react";

// Styles
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles, Typography } from "@mui/material";
import DrawerAppBar from "../Nav";

// Components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import theme from "../styles/Styles";

function About() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 2, backgroundColor: "white" }} maxWidth="lg">
        <DrawerAppBar />
        <Box my={2}>
          <Typography variant="h1">About</Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default About;
