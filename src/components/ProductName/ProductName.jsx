import { Typography } from '@mui/material';

function ProductName( {name} ) {
    return (
        <Typography gutterBottom variant="h4" component="div">
            {name}
        </Typography>
    );
}

export default ProductName;