import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ContactHelp = () => {
  return(
    <Box className="account-info-container">
        <Accordion className="accordion-custom">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Pomoc / FAQ</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box className="account-info-form">
            <Typography>
            mail: help@mail.com
            </Typography>
            <Button className="edit-button" variant="contained">
                FAQ
            </Button>
        </Box>
        </AccordionDetails>
        </Accordion>
    </Box>
  );
}

export default ContactHelp;