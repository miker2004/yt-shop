import { Box, Button, Typography } from "@mui/material";

const CartInfo = () => {
  return(
    <Box sx={{
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: "center",
        padding: '0 20px'
    }}>
        <Typography>
            CENA
        </Typography>
        <Button variant="contained">
            Płatność (ilość )
        </Button>
    </Box>
  );
}

export default CartInfo;