import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccountDeliveries = () => {
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

  const handleRatingClick = (deliveryId) => {
    alert(`Ocena dla przesyłki ${deliveryId}`);
  };

  return (
    <Box sx={{ padding: "0 20px", marginTop: '20px' }}>
      <Accordion sx={{ boxShadow: 10, border: 'solid 1px #999' }}>
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
              <Accordion key={delivery.id} sx={{ boxShadow: 2, marginBottom: '10px' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${delivery.id}-content`}
                  id={`panel-${delivery.id}-header`}
                >
                  <Typography>Przesyłka ID: {delivery.id}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Typography variant="h6">Status: {delivery.status}</Typography>
                    {delivery.status === 'delivered' && (
                      <Button
                        onClick={() => handleRatingClick(delivery.id)}
                        variant="outlined"
                      >
                        Oceń przesyłkę
                      </Button>
                    )}

                    <Typography variant="h6">Zakupione przedmioty:</Typography>
                    {delivery.items.map((item, index) => (
                      <Typography key={index}>
                        {item.name} x{item.quantity} - {item.price} PLN
                      </Typography>
                    ))}
                    <Typography variant="h6">Łączna cena: {delivery.totalPrice} PLN</Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccountDeliveries;
