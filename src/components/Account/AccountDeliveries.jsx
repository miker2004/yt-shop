import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RateModal from '../RateModal';

const AccountDeliveries = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deliveries] = useState([
    {
      id: '123456',
      items: [
        { name: 'Koszulka', quantity: 2, price: 49.99 },
        { name: 'Czapka', quantity: 1, price: 19.99 }
      ],
      totalPrice: 119.97,
      status: 'delivered',
    },
    {
      id: '654321',
      items: [
        { name: 'Buty', quantity: 1, price: 150.00 },
        { name: 'Torba', quantity: 1, price: 80.00 }
      ],
      totalPrice: 230.00,
      status: 'shipped',
    }
  ]);

  return (
    <Box className="account-deliveries-container">
      <Accordion className="accordion-custom">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Informacje o przesyłkach</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {deliveries.map((delivery) => (
              <Accordion key={delivery.id} className="accordion-item">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${delivery.id}-content`}
                  id={`panel-${delivery.id}-header`}
                >
                  <Typography>Przesyłka ID: {delivery.id}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box className="accordion-details-container">
                    <Typography variant="h6" className="accordion-item-status">Status: {delivery.status}</Typography>
                    {delivery.status === 'delivered' && (
                      <Button
                        onClick={handleOpen}
                        variant="outlined"
                        className="modal-button"
                      >
                        Oceń przesyłkę
                      </Button>
                    )}

                    <Typography component="h2">Zakupione przedmioty:</Typography>
                    {delivery.items.map((item, index) => (
                      <Typography key={index}>
                        {item.name} x{item.quantity} - {item.price} PLN
                      </Typography>
                    ))}
                    <Typography component="h2" className="accordion-item-price">Łączna cena: {delivery.totalPrice} PLN</Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
      <RateModal open={open} onClose={handleClose} />
    </Box>
  );
};

export default AccountDeliveries;
