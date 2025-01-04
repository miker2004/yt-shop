import { Box, Button, Typography } from "@mui/material";

const FullProductPage = () => {
  return(
    <Box sx={
      {padding: '0, 10px',
      display: "flex",
      flexDirection: "column",
    }}>
        <Box sx={{
          backgroundColor: '#9999', 
          width: '100%',
          height: '300px',
        }}
          >
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: '20px',
            alignItems: 'center',
            marginTop:'30px',
          }}>
          <Typography>
              Product Name
            </Typography>
            <Typography>
              Price
            </Typography>
            <Button variant="outlined">
              ADD TO CART            </Button>
          </Box>
          </Box>
  );
}

export default FullProductPage;