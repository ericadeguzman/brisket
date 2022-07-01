import React from "react";
// Styles
import { ThemeProvider} from '@mui/material/styles';
import theme from "../styles/Styles";
// import "./App.css";
// Components
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Checkbox from '@mui/material/Checkbox';
import Icon from '@mui/material/Icon';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { makeStyles, Typography } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DrawerAppBar from "../Nav";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function BoilerPlate() {
  
  return (
    <ThemeProvider theme={theme}>
    <Container sx={{marginTop: 2, backgroundColor: 'white',}} maxWidth="lg"> 
    <DrawerAppBar />
    
    <Box my={2}>
    <Typography variant="h1">
     Header 1
    </Typography>
    <Typography variant="h2">
      Header 2
    </Typography>
    <Typography variant="h3">
      Header 3
    </Typography>
    <Typography variant="h4">
      Header 4
    </Typography>
    <Typography variant="h5">
      Header 5
    </Typography>
    <Typography variant="h6">
      Header 6
    </Typography>
    </Box>
    <Grid sx={{display: 'flex',}}>
    <Box>
    <Typography  variant="body1">Chips</Typography>
    <Stack spacing={1}>
    <Chip color="primary" icon={<MdPhone />} label="Primary" /> 
    <Chip color="secondary" icon={<MdPhone />} label="Secondary" />
    </Stack>    
    </Box>
    <Box mx={2}>
      <Typography  variant="body1">Switches</Typography>
    <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </Box>
    <Box mx={2}>
    <Typography>Form</Typography>
    <FormGroup sx={{display: 'flex',}}>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
    </Box>
    </Grid>
     
      <Box my={2}>
        <Typography variant="body1">
          Pagination
        </Typography>
      <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
      </Box>
    </Container>
    </ThemeProvider>
  );
}

export default BoilerPlate;
