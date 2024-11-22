import { Box, Typography } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
// import Face3Icon from '@mui/icons-material/Face3';


const WelcomeAccount = () => {

    // const chosePFP = () =>{
    //     if(gender === man) {
    //         return <FaceIcon/>
    //     } else{
    //         <Face3Icon/>
    //     }
    // }

  return(
    <Box className="welcome-account-box">
        <FaceIcon className="account-pfp"/>
        <Typography variant="h4" element="h2">
            John Doe
        </Typography>
    </Box>
  );
}

export default WelcomeAccount;