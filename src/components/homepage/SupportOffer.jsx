import { Box, Typography, Link } from "@mui/material";

const SupportOffer = () => {
  return (
    <Box className="support-offer">
        <Typography variant="h4" component="h2" className="support-offer-title">
            Zostań wspierającym, aby zdobyć  
        </Typography>
        <Typography className="support-offer-bold">
            10% zniżki
        </Typography>
        <Link href='' underline="none" className="support-offer-link">
            DOŁĄCZ DO WSPIERAJĄCYCH
        </Link>
    </Box>
  );
};

export default SupportOffer;
