import { Box, Typography, Link } from "@mui/material";

const SupportOffer = () => {
  return (
    <Box className="support-offer">
      <Typography variant="h4" component="h2" className="support-offer-title">
        Zostań wspierającym, aby zdobyć{" "}
        <span style={{ fontWeight: "bold" }}>10% zniżki</span>.{" "}
        <Link href="" underline="none" className="support-offer-link">
          DOŁĄCZ DO WSPIERAJĄCYCH
        </Link>
      </Typography>
    </Box>
  );
};

export default SupportOffer;
