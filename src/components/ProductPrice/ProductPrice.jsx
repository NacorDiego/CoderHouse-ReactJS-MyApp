import { Typography, Paper } from '@mui/material';

function PriceCard( {price} ) {
    return (
        <Paper sx={{
            borderRadius: '0',
            borderStartEndRadius: '15px',
            display: 'inline-block',
            marginTop: '10px',
            backgroundColor: '#1976d2',
            paddingY: '10px',
            paddingX: '16px'}}>
            <Typography gutterBottom variant="h4" component="div" sx={{marginBottom: '0', color: '#ffffff'}}>
                ${price}
            </Typography>
        </Paper>
    );
}

export default PriceCard;