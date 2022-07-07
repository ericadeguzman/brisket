// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

// Styles
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/Styles";

// Material Icons
import Container from "@mui/material/Container";
import DrawerAppBar from "../Nav";
import { Box } from "@mui/system";
import { Typography } from '@mui/material';

function Contact() {
  const [state, handleSubmit] = useForm("mayvgjgz");
  if (state.succeeded) {
      return  (
        <ThemeProvider theme={theme}>
    <Container  maxWidth="lg">
      <Box mt={20}>
      <Typography variant="h4" component="h2">
        Thank you!
      </Typography>
      </Box>
      </Container>
      <DrawerAppBar />
      </ThemeProvider>
      );
  }
  return (
    <ThemeProvider theme={theme}>
    <Container  maxWidth="lg">
      <DrawerAppBar />
       <Box mt={10}>
       <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
   </Box>
    </Container>
  </ThemeProvider>
     
  );
}
export default Contact;
