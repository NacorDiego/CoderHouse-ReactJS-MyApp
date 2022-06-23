import { Box, Rating, Typography } from '@mui/material';
function ProductRating( {rating} ) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
            <Rating name="read-only" value={rating} precision={0.5} readOnly />
            <Typography variant="body1" component="span">
                ({rating})
            </Typography>
        </Box >
    );
}

export default ProductRating;