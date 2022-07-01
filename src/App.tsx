import React from "react";

// Styles
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/Styles";
import { Typography } from "@mui/material";

// Material Icons
import Container from "@mui/material/Container";
import DrawerAppBar from "./Nav";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 4, backgroundColor: "white" }} maxWidth="lg">
        <DrawerAppBar />
        <Typography variant="h1" component="h1">BacooOon yum</Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
