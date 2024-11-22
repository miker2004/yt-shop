import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, TextField, Button, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const ReportIssue = () => {
  const [issue, setIssue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (issue.trim() === "") {
      alert("Proszę opisać problem");
      return;
    }
    
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Zgłoszenie zostało wysłane!");
      setIssue("");
    }, 2000);
  };

  return (
    <Box className="account-info-container">
      <Accordion className="accordion-custom">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Zgłoś Błąd</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="account-info-form">
            <FormControl fullWidth variant="outlined">
              <TextField
                id="issue"
                label="W czym leży problem?"
                multiline
                rows={4}
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
              />
            </FormControl>
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wysyłanie..." : "Wyślij Zgłoszenie"}
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ReportIssue;
