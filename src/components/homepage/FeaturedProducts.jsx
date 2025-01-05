import { Box, Typography } from "@mui/material";
import SingleProductCart from "../SingleProductCart";

const FeaturedProducts = () => {

  return (
    <Box className="featured-products">
      <Typography component="h3" className="featured-products-title">
        BESTSELLERS
      </Typography>
          <SingleProductCart limit={3}/>
    </Box>
  );
};

export default FeaturedProducts;
