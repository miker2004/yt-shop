import { Typography, Box } from "@mui/material";
import CheckroomTwoToneIcon from '@mui/icons-material/CheckroomTwoTone';
import BackpackTwoToneIcon from '@mui/icons-material/BackpackTwoTone';
import QuestionMarkTwoToneIcon from '@mui/icons-material/QuestionMarkTwoTone';

const ProductType = () => {
  return (
    <Box className="product-type">
      <Box className="product-type-box">
        <CheckroomTwoToneIcon color="primary" className="product-type-icon" />
        <Typography className="product-type-text">Ciuchy</Typography>
      </Box>
      <Box className="product-type-box">
        <BackpackTwoToneIcon color="primary" className="product-type-icon" />
        <Typography className="product-type-text">Akcesoria</Typography>
      </Box>
      <Box className="product-type-box">
        <QuestionMarkTwoToneIcon color="primary" className="product-type-icon" />
        <Typography className="product-type-text">Inne</Typography>
      </Box>
    </Box>
  );
};

export default ProductType;
