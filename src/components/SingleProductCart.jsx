import { Box, Button, Typography } from "@mui/material";
import '../css/singleproduct.css'

const SingleProductCart = () => {
  return(
    <Box className="featured-products-box">
    <Box className="featured-products-img">Pencil IMG</Box>
    <Box className="featured-products-details">
      <Typography variant="h3" component="h2" className="featured-products-details-name">Pencil</Typography>
      <Typography variant="h4" component="h3">$6.99</Typography>
      <Button variant="contained" className="featured-products-button">Check Out</Button>
    </Box>
  </Box>
  );
}

export default SingleProductCart;