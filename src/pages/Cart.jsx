import { Box } from "@mui/material";
import CartInfo from "../components/cart/CartInfo";
import ProductInCart from "../components/cart/ProductInCart";

const Cart = () => {
  return(
    <Box sx={{marginBottom: '120px'}}>
        <CartInfo/>
        <ProductInCart/>
    </Box>
  );
}

export default Cart;