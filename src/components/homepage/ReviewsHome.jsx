import { Box, Rating, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ReviewsHome = () => {
    const value = Math.random() * (5 - 3) + 3;

    return (
        <Box className="reviews-home">
            <Typography variant="h2" component="h2" className="reviews-home-title">
                Opinie
            </Typography>
            <Box className="reviews-home-box">
                {[1, 2, 3].map((_, index) => (
                    <Box key={index} className="review-box">
                        <Box className="review-header">
                            <Box className="review-user">
                                <AccountCircleIcon className="review-user-icon"/>
                                <Typography className="review-user-name">
                                    {index === 0 ? "John" : index === 1 ? "Jane" : "Alex"}
                                </Typography>
                            </Box>
                            <Rating size="small" name={`rating-${index}`} value={value} readOnly precision={0.5} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                        </Box>
                        <Typography className="review-text">
                            {index === 0 ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit." : index === 1 ? "Earum nihil at quia explicabo iusto unde odit rerum perferendis!" : "Dolores tempore doloribus praesentium optio ea quibusdam voluptatem alias quae?"}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ReviewsHome;
