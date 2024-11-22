import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Input, FormControl, InputLabel, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccountInfo = () => {
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <Box className="account-info-container">
      <Accordion className="accordion-custom">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Moje Informacje</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="account-info-form">
            <FormControl variant="standard">
              <InputLabel htmlFor="name">Imię</InputLabel>
              <Input id="name" defaultValue="John" disabled={!isEditable} />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="surname">Nazwisko</InputLabel>
              <Input id="surname" defaultValue="Doe" disabled={!isEditable} />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="email">Mail</InputLabel>
              <Input id="email" defaultValue="JohnDoe@mail.com" disabled={!isEditable} />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="address">Adres</InputLabel>
              <Input id="address" defaultValue="Street 17/10" disabled={!isEditable} />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="city">Miasto</InputLabel>
              <Input id="city" defaultValue="Warszawa" disabled={!isEditable} />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="zipcode">ZIP-Code</InputLabel>
              <Input id="zipcode" defaultValue="60-700" disabled={!isEditable} />
            </FormControl>
            <Button onClick={toggleEdit} className="edit-button" variant="contained">
              {isEditable ? 'Zapisz' : 'Edytuj'}
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccountInfo;
