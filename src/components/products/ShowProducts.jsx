import { Box } from "@mui/material";
import SingleProductCart from "../SingleProductCart";

const ShowProducts = () => {
  return(
    <Box className='show-product-box'>
        <SingleProductCart/>
        <SingleProductCart/>
        <SingleProductCart/>
        <SingleProductCart/>
        <SingleProductCart/>
        <SingleProductCart/>
        <SingleProductCart/>
    </Box>
  );
}

export default ShowProducts;