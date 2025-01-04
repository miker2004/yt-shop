import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return(
    <Box  sx={{
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: '20px',
    }}>
      <Typography>
        NOTHIN'G TO SEE HERE 
      </Typography>
      <Link to="/">
        Home
      </Link>
    </Box>
  );
}

export default NotFound;