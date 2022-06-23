import { Button, Tooltip, Typography } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

function AddCartButton() {
    return (
        <Tooltip title="Add to cart">
            <Button size="small" variant="contained" sx={{
                marginLeft: '8px'
            }}>
                <ShoppingCart fontSize="small" />
                <Typography>
                    +
                </Typography>
            </Button>
        </Tooltip>
    );
}

export default AddCartButton;