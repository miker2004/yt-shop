import { Box, Button, Link, Typography } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TikTokIcon from "../../assets/TikTokIcon";

const FollowMe = () => {
  return (
    <Box className="follow-me">
        <Box className="follow-me-text">
        <Typography variant="h2" component="h2" className="follow-me-title">
            Nie Przegap Nowości
        </Typography>
        <Typography variant="subtitle1" component="p">
            Zaobserwuj mnie
        </Typography>
        </Box>
        <Box className="follow-me-buttons">
        <Button variant="outlined" startIcon={<TikTokIcon color="blue" />}>
            <Link className="follow-me-link">TikTok</Link>
        </Button>
        <Button variant="outlined" startIcon={<YouTubeIcon color="blue" />}>
            <Link className="follow-me-link">YouTube</Link>
        </Button>
        </Box>
    </Box>
  );
};

export default FollowMe;
