// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

// Styles
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/Styles";

// Material Icons
import Container from "@mui/material/Container";
import DrawerAppBar from "../Nav";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

function Contact() {
  const [state, handleSubmit] = useForm("mayvgjgz");
  if (state.succeeded) {
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
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
      <Container maxWidth="lg">
        <DrawerAppBar />
        <Box mt={10}  display="flex" flexDirection='column'>
          <form onSubmit={handleSubmit}>
           <Box my={2}>
           {/* <label htmlFor="email">Email Address</label> */}
            {/* <input id="email" type="email" name="email" /> */}
            <TextField id="email" type="email" label="Email Address" variant="outlined" />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
           </Box>
           <Box my={2}>
           <TextField id="message" type="message" label="Message" multiline maxRows={4} />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
              </Box>
              <Box my={2}>
              <Button type="submit" disabled={state.submitting} variant="contained">Submit</Button>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default Contact;
