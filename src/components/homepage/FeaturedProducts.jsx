import { Box, Typography } from "@mui/material";
import SingleProductCart from "../SingleProductCart";

const FeaturedProducts = () => {
  return (
    <Box className="featured-products">
      <Typography variant="h2" component="h3" className="featured-products-title">
        BESTSELLERS
      </Typography>
          <SingleProductCart/>
          <SingleProductCart/>
          <SingleProductCart/>
        </Box>
  );
};

export default FeaturedProducts;
