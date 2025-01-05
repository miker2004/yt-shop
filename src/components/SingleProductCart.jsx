import { Box, Button, Typography } from "@mui/material";
import "../css/singleproduct.css";
import { Link } from "react-router-dom";
import products from "../products.json";

const SingleProductCart = ({ limit }) => {
  const limitedProducts = limit ? products.products.slice(0, limit) : products.products;

  return (
    <Box className="featured-products-layout">
  {limitedProducts.map((product, index) => (
    <Box key={index} className="featured-products-box">
    <Box key={index} className="featured-products-item">
      <Box className="featured-products-img">
        {/* <img
          src={`path_to_image/${product.name.toLowerCase()}.jpg`}
          alt={product.name}
          className="product-image"
        /> */}
      </Box>
      <Box className="featured-products-details">
        <Typography
          component="h2"
          className="featured-products-details-name"
        >
          {product.name}
        </Typography>
        <Typography component="h3" className="product-price">
          ${product.price}
        </Typography>
        <Button
          variant="contained"
          className="featured-products-button"
          component={Link}
          to={`/products/${product.name
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          Check Out
        </Button>
      </Box>
    </Box>
    </Box>
  ))}
</Box>
  );
};

export default SingleProductCart;
