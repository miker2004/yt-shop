import { Box, Button } from "@mui/material";

const LogOut = () => {

    return(
        <Box sx={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
            <Button variant="outlined">
                Wyloguj Się
            </Button>
        </Box>
    );
};

export default LogOut;