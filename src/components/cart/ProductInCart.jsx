import { useState } from "react";
import { Box, Typography, Button, IconButton, colors } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

const ProductInCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product Name1", price: '200$', quantity: 2 },
    { id: 2, name: "Product Name2", price: '1000$', quantity: 1 },
  ]);

const handleIncrease = (id) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id && item.quantity < 10 
        ? {...item, quantity: item.quantity + 1} 
        : item
    )
  );
}

const handleDecrease = (id) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};

const removeItemFromCart = (id) => {
  setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
        marginTop: "50px",
      }}
    >
      {cartItems.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <ShoppingBasketIcon
            sx={{ fontSize: 60, color: "#D1D1D1", marginBottom: "10px" }}
          />
          <Typography component="h2" color="textSecondary">
            Koszyk jest pusty
          </Typography>
        </Box>
      ) : (
        cartItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: "90%", 
              maxWidth: "500px",
              height: "auto", 
              border: "solid 1px #D1D1D1",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              boxShadow: 5,
              padding: "10px",
              marginBottom: "20px",
              transition: "transform 0.2s", 
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                flexWrap: "wrap", 
              }}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "20px",
                  backgroundColor: "grey",
                  flexShrink: 0, 
                }}
              ></Box>
              <Box>
                <Typography component={Link} to='/products/id' sx={{ marginBottom: "5px", textDecoration: 'none', color: 'black', }}>
                  {item.name}
                </Typography>
                <Typography component="h4" sx={{color: '#999'}}>{item.price}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
                flexWrap: "wrap", 
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #D1D1D1",
                  borderRadius: "20px",
                  overflow: "hidden",
                  padding: '0 10px',
                  height: "40px",
                  boxShadow: 2,
                }}
              >
                <Button
                  onClick={() => handleDecrease(item.id)}
                  sx={{
                    minWidth: "0px",
                    height: "100%",
                    borderRight: "1px solid #D1D1D1",
                    borderRadius: 0,
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  aria-label="Decrement quantity"
                >
                  -
                </Button>
                <Typography
                  sx={{
                    width: "40px",
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                {item.quantity}
                </Typography>
                <Button
                onClick={() => handleIncrease(item.id)}
                sx={{
                  minWidth: "20px",
                  height: "100%",
                  borderLeft: "1px solid #D1D1D1",
                  borderRadius: 0,
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "black",
                  margin: 0
                }}
                aria-label="Increment quantity"
              >
                +
              </Button>
              </Box>
              <IconButton
                color="primary"
                sx={{ marginLeft: "10px" }}
                aria-label="Delete product"
                onClick={() => removeItemFromCart(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default ProductInCart;
