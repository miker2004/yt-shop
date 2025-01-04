import { Typography, Box } from "@mui/material";
import CheckroomTwoToneIcon from '@mui/icons-material/CheckroomTwoTone';
import BackpackTwoToneIcon from '@mui/icons-material/BackpackTwoTone';
import QuestionMarkTwoToneIcon from '@mui/icons-material/QuestionMarkTwoTone';
import { Link } from "react-router-dom";

const ProductType = () => {
  return (
    <Box className="product-type">
      {/* Ciuchy */}
      <Box className="product-type-box">
        <Link to="/products/id" className="product-type-link">
          <CheckroomTwoToneIcon color="primary" className="product-type-icon" />
          <Typography className="product-type-text">Ciuchy</Typography>
        </Link>
      </Box>

      {/* Akcesoria */}
      <Box className="product-type-box">
        <Link to="/products/id" className="product-type-link">
          <BackpackTwoToneIcon color="primary" className="product-type-icon" />
          <Typography className="product-type-text">Akcesoria</Typography>
        </Link>
      </Box>

      {/* Inne */}
      <Box className="product-type-box">
        <Link to="/products/id" className="product-type-link">
          <QuestionMarkTwoToneIcon color="primary" className="product-type-icon" />
          <Typography className="product-type-text">Inne</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default ProductType;
