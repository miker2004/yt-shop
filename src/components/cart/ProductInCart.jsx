import { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const ProductInCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product Name", price: "Price" },
  ]);

  const incrementQuantity = (id) => {};

  const decrementQuantity = (id) => {};

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
          <Typography variant="h6" color="textSecondary">
            Koszyk jest pusty
          </Typography>
        </Box>
      ) : (
        cartItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: "90%", // Zajmuje 90% szerokości rodzica
              maxWidth: "500px", // Maksymalna szerokość 500px
              height: "auto", // Automatyczna wysokość w zależności od zawartości
              border: "solid 1px #D1D1D1",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              boxShadow: 5,
              padding: "10px",
              marginBottom: "20px",
              transition: "transform 0.2s", // Animacja przy zmianie rozmiaru
              "&:hover": {
                transform: "scale(1.02)", // Powiększenie przy najechaniu
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                flexWrap: "wrap", // Umożliwia zawijanie elementów
              }}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "20px",
                  backgroundColor: "grey",
                  flexShrink: 0, // Zapobiega zmniejszaniu obrazu
                }}
              ></Box>
              <Box>
                <Typography variant="h6" sx={{ marginBottom: "5px" }}>
                  {item.name}
                </Typography>
                <Typography variant="body1">{item.price}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
                flexWrap: "wrap", // Responsywne zawijanie elementów
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
                  width: "100px",
                  height: "40px",
                  boxShadow: 2,
                }}
              >
                <Button
                  onClick={() => decrementQuantity(item.id)}
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
                  1
                </Typography>
                <Button
                  onClick={() => incrementQuantity(item.id)}
                  sx={{
                    minWidth: "20px",
                    height: "100%",
                    borderLeft: "1px solid #D1D1D1",
                    borderRadius: 0,
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "black",
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
