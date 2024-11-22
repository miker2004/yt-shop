import { Box } from "@mui/material";
import AccountDeliveries from "../components/Account/AccountDeliveries";
import AccountInfo from "../components/Account/AccountInfo";
import WelcomeAccount from "../components/Account/WelcomeAccount";
import '../css/accountPage.css'

const Account = () => {
  return(
    <Box sx={{marginBottom: '100px'}}>
    <WelcomeAccount/>
    <AccountInfo/>
    <AccountDeliveries />
    </Box>
  );
}

export default Account;