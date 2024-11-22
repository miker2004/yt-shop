import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Input, FormControl, InputLabel, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccountInfo = () => {
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <Box sx={{padding: "0 20px", marginTop: '20px',}}>
      <Accordion sx={{boxShadow: 10, border: 'solid 1px #999'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Moje Informacje</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '15px', 
          }}>
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
            <Button onClick={toggleEdit} sx={{mt: 2}} variant="contained">
              {isEditable ? 'Zapisz' : 'Edytuj'}
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccountInfo;
