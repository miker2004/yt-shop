import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, Input, InputLabel, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ChangePassword = () => {
  

  return(
    <Box className="account-info-container">
        <Accordion className="accordion-custom">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Zmień Hasło</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box className="account-info-form">
            <Typography>
            Wpisz Aktualne Hasło
            </Typography>
        <FormControl variant="standard" sx={{ width: '100%' }}>
              <InputLabel htmlFor="name">Hasło</InputLabel>
              <Input id="name" />
            </FormControl>
            <Typography sx={{margin: '20px 0 0 0'}}>
              Wpisz Nowe Hasło
            </Typography>
        <FormControl variant="standard" sx={{ width: '100%' }}>
              <InputLabel>Nowe hasło</InputLabel>
              <Input type="password" id="pass1"/>
            </FormControl>
        <FormControl variant="standard" sx={{ width: '100%' }}>
              <InputLabel>Powtórz</InputLabel>
              <Input type="password" id="pass2"/>
            </FormControl>
            <Button className="edit-button" variant="contained" >
                Zmień
            </Button>
        </Box>
        </AccordionDetails>
        </Accordion>
    </Box>
  );
}

export default ChangePassword;