import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
        <CircularProgress color='secondary' />
    </Box>
  );
}

export default Spinner;
