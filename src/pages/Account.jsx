import { Box } from "@mui/material";
import AccountDeliveries from "../components/Account/AccountDeliveries";
import AccountInfo from "../components/Account/AccountInfo";
import WelcomeAccount from "../components/Account/WelcomeAccount";
import '../css/accountPage.css'
import ReportIssue from "../components/Account/ReportIssue";
import LogOut from "../components/Account/LogOut";
import ChangePassword from "../components/Account/ChangePassword";
import ContactHelp from "../components/Account/ContactHelp";

const Account = () => {
  return(
    <Box className='main-account-box'>
    <WelcomeAccount/>
    <AccountInfo/>
    <AccountDeliveries />
    <ChangePassword />
    <ContactHelp/>
    <ReportIssue/>
    <LogOut/>
    </Box>
  );
}

export default Account;