import { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductInCart = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 20px",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          width: "310",
          height: "170px",
          border: "solid 1px #D1D1D1",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          boxShadow: 3,
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "20px",
              backgroundColor: "grey",
            }}
          ></Box>
          <Box>
            <Typography variant="h6" sx={{ marginBottom: "5px" }}>
              Product Name
            </Typography>
            <Typography variant="body1">Price</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
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
              onClick={decrementQuantity}
              disabled={quantity === 1}
              sx={{
                minWidth: "0px",
                height: "100%",
                borderRight: "1px solid #D1D1D1",
                borderRadius: 0,
                fontSize: "13px",
                fontWeight: "bold",
                color: quantity === 1 ? "#A9A9A9" : "black",
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
              {quantity}
            </Typography>
            <Button
              onClick={incrementQuantity}
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
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInCart;
